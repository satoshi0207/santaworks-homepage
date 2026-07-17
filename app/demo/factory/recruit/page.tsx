import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "採用情報",
};

const requirements: [string, React.ReactNode][] = [
  ["募集職種", "機械オペレーター（正社員）／ 板金・溶接工（正社員）"],
  [
    "仕事内容",
    "NC旋盤・マシニングセンタの操作、板金・溶接加工、検査・出荷業務など。適性を見ながら少しずつお任せします。",
  ],
  ["応募資格", "学歴・経験不問。ものづくりが好きな方。普通自動車免許があれば尚可。"],
  ["勤務地", "東京都某区灯町2-7-4（架空の住所です）"],
  ["勤務時間", "8:30 — 17:30（休憩75分）／ 残業は月平均10時間程度"],
  ["休日", "土日祝（会社カレンダーによる）、夏季・年末年始、年間休日115日"],
  ["給与", "月給22万円〜35万円（経験・能力による）／ 賞与年2回"],
  ["待遇", "社会保険完備、交通費支給、資格取得支援（技能検定ほか）、作業着貸与"],
  [
    "応募方法",
    <>
      お問い合わせフォームより「採用について」を選択のうえご連絡ください。工場見学だけでも歓迎です。
    </>,
  ],
];

export default function FactoryRecruit() {
  return (
    <>
      <PageHead en="Recruit" title="採用情報" />

      {/* リード */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <div className="t-recruit-lead">
              <div>
                <p className="catch">
                  手に職を、
                  <br />
                  一生ものに。
                </p>
                <p>
                  旋盤も溶接も、最初はみんな未経験です。うちの工場長も、二十年前は「ネジって右に回すんでしたっけ」と言っていました。
                </p>
                <p>
                  12名の小さな工場だから、分業で終わらせません。図面を読み、削り、測り、納める——ものづくりの全部を、あなたの技術にしてください。
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/factory/recruit.jpg"
                alt="グラインダーで金属を仕上げる職人"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 先輩の声 */}
      <section className="t-section t-news">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Voice</p>
            <h2 className="t-h2">先輩の声</h2>
          </Reveal>
          <Reveal>
            <div className="t-voices">
              <blockquote className="t-voice">
                <p>
                  前職は飲食店でした。入社して3年、いまはNC旋盤を2台任されています。自分の削った部品が医療機器に入っていると聞いたときは、ちょっと背筋が伸びました。
                </p>
                <footer>製造部・入社3年目（架空の社員です）</footer>
              </blockquote>
              <blockquote className="t-voice">
                <p>
                  小さい会社なので、社長との距離が近いのが良いところ。「こうしたほうが早いのでは」が翌日には工程に反映されます。子どもの行事で休みやすいのも助かっています。
                </p>
                <footer>製造部・入社8年目（架空の社員です）</footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Requirements</p>
            <h2 className="t-h2">募集要項</h2>
          </Reveal>
          <Reveal>
            <table className="t-table">
              <tbody>
                {requirements.map(([th, td]) => (
                  <tr key={th}>
                    <th>{th}</th>
                    <td>{td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: "2.5rem" }}>
              まずは工場を見に来てください。旋盤の音と、油のにおいと、うちの雰囲気。合いそうだったら、それから話しましょう。
            </p>
            <Link href="/demo/factory/contact/" className="t-btn">
              応募・工場見学の申し込み
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
