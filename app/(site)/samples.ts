// デザインサンプル（架空店舗デモ）の一覧データ。
// 本体トップ（page.tsx）と Works（works/page.tsx）の両方から参照する。
export type Sample = {
  icon: string;
  label: string;
  tone: string;
  href?: string;
  name?: string;
  thumb?: string;
};

export const samples: Sample[] = [
  {
    icon: "🍜",
    label: "ラーメン店",
    tone: "漆黒×朱、縦書き明朝の力強い和",
    href: "/demo/ramen/",
    name: "麺処 ゆげや",
    thumb: "/demo/ramen/thumb.webp",
  },
  {
    icon: "✂️",
    label: "美容院",
    tone: "白磁×翠、余白の効いた洗練ミニマル",
    href: "/demo/salon/",
    name: "hair atelier 翠雨",
    thumb: "/demo/salon/thumb.webp",
  },
  {
    icon: "🏮",
    label: "居酒屋",
    tone: "藍×提灯の灯、筆文字と短冊の賑わい",
    href: "/demo/izakaya/",
    name: "大衆酒場 ほおずき",
    thumb: "/demo/izakaya/thumb.webp",
  },
  {
    icon: "💅",
    label: "ネイルサロン",
    tone: "クリーム×ラズベリー、丸ゴシックのキャンディポップ",
    href: "/demo/nail/",
    name: "nail salon こんぺいとう",
    thumb: "/demo/nail/thumb.webp",
  },
  {
    icon: "🏭",
    label: "企業サイト（製造業）",
    tone: "鉄紺×灯のアンバー、多ページ構成の堅実コーポレート",
    href: "/demo/factory/",
    name: "有限会社 灯火製作所",
    thumb: "/demo/factory/thumb.webp",
  },
  {
    icon: "🎹",
    label: "ピアノ教室",
    tone: "アイボリー×えんじ、教科書体のクラシカルな習い事",
    href: "/demo/piano/",
    name: "おとのは ぴあの教室",
    thumb: "/demo/piano/thumb.webp",
  },
  {
    icon: "🏠",
    label: "工務店・リフォーム",
    tone: "生成り×木の茶×安全アンバー、現場の誠実さを伝える多ページ構成",
    href: "/demo/koumuten/",
    name: "ひだまり工務店",
    thumb: "/demo/koumuten/thumb.webp",
  },
  {
    icon: "🥃",
    label: "銀座・会員制クラブ",
    tone: "漆黒×シャンパンゴールド、明朝の格で魅せるダークラグジュアリー",
    href: "/demo/club/",
    name: "銀座 月讀",
    thumb: "/demo/club/thumb.webp",
  },
  {
    icon: "💈",
    label: "メンズ・バーバー",
    tone: "生成り×濃紺×真鍮、極太コンデンスのヴィンテージ理容室",
    href: "/demo/barber/",
    name: "バーバー ミナト",
    thumb: "/demo/barber/thumb.webp",
  },
  {
    icon: "☕",
    label: "純喫茶（昭和レトロ）",
    tone: "珈琲ブラウン×クリーム×えんじ、丸みのレトロ書体でノスタルジー",
    href: "/demo/kissa/",
    name: "純喫茶 おもかげ",
    thumb: "/demo/kissa/thumb.webp",
  },
  {
    icon: "📷",
    label: "写真館・フォトスタジオ",
    tone: "アイボリー×墨×洗朱の印、明朝のエディトリアルで思い出を残す",
    href: "/demo/photo/",
    name: "写真館 ひととき",
    thumb: "/demo/photo/thumb.webp",
  },
  {
    icon: "✏️",
    label: "学習塾・個別指導",
    tone: "知性のブルー×白×山吹、数字と料金表で信頼を伝える情報設計",
    href: "/demo/juku/",
    name: "個別指導塾 あすなろ",
    thumb: "/demo/juku/thumb.webp",
  },
  {
    icon: "✂️",
    label: "美容室（モード系）",
    tone: "純白×漆黒×朱赤、極太サンセリフとモノクロ写真のエディトリアル",
    href: "/demo/salon2/",
    name: "余白 -YOHAKU-",
    thumb: "/demo/salon2/thumb.webp",
  },
  {
    icon: "🍷",
    label: "イタリアン居酒屋",
    tone: "エスプレッソ黒×ボルドー×金、蝋燭の灯りで魅せる夜のエノテカ",
    href: "/demo/italian/",
    name: "Osteria Candelume",
    thumb: "/demo/italian/thumb.webp",
  },
  {
    icon: "🐄",
    label: "酪農牧場",
    tone: "空色×牧草グリーン×生成り、大自然を主役にした明るい6次産業サイト",
    href: "/demo/farm/",
    name: "そらいろ牧場",
    thumb: "/demo/farm/thumb.webp",
  },
];
