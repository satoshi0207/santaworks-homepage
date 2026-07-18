import Link from "next/link";

const reasons = [
  {
    title: "自社大工が、直接つくる",
    body: "下請けに丸投げしません。設計から施工まで顔の見える自社の職人が受け持つから、中間マージンもなく、話が早い。",
  },
  {
    title: "一邸ずつ、暮らしに合わせて",
    body: "同じ家はひとつもありません。ご家族の暮らし方や将来の変化まで聞いてから、間取りと素材を一緒に決めます。",
  },
  {
    title: "引き渡しは、おつきあいの始まり",
    body: "建てて終わりにしない。定期点検と、ちょっとした不具合の駆けつけまで。長く住むほど頼れる存在でいたい。",
  },
];

const services = [
  {
    no: "01",
    title: "新築（注文住宅）",
    body: "無垢材と自然素材を活かした、あたたかい木の家。ローコストから本格和風まで、ご予算に正直に向き合います。",
    media: "/demo/koumuten/jirei-view.jpg",
  },
  {
    no: "02",
    title: "リフォーム・増改築",
    body: "キッチン・浴室の水回りから、間取り変更・二世帯化まで。住みながらの工事も、段取りで負担を減らします。",
    media: "/demo/koumuten/jirei-kitchen.jpg",
  },
  {
    no: "03",
    title: "小さな修繕・お手入れ",
    body: "「建具が閉まらない」「雨どいが外れた」——一箇所からお気軽に。地域の家のかかりつけ大工です。",
    media: "/demo/koumuten/jirei-deck.jpg",
  },
];

const cases = [
  {
    media: "/demo/koumuten/jirei-living.jpg",
    tags: ["新築", "リビング"],
    tagAccent: "新築",
    title: "木の香りに包まれるリビング",
    area: "陽向市 T様邸",
  },
  {
    media: "/demo/koumuten/jirei-kitchen.jpg",
    tags: ["リフォーム", "キッチン"],
    tagAccent: "リフォーム",
    title: "対面式に変えた、家族の見えるキッチン",
    area: "みどり町 K様邸",
  },
  {
    media: "/demo/koumuten/jirei-bath.jpg",
    tags: ["リフォーム", "浴室"],
    tagAccent: "リフォーム",
    title: "冬でも寒くない、あたたかな浴室へ",
    area: "本町 S様邸",
  },
];

