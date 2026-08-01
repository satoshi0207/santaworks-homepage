/**
 * ExifSortPro のタイル絵。
 *
 * 画面キャプチャではなく「何をしてくれるか」の絵にしている。ポケメモのタイル
 * （スマホと吹き出し）と同じ言語に揃えるため。密度の高いデスクトップUIを
 * 縮めて貼ると、小さくて読めないうえにサイトから浮く。
 *
 * アプリのアイコンは絵の蝶番に置く。散らかった側から線が集まり、そこから
 * フォルダーへ分かれていく——アイコンが「並べ替えている当人」に見える位置。
 * 隅に置くと透かしにしかならず、絵の意味と関係がなくなる。
 *
 * SVG をインラインで持つのは、ダークテーマで地の色を替えたいのと、
 * ラベルをサイトのフォントで組みたいため（<img> の SVG は webfont を拾えない）。
 * 中の写真は抽象化した色面で、実在の写真は使っていない。
 */

/** 散らばっている側の写真。角度と位置は手で置いている（乱数だと固まる） */
const SCATTERED: { x: number; y: number; r: number; tone: string }[] = [
  { x: 44, y: 118, r: -12, tone: "#a9c9e8" },
  { x: 128, y: 92, r: 9, tone: "#f0b78d" },
  { x: 98, y: 188, r: -5, tone: "#aacfb2" },
  { x: 30, y: 236, r: 13, tone: "#e9d3a4" },
  { x: 146, y: 214, r: -16, tone: "#e6a9bb" },
  { x: 112, y: 302, r: 6, tone: "#b9b2e4" },
  { x: 38, y: 330, r: -9, tone: "#9fc9c6" },
];

/** 片づいた側。年 → 月 → カメラ の入れ子を、段差で表す。
 *  ラベルと写真は上下に分ける（横に並べると「NIKON Z 8」が写真にぶつかる）。
 *  枚数が 4→3→2 と減るのは、掘るほど絞られるという構造そのもの。 */
const SORTED: { x: number; y: number; w: number; label: string; tones: string[] }[] = [
  { x: 360, y: 102, w: 234, label: "2024年", tones: ["#a9c9e8", "#f0b78d", "#aacfb2", "#e9d3a4"] },
  { x: 380, y: 208, w: 214, label: "03月", tones: ["#e9d3a4", "#e6a9bb", "#b9b2e4"] },
  { x: 400, y: 314, w: 194, label: "NIKON Z 8", tones: ["#9fc9c6", "#a9c9e8"] },
];

const ICON = { x: 252, y: 208, size: 88 };

const CARD = "fill-white dark:fill-[#252936]";
const EDGE = "stroke-[#e6e0d5] dark:stroke-[#39404f]";
const THREAD = "stroke-[#cec5b6] dark:stroke-[#4c5364]";

