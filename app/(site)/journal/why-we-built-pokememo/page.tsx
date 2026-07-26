import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";

export const metadata: Metadata = {
  title: "覚えていることは、才能ではなく仕組みでした——ポケメモをつくった理由",
  description:
    "人の話を覚えていなくて損をした。逆に、覚えていてもらえて嬉しかった。その差を根性で埋めるのをやめて、道具にしました。記憶の加齢変化とLINEの普及データから、ポケメモをつくった理由を書いています。",
  alternates: { canonical: "/journal/why-we-built-pokememo/" },
  openGraph: {
    type: "article",
    title: "覚えていることは、才能ではなく仕組みでした｜Santa Works Journal",
    description:
      "人の話を覚えていなくて損をした。逆に、覚えていてもらえて嬉しかった。その差を道具で埋めようとした話です。",
    url: "/journal/why-we-built-pokememo/",
    images: [
      {
        url: "/blog/why-we-built-pokememo/ogp.png",
        width: 1200,
        height: 630,
        alt: "覚えていることは、才能ではなく仕組みでした｜Santa Works Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "覚えていることは、才能ではなく仕組みでした｜Santa Works Journal",
    description:
      "人の話を覚えていなくて損をした話から、ポケメモをつくった理由を書きました。",
    images: ["/blog/why-we-built-pokememo/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ヒーロー写真: public/blog/why-we-built-pokememo/hero.webp を置くと自動表示。
                無い間はブランドグラデが出る（壊れ画像にならない）。
                推奨: 商用可フリー素材・人物の顔が主役でないもの（ガードレール⑤）。 */}
            <figure className="herofig rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={{
                    backgroundImage: "url(/blog/why-we-built-pokememo/hero.webp)",
                  }}
                />
                <span className="chip">SANTA WORKS JOURNAL</span>
                <span className="ph-t">「忘れたくない」を、かたちに</span>
              </div>
            </figure>
            <span className="eyebrow">つくった理由</span>
            <h1 className="title">
              覚えていることは、
              <br />
              才能ではなく仕組みでした。
            </h1>
            <p className="lede">
              人の話を覚えていなくて、損をしたことがあります。前に聞いたはずの話を、もう一度聞いてしまう。相手の顔が、少しだけ曇る。あれは、こちらの誠意が足りなかったから
              <strong>&ldquo;だけ&rdquo;</strong>
              ではありませんでした。
              <strong>覚えていられる量には、そもそも限界がある</strong>
              からです。それなら、根性ではなく仕組みで埋めればいい。ポケメモは、その考えからつくりました。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.07.26</span>
              <span className="dot" />
              <span>読了 約5分</span>
              <span className="dot" />
              <span>つくった理由 / 出典つき</span>
            </div>
          </div>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  忘れることは意志の問題ではない。
                  <strong>エピソード記憶は成人期から徐々に低下する</strong>
                  ——加齢研究がそう示しています。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  一方で「覚えていてもらえた」体験は、
                  <strong>誰にとっても嬉しい</strong>
                  。この非対称が、道具をつくる価値になります。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  だから<strong>LINEにしました</strong>
                  。国内の月間利用者数は1億。インストールという一段を、最初から無くすために。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 きっかけ */}
          <section className="blk">
            <span className="kicker">きっかけ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">忘れて損をした側と、覚えていてもらえた側</h2>
            </div>
            <p>
              仕事でも、ふだんの会話でも、「前に話したこと」を覚えていられずに損をした経験があります。相手はちゃんと話してくれていたのに、こちらが持ち帰れていない。次に会ったときに、その話題に触れられない。
              <strong>関係が、そこで一段だけ浅くなる。</strong>
              致命傷ではありません。だからこそ、あとから気づきにくい種類の損でした。
            </p>
            <p>
              逆の側も知っています。何ヶ月かぶりに行った店で、前回こぼした愚痴の続きを聞かれたことがあります。美容師さんでも、担当の営業さんでも構いません。
              <strong>覚えていてもらえて、嫌だった人はいないと思います。</strong>
              あれは特別なサービスというより、「あなたのことを、ちゃんと持ち帰りました」という合図でした。
            </p>

            <figure className="rv">
              <div className="fh">同じ出来事の、両側で起きていること</div>
              <div className="vsgrid">
                <div className="vscol plat">
                  <div className="cap">✕ 覚えていなかった側</div>
                  <ul>
                    <li>
                      <span className="ic">✕</span>
                      <span>
                        <span className="k">その場</span>
                        同じ話を、もう一度たずねてしまう
                      </span>
                    </li>
                    <li>
                      <span className="ic">✕</span>
                      <span>
                        <span className="k">相手の受けとり</span>
                        「興味がなかったのだろう」と伝わる
                      </span>
                    </li>
                    <li>
                      <span className="ic">✕</span>
                      <span>
                        <span className="k">あとに残るもの</span>
                        関係が一段だけ浅くなる。本人は気づかない
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="vscol hp">
                  <div className="cap">◎ 覚えていてもらえた側</div>
                  <ul>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">その場</span>
                        前回の続きから、会話がはじまる
                      </span>
                    </li>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">相手の受けとり</span>
                        「ちゃんと持ち帰ってくれた」と伝わる
                      </span>
                    </li>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">あとに残るもの</span>
                        次に会う理由が、ひとつ増える
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <figcaption>
                同じ出来事でも、片側では損が静かに積もり、もう片側には喜びがはっきり残ります。
              </figcaption>
            </figure>

            {/* 記事の芯。callout は数値を主役にする器なので、言葉そのものを立てる pull を使う。 */}
            <div className="pull rv">
              <p className="q">
                損は静かに起き、
                <br />
                喜びは<em>はっきり残る</em>。
              </p>
              <div className="rule" />
              <p className="sub">
                この<b>非対称</b>が、仕組みをつくる価値になりました。
              </p>
            </div>
          </section>

          {/* 02 前提 */}
          <section className="blk">
            <span className="kicker">前提</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">忘れるのは、意志が弱いからではありません</h2>
            </div>
            <p>
              記憶の研究では、記憶をいくつかの種類に分けて考えます。そのうち
              <strong>エピソード記憶</strong>
              ——自分が経験した出来事や、誰とどんな話をしたかという記憶は、
              <strong>いわゆる高齢期に入る前、成人期の段階からゆるやかに低下していく</strong>
              ことが知られています<sup>※1</sup>。
            </p>

            <div className="callout rv">
              <div className="big">
                65<span>歳より前から</span>
              </div>
              <div className="tx">
                <b>エピソード記憶の低下は、高齢期を待たずに始まっている。</b>
                一方で、言葉の意味や知識にあたる<b>意味記憶は、加齢の影響をほとんど受けにくい</b>
                とされています<sup>※1</sup>
                <sup>※2</sup>。
              </div>
            </div>

            <p>
              「知識は残るのに、あの日の会話だけが抜けていく」——実感としてよくある話ですが、記憶の構造としても筋が通っていました。これを知ったとき、少し救われた気がします。同時に、はっきりしたこともありました。
              <strong>年々忘れやすくなるのが既定路線なら、気合いでは解決しない。</strong>
              仕組みの側を用意するしかありません。
            </p>

            <div className="note rv">
              <span className="nh">補足：加齢による変化と、病気は別のものです</span>
              <p>
                本記事が触れているのは
                <b>健康な範囲での自然な変化</b>
                のみで、病気による記憶障害とはまったく別の話です。ご心配な症状がある場合は、専門の医療機関にご相談ください。
              </p>
            </div>
          </section>

          {/* 03 設計 */}
          <section className="blk">
            <span className="kicker">設計</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">なぜ「写真」ではなく「人」だったのか</h2>
            </div>
            <p>
              {/* ExifSort Pro は /works/ に未掲載のため、意図的にリンクを張らない
                  （載っていないページへ送ると記事の信用が落ちる）→ hq/ORG.md §5-1 */}
              Santa Works では、写真を撮影日ごとに自動で仕分けする
              <strong>ExifSort Pro</strong>
              <span style={{ fontSize: ".82em" }}>（※近日公開予定）</span>
              というデスクトップアプリも準備しています。同じ「記録を扱う道具」ですが、こちらは
              <strong>すでに残っているもの</strong>を整えるための道具です。
            </p>
            <p>
              人の記憶は、そうはいきません。
              <strong>その場で書き留めなければ、そもそもデータが存在しない。</strong>
              写真は勝手に残りますが、「今日どんな話をしたか」は誰も自動で残してくれません。だから、人の側を先につくることにしました。取りこぼしが起きているのは、明らかにこちらだったからです。
            </p>

            <div className="note rv">
              <span className="nh">決めたこと：相手を「管理」する道具にはしない</span>
              <p>
                残したいのは属性や個人情報ではなく、
                <b>その人が話してくれたこと</b>
                のほうです。この線を越えると、便利ではあっても、たぶん温かくはなくなります。だからポケメモには、売上分析も、顧客ランク付けも、一斉配信も入れていません。
              </p>
            </div>
          </section>

          {/* 04 選択 */}
          <section className="blk">
            <span className="kicker">選択</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">アプリをつくらずに、LINEにした理由</h2>
            </div>
            <p>
              いちばん迷ったのは形でした。専用アプリのほうが、できることは増えます。それでも
              <strong>LINE上のボット</strong>
              という形を選びました。理由は単純で、
              <strong>すでに全員が持っているから</strong>です。
            </p>

            <div className="callout rv">
              <div className="big">
                1<span>億ユーザー</span>
              </div>
              <div className="tx">
                <b>LINEの国内月間利用者数</b>（2025年12月末時点）
                <sup>※3</sup>
                。同時期の日本の総人口は約1億2,285万人
                <sup>※4</sup>
                。「1か月に一度でも起動したアカウント数」という定義を踏まえても、
                <b>ほぼ全員が日常的に開いている場所</b>だと言えます。
              </div>
            </div>

            <figure className="rv">
              <div className="fh">同じ機能を、どこに置くか</div>
              <div className="vsgrid">
                <div className="vscol plat">
                  <div className="cap">専用アプリにした場合</div>
                  <ul>
                    <li>
                      <span className="ic">△</span>
                      <span>
                        <span className="k">使い始めるまで</span>
                        ストアを開き、ダウンロードし、初回設定をする
                      </span>
                    </li>
                    <li>
                      <span className="ic">✕</span>
                      <span>
                        <span className="k">いちばんの離脱点</span>
                        アンインストールはインストール当日に最も集中する
                        <sup>※5</sup>
                      </span>
                    </li>
                    <li>
                      <span className="ic">○</span>
                      <span>
                        <span className="k">できること</span>
                        自由度は高い（画面も操作も自前で設計できる）
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="vscol hp">
                  <div className="cap">LINEのボットにした場合</div>
                  <ul>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">使い始めるまで</span>
                        友だち追加のみ。インストールが要らない
                      </span>
                    </li>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">置き場所</span>
                        毎日開くアプリの中。思い出したその場で書ける
                      </span>
                    </li>
                    <li>
                      <span className="ic">△</span>
                      <span>
                        <span className="k">できること</span>
                        LINEの画面の作法に従う（自由度は下がる）
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <figcaption>
                自由度を手放すかわりに、
                <strong>入口の一段を丸ごと無くす</strong>
                ——ポケメモはそちらを選びました。
              </figcaption>
            </figure>

            <p>
              覚えておきたい相手ができるのは、たいてい
              <strong>会った直後の、ほんの数十秒</strong>
              です。その瞬間に「まずアプリを入れてください」と言う道具は、たぶん使われません。
              <strong>いつも開いているところに置く</strong>——それが結論でした。
            </p>
          </section>

          {/* 05 いま */}
          <section className="blk">
            <span className="kicker">いま</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">正直なところ、まだうまくいっていません</h2>
            </div>
            <p>
              きれいにまとめたいところですが、実際はそうなっていません。ポケメモは
              <strong>まだ、広く使われている道具ではありません。</strong>
              登録まではしていただけるのに、そこで手が止まってしまう。その理由が、こちらでもまだ掴めていません。
            </p>
            <p>
              いま取り組んでいるのは、新しい機能を足すことではなく、
              <strong>その「止まってしまう一瞬」に何が起きているかを、きちんと見にいくこと</strong>
              です。使ってくださった方に、率直なところを聞かせていただく。地味ですが、これ以上の近道はなさそうです。
            </p>

            <div className="closing rv">
              <p className="q">
                忘れたくない、と思ったことを、忘れずにいられるように。
              </p>
              <p>
                覚えていることが才能なのだとしたら、持っていない人は諦めるしかありません。でも、それが仕組みなのだとしたら、あとから足すことができます。ポケメモは、その一つとしてつくりました。もしよろしければ、
                <a href="https://pokememo.santaworks.net/?utm_source=journal&utm_campaign=why">
                  ポケメモのご案内
                </a>
                もご覧ください。使ってみて「ここが微妙だ」と思われたところがあれば、そう教えていただけると、いちばんありがたいです。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 こころ検定（文部科学省後援）「記憶は衰えるのか？」{" "}
                <a href="https://www.cocoroken.jp/columns/memory/">
                  cocoroken.jp/columns/memory/
                </a>
              </li>
              <li>
                ※2 日本内科学会雑誌「加齢に伴う認知機能の変化」（第107巻第12号）{" "}
                <a href="https://www.jstage.jst.go.jp/article/naika/107/12/107_2461/_pdf">
                  jstage.jst.go.jp/article/naika/107/12/107_2461/_pdf
                </a>
              </li>
              <li>
                ※3 LINEヤフー株式会社「LINE、国内月間利用者数が1億ユーザーを突破」（2026年1月29日発表・2025年12月末時点）{" "}
                <a href="https://www.lycorp.co.jp/ja/news/release/020058/">
                  lycorp.co.jp/ja/news/release/020058/
                </a>
              </li>
              <li>
                ※4 総務省統計局「人口推計」（2026年6月1日現在・概算値／総人口1億2,285万人）{" "}
                <a href="https://www.stat.go.jp/data/jinsui/pdf/202606.pdf">
                  stat.go.jp/data/jinsui/pdf/202606.pdf
                </a>
              </li>
              <li>
                ※5 AppsFlyer「アプリアンインストールレポート」（アンインストールはインストール当日に最も集中すると報告）{" "}
                <a href="https://www.appsflyer.com/ja/resources/guides/app-uninstall-benchmarks/">
                  appsflyer.com/ja/resources/guides/app-uninstall-benchmarks/
                </a>
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ヒーロー画像：{" "}
            <a href="https://www.pexels.com/ja-jp/photo/6138761/">Pexels</a>
            （商用利用可・帰属表示は任意ですが、出典として記載しています）。
            <br />※
            本記事は公開されている調査・報道をもとに構成しています。各数値は出典元の調査時点のものであり、調査ごとに対象・母数・時期が異なります。記憶に関する記述は健康な範囲での加齢変化について一般に知られている知見を紹介したもので、医学的な診断・助言を目的とするものではありません。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