export default function KoumutenHome() {
  return (
    <>
      {/* ヒーロー */}
      <section className="hd-hero">
        <div className="hd-hero-media" aria-hidden="true" />
        <div className="hd-hero-inner">
          <span className="hd-hero-since">SINCE 1998 ・ 地域で25年</span>
          <h1 className="hd-hero-title">
            住むほどに、
            <br />
            <span className="accent">いい顔</span>になる家を。
          </h1>
          <p className="hd-hero-sub">
            新築・リフォーム・小さな修繕まで。陽向市で25年、
            自社の大工が一邸ずつ、暮らしに向き合ってきた工務店です。
          </p>
          <div className="hd-hero-actions">
            <Link href="/demo/koumuten/contact/" className="hd-btn">
              無料相談・お見積り
            </Link>
            <Link href="/demo/koumuten/works/" className="hd-btn-ghost">
              施工事例を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="hd-section">
        <div className="hd-wrap">
          <p className="hd-label">Why us</p>
          <h2 className="hd-h2">
            地元の家づくりを、
            <span className="accent">まっすぐ</span>に。
          </h2>
          <p className="hd-lead">
            派手な宣伝も、豪華なモデルハウスもありません。そのぶん、
            一軒一軒に手をかけること。それがひだまり工務店の選ばれる理由です。
          </p>
          <div className="hd-reasons">
            {reasons.map((r) => (
              <div key={r.title} className="hd-reason">
                <div className="bar" aria-hidden="true" />
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 私たちの仕事 */}
      <section className="hd-section hd-band">
        <div className="hd-wrap">
          <p className="hd-label">Services</p>
          <h2 className="hd-h2">私たちの仕事</h2>
          <p className="hd-lead">
            大きな新築から、小さな一箇所の修繕まで。
            住まいのことなら、まずはひだまり工務店にご相談ください。
          </p>
          <div className="hd-services">
            {services.map((s) => (
              <article key={s.no} className="hd-service">
                <div
                  className="media"
                  style={{ backgroundImage: `url(${s.media})` }}
                  aria-hidden="true"
                />
                <div className="body">
                  <span className="no">{s.no}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 施工事例ダイジェスト */}
      <section className="hd-section">
        <div className="hd-wrap">
          <p className="hd-label">Works</p>
          <h2 className="hd-h2">施工事例</h2>
          <p className="hd-lead">
            これまでにお手伝いした、暮らしの一部をご紹介します。
          </p>
          <div className="hd-gallery">
            {cases.map((c) => (
              <article key={c.title} className="hd-case">
                <div className="media">
                  <span style={{ backgroundImage: `url(${c.media})` }} />
                </div>
                <div className="body">
                  <div className="hd-tags">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className={`hd-tag${t === c.tagAccent ? " accent" : ""}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{c.title}</h3>
                  <p className="meta">{c.area}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "2.2rem" }}>
            <Link href="/demo/koumuten/works/" className="hd-btn-wood hd-btn">
              施工事例をもっと見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 現場の誠実さ（職人） */}
      <section className="hd-section hd-dark">
        <div className="hd-wrap">
          <div className="hd-craft">
            <div className="hd-craft-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" decoding="async" src="/demo/koumuten/craft.jpg" alt="現場で作業する大工" />
              <div className="detail">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async"
                  src="/demo/koumuten/craft-detail.jpg"
                  alt="木材を加工する手元"
                />
              </div>
            </div>
            <div>
              <p className="hd-label">Our craft</p>
              <p className="hd-quote">
                図面より、
                <br />
                <span className="accent">暮らし</span>を見ています。
              </p>
              <p style={{ color: "var(--dark-sub)", margin: 0 }}>
                ミリ単位の仕事は当たり前。そのうえで私たちが本当に見ているのは、
                朝日の入り方や、家族が自然と集まる場所といった「暮らしの手ざわり」です。
                住んでから気持ちのいい家は、図面の外にこそ宿ると思っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 採用バナー */}
      <section className="hd-recruit">
        <div className="hd-recruit-media" aria-hidden="true" />
        <div className="hd-wrap hd-recruit-inner">
          <p className="hd-label">Recruit</p>
          <h2 className="hd-h2" style={{ color: "#fff" }}>
            現場の仲間を、探しています。
          </h2>
          <p style={{ color: "#f3ece2", maxWidth: "34rem", marginBottom: "1.8rem" }}>
            未経験からでも、手に職を。ものづくりが好きな人と、
            長く一緒に家を建てていきたい。まずは現場を見にきてください。
          </p>
          <Link href="/demo/koumuten/about/#recruit" className="hd-btn">
            採用について見る →
          </Link>
        </div>
      </section>

      {/* CTA帯 */}
      <section className="hd-section hd-band hd-cta-band">
        <div className="hd-wrap">
          <p className="hd-label" style={{ justifyContent: "center" }}>
            Contact
          </p>
          <h2 className="hd-h2">まずは、話を聞かせてください。</h2>
          <p className="hd-lead" style={{ marginInline: "auto" }}>
            「こんなことできる？」の段階で大丈夫です。ご相談・お見積りは無料です。
          </p>
          <p className="tel">
            0120-00-0000
            <small>受付 9:00–18:00（日祝休）／これは架空の番号です</small>
          </p>
          <div style={{ marginTop: "1.4rem" }}>
            <Link href="/demo/koumuten/contact/" className="hd-btn">
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
