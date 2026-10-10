/* 動きの見本帳：詳細ページ（デモ枠・この動きについて・仕組みを見る・前後の動き）。見た目の原本は Claude Design の v2 */

// ── デモのソースから「最小のコード」を取り出す ─────────────────────
// 決めごと（README にも書いてある）：
//   data-lab の付いた要素は見本帳専用なので、コード欄に出さない
//   data-lab-more の付いた要素は「同じ形の要素が、あとNつ続く」に畳む
//   複数行の要素は、開きタグと同じ字下げで閉じタグを書く
function stripLab(lines) {
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^(\s*)<([a-zA-Z][\w-]*)\b[^>]*?\sdata-lab(-more)?(?=[\s>=/])/);
    if (!m) { out.push(line); continue; }
    const [, ind, tag, more] = m;
    let j = i;
    const closesHere = line.includes(`</${tag}>`) || /^(link|meta|img|br|hr|input|source)$/i.test(tag);
    if (!closesHere) {
      j = i + 1;
      while (j < lines.length && !lines[j].startsWith(`${ind}</${tag}>`)) j++;
    }
    if (more) {
      const last = out[out.length - 1];
      if (last && typeof last === 'object') last.n++;
      else out.push({ n: 1, ind });
    }
    i = j;
  }
  return out.map((o) => (typeof o === 'object' ? `${o.ind}<!-- 同じ形の要素が、あと${o.n}つ続く -->` : o));
}

function dedent(lines) {
  const ind = Math.min(...lines.filter((l) => l.trim()).map((l) => l.match(/^\s*/)[0].length));
  return Number.isFinite(ind) ? lines.map((l) => l.slice(ind)) : lines;
}
function tidy(lines) {
  const out = [];
  for (const l of lines) {
    const blank = !l.trim();
    if (blank && (!out.length || !out[out.length - 1].trim())) continue;
    out.push(blank ? '' : l.replace(/\s+$/, ''));
  }
  while (out.length && !out[out.length - 1].trim()) out.pop();
  return out;
}

function splitCode(src) {
  const lines = stripLab(src.replace(/\r/g, '').split('\n'));
  const css = [], js = [], head = [], body = [];
  let mode = 'head';
  const block = (i, end, out, withTags) => {
    if (withTags) out.push(lines[i]);
    let j = i + 1;
    while (j < lines.length && !lines[j].trim().startsWith(end)) { out.push(lines[j]); j++; }
    if (withTags && j < lines.length) out.push(lines[j]);
    return j;
  };
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (/^<style\b/.test(t)) { if (css.length) css.push(''); i = block(i, '</style>', css); continue; }
    if (/^<script\b/.test(t) && /type="importmap"/.test(t)) { i = block(i, '</script>', head, true); continue; }
    if (/^<script\b/.test(t) && !/\bsrc=/.test(t)) {
      // HTML タブには置き場所だけ残す（type="module" かどうかも学びどころ）
      const open = lines[i].match(/^(\s*)(<script\b[^>]*>)/);
      (mode === 'body' ? body : head).push(`${open[1]}${open[2]}/* JS タブの中身 */</script>`);
      if (js.length) js.push('');
      i = block(i, '</script>', js);
      continue;
    }
    if (/^<body\b/.test(t)) { mode = 'body'; continue; }
    if (/^<\/body>/.test(t)) { mode = 'end'; continue; }
    if (mode === 'head') {
      if (/^<script\b[^>]*\bsrc=/.test(t) || /^<link\b[^>]*rel="stylesheet"/.test(t)) head.push(lines[i]);
    } else if (mode === 'body') {
      body.push(lines[i]);
    }
  }
  const html = head.length ? [...head, '', ...body] : body;
  return { html: tidy(dedent(html)), css: tidy(dedent(css)), js: tidy(dedent(js)) };
}

// つまみの値を、コードの中の該当箇所に書き戻す
const decimals = (step) => (String(step).split('.')[1] || '').length;
const fmt = (s, v) => Number(v).toFixed(decimals(s.step));
function patternOf(s) {
  const esc = s.code.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace('\\{v\\}', '(-?[\\d.]+)');
  return new RegExp(esc);
}
function withValues(src, sliders, vals) {
  let out = src;
  sliders.forEach((s, i) => {
    const re = patternOf(s);
    out = out.replace(re, s.code.replace('{v}', fmt(s, vals[i])));
  });
  return out;
}

