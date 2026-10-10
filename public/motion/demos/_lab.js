/*
 * 見本帳とデモをつなぐ橋渡し（見本帳専用。デモの「最小のコード」には出さない）
 *
 * デモの <head> の先頭で読み込む：<script src="_lab.js" data-lab></script>
 * デモ本体は、ふつうの Web ページとして単独でも動く。これが無くても壊れない。
 *
 * 状態の受け取り方は2つ：
 *   1. 読み込み時：URL の #lab=<JSON>（詳細ページが iframe の src に付ける）
 *      → デモのスクリプトより先に効くので、読み込んだ瞬間に値を読むデモ（GSAP・Lottie など）にも効く
 *   2. 読み込み後：postMessage の { lab: 'state', theme, reduce, params }
 *      → 値を毎回読むデモ（パララックスなど）は、つまみを動かした瞬間に変わる
 *   params の1件：{ target: CSSセレクタ, cssVar?: '--rise', attr?: 'data-speed', value: 数, unit?: 'px' }
 *
 * 「動きを止める」の再現：
 *   - CSS の @media (prefers-reduced-motion: reduce) を「常に当てはまる」に、no-preference を「当てはまらない」に書き換える
 *   - JS の matchMedia('(prefers-reduced-motion: …)').matches も同じ答えを返す
 *   OS の設定を変えずに、設定を変えた人の見え方を確かめるための仕掛け。
 */
(() => {
  const lab = { reduce: false, params: [] };
  const REDUCE = /prefers-reduced-motion\s*:\s*reduce/;
  const NOPREF = /prefers-reduced-motion\s*:\s*no-preference/;

  // ── 読み込み時の状態（#lab=…）────────────────────────────
  let initial = null;
  try {
    const m = location.hash.match(/(?:^#|&)lab=([^&]*)/);
    if (m) initial = JSON.parse(decodeURIComponent(m[1]));
  } catch (e) { initial = null; }

  // ── JS 側：matchMedia を「動きを止める」に追従させる ─────────────
  const realMatchMedia = window.matchMedia.bind(window);
  window.matchMedia = (query) => {
    const mql = realMatchMedia(query);
    const forReduce = REDUCE.test(query);
    const forNoPref = NOPREF.test(query);
    if (!forReduce && !forNoPref) return mql;
    return new Proxy(mql, {
      get(t, p) {
        if (p === 'matches') return lab.reduce ? forReduce : t.matches;
        const v = t[p];
        return typeof v === 'function' ? v.bind(t) : v;
      }
    });
  };

  // ── CSS 側：該当する @media の条件をその場で書き換える ─────────────
  let mediaRules = null; // [{ rule, original, kind }]
  const originals = new WeakMap(); // 書き換える前の条件（読み直しても見失わない）
  function collect(rules, out) {
    for (const r of rules) {
      if (r.media && r.cssRules) {
        const text = originals.get(r) ?? r.media.mediaText;
        if (REDUCE.test(text) || NOPREF.test(text)) originals.set(r, text);
        if (REDUCE.test(text)) out.push({ rule: r, original: text, kind: 'reduce' });
        else if (NOPREF.test(text)) out.push({ rule: r, original: text, kind: 'nopref' });
      }
      if (r.cssRules) collect(r.cssRules, out);
    }
  }
  function scan() {
    mediaRules = [];
    for (const sheet of document.styleSheets) {
      try { collect(sheet.cssRules, mediaRules); } catch (e) { /* 別オリジンの CSS は読めない */ }
    }
  }
  function applyReduceCss() {
    if (!mediaRules) return;
    for (const m of mediaRules) {
      if (!lab.reduce) m.rule.media.mediaText = m.original;
      else m.rule.media.mediaText = m.kind === 'reduce' ? 'all' : 'not all';
    }
  }
  function setReduce(on) {
    lab.reduce = !!on;
    applyReduceCss();
    document.documentElement.toggleAttribute('data-lab-reduce', lab.reduce);
  }

  // ── テーマ ─────────────────────────────────────────────
  function applyTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }

  // ── つまみ ─────────────────────────────────────────────
  function applyParamTo(el, p) {
    const value = String(p.value) + (p.unit || '');
    if (p.cssVar) el.style.setProperty(p.cssVar, value);
    if (p.attr) el.setAttribute(p.attr, String(p.value));
  }
  function applyParams(params) {
    for (const p of params || []) {
      const els = p.target === ':root' ? [document.documentElement] : document.querySelectorAll(p.target);
      for (const el of els) applyParamTo(el, p);
    }
  }

  // 読み込み中：要素ができた瞬間に値を書き込む（本文末尾のスクリプトより先に効く）
  let watcher = null;
  if (initial) {
    applyTheme(initial.theme);
    lab.reduce = !!initial.reduce;
    lab.params = initial.params || [];
    applyParams(lab.params.filter((p) => p.target === ':root'));
    watcher = new MutationObserver((records) => {
      let styleChanged = false;
      for (const r of records) {
        if (r.target.tagName === 'STYLE') styleChanged = true;
        for (const node of r.addedNodes) if (node.tagName === 'STYLE') styleChanged = true;
      }
      if (styleChanged) { scan(); applyReduceCss(); } // 最初の描画より先に効かせる
      for (const r of records) for (const node of r.addedNodes) {
        if (node.nodeType !== 1) continue;
        for (const p of lab.params) {
          if (p.target === ':root') continue;
          if (node.matches(p.target)) applyParamTo(node, p);
          node.querySelectorAll(p.target).forEach((el) => applyParamTo(el, p));
        }
      }
    });
    watcher.observe(document.documentElement, { childList: true, subtree: true });
  }

  addEventListener('message', (e) => {
    if (e.source !== window.parent || !e.data || e.data.lab !== 'state') return;
    const msg = e.data;
    if ('theme' in msg) applyTheme(msg.theme);
    if ('reduce' in msg) setReduce(msg.reduce);
    if ('params' in msg) { lab.params = msg.params || []; applyParams(lab.params); }
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (watcher) watcher.disconnect();
    scan();
    setReduce(lab.reduce);
    applyParams(lab.params);
    if (window.parent !== window) window.parent.postMessage({ lab: 'ready' }, '*');
  });
})();
