// ジャーナル記事の一覧データ。記事を追加したらここに1件足す。
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  category: string;
};

export const posts: Post[] = [
  {
    slug: "gourmet-site-dependency",
    title: "飲食店の集客、グルメサイトだけに委ねてよいのでしょうか——公開データから考える",
    excerpt:
      "グルメサイト・SNSへの依存と自社ホームページの役割を、公正取引委員会の調査や各種の公開データ（2020〜2026）から整理しました。手数料・表示順位・口コミ評価・予約経路のデータを可視化しています。",
    date: "2026-07-25",
    category: "Web制作 / Data",
  },
];
