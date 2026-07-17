import DemoMap from "@/components/DemoMap";

const scenes = [
  {
    no: "壱",
    title: "お宮参り・百日",
    desc: "生まれてはじめての晴れ姿。小さな手やあんよも、そっと残します。",
  },
  {
    no: "弐",
    title: "七五三",
    desc: "衣装レンタルと着付けもおまかせ。ご機嫌に合わせて、ゆっくり撮ります。",
  },
  {
    no: "参",
    title: "成人式・振袖",
    desc: "一生に一度の晴れの日。前撮りで、余裕をもって残せます。",
  },
  {
    no: "肆",
    title: "ご家族・記念日",
    desc: "誕生日、還暦、なんでもない日も。集まれた、その日を一枚に。",
  },
  {
    no: "伍",
    title: "ブライダル",
    desc: "前撮り・フォトウェディング。おふたりらしい一枚を、じっくりと。",
  },
  {
    no: "陸",
    title: "証明写真・お仕事",
    desc: "履歴書・ビジネスポートレートも。数分で、印象のいい一枚を。",
  },
];

const plans: { nm: string; pr: string; ds: string }[] = [
  {
    nm: "記念写真プラン",
    pr: "¥16,500",
    ds: "撮影＋データ5カット＋六つ切り台紙1面。ご家族の記念に。",
  },
  {
    nm: "七五三・お宮参りプラン",
    pr: "¥27,500",
    ds: "衣装レンタル・着付け・ヘアセット込み。手ぶらでどうぞ。",
  },
  {
    nm: "成人式・振袖プラン",
    pr: "¥55,000",
    ds: "前撮り・ヘアメイク・アルバム込みのフルプラン。",
  },
  {
    nm: "証明写真・ポートレート",
    pr: "¥3,300",
    ds: "履歴書・マイナンバー・ビジネス用。約5分で仕上げ。",
  },
];

const album = [
  { src: "/demo/photo/furisode.jpg", alt: "藍地に白い花の振袖", cls: "tall" },
  { src: "/demo/photo/baby.jpg", alt: "おくるみに包まれた赤ちゃんの足", cls: "wide" },
  { src: "/demo/photo/bridal.jpg", alt: "花嫁の手にしたブーケ", cls: "tall" },
  { src: "/demo/photo/shichigosan.jpg", alt: "朱色の晴れ着の柄", cls: "tall" },
  { src: "/demo/photo/season.jpg", alt: "秋の落ち葉とヴィンテージカメラ", cls: "tall" },
  { src: "/demo/photo/film.jpg", alt: "たくさんの写真のフィルム", cls: "wide" },
];

export default function PhotoHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="ht-hero">
        <div className="ht-hero-media" aria-hidden="true" />
        <div className="ht-hero-inner">
          <div className="ht-frame">
            <span className="ht-since">SINCE 1985 ・ 三代のアルバムを</span>
            <p className="ht-hero-kind">写 真 館</p>
            <h1 className="ht-hero-title">ひととき</h1>
            <p className="ht-hero-en">Photo Studio Hitotoki</p>
            <p className="ht-hero-tag">一枚を、ずっと。</p>
          </div>
        </div>
      </section>

      {/* 想い */}
      <section id="message" className="ht-section ht-message" style={{ scrollMarginTop: "4rem" }}>
        <div className="ht-wrap">
          <p className="ht-label" style={{ justifyContent: "center" }}>
            Our thought
          </p>
          <p className="poem">
            その一枚が、
            <br />
            いつか誰かの、宝物になる。
            <br />
            七五三も、成人式も、なんでもない日も。
            <br />
            消えていく<span className="seal">ひととき</span>を、
            <br />
            かたちにして、お預かりします。
          </p>
          <p className="sign">写真館 ひととき ・ 店主より</p>
        </div>
      </section>

      {/* 撮影シーン */}
      <section id="scenes" className="ht-section paper2" style={{ scrollMarginTop: "4rem" }}>
        <div className="ht-wrap ht-center">
          <p className="ht-label center">Scenes</p>
          <h2 className="ht-h2">撮影シーン</h2>
          <p className="ht-lead">
            人生の節目から、日々のひとコマまで。どんな一日も、写真館 ひとときで。
          </p>
        </div>
        <div className="ht-wrap">
          <div className="ht-scenes">
            {scenes.map((s) => (
              <div key={s.title} className="ht-scene">
                <span className="no">{s.no}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* アルバムより */}
      <section id="album" className="ht-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="ht-wrap ht-center">
          <p className="ht-label center">From the album</p>
          <h2 className="ht-h2">アルバムより</h2>
          <p className="ht-lead">
            衣装の柄、小さなあんよ、季節のひかり。作品の“気配”をすこしだけ。
          </p>
        </div>
        <div className="ht-wrap">
          <div className="ht-gallery">
            {album.map((a) => (
              <figure key={a.src} className={a.cls}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.src} alt={a.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ご料金 */}
      <section className="ht-section sumi">
        <div className="ht-wrap">
          <p className="ht-label">Plans</p>
          <h2 className="ht-h2">ご料金</h2>
          <div className="ht-plans">
            {plans.map((p) => (
              <div key={p.nm} className="ht-plan">
                <span className="nm">{p.nm}</span>
                <span className="pr">{p.pr}</span>
                <p className="ds">{p.ds}</p>
              </div>
            ))}
          </div>
          <p className="ht-plans-note">
            ※ 税込。これは架空の写真館のサンプル料金です。衣装・アルバムの有無で変わります。
          </p>
        </div>
      </section>

      {/* ご案内・アクセス */}
      <section id="access" className="ht-section paper2" style={{ scrollMarginTop: "4rem" }}>
        <div className="ht-wrap">
          <p className="ht-label">Access</p>
          <h2 className="ht-h2">ご案内</h2>
          <div className="ht-access">
            <div>
              <table className="ht-info-table">
                <tbody>
                  <tr>
                    <th scope="row">ご予約</th>
                    <td>
                      <span className="ht-tel">03-0000-0000</span>
                      <br />
                      （架空の番号です／完全予約制）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">営業</th>
                    <td>10:00–18:00（最終受付 17:00）</td>
                  </tr>
                  <tr>
                    <th scope="row">定休</th>
                    <td>水曜日</td>
                  </tr>
                  <tr>
                    <th scope="row">住所</th>
                    <td>
                      山ノ手県 港見市 本町4-6 ひとときビル2F
                      <br />
                      （架空の住所です／港見駅 中央口から徒歩5分）
                    </td>
                  </tr>
                </tbody>
              </table>
              <DemoMap station="港見駅" walk="中央口から徒歩5分" shop="写" />
            </div>
            <div>
              <p className="ht-lead" style={{ marginBottom: "1.2rem" }}>
                ベビーカーのままお入りいただけます。授乳・おむつ替えスペースもご用意。
                お子さまのペースに合わせて、ゆっくり撮影します。
              </p>
              <a href="#scenes" className="ht-reserve">
                撮影シーンをもう一度見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
