/*
 * そよぎ内科クリニック（架空）の設定値。
 * 4ページで同じ数字を使うため、ここに集約する（診療時間の食い違いは実案件でも致命的）。
 */

export const CLINIC = {
  name: "そよぎ内科クリニック",
  kana: "そよぎないかクリニック",
  en: "SOYOGI NAIKA CLINIC",
  /** 明らかに架空だと分かる番号にする */
  tel: "0000-00-0000",
  telHref: "tel:0000000000",
  zip: "〒000-0000",
  address: "山ノ手県港見市 若葉台2-8-1 そよぎメディカルビル1F",
  station: "若葉台駅",
  walk: "南口から徒歩4分",
  parking: "3台（建物北側）",
  departments: "内科・呼吸器内科・生活習慣病",
  opened: "2019年4月",
  am: "9:00–12:30",
  amReception: "12:00",
  pm: "15:00–18:30",
  pmReception: "18:00",
  closed: "水曜午後・土曜午後・日曜・祝日",
  director: "柏木 悠",
  directorKana: "かしわぎ ゆう",
} as const;

export const NAV = [
  ["/demo/naika/", "ホーム"],
  ["/demo/naika/shinryo/", "診療案内"],
  ["/demo/naika/clinic/", "院内紹介"],
  ["/demo/naika/access/", "初診・アクセス"],
] as const;

/** 曜日を行にした診療時間。横スクロールを作らないための構造 */
export const HOURS: {
  day: string;
  /** JavaScript の getDay() に合わせる（0=日） */
  dow: number;
  am: boolean;
  pm: boolean;
  note?: string;
}[] = [
  { day: "月曜", dow: 1, am: true, pm: true },
  { day: "火曜", dow: 2, am: true, pm: true },
  { day: "水曜", dow: 3, am: true, pm: false, note: "午後は休診" },
  { day: "木曜", dow: 4, am: true, pm: true },
  { day: "金曜", dow: 5, am: true, pm: true },
  { day: "土曜", dow: 6, am: true, pm: false, note: "午後は休診" },
  { day: "日曜", dow: 0, am: false, pm: false, note: "休診" },
];