export default function ExifSortProArt() {
  return (
    <svg
      viewBox="0 0 640 456"
      role="img"
      aria-label="散らばっていた写真が、ExifSortPro を通って、撮影した年・月・カメラごとのフォルダーに並び直る様子のイラスト。"
      className="block h-auto w-full"
    >
      <defs>
        <filter id="esp-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#4a4133" floodOpacity="0.13" />
        </filter>
        <filter id="esp-lift" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="9" floodColor="#3b3427" floodOpacity="0.22" />
        </filter>
        <clipPath id="esp-squircle">
          {/* 角丸は 22.37%。アプリアイコンと同じ比率（Dock と同じ形に見せる） */}
          <rect width="512" height="512" rx="114.53" ry="114.53" />
        </clipPath>
      </defs>

      {/* 地。白〜クリームで、サイトの雪の日の明るさに寄せる */}
      <rect width="640" height="456" className="fill-[#fbf8f3] dark:fill-[#222634]" />

      {/* 両側に一言ずつ。右は 2024年・03月 と喋っているのに左が黙っていると、
          絵が仕組みの図解で終わる。「撮った」で受けて、変わったのは並び方だけ
          だと言う。責める言い方（散らかっている等）はしない */}
      {/* viewBox 640 が幅 490px 前後で描かれるので、実寸は約 0.77 倍になる。
          17 で描いて、画面上で 13px。14 だと 10.7px で小さすぎた */}
      <g className="fill-[#8a8172] dark:fill-[#98a0b2]" fontSize="17" fontWeight="600">
        <text x="26" y="66" letterSpacing="0.06em">
          撮ったまま
        </text>
        <text x="360" y="66" letterSpacing="0.06em">
          撮った日ごとに
        </text>
      </g>

      {/* 糸。左からアイコンへ集まり、そこから3つのフォルダーへ分かれる。
          入りは点線（まだ束になっていない）、出は実線（整った）で描き分ける */}
      <g className={THREAD} fill="none" strokeWidth="1.75" strokeLinecap="round">
        <g strokeDasharray="2 7">
          <path d="M222 188 C 244 202, 240 228, 246 244" />
          <path d="M222 252 H 244" />
          <path d="M222 316 C 244 302, 240 276, 246 260" />
        </g>
        <path d="M344 242 C 352 220, 350 146, 360 146" />
        <path d="M344 252 H 380" />
        <path d="M344 262 C 352 284, 356 358, 400 358" />
      </g>

      {/* 散らかっている側 */}
      <g filter="url(#esp-soft)" transform="translate(-16 0)">
        {SCATTERED.map((p, i) => (
          <g key={i} transform={`rotate(${p.r} ${p.x + 42} ${p.y + 35})`}>
            <rect x={p.x} y={p.y} width="84" height="70" rx="5" className={`${CARD} ${EDGE}`} strokeWidth="1" />
            <rect x={p.x + 6} y={p.y + 6} width="72" height="46" rx="3" fill={p.tone} />
          </g>
        ))}
      </g>

      {/* 片づいた側 */}
      <g filter="url(#esp-soft)">
        {SORTED.map((row) => (
          <g key={row.label}>
            <rect x={row.x} y={row.y} width={row.w} height="88" rx="11" className={`${CARD} ${EDGE}`} strokeWidth="1" />
            {/* フォルダーの目印。ブランドの藍を薄く敷く */}
            <rect x={row.x + 18} y={row.y + 17} width="22" height="22" rx="6" className="fill-[#4F46E5]/12 dark:fill-[#818cf8]/20" />
            <rect x={row.x + 24} y={row.y + 24} width="10" height="2.5" rx="1.25" className="fill-[#4F46E5] dark:fill-[#a5b0f7]" />
            <rect x={row.x + 24} y={row.y + 30} width="10" height="2.5" rx="1.25" className="fill-[#4F46E5]/45 dark:fill-[#a5b0f7]/50" />
            <text x={row.x + 48} y={row.y + 34} className="fill-[#3d3a33] dark:fill-[#e3e6ee]" fontSize="15" fontWeight="700">
              {row.label}
            </text>
            {/* 中身の写真は、散らかっている側と同じ色。同じ1枚が並び直ったことを示す */}
            {row.tones.map((tone, i) => (
              <rect key={i} x={row.x + 18 + i * 32} y={row.y + 50} width="26" height="22" rx="3" fill={tone} />
            ))}
          </g>
        ))}
      </g>

      {/* アプリのアイコン。ここだけ影を強くして、絵の中で一番手前に置く */}
      <g filter="url(#esp-lift)">
        <svg x={ICON.x} y={ICON.y} width={ICON.size} height={ICON.size} viewBox="0 0 512 512">
          <g clipPath="url(#esp-squircle)">
            <rect width="512" height="512" fill="#f5f5f5" />
            <circle cx="150" cy="150" r="120" fill="#4F46E5" opacity="0.9" />
            <rect
              x="-90"
              y="-90"
              width="180"
              height="180"
              fill="#A855F7"
              opacity="0.85"
              transform="translate(380 140) rotate(25)"
            />
            <rect x="60" y="260" width="160" height="160" rx="40" fill="#EC4899" opacity="0.8" />
            <polygon points="450,300 520,480 380,480" fill="#10B981" opacity="0.9" />
            <ellipse cx="280" cy="420" rx="110" ry="80" fill="#F97316" opacity="0.85" />
            <circle cx="320" cy="220" r="85" fill="#06B6D4" opacity="0.75" />
            <rect x="200" y="40" width="120" height="120" rx="20" fill="#EAB308" opacity="0.7" />
            <polygon points="80,380 180,420 120,500" fill="#8B5CF6" opacity="0.8" />
            <ellipse cx="420" cy="380" rx="70" ry="95" fill="#3B82F6" opacity="0.7" />
          </g>
        </svg>
      </g>
    </svg>
  );
}
