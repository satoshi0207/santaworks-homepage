import Link from "next/link";
import DemoMap from "@/components/DemoMap";
import { FadeIn, Reveal } from "@/components/motion";

const menu: [string, string][] = [
  ["カット", "¥6,600"],
  ["カット ＋ カラー", "¥13,200"],
  ["カット ＋ パーマ", "¥14,300"],
  ["髪質改善トリートメント", "¥8,800"],
  ["ヘッドスパ（40分）", "¥5,500"],
  ["前髪カット", "¥1,650"],
];

export default function SalonDemo() {
  return (
    <>
      <header className="s-header">
        <p className="s-logo">
          翠雨<small>hair atelier</small>
        </p>
        <a className="s-reserve" href="#reserve">
          RESERVE
        </a>
      </header>

      {/* ヒーロー */}
      <section className="s-hero">
        <FadeIn delay={0.2} className="s-hero-copy">
          <span className="en">— after the rain</span>
          <h1>
            <span>雨上がりの緑のような、</span>
            <span>軽やかな髪へ。</span>
          </h1>
          <p>
            hair atelier
            翠雨（すいう）は、スタイリスト2名・完全予約制の小さなアトリエ。あなたの髪と、静かに向き合う時間を。
          </p>
        </FadeIn>
        <FadeIn delay={0.7}>
          <figure className="s-hero-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/demo/salon/hero.jpg" alt="緑を背にした後ろ姿" />
            <figcaption>hair atelier SUI-U</figcaption>
          </figure>
        </FadeIn>
      </section>

      <hr className="s-rule" />

      {/* コンセプト */}
      <section className="s-section s-concept">
        <Reveal>
          <p className="s-eyebrow">concept</p>
          <p>
            髪が整うと、背筋が伸びる。
            <br />
            鏡の中の自分と、少し仲直りできる。
            <br />
            翠雨は「切りに来る場所」ではなく、
            <br />
            「軽くなりに来る場所」でありたいと思っています。
          </p>
        </Reveal>
      </section>

      {/* メニュー */}
      <section className="s-section">
        <div className="s-wrap">
          <Reveal>
            <p className="s-eyebrow">menu</p>
            <h2 className="s-h2">メニュー</h2>
          </Reveal>
          <Reveal>
            <div className="s-menu-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/salon/mirror.jpg" alt="白い店内の鏡とプロダクト" loading="lazy" />
              <div>
                <ul className="s-menu-list">
                  {menu.map(([name, price]) => (
                    <li key={name}>
                      <span className="name">{name}</span>
                      <span className="price s-latin">{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="s-menu-note">
                  ※ 税込価格です。すべてのメニューにシャンプー・ブローが含まれます。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* こだわり */}
      <section className="s-section" style={{ paddingTop: 0 }}>
        <div className="s-wrap">
          <Reveal>
            <div className="s-feature">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/salon/cut.jpg" alt="ハサミで髪を整える手元" loading="lazy" />
              <div className="s-feature-body">
                <p className="s-eyebrow">promise</p>
                <h2 className="s-h2">
                  ひとりに、
                  <br />
                  ひとりのスタイリスト。
                </h2>
                <p>
                  カウンセリングから仕上げまで、担当がマンツーマンで寄り添います。掛け持ちはしません。「なんとなく伝わらなかった」をなくすための、私たちの約束です。
                </p>
                <dl>
                  <div>
                    <dt>予約</dt>
                    <dd>完全予約制（1日6名まで）</dd>
                  </div>
                  <div>
                    <dt>薬剤</dt>
                    <dd>頭皮にやさしいオーガニック系を中心に選定</dd>
                  </div>
                  <div>
                    <dt>時間</dt>
                    <dd>お急ぎの方はご予約時にお知らせください</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 店舗情報 */}
      <section className="s-section s-info" id="reserve">
        <div className="s-wrap">
          <Reveal>
            <p className="s-eyebrow">salon</p>
            <h2 className="s-h2">サロン情報</h2>
          </Reveal>
          <Reveal>
            <div className="s-info-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/salon/interior.jpg" alt="明るいサロンの店内" loading="lazy" />
              <div>
                <table className="s-info-table">
                  <tbody>
                    <tr>
                      <th>店名</th>
                      <td>hair atelier 翠雨（すいう）</td>
                    </tr>
                    <tr>
                      <th>住所</th>
                      <td>東京都某区翠町2-4-6 1F</td>
                    </tr>
                    <tr>
                      <th>営業</th>
                      <td>10:00 — 19:00（最終受付 17:30）</td>
                    </tr>
                    <tr>
                      <th>定休</th>
                      <td>月曜・第2火曜</td>
                    </tr>
                    <tr>
                      <th>予約</th>
                      <td>完全予約制／Web・LINEにて受付</td>
                    </tr>
                    <tr>
                      <th>席数</th>
                      <td>セット面 3席</td>
                    </tr>
                  </tbody>
                </table>
                <p className="s-info-note">
                  ※ この店舗は実在しません。架空店舗のデザインサンプルです。
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <DemoMap station="翠ヶ丘駅" walk="北口から徒歩5分" shop="翠" />
          </Reveal>
        </div>
      </section>

      <footer className="s-footer">
        「hair atelier 翠雨」は実在しない架空の美容院です。このページは{" "}
        <Link href="/">Santa Works</Link>{" "}
        が制作したWebデザインサンプルです。写真: Unsplash
      </footer>

      <Link href="/works/" className="s-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </>
  );
}
