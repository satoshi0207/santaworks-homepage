import Link from "next/link";
import { FadeIn, Reveal } from "@/components/motion";

const strengths = [
  {
    num: "01",
    title: "試作1個から、量産まで",
    body: "多品種少量が得意です。図面1枚、現物1個からご相談ください。急ぎの持ち込みにもできる限りお応えします。",
  },
  {
    num: "02",
    title: "照明部品で培った薄物加工",
    body: "創業のきっかけは街路灯の部品づくり。薄板・パイプ・微細部品の加工は、五十年来の得意分野です。",
  },
  {
    num: "03",
    title: "全数検査のこだわり",
    body: "出荷前の全数検査を徹底。三次元測定機による検査成績書の発行にも対応しています。",
  },
];

const services = [
  {
    img: "/demo/factory/works.jpg",
    alt: "切削加工した金属部品",
    title: "精密切削加工",
    body: "NC旋盤・マシニングセンタによる切削加工。シャフト・ギア・小物精密部品。",
  },
  {
    img: "/demo/factory/craft.jpg",
    alt: "溶接作業",
    title: "板金・溶接",
    body: "薄板板金・パイプ加工・TIG溶接。照明器具、筐体、カバー類の製作。",
  },
  {
    img: "/demo/factory/parts.jpg",
    alt: "整列した量産部品",
    title: "小ロット量産・組立",
    body: "数十個〜数千個の量産と、簡単な組立（アッセンブリ）までの一貫対応。",
  },
];

const news: [string, string, string][] = [
  ["2026.07.10", "お知らせ", "夏季休業のお知らせ（8月11日〜8月16日）"],
  ["2026.06.05", "展示会", "「まちこうば技術展 2026」に出展しました"],
  ["2026.04.02", "設備", "CNC複合旋盤を1台増設しました"],
  ["2026.01.15", "お知らせ", "ウェブサイトを公開しました"],
];

export default function FactoryHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="t-hero">
        <FadeIn className="t-hero-inner">
          <p className="en">METAL WORKS &amp; PRECISION PARTS</p>
          <h1>
            <span>その一個が、</span>
            <span>どこかの灯になる。</span>
          </h1>
          <p className="lead">
            街路灯の部品づくりから五十年。有限会社灯火製作所は、従業員12名の小さな町工場です。試作1個から量産まで、確かな精度でお応えします。
          </p>
          <div className="actions">
            <Link href="/demo/factory/service/" className="t-btn">
              事業内容を見る
            </Link>
            <Link href="/demo/factory/contact/" className="t-btn ghost">
              お見積り・ご相談
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 強み */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Our Strengths</p>
            <h2 className="t-h2">灯火製作所の、三つの持ち味。</h2>
          </Reveal>
          <Reveal>
            <div className="t-strengths">
              {strengths.map((s) => (
                <div className="t-strength" key={s.num}>
                  <p className="num">{s.num}</p>
                  <h3 className="t-h3">{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 事業ダイジェスト */}
      <section className="t-section t-news">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">Service</p>
            <h2 className="t-h2">事業内容</h2>
          </Reveal>
          <Reveal>
            <div className="t-services">
              {services.map((s) => (
                <Link
                  href="/demo/factory/service/"
                  className="t-service-card"
                  key={s.title}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.alt} loading="lazy" />
                  <div className="body">
                    <h3 className="t-h3">{s.title}</h3>
                    <p>{s.body}</p>
                    <span className="more">詳しく見る →</span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* お知らせ */}
      <section className="t-section">
        <div className="t-wrap">
          <Reveal>
            <p className="t-eyebrow">News</p>
            <h2 className="t-h2">お知らせ</h2>
          </Reveal>
          <Reveal>
            <ul className="t-news-list">
              {news.map(([date, tag, title]) => (
                <li key={title}>
                  <time>{date}</time>
                  <span className="tag">{tag}</span>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 会社案内バンド */}
      <section
        className="t-band"
        style={{ backgroundImage: "url(/demo/factory/lathe.jpg)" }}
      >
        <Reveal className="inner">
          <h2>昭和48年から、この町で。</h2>
          <p>
            創業のきっかけは、一本の街路灯でした。三代にわたって受け継いできた、灯火製作所のあゆみをご紹介します。
          </p>
          <Link href="/demo/factory/about/" className="t-btn">
            会社概要を見る
          </Link>
        </Reveal>
      </section>

      {/* 採用バンド */}
      <section
        className="t-band"
        style={{ backgroundImage: "url(/demo/factory/recruit.jpg)" }}
      >
        <Reveal className="inner">
          <h2>手に職を、一生ものに。</h2>
          <p>
            未経験からでも、旋盤は回せるようになります。いっしょに働く仲間を募集しています。
          </p>
          <Link href="/demo/factory/recruit/" className="t-btn">
            採用情報を見る
          </Link>
        </Reveal>
      </section>
    </>
  );
}
