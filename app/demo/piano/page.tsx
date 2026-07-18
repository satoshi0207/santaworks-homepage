import Link from "next/link";
import DemoMap from "@/components/DemoMap";
import DemoSns from "@/components/DemoSns";
import { FadeIn, Reveal } from "@/components/motion";

const courses = [
  {
    age: "for 3–6",
    name: "はじめてコース",
    desc: "3〜6歳の未就学さん。まずは音を出す楽しさから。リズム遊びと歌もいっしょに。",
    fee: "6,500",
    unit: "／月（30分・年40回）",
  },
  {
    age: "for kids",
    name: "こどもコース",
    desc: "小学生向け。楽譜を読む力と、両手で弾く基礎を、あせらず一段ずつ。",
    fee: "7,500",
    unit: "／月（30分・年40回）",
  },
  {
    age: "for adults",
    name: "大人コース",
    desc: "中学生〜大人まで。「昔あきらめた一曲」も、好きなポップスも。月2回、自分のペースで。",
    fee: "6,000",
    unit: "／月（45分・月2回）",
  },
  {
    age: "online",
    name: "オンラインコース",
    desc: "ご自宅からビデオ通話で。通うのがむずかしい方や、遠方の方に。",
    fee: "5,000",
    unit: "／月（30分・月2回）",
  },
];

const faqs: [string, string][] = [
  [
    "何歳から通えますか？",
    "3歳ごろから承っています。大人の方、シニアの方も大歓迎です。年齢の上限はありません。",
  ],
  [
    "家にピアノがなくても大丈夫ですか？",
    "はじめは電子ピアノやキーボードでも構いません。続けられそうと思えてから、楽器選びのご相談にも乗ります。",
  ],
  [
    "楽譜がまったく読めないのですが…",
    "大丈夫です。音符ひとつずつ、いっしょに読んでいきます。読める・弾けるが少しずつ増えていく実感を大切にしています。",
  ],
  [
    "発表会はありますか？",
    "年に1回、近くのホールで開いています。参加は任意です。人前が苦手な方は、教室でのミニ演奏会からでも。",
  ],
  [
    "レッスンの見学や送り迎えは？",
    "保護者の方の控えイスをご用意しています。小さなお子さまのレッスンは、いっしょに見ていただいてかまいません。",
  ],
];

const info: [string, React.ReactNode][] = [
  ["教室名", "おとのは ぴあの教室"],
  ["住所", "東京都某区おとは台2-5-8（架空の住所です）"],
  ["レッスン", "火〜土 10:00 — 20:00"],
  ["定休", "日曜・月曜"],
  ["対象", "3歳〜大人・シニア"],
  ["予約", "完全予約制／体験レッスンは無料"],
];

