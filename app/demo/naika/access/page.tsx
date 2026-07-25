import type { Metadata } from "next";
import DemoMap from "@/components/DemoMap";
import PageHead from "../PageHead";
import Hours from "../Hours";
import { CLINIC } from "../data";
import { IconPhone } from "../icons";

export const metadata: Metadata = {
  title: "初診・アクセス",
  description:
    "そよぎ内科クリニック（架空）の初診の流れ・持ち物、予約、アクセス、よくあるご質問のデザインサンプルです。",
};

const bring = [
  "マイナ保険証（健康保険証として登録したマイナンバーカード）または資格確認書",
  "お持ちの方：お薬手帳、いま飲んでいるお薬",
  "お持ちの方：健康診断の結果、他院からの紹介状",
  "各種医療証・受給者証（お持ちの方）",
];

const faq = [
  {
    q: "予約は必要ですか？",
    a: "予約なしでも受診できます。お待たせする時間を短くしたい方は、お電話・Web・LINEでご予約ください。発熱や咳の症状がある方は、動線を分けてご案内するため、来院前にお電話をお願いしています。",
  },
  {
    q: "保険証（マイナ保険証・資格確認書）を忘れました。",
    a: "その場合はいったん全額をお支払いいただき、その月のうちにお持ちいただければ自己負担分に精算します。2026年8月1日以降は、これまでの健康保険証は使えませんのでご注意ください。ご不明なときは受付でお尋ねください。",
  },
  {
    q: "お薬だけ出してもらえますか？",
    a: "お薬をお出しするには診察が必要です（診察をせずに処方することはできません）。いつものお薬を続ける場合も、体調や数値の変化を確認したうえでお出しします。",
  },
  {
    q: "子どもも診てもらえますか？",
    a: "中学生以上を目安に診ています。乳幼児の健診・予防接種、小さなお子さまの急な発熱は、小児科の受診をおすすめしています。かかりつけの小児科をお探しの場合はご案内します。",
  },
  {
    q: "車いす・ベビーカーでも入れますか？",
    a: "入口から診察室まで段差はありません（自動ドア・スロープ）。車いすでお使いいただける多目的トイレがあり、通路は車いすとベビーカーがすれ違える幅にしています。付き添いの方もご一緒にお入りいただけます。",
  },
  {
    q: "支払い方法を教えてください。",
    a: "現金・クレジットカード・交通系ICでお支払いいただけます。金額は診療内容と保険の負担割合で決まります。高額になりそうなときは、お会計の前に目安をお伝えします。",
  },
];

