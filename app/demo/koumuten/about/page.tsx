import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "私たちのこと",
  description:
    "架空の工務店「ひだまり工務店」の代表あいさつ・職人紹介・会社概要・採用情報（デザインサンプル）。",
};

const values = [
  {
    no: "01",
    title: "正直な見積り",
    body: "「一式」でごまかしません。どこにいくらかかるのか、素材のグレードまで内訳を開いてご説明します。",
  },
  {
    no: "02",
    title: "住む人の時間軸で",
    body: "10年後、20年後の暮らしまで想像して設計します。お子さんの成長も、老後の動線も。",
  },
  {
    no: "03",
    title: "地域の顔として",
    body: "近所だからこそ、いい加減な仕事はできません。困ったときすぐ駆けつけられる距離でいます。",
  },
];

const members = [
  {
    initial: "棟",
    role: "棟梁 / 代表",
    name: "陽田 守",
    body: "この道38年。若手を育てながら、いまも自ら現場に立つ。趣味は家庭菜園と将棋。",
  },
  {
    initial: "大",
    role: "大工",
    name: "森下 拓",
    body: "無垢材の加工を得意とする中堅。造作家具のリクエストは、まず森下に。",
  },
  {
    initial: "コ",
    role: "コーディネーター",
    name: "青木 ひかり",
    body: "暮らしの希望を形にする窓口役。色・素材選びや資金計画のご相談はこちらへ。",
  },
];

const profile: [string, React.ReactNode][] = [
  ["社名", "ひだまり工務店（架空）"],
  ["代表者", "陽田 守（ひだ まもる）"],
  ["所在地", "山ノ手県 陽向市 本町3-12（架空の住所です）"],
  ["設立", "1998年（平成10年）"],
  ["事業内容", "木造住宅の新築・リフォーム・増改築・修繕、外構工事"],
  ["建設業許可", "山ノ手県知事 許可（般-00）第00000号（架空）"],
  ["電話", "0120-00-0000（架空の番号です）"],
  ["営業時間", "9:00–18:00（日曜・祝日休）"],
];

export default function KoumutenAbout() {
  return (
    <>
      <PageHead en="About us" title="私たちのこと" />

      {/* 代表あいさつ */}
      <section className="hd-section">
        <div className="hd-wrap">
          <div className="hd-greeting">
            <div>
              <p className="hd-label">Message</p>
              <h2 className="hd-h2">
                家は、
                <span className="accent">思い出</span>が積もる場所。
              </h2>
              <p>
                大工の父の背中を見て育ち、この仕事を継ぎました。
                若い頃は「速く・正確に」ばかり考えていましたが、
                建てた家に何度もお邪魔するうちに、考えが変わりました。
              </p>
              <p>
                柱についた背比べの傷、家族が集まる食卓の位置、
                朝いちばんに陽が差す窓。家は完成した瞬間より、
                住みながら少しずつ「いい顔」になっていくものだと。
              </p>
              <p>
                だから私たちは、図面の外にある暮らしまで一緒に考えます。
                そのお手伝いができることを、心から誇りに思っています。
              </p>
              <p className="hd-sign">
                ひだまり工務店 棟梁 / 代表<strong>陽田 守</strong>
              </p>
            </div>
            <div className="hd-greeting-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/koumuten/craft.jpg" alt="現場に立つ棟梁" />
            </div>
          </div>
        </div>
      </section>

      {/* 家づくりの考え方 */}
      <section className="hd-section hd-band">
        <div className="hd-wrap">
          <p className="hd-label">Our values</p>
          <h2 className="hd-h2">家づくりで、大切にしていること</h2>
          <div className="hd-values" style={{ marginTop: "2rem" }}>
            {values.map((v) => (
              <div key={v.no} className="hd-value">
                <span className="no">{v.no}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 職人紹介 */}
      <section className="hd-section">
        <div className="hd-wrap">
          <p className="hd-label">Members</p>
          <h2 className="hd-h2">つくる人たち</h2>
          <p className="hd-lead">
            顔の見える職人が、責任をもって家づくりにあたります。（人物はすべて架空です）
          </p>
          <div className="hd-team">
            {members.map((m) => (
              <div key={m.name} className="hd-member">
                <div className="avatar" aria-hidden="true">
                  {m.initial}
                </div>
                <span className="role">{m.role}</span>
                <h3>{m.name}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="hd-section hd-band">
        <div className="hd-wrap">
          <p className="hd-label">Company</p>
          <h2 className="hd-h2">会社概要</h2>
          <table className="hd-profile" style={{ marginTop: "1.6rem" }}>
            <tbody>
              {profile.map(([k, v]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 採用 */}
      <section id="recruit" className="hd-section hd-dark" style={{ scrollMarginTop: "5rem" }}>
        <div className="hd-wrap">
          <p className="hd-label">Recruit</p>
          <h2 className="hd-h2" style={{ color: "#fff" }}>
            未経験からでも、手に職を。
          </h2>
          <p className="hd-lead">
            いま、一緒に現場に立つ仲間を募集しています。
            ものづくりが好きな方、長く腰を据えて技術を身につけたい方を歓迎します。
          </p>
          <table className="hd-profile" style={{ marginTop: "0.5rem" }}>
            <tbody>
              <tr>
                <th scope="row">募集職種</th>
                <td>大工見習い／現場スタッフ（正社員）</td>
              </tr>
              <tr>
                <th scope="row">応募資格</th>
                <td>未経験可・要普通自動車免許・学歴不問</td>
              </tr>
              <tr>
                <th scope="row">待遇</th>
                <td>社会保険完備・資格取得支援・道具貸与（※架空の募集内容です）</td>
              </tr>
              <tr>
                <th scope="row">選考</th>
                <td>まずは現場見学から。お気軽にお問い合わせください。</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: "1.8rem" }}>
            <Link href="/demo/koumuten/contact/" className="hd-btn">
              応募・見学のお問い合わせ →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
