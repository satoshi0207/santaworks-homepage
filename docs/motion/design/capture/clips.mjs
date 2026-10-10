// 見本帳の各デモを、ヘッドレス Chrome で操作しながら録画して mp4 にする（Claude Design のカード用）
// 使い方: node docs/motion/design/capture/clips.mjs [id ...]（省略で41本全部）→ public/motion/media/clips/<id>.mp4 と <id>.webp（一覧カードの動画と poster）
// 前提: 見本帳が :8925 で配られていること・google-chrome と ffmpeg があること
import { spawn, execFileSync } from 'node:child_process';
import fs from 'node:fs';

const HERE = new URL('./', import.meta.url).pathname;
const WORK = (await import('node:os')).tmpdir() + '/motion-capture/'; // コマ・Chrome のプロフィールの置き場（リポジトリの外）
const OUT = HERE + '../../../../public/motion/media/clips/'; // 一覧カードがこのまま読む
const BASE = 'http://100.80.244.15:8925/demos/';
const W = 640, H = 400, DPR = 1.5; // 小さめの画面を1.5倍で撮る＝カードに縮めても中身が読める大きさ（出力 960×600）
fs.mkdirSync(OUT, { recursive: true });

const PORT = 9800 + Math.floor(Math.random() * 90);
const chrome = spawn('google-chrome', ['--headless=new', '--remote-debugging-port=' + PORT, '--user-data-dir=' + WORK + 'profile',
  '--no-first-run', '--hide-scrollbars', '--autoplay-policy=no-user-gesture-required', '--enable-unsafe-swiftshader', '--use-angle=swiftshader',
  '--window-size=960,600', '--blink-settings=primaryPointerType=4,availablePointerTypes=4,primaryHoverType=2,availableHoverTypes=2', 'about:blank'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const list = await (await fetch('http://127.0.0.1:' + PORT + '/json')).json();
const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => ws.onopen = r);
let seq = 0; const pend = new Map(); const handlers = {};
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); }
  else if (d.method && handlers[d.method]) handlers[d.method](d.params);
};
const send = (method, params = {}) => new Promise((r) => { const i = ++seq; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ev = async (expr) => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: DPR, mobile: false });
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'light' }, { name: 'prefers-reduced-motion', value: 'no-preference' }, { name: 'hover', value: 'hover' }, { name: 'pointer', value: 'fine' }, { name: 'any-hover', value: 'hover' }, { name: 'any-pointer', value: 'fine' }] });
// 見本帳用のヒント文（DEMO · …）は絵に要らないので隠す。ページ内でスクロールを滑らかに動かす道具も入れておく
await send('Page.addScriptToEvaluateOnNewDocument', { source: `
  document.addEventListener('DOMContentLoaded', () => {
    const s = document.createElement('style');
    s.textContent = '.lab-hint{visibility:hidden!important} html{scroll-behavior:auto!important}' + (window.__extraCss || '');
    document.head.append(s);
    // #ptr のときは、録画に映らないマウスの代わりに矢印を描く（操作で動く効果だと伝わるように）
    if (location.hash === '#ptr') {
      const p = document.createElement('div');
      p.innerHTML = '<svg width="22" height="26" viewBox="0 0 22 26"><path d="M2 2 L2 21 L7 16.5 L10.5 24 L14 22.5 L10.5 15 L17 15 Z" fill="#fff" stroke="#24262e" stroke-width="1.6" stroke-linejoin="round"/></svg>';
      p.style.cssText = 'position:fixed;left:0;top:0;z-index:2147483647;pointer-events:none;transform:translate(-200px,-200px);filter:drop-shadow(0 2px 3px rgba(0,0,0,.3))';
      document.documentElement.append(p);
      addEventListener('pointermove', (e) => { p.style.transform = 'translate(' + (e.clientX - 2) + 'px,' + (e.clientY - 2) + 'px)'; }, true);
      addEventListener('pointerdown', () => { p.firstChild.style.transform = 'scale(.85)'; }, true);
      addEventListener('pointerup', () => { p.firstChild.style.transform = ''; }, true);
    }
  });
  window.__scroll = (to, ms) => new Promise((done) => {
    const el = document.scrollingElement, from = el.scrollTop, max = el.scrollHeight - innerHeight;
    const goal = to <= 1.0001 && to >= 0 && !Number.isInteger(to) ? to * max : (to === 1 ? max : to);
    const t0 = performance.now();
    const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (now) => {
      const t = Math.min(1, (now - t0) / ms);
      el.scrollTop = from + (goal - from) * ease(t);
      t < 1 ? requestAnimationFrame(step) : done();
    };
    requestAnimationFrame(step);
  });
` });

