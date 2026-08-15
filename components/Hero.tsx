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
 * 枠＝ブラウザ、中身＝つくったもの。壁はサーバ側で静的に描き、JSはポインタ視差のみ。
 * URL欄は架空店舗＝.example（RFC 2606 予約）／自社商品＝実物URL。
 * 実在しうる他人のドメインを架空デモに表示しない（対外ガードレール③）。
 */
type Palette = { l: string; d: string; m: string; s: string; t: string };

const PALETTES: Palette[] = [
  { l: "KISSA",    d: "kissa.example",    m: "#7a5236", s: "#e8c9a8", t: "#faf3ea" },
  { l: "SALON",    d: "salon.example",    m: "#d4899e", s: "#f3d3da", t: "#fdf4f6" },
  { l: "RAMEN",    d: "ramen.example",    m: "#b8433a", s: "#f2c063", t: "#fbf1e6" },
  { l: "NAIKA",    d: "naika.example",    m: "#4e8f88", s: "#bfe0da", t: "#f0f7f6" },
  { l: "NAIL",     d: "nail.example",     m: "#9a7fc9", s: "#ddd0f0", t: "#f7f4fb" },
  { l: "PHOTO",    d: "photo.example",    m: "#3a3f52", s: "#b9c1d9", t: "#eef0f6" },
  { l: "FARM",     d: "farm.example",     m: "#6f9a4e", s: "#d3e5bd", t: "#f4f8ee" },
  { l: "ITALIAN",  d: "italian.example",  m: "#2f6e4f", s: "#e8b9ae", t: "#f6f3ec" },
  { l: "BARBER",   d: "barber.example",   m: "#33518f", s: "#c6d3ec", t: "#f0f3f9" },
  { l: "PIANO",    d: "piano.example",    m: "#3b3b47", s: "#cfc3e8", t: "#f3f1f8" },
  { l: "JUKU",     d: "juku.example",     m: "#d97f2f", s: "#f5d9b8", t: "#fcf5ec" },
  { l: "IZAKAYA",  d: "izakaya.example",  m: "#8f2f3a", s: "#e9c78f", t: "#f9f1e7" },
  { l: "CLUB",     d: "club.example",     m: "#2b2e3e", s: "#9fd8d2", t: "#eef4f4" },
  { l: "KOUMUTEN", d: "koumuten.example", m: "#a1622c", s: "#e5c79b", t: "#f9f3ea" },
  { l: "POKEMEMO", d: "pokememo.santaworks.net", m: "#e0806b", s: "#ffd9c9", t: "#fff6f0" },
  { l: "EXIFSORT", d: "exifsort.web.app",        m: "#4a6fa5", s: "#cfe0f2", t: "#f0f5fa" },
];

const TYPES = ["hf-hero-t", "hf-grid-t", "hf-circle-t", "hf-split-t"] as const;

const BODY: Record<(typeof TYPES)[number], React.ReactNode> = {
  "hf-hero-t": (
    <>
      <div className="hf-mhero">
        <i className="hf-t1" />
        <i className="hf-t2" />
        <i className="hf-mbtn" />
      </div>
      <div className="hf-mrow">
        <b />
        <b className="hf-acc" />
        <b />
      </div>
    </>
  ),
  "hf-grid-t": (
    <>
      <div className="hf-mgrid">
        <b />
        <b />
        <b />
        <b />
      </div>
      <div className="hf-mcap">
        <i />
        <i />
      </div>
    </>
  ),
  "hf-circle-t": (
    <>
      <span className="hf-mlogo" />
      <span className="hf-mname" />
      <span className="hf-msub" />
      <span className="hf-mpills">
        <i />
        <i />
      </span>
    </>
  ),
  "hf-split-t": (
    <>
      <div className="hf-mleft">
        <i />
      </div>
      <div className="hf-mright">
        <s />
        <s />
        <s className="hf-btn" />
      </div>
    </>
  ),
};

const COLS = 5;
const ROWS = 4;
// 中央の列ほど手前（大きく）、両端は奥（小さく・ぼかし）に置いて奥行きを出す
const DEPTH = [0.92, 1, 1.08, 1, 0.92];

function SiteCard({ palette, type, delay }: { palette: Palette; type: (typeof TYPES)[number]; delay: number }) {
  return (
    <div
      className="hf-site"
      style={
        {
          "--main": palette.m,
          "--soft": palette.s,
          "--tint": palette.t,
          "--fd": `${delay}s`,
        } as React.CSSProperties
      }
    >
      <div className="hf-cbar">
        <i />
        <i />
        <i />
        <u>{palette.d}</u>
        <span className="hf-sp" />
      </div>
      <div className={`hf-mini ${type}`}>
        <div className="hf-mnav">
          <span className="hf-brand">
            <i />
            <em>{palette.l}</em>
          </span>
          <span className="hf-mlinks">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="hf-mbody">{BODY[type]}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={`hf isolate ${notoSansJP.variable}`}>
      <div className="hf-wall" id="hf-wall" aria-hidden="true">
        {Array.from({ length: COLS }, (_, c) => {
          const cards = Array.from({ length: ROWS }, (_, r) => {
            const n = c * ROWS + r;
            return {
              key: r,
              palette: PALETTES[n % PALETTES.length],
              type: TYPES[(c * 2 + r * 3) % TYPES.length],
              delay: 0.15 + (n % 9) * 0.09,
            };
          });
          return (
            <div
              key={c}
              className={`hf-col${c % 2 ? " hf-col-down" : ""}${c === 0 || c === COLS - 1 ? " hf-col-far" : ""}`}
              style={
                {
                  "--t": `${36 + (c % 4) * 7}s`,
                  "--s": DEPTH[c],
                } as React.CSSProperties
              }
            >
              {/* 同じ列を2セット積む。keyframes が「半分＋間隔の半分」戻すことで継ぎ目なく一周する */}
              {[0, 1].map((set) =>
                cards.map((card) => (
                  <SiteCard
                    key={`${set}-${card.key}`}
                    palette={card.palette}
                    type={card.type}
                    delay={card.delay}
                  />
                )),
              )}
            </div>
          );
        })}
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
