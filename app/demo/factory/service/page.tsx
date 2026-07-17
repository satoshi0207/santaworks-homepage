import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "事業内容",
};

const services = [
  {
    img: "/demo/factory/works.jpg",
    alt: "切削加工したギアとシャフト",
    title: "精密切削加工",
    body: [
      "NC旋盤・マシニングセンタによる切削加工です。シャフト、ギア、ブッシュなどの丸物・小物精密部品を、φ1mmの微細径から対応します。",
      "単品の試作から数千個の量産まで。検査成績書の発行にも対応しています。",
    ],
    tags: ["アルミ", "ステンレス", "鉄", "真鍮", "樹脂"],
  },
  {
    img: "/demo/factory/craft.jpg",
    alt: "TIG溶接の作業風景",
    title: "板金・溶接",
    body: [
      "創業以来の得意分野です。薄板の板金、パイプ加工、TIG溶接による組立まで。照明器具の笠やアーム、制御盤の筐体、機械カバーなどを製作しています。",
      "「図面はないが現物はある」——そんなご相談も歓迎です。現物から採寸して製作します。",
    ],
    tags: ["薄板板金", "パイプ加工", "TIG溶接", "スポット溶接"],
  },
  {
    img: "/demo/factory/parts.jpg",
    alt: "整列した量産部品",
    title: "小ロット量産・組立",
    body: [
      "数十個〜数千個の「大手には頼みにくい」ロットこそ、私たちの出番です。切削・板金と社内で完結するため、小回りが利きます。",
      "部品加工だけでなく、簡単な組立（アッセンブリ）・梱包までの一貫対応が可能です。",
    ],
    tags: ["多品種少量", "アッセンブリ", "全数検査"],
  },
];

const flow = [
  {
    title: "お問い合わせ",
    body: "図面・現物・ラフスケッチ、何でも構いません。フォームまたはお電話でどうぞ。",
  },
  {
    title: "お見積り",
    body: "原則2営業日以内にお見積りを提出します。工程のご提案も併せて行います。",
  },
  {
    title: "試作・確認",
    body: "まず1個お作りし、寸法・仕上がりをご確認いただきます。",
  },
  {
    title: "量産・納品",
    body: "全数検査のうえ納品。継続品はリピート発注に素早くお応えします。",
  },
];

const equipment: [string, string][] = [
  ["NC旋盤", "3台"],
  ["CNC複合旋盤", "1台（2026年増設）"],
  ["マシニングセンタ", "2台"],
  ["ベンダー／シャーリング", "各1台"],
  ["TIG溶接機", "2台"],
  ["三次元測定機", "1台"],
];

export default function FactoryService() {
  return (
    <>
      <PageHead en="Service" title="事業内容" />

      {/* 3事業 */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Service</p>
            <h2 className="t-h2">小さな工場の、大きな守備範囲。</h2>
          </Reveal>
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="t-service-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.alt} loading="lazy" />
                <div className="desc">
                  <h3 className="t-h3">{s.title}</h3>
                  {s.body.map((p) => (
                    <p key={p.slice(0, 10)}>{p}</p>
                  ))}
                  <ul className="t-tags">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ご依頼の流れ */}
      <section className="t-section t-news">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Flow</p>
            <h2 className="t-h2">ご依頼の流れ</h2>
          </Reveal>
          <Reveal>
            <ol className="t-flow">
              {flow.map((f) => (
                <li key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 主要設備 */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Equipment</p>
            <h2 className="t-h2">主要設備</h2>
          </Reveal>
          <Reveal>
            <table className="t-table">
              <tbody>
                {equipment.map(([name, count]) => (
                  <tr key={name}>
                    <th>{name}</th>
                    <td>{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: "2.5rem" }}>
              「これは頼めるだろうか？」と迷ったら、まずはご相談ください。自社で難しい工程は、信頼できる協力工場と連携してお応えします。
            </p>
            <Link href="/demo/factory/contact/" className="t-btn">
              お見積り・ご相談はこちら
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
