import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "施工事例",
  description:
    "架空の工務店「ひだまり工務店」の施工事例ギャラリー（デザインサンプル）。",
};

const cases = [
  {
    media: "/demo/koumuten/jirei-living.jpg",
    tags: ["新築", "リビング"],
    accent: "新築",
    title: "木の香りに包まれるリビング",
    area: "陽向市 T様邸",
    body: "無垢のフローリングと塗り壁で仕上げた、深呼吸したくなるリビング。冬は薪ストーブ一台で家じゅうがあたたかく。",
  },
  {
    media: "/demo/koumuten/jirei-kitchen.jpg",
    tags: ["リフォーム", "キッチン"],
    accent: "リフォーム",
    title: "対面式に変えた、家族の見えるキッチン",
    area: "みどり町 K様邸",
    body: "壁付けだったキッチンを対面式に。料理をしながらお子さんの様子が見えるようになり、会話も増えたそうです。",
  },
  {
    media: "/demo/koumuten/jirei-bath.jpg",
    tags: ["リフォーム", "浴室"],
    accent: "リフォーム",
    title: "冬でも寒くない、あたたかな浴室へ",
    area: "本町 S様邸",
    body: "断熱と暖房を見直し、ヒートショックの不安をなくした在来浴室。掃除のしやすさもぐっと向上しました。",
  },
  {
    media: "/demo/koumuten/jirei-washroom.jpg",
    tags: ["リフォーム", "洗面"],
    accent: "リフォーム",
    title: "朝の身支度がはかどる洗面室",
    area: "陽向市 N様邸",
    body: "収納を造作でたっぷり確保し、二人並べる洗面台に。石目調のタイルで、ホテルのような清潔感を出しました。",
  },
  {
    media: "/demo/koumuten/jirei-deck.jpg",
    tags: ["増改築", "外構"],
    accent: "増改築",
    title: "森を眺めるウッドデッキの増築",
    area: "みどり町 Y様邸",
    body: "リビングとつながるウッドデッキを増築。第二のリビングとして、休日の食事や子どもの遊び場になっています。",
  },
  {
    media: "/demo/koumuten/jirei-view.jpg",
    tags: ["新築", "眺望"],
    accent: "新築",
    title: "大きな窓で景色を切り取る家",
    area: "陽向市 M様邸",
    body: "敷地いちばんの眺めに向けて、大開口の窓を計画。季節のうつろいが、そのまま暮らしの一部になりました。",
  },
];

export default function KoumutenWorks() {
  return (
    <>
      <PageHead en="Works" title="施工事例" />
      <section className="hd-section">
        <div className="hd-wrap">
          <p className="hd-lead">
            新築からリフォーム、小さな増改築まで。
            ひだまり工務店がお手伝いした住まいの一部をご紹介します。
            （写真はイメージ、お客様名はすべて架空です）
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
                        className={`hd-tag${t === c.accent ? " accent" : ""}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <p className="meta">{c.area}</p>
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              textAlign: "center",
              background: "var(--band)",
              borderRadius: "10px",
            }}
          >
            <h2 className="hd-h2" style={{ fontSize: "1.4rem" }}>
              あなたの「こんな暮らし」も、聞かせてください。
            </h2>
            <p className="hd-lead" style={{ marginInline: "auto" }}>
              施工事例はほんの一例です。ご予算や住まいのお悩みに合わせて、一緒に考えます。
            </p>
            <Link href="/demo/koumuten/contact/" className="hd-btn">
              無料相談・お見積り
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
