import DemoMap from "@/components/DemoMap";

const system: { dt: string; note?: string; dd: string }[] = [
  { dt: "セット料金", note: "60分・フリードリンク", dd: "¥12,000〜" },
  { dt: "延長", note: "30分", dd: "¥6,000" },
  { dt: "指名料", dd: "¥3,000" },
  { dt: "VIPルームチャージ", note: "完全個室・要予約", dd: "¥20,000〜" },
  { dt: "シャンパン", note: "ボトル", dd: "¥25,000〜" },
];

export default function CabaretHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="dm-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/demo/cabaret/hero.webp"
          alt=""
          aria-hidden="true"
          className="dm-hero-media"
          width={1280}
          height={1600}
          fetchPriority="high"
        />
        <span className="dm-dust" aria-hidden="true" />
        <div className="dm-hero-inner">
          <p className="dm-hero-kicker">MINATOMI ・ YOIZAKA</p>
          <p className="dm-hero-club dm-serif">CLUB</p>
          <h1 className="dm-hero-title dm-serif">Diamantine</h1>
          <p className="dm-hero-kana">ディアマンティーヌ</p>
          <p className="dm-hero-tag">一夜を、宝石に。</p>
          <p className="dm-hero-note">
            20歳未満の方はご入店いただけません ・ 会員制ではございません
          </p>
        </div>
      </section>

      {/* コンセプト */}
      <section
        id="concept"
        className="dm-section tone dm-center"
        style={{ scrollMarginTop: "4rem" }}
      >
        <div className="dm-wrap">
          <p className="dm-label">Concept</p>
          <p className="dm-concept-poem">
            磨かれた時間だけが、
            <br />
            ここにある。
            <br />
            グラスの縁で光が跳ねて、
            <br />
            今夜も<span className="gold">宵坂</span>に、灯りがともる。
          </p>
        </div>
        <div className="dm-gems-band">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/demo/cabaret/gems.webp"
            alt=""
            aria-hidden="true"
            width={1400}
            height={788}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* フロア */}
      <section id="floor" className="dm-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="dm-wrap">
          <p className="dm-label">Floor</p>
          <h2 className="dm-h2">ふたつの、輝きかた。</h2>
          <p className="dm-lead">
            賑わいのメインフロアと、静けさのVIPルーム。その日の気分で、夜の過ごし方をお選びいただけます。
          </p>
          <div className="dm-rooms">
            <div className="dm-room">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/cabaret/floor.webp"
                alt="キャンドルの灯るメインフロアのイメージ"
                width={1400}
                height={934}
                loading="lazy"
                decoding="async"
              />
              <div className="body">
                <h3>MAIN FLOOR</h3>
                <p className="jp">メインフロア ・ 40席</p>
                <p>
                  キャンドルの揺れる灯りと、グラスの触れ合う音。シャンデリアの下で、今日の話をどうぞ。
                </p>
              </div>
            </div>
            <div className="dm-room">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/cabaret/vip.webp"
                alt="黒革のソファが置かれたVIPルームのイメージ"
                width={899}
                height={1200}
                loading="lazy"
                decoding="async"
              />
              <div className="body">
                <h3>VIP ROOM</h3>
                <p className="jp">完全個室 ・ 2室（要予約）</p>
                <p>
                  大切な接待や、記念日の夜に。扉の内側は、時間の流れがすこしだけゆっくりです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金システム */}
      <section
        id="system"
        className="dm-section tone dm-center"
        style={{ scrollMarginTop: "4rem" }}
      >
        <div className="dm-wrap">
          <p className="dm-label">System</p>
          <h2 className="dm-h2">料金システム</h2>
          <p className="dm-lead">
            明朗会計を心がけています。
            <br />
            ご不明な点は、ご案内の際にどうぞ。
          </p>
          <div className="dm-system-card">
            <dl>
              {system.map((s) => (
                <div key={s.dt} className="dm-system-row">
                  <dt>
                    {s.dt}
                    {s.note && <small>{s.note}</small>}
                  </dt>
                  <dd className="dm-serif">{s.dd}</dd>
                </div>
              ))}
            </dl>
            <p className="dm-system-note">
              ※ 税・サービス料別。これは架空の店舗のサンプル料金です。
              <br />
              ※ 20歳未満の方はご入店いただけません。飲酒運転は法律で禁じられています。
            </p>
          </div>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="dm-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="dm-wrap">
          <p className="dm-label">Access</p>
          <h2 className="dm-h2">ご案内</h2>
          <div className="dm-access">
            <div>
              <table className="dm-info-table">
                <tbody>
                  <tr>
                    <th scope="row">ご予約</th>
                    <td>
                      03-0000-0000
                      <br />
                      （架空の番号です／ご予約なしでもご入店いただけます）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">営業時間</th>
                    <td>20:00 – LAST</td>
                  </tr>
                  <tr>
                    <th scope="row">定休日</th>
                    <td>日曜日・祝日</td>
                  </tr>
                  <tr>
                    <th scope="row">所在地</th>
                    <td>
                      山ノ手県 港見市 宵坂2-9 ジュエルビル5F
                      <br />
                      （架空の住所です／港見駅 東口から徒歩5分）
                    </td>
                  </tr>
                </tbody>
              </table>
              <DemoMap station="港見駅" walk="東口から徒歩5分" shop="D" />
            </div>
            <div>
              <p className="dm-lead" style={{ marginBottom: "1.4rem" }}>
                お一人でも、接待でも。初めての方には、システムからゆっくりご説明します。クレジットカード各種ご利用いただけます。
              </p>
              <a href="#system" className="dm-reserve">
                料金システムをもう一度見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