// '.card@2' は「.card の3つ目」
const center = async (sel, fx = 0.5, fy = 0.5) => ev(`(() => { const [s, n] = ${JSON.stringify(sel)}.split('@'); const r = document.querySelectorAll(s)[Number(n || 0)].getBoundingClientRect(); return [r.left + r.width * ${fx}, r.top + r.height * ${fy}]; })()`);
const pt = async (p) => typeof p[0] === 'string' ? center(...p) : [p[0] * W, p[1] * H];
const mouseTo = (x, y, buttons = 0) => send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, buttons, button: buttons ? 'left' : 'none' });
let mouse = [W * 0.95, H * 0.95];

const tag = (fn) => Object.assign(fn, { mouse: true });
// 道具：時刻 t（ミリ秒）にやること
const A = {
  scroll: (to, ms) => () => ev(`window.__scroll(${to}, ${ms})`),
  // path: [[fx, fy] | [selector, fx, fy], ...] を ms かけてなぞる
  move: (path, ms, drag = false) => tag(async () => {
    const pts = [mouse];
    for (const p of path) pts.push(await pt(p));
    if (drag) await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: pts[0][0], y: pts[0][1], button: 'left', clickCount: 1, buttons: 1 });
    const segs = pts.length - 1, t0 = Date.now();
    for (;;) {
      const t = Math.min(1, (Date.now() - t0) / ms);
      const f = t * segs, i = Math.min(segs - 1, Math.floor(f)), u = f - i;
      const e = u * u * (3 - 2 * u);
      const x = pts[i][0] + (pts[i + 1][0] - pts[i][0]) * e, y = pts[i][1] + (pts[i + 1][1] - pts[i][1]) * e;
      mouse = [x, y];
      await mouseTo(x, y, drag ? 1 : 0);
      if (t >= 1) break;
      await sleep(16);
    }
    if (drag) await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: mouse[0], y: mouse[1], button: 'left', clickCount: 1 });
  }),
  click: (sel, fx = 0.5, fy = 0.5) => tag(async () => {
    // その場に飛ばず、少し手前から寄っていく（矢印が見えるように）
    const [x, y] = await center(sel, fx, fy);
    const [x0, y0] = mouse;
    for (let i = 1; i <= 12; i++) { const u = i / 12, e = u * u * (3 - 2 * u); await mouseTo(x0 + (x - x0) * e, y0 + (y - y0) * e); await sleep(16); }
    mouse = [x, y];
    await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1, buttons: 1 });
    await sleep(60);
    await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });
  }),
  wheel: (dy, x = 0.5, y = 0.5) => () => send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: x * W, y: y * H, deltaX: 0, deltaY: dy }),
  key: (key, code = key) => async () => {
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key, code, windowsVirtualKeyCode: key === 'Escape' ? 27 : 0 });
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key, code, windowsVirtualKeyCode: key === 'Escape' ? 27 : 0 });
  },
  js: (expr) => () => ev(expr),
};

