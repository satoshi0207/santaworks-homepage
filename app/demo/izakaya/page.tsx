import Link from "next/link";
import DemoMap from "@/components/DemoMap";
import DemoSns from "@/components/DemoSns";
import { Reveal } from "@/components/motion";

const menu: { cat: string; items: [string, string][] }[] = [
  {
    cat: "串もの",
    items: [
      ["ねぎま", "220円"],
      ["つくね", "240円"],
      ["せせり", "230円"],
      ["かわ", "200円"],
      ["砂肝", "200円"],
      ["豚バラ", "230円"],
      ["うずら玉子", "210円"],
      ["ししとう", "180円"],
    ],
  },
  {
    cat: "肴",
    items: [
      ["ポテトサラダ", "420円"],
      ["冷やしトマト", "380円"],
      ["だし巻き玉子", "520円"],
      ["自家製ぬか漬け", "400円"],
      ["揚げ出し豆腐", "450円"],
      ["炙りしめ鯖", "580円"],
    ],
  },
  {
    cat: "酒",
    items: [
      ["生ビール", "550円"],
      ["レモンサワー", "480円"],
      ["ハイボール", "500円"],
      ["日本酒（半合）", "500円〜"],
      ["緑茶ハイ", "450円"],
      ["ほおずきハイ", "530円"],
    ],
  },
  {
    cat: "〆",
    items: [
      ["鶏だし茶漬け", "580円"],
      ["焼きおにぎり", "300円"],
      ["鶏スープ", "250円"],
    ],
  },
];

export default function IzakayaDemo() {
  return (
    <>
      {/* ヒーロー */}
      <section className="i-hero">
        <div className="i-hero-bg" aria-hidden="true" />
        <div className="i-hero-inner">
          <div className="mark" aria-hidden="true">
            <span>ほおずき</span>
          </div>
          <h1>
            今日も、
            <br />
            おつかれさま。
          </h1>
          <p className="sub">炭火串と旨い酒。路地裏の大衆酒場です。</p>
          <div className="i-hours">
            <span>17:00 — 23:30</span>
            <span>L.O. 23:00</span>
            <span>日曜定休</span>
          </div>
        </div>
      </section>

      {/* 名物 */}
      <section className="i-section">
        <div className="i-wrap">
          <Reveal>
            <p className="i-label">名物</p>
            <h2 className="i-h2">炭火の串は、一本から。</h2>
          </Reveal>
          <Reveal>
            <div className="i-meibutsu">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/izakaya/yakitori.jpg"
                alt="タレの照る炭火焼き鳥"
                loading="lazy"
              />
              <div>
                <p>
                  紀州備長炭で、注文を受けてから一本ずつ。タレは創業からの
                  <strong>継ぎ足し</strong>
                  、塩は席で振る岩塩。焼き場の煙も、うちのごちそうです。
                </p>
                <p>
                  お通しは日替わりの小鉢。まずは生ビールと、ねぎま・つくねからどうぞ。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* お品書き（短冊） */}
      <section className="i-section i-menu">
        <div className="i-wrap">
          <Reveal>
            <p className="i-label">お品書き</p>
            <h2 className="i-h2">壁の短冊から、お好きに。</h2>
          </Reveal>
          {menu.map((m) => (
            <Reveal key={m.cat}>
              <p className="i-cat">{m.cat}</p>
              <div className="i-tanzaku-row">
                {m.items.map(([name, price]) => (
                  <div className="i-tanzaku" key={name}>
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p className="i-menu-note">
              ※ 価格は税込です。仕入れにより本日の肴が変わります。壁の短冊が正です。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 乾杯バンド */}
      <section className="i-kanpai">
        <div className="bg" aria-hidden="true" />
        <Reveal>
          <p>まずは、乾杯から。</p>
        </Reveal>
      </section>

      {/* 店舗案内 */}
      <section className="i-section">
        <div className="i-wrap">
          <Reveal>
            <p className="i-label">店舗案内</p>
            <h2 className="i-h2">路地の突き当たり、赤い提灯が目印。</h2>
          </Reveal>
          <Reveal>
            <div className="i-info-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/izakaya/grill.jpg"
                alt="カウンター越しの焼き場"
                loading="lazy"
              />
              <div>
                <table className="i-info-table">
                  <tbody>
                    <tr>
                      <th>屋号</th>
                      <td>大衆酒場 ほおずき</td>
                    </tr>
                    <tr>
                      <th>住所</th>
                      <td>東京都某区赤提灯横丁3-2-1</td>
                    </tr>
                    <tr>
                      <th>営業</th>
                      <td>17:00 — 23:30（L.O. 23:00）</td>
                    </tr>
                    <tr>
                      <th>定休</th>
                      <td>日曜日</td>
                    </tr>
                    <tr>
                      <th>席数</th>
                      <td>カウンター6席・テーブル12席</td>
                    </tr>
                    <tr>
                      <th>予約</th>
                      <td>お電話にて（4名様まで）</td>
                    </tr>
                  </tbody>
                </table>
                <p className="i-info-note">
                  ※ この店舗は実在しません。架空店舗のデザインサンプルです。
                </p>
                <DemoSns
                  accounts={[
                    { kind: "x", handle: "@sakaba_hoozuki" },
                    { kind: "instagram", handle: "@sakaba_hoozuki" },
                  ]}
                />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <DemoMap station="赤提灯駅" walk="東口から徒歩1分" shop="ほ" />
          </Reveal>
        </div>
      </section>

      <footer className="i-footer">
        「大衆酒場 ほおずき」は実在しない架空の居酒屋です。このページは{" "}
        <Link href="/">Santa Works</Link>{" "}
        が制作したWebデザインサンプルです。写真: Unsplash
      </footer>

      <Link href="/works/" className="i-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </>
  );
}
