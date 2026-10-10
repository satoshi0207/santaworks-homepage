// santaworks.net のトップ・Works の全体と、今の見本帳の詳細ページを撮る（Claude Design に渡す参考）
// 使い方: node docs/motion/design/capture/shots.mjs → docs/motion/design/materials/site/
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const HERE = new URL('./', import.meta.url).pathname;
const WORK = (await import('node:os')).tmpdir() + '/motion-capture/'; // コマ・Chrome のプロフィールの置き場（リポジトリの外）
const SITE_OUT = HERE + '../materials/site/', DEMO_OUT = HERE + '../materials/demos/';
let OUT = SITE_OUT;
fs.mkdirSync(SITE_OUT, { recursive: true });
fs.mkdirSync(DEMO_OUT, { recursive: true });
const PORT = 9700 + Math.floor(Math.random() * 90);
const chrome = spawn('google-chrome', ['--headless=new', '--remote-debugging-port=' + PORT, '--user-data-dir=' + WORK + 'profile-shots',
  '--no-first-run', '--hide-scrollbars', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', 'about:blank'], { stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2000));
const list = await (await fetch('http://127.0.0.1:' + PORT + '/json')).json();
const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => ws.onopen = r);
let seq = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}) => new Promise((r) => { const i = ++seq; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ev = async (expr) => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;
await send('Page.enable');
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-color-scheme', value: 'light' }] });

async function shot(name, url, { w = 1440, h = 900, dpr = 1, mobile = false, full = false, scrollTo = 0, wait = 2500, css = '' } = {}) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: dpr, mobile });
  await send('Page.navigate', { url });
  await sleep(wait);
  await ev('document.fonts.ready.then(() => 1)');
  if (css) await ev(`(() => { const s = document.createElement('style'); s.textContent = ${JSON.stringify(css)}; document.head.append(s); })()`);
  if (full) {
    // 下まで1度なめて、画面に入ったら出る演出と遅延読み込みを全部起こしてから撮る
    await ev(`new Promise(async (done) => { const el = document.scrollingElement; for (let y = 0; y < el.scrollHeight; y += innerHeight / 2) { el.scrollTop = y; await new Promise((r) => setTimeout(r, 250)); } el.scrollTop = 0; setTimeout(done, 1200); })`);
  } else if (scrollTo) {
    await ev(`(() => { const el = document.scrollingElement; el.scrollTop = ${scrollTo} <= 1 ? (el.scrollHeight - innerHeight) * ${scrollTo} : ${scrollTo}; })()`);
    await sleep(1500);
  }
  // 全体を撮るときは、実際の文書の高さで切る（切らないと末尾に先頭がくり返し写ることがある）
  const sh = full ? await ev('Math.max(document.scrollingElement.scrollHeight, document.body.scrollHeight, document.body.getBoundingClientRect().height)') : 0;
  if (full) console.log(name, 'height', sh);
  if (!full) {
    const r = await send('Page.captureScreenshot', { format: 'jpeg', quality: 85 });
    fs.writeFileSync(OUT + name + '.jpg', Buffer.from(r.result.data, 'base64'));
  } else {
    // 1枚で撮ると約8,000px を超えたところで先頭がくり返し写る。4,000px ずつ撮って縦につなぐ
    const parts = [];
    for (let y = 0; y < sh; y += 4000) {
      const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y, width: w, height: Math.min(4000, Math.ceil(sh - y)), scale: 1 } });
      const f = OUT + name + '.part' + parts.length + '.png';
      fs.writeFileSync(f, Buffer.from(r.result.data, 'base64'));
      parts.push(f);
    }
    const { execFileSync } = await import('node:child_process');
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...parts.flatMap((f) => ['-i', f]),
      '-filter_complex', parts.length > 1 ? `vstack=inputs=${parts.length}` : 'null', '-q:v', '3', OUT + name + '.jpg']);
    parts.forEach((f) => fs.rmSync(f));
  }
  console.log(name);
}

const SITE = 'https://santaworks.net';
const Q = '?internal=1'; // GA4 で自分のアクセスとして除外される印
await shot('site-top-1440-firstview', SITE + '/' + Q);
await shot('site-top-1440-full', SITE + '/' + Q, { full: true });
await shot('site-works-1440-full', SITE + '/works/' + Q, { full: true });
await shot('site-top-390-full', SITE + '/' + Q, { w: 390, h: 844, dpr: 2, mobile: true, full: true });

const D = 'http://100.80.244.15:8925/demos/';
const hide = '.lab-hint{visibility:hidden!important}';
OUT = DEMO_OUT;
await shot('demo-parallax', D + 'parallax.html', { w: 1280, h: 800, scrollTo: 120, css: hide });
await shot('demo-slider', D + 'slider-swiper.html', { w: 1280, h: 800, css: hide });
await shot('demo-pin', D + 'pin-css.html', { w: 1280, h: 800, scrollTo: 0.45, css: hide });
await shot('demo-hscroll', D + 'hscroll-css.html', { w: 1280, h: 800, scrollTo: 0.55, css: hide });
await shot('demo-marquee', D + 'marquee.html', { w: 1280, h: 800, css: hide });
await shot('demo-tilt', D + 'tilt.html', { w: 1280, h: 800, css: hide });
await shot('demo-imgtrans', D + 'imgtrans.html', { w: 1280, h: 800, css: hide, wait: 3500 });
await shot('demo-bgcolor', D + 'bgcolor.html', { w: 1280, h: 800, scrollTo: 0.4, css: hide });
OUT = SITE_OUT;
// 今の見本帳の詳細ページ（構成の参考。見た目は作り直す前提）
await shot('motion-detail-now', 'http://100.80.244.15:8925/effect.html?id=parallax', { w: 1440, h: 900, full: true, wait: 3000 });
ws.close(); chrome.kill();
