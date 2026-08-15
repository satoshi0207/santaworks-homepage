import Link from "next/link";
import localFont from "next/font/local";
import HeroParallax from "./HeroParallax";
import "./hero.css";

// 見出し専用の Noto Sans JP 900。見出しは固定文言なので、必要グリフだけに
// サブセットした 7.6KB の woff2 を1つ持つ（生成: scripts/subset_hero_font.py）。
// ⚠️ 見出しの文言を変えるときは同スクリプトで再生成すること。
const notoSansJP = localFont({
  src: "./fonts/noto-sans-jp-900-hero.woff2",
  weight: "900",
  display: "swap",
  variable: "--font-hero",
});

/*
 * ヒーローF「つくったものの壁」。設計図: docs/mocks/hero-f-pro-2026-08-16.html
 * 枠＝ブラウザ、中身＝つくったものの実物スクリーンショット。
 * デモは既存サムネ（public/demo/<x>/thumb.webp・審査済み）、商品2つは public/wall/。
 * URL欄は架空店舗＝.example（RFC 2606 予約）／自社商品＝実物URL。
 * 実在しうる他人のドメインを架空デモに表示しない（対外ガードレール③）。
 * 壁はサーバ側で静的に描き、JSはポインタ視差のみ。
 */
type WallCard = {
  d: string; // URL欄に出すドメイン
  img: string; // スクリーンショット
  t: string; // 読み込み中の地色（サイトの主調色に寄せる）
};

// 5列×4枚。並びは列＝配列順（中央列 c=2 がいちばん手前に見えるので商品2つをそこへ）
const WALL: WallCard[][] = [
  [
    { d: "barber.example", img: "/demo/barber/thumb.webp", t: "#f0f3f9" },
    { d: "izakaya.example", img: "/demo/izakaya/thumb.webp", t: "#f9f1e7" },
    { d: "salon.example", img: "/demo/salon/thumb.webp", t: "#f6faf8" },
    { d: "juku.example", img: "/demo/juku/thumb.webp", t: "#fcf5ec" },
  ],
  [
    { d: "kissa.example", img: "/demo/kissa/thumb.webp", t: "#faf3ea" },
    { d: "naika.example", img: "/demo/naika/thumb.webp", t: "#f0f7f6" },
    { d: "diamantine.example", img: "/demo/cabaret/thumb.webp", t: "#17141c" },
    { d: "farm.example", img: "/demo/farm/thumb.webp", t: "#f4f8ee" },
  ],
  [
    { d: "pokememo.santaworks.net", img: "/wall/pokememo.webp", t: "#fff6f0" },
    { d: "photo.example", img: "/demo/photo/thumb.webp", t: "#f4f1ea" },
    { d: "exifsort.web.app", img: "/wall/exifsort.webp", t: "#f0f5fa" },
    { d: "ramen.example", img: "/demo/ramen/thumb.webp", t: "#1c1613" },
  ],
  [
    { d: "piano.example", img: "/demo/piano/thumb.webp", t: "#f3f1f8" },
    { d: "koumuten.example", img: "/demo/koumuten/thumb.webp", t: "#f9f3ea" },
    { d: "club.example", img: "/demo/club/thumb.webp", t: "#14121a" },
    { d: "nail.example", img: "/demo/nail/thumb.webp", t: "#fdf4f6" },
  ],
  [
    { d: "yohaku.example", img: "/demo/salon2/thumb.webp", t: "#f4f4f4" },
    { d: "touka.example", img: "/demo/factory/thumb.webp", t: "#1c2333" },
    { d: "italian.example", img: "/demo/italian/thumb.webp", t: "#221a14" },
    { d: "tokinowa.example", img: "/demo/tokinowa/thumb.webp", t: "#f6f1e8" },
  ],
];

// 中央の列ほど手前（大きく）、両端は奥（小さく・ぼかし）に置いて奥行きを出す
const DEPTH = [0.92, 1, 1.08, 1, 0.92];

function SiteCard({ card, delay }: { card: WallCard; delay: number }) {
  return (
    <div className="hf-site" style={{ "--fd": `${delay}s` } as React.CSSProperties}>
      <div className="hf-cbar">
        <i />
        <i />
        <i />
        <u>{card.d}</u>
        <span className="hf-sp" />
      </div>
      {/* ⚠️ loading="lazy" にしない。壁は全カードがほぼビューポート内で lazy の恩恵がなく、
          読み込み前の歯抜けが見えてしまう。優先度だけ下げて見出し（LCP）に帯域を譲る */}
      {/* eslint-disable-next-line @next/next/no-img-element -- 静的書き出しのため最適化ローダーは使わない。元からWebP */}
      <img
        className="hf-shot"
        src={card.img}
        alt=""
        width={600}
        height={450}
        fetchPriority="low"
        decoding="async"
        style={{ backgroundColor: card.t }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className={`hf ${notoSansJP.variable}`}>
      <div className="hf-wall" id="hf-wall" aria-hidden="true">
        {WALL.map((cards, c) => (
          <div
            key={c}
            className={`hf-col${c % 2 ? " hf-col-down" : ""}${c === 0 || c === WALL.length - 1 ? " hf-col-far" : ""}`}
            style={
              {
                "--t": `${36 + (c % 4) * 7}s`,
                "--s": DEPTH[c],
              } as React.CSSProperties
            }
          >
            {/* 同じ列を2セット積む。keyframes が「半分＋間隔の半分」戻すことで継ぎ目なく一周する */}
            {[0, 1].map((set) =>
              cards.map((card, r) => (
                <SiteCard
                  key={`${set}-${r}`}
                  card={card}
                  delay={0.15 + ((c * cards.length + r) % 9) * 0.09}
                />
              )),
            )}
          </div>
        ))}
      </div>
      <div className="hf-veil" aria-hidden="true" />
      <div className="hf-fade" aria-hidden="true" />
      <div className="hf-box">
        <p className="hf-eyebrow">Santa Works — サンタワークス</p>
        <h1>
          <span>
            <span className="hf-q">「</span>忘れたくない<span className="hf-q">」</span>を、
          </span>
          <span>かたちに。</span>
        </h1>
        <p className="hf-lede">
          <span>記憶と思い出を、ITでサポートする個人事業です。</span>
        </p>
        <div className="hf-ctas">
          <Link className="hf-cta hf-cta-primary" href="/contact/">
            相談する
          </Link>
          <Link className="hf-cta hf-cta-ghost" href="/works/">
            つくったものを見る
          </Link>
        </div>
      </div>
      <div className="hf-stamp" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs>
            <path
              id="hf-stamp-path"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text>
            <textPath href="#hf-stamp-path">SCROLL — SCROLL — </textPath>
          </text>
        </svg>
        <span className="hf-arrow">↓</span>
      </div>
      <HeroParallax />
    </section>
  );
}
