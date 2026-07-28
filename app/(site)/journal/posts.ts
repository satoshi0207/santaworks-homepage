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
    slug: "summer-50years",
    title: "昔の夏は涼しかった、を50年分の記録で確かめました",
    excerpt:
      "最近、夏の暑さに耐えられなくなってきました。ただ、それは年齢のせいかもしれません。気象庁の公開データで東京の50年分を数えたら、猛暑日は10年平均で1.4日から13.0日に。確かめる途中で、観測地点が引っ越していたことにも気づきます。",
    date: "2026-07-29",
    category: "公開データ / 記憶",
    // ⚠️ 写真ではなくグラフ。一覧のトリミングで横長ヒーローは見出しが切れるため、
    // 中央寄せの thumb を別に用意（167-children と同じ方式）。
    hero: "/blog/summer-50years/thumb.webp",
  },
  {
    slug: "167-children",
    title: "小学生167人。この数字を、届く人に渡したいです",
    excerpt:
      "SNSがきっかけで被害にあった子どもは令和7年に1,566人。うち小学生は167人で、前年より22.8%増えました。警察庁の統計を、定義と母数まで含めて整理しています。発信力のない親にできるのは、たぶんここまでです。",
    date: "2026-07-28",
    category: "親として / Data",
    // ⚠️ 写真ではなくグラフ。子どもを被写体にしない／悲しさを演出しないため。
    // 記事のヒーロー（横長・年次10本）は一覧のトリミングで見出しが切れるので、
    // 一覧用は中央だけに要素を置いた thumb.webp を別に用意している。
    hero: "/blog/167-children/thumb.webp",
  },
  {
    slug: "tools-that-make",
    title: "娘が欲しがったのはスマホで、パソコンではありませんでした",
    excerpt:
      "楽しませてくれる道具と、楽しませるものをつくれる道具。子どもに渡すときのその区別が、AIで曖昧になりました。総務省とこども家庭庁の最新の公開データを見ながら、答えの出ていないところをそのまま書いています。",
    date: "2026-07-27",
    category: "子どもとAI",
    hero: "/blog/tools-that-make/hero.webp",
  },
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