function copyText(text) {
  // 古いやり方（http の tailnet 内や、clipboard API が断られたとき用）
  const legacy = () => {
    const ta = h('textarea', { style: { position: 'fixed', left: '-9999px', top: 0 } });
    ta.value = text;
    document.body.append(ta);
    ta.select();
    try { document.execCommand('copy'); } finally { ta.remove(); }
  };
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(legacy);
  legacy();
  return Promise.resolve();
}

(async () => {
  bindHeader();
  const data = await loadData();
  const main = document.getElementById('main');
  const id = new URLSearchParams(location.search).get('id');
  const idx = data.effects.findIndex((x) => x.id === id);
  if (idx < 0) {
    main.append(h('section', { class: 'd-head' }, h('div', {}, [
      h('h1', {}, '見つかりませんでした'),
      h('p', {}, [h('a', { href: './', style: { color: 'var(--red)' } }, '動きの見本帳へ戻る')])
    ])));
    return;
  }
  const x = data.effects[idx];
  document.title = `${x.name}（${x.alias}）｜動きの見本帳`;

  // ── 見出し ─────────────────────────────────
  // この動きだけを人に見せるためのリンク（打ち合わせの前後にメールやチャットで送る）
  const share = h('button', { class: 'share', type: 'button' }, 'リンクをコピー');
  share.addEventListener('click', async () => {
    await copyText(`${location.origin}${location.pathname}?id=${x.id}`);
    share.textContent = 'コピーしました';
    setTimeout(() => { share.textContent = 'リンクをコピー'; }, 1600);
  });
  main.append(
    h('div', { class: 'd-top' }, [
      h('nav', { class: 'crumbs', 'aria-label': 'パンくず' }, [
        h('a', { href: './' }, '動きの見本帳'), h('span', {}, '/'), h('a', { href: `./#${x.cat}` }, x.catObj.name)
      ]),
      h('div', { class: 'd-id' }, [h('span', {}, x.id), share])
    ]),
    h('section', { class: 'd-head' }, [
      h('div', {}, [
        x.en !== x.name ? h('div', { class: 'eyebrow' }, x.en) : null,
        h('h1', {}, x.name),
        h('div', { class: 'd-alias' }, x.alias),
        h('p', {}, x.desc)
      ].filter(Boolean)),
      h('div', { class: 'badges' }, [
        h('span', {}, ['スマホでの重さ ', h('b', {}, LV[x.w])]),
        h('span', {}, ['作る手間 ', h('b', {}, LV[x.e])]),
        h('span', {}, TIERS[x.t])
      ])
    ])
  );

  // ── デモ枠（実物の iframe。つまみと「動きを止める」が中に届く） ─────
  const st = { v: 0, open: false, tab: null, vals: x.demos.map((d) => (d.sliders || []).map((s) => s.value)), src: {} };
  const iframe = h('iframe', { title: `${x.name} のデモ`, loading: 'eager' });
  const rmNote = h('div', { class: 'rm-note' }, x.reduceBadge || '動きを止めた状態です');
  const reload = h('button', { class: 'demo-reload', type: 'button' }, '↻ 最初から');
  reload.addEventListener('click', () => loadFrame());
  const demo = h('div', { class: 'demo' }, [iframe, rmNote]);
  const variants = h('div', { class: 'variants' });
  const drive = h('p', { class: 'drive' }); // 動くきっかけ（スクロール量／時間／カーソル／操作／ずっと）
  main.append(variants, demo, drive);

  const cur = () => x.demos[st.v];
  function labState() {
    const d = cur();
    return {
      theme: Lab.theme, reduce: Lab.rm,
      params: (d.sliders || []).map((s, i) => ({ target: s.target, cssVar: s.cssVar, attr: s.attr, unit: s.unit, value: st.vals[st.v][i] }))
    };
  }
  function sendState() {
    if (!iframe.contentWindow) return;
    iframe.contentWindow.postMessage(Object.assign({ lab: 'state' }, labState()), '*');
  }
  // 状態を URL に載せて読み込み直す（読み込んだ瞬間に値を読むデモにも効く）
  let loads = 0;
  function loadFrame() {
    loads += 1;
    iframe.src = `${cur().file}?r=${loads}#lab=${encodeURIComponent(JSON.stringify(labState()))}`;
  }
  let reloadTimer = 0;
  function reloadSoon() { clearTimeout(reloadTimer); reloadTimer = setTimeout(loadFrame, 250); }
  addEventListener('message', (e) => {
    if (e.source === iframe.contentWindow && e.data && e.data.lab === 'ready') sendState();
  });

  function renderVariants() {
    const chips = x.demos.length < 2 ? [] : x.demos.map((d, i) => {
      const b = h('button', { class: 'v', type: 'button', 'aria-pressed': String(i === st.v) }, d.label);
      b.addEventListener('click', () => { if (st.v !== i) { st.v = i; st.tab = null; loadVariant(); } });
      return b;
    });
    variants.replaceChildren(...chips, reload);
  }

  // ── この動きについて ───────────────────────────
  const fact = (title, body, level) => h('div', { class: 'fact' }, [
    h('h3', {}, title), level != null ? h('div', { class: 'level' }, LV[level]) : null, h('p', {}, body)].filter(Boolean));
  main.append(h('section', { class: 'about' }, [
    h('div', { class: 'eyebrow' }, 'ABOUT'),
    h('h2', {}, 'この動きについて'),
    h('div', { class: 'about-grid' }, [
      fact('ひとことで', x.oneLine),
      fact('向いている場面', x.goodFor),
      fact('向かない場面', x.badFor),
      fact('スマホでの重さ', x.weightNote, x.w),
      fact('作る手間', x.effortNote, x.e),
      fact('「視差効果を減らす」設定の人には', `${x.reduceNote}画面上部の「動きを止める」で確かめられます。`)
    ])
  ]));

  // ── 仕組みを見る（制作者向け・畳んである） ──────────────
  const sign = h('span', { class: 'sign', 'aria-hidden': 'true' }, '+');
  const toggleT = h('span', { class: 't' }, '仕組みを見る');
  const toggle = h('button', { class: 'mech-toggle', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'mech-body' }, [
    sign, toggleT, h('span', { class: 's' }, '制作者向け：原理・つまみ・最小のコード・ハマりどころ')]);
  const principle = h('p');
  const sliderNote = h('p', { class: 'sliders-note' });
  const sliderBox = h('div', { class: 'sliders' });
  const tabs = h('div', { class: 'tabs', role: 'tablist' });
  const lineInfo = h('span', { class: 'line-info' });
  const lineInfoSm = h('div', { class: 'line-info-sm' });
  const copyBtn = h('button', { class: 'copy', type: 'button' }, 'コピー');
  const codeLines = h('div', { class: 'code-lines' });
  const body = h('div', { class: 'mech-body', id: 'mech-body', hidden: '' }, [
    h('div', { class: 'mech-top' }, [
      h('div', { class: 'principle' }, [h('h3', {}, '原理'), principle]),
      h('div', {}, [h('h3', {}, 'つまみ'), sliderNote, sliderBox])
    ]),
    h('div', {}, [
      h('h3', {}, '最小のコード'),
      h('div', { class: 'code' }, [
        h('div', { class: 'code-bar' }, [tabs, lineInfo, copyBtn]),
        h('div', { class: 'code-scroll' }, codeLines)
      ]),
      lineInfoSm
    ]),
    h('div', {}, [
      h('h3', {}, 'ハマりどころ'),
      h('ol', { class: 'pitfalls' }, (x.pitfalls || []).map((p) => h('li', {}, p)))
    ])
  ]);
  main.append(h('section', { class: 'mech' }, [toggle, body]));
  toggle.addEventListener('click', () => {
    st.open = !st.open;
    body.hidden = !st.open;
    toggle.setAttribute('aria-expanded', String(st.open));
    sign.textContent = st.open ? '−' : '+';
    toggleT.textContent = st.open ? '仕組みを閉じる' : '仕組みを見る';
  });

  let code = { html: [], css: [], js: [] };
  function renderCode() {
    const d = cur();
    const src = st.src[d.file];
    if (src == null) { codeLines.replaceChildren(h('div', {}, [h('span', { class: 'n' }, ''), h('span', { class: 't' }, '読み込み中…')])); return; }
    code = splitCode(withValues(src, d.sliders || [], st.vals[st.v]));
    const avail = ['html', 'css', 'js'].filter((k) => code[k].length);
    if (!st.tab || !avail.includes(st.tab)) st.tab = avail[avail.length - 1];
    tabs.replaceChildren(...avail.map((k) => {
      const b = h('button', { class: 'tab', type: 'button', role: 'tab', 'aria-selected': String(k === st.tab) }, k.toUpperCase());
      b.addEventListener('click', () => { st.tab = k; renderCode(); });
      return b;
    }));
    const res = (d.sliders || []).map(patternOf);
    codeLines.replaceChildren(...code[st.tab].map((t, i) => h('div', { class: res.some((re) => re.test(t)) ? 'hl' : '' }, [
      h('span', { class: 'n' }, i + 1), h('span', { class: 't' }, t || ' ')])));
    const total = avail.reduce((n, k) => n + code[k].length, 0);
    const info = `${st.tab.toUpperCase()} ${code[st.tab].length}行 ／ ${avail.length > 1 ? `${avail.length}つ合わせて${total}行` : '全部で' + total + '行'}`;
    lineInfo.textContent = info;
    lineInfoSm.textContent = `${info} ／ 横にスクロールできます`;
  }
  copyBtn.addEventListener('click', async () => {
    await copyText(code[st.tab].join('\n'));
    copyBtn.textContent = 'コピーしました';
    setTimeout(() => { copyBtn.textContent = 'コピー'; }, 1600);
  });

  function renderSliders() {
    const d = cur();
    const n = (d.sliders || []).length;
    sliderNote.textContent = !n ? '' : d.reload ? '動かすと、上のデモが最初から再生し直します。' : '上のデモと、下のコードに反映されます。';
    sliderNote.hidden = !n;
    if (!n) {
      sliderBox.replaceChildren(h('p', { class: 'hint-none' }, d.noSliders || 'このデモにはつまみがありません。値はコードを書き換えて試します。'));
      return;
    }
    sliderBox.replaceChildren(...(d.sliders || []).map((s, i) => {
      const val = h('span', { class: 'val' }, fmt(s, st.vals[st.v][i]) + (s.unit || ''));
      const input = h('input', { type: 'range', min: s.min, max: s.max, step: s.step, value: st.vals[st.v][i], 'aria-label': s.label });
      input.addEventListener('input', () => {
        st.vals[st.v][i] = Number(input.value);
        val.textContent = fmt(s, input.value) + (s.unit || '');
        if (cur().reload) reloadSoon(); else sendState();
        renderCode();
      });
      return h('label', { class: 'slider' }, [h('span', { class: 'name' }, s.label), val, input, h('span', { class: 'hint' }, s.hint)]);
    }));
  }

  async function loadVariant() {
    const d = cur();
    renderVariants();
    demo.style.setProperty('--h', (d.height || 580) + 'px');
    loadFrame();
    principle.textContent = d.principle || '';
    drive.hidden = !d.drive;
    if (d.drive) drive.replaceChildren(h('span', { class: 'k' }, '動くきっかけ'), h('b', {}, d.drive.kind), h('span', {}, d.drive.text));
    renderSliders();
    renderCode();
    if (st.src[d.file] == null) {
      const res = await fetch(d.file, { cache: 'no-cache' });
      st.src[d.file] = await res.text();
      renderCode();
    }
  }

  function paintRm() { rmNote.hidden = !Lab.rm; }
  Lab.on(() => { paintRm(); if (cur().reload) loadFrame(); else sendState(); });
  paintRm();
  loadVariant();

  // ── 前後の動き・相談 ─────────────────────────────
  const n = data.effects.length;
  const prev = data.effects[(idx - 1 + n) % n];
  const next = data.effects[(idx + 1) % n];
  const link = (fx, cls, k) => h('a', { class: cls, href: `effect.html?id=${fx.id}` }, [h('span', { class: 'k' }, k), h('span', { class: 't' }, fx.name)]);
  main.append(
    h('nav', { class: 'pager', 'aria-label': '前後の動き' }, [link(prev, 'prev', '← 前の動き'), link(next, 'next', '次の動き →')]),
    h('section', { class: 'd-cta' }, [
      h('p', {}, 'この動きを使ったサイトのご相談は'),
      h('a', { class: 'btn-red', href: 'https://santaworks.net/contact/' }, 'お問い合わせ')
    ])
  );
})();