export default function PianoDemo() {
  return (
    <>
      <header className="p-header">
        <Link href="#" className="p-logo">
          おとのは<small>Otonoha Piano</small>
        </Link>
        <a className="p-reserve" href="#info">
          体験レッスン
        </a>
      </header>

      {/* ヒーロー */}
      <section className="p-hero">
        <FadeIn>
          <p className="en">— a little piano room</p>
          <h1>
            <span>ひいた曲は、</span>
            <span>
              ずっと<span className="accent">憶えてる</span>。
            </span>
          </h1>
          <p>
            おとのは ぴあの教室は、おとは台の小さなピアノ教室。
            3歳のはじめの一音から、大人のもう一度まで。一人ひとりのペースで、いっしょに弾いていきましょう。
          </p>
          <div className="p-hero-actions">
            <a href="#courses" className="p-btn">
              コースを見る
            </a>
            <a href="#info" className="p-btn ghost">
              体験レッスンへ
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.5}>
          <figure className="p-hero-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/demo/piano/hero.webp" alt="やわらかな光の中のピアノの鍵盤" />
            <div className="p-keys" aria-hidden="true" />
          </figure>
        </FadeIn>
      </section>

      {/* コンセプト */}
      <section className="p-section p-concept">
        <Reveal>
          <p className="p-eyebrow">concept</p>
          <p>
            上手に弾けることより、
            <br />
            「弾けた日」を憶えていること。
          </p>
          <p className="note">
            はじめて両手がそろった日。発表会で震えた指。
            <br />
            ピアノで過ごした時間は、いちばん古い思い出になって、ずっと残ります。
            <br />
            おとのは ぴあの教室は、そんな一日を、あなたのそばで増やしていきます。
          </p>
        </Reveal>
      </section>

      {/* 教室について */}
      <section className="p-section">
        <div className="p-wrap">
          <Reveal>
            <div className="p-about-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/piano/room.jpg"
                alt="ピアノの置かれた明るいレッスン室"
                loading="lazy"
              />
              <div className="p-about-body">
                <p className="p-eyebrow">about</p>
                <h2 className="p-h2">
                  一人に、
                  <br />
                  ひとつの<span className="accent">ペース</span>。
                </h2>
                <p>
                  グループではなく、完全マンツーマン。ぐんぐん進みたい子には次の一曲を、じっくりな子にはもう一度を。その日の様子に合わせて、レッスンを組み立てます。
                </p>
                <ul className="p-points">
                  <li>1回30〜45分の個人レッスン（完全予約制）</li>
                  <li>教材はお一人ずつに合わせて選びます</li>
                  <li>ふりがな付きの練習メモを毎回お渡し</li>
                  <li>ごきょうだい・親子での受講もご相談ください</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* コース・料金 */}
      <section className="p-section p-courses" id="courses">
        <div className="p-wrap">
          <Reveal>
            <p className="p-eyebrow">courses</p>
            <h2 className="p-h2">コースと月謝</h2>
          </Reveal>
          <Reveal>
            <div className="p-course-grid">
              <div className="p-course free">
                <span className="age">first step</span>
                <h3>体験レッスン</h3>
                <p className="desc">
                  はじめての方へ。教室の雰囲気を見て、実際に少し弾いてみてから決められます。
                </p>
                <div className="fee">
                  <span className="num">無料</span>
                  <span className="unit">（約30分・お一人1回）</span>
                </div>
              </div>
              {courses.map((c) => (
                <div className="p-course" key={c.name}>
                  <span className="age">{c.age}</span>
                  <h3>{c.name}</h3>
                  <p className="desc">{c.desc}</p>
                  <div className="fee">
                    <span className="num">¥{c.fee}</span>
                    <span className="unit">{c.unit}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="p-fee-note">
              ※ 表示は税込です。入会金 ¥5,000（体験当日のご入会で半額）。教材費は実費。
              価格・内容はデザインサンプル用の設定です。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 講師 */}
      <section className="p-section">
        <div className="p-wrap">
          <Reveal>
            <div className="p-teacher-grid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/piano/hands.jpg"
                alt="鍵盤にそっと置かれた子どもの手"
                loading="lazy"
              />
              <div className="p-teacher-body">
                <p className="p-eyebrow">teacher</p>
                <p className="quote">
                  まちがえても、大丈夫。
                  <br />
                  音を出すって、それだけで楽しい。
                </p>
                <p>
                  音楽大学ピアノ科を卒業後、大手音楽教室の講師を経て、この教室をひらきました。「できた！」の瞬間にいちばん近い場所にいたくて、少人数の個人教室にこだわっています。
                </p>
                <p>
                  子どもの頃に弾いた曲を、大人になってふと思い出す。そんな一生ものの宝物を、一緒に増やせたらうれしいです。
                </p>
                <p className="p-teacher-name">
                  <span className="en">Pianist &amp; Teacher</span>
                  講師<strong>澤木 ゆり</strong>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 発表会 */}
      <section className="p-recital">
        <Reveal>
          <p className="p-eyebrow">recital</p>
          <h2>一年に一度の、特別な一日。</h2>
          <p>
            毎年春、近くのホールで発表会を開いています。ドレスや蝶ネクタイに着替えて、少し緊張して、大きな拍手をもらう。その一日が、また明日からの練習を支えてくれます。参加はもちろん自由です。
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="p-section">
        <div className="p-wrap">
          <Reveal>
            <p className="p-eyebrow">faq</p>
            <h2 className="p-h2">よくあるご質問</h2>
          </Reveal>
          <Reveal>
            <div className="p-faq-list">
              {faqs.map(([q, a]) => (
                <dl className="p-faq" key={q}>
                  <dt>{q}</dt>
                  <dd>{a}</dd>
                </dl>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 教室情報 */}
      <section className="p-section p-courses" id="info">
        <div className="p-wrap">
          <Reveal>
            <p className="p-eyebrow">access</p>
            <h2 className="p-h2">教室のご案内</h2>
          </Reveal>
          <Reveal>
            <table className="p-info-table">
              <tbody>
                {info.map(([th, td]) => (
                  <tr key={th}>
                    <th>{th}</th>
                    <td>{td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-info-note">
              ※ この教室は実在しません。架空店舗のデザインサンプルです。
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@otonoha_piano" },
                { kind: "line", handle: "体験レッスンのご予約" },
              ]}
            />
          </Reveal>
          <Reveal>
            <DemoMap station="おとは台駅" walk="西口から徒歩4分" shop="♪" />
          </Reveal>
        </div>
      </section>

      <div className="p-keys" aria-hidden="true" />

      <footer className="p-footer">
        <div className="p-footer-inner">
          <p className="p-footer-name">
            おとのは ぴあの教室
            <small>OTONOHA PIANO</small>
          </p>
          「おとのは ぴあの教室」は実在しない架空のピアノ教室です。
          <br />
          このページは <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </div>
      </footer>

      <Link href="/works/" className="p-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </>
  );
}
