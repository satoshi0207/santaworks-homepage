import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";
import Hours from "../Hours";
import { CLINIC } from "../data";
import { IconPhone } from "../icons";

export const metadata: Metadata = {
  title: "診療案内",
  description:
    "そよぎ内科クリニック（架空）の診療案内。風邪・発熱、生活習慣病、健康診断・予防接種、各種検査についてのデザインサンプルです。",
};

const details = [
  {
    id: "kaze",
    title: "風邪・発熱・のどの痛み",
    body: "発熱、咳、のどの痛み、鼻水、腹痛や下痢など、日常のからだの不調を診ます。症状の始まった日と、その後の変化を教えていただけると助かります。",
    items: [
      "発熱・咳・のどの痛み・鼻の症状",
      "お腹の風邪（腹痛・下痢・吐き気）",
      "インフルエンザ・新型コロナウイルスなどの検査",
      "花粉症・アレルギー性鼻炎のご相談",
    ],
    note: "発熱や咳のある方は、来院前にお電話ください。他の患者さんと動線を分けてご案内します。",
  },
  {
    id: "seikatsu",
    title: "高血圧・糖尿病・脂質異常症",
    body: "健診で数値を指摘された段階のご相談から、お薬を続けながらの通院まで対応します。生活の事情はひとりずつ違うので、続けられる方法を一緒に決めていきます。",
    items: [
      "高血圧・糖尿病・脂質異常症（コレステロール）",
      "高尿酸値（痛風）・貧血・肝機能の数値",
      "健診結果の見方のご相談",
      "他院で処方されているお薬の継続（お薬手帳をお持ちください）",
    ],
    note: "検査の結果や治療の効果は、体の状態や生活によって一人ずつ違います。数値の目標は診察のなかでご相談して決めます。",
  },
  {
    id: "kenshin",
    title: "健康診断・予防接種",
    body: "特定健診や港見市の各種健診、予防接種に対応します（いずれも予約制）。健診の種類によって、当日の食事の制限などをご案内します。",
    items: [
      "特定健診（対象の方は自己負担なしで受けられます）",
      "港見市の各種健診・がん検診",
      "就職・入学などの健康診断書",
      "インフルエンザ・肺炎球菌などの予防接種",
    ],
    note: "健診・予防接種は枠を分けてご案内しています。ご希望の時期がお決まりでしたら、お電話でご相談ください。",
  },
  {
    id: "kensa",
    title: "院内で行える検査",
    body: "その日のうちに結果をお伝えできる検査を院内に備えています。結果は画面と紙の両方でご説明し、次回いつ来ればよいかまでお伝えします。",
    items: [
      "血液検査・尿検査",
      "心電図",
      "胸部・腹部のレントゲン",
      "腹部・頸動脈の超音波検査",
    ],
    note: "CT・MRI・胃カメラ・大腸カメラなど院内で行えない検査は、連携先の病院・専門のクリニックへご紹介します。",
  },
];

/* 自費（保険が使えない）項目は、費用だけでなく内容と主な副反応まで書く */
const vaccines = [
  {
    name: "インフルエンザ予防接種",
    price: "3,500円",
    note: "13歳以上は1回。接種部位の痛み・赤み、発熱などが起こることがあります。",
  },
  {
    name: "肺炎球菌ワクチン（成人）",
    price: "8,000円",
    note: "港見市の助成対象の方は、自己負担額が変わります。接種部位の痛み・発熱などが起こることがあります。",
  },
  {
    name: "健康診断書の作成（当院の様式以外）",
    price: "3,000円",
    note: "検査項目により追加費用が生じます。金額は事前にお見積りします。",
  },
];

