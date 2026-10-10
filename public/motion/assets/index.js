/* 動きの見本帳：一覧ページ（よく出る8つ・分類ごとのカード・分類の絞り込み）
   カードの絵は、デモを録画した3秒前後の動画（media/clips/<id>.mp4。撮り方は design/capture/clips.mjs） */

// 打ち合わせでよく出る8つと、その横幅（12列のうち何列か）。同じ大きさを均等に並べないための組み方
const FEATURED = [['header', 7], ['slider', 5], ['marquee', 4], ['hover', 4], ['loading', 4], ['fullmenu', 4], ['bgvideo', 4], ['fade', 4]];
const CAT_EN = { scroll: 'SCROLL', mouse: 'MOUSE', text: 'TEXT & NUMBERS', shape: 'SHAPES', page: 'PAGE', ui: 'UI', webgl: 'WEBGL' };

(async () => {
  bindHeader();
  const data = await loadData();
  const FX = data.effects;
  const byId = Object.fromEntries(FX.map((x) => [x.id, x]));
  const catIds = data.categories.map((c) => c.id);
  let cat = catIds.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'all';

  // ── 動画は画面に入ったら再生、出たら止める。「動きを止める」の間は poster（3/4 の時点の1コマ）のまま
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      const v = en.target;
      v.dataset.seen = en.isIntersecting ? '1' : '';
      if (en.isIntersecting && !Lab.rm) v.play().catch(() => {});
      else v.pause();
    }
  }, { rootMargin: '80px 0px', threshold: 0.2 });

  function card(x, big, span) {
    const v = h('video', { muted: '', loop: '', playsinline: '', preload: 'none', poster: `media/clips/${x.id}.webp`, 'aria-hidden': 'true' });
    v.muted = true; // 属性だけでは自動再生の許可が下りないブラウザがある
    v.src = `media/clips/${x.id}.mp4`;
    io.observe(v);
    return h('a', { class: big ? 'card big' : 'card', href: `effect.html?id=${x.id}`, style: span ? { gridColumn: `span ${span}` } : null }, [
      v,
      h('div', { class: 'card-body' }, [
        h('div', { class: 'card-names' }, [h('strong', { class: 'card-name' }, x.name), h('span', { class: 'card-alias' }, x.alias)]),
        x.en !== x.name ? h('div', { class: 'card-en' }, x.en) : null,
        h('p', {}, x.desc)
      ].filter(Boolean))
    ]);
  }

  document.getElementById('feat-grid').append(...FEATURED.filter(([id]) => byId[id]).map(([id, span]) => card(byId[id], true, span)));

  const sections = data.categories.map((c) => {
    const items = FX.filter((x) => x.cat === c.id);
    return h('section', { class: 'cat', id: c.id }, [
      h('div', { class: 'cat-side' }, [
        h('div', { class: 'eyebrow' }, CAT_EN[c.id] || c.id.toUpperCase()),
        h('h2', {}, c.name),
        h('p', {}, c.lead),
        h('div', { class: 'count' }, `${items.length}個`)
      ]),
      h('div', { class: 'cat-grid' }, items.map((x) => card(x)))
    ]);
  });
  document.getElementById('cats-body').append(...sections);

  // ── 分類で絞り込む（URL の #scroll などとそろえる。詳細ページのパンくずから戻ってこられるように）
  const chips = document.getElementById('cats');
  function render() {
    chips.replaceChildren(...[{ id: 'all', name: 'すべて', n: FX.length }, ...data.categories.map((c) => ({ id: c.id, name: c.name, n: FX.filter((x) => x.cat === c.id).length }))]
      .map((c) => {
        const b = h('button', { type: 'button', 'aria-pressed': String(cat === c.id) }, [c.name, h('span', { class: 'n' }, c.n)]);
        b.addEventListener('click', () => {
          cat = c.id;
          history.replaceState(null, '', c.id === 'all' ? location.pathname + location.search : '#' + c.id);
          render();
          if (c.id !== 'all') document.getElementById(c.id).scrollIntoView({ block: 'start' });
        });
        return b;
      }));
    document.getElementById('feat').hidden = cat !== 'all';
    sections.forEach((s) => { s.hidden = cat !== 'all' && s.id !== cat; });
  }
  render();
  if (cat !== 'all') document.getElementById(cat).scrollIntoView({ block: 'start' });

  Lab.on(() => {
    for (const v of document.querySelectorAll('.card video')) {
      if (Lab.rm) { v.pause(); v.load(); } // load() で poster に戻す
      else if (v.dataset.seen) v.play().catch(() => {});
    }
  });
})();
