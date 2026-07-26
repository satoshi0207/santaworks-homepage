// ジャーナル記事の一覧データ。記事を追加したらここに1件足す。
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  category: string;
  /** 一覧のサムネイル。省略すると画像なしの全幅カードになる（壊れ画像にはならない） */
  hero?: string;
};

export const posts: Post[] = [
  {
    slug: "why-we-built-pokememo",
    title: "覚えていることは、才能ではなく仕組みでした——ポケメモをつくった理由",
    excerpt:
      "人の話を覚えていなくて損をした。逆に、覚えていてもらえて嬉しかった。その差を根性で埋めるのをやめて、道具にしました。記憶の加齢変化とLINEの普及データから、つくった理由を書いています。",
    date: "2026-07-26",
    category: "プロダクト / ポケメモ",
    hero: "/blog/why-we-built-pokememo/hero.webp",
  },
  {
    slug: "gourmet-site-dependency",
    title: "飲食店の集客、グルメサイトだけに委ねてよいのでしょうか——公開データから考える",
    excerpt:
      "グルメサイト・SNSへの依存と自社ホームページの役割を、公正取引委員会の調査や各種の公開データ（2020〜2026）から整理しました。手数料・表示順位・口コミ評価・予約経路のデータを可視化しています。",
    date: "2026-07-25",
    category: "Web制作 / Data",
    hero: "/blog/gourmet-site-dependency/hero.webp",
  },
];
