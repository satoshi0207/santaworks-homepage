import type { Metadata } from "next";
import DemoMap from "@/components/DemoMap";
import PageHead from "../PageHead";
import { SCHOOL } from "../data";

export const metadata: Metadata = {
  title: "体験・アクセス",
  description:
    "架空の学習塾「個別指導塾 あすなろ」の無料体験の流れ・お申し込み・アクセス・よくあるご質問（デザインサンプル）。",
};

const trial: [string, string, string][] = [
  [
    "01",
    "お申し込み",
    "下のフォームかお電話で。学年と、気になっていることだけ教えてください。",
  ],
  [
    "02",
    "学習相談（30分）",
    "保護者さまとお子さんに来ていただき、いまの状況を伺います。この日は体験なしでも構いません。",
  ],
  [
    "03",
    "体験授業（80分）",
    "実際の授業に入っていただきます。担当予定の講師がつきます。",
  ],
  [
    "04",
    "ご提案とお見積り",
    "コースと回数、月々の金額をその場でお出しします。持ち帰ってご検討ください。",
  ],
];

const faqs: [string, string][] = [
  [
    "体験のあと、しつこく勧誘されませんか。",
    "こちらからお電話することはありません。ご検討の結果はお待ちしますし、他塾に決められた場合もご連絡は不要です。",
  ],
  [
    "保護者だけで相談に行けますか。",
    "もちろんです。お子さんが乗り気でない段階のご相談も多くいただきます。",
  ],
  [
    "学年の途中からでも入れますか。",
    "いつでも入れます。学期の区切りを待つ必要はありません。むしろ、つまずいた直後のほうが戻しやすいです。",
  ],
  [
    "部活が忙しく、曜日が読めません。",
    "振替は前日までのご連絡で承ります。回数が消えることはありません。",
  ],
  [
    "駐車場はありますか。",
    "ビル専用の駐車場はありません。送迎の際は、建物前のスペースに一時停車いただけます。",
  ],
];

export default function JukuAccess() {
  return (
    <>
      <PageHead
        en="Trial & Access"
        title="体験・アクセス"
        lead="体験授業と学習相談は無料です。入塾を決めていない段階で、けっこうです。"
      />

      {/* 体験の流れ */}
      <section className="as-section" id="trial" style={{ scrollMarginTop: "4.5rem" }}>
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Free trial</p>
            <h2 className="as-h2">
              無料体験の<span className="blue">流れ</span>
            </h2>
            <p className="as-sub">
              お申し込みから、ご提案まで。だいたい1〜2週間です。
            </p>
          </div>
          <ol className="as-trial">
            {trial.map(([no, title, body]) => (
              <li key={no}>
                <span className="no as-poppins">{no}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 申し込みフォーム */}
      <section className="as-section paper2" aria-labelledby="form-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Contact</p>
            <h2 className="as-h2" id="form-h">
              お申し込み・お問い合わせ
            </h2>
          </div>
          <form className="as-form" aria-describedby="form-note">
            <div className="row">
              <div className="field">
                <label htmlFor="j-name">保護者さまのお名前</label>
                <input id="j-name" type="text" disabled placeholder="港見 花子" />
              </div>
              <div className="field">
                <label htmlFor="j-grade">お子さんの学年</label>
                <select id="j-grade" disabled defaultValue="">
                  <option value="">選択してください</option>
                  <option>小学生</option>
                  <option>中学生</option>
                  <option>高校生・既卒</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="j-tel">お電話番号</label>
                <input id="j-tel" type="tel" disabled placeholder="000-0000-0000" />
              </div>
              <div className="field">
                <label htmlFor="j-mail">メールアドレス</label>
                <input id="j-mail" type="email" disabled placeholder="you@example.com" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="j-msg">気になっていること</label>
              <textarea
                id="j-msg"
                rows={4}
                disabled
                placeholder="例）数学だけがどうしても伸びません。中2の途中から分からなくなったようです。"
              />
            </div>
            <button type="button" className="as-btn" disabled>
              この内容で申し込む
            </button>
            <p className="as-fee-note" id="form-note">
              ※
              これはデザインサンプルです。フォームは動作せず、入力内容が送信されることはありません。
            </p>
          </form>
        </div>
      </section>

      {/* アクセス */}
      <section className="as-section" aria-labelledby="access-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Access</p>
            <h2 className="as-h2" id="access-h">
              教室までの道のり
            </h2>
          </div>
          <div className="as-access">
            <div>
              <table className="as-info-table">
                <tbody>
                  <tr>
                    <th scope="row">お電話</th>
                    <td>
                      <a className="as-tel" href={SCHOOL.telHref}>
                        {SCHOOL.tel}
                      </a>
                      <br />
                      （架空の番号です／{SCHOOL.reception}）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">開校</th>
                    <td>
                      {SCHOOL.open}（{SCHOOL.openNote}）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">休校</th>
                    <td>{SCHOOL.closed}</td>
                  </tr>
                  <tr>
                    <th scope="row">住所</th>
                    <td>
                      {SCHOOL.address}
                      <br />
                      （架空の住所です／{SCHOOL.station} {SCHOOL.walk}）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <DemoMap
                station={SCHOOL.station}
                walk={SCHOOL.walk}
                shop="あ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="as-section paper2" aria-labelledby="faq-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">FAQ</p>
            <h2 className="as-h2" id="faq-h">
              よくあるご質問
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
    </>
  );
}
