import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";
import { COURSES } from "../data";

export const metadata: Metadata = {
  title: "コース案内",
  description:
    "架空の学習塾「個別指導塾 あすなろ」のコース案内。小学生・中学生・高校生それぞれの指導内容と進め方（デザインサンプル）。",
};

/* 授業1コマの流れ。「個別指導」が具体的に何をするのかを見せる */
const lesson: [string, string, string][] = [
  ["00分", "前回の確認", "前回やった内容を小テストで確認します。できていなければ、その場でもう一度。"],
  ["10分", "解説", "新しい単元を、担当講師がホワイトボードで説明します。生徒2人までなので、途中で止めて質問できます。"],
  ["30分", "演習", "解いているあいだ、講師は横で手元を見ています。つまずいた瞬間に気づくためです。"],
  ["60分", "直しと宿題出し", "間違えた問題をその場で直します。宿題は「できる量」に調整して出します。"],
];

export default function JukuCourse() {
  return (
    <>
      <PageHead
        en="Courses"
        title="コース案内"
        lead="学年ごとに、つまずくところも、伸ばし方も違います。同じ教え方は、しません。"
      />

      {/* 学年別 */}
      <section className="as-section">
        <div className="as-wrap">
          <div className="as-cdetails">
            {COURSES.map((c) => (
              <article key={c.id} id={c.id} className="as-cdetail">
                <div className="as-cdetail-head">
                  <div>
                    <span className="g">{c.g}</span>
                    <span className="en as-poppins">{c.en}</span>
                  </div>
                  <span className="target">{c.target}</span>
                </div>
                <p className="as-cdetail-body">{c.detail}</p>
                <dl className="as-cdetail-spec">
                  <div>
                    <dt>対象科目</dt>
                    <dd>{c.subjects}</dd>
                  </div>
                  <div>
                    <dt>進め方</dt>
                    <dd>{c.plan}</dd>
                  </div>
                  <div>
                    <dt>月謝</dt>
                    <dd>
                      <b>¥{c.fee}</b>〜（週1回・税込）
                    </dd>
                  </div>
                </dl>
                <ul className="as-cdetail-items">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 授業の流れ */}
      <section className="as-section paper2" aria-labelledby="lesson-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">A lesson</p>
            <h2 className="as-h2" id="lesson-h">
              授業<span className="blue">80分</span>の中身
            </h2>
            <p className="as-sub">
              「個別指導」と言っても中身は塾ごとに違います。あすなろの1コマはこう進みます。
            </p>
          </div>
          <ol className="as-lesson">
            {lesson.map(([t, title, body]) => (
              <li key={t}>
                <span className="t as-poppins">{t}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="as-fee-note">
            ※
            演習中に講師が横につくため、1コマで進む量は多くありません。「たくさん解かせる」より「わかっていないまま進ませない」ことを優先しています。
          </p>
        </div>
      </section>

      {/* 正直に線を引く */}
      <section className="as-section" aria-labelledby="honest-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Honestly</p>
            <h2 className="as-h2" id="honest-h">
              向いているご家庭・向いていないご家庭
            </h2>
            <p className="as-sub">
              先にお伝えしておいたほうが、お互いの時間を無駄にしません。
            </p>
          </div>
          <div className="as-honest">
            <div className="fit">
              <h3>
                <span className="badge" aria-hidden="true">
                  ○
                </span>
                力になれると思います
              </h3>
              <ul>
                <li>どこでつまずいたか自分でも分からなくなっている</li>
                <li>集団塾のスピードについていけなかった</li>
                <li>家だと勉強が始められない</li>
                <li>定期テストの点を、まず安定させたい</li>
              </ul>
            </div>
            <div className="unfit">
              <h3>
                <span className="badge" aria-hidden="true">
                  △
                </span>
                他を選ばれたほうがよいかもしれません
              </h3>
              <ul>
                <li>最難関校の受験対策を専門的に進めたい</li>
                <li>毎日通って長時間の演習量を確保したい</li>
                <li>寮や送迎付きの環境をお探し</li>
              </ul>
              <p>
                その場合も、地域のどの塾が合いそうかはご相談にのります。無理にお勧めはしません。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="as-section paper2">
        <div className="as-wrap as-cta-center">
          <h2 className="as-h2">どのコースか迷ったら、面談で決めましょう。</h2>
          <p className="as-sub">
            学年だけでは決まりません。いまの状況を伺ってからご提案します。
          </p>
          <div className="as-more">
            <Link href="/demo/juku/access/#trial" className="as-btn">
              無料体験・面談を申し込む
            </Link>
            <Link href="/demo/juku/price/" className="as-btn-ghost">
              料金を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
