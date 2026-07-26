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
              人の話を覚えていなくて、損をしたことがあります。前に聞いたはずの話を、もう一度聞いてしまう。相手の顔が、少しだけ曇る。あれは、こちらの誠意が足りなかったからではありませんでした。
              <strong>覚えていられる量には、そもそも限界がある</strong>
              からです。それなら、根性ではなく道具で埋めればいい。ポケメモは、その考えからつくりました。
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
                  ——加齢研究がそう示している。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  一方で「覚えていてもらえた」という体験は、
                  <strong>誰にとっても嬉しい</strong>。この非対称が、道具のつけ入る隙になる。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  だから<strong>LINEにした</strong>。国内の月間利用者数は1億。
                  インストールという一段を、最初から無くすため。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">きっかけ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">忘れて損をした側と、覚えていてもらえた側</h2>
            </div>
            <p>
              仕事でも、ふだんの会話でも、「前に話したこと」を覚えていられずに損をした経験があります。相手はちゃんと話してくれていたのに、こちらが持ち帰れていない。次に会ったときに、その話題に触れられない。
              <strong>関係が、そこで一段だけ浅くなる。</strong>
              致命傷ではないぶん、あとから気づきにくい種類の損でした。
            </p>
            <p>
              逆の側も知っています。何ヶ月かぶりに行った店で、前回こぼした愚痴の続きを聞かれたことがあります。美容師さんでも、担当の営業さんでも構いません。
              <strong>覚えていてもらえて、嫌だった人はいないと思います。</strong>
              あれは特別なサービスというより、「あなたのことを、ちゃんと持ち帰りました」という合図でした。
            </p>
            <div className="callout rv">
              <div className="big">
                <span>?</span>
              </div>
              <div className="tx">
                <b>覚えている人と、覚えていない人。</b>
                差がついているのは、たぶん誠実さではありません。持ち帰る仕組みを持っているかどうかです。
              </div>
            </div>
          </section>

          {/* 02 */}
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
            <p>
              興味深いのは、すべてが同じように衰えるわけではないことです。言葉の意味や知識にあたる
              <strong>意味記憶は、加齢の影響をほとんど受けにくい</strong>
              とされています<sup>※1</sup>
              <sup>※2</sup>
              。つまり「知識は残るのに、あの日の会話だけが抜けていく」というのは、実感であると同時に、記憶の構造としても筋が通っている話でした。
            </p>
            <p>
              これを知ったとき、少し救われた気がしました。同時に、はっきりしたこともあります。
              <strong>年々忘れやすくなるのが既定路線なら、気合いでは解決しない。</strong>
              仕組みの側を用意するしかありません。
            </p>
            <div className="note rv">
              <div className="nh">補足</div>
              <p>
                加齢による変化と、病気による記憶障害はまったく別のものです。本記事は前者、
                <b>健康な範囲での自然な変化</b>
                についてのみ触れています。心配な症状がある場合は、専門の医療機関にご相談ください。
              </p>
            </div>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">設計</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">なぜ「写真」ではなく「人」だったのか</h2>
            </div>
            <p>
              {/* ExifSort Pro はまだ /works/ に掲載されていないため、意図的にリンクを張らない
                  （載っていないページへ送ると記事の信用が落ちる）。掲載後にリンク化する
                  → hq/ORG.md §5-1「exifsort → homepage」 */}
              Santa Works では、写真を撮影日ごとに自動で仕分けする
              <strong>ExifSort Pro</strong>
              というデスクトップアプリもつくっています。同じ「記録を扱う道具」ですが、こちらは
              <strong>すでに残っているもの</strong>を整えるための道具です。
            </p>
            <p>
              人の記憶は、そうはいきません。
              <strong>その場で書き留めなければ、そもそもデータが存在しない。</strong>
              写真は勝手に残りますが、「今日どんな話をしたか」は誰も自動で残してくれない。だから、人の側を先につくることにしました。取りこぼしが起きているのは、明らかにこちらだったからです。
            </p>
            <p>
              もうひとつ、決めたことがあります。
              <strong>相手を「管理」する道具にはしない</strong>
              、ということです。集めたいのは属性や個人情報ではなく、
              <strong>その人が話してくれたこと</strong>
              のほうです。この線を越えると、便利ではあっても、たぶん温かくはなくなります。
            </p>
          </section>

          {/* 04 */}
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

            <div className="duel rv">
              <div className="side a">
                <div className="big num">
                  1<small>億</small>
                </div>
                <div className="lab">
                  <b>LINEの国内月間利用者数</b>
                  （2025年12月末時点）
                </div>
              </div>
              <div className="vs">vs</div>
              <div className="side b">
                <div className="big">
                  <span style={{ fontSize: "0.42em", lineHeight: 1.5 }}>
                    インストール
                    <br />
                    という一段
                  </span>
                </div>
                <div className="lab">
                  <b>専用アプリに必ずついてくる関門</b>
                </div>
              </div>
            </div>
            <p className="duel-cap">出典 ※3（LINEヤフー 2026年1月発表）／ ※4</p>

            <p>
              LINEの国内月間利用者数は、2025年12月末時点で
              <strong>1億ユーザー</strong>を超えたと発表されています<sup>※3</sup>
              。ここでいう月間利用者数は「1か月の間に一度でもLINEを起動したアカウント数」で、日本の人口を考えれば、
              <strong>ほぼ全員が日常的に開いている</strong>
              と言っていい水準です。
            </p>
            <p>
              一方、専用アプリには
              <strong>ストアを開き、ダウンロードし、初回設定を済ませる</strong>
              という一段が必ずついてきます。アプリの継続率に関する各種ベンチマークでは、
              <strong>離脱がもっとも集中するのはインストール直後</strong>
              だと繰り返し指摘されています<sup>※4</sup>。
            </p>
            <p>
              覚えておきたい相手ができるのは、たいてい
              <strong>会った直後の、ほんの数十秒</strong>
              です。その瞬間に「まずアプリを入れてください」と言う道具は、たぶん使われません。
              <strong>いつも開いているところに置く</strong>
              ——それがLINEを選んだ理由のすべてです。
            </p>
          </section>

          {/* 05 */}
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
                ※4 AppsFlyer「アプリアンインストールレポート」（アンインストールはインストール当日に最も集中すると報告）{" "}
                <a href="https://www.appsflyer.com/ja/resources/guides/app-uninstall-benchmarks/">
                  appsflyer.com/ja/resources/guides/app-uninstall-benchmarks/
                </a>
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※
            本記事は公開されている調査・報道をもとに構成しています。各数値は出典元の調査時点のものです。記憶に関する記述は健康な範囲での加齢変化について一般に知られている知見を紹介したもので、医学的な診断・助言を目的とするものではありません。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
