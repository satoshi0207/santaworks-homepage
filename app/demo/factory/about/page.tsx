import type { Metadata } from "next";
import DemoMap from "@/components/DemoMap";
import { Reveal } from "@/components/motion";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "会社概要",
};

const history = [
  {
    era: "昭和48年（1973）",
    body: "創業者・明川庄一が、街路灯部品の下請け工場として東京都灯町に「灯火製作所」を開業。",
  },
  {
    era: "昭和61年（1986）",
    body: "工場を現在地に移転。NC旋盤を導入し、切削加工を本格化。",
  },
  {
    era: "平成9年（1997）",
    body: "法人化し「有限会社灯火製作所」に。二代目・明川光男が代表就任。",
  },
  {
    era: "平成24年（2012）",
    body: "マシニングセンタ・三次元測定機を導入。医療機器・計測機器部品に参入。",
  },
  {
    era: "令和3年（2021）",
    body: "三代目・明川誠が代表就任。",
  },
  {
    era: "令和8年（2026）",
    body: "ウェブサイトを開設。",
  },
];

const company: [string, React.ReactNode][] = [
  ["社名", "有限会社 灯火製作所（ともしびせいさくしょ）"],
  ["所在地", "東京都某区灯町2-7-4（架空の住所です）"],
  ["創業", "昭和48年（1973年）4月"],
  ["設立", "平成9年（1997年）6月"],
  ["代表者", "代表取締役 明川 誠"],
  ["資本金", "300万円"],
  ["従業員", "12名（2026年7月現在）"],
  [
    "事業内容",
    "金属精密部品の切削加工、板金・溶接加工、小ロット量産・組立",
  ],
  [
    "主要取引分野",
    "照明機器・医療機器・計測機器・産業機械（いずれも架空の想定です）",
  ],
];

export default function FactoryAbout() {
  return (
    <>
      <PageHead en="Company" title="会社概要" />

      {/* 代表挨拶 */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Greeting</p>
            <h2 className="t-h2">代表挨拶</h2>
          </Reveal>
          <Reveal>
            <div className="t-greeting">
              <div>
                <p className="quote">
                  灯を絶やさぬこと。無理をせぬこと。手を抜かぬこと。
                </p>
                <p>
                  祖父が最初に受けた仕事は、町の街路灯の部品づくりだったと聞いています。「自分の作った部品が、夜道を照らしている」——その誇りが、屋号の由来であり、いまも私たちの原点です。
                </p>
                <p>
                  時代は変わり、いまお預かりする図面の多くは医療機器や計測機器の部品になりました。それでも、一つひとつの部品の向こうに使う人がいることは変わりません。小さな工場ですが、だからこそ一個一個に目が届く。それが私たちの仕事です。
                </p>
                <p className="sign">
                  代表取締役<strong>明川 誠</strong>
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/factory/lathe.jpg"
                alt="創業当時から使われてきた旋盤"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 沿革 */}
      <section className="t-section t-news">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">History</p>
            <h2 className="t-h2">沿革</h2>
          </Reveal>
          <Reveal>
            <ul className="t-history">
              {history.map((h) => (
                <li key={h.era}>
                  <span className="era">{h.era}</span>
                  <p>{h.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Profile</p>
            <h2 className="t-h2">会社情報</h2>
          </Reveal>
          <Reveal>
            <table className="t-table">
              <tbody>
                {company.map(([th, td]) => (
                  <tr key={th}>
                    <th>{th}</th>
                    <td>{td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal>
            <h2 className="t-h2" style={{ marginTop: "3.5rem" }}>
              アクセス
            </h2>
            <p>
              灯町駅 南口から徒歩6分。お車の場合は工場前に来客用駐車場（2台）がございます。
            </p>
            <DemoMap station="灯町駅" walk="南口から徒歩6分" shop="灯" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