// 効果ごとの撮り方。fromLoad: 読み込みの瞬間から撮る／wait: 撮り始める前に待つ／prep: 撮る前にやること／rate: 再生速度
const PLANS = {
  fade:      { file: 'fade-js', acts: [[150, A.scroll(0.62, 1700)]] },
  parallax:  { file: 'parallax', acts: [[100, A.scroll(1, 2800)]] },
  pin:       { file: 'pin-css', acts: [[100, A.scroll(0.86, 2800)]] },
  hscroll:   { file: 'hscroll-css', acts: [[100, A.scroll(0.86, 2800)]] },
  video:     { file: 'video', acts: [[100, A.scroll(0.86, 2800)]] },
  header:    { file: 'header', acts: [[150, A.scroll(0.35, 1300)], [1900, A.scroll(0.25, 600)]] },
  maskreveal:{ file: 'maskreveal', acts: [[100, A.scroll(0.5, 700)]] },
  progress:  { file: 'progress', acts: [[100, A.scroll(1, 2800)]] },
  bgcolor:   { file: 'bgcolor', acts: [[100, A.scroll(1, 2800)]] },
  textfill:  { file: 'textfill', acts: [[100, A.scroll(1, 2800)]] },
  zoom:      { file: 'zoom', acts: [[100, A.scroll(0.72, 2700)]] },
  snap:      { file: 'snap', acts: [[300, A.wheel(420)], [1650, A.wheel(420)]] },
  magnet:    { file: 'magnet', acts: [[0, A.move([['.magnet', 1.6, 2.4], ['.magnet', 0.95, 0.15], ['.magnet', 0.05, 0.2], ['.magnet', 0.1, 0.9], ['.magnet', 0.9, 0.85], ['.magnet', 1.8, 2.6]], 2900)]] },
  tilt:      { file: 'tilt', acts: [[0, A.move([['.card', 0.1, 0.2], ['.card', 0.9, 0.8], ['.card@1', 0.2, 0.2], ['.card@1', 0.85, 0.85], ['.card@2', 0.5, 0.15]], 2900)]] },
  cursor:    { file: 'cursor', acts: [[0, A.move([[0.3, 0.3], ['.start'], ['.card'], ['.card@1'], [0.7, 0.3]], 2900)]] },
  hoverimg:  { file: 'hoverimg', acts: [[0, A.move([['.row', 0.3, 0.5], ['.row@1', 0.5, 0.5], ['.row@2', 0.4, 0.5], ['.row@3', 0.6, 0.5]], 2900)]] },
  mparallax: { file: 'mparallax', acts: [[0, A.move([[0.2, 0.3], [0.8, 0.25], [0.85, 0.75], [0.15, 0.7], [0.5, 0.5]], 2900)]] },
  chars:     { file: 'chars', fromLoad: true, dur: 2200 },
  count:     { file: 'count', acts: [[100, A.scroll(1, 700)]] },
  marquee:   { file: 'marquee' },
  typing:    { file: 'typing' },
  lines:     { file: 'lines', fromLoad: true },
  draw:      { file: 'draw', fromLoad: true, dur: 4500 },
  lottie:    { file: 'lottie' },
  morph:     { file: 'morph', rate: 3 },
  vt:        { file: 'vt', acts: [[300, A.click('.card@1')], [2000, A.click('dialog button, .detail button, main button:not(.card)')]], dur: 3400 },
  loading:   { file: 'loading', fromLoad: true, dur: 3600 },
  bgvideo:   { file: 'bgvideo' },
  slider:    { file: 'slider-swiper', acts: [[300, A.click('.swiper-button-next')], [1700, A.click('.swiper-button-next')]] },
  hover:     { file: 'hover', acts: [[0, A.move([['.fx-fill'], ['.fx-line'], ['.fx-arrow'], ['.fx-zoom']], 2900)]] },
  hamburger: { file: 'hamburger', acts: [[300, A.click('.all')], [1700, A.click('.all')]] },
  fullmenu:  { file: 'fullmenu', acts: [[300, A.click('.menu-btn')]] },
  accordion: { file: 'accordion-js', acts: [[300, A.click('.acc-btn@1')]] },
  lightbox:  { file: 'lightbox', acts: [[300, A.click('.thumb')], [2300, A.key('Escape')]], dur: 3400 },
  micro:     { file: 'micro', acts: [[200, A.click('.like')], [900, A.click('.send')], [2100, A.click('.switch')]] },
  skeleton:  { file: 'skeleton', fromLoad: true, dur: 3600 },
  particles: { file: 'particles', wait: 2500 },
  wave:      { file: 'wave', wait: 2500, acts: [[0, A.move([[0.3, 0.4], [0.6, 0.5], [0.45, 0.7], [0.55, 0.35]], 2900)]] },
  model:     { file: 'model', wait: 2500, start: [640 * 0.3, 400 * 0.5], acts: [[300, A.move([[0.7, 0.52]], 1500, true)]] },
  gradient:  { file: 'gradient', wait: 2500, rate: 2 },
  imgtrans:  { file: 'imgtrans', wait: 2500, acts: [[300, A.click('#stage')]] },
};

