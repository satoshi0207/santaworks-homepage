type Props = {
  /** 架空の最寄り駅名 */
  station: string;
  /** 徒歩案内（例: 南口から徒歩3分） */
  walk: string;
  /** ピンに入れる一文字 */
  shop: string;
};

/**
 * デモサイト用の架空イラスト地図。
 * 色は各デモのCSSで --map-* 変数として定義する。
 * （実案件ではこの位置に Google マップ等を埋め込む想定）
 */
export default function DemoMap({ station, walk, shop }: Props) {
  return (
    <figure className="demo-map">
      <svg
        viewBox="0 0 640 360"
        role="img"
        aria-label={`${station}から${walk}、架空の案内地図`}
      >
        <rect width="640" height="360" fill="var(--map-bg)" />
        {/* 細い道 */}
        {[100, 180, 320].map((y) => (
          <line
            key={`h${y}`}
            x1="0"
            y1={y}
            x2="640"
            y2={y}
            stroke="var(--map-road-thin)"
            strokeWidth="2"
          />
        ))}
        {[80, 320, 440, 560].map((x) => (
          <line
            key={`v${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="360"
            stroke="var(--map-road-thin)"
            strokeWidth="2"
          />
        ))}
        {/* 大通り */}
        <line
          x1="0"
          y1="260"
          x2="640"
          y2="260"
          stroke="var(--map-road)"
          strokeWidth="14"
        />
        <line
          x1="200"
          y1="0"
          x2="200"
          y2="360"
          stroke="var(--map-road)"
          strokeWidth="10"
        />
        {/* 線路と駅 */}
        <line
          x1="0"
          y1="40"
          x2="640"
          y2="40"
          stroke="var(--map-rail)"
          strokeWidth="6"
          strokeDasharray="18 10"
        />
        <rect x="420" y="22" width="130" height="36" rx="4" fill="var(--map-rail)" />
        <text
          x="485"
          y="46"
          textAnchor="middle"
          fontSize="17"
          fontWeight="700"
          fill="var(--map-bg)"
        >
          {station}
        </text>
        {/* 駅からの徒歩ルート（点線） */}
        <path
          d="M 485 58 L 485 180 L 320 180 L 320 260 L 234 260"
          fill="none"
          stroke="var(--map-pin)"
          strokeWidth="4"
          strokeDasharray="1 12"
          strokeLinecap="round"
        />
        {/* 店のピン */}
        <circle cx="200" cy="260" r="27" fill="var(--map-pin)" />
        <text
          x="200"
          y="269"
          textAnchor="middle"
          fontSize="22"
          fontWeight="700"
          fill="var(--map-bg)"
        >
          {shop}
        </text>
        <text
          x="200"
          y="312"
          textAnchor="middle"
          fontSize="15"
          fill="var(--map-text)"
        >
          {walk}
        </text>
      </svg>
      <figcaption>
        ※ 架空の地図です。実案件ではここに Google マップ等を埋め込みます。
      </figcaption>
    </figure>
  );
}
