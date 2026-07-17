import DemoMap from "@/components/DemoMap";

const menu = [
  { no: "01", nm: "CUT", ja: "カット（シャンプー・ブロー込）", pr: "¥5,500" },
  { no: "02", nm: "COLOR", ja: "カラーリング", pr: "¥7,700〜" },
  { no: "03", nm: "PERM", ja: "パーマ・デジタルパーマ", pr: "¥8,800〜" },
  { no: "04", nm: "TREATMENT", ja: "髪質改善トリートメント", pr: "¥3,300〜" },
  { no: "05", nm: "CUT + COLOR", ja: "人気のセットメニュー", pr: "¥12,100" },
];

const works = [
  { src: "/demo/salon2/motion.jpg", alt: "風になびく髪", cls: "wide" },
  { src: "/demo/salon2/texture.jpg", alt: "毛先の質感", cls: "tall" },
  { src: "/demo/salon2/editorial.jpg", alt: "モードなスタイリング", cls: "tall" },
  { src: "/demo/salon2/interior.jpg", alt: "店内", cls: "wide" },
  { src: "/demo/salon2/scissors.jpg", alt: "シザーワーク", cls: "tall" },
  { src: "/demo/salon2/hands.jpg", alt: "スタイリングの手元", cls: "wide" },
];

export default function Salon2Home() {
  return (
    <>
      {/* ヒーロー */}
      <section className="yh-hero">
        <div className="yh-hero-media" aria-hidden="true" />
        <div className="yh-hero-inner">
          <p className="ey">Hair / Tokyo ・ Since 2018</p>
          <h1 className="yh-hero-title">YOHAKU</h1>
          <p className="yh-hero-ja">
            余白 — 引き算の、<span className="ac">美しさ</span>。
          </p>
        </div>
      </section>

      {/* コンセプト */}
      <section id="concept" className="yh-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="yh-wrap">
          <div className="yh-concept">
            <div>
              <p className="yh-label">
                Concept <span className="yh-index">/ 01</span>
              </p>
              <p className="statement">
                足すのではなく、<span className="ac">削ぐ</span>。
                <br />
                あなたに、本当に必要な分だけを。
              </p>
              <p className="yh-lead">
                流行を追いかけて盛るのではなく、削ぎ落として似合わせる。
                骨格と毛流れを読み、いちばん軽やかに見える一点を探します。
                作り込みすぎない“余白”こそ、その人らしさが宿る場所だと考えています。
              </p>
            </div>
            <div className="yh-concept-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/salon2/motion.jpg" alt="風になびく髪" />
            </div>
          </div>
        </div>
      </section>

      {/* クラフト */}
      <section className="yh-section off">
        <div className="yh-wrap">
          <div className="yh-craft">
            <div className="yh-craft-photos">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/salon2/hands.jpg" alt="スタイリングの手元" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/demo/salon2/scissors.jpg" alt="シザーワーク" />
            </div>
            <div>
              <p className="yh-label">
                Craft <span className="yh-index">/ 02</span>
              </p>
              <h2 className="yh-h2">
                技術は、
                <br />
                言葉より正直だ。
              </h2>
              <p className="yh-lead" style={{ marginTop: "1.2rem" }}>
                カウンセリングは長く、はさみを入れるのは慎重に。
                ミリ単位の判断の積み重ねが、翌朝の再現性をつくります。
                担当は最後までひとり。あなたの髪を、いちばん理解した手で。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メニュー */}
      <section id="menu" className="yh-section dark" style={{ scrollMarginTop: "4rem" }}>
        <div className="yh-wrap">
          <p className="yh-label">
            Menu <span className="yh-index" style={{ color: "rgba(255,255,255,0.5)" }}>/ 03</span>
          </p>
          <h2 className="yh-h2" style={{ color: "#fff" }}>
            料金
          </h2>
          <div className="yh-menu">
            {menu.map((m) => (
              <div key={m.no} className="yh-menu-row">
                <span className="no">{m.no}</span>
                <span className="nm">
                  {m.nm}
                  <small>{m.ja}</small>
                </span>
                <span className="pr">{m.pr}</span>
              </div>
            ))}
          </div>
          <p className="yh-menu-note">
            ※ 税込・指名料別。これは架空のヘアサロンのサンプル料金です。
          </p>
        </div>
      </section>

      {/* ワークス */}
      <section id="works" className="yh-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="yh-wrap">
          <p className="yh-label">
            Works <span className="yh-index">/ 04</span>
          </p>
          <h2 className="yh-h2">スタイル</h2>
          <p className="yh-lead" style={{ marginTop: "0.8rem" }}>
            モノトーンで、質感とシルエットを。（写真にカーソルを合わせると色が戻ります）
          </p>
          <div className="yh-gallery">
            {works.map((w) => (
              <figure key={w.src} className={w.cls}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.src} alt={w.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="yh-section off" style={{ scrollMarginTop: "4rem" }}>
        <div className="yh-wrap">
          <p className="yh-label">
            Access <span className="yh-index">/ 05</span>
          </p>
          <h2 className="yh-h2" style={{ marginBottom: "2rem" }}>
            ご予約・アクセス
          </h2>
          <div className="yh-access">
            <div>
              <table className="yh-info-table">
                <tbody>
                  <tr>
                    <th scope="row">Tel</th>
                    <td>
                      <span className="yh-tel">03-0000-0000</span>
                      <br />
                      （架空の番号です／完全予約制）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Open</th>
                    <td>11:00–20:00（カット最終受付 19:00）</td>
                  </tr>
                  <tr>
                    <th scope="row">Closed</th>
                    <td>火曜日</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>
                      山ノ手県 港見市 本町1-9 KITビル4F
                      <br />
                      （架空の住所です／港見駅 東口から徒歩1分）
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="#access" className="yh-btn">
                Reserve Online
              </a>
            </div>
            <div>
              <DemoMap station="港見駅" walk="東口から徒歩1分" shop="余" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
