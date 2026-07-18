import DemoMap from "@/components/DemoMap";

type MenuItem = { name: string; note?: string; price: string };

const cicchetti: MenuItem[] = [
  { name: "自家製リコッタと蜂蜜のクロスティーニ", price: "¥480" },
  { name: "鰯のマリネ 香草パン粉", price: "¥520" },
  { name: "トリッパの煮込み", note: "とろとろになるまで、こっそり長く。", price: "¥680" },
  { name: "生ハムと季節の果実", price: "¥780" },
  { name: "本日の気まぐれ小皿", note: "今夜の正解は黒板に。", price: "¥380〜" },
];

const pasta: MenuItem[] = [
  { name: "手打ちタリオリーニのカルボナーラ", price: "¥1,400" },
  { name: "牛ほほ肉のラグー パッパルデッレ", price: "¥1,600" },
  { name: "アーリオ・オーリオ", note: "呑んだあとの、締めの一皿に。", price: "¥900" },
];

const dolce: MenuItem[] = [
  { name: "ティラミス（カップ仕立て）", price: "¥600" },
  { name: "今夜のドルチェ", note: "気分で作ります。内容はお尋ねください。", price: "¥550〜" },
];

const vino: MenuItem[] = [
  { name: "グラスワイン（赤・白）", price: "¥700〜" },
  { name: "本日のグラス3種 呑みくらべ", price: "¥1,500" },
  { name: "ボトル", price: "¥3,800〜" },
  { name: "食後酒（グラッパ／アマーロ）", price: "¥600〜" },
];

const gallery = [
  { src: "/demo/italian/cicchetti.jpg", alt: "蝋燭のそばに並んだチケッティの盛り合わせ" },
  { src: "/demo/italian/pasta1.jpg", alt: "暗がりの器に盛られた手打ちパスタ" },
  { src: "/demo/italian/pasta2.jpg", alt: "黒い皿のカルボナーラ" },
  { src: "/demo/italian/dolce.jpg", alt: "夜のドルチェ" },
  { src: "/demo/italian/vino.jpg", alt: "蝋燭の灯りごしの赤ワインのグラス" },
  { src: "/demo/italian/bottlewall.jpg", alt: "セラーに並ぶワインボトル" },
];

