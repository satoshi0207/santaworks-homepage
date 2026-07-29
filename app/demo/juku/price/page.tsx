import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";
import { FEES, OTHER_FEES, SCHOOL } from "../data";

export const metadata: Metadata = {
  title: "料金",
  description:
    "架空の学習塾「個別指導塾 あすなろ」の料金。学年別の月謝、月謝以外にかかる費用、お支払い方法（デザインサンプル）。",
};

const faqs: [string, string][] = [
  [
    "途中で回数を変えられますか。",
    "変えられます。前月の20日までにお申し出ください。学年が上がるタイミングや、部活の引退後に増やされる方が多いです。",
  ],
  [
    "きょうだいの割引はありますか。",
    "2人目以降の月謝を10%割引しています。手続きは不要で、ご入塾の時点で自動的に適用します。",
  ],
  [
    "季節講習は必ず受けないといけませんか。",
    "任意です。受けない選択をされても、通常授業の扱いは変わりません。必要かどうかは面談で正直にお伝えします。",
  ],
  [
    "支払い方法は。",
    "口座振替（毎月27日）またはクレジットカードです。お子さんに現金を持たせていただく必要はありません。",
  ],
  [
    "退塾したいときは。",
    "前月末までにお申し出ください。違約金はいただきません。理由もお伺いしませんが、もし改善できることであれば教えていただけると助かります。",
  ],
];

export default function JukuPrice() {
  return (
    <>
      <PageHead
        en="Tuition"
        title="料金"
        lead="追加の教材費や管理費で不安にさせません。ここに書いてあるものが、すべてです。"
      />

      {/* 月謝 */}
      <section className="as-section">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Monthly</p>
            <h2 className="as-h2">
              学年別の<span className="blue">月謝</span>
            </h2>
            <p className="as-sub">1コマ80分・完全個別（講師1人に生徒2人まで）</p>
          </div>
          <table className="as-fee-table">
            <caption className="as-fee-caption">
              月額・税込（架空の学習塾のサンプル料金です）
            </caption>
            <thead>
              <tr>
                <th>学年</th>
                <th>週1回</th>
                <th>週2回</th>
                <th>週3回</th>
              </tr>
            </thead>
            <tbody>
              {FEES.map((f) => (
                <tr key={f.grade}>
                  <th scope="row">{f.grade}</th>
                  <td className="price">{f.w1}</td>
                  <td className="price">{f.w2}</td>
                  <td className="price">{f.w3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 月謝以外 */}
      <section className="as-section paper2" aria-labelledby="other-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Other costs</p>
            <h2 className="as-h2" id="other-h">
              月謝以外にかかるもの
            </h2>
            <p className="as-sub">
              「表示価格がすべて」と言う以上、かかるものは先に全部書きます。
            </p>
          </div>
          <table className="as-other-table">
            <thead>
              <tr>
                <th scope="col">項目</th>
                <th scope="col">費用</th>
                <th scope="col">内容</th>
              </tr>
            </thead>
            <tbody>
              {OTHER_FEES.map(([item, cost, note]) => (
                <tr key={item}>
                  <th scope="row">{item}</th>
                  <td className="cost">{cost}</td>
                  <td>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="as-fee-note">
            ※
            季節講習の金額は、受講される科目と回数によって変わります。面談のときに、必要な分だけをお見積りします。
          </p>
        </div>
      </section>

      {/* きょうだい割 */}
      <section className="as-section">
        <div className="as-wrap">
          <div className="as-discount">
            <div>
              <p className="as-label">Discount</p>
              <h2 className="as-h2" style={{ marginBottom: "0.8rem" }}>
                きょうだい割引 <span className="blue">10%</span>
              </h2>
              <p>
                ごきょうだいで通われる場合、2人目以降の月謝を10%割引します。
                お手続きは不要で、ご入塾の時点で自動的に適用します。
                「言わないと適用されない割引」にはしません。
              </p>
            </div>
            <div className="as-discount-figure" aria-hidden="true">
              <span className="off as-poppins">10%</span>
              <span className="label">OFF</span>
            </div>
          </div>
        </div>
      </section>

      {/* 料金のFAQ */}
      <section className="as-section paper2" aria-labelledby="faq-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">FAQ</p>
            <h2 className="as-h2" id="faq-h">
              料金についてのご質問
            </h2>
          </div>
          <div className="as-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="as-section">
        <div className="as-wrap as-cta-center">
          <h2 className="as-h2">お見積りは、面談のときにその場でお出しします。</h2>
          <p className="as-sub">
            あとから金額が変わることはありません。{SCHOOL.reception}
          </p>
          <div className="as-more">
            <Link href="/demo/juku/access/#trial" className="as-btn">
              無料体験・面談を申し込む
            </Link>
            <a href={SCHOOL.telHref} className="as-btn-ghost">
              電話で相談する（{SCHOOL.tel}）
            </a>
          </div>
          <p className="as-fee-note" style={{ textAlign: "center" }}>
            ※ 架空の番号です。
          </p>
        </div>
      </section>
    </>
  );
}
