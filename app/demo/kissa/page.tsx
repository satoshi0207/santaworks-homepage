import DemoMap from "@/components/DemoMap";

const dishes = [
  {
    src: "/demo/kissa/soda.jpg",
    name: "クリームソーダ",
    price: "¥600",
    desc: "昔ながらのメロンソーダに、まぁるいアイスをひとつ。",
  },
  {
    src: "/demo/kissa/pudding.jpg",
    name: "自家製プリン",
    price: "¥500",
    desc: "少しかため、カラメルは苦め。開店当時から変わらぬ味。",
  },
  {
    src: "/demo/kissa/float.jpg",
    name: "コーヒーフロート",
    price: "¥650",
    desc: "サイフォンで淹れた珈琲に、バニラをひとさじ浮かべて。",
  },
  {
    src: "/demo/kissa/coffee.jpg",
    name: "ブレンド珈琲",
    price: "¥450",
    desc: "四十年変わらない、深煎りのハウスブレンド。",
  },
];

const menuLeft = [
  ["ナポリタン", "¥800"],
  ["玉子サンド", "¥650"],
  ["ピザトースト", "¥700"],
  ["ホットケーキ", "¥600"],
];

const menuRight = [
  ["レモンスカッシュ", "¥550"],
  ["ミルクセーキ", "¥600"],
  ["紅茶（ホット／アイス）", "¥450"],
  ["ウインナー珈琲", "¥550"],
];

const gallery = [
  { src: "/demo/kissa/interior-2.jpg", alt: "レトロな看板とソファ席の店内" },
  { src: "/demo/kissa/siphon.jpg", alt: "灯りに照らされたサイフォン" },
  { src: "/demo/kissa/interior-3.jpg", alt: "ずらりと並んだサイフォンのカウンター" },
];

export default function KissaHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="ok-hero">
        <div className="ok-hero-media" aria-hidden="true" />
        <div className="ok-hero-inner">
          <div className="ok-hero-frame">
            <span className="ok-since">SINCE 昭和47年</span>
            <p className="ok-hero-kind">純 喫 茶</p>
            <h1 className="ok-hero-title">おもかげ</h1>
            <p className="ok-hero-en">C O F F E E ・ O M O K A G E</p>
            <p className="ok-hero-tag">
              かわらない珈琲と、少しの甘いもの。
            </p>
            <div className="ok-hero-actions">
              <a href="#menu" className="ok-btn">
                お品書きを見る
              </a>
              <a href="#access" className="ok-btn-ghost">
                ご案内・地図
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ようこそ */}
      <section id="welcome" className="ok-section ok-concept" style={{ scrollMarginTop: "4rem" }}>
        <div className="ok-wrap">
          <p className="ok-label" style={{ justifyContent: "center" }}>
            Welcome
          </p>
          <p className="poem">
            「いらっしゃいませ」より、
            <br />
            「おかえりなさい」が似合う店。
            <br />
            かわらない珈琲の香りが、
            <br />
            あの日の<span className="accent">面影</span>を、そっと連れてきます。
          </p>
        </div>
      </section>

      {/* 名物 */}
      <section id="menu" className="ok-section paper2" style={{ scrollMarginTop: "4rem" }}>
        <div className="ok-wrap ok-center">
          <p className="ok-label center">Specialties</p>
          <h2 className="ok-h2">名物</h2>
          <p className="ok-lead">
            開店から変わらない、おもかげの看板メニュー。
          </p>
        </div>
        <div className="ok-wrap">
          <div className="ok-dishes">
            {dishes.map((d) => (
              <article key={d.name} className="ok-dish">
                <div className="media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" decoding="async" src={d.src} alt={d.name} />
                </div>
                <div className="body">
                  <h3>{d.name}</h3>
                  <span className="price">{d.price}</span>
                  <p>{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* お品書き（一覧） */}
      <section className="ok-section brown">
        <div className="ok-wrap">
          <p className="ok-label">Menu</p>
          <h2 className="ok-h2">お品書き</h2>
          <div className="ok-menu-list">
            <div>
              {menuLeft.map(([nm, pr]) => (
                <div key={nm} className="ok-menu-row">
                  <span className="nm">{nm}</span>
                  <span className="pr">{pr}</span>
                </div>
              ))}
            </div>
            <div>
              {menuRight.map(([nm, pr]) => (
                <div key={nm} className="ok-menu-row">
                  <span className="nm">{nm}</span>
                  <span className="pr">{pr}</span>
                </div>
              ))}
            </div>
            <p className="ok-menu-note">
              ※ 価格は税込。これは架空の喫茶店のサンプル料金です。
            </p>
          </div>
        </div>
      </section>

      {/* 店内 */}
      <section id="gallery" className="ok-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="ok-wrap ok-center">
          <p className="ok-label center">Interior</p>
          <h2 className="ok-h2">店内</h2>
          <p className="ok-lead">
            深い色の木と、やわらかな灯り。時間がゆっくり流れる場所です。
          </p>
        </div>
        <div className="ok-wrap">
          <div className="ok-gallery">
            {gallery.map((g) => (
              <figure key={g.src} className="ok-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={g.src} alt={g.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ご案内・アクセス */}
      <section id="access" className="ok-section paper2" style={{ scrollMarginTop: "4rem" }}>
        <div className="ok-wrap">
          <p className="ok-label">Access</p>
          <h2 className="ok-h2">ご案内</h2>
          <div className="ok-access">
            <div>
              <table className="ok-info-table">
                <tbody>
                  <tr>
                    <th scope="row">お電話</th>
                    <td>
                      <span className="ok-tel">03-0000-0000</span>
                      <br />
                      （架空の番号です）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">営業</th>
                    <td>8:00–19:00（L.O. 18:30）</td>
                  </tr>
                  <tr>
                    <th scope="row">定休</th>
                    <td>木曜日</td>
                  </tr>
                  <tr>
                    <th scope="row">住所</th>
                    <td>
                      山ノ手県 港見市 栄町2-3 おもかげビル1F
                      <br />
                      （架空の住所です／港見駅 中央口から徒歩3分）
                    </td>
                  </tr>
                </tbody>
              </table>
              <DemoMap station="港見駅" walk="中央口から徒歩3分" shop="珈" />
            </div>
            <div>
              <p className="ok-lead" style={{ marginBottom: "1.2rem" }}>
                モーニングは8時から。トーストとゆで玉子、それに珈琲。
                朝の常連さんに愛されています。
              </p>
              <a href="#menu" className="ok-btn-enji ok-btn">
                名物をもう一度見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