export default function Access() {
  return (
    <>
      <PageHead en="First Visit & Access" title="初診・アクセス" />

      {/* 初診の流れ */}
      <section className="sy-section" aria-labelledby="flow-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Flow</p>
            <h2 id="flow-h">初診の流れ</h2>
            <p>
              受付から会計まで、だいたい30〜60分です（検査の内容によって前後します）。
              待ち時間が長くなりそうなときは、受付で目安をお伝えします。
            </p>
          </div>
          <ol className="sy-steps">
            <li>
              <h3>ご予約（なくても受診できます）</h3>
              <p>
                お電話・Web・LINEで承ります。必要なのは、ご希望の日時・お名前・連絡先・初診か再診かだけです。
                症状は受付と診察室で伺いますので、予約の時点で詳しく書いていただく必要はありません。
              </p>
            </li>
            <li>
              <h3>受付</h3>
              <p>
                マイナ保険証または資格確認書をお出しください。受付の機械の操作は、スタッフがお手伝いします。
                問診票は、書きづらいときは口頭で伺いながら記入します。
              </p>
            </li>
            <li>
              <h3>診察</h3>
              <p>
                いつから、どんなときに、どう変わったか。話しやすい順で結構です。
                必要な検査は、目的と費用の目安をお伝えしてから行います。
              </p>
            </li>
            <li>
              <h3>検査・ご説明</h3>
              <p>
                院内で行える検査は、その日のうちに結果をお伝えできるものもあります。
                画面と紙の両方でご説明し、ご希望があれば結果をお渡しします。
              </p>
            </li>
            <li>
              <h3>お会計・次回のご案内</h3>
              <p>
                現金・クレジットカード・交通系ICに対応しています。
                次はいつ来ればよいか、何かあればどうすればよいかを必ずお伝えします。
              </p>
            </li>
          </ol>

          <div style={{ marginTop: "1.8rem" }}>
            <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.7rem" }}>
              初診のときにお持ちいただくもの
            </h3>
            <div className="sy-card">
              <ul style={{ margin: 0 }}>
                {bring.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="sy-note">
                2026年8月1日以降、これまでの健康保険証は使えません。マイナ保険証をお持ちでない方は、
                加入している保険者から交付される「資格確認書」をお持ちください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web予約（ダミー） */}
      <section className="sy-section sy-band" id="reserve" aria-labelledby="reserve-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Reservation</p>
            <h2 id="reserve-h">Web予約</h2>
            <p>
              ご希望の日時・お名前・連絡先だけで承ります。
              症状は受付と診察室で伺いますので、この画面では入力いただきません。
            </p>
          </div>

          <form className="sy-form" aria-label="Web予約フォーム（サンプル）">
            <p className="sy-form-dummy">
              ここはデザインサンプルです。<strong>入力内容は送信されません。</strong>
              実際の案件では、予約システム（既製サービス）との連携、またはメール送信の設定を行います。
            </p>
            <div>
              <label htmlFor="r-name">
                お名前
                <span className="req">必須</span>
              </label>
              <input id="r-name" name="name" type="text" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="r-tel">
                電話番号
                <span className="req">必須</span>
              </label>
              <input id="r-tel" name="tel" type="tel" autoComplete="tel" inputMode="tel" />
              <p className="hint">
                前日の確認や、変更のご連絡に使います。日中つながる番号をご記入ください。
              </p>
            </div>
            <div>
              <label htmlFor="r-kind">
                初診・再診
                <span className="req">必須</span>
              </label>
              <select id="r-kind" name="kind" defaultValue="">
                <option value="" disabled>
                  選んでください
                </option>
                <option value="first">はじめて受診します</option>
                <option value="repeat">2回目以降です</option>
              </select>
            </div>
            <div>
              <label htmlFor="r-date">ご希望の日</label>
              <input id="r-date" name="date" type="date" />
            </div>
            <div>
              <label htmlFor="r-time">ご希望の時間帯</label>
              <select id="r-time" name="time" defaultValue="">
                <option value="" disabled>
                  選んでください
                </option>
                <option value="am">午前（{CLINIC.am}）</option>
                <option value="pm">午後（{CLINIC.pm}）</option>
                <option value="any">どちらでもよい</option>
              </select>
            </div>
            <p className="hint" style={{ margin: 0 }}>
              いただいた情報は、ご予約の確認・変更のご連絡にのみ使用します。
            </p>
            <button className="sy-btn" type="button">
              予約する（サンプル）
            </button>
          </form>
        </div>
      </section>

      {/* LINE導線 */}
      <section className="sy-section" id="line" aria-labelledby="line-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">LINE</p>
            <h2 id="line-h">LINEで予約・お知らせ</h2>
            <p>
              友だち追加をしていただくと、予約と当院からのお知らせをLINEで受け取れます。
              アプリのインストールは要りません。
            </p>
          </div>
          <div className="sy-cards">
            <div className="sy-card">
              <h3>LINEでできること</h3>
              <ul>
                <li>ご予約・変更・キャンセル</li>
                <li>前日のご予約のお知らせ</li>
                <li>順番が近づいたときのお知らせ</li>
                <li>休診・診療時間の変更のお知らせ</li>
              </ul>
            </div>
            <div className="sy-card">
              <h3>LINEではしないこと</h3>
              <ul>
                <li>症状のご相談・診断（診察が必要です）</li>
                <li>検査結果のご連絡</li>
                <li>お薬の処方</li>
              </ul>
              <p className="sy-note">
                やり取りの内容は予約に関することに限っています。お困りの症状は診察室で伺います。
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1.6rem" }}>
            <button className="sy-btn-line" type="button">
              LINEで友だち追加（サンプル）
            </button>
          </p>
          <p className="sy-note">
            ※ デザインサンプルのため、このボタンからは追加できません。
          </p>
        </div>
      </section>

      {/* アクセス */}
      <section className="sy-section sy-beige" aria-labelledby="access-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Access</p>
            <h2 id="access-h">アクセス</h2>
          </div>
          <div className="sy-split">
            <dl className="sy-info">
              <div>
                <dt>住所</dt>
                <dd>
                  {CLINIC.zip} {CLINIC.address}
                </dd>
              </div>
              <div>
                <dt>電車</dt>
                <dd>
                  {CLINIC.station}
                  {CLINIC.walk}
                  <br />
                  改札を出て南口へ。商店街をまっすぐ進み、郵便局の角を右です。
                </dd>
              </div>
              <div>
                <dt>バス</dt>
                <dd>港見市営バス「若葉台三丁目」下車 徒歩1分</dd>
              </div>
              <div>
                <dt>駐車場</dt>
                <dd>
                  {CLINIC.parking}
                  <br />
                  満車のときは、恐れ入りますが近隣の駐車場をご利用ください。
                </dd>
              </div>
              <div>
                <dt>電話</dt>
                <dd>
                  <a href={CLINIC.telHref}>{CLINIC.tel}</a>（架空の番号です）
                </dd>
              </div>
            </dl>
            <DemoMap station={CLINIC.station} walk={CLINIC.walk} shop="そ" />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Hours />
          </div>
        </div>
      </section>

      {/* よくあるご質問 */}
      <section className="sy-section" aria-labelledby="faq-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">FAQ</p>
            <h2 id="faq-h">よくあるご質問</h2>
          </div>
          <div className="sy-faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="answer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sy-cta">
        <div className="sy-wrap sy-cta-inner">
          <h2>ご不明なことは、お電話でお尋ねください</h2>
          <p>
            持ち物や受診の時間帯など、迷うことがあればお気軽にどうぞ。受付時間内はスタッフが応対します。
          </p>
          <a className="sy-cta-tel" href={CLINIC.telHref}>
            <span className="num">{CLINIC.tel}</span>
            <small>
              午前 {CLINIC.am}／午後 {CLINIC.pm}（架空の番号です）
            </small>
          </a>
          <p className="sy-note">
            <IconPhone />
            ※ デザインサンプルのため、電話・予約はいずれも架空です。
          </p>
        </div>
      </section>
    </>
  );
}
