import DemoMap from "@/components/DemoMap";

const products = [
  {
    src: "/demo/farm/milk.jpg",
    name: "そらいろ牛乳",
    desc: "しぼりたてを低温殺菌で。あっさりなのに、こくがある。",
    price: "¥380 / 900ml",
  },
  {
    src: "/demo/farm/yogurt.jpg",
    name: "のむヨーグルト",
    desc: "生乳の甘みだけ。砂糖はほんの少し、酸味はやさしめ。",
    price: "¥420 / 500ml",
  },
  {
    src: "/demo/farm/cheese.jpg",
    name: "牧場のチーズ",
    desc: "工房で熟成させたセミハード。ワインにも、朝食にも。",
    price: "¥1,200 / 200g",
  },
  {
    src: "/demo/farm/soft.jpg",
    name: "ソフトクリーム",
    desc: "直売所限定。濃いのにすっと消える、あの味を牧場で。",
    price: "¥450",
  },
];

const experiences = [
  {
    num: "01",
    title: "乳しぼり体験",
    desc: "牛のあたたかさ、いのちの手ざわり。小さなお子さまも、そっと触れられます。",
  },
  {
    num: "02",
    title: "バター＆チーズづくり",
    desc: "しぼりたての生乳から、自分の手で。できたてを、その場で味見。",
  },
  {
    num: "03",
    title: "牧場さんぽ",
    desc: "地平線まで続く牧草地を、のんびり歩く。季節ごとに、空の色が変わります。",
  },
];

const gallery = [
  { src: "/demo/farm/g_cows.jpg", alt: "丘の牧草地で休む牛たち", wide: true },
  { src: "/demo/farm/g_barn.jpg", alt: "青空の下の赤い牛舎" },
  { src: "/demo/farm/g_field.jpg", alt: "並木の続く牧場の一本道" },
  { src: "/demo/farm/g_hills.jpg", alt: "緑の丘と谷が続く牧場の風景" },
  { src: "/demo/farm/g_sky.jpg", alt: "雲が浮かぶ広い空と緑の草原" },
];

export default function FarmHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="sr-hero">
        <div className="sr-hero-media" aria-hidden="true" />
        <div className="sr-hero-cloud" style={{ left: "-8%" }} aria-hidden="true" />
        <div className="sr-hero-cloud c2" style={{ left: "-20%" }} aria-hidden="true" />
        <div className="sr-hero-inner">
          <p className="sr-hero-eyebrow">Sorairo Dairy Farm ・ Hokurei</p>
          <h1 className="sr-hero-title">
            <span className="inline-block">空がひろい、</span>
            <span className="inline-block">牧場です。</span>
          </h1>
          <p className="sr-hero-copy">
            牛と、牧草と、大きな空。そらいろ牧場は、家族でつづける小さな酪農牧場。その季節のいちばんおいしいを、そのまま食卓へ。
          </p>
        </div>
      </section>

      {/* 牧場のこと */}
      <section id="about" className="sr-section sr-about">
        <div className="sr-wrap sr-about-grid">
          <div className="sr-about-text">
            <p className="sr-label sr-en">Our Farm</p>
            <h2 className="sr-heading">牛のペースで、暮らしています。</h2>
            <p>
              朝は牛の声で目が覚めて、夜は星空の下で牛舎を閉める。1998年から、この丘で家族三人と、四十頭ほどの牛たちと暮らしてきました。
            </p>
            <p>
              牛がのびのび草を食む夏も、雪に閉ざされる冬も、牛乳の味は季節そのもの。だから無理に均さず、その時いちばんの生乳を、できるだけ手をかけずにお届けします。
            </p>
            <p>
              「あの牧場の牛乳の味」を、いつか思い出してもらえたら。そんな気持ちで、今日も牛舎に向かいます。
            </p>
            <p className="sr-about-sign">— そらいろ牧場 一同</p>
          </div>
          <div className="sr-about-photo">
            <img
              src="/demo/farm/story.jpg"
              alt="牧草地の子牛"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 直売所 */}
      <section id="shop" className="sr-section">
        <div className="sr-wrap">
          <div className="sr-shop-head">
            <p className="sr-label sr-en">Farm Shop</p>
            <h2 className="sr-heading">牧場の直売所から。</h2>
            <p>牛舎のとなりの直売所と、オンラインでお届けしています。</p>
          </div>
          <div className="sr-products">
            {products.map((p) => (
              <article key={p.name} className="sr-product">
                <div className="sr-product-media">
                  <img src={p.src} alt={p.name} loading="lazy" />
                </div>
                <div className="sr-product-body">
                  <h3>{p.name}</h3>
                  <p className="desc">{p.desc}</p>
                  <p className="price sr-en">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 牧場体験 */}
      <section id="experience" className="sr-exp">
        <div className="sr-exp-media" aria-hidden="true" />
        <div className="sr-wrap">
          <p className="sr-label sr-en">Experience</p>
          <h2 className="sr-heading">牧場で、ひと日を。</h2>
          <p className="sr-exp-lead">
            見て、触れて、味わう。牧場のいちにちは、きっと忘れられない思い出になります。（体験は前日までにご予約ください）
          </p>
          <div className="sr-exp-list">
            {experiences.map((e) => (
              <div key={e.num} className="sr-exp-item">
                <span className="num sr-en">{e.num}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 風景 */}
      <section id="gallery" className="sr-section sr-about">
        <div className="sr-wrap">
          <p className="sr-label sr-en">Landscape</p>
          <h2 className="sr-heading">牧場の風景</h2>
          <div className="sr-gallery-grid">
            {gallery.map((g) => (
              <figure key={g.src} className={g.wide ? "wide" : undefined}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="sr-section">
        <div className="sr-wrap">
          <p className="sr-label sr-en">Access</p>
          <h2 className="sr-heading">アクセス・ご案内</h2>
          <div className="sr-access-grid">
            <table className="sr-info">
              <tbody>
                <tr>
                  <th scope="row">直売所</th>
                  <td>
                    9:00–17:00
                    <br />
                    <small>火曜定休／冬季（12–3月）は営業時間が変わります</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row">牧場体験</th>
                  <td>
                    要予約（前日まで）
                    <br />
                    <small>乳しぼり ¥800／バター・チーズづくり ¥1,500 ほか</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row">ご住所</th>
                  <td>
                    北嶺地方 大空郡 みなも町 まきば野1200
                    <br />
                    <small>※ 架空の住所です</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row">お電話</th>
                  <td>
                    0123-00-0000
                    <br />
                    <small>※ 架空の番号です。お掛けにならないでください</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row">アクセス</th>
                  <td>
                    みなも駅から車で15分／無料駐車場40台
                  </td>
                </tr>
              </tbody>
            </table>
            <DemoMap station="みなも駅" walk="車で15分・牧草地の一本道の先" shop="牧" />
          </div>
        </div>
      </section>
    </>
  );
}