export default function Shinryo() {
  return (
    <>
      <PageHead en="Medical" title="診療案内" />

      <section className="sy-section">
        <div className="sy-wrap">
          <div className="sy-shead">
            <h2>かかりつけ医として診ていること</h2>
            <p>
              {CLINIC.departments}
              を中心に、日常のからだの不調と、長くつき合っていく生活習慣病の管理を診ています。
              受診してよいか迷う症状のご相談も承ります。
            </p>
          </div>

          <div className="sy-cards">
            {details.map((d) => (
              <div className="sy-card" key={d.id} id={d.id}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <ul>
                  {d.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="sy-note">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 正直に線を引く。ここが患者さんの無駄足を防ぐ */}
      <section className="sy-section sy-band" aria-labelledby="honest-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Scope</p>
            <h2 id="honest-h">当院で診られること・診られないこと</h2>
            <p>
              先にお伝えしておくほうが、患者さんの時間を無駄にしません。
              下記に当てはまる場合も、どこへ行けばよいかはご案内できます。
            </p>
          </div>
          <div className="sy-honest">
            <div className="can">
              <h3>
                <span className="badge" aria-hidden="true">
                  ○
                </span>
                当院で対応します
              </h3>
              <ul>
                <li>発熱・咳・のどの痛みなど、日常のからだの不調</li>
                <li>高血圧・糖尿病・脂質異常症の管理と、お薬の継続</li>
                <li>健診の結果のご相談、特定健診・各種健診</li>
                <li>予防接種（予約制）</li>
                <li>血液・尿検査、心電図、レントゲン、超音波検査</li>
              </ul>
            </div>
            <div className="cannot">
              <h3>
                <span className="badge" aria-hidden="true">
                  →
                </span>
                連携先の病院へご紹介します
              </h3>
              <ul>
                <li>入院・手術が必要な状態</li>
                <li>CT・MRI・胃カメラ・大腸カメラなどの検査</li>
                <li>整形外科・眼科・耳鼻科・皮膚科などの専門的な治療</li>
                <li>小児科の予防接種・乳幼児健診</li>
                <li>夜間・休日の急な症状（救急外来へご相談ください）</li>
              </ul>
              <p>
                紹介状の作成は当日または後日お渡しします。受診の予約をこちらでお取りする場合もあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 自費項目：費用・内容・主な副反応をそろえて書く */}
      <section className="sy-section" aria-labelledby="price-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Fee</p>
            <h2 id="price-h">保険が使えない項目の費用</h2>
            <p>
              下記は自費（保険適用外）の項目です。費用・内容・起こりうる副反応をあらかじめご確認ください。
              保険診療の窓口負担は、加入している保険と負担割合によって決まります。
            </p>
          </div>
          <table className="sy-price">
            <caption>自費項目の費用（すべて税込・架空の金額です）</caption>
            <thead>
              <tr>
                <th scope="col">項目</th>
                <th scope="col">費用</th>
                <th scope="col">内容・主な副反応</th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((v) => (
                <tr key={v.name}>
                  <th scope="row">{v.name}</th>
                  <td className="yen">{v.price}</td>
                  <td>{v.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="sy-note">
            ※
            予防接種は体調やこれまでの接種歴によって、受けられない場合・時期をずらす場合があります。
            接種前に問診でご確認します。
          </p>
        </div>
      </section>

      <section className="sy-section sy-beige" aria-labelledby="h-hours">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Hours</p>
            <h2 id="h-hours">診療時間</h2>
          </div>
          <Hours />
        </div>
      </section>

      <section className="sy-cta">
        <div className="sy-wrap sy-cta-inner">
          <h2>受診してよいか迷うときも、お電話ください</h2>
          <p>症状のご相談だけでも構いません。受付時間内はスタッフが応対します。</p>
          <a className="sy-cta-tel" href={CLINIC.telHref}>
            <span className="num">{CLINIC.tel}</span>
            <small>
              午前 {CLINIC.am}／午後 {CLINIC.pm}（架空の番号です）
            </small>
          </a>
          <div className="sy-cta-actions">
            <Link className="sy-btn-outline" href="/demo/naika/access/#reserve">
              Web予約
            </Link>
            <Link className="sy-btn-outline" href="/demo/naika/access/">
              初診の流れを見る
            </Link>
          </div>
          <p className="sy-note">
            <IconPhone />
            ※ デザインサンプルのため、電話・予約はいずれも架空です。
          </p>
        </div>
      </section>
    </>
  );
}
