import DemoMap from "@/components/DemoMap";

const interiors = [
  {
    src: "/demo/club/interior-counter.jpg",
    ja: "白磁のカウンター",
    en: "Counter",
  },
  {
    src: "/demo/club/interior-bar.jpg",
    ja: "琥珀のバックバー",
    en: "Back bar",
  },
  {
    src: "/demo/club/interior-seats.jpg",
    ja: "灯りを落とした語らいの席",
    en: "Lounge seats",
  },
];

const points = [
  {
    mark: "静",
    title: "静けさ",
    body: "低く落とした灯りと、行き届いた距離感。銀座の喧騒を忘れ、ただ心をほどく時間を。",
  },
  {
    mark: "盃",
    title: "一献",
    body: "選び抜いたシャンパーニュとウイスキー。間合いを心得たサービスで、一杯を大切に。",
  },
  {
    mark: "語",
    title: "語らい",
    body: "お名前も、昨夜の続きも憶えています。また会いたくなる夜を、そっとご用意します。",
  },
];

const info: { en: string; ja: React.ReactNode }[] = [
  {
    en: "Hours",
    ja: (
      <>
        20:00 – 翌1:00
        <span className="ja">日曜・祝日は休業</span>
      </>
    ),
  },
  {
    en: "System",
    ja: (
      <>
        完全会員制・ご紹介制
        <span className="ja">
          お席・ご料金はお問い合わせ時に申し受けます
        </span>
      </>
    ),
  },
  {
    en: "Dress",
    ja: (
      <>
        スマートカジュアル
        <span className="ja">Tシャツ・短パン・サンダルはご遠慮ください</span>
      </>
    ),
  },
  {
    en: "Notice",
    ja: (
      <>
        20歳未満の方はご入店いただけません
        <span className="ja">お車でお越しの際は飲酒運転をご遠慮ください</span>
      </>
    ),
  },
];

export default function ClubHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="gz-hero">
        <div className="gz-hero-media" aria-hidden="true" />
        <div className="gz-hero-inner">
          <span className="gz-member">MEMBERS ONLY</span>
          <p className="gz-eyebrow">Ginza · Members Lounge</p>
          <h1 className="gz-title">
            月讀
            <span className="gz-reading">つ く よ み</span>
          </h1>
          <p className="gz-tagline">忘れられない夜を、そっと。</p>
          <p className="gz-est">Established 1985 · Ginza Tokyo</p>
        </div>
        <div className="gz-scroll" aria-hidden="true">
          Scroll
          <span />
        </div>
      </section>

      {/* ごあいさつ */}
      <section className="gz-section">
        <div className="gz-wrap">
          <div className="gz-message">
            <div>
              <p className="gz-label">Message</p>
              <h2 className="gz-h2">
                この街の夜に、
                <br />
                <span className="gold">ひとつの灯り</span>を。
              </h2>
              <p>
                銀座に月讀の灯をともして、四十年になります。
                派手なもてなしはいたしません。そのかわり、
                お越しくださった方の時間が、静かに満ちていくように。
              </p>
              <p>
                お仕事の張り詰めた一日の終わりに。大切な方との、
                特別な一夜に。月あかりのような、やわらかな灯りのなかで、
                どうぞ心をおほどきください。
              </p>
              <p className="gz-sign">
                月讀 ママ<strong>葛城 蛍</strong>
              </p>
            </div>
            <div className="gz-message-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/demo/club/candle.jpg" alt="灯りのともる店内の様子" />
            </div>
          </div>
        </div>
      </section>

      {/* 世界観 */}
      <section className="gz-concept">
        <div className="gz-concept-media" aria-hidden="true" />
        <div className="gz-wrap inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async"
            src="/demo/club/orchid.jpg"
            alt=""
            aria-hidden="true"
            className="gz-orchid"
          />
          <p className="poem">
            ひと口の余韻に、
            <br />
            今日の疲れが<span className="gold">ほどけていく</span>。
            <br />
            月讀で過ごす夜は、
            <br />
            きっと明日の、静かな力になる。
          </p>
        </div>
      </section>

      {/* 店内 */}
      <section id="interior" className="gz-section alt" style={{ scrollMarginTop: "4rem" }}>
        <div className="gz-wrap gz-center">
          <p className="gz-label center">Interior</p>
          <h2 className="gz-h2">しつらえ</h2>
          <p className="gz-lead">
            白磁のカウンターに、琥珀色のバックバー。
            低く落とした照明が、上質な夜をかたちづくります。
          </p>
        </div>
        <div className="gz-wrap">
          <div className="gz-gallery">
            {interiors.map((it) => (
              <figure key={it.en} className="gz-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={it.src} alt={it.ja} />
                <figcaption>
                  {it.ja}
                  <span className="en">{it.en}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* おもてなし */}
      <section id="hospitality" className="gz-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="gz-wrap gz-center">
          <p className="gz-label center">Hospitality</p>
          <h2 className="gz-h2">月讀のおもてなし</h2>
          <p className="gz-lead">
            派手さではなく、心地よさで。三つのことを、大切にしています。
          </p>
        </div>
        <div className="gz-wrap">
          <div className="gz-points">
            {points.map((p) => (
              <div key={p.title} className="gz-point">
                <span className="mark" aria-hidden="true">
                  {p.mark}
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ご案内 */}
      <section id="info" className="gz-section alt" style={{ scrollMarginTop: "4rem" }}>
        <div className="gz-wrap">
          <p className="gz-label">Information</p>
          <h2 className="gz-h2">ご案内</h2>
          <dl className="gz-info">
            {info.map((row) => (
              <div key={row.en} className="gz-info-row">
                <dt>{row.en}</dt>
                <dd>{row.ja}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* アクセス */}
      <section id="access" className="gz-section" style={{ scrollMarginTop: "4rem" }}>
        <div className="gz-wrap gz-center">
          <p className="gz-label center">Access</p>
          <h2 className="gz-h2">アクセス・ご予約</h2>
        </div>
        <div className="gz-wrap">
          <div className="gz-access">
            <div className="gz-access-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/demo/club/ginza-night.jpg" alt="夜の銀座の街並み" />
            </div>
            <div className="addr">
              東京都中央区銀座某丁目0-0
              <br />
              月讀ビル7F（架空の住所です）
              <span className="tel">03-0000-0000</span>
              20:00–翌1:00／日曜・祝日休
              <br />
              完全会員制・ご紹介制です。はじめての方は、
              会員の方のご紹介にてご案内いたします。
            </div>
          </div>

          <div style={{ marginTop: "2.4rem" }}>
            <DemoMap station="銀座駅" walk="A5出口より徒歩2分" shop="月" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gz-cta">
        <div className="gz-wrap">
          <p className="gz-label center">Reservation</p>
          <h2 className="gz-h2">その夜の続きを、月讀で。</h2>
          <p className="gz-lead" style={{ marginInline: "auto", marginBottom: "2rem" }}>
            ご予約・ご紹介のお問い合わせを承ります。（※ これは架空の電話番号です）
          </p>
          <a href="tel:0300000000" className="gz-btn">
            03-0000-0000 へお電話
          </a>
        </div>
      </section>
    </>
  );
}
