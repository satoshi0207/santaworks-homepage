import Link from "next/link";
import DemoMap from "@/components/DemoMap";
import DemoSns from "@/components/DemoSns";
import { FadeIn, Reveal } from "@/components/motion";

const chips = [
  { name: "ももいろ", color: "var(--n-peach)" },
  { name: "みんと", color: "var(--n-mint)" },
  { name: "らべんだー", color: "var(--n-lilac)" },
  { name: "そらいろ", color: "var(--n-sky)" },
  { name: "ばたー", color: "var(--n-butter)" },
  { name: "らずべりー", color: "var(--n-rose)" },
];

const menu: [string, string][] = [
  ["ワンカラー", "¥5,500"],
  ["ラメグラデーション", "¥6,050"],
  ["フレンチ・チークネイル", "¥6,600"],
  ["アートし放題コース", "¥8,250"],
  ["パーツ・アート追加（1本）", "¥550〜"],
  ["他店オフ", "¥1,650"],
];

const sprinkles = [
  { top: "14%", left: "6%", size: 14, color: "var(--n-mint)" },
  { top: "24%", left: "46%", size: 10, color: "var(--n-rose)" },
  { top: "70%", left: "4%", size: 18, color: "var(--n-butter)" },
  { top: "82%", left: "40%", size: 12, color: "var(--n-sky)" },
  { top: "12%", left: "88%", size: 16, color: "var(--n-lilac)" },
  { top: "78%", left: "92%", size: 10, color: "var(--n-peach)" },
];

export default function NailDemo() {
  return (
    <>
      <header className="n-header">
        <p className="n-logo">
          こんぺいとう<small className="n-latin">NAIL SALON</small>
        </p>
        <a className="n-reserve" href="#salon">
          ご予約
        </a>
      </header>

      {/* ヒーロー */}
      <section className="n-hero">
        {sprinkles.map((s, i) => (
          <span
            key={i}
            className="n-sprinkle"
            aria-hidden="true"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              background: s.color,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
        <FadeIn delay={0.2} className="n-hero-copy">
          <p className="n-eyebrow">private nail salon</p>
          <h1>
            <span>指先に、</span>
            <span>
              ちいさな<span className="dot">ごほうび</span>。
            </span>
          </h1>
          <p>
            nail salon
            こんぺいとうは、1席だけのプライベートサロン。今日のあなたに似合う色を、いっしょに見つけましょう。
          </p>
        </FadeIn>
        <FadeIn delay={0.7}>
          <div className="n-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/demo/nail/hero.webp" alt="パステルカラーのネイル" />
          </div>
        </FadeIn>
      </section>

      {/* カラーチップ */}
      <section className="n-section n-colors">
        <Reveal>
          <p className="n-eyebrow">colors</p>
          <h2 className="n-h2">今月のこんぺいとうカラー</h2>
          <div className="n-chip-row">
            {chips.map((c) => (
              <div className="n-chip" key={c.name}>
                <span
                  className="tip"
                  style={{ "--tip-color": c.color } as React.CSSProperties}
                />
                {c.name}
              </div>
            ))}
          </div>
          <p className="n-colors-note">
            毎月6色の限定カラーをご用意。定番色は約180色から選べます。
          </p>
        </Reveal>
      </section>

      {/* メニュー */}
      <section className="n-section">
        <div className="n-wrap">
          <Reveal>
            <p className="n-eyebrow">menu</p>
            <h2 className="n-h2">メニュー</h2>
          </Reveal>
          <Reveal>
            <div className="n-menu-grid">
              <div>
                <ul className="n-menu-list">
                  {menu.map(([name, price]) => (
                    <li key={name}>
                      <span className="name">{name}</span>
                      <span className="price">{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="n-menu-note">
                  ※ 税込価格です。当店付けのジェルオフは無料。施術時間は90〜150分ほどいただきます。
                </p>
              </div>
              <div className="n-menu-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/demo/nail/polish.jpg"
                  alt="ネイルポリッシュのボトル"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* こだわり */}
      <section className="n-section n-promise">
        <div className="n-wrap">
          <Reveal>
            <p className="n-eyebrow">promise</p>
            <h2 className="n-h2">爪にやさしく、が いちばん。</h2>
          </Reveal>
          <Reveal>
            <div className="n-promise-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/nail/work.jpg"
                alt="ネイルケアの施術"
                loading="lazy"
              />
              <div className="n-promise-body">
                <p>
                  かわいいの前に、健康な爪。こんぺいとうは自爪を削りすぎない施術と、ていねいなケアを大切にしています。
                </p>
                <ul>
                  <li>1席だけの完全予約制。ゆっくりおしゃべりも、無言もOK</li>
                  <li>自爪を傷めにくいフィルイン施術に対応</li>
                  <li>器具はお客さまごとに洗浄・消毒しています</li>
                  <li>お子さま連れのご相談も歓迎です</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="n-section" id="salon">
        <div className="n-wrap">
          <Reveal>
            <p className="n-eyebrow">salon</p>
            <h2 className="n-h2">サロン情報</h2>
          </Reveal>
          <Reveal>
            <table className="n-info-table">
              <tbody>
                <tr>
                  <th>店名</th>
                  <td>nail salon こんぺいとう</td>
                </tr>
                <tr>
                  <th>住所</th>
                  <td>東京都某区こんぺい坂1-8-15 2F</td>
                </tr>
                <tr>
                  <th>営業</th>
                  <td>10:00 — 19:00（最終受付 16:30）</td>
                </tr>
                <tr>
                  <th>定休</th>
                  <td>木曜・不定休あり</td>
                </tr>
                <tr>
                  <th>予約</th>
                  <td>完全予約制／Web・LINEにて受付</td>
                </tr>
                <tr>
                  <th>支払</th>
                  <td>現金・カード・コード決済</td>
                </tr>
              </tbody>
            </table>
            <p className="n-info-note">
              ※ この店舗は実在しません。架空店舗のデザインサンプルです。
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@konpeito_nail" },
                { kind: "line", handle: "ご予約・ご相談" },
              ]}
            />
          </Reveal>
          <Reveal>
            <DemoMap station="こんぺい坂駅" walk="東口から徒歩2分" shop="こ" />
          </Reveal>
        </div>
      </section>

      <footer className="n-footer">
        「nail salon こんぺいとう」は実在しない架空のネイルサロンです。このページは{" "}
        <Link href="/">Santa Works</Link>{" "}
        が制作したWebデザインサンプルです。写真: Unsplash
      </footer>

      <Link href="/works/" className="n-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </>
  );
}