function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <ul className="cd-menu-list">
      {items.map((it) => (
        <li key={it.name}>
          <span className="dish">
            {it.name}
            {it.note && <small>{it.note}</small>}
          </span>
          <span className="leader" aria-hidden="true" />
          <span className="price cd-en">{it.price}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ItalianHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="cd-hero">
        <div className="cd-hero-media" aria-hidden="true" />
        <div className="cd-hero-glow" aria-hidden="true" />
        <div>
          <p className="cd-hero-eyebrow">Osteria — Vino e Cicchetti</p>
          <h1 className="cd-hero-title cd-en">Candelume</h1>
          <p className="cd-hero-kind">イタリアン酒場 カンデルーメ</p>
          <div className="cd-hero-rule" aria-hidden="true" />
          <p className="cd-hero-copy">蝋燭一本ぶんの、あかり。</p>
          <p className="cd-hero-sub">カウンター9席、路地裏のイタリア酒場。</p>
        </div>
      </section>

      {/* 店主のことば */}
      <section id="about" className="cd-section">
        <div className="cd-wrap cd-intro-grid">
          <div className="cd-intro-photo">
            <img
              src="/demo/italian/counter.jpg"
              alt="夜のカウンターに並ぶ木のスツール"
              loading="lazy"
            />
          </div>
          <div className="cd-intro-text">
            <p className="cd-label cd-en">Il Padrone</p>
            <h2 className="cd-heading">ひとりで、やっています。</h2>
            <p>
              仕込みも、料理も、ワインを注ぐのも、店主ひとり。だから席は少しだけ、料理は少しずつ。市場の顔ぶれとワインの入荷で、品書きは毎晩すこし変わります。
            </p>
            <p>
              どうか、気取らないでください。「オステリア」は、イタリアの言葉で気軽な酒場のこと。一杯だけでも、締めのパスタだけでも、ちゃんと歓迎です。
            </p>
            <p>
              蝋燭がともるくらいの暗さで、今夜の話をどうぞ。その一皿が、いつか思い出になりますように。
            </p>
            <p className="cd-intro-sign">— Osteria Candelume 店主</p>
          </div>
        </div>
      </section>

      {/* お品書き */}
      <section id="menu" className="cd-menu">
        <div className="cd-wrap">
          <p className="cd-label cd-en">Menu</p>
          <h2 className="cd-heading">お品書き</h2>
          <p className="cd-menu-note">
            ※ 仕入れにより内容と価格は変わります。表示は税込みです。
          </p>
          <div className="cd-menu-grid">
            <div>
              <h3 className="cd-menu-cat">Cicchetti</h3>
              <p className="cd-menu-cat-jp">チケッティ（小皿）</p>
              <MenuList items={cicchetti} />
            </div>
            <div>
              <h3 className="cd-menu-cat">Pasta</h3>
              <p className="cd-menu-cat-jp">パスタ</p>
              <MenuList items={pasta} />
              <h3 className="cd-menu-cat" style={{ marginTop: "40px" }}>
                Dolce
              </h3>
              <p className="cd-menu-cat-jp">ドルチェ</p>
              <MenuList items={dolce} />
            </div>
          </div>
          <p className="cd-menu-black">
            品書きは、<strong>今夜の黒板</strong>がいちばん正しい。
          </p>
        </div>
      </section>

      {/* ヴィーノ */}
      <section id="vino" className="cd-vino">
        <div className="cd-vino-media" aria-hidden="true" />
        <div className="cd-wrap">
          <div className="cd-vino-inner">
            <p className="cd-label cd-en">Vino</p>
            <h2 className="cd-heading">グラス一杯から、イタリアの村へ。</h2>
            <p>
              小さな造り手の、飾らないワインを中心にそろえています。ラベルの向こうにある村の話は、店主までどうぞ。
            </p>
            <ul className="cd-vino-list">
              {vino.map((it) => (
                <li key={it.name}>
                  <span>{it.name}</span>
                  <span className="leader" aria-hidden="true" />
                  <span className="price cd-en">{it.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ギャラリー */}
      <section id="gallery" className="cd-section">
        <div className="cd-wrap">
          <p className="cd-label cd-en">Interni e Piatti</p>
          <h2 className="cd-heading">店のなか</h2>
          <div className="cd-gallery-grid">
            {gallery.map((g) => (
              <figure key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ご案内 */}
      <section id="access" className="cd-section">
        <div className="cd-wrap">
          <p className="cd-label cd-en">Informazioni</p>
          <h2 className="cd-heading">ご案内</h2>
          <div className="cd-access-grid">
            <table className="cd-info">
              <tbody>
                <tr>
                  <th scope="row">営業時間</th>
                  <td>
                    18:00–24:00（L.O. 23:00）
                    <br />
                    <small>日曜・月曜おやすみ／不定休あり（SNSでお知らせします）</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row">お席</th>
                  <td>
                    カウンター9席
                    <br />
                    <small>ご予約は4名さままで。おひとりさま、歓迎です。</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row">お通し</th>
                  <td>
                    チケッティ1品（¥400）を最初にお出しします
                  </td>
                </tr>
                <tr>
                  <th scope="row">お支払い</th>
                  <td>現金・各種クレジットカード・QR決済</td>
                </tr>
                <tr>
                  <th scope="row">ご住所</th>
                  <td>
                    山ノ手県 港見市 灯り横丁2-9 カンテラビル1F
                    <br />
                    <small>※ 架空の住所です</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row">お電話</th>
                  <td>
                    050-0000-0000
                    <br />
                    <small>※ 架空の番号です。お掛けにならないでください</small>
                  </td>
                </tr>
              </tbody>
            </table>
            <DemoMap station="港見駅" walk="東口から徒歩4分" shop="C" />
          </div>
        </div>
      </section>
    </>
  );
}
