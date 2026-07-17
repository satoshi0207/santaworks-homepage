import DemoMap from "@/components/DemoMap";

const points = [
  "一枚刃のレザーシェービング",
  "熱いおしぼりで、毛穴をゆるめてから",
  "三代、変わらない椅子で",
  "ご予約優先・当日の飛び込みもOK",
];

const menu = [
  {
    name: "カット（シャンプー・ブロー込）",
    price: "¥4,400",
    desc: "顔まわりの産毛そりまで。所要40分ほど。",
  },
  {
    name: "カット ＋ 顔そり ＋ シェービング",
    price: "¥6,050",
    desc: "熱いタオルと泡で仕上げる、一番人気のフルコース。",
  },
  {
    name: "顔そり・眉整え",
    price: "¥2,750",
    desc: "お肌を整える、床屋ならではの一枚刃。",
  },
  {
    name: "こども・シニアカット",
    price: "¥3,300",
    desc: "小さなお子様も、ゆっくり丁寧に。",
  },
  {
    name: "白髪染め（カット別）",
    price: "¥3,300〜",
    desc: "自然な色味で、若々しい印象に。",
  },
];

const gallery = [
  { src: "/demo/barber/interior-1.jpg", alt: "落ち着いた雰囲気の理容室内" },
  { src: "/demo/barber/interior-2.jpg", alt: "レンガ壁とヴィンテージの理容椅子" },
  { src: "/demo/barber/interior-3.jpg", alt: "額装を飾った待合スペース" },
];

export default function BarberHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bm-hero">
        <div className="bm-hero-media" aria-hidden="true" />
        <div className="bm-hero-inner">
          <span className="bm-est">EST. 1962</span>
          <h1 className="bm-hero-title">
            Barber
            <br />
            Minato
          </h1>
          <p className="bm-hero-jp">理容 みなと ・ 港見の床屋</p>
          <p className="bm-hero-sub">
            いつもの席が、<span className="brass">待っている</span>。
          </p>
          <div className="bm-hero-actions">
            <a href="#access" className="bm-btn">
              ご予約・受付
            </a>
            <a href="#menu" className="bm-btn-ghost">
              お品書きを見る
            </a>
          </div>
        </div>
      </section>
      <div className="bm-stripe" aria-hidden="true" />

      {/* こだわり */}
      <section id="about" className="bm-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="bm-wrap">
          <div className="bm-about">
            <div>
              <p className="bm-label">Our craft</p>
              <h2 className="bm-h2">
                一人ひとりの、
                <br />
                「いつもの」を。
              </h2>
              <p>
                港見の商店街で、祖父の代からつづく床屋です。
                流行りの型もやりますが、いちばん大事にしているのは、
                通ってくださる方の「いつもの」を憶えておくこと。
              </p>
              <p>
                熱いおしぼりで毛穴をゆるめて、一枚刃であたる顔そり。
                すっきりして鏡を見たときの、あの顔。それをつくるのが、
                私たちの仕事です。
              </p>
              <ul className="bm-points">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bm-about-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/barber/razor.jpg" alt="一枚刃の剃刀とシェービングブラシ" />
            </div>
          </div>
        </div>
      </section>

      {/* お品書き */}
      <section id="menu" className="bm-section navy" style={{ scrollMarginTop: "4rem" }}>
        <div className="bm-wrap">
          <p className="bm-label">Menu</p>
          <h2 className="bm-h2">お品書き</h2>
          <p className="bm-lead">
            税込価格です。ご予約優先ですが、当日の飛び込みも受け付けています。
          </p>
          <div className="bm-menu">
            {menu.map((m) => (
              <div key={m.name} className="bm-menu-item">
                <span className="name">{m.name}</span>
                <span className="price">{m.price}</span>
                <p className="desc">{m.desc}</p>
              </div>
            ))}
            <p className="bm-menu-note">※ これは架空の理容室のサンプル料金です。</p>
          </div>
        </div>
      </section>

      {/* 店内 */}
      <section
        id="gallery"
        className="bm-section paper2"
        style={{ scrollMarginTop: "4rem" }}
      >
        <div className="bm-wrap bm-center">
          <p className="bm-label center">Interior</p>
          <h2 className="bm-h2">店内</h2>
          <p className="bm-lead">
            革張りの椅子と、昔ながらの道具たち。すこし懐かしい、男の身だしなみの場所。
          </p>
        </div>
        <div className="bm-wrap">
          <div className="bm-gallery">
            {gallery.map((g) => (
              <figure key={g.src} className="bm-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ご予約・アクセス */}
      <section id="access" className="bm-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="bm-wrap">
          <p className="bm-label">Access</p>
          <h2 className="bm-h2">ご予約・アクセス</h2>
          <div className="bm-access">
            <div>
              <table className="bm-info-table">
                <tbody>
                  <tr>
                    <th scope="row">Tel</th>
                    <td>
                      <span className="bm-tel">03-0000-0000</span>
                      <br />
                      （架空の番号です／お電話でのご予約優先）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hours</th>
                    <td>火〜日 9:00–19:00（最終受付 18:30）</td>
                  </tr>
                  <tr>
                    <th scope="row">Closed</th>
                    <td>月曜定休（祝日は営業）</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>
                      山ノ手県 港見市 栄町1-8（架空の住所です）
                      <br />
                      港見駅 南口から徒歩4分／商店街アーケード内
                    </td>
                  </tr>
                </tbody>
              </table>
              <DemoMap station="港見駅" walk="南口から徒歩4分" shop="✂" />
            </div>
            <div className="bm-access-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/barber/storefront.jpg" alt="バーバー ミナトの店構え" />
            </div>
          </div>
        </div>
      </section>
      <div className="bm-stripe" aria-hidden="true" />
    </>
  );
}
