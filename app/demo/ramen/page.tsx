import Link from "next/link";
import { Reveal } from "@/components/motion";

const kodawari = [
  {
    num: "壱 ── 出汁",
    title: "鶏と煮干しの、重ね出汁。",
    body: "丸鶏をじっくり炊いた清湯に、瀬戸内の煮干しを重ねる。澄んでいるのに、深い。最後の一滴まで飲み干せる、体にしみる一杯です。",
    img: "/demo/ramen/hero.jpg",
    alt: "澄んだ醤油スープの中華そば",
  },
  {
    num: "弐 ── 麺",
    title: "毎朝打つ、自家製ちぢれ麺。",
    body: "国産小麦をブレンドし、店の奥で毎朝打つ中細のちぢれ麺。スープをよく持ち上げ、すすった瞬間に小麦が香ります。",
    img: "/demo/ramen/noodle.jpg",
    alt: "打ちたての自家製麺",
  },
  {
    num: "参 ── 玉子",
    title: "半熟に、ひと晩。",
    body: "羽釜で茹でた玉子を、かえしにひと晩。黄身はとろり、白身には出汁の色。手間を惜しまない、名脇役です。",
    img: "/demo/ramen/egg.jpg",
    alt: "味付け玉子",
  },
];

const menu: { cat: string; items: [string, string][] }[] = [
  {
    cat: "麺",
    items: [
      ["中華そば（醤油）", "900円"],
      ["味玉中華そば", "1,050円"],
      ["特製中華そば", "1,250円"],
      ["塩そば", "950円"],
      ["つけそば", "1,000円"],
      ["大盛", "＋150円"],
    ],
  },
  {
    cat: "ご飯・一品",
    items: [
      ["焼餃子（五個）", "450円"],
      ["炙りチャーシュー丼", "450円"],
      ["白めし", "200円"],
    ],
  },
  {
    cat: "飲み物",
    items: [
      ["瓶ビール", "650円"],
      ["ラムネ", "300円"],
    ],
  },
];

export default function RamenDemo() {
  return (
    <>
      {/* ヒーロー */}
      <section className="r-hero">
        <div className="r-hero-bg" aria-hidden="true" />
        <div className="r-mark" aria-hidden="true">
          <span>ゆげや</span>
        </div>
        <div className="r-hero-inner">
          <div className="r-hero-lead">
            <p>
              鶏と煮干しの重ね出汁に、毎朝打つ自家製麺。
              <br />
              麺処 ゆげやは、町の小さな中華そば屋です。
            </p>
            <div className="r-hours">
              <span>昼 11:30 — 15:00</span>
              <span>夜 18:00 — 21:00</span>
              <span>水曜定休</span>
            </div>
          </div>
          <h1 className="r-hero-copy">
            湯気の向こうに、
            <br />
            <span className="shu">うまい</span>がある。
          </h1>
        </div>
      </section>

      {/* こだわり */}
      <section className="r-section">
        <div className="r-wrap">
          <Reveal>
            <p className="r-label">こだわり</p>
            <h2 className="r-h2">三つの、真心。</h2>
          </Reveal>
          <div className="r-kodawari-grid">
            {kodawari.map((k) => (
              <Reveal key={k.num}>
                <div className="r-kodawari">
                  <div className="r-kodawari-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={k.img} alt={k.alt} loading="lazy" />
                  </div>
                  <div>
                    <span className="r-num">{k.num}</span>
                    <h3>{k.title}</h3>
                    <p>{k.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* お品書き */}
      <section className="r-section r-menu-section">
        <div className="r-wrap">
          <Reveal>
            <p className="r-label">お品書き</p>
            <h2 className="r-h2">お品書き</h2>
          </Reveal>
          <Reveal>
            <div className="r-menu-grid">
              <div>
                {menu.map((m) => (
                  <div key={m.cat}>
                    <p className="r-menu-cat">{m.cat}</p>
                    <ul className="r-menu-list">
                      {m.items.map(([name, price]) => (
                        <li key={name}>
                          <span className="name">{name}</span>
                          <span className="price">{price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="r-menu-note">
                  ※ 価格は税込です。スープがなくなり次第、閉店いたします。
                </p>
              </div>
              <figure className="r-menu-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/demo/ramen/gyoza.jpg"
                  alt="焼餃子"
                  loading="lazy"
                />
                <figcaption>焼餃子 ── 皮から手包み</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 店舗案内 */}
      <section className="r-section">
        <div className="r-wrap">
          <Reveal>
            <p className="r-label">店舗案内</p>
            <h2 className="r-h2">カウンター八席の、小さな店。</h2>
          </Reveal>
          <Reveal>
            <div className="r-info-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/ramen/interior.jpg"
                alt="夜のカウンター席"
                loading="lazy"
              />
              <div>
                <table className="r-info-table">
                  <tbody>
                    <tr>
                      <th>屋号</th>
                      <td>麺処 ゆげや</td>
                    </tr>
                    <tr>
                      <th>住所</th>
                      <td>東京都某区麺食町一丁目2-3</td>
                    </tr>
                    <tr>
                      <th>営業</th>
                      <td>
                        昼 11:30 — 15:00
                        <br />
                        夜 18:00 — 21:00（スープ切れ仕舞い）
                      </td>
                    </tr>
                    <tr>
                      <th>定休</th>
                      <td>水曜日</td>
                    </tr>
                    <tr>
                      <th>席数</th>
                      <td>カウンター 8席</td>
                    </tr>
                    <tr>
                      <th>支払</th>
                      <td>現金・コード決済</td>
                    </tr>
                  </tbody>
                </table>
                <p className="r-info-note">
                  ※ この店舗は実在しません。架空店舗のデザインサンプルです。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 締め */}
      <section className="r-close">
        <Reveal>
          <p>今日も、湯気の向こうで。</p>
        </Reveal>
      </section>

      <footer className="r-footer">
        「麺処 ゆげや」は実在しない架空の店舗です。このページは{" "}
        <Link href="/">Santa Works</Link>{" "}
        が制作したWebデザインサンプルです。写真: Unsplash
      </footer>

      <Link href="/works/" className="r-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </>
  );
}
