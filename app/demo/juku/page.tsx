import Link from "next/link";
import { COURSES, RESULTS, SCHOOL } from "./data";

const stats = [
  { n: "20", u: "年", l: "地域での指導実績" },
  { n: "320", u: "名", l: "現在の在籍生徒数" },
  { n: "89", u: "%", l: "第一志望への合格率" },
  { n: "+24", u: "点", l: "定期テスト平均アップ" },
];

const reasons = [
  {
    ico: "◎",
    title: "先生1人に生徒2人まで",
    body: "つきっきりの完全個別指導。わからないところを、その場ですぐ質問できます。",
  },
  {
    ico: "◷",
    title: "いつでも使える自習室",
    body: "授業がない日も、開校時間中はずっと使えます。家より集中できる、と好評です。",
  },
  {
    ico: "◇",
    title: "保護者との定期面談",
    body: "学習状況と今後の計画を、季節ごとにご報告。ご家庭と二人三脚で伸ばします。",
  },
];

export default function JukuHome() {
  return (
    <>
      {/* ヒーロー（スプリット） */}
      <section className="as-hero">
        <div className="as-wrap as-hero-inner">
          <div>
            <span className="as-hero-eyebrow">
              🌱 港見市の個別指導塾 ・ SINCE {SCHOOL.since}
            </span>
            <h1>
              <span className="mark">「わかった！」</span>を、
              <br />
              ひとつずつ、<span className="blue">増やす。</span>
            </h1>
            <p>
              一人ひとりのペースに合わせた、完全個別指導。
              「できた」の積み重ねが、いつのまにか自信に変わります。
            </p>
            <div className="as-hero-actions">
              <Link href="/demo/juku/access/#trial" className="as-btn">
                無料体験・面談を申し込む
              </Link>
              <Link href="/demo/juku/course/" className="as-btn-ghost">
                コースを見る
              </Link>
            </div>
          </div>
          <div className="as-hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/demo/juku/hero.webp" alt="あすなろの学習のイメージ" />
            <div className="chip">
              <span className="n as-poppins">20</span>
              <span className="t">
                年、地域の
                <br />
                子どもたちと。
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 実績（数字） */}
      <section className="as-stats">
        <div className="as-wrap as-stats-grid">
          {stats.map((s) => (
            <div key={s.l} className="as-stat">
              <div className="n">
                {s.n}
                <span className="u">{s.u}</span>
              </div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="as-section">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Why Asunaro</p>
            <h2 className="as-h2">
              あすなろが<span className="blue">選ばれる</span>理由
            </h2>
            <p className="as-sub">
              成績を上げる仕組みと、通いたくなる環境。その両方を大切にしています。
            </p>
          </div>
          <div className="as-reasons">
            {reasons.map((r) => (
              <div key={r.title} className="as-reason">
                <div className="ico" aria-hidden="true">
                  {r.ico}
                </div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コース（要約。詳細は /course/ へ） */}
      <section className="as-section paper2">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Courses</p>
            <h2 className="as-h2">コース</h2>
            <p className="as-sub">
              小学生から高校生まで。学年と目標に合わせて、カリキュラムを組み立てます。
            </p>
          </div>
          <div className="as-courses">
            {COURSES.map((c) => (
              <div key={c.g} className="as-course">
                <div className="top">
                  <span className="g">{c.g}</span>
                  <span className="en">{c.en}</span>
                </div>
                <div className="body">
                  <ul>
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  <p className="fee">
                    月謝<b>¥{c.fee}</b>〜（週1回・税込）
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="as-more">
            <Link href="/demo/juku/course/" className="as-btn-blue as-btn">
              コース案内をくわしく見る
            </Link>
            <Link href="/demo/juku/price/" className="as-btn-ghost">
              料金を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 合格実績 */}
      <section className="as-results">
        <div className="as-results-media" aria-hidden="true" />
        <div className="as-wrap as-results-inner">
          <div
            className="as-head"
            style={{ textAlign: "left", marginBottom: "0.5rem" }}
          >
            <p className="as-label">Results</p>
            <h2 className="as-h2" style={{ color: "#fff" }}>
              昨年度の合格実績
            </h2>
          </div>
          <div className="as-results-list">
            {RESULTS.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
          <p className="as-results-note">
            ※
            掲載の学校名・合格実績はすべて架空のサンプルです（実在の学校とは関係ありません）。
          </p>
        </div>
      </section>

      {/* 体験へのCTA */}
      <section className="as-section">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Free trial</p>
            <h2 className="as-h2">
              まずは<span className="blue">無料体験</span>から
            </h2>
            <p className="as-sub">
              体験授業と学習相談は無料です。入塾を決めていない段階で構いません。
            </p>
          </div>
          <div className="as-more">
            <Link href="/demo/juku/access/#trial" className="as-btn">
              無料体験・面談を申し込む
            </Link>
            <a href={SCHOOL.telHref} className="as-btn-ghost">
              電話で相談する（{SCHOOL.tel}）
            </a>
          </div>
          <p className="as-fee-note" style={{ textAlign: "center" }}>
            ※ 架空の番号です。{SCHOOL.reception}
          </p>
        </div>
      </section>
    </>
  );
}