async function record(id) {
  const p = PLANS[id];
  const usesMouse = (p.acts || []).some(([, fn]) => fn.mouse) && id !== 'cursor';
  const url = BASE + p.file + '.html' + (usesMouse ? '#ptr' : '');
  const dur = p.dur || 3000;
  const frames = [];
  mouse = p.start || [W * 0.8, H * 0.85];
  await send('Page.navigate', { url: 'about:blank' });
  await sleep(200);
  await mouseTo(...mouse);
  if (!p.fromLoad) {
    await send('Page.navigate', { url });
    await sleep(p.wait || 1500);
    await ev('document.fonts.ready.then(() => 1)');
  }
  await send('Animation.enable');
  await send('Animation.setPlaybackRate', { playbackRate: p.rate || 1 });
  // 前の録画の残りのコマが混ざらないよう、撮り始める直前に受け口を付け替え、時刻でも切る
  const tStart = Date.now() / 1000 - 0.05;
  handlers['Page.screencastFrame'] = (f) => {
    if (f.metadata.timestamp >= tStart) frames.push({ ts: f.metadata.timestamp, data: f.data });
    send('Page.screencastFrameAck', { sessionId: f.sessionId });
  };
  await send('Page.startScreencast', { format: 'jpeg', quality: 88, maxWidth: W * DPR, maxHeight: H * DPR, everyNthFrame: 1 });
  const t0 = Date.now();
  if (p.fromLoad) await send('Page.navigate', { url });
  // WebGL など rAF で動くものは、再生速度を JS 側の時計で上げられないので、rate は CSS/WAAPI のアニメにだけ効く
  const runs = (p.acts || []).map(([t, fn]) => (async () => { await sleep(Math.max(0, t - (Date.now() - t0))); await fn(); })());
  await sleep(Math.max(0, dur - (Date.now() - t0)));
  await send('Page.stopScreencast');
  handlers['Page.screencastFrame'] = (f) => send('Page.screencastFrameAck', { sessionId: f.sessionId });
  await Promise.allSettled(runs);
  await send('Animation.setPlaybackRate', { playbackRate: 1 });
  const tEnd = frames.length ? frames[0].ts + dur / 1000 : 0;
  const dir = WORK + 'frames/' + id + '/';
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  // 撮り始めが about:blank の白い画面なら捨てる（fromLoad のとき）
  let lines = '';
  frames.forEach((f, i) => {
    const name = String(i).padStart(4, '0') + '.jpg';
    fs.writeFileSync(dir + name, Buffer.from(f.data, 'base64'));
    const next = i + 1 < frames.length ? frames[i + 1].ts : tEnd;
    lines += `file '${name}'\nduration ${Math.max(0.001, next - f.ts).toFixed(4)}\n`;
  });
  lines += `file '${String(frames.length - 1).padStart(4, '0')}.jpg'\n`;
  fs.writeFileSync(dir + 'list.txt', lines);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', dir + 'list.txt',
    '-vf', `fps=30,scale=${W * DPR}:${H * DPR}:flags=lanczos,format=yuv420p`, '-t', String(dur / 1000), '-an',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-movflags', '+faststart', OUT + id + '.mp4']);
  // 一覧カードの poster 用に、3/4 の時点の1コマも書き出す（「動きを止める」のときもこれが見える）
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(dur / 1000 * 0.75), '-i', OUT + id + '.mp4', '-frames:v', '1', '-c:v', 'libwebp', '-quality', '78', OUT + id + '.webp']);
  const size = fs.statSync(OUT + id + '.mp4').size;
  console.log(id, 'frames', frames.length, 'kb', Math.round(size / 1024));
}

const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(PLANS);
for (const id of ids) {
  try { await record(id); } catch (e) { console.log(id, 'ERROR', e.message); }
}
ws.close(); chrome.kill();
