/*
 * そよぎ内科クリニック（デザインサンプル）のアイコン。
 * 装飾用なので aria-hidden。意味は必ず隣のテキストで伝える。
 */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** 院名の由来＝風にそよぐ葉 */
export function LeafMark() {
  return (
    <svg {...base}>
      <path
        d="M12.5 20.5c-.4-6.8 2.4-11.6 8.5-13.5.7 7.9-2.7 12.4-8.5 13.5Z"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <path d="M12.5 20.5c.3-4.6-1.6-7.9-5.6-9.8" />
      <path d="M3.5 6.2c3.4.2 5.9 1.6 7.4 4.2" />
    </svg>
  );
}

/** 風邪・発熱 */
export function IconThermo() {
  return (
    <svg {...base}>
      <path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0Z" />
      <path d="M12 15.5v2.2" />
    </svg>
  );
}

/** 生活習慣病 */
export function IconHeart() {
  return (
    <svg {...base}>
      <path d="M12 20.2S4.6 16 4.6 10.6A3.9 3.9 0 0 1 12 8.4a3.9 3.9 0 0 1 7.4 2.2c0 5.4-7.4 9.6-7.4 9.6Z" />
    </svg>
  );
}

/** 健診・予防接種 */
export function IconClipboard() {
  return (
    <svg {...base}>
      <path d="M9 4.5h6v2.2H9Z" />
      <path d="M15 5.6h2.2v14.9H6.8V5.6H9" />
      <path d="m9.6 13.2 1.9 1.9 3.2-3.6" />
    </svg>
  );
}

/** 各種検査 */
export function IconPulse() {
  return (
    <svg {...base}>
      <path d="M3 12.5h3.6l2-5.4 3.1 10.4 2.1-5h7.2" />
    </svg>
  );
}

/** 電話 */
export function IconPhone() {
  return (
    <svg {...base} width="18" height="18">
      <path d="M6.3 3.8h3l1.4 3.5-1.9 1.4a10 10 0 0 0 4.5 4.5l1.4-1.9 3.5 1.4v3a1.8 1.8 0 0 1-2 1.8A13.4 13.4 0 0 1 4.5 5.8a1.8 1.8 0 0 1 1.8-2Z" />
    </svg>
  );
}
