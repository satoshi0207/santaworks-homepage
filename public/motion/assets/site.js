/* 動きの見本帳：両ページ共通（テーマ・動きを止める・データ読み込み・要素づくり） */

const LV = ['軽い', '中', '重い'];
const TIERS = ['CSSだけ', 'JavaScript', 'ライブラリ'];

// ── 設定の記憶（ブラウザごと。消えても既定値で動く）──────────────
const store = {
  get(k) { try { return localStorage.getItem('motion:' + k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem('motion:' + k, v); } catch (e) { /* 保存できなくても動く */ } }
};

const Lab = {
  listeners: [],
  theme: 'light',
  rm: false,
  init() {
    const saved = store.get('theme');
    this.theme = saved === 'dark' || saved === 'light' ? saved
      : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const rm = store.get('rm');
    this.rm = rm === '1' ? true : rm === '0' ? false : matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.dataset.theme = this.theme;
  },
  setTheme(t) { this.theme = t; store.set('theme', t); document.documentElement.dataset.theme = t; this.emit(); },
  setRm(v) { this.rm = v; store.set('rm', v ? '1' : '0'); this.emit(); },
  on(fn) { this.listeners.push(fn); },
  emit() { for (const fn of this.listeners) fn(this); }
};
Lab.init();

function bindHeader() {
  const rmBtn = document.querySelector('[data-act="rm"]');
  const thBtn = document.querySelector('[data-act="theme"]');
  const paint = () => {
    rmBtn.setAttribute('aria-pressed', String(Lab.rm));
    thBtn.textContent = Lab.theme === 'dark' ? 'ライト' : 'ダーク';
    thBtn.setAttribute('aria-label', Lab.theme === 'dark' ? 'ライト表示にする' : 'ダーク表示にする');
  };
  rmBtn.addEventListener('click', () => Lab.setRm(!Lab.rm));
  thBtn.addEventListener('click', () => Lab.setTheme(Lab.theme === 'dark' ? 'light' : 'dark'));
  Lab.on(paint);
  paint();
}

async function loadData() {
  const res = await fetch('effects.json', { cache: 'no-cache' });
  const data = await res.json();
  data.effects.forEach((x) => { x.catObj = data.categories.find((c) => c.id === x.cat); });
  return data;
}

// ── 小さな要素作成係 ─────────────────────────────────
const SVG_TAGS = new Set(['svg', 'path', 'circle']);
const UNITLESS = new Set(['opacity', 'flex', 'zIndex', 'fontWeight', 'order']);
function h(tag, props, children) {
  const svg = SVG_TAGS.has(tag);
  const el = svg ? document.createElementNS('http://www.w3.org/2000/svg', tag) : document.createElement(tag);
  for (const [k, v] of Object.entries(props || {})) {
    if (v == null) continue;
    if (k === 'style') {
      for (const [sk, sv] of Object.entries(v)) {
        if (sv == null) continue;
        el.style[sk] = typeof sv === 'number' && !UNITLESS.has(sk) ? sv + 'px' : sv;
      }
    } else if (k === 'class') {
      el.setAttribute('class', v);
    } else if (k === 'text') {
      el.textContent = v;
    } else if (svg) {
      el.setAttribute(k === 'viewBox' ? k : k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()), v);
    } else {
      el.setAttribute(k, v);
    }
  }
  const kids = children == null ? [] : Array.isArray(children) ? children : [children];
  for (const c of kids) el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return el;
}
