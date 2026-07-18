import DemoMap from "@/components/DemoMap";

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

const courses = [
  {
    g: "小学生",
    en: "Elementary",
    items: ["学ぶ楽しさと学習習慣づくり", "算数・国語を中心に基礎固め", "中学受験にも対応"],
    fee: "8,800",
  },
  {
    g: "中学生",
    en: "Junior high",
    items: ["定期テスト対策と内申点アップ", "5教科すべてに対応", "高校受験の志望校別対策"],
    fee: "13,200",
  },
  {
    g: "高校生",
    en: "High school",
    items: ["大学受験・推薦対策", "苦手科目のピンポイント克服", "共通テスト・小論文まで"],
    fee: "16,500",
  },
];

const results = [
  "港見高校",
  "山ノ手第一高校",
  "みなと東高校",
  "県立栄高校",
  "港見西高校",
  "山ノ手工業高校",
  "みなと商業高校",
  "県立青葉高校",
  "港見大学 教育学部",
  "山ノ手大学",
];

export default function JukuHome() {
  return (
    <>
      {/* ヒーロー（スプリット） */}
      <section className="as-hero">
        <div className="as-wrap as-hero-inner">
          <div>
            <span className="as-hero-eyebrow">🌱 港見市の個別指導塾 ・ SINCE 2005</span>
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
              <a href="#access" className="as-btn">
                無料体験・面談を申し込む
              </a>
              <a href="#courses" className="as-btn-ghost">
                コースを見る
              </a>
            </div>
          </div>
          <div className="as-hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/demo/juku/hero.jpg" alt="あすなろの学習のイメージ" />
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
      <section id="reasons" className="as-section" style={{ scrollMarginTop: "4rem" }}>
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

      {/* コース */}
      <section id="courses" className="as-section paper2" style={{ scrollMarginTop: "4rem" }}>
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Courses</p>
            <h2 className="as-h2">コース</h2>
            <p className="as-sub">
              小学生から高校生まで。学年と目標に合わせて、カリキュラムを組み立てます。
            </p>
          </div>
          <div className="as-courses">
            {courses.map((c) => (
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
        </div>
      </section>

      {/* 料金 */}
      <section id="fee" className="as-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Tuition</p>
            <h2 className="as-h2">
              <span className="blue">明瞭</span>な料金
            </h2>
            <p className="as-sub">
              追加の教材費や管理費で不安にさせません。表示価格がすべてです。
            </p>
          </div>
          <table className="as-fee-table">
            <thead>
              <tr>
                <th>学年</th>
                <th>週1回</th>
                <th>週2回</th>
                <th>週3回</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">小学生</th>
                <td className="price">¥8,800</td>
                <td className="price">¥15,400</td>
                <td className="price">¥21,000</td>
              </tr>
              <tr>
                <th scope="row">中学生</th>
                <td className="price">¥13,200</td>
                <td className="price">¥23,100</td>
                <td className="price">¥31,900</td>
              </tr>
              <tr>
                <th scope="row">高校生</th>
                <td className="price">¥16,500</td>
                <td className="price">¥28,600</td>
                <td className="price">¥39,600</td>
              </tr>
            </tbody>
          </table>
          <p className="as-fee-note">
            ※ 月額・税込。入塾金・自習室利用は無料。これは架空の学習塾のサンプル料金です。
          </p>
        </div>
      </section>

      {/* 合格実績 */}
      <section id="results" className="as-results" style={{ scrollMarginTop: "4rem" }}>
        <div className="as-results-media" aria-hidden="true" />
        <div className="as-wrap as-results-inner">
          <div className="as-head" style={{ textAlign: "left", marginBottom: "0.5rem" }}>
            <p className="as-label">Results</p>
            <h2 className="as-h2" style={{ color: "#fff" }}>
              昨年度の合格実績
            </h2>
          </div>
          <div className="as-results-list">
            {results.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
          <p className="as-results-note">
            ※ 掲載の学校名・合格実績はすべて架空のサンプルです（実在の学校とは関係ありません）。
          </p>
        </div>
      </section>

      {/* 教室・自習室 */}
      <section className="as-section paper2">
        <div className="as-wrap">
          <div className="as-rooms">
            <div>
              <p className="as-label">Classroom</p>
              <h2 className="as-h2" style={{ marginBottom: "1rem" }}>
                集中できる、
                <br />
                居心地のいい教室
              </h2>
              <p style={{ color: "var(--sub)", margin: "0 0 1.4rem" }}>
                明るく静かな教室と、いつでも使える自習室。
                「家だと集中できない」その悩みを、あすなろが引き受けます。
                消毒・換気など、安心して通える環境づくりも続けています。
              </p>
              <a href="#access" className="as-btn-blue as-btn">
                教室を見学する
              </a>
            </div>
            <div className="as-rooms-photos">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/demo/juku/classroom.jpg" alt="明るい教室" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/demo/juku/writing.jpg" alt="自習の様子" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/demo/juku/chalk.jpg" alt="板書のイメージ" />
            </div>
          </div>
        </div>
      </section>

      {/* アクセス・体験 */}
      <section id="access" className="as-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Trial &amp; Access</p>
            <h2 className="as-h2">
              まずは<span className="blue">無料体験</span>から
            </h2>
            <p className="as-sub">
              体験授業と学習相談は無料です。お気軽にお問い合わせください。
            </p>
          </div>
          <div className="as-access">
            <div>
              <table className="as-info-table">
                <tbody>
                  <tr>
                    <th scope="row">お電話</th>
                    <td>
                      <span className="as-tel">0120-000-000</span>
                      <br />
                      （架空の番号です／受付 15:00–22:00）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">開校</th>
                    <td>月〜土 15:00–22:00（自習室は14:00〜）</td>
                  </tr>
                  <tr>
                    <th scope="row">休校</th>
                    <td>日曜日</td>
                  </tr>
                  <tr>
                    <th scope="row">住所</th>
                    <td>
                      山ノ手県 港見市 本町5-2 あすなろビル3F
                      <br />
                      （架空の住所です／港見駅 中央口から徒歩3分）
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="#access" className="as-btn">
                無料体験・面談を申し込む
              </a>
            </div>
            <div>
              <DemoMap station="港見駅" walk="中央口から徒歩3分" shop="あ" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
