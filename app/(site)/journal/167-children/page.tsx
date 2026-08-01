import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import { eyebrowOf } from "../posts";

export const metadata: Metadata = {
  title: "小学生167人。この数字を、届く人に渡したいです",
  description:
    "SNSがきっかけで被害にあった子どもは、令和7年に1,566人。うち小学生は167人で、前年より22.8%増えました。警察庁の統計を、定義と母数まで含めて整理しています。発信力のない親にできるのは、たぶんここまでです。",
  alternates: { canonical: "/journal/167-children/" },
  openGraph: {
    type: "article",
    title: "小学生167人。この数字を、届く人に渡したいです｜Santa Works Journal",
    description:
      "SNSがきっかけで被害にあった小学生は、令和7年に167人。前年より22.8%増。警察庁の統計を、定義と母数まで含めて整理しました。",
    url: "/journal/167-children/",
    images: [
      {
        url: "/blog/167-children/ogp.png",
        width: 1200,
        height: 630,
        alt: "小学生167人。この数字を、届く人に渡したいです｜Santa Works Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "小学生167人。この数字を、届く人に渡したいです｜Santa Works Journal",
    description:
      "SNSがきっかけで被害にあった小学生は、令和7年に167人。前年より22.8%増えました。",
    images: ["/blog/167-children/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ⚠️ ヒーローに写真は使わない。子どもを被写体にしないため、
                そして悲しさを演出しないため。記事の主役である数字そのものを図版にする。
                `chart` クラスで写真用の暗幕を外している（journal.css）。
                図版の生成は hero.webp と同名のスクリプトで管理（出典は本文※1）。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                {/* 画像は CSS変数で渡す。モバイル（16/10）では --hero-sp に差し替わる */}
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/167-children/hero.webp)",
                      "--hero-sp": "url(/blog/167-children/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
                {/* chip は置かない。`.ph` が中身を中央寄せする作りなので、
                    グラフの真ん中に重なってしまう。図版側に見出しを持たせてある。 */}
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("167-children")}</span>
            <h1 className="title">
              小学生167人。
              <br />
              この数字を、届く人に渡したいです。
            </h1>
            <p className="lede">
              前の記事で、娘にスマホを渡すかどうかを決めかねている話を書きました。その続きで公開データを見に行ったら、思っていたより重い数字が出てきました。
              <strong>
                SNSがきっかけで被害にあった小学生は、令和7年に167人。前年より22.8%増えています。
              </strong>
              私の発信は弱いです。それでも、定義と母数まで揃えて整えておけば、
              <strong>ちゃんと届く人の材料になるかもしれない</strong>
              。そう思って書いています。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.07.28</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  被害児童は令和7年に<strong>1,566人で増加に転じ</strong>
                  、小学生は<strong>167人（前年比+22.8%）</strong>。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  最初に投稿したのは<strong>被害児童自身が74.2%</strong>
                  。その内容で最も多いのは
                  <strong>「プロフィールのみ」と「日常生活」</strong>でした。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  被害児童の<strong>89.2%がフィルタリングを使っていません</strong>
                  。ここは家庭の側で動かせる数字です。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">起きていること</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">減っていた数字が、増加に転じました</h2>
            </div>
            <p>
              警察庁が毎年出している統計に「SNSに起因する事犯の被害児童数」という項目があります。令和7年分が
              <strong>2026年2月26日に公表</strong>されています<sup>※1</sup>。
            </p>

            <figure className="rv">
              <div className="fh">
                SNSに起因する事犯の被害児童数（令和7年／18歳未満）
              </div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    1,566<small>人</small>
                  </div>
                  <div className="cap">全体。前年は1,486人（+5.4%）</div>
                  <div className="src">警察庁（令和7年）</div>
                </div>
                <div className="stat ac">
                  <div className="big">
                    167<small>人</small>
                  </div>
                  <div className="cap">うち小学生（10.7%）。前年比 +31人</div>
                  <div className="src">同上</div>
                </div>
                <div className="stat">
                  <div className="big">
                    +22.8<small>%</small>
                  </div>
                  <div className="cap">小学生の前年からの増加率</div>
                  <div className="src">同上</div>
                </div>
              </div>
              <figcaption>
                中学生は758人（48.4%）、高校生は579人（37.0%）。
                <strong>高校生は減っているのに、小学生だけ増えています。</strong>
              </figcaption>
            </figure>

            <p>
              全体で見ると、平成30年代は年間1,700〜2,000人台で、令和6年に1,486人まで下がっていました。それが令和7年に
              1,566人へ戻っています。一方で
              <strong>小学生は平成28年の43人から、9年で167人</strong>
              ——約3.9倍です。
            </p>

            <div className="note rv">
              <span className="nh">この統計の定義（ここを外すと数字が意味を失います）</span>
              <p>
                <b>「SNS」には通信ゲームが含まれ、届出のある出会い系サイトは除かれます。</b>
                また「SNSに起因する事犯」とは、
                <b>
                  SNSを通じて面識のない被疑者と被害児童が知り合い、交際や知人関係等に発展する前に被害にあった事犯
                </b>
                を指します。対象は児童福祉法違反、児童買春・児童ポルノ禁止法違反、青少年保護育成条例違反、重要犯罪等、面会要求等、性的姿態撮影等処罰法の罪です
                <sup>※1</sup>。
              </p>
            </div>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">いちばん重い数字</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">「危ないことを書かなければ大丈夫」は、成り立ちません</h2>
            </div>
            <p>
              同じ統計に「最初に投稿した者」という項目があります。ここを読んで、手が止まりました。
            </p>

            <div className="callout rv">
              <div className="big">
                74.2<span>％（1,162人）</span>
              </div>
              <div className="tx">
                <b>最初に投稿したのは、被害児童自身。</b>
                被疑者側からの投稿は 239人（15.3%）でした<sup>※1</sup>。
              </div>
            </div>

            <p>
              では、子どもたちは何を書いていたのか。ここが、この記事でいちばん伝えたいところです。
            </p>

            <figure className="rv">
              <div className="fh">
                被害児童の投稿内容（令和7年・母数は自ら投稿した1,162人）
              </div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    18.1<small>%</small>
                  </div>
                  <div className="cap">プロフィールのみ（210人）</div>
                  <div className="src">最多</div>
                </div>
                <div className="stat ac">
                  <div className="big">
                    14.9<small>%</small>
                  </div>
                  <div className="cap">日常生活（173人）</div>
                  <div className="src">2番目</div>
                </div>
                <div className="stat">
                  <div className="big">
                    5.9<small>%</small>
                  </div>
                  <div className="cap">自画撮り（69人）</div>
                  <div className="src">同調査</div>
                </div>
              </div>
              <figcaption>
                ほかに援助交際募集 150人（12.9%）、趣味・嗜好 131人（11.3%）、友達募集
                129人（11.1%）、出会い目的 87人（7.5%）、家出 30人（2.6%）、悩み相談 17人（1.5%）。
              </figcaption>
            </figure>

            <p>
              いちばん多いのは、<strong>自己紹介と、ふだんの出来事</strong>
              でした。危ない投稿をしたから狙われた、という順番ではありません。
            </p>

            <div className="pull rv">
              <p className="q">
                ふつうの投稿が、
                <br />
                <em>入口になっている</em>。
              </p>
              <div className="rule" />
              <p className="sub">
                だから「<b>変なことを書かなければ平気</b>」という教え方は、効きません。
              </p>
            </div>

            <div className="note rv">
              <span className="nh">⚠️ この数字の、間違った読み方</span>
              <p>
                「子どもが自分から投稿したのが悪い」とは読めません。
                <b>悪いのは、その投稿を見て近づいてきた大人のほうです。</b>
                この統計は加害の責任を測るものではなく、
                <b>どこが入口になっているかを示すもの</b>
                です。読み替えると、子どもに「あなたのせいだ」と伝わってしまいます。私は娘に説明するとき、この一行を最初に置くことにしました。
              </p>
            </div>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">動かせるところ</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">家庭の側で動かせる数字が、ひとつあります</h2>
            </div>

            <div className="callout rv">
              <div className="big">
                89.2<span>％ が未使用</span>
              </div>
              <div className="tx">
                <b>被害児童のうち、フィルタリングを使っていなかった割合。</b>
                利用ありは83人、利用なしは688人（利用の有無が判明した771人が母数）
                <sup>※1</sup>。
              </div>
            </div>

            <p>
              そしてアクセス手段は、<strong>1,566人のうち1,529人（97.6%）がスマートフォン</strong>
              です。パソコンやゲーム機ではなく、手元の1台に集まっています。
            </p>

            <p>
              一方で、こども家庭庁の調査では、小学生（10歳以上）にスマホを持たせている保護者のうち、契約時にフィルタリングへ加入したのは
              <strong>58.4%</strong>、加入しなかったのは31.6%です<sup>※2</sup>。
            </p>

            <div className="note rv">
              <span className="nh">2つの調査を並べるときの注意</span>
              <p>
                ※1と※2は<b>調査主体も母数も対象もまったく違います</b>
                （前者は被害にあった児童、後者は一般の保護者アンケート）。
                <b>直接の比較はできません。</b>
                ここでは「被害側では未使用が多い」「一般側でも3割が未加入」という
                <b>それぞれの傾向</b>としてだけ並べています。
              </p>
            </div>

            <p>
              それでも、家庭が渡す日に決められることは、はっきりしていると思いました。
              <strong>あとから入れるのは、本人が不便を知ったあとになるので難しくなります。</strong>
            </p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">立ち位置</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">私にできるのは、たぶんここまでです</h2>
            </div>
            <p>
              私は研究者でも、教育の専門家でも、子どもの安全にかかわる仕事の人でもありません。開業したばかりの個人事業で、この文章が届く範囲もごく狭いです。
              <strong>「気をつけましょう」と私が書いても、たいして意味がありません。</strong>
            </p>
            <p>
              だから、この記事では<strong>解釈をできるだけ足さず、数字と定義と母数だけを揃えました。</strong>
              統計の定義、対象犯罪の範囲、比較できない箇所、母数の違い——全部本文に書いたのは、そのためです。整えてあれば、そのまま使えるからです。
            </p>

            <div className="closing rv">
              <p className="q">
                声の大きい人の手に、
                <br />
                この数字が渡ることを願っています。
              </p>
              <p>
                学校の先生、自治体の方、報道の方、子どもの安全を仕事にしている方。もしこのページに行き当たって、数字のどれかが役に立つなら、
                <strong>出典から直接引いてお使いください。</strong>
                私の名前は要りません。間違いを見つけたら、教えていただけるとありがたいです（
                <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
                ）。直します。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 警察庁 生活安全局 人身安全・少年課「令和7年における少年非行及び子供の性被害の状況」（2026年2月26日公表）{" "}
                <a href="https://www.npa.go.jp/publications/statistics/safetylife/pdf_r7_syonenhikoujyokyo.pdf">
                  npa.go.jp/publications/statistics/safetylife/pdf_r7_syonenhikoujyokyo.pdf
                </a>
                <br />
                第5「ＳＮＳに起因する事犯」より。被害児童数 1,566人／学職別（小学生167人・10.7%、中学生758人・48.4%、高校生579人・37.0%、その他）／アクセス手段（スマートフォン1,529人）／フィルタリング利用状況（利用あり83人・利用なし688人、判明分771人）／最初に投稿した者（被害児童1,162人・74.2%）／投稿内容の内訳。
              </li>
              <li>
                ※2 こども家庭庁「令和7年度 青少年のインターネット利用環境実態調査 調査結果（速報）」（2026年2月）{" "}
                <a href="https://www.cfa.go.jp/policies/youth-kankyou/internet_research/results-etc">
                  cfa.go.jp/policies/youth-kankyou/internet_research/results-etc
                </a>
                <br />
                こどもが使うスマートフォンのフィルタリング加入状況（小学生〈10歳以上〉の保護者
                n=433。契約時または契約変更時に加入 58.4%／加入しなかった 31.6%）。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※
            本記事は公表されている統計をもとに構成しています。数値は各調査時点のものです。
            <br />※ 令和5年7月12日以前の「不同意わいせつ」「不同意性交等」は
            「強制わいせつ」「強制性交等」であり、それ以前の年次と単純には比較できません（出典※1
            の注記）。
            <br />※
            本記事は法律・医療・教育上の助言を目的とするものではありません。個別のご心配は、警察相談専用電話（#9110）や各自治体の相談窓口にご相談ください。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
