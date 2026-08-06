import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import Byline from "../Byline";
import { eyebrowOf } from "../posts";

export const metadata: Metadata = {
  title: "娘が欲しがったのはスマホで、パソコンではありませんでした",
  description:
    "楽しませてくれる道具と、楽しませるものをつくれる道具。子どもに渡すときのその区別が、AIで曖昧になりました。総務省とこども家庭庁の公開データを見ながら、答えの出ていないところをそのまま書いています。",
  alternates: { canonical: "/journal/tools-that-make/" },
  openGraph: {
    type: "article",
    title: "娘が欲しがったのはスマホで、パソコンではありませんでした｜Santa Works Journal",
    description:
      "楽しませてくれる道具と、楽しませるものをつくれる道具。その区別が、AIで曖昧になりました。",
    url: "/journal/tools-that-make/",
    images: [
      {
        url: "/blog/tools-that-make/ogp.png",
        width: 1200,
        height: 630,
        alt: "娘が欲しがったのはスマホで、パソコンではありませんでした｜Santa Works Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "娘が欲しがったのはスマホで、パソコンではありませんでした｜Santa Works Journal",
    description:
      "つくる側にまわる入口は、もうパソコンの前だけにないのかもしれません。",
    images: ["/blog/tools-that-make/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ヒーロー写真: public/blog/tools-that-make/hero.webp を置くと自動表示。
                無い間はブランドグラデが出る（壊れ画像にならない）。
                ⚠️ 人物の顔が写る素材は不可（ガードレール⑤）。 */}
            <figure className="herofig rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={{
                    backgroundImage: "url(/blog/tools-that-make/hero.webp)",
                  }}
                />
                <span className="chip">SANTA WORKS JOURNAL</span>
                <span className="ph-t">楽しむ道具と、つくる道具</span>
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("tools-that-make")}</span>
            <h1 className="title">
              娘が欲しがったのはスマホで、
              <br />
              パソコンではありませんでした。
            </h1>
            <p className="lede">
              小学生の娘が、スマホを欲しがっています。一方で、家には毎日私が仕事で使っているパソコンがあるのに、そちらには
              <strong>いまひとつ興味がなさそう</strong>
              です。この2つを、私はどこかで分けて見ていました。
              <strong>楽しませてくれる道具と、楽しませるものをつくれる道具</strong>
              として。その線が、いま引きにくくなっています。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.07.27</span>
              <span className="dot" />
              <span>読了 約5分</span>
              <span className="dot" />
              <span>子どもとAI / 出典つき</span>
            </div>
          </div>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  スマホは<strong>楽しませてくれる道具</strong>
                  、パソコンは<strong>楽しませるものをつくれる道具</strong>
                  ——私が勝手に引いていた線です。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  ただ、いまの子どもは
                  <strong>学校から配られた端末を毎日触っています</strong>
                  。触れていないわけではありませんでした。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  そしてAIは、
                  <strong>使い方しだいでどちらの側にもなります</strong>
                  。つくる入口は、もうパソコンの前だけではないのかもしれません。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 きっかけ */}
          <section className="blk">
            <span className="kicker">きっかけ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">欲しがるほうと、欲しがらないほう</h2>
            </div>
            <p>
              スマホが欲しい、と言われました。友だちが持ちはじめたから、という理由です。まっとうな理由だと思います。反対する材料が、私のほうにあまりありません。
            </p>
            <p>
              一方で、家にはパソコンがあります。私が毎日それで仕事をしているところを、娘は見ています。それでも、そちらにはいまひとつ興味がなさそうです。
              <strong>欲しいと言われたことは、まだ一度もありません。</strong>
            </p>

            <figure className="rv">
              <div className="fh">私が勝手に引いていた線</div>
              <div className="vsgrid">
                <div className="vscol plat">
                  <div className="cap">スマホ</div>
                  <ul>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">できること</span>
                        動画も、ゲームも、友だちとのやりとりも
                      </span>
                    </li>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">はじめやすさ</span>
                        持った日から、迷わず使える
                      </span>
                    </li>
                    <li>
                      <span className="ic">△</span>
                      <span>
                        <span className="k">向き</span>
                        面白いものが、むこうからやってくる
                      </span>
                    </li>
                  </ul>
                </div>
                {/* ⚠️ 両方とも plat（中立）。片側を hp（アクセント色）にすると
                    「パソコンのほうが良い」という主張に見え、この記事の趣旨と逆になる。 */}
                <div className="vscol plat">
                  <div className="cap">パソコン</div>
                  <ul>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">できること</span>
                        スマホでできることは、だいたいできる
                      </span>
                    </li>
                    <li>
                      <span className="ic">△</span>
                      <span>
                        <span className="k">はじめやすさ</span>
                        置き場所も、覚えることも多い
                      </span>
                    </li>
                    <li>
                      <span className="ic">◎</span>
                      <span>
                        <span className="k">向き</span>
                        面白いものを、こちらから出せる
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <figcaption>
                ⚠️
                これは私の頭の中にあった線で、正しさを主張するものではありません。この記事は、この線があとから怪しくなる話です。
              </figcaption>
            </figure>

            <div className="pull rv">
              <p className="q">
                楽しませてくれる道具と、
                <br />
                楽しませるものを<em>つくれる</em>道具。
              </p>
              <div className="rule" />
              <p className="sub">
                私が娘に触ってほしかったのは、<b>後ろ側</b>のほうでした。
              </p>
            </div>
          </section>

          {/* 02 自分の願望 */}
          <section className="blk">
            <span className="kicker">前提</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">ただ、これは私の願望です</h2>
            </div>
            <p>
              正直に書くと、私は娘にパソコンを触ってほしいと思っています。私が個人でやっている仕事も、そこから始まりました。
            </p>
            <p>
              ただ、それは
              <strong>私の願望であって、娘の興味ではありません。</strong>
              その年頃の子が友だちと同じものを欲しがるのは自然なことで、そこに「つくる側にまわってほしい」を乗せるのは、たぶん私の都合です。
            </p>
            <p>
              つくる側が偉い、とも思っていません。私も、一日の大半は消費する側にいます。
            </p>

            <div className="note rv">
              <span className="nh">
                補足：「ジョブズは、自分の子どもに渡さなかった」という話
              </span>
              <p>
                よく引かれる話です。2014年のニューヨーク・タイムズ紙の記事で、記者が「お子さんはさぞ気に入っているでしょう」と尋ねたところ、スティーブ・ジョブズは
                <b>「彼らは使っていない」</b>と答えた、というものです<sup>※6</sup>。
              </p>
              <p>
                ただ、その会話は<b>2010年、iPadが出た年</b>のものでした。
                <b>iPhoneの話ではありませんし、15年以上前の道具の話です。</b>
                私の考えを補強してくれそうな逸話ですが、そのまま持ってくるのはやめておきます。
              </p>
            </div>
          </section>

          {/* 03 データ */}
          <section className="blk">
            <span className="kicker">数字</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">うちだけの話では、ありませんでした</h2>
            </div>
            <p>
              気になって、公開されている調査を見てみました。まず家庭の側です。
            </p>

            <div className="callout rv">
              <div className="big">
                91.8<span>％ と 64.4％</span>
              </div>
              <div className="tx">
                <b>スマートフォンを持つ世帯は 91.8％、パソコンを持つ世帯は 64.4％</b>
                （令和7年）<sup>※1</sup>。4年前の令和3年はスマホ 88.6％、パソコン
                69.8％でした。差は少しずつ開いています。
              </div>
            </div>

            <div className="note rv">
              <span className="nh">補足：パソコンは、一直線に減ってはいません</span>
              <p>
                同じ調査で、パソコンの保有率は令和5年に <b>65.3％</b>{" "}
                まで下がったあと、令和6年はいったん 66.4％まで戻り、令和7年に
                64.4％へ。<b>行ったり来たりしながら、ゆるやかに下がっています。</b>
                「パソコンが消えていく」という話ではありません。
              </p>
            </div>

            <p>
              子どもの側は、もう少しはっきりしていました。インターネットに使っている機器の内訳です。
            </p>

            <figure className="rv">
              <div className="fh">
                青少年がインターネットに使っている機器（令和7年度・n=3,060）
              </div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    78.5<small>％</small>
                  </div>
                  <div className="cap">スマートフォン</div>
                  <div className="src">こども家庭庁（令和7年度）</div>
                </div>
                <div className="stat ac">
                  <div className="big">
                    72.7<small>％</small>
                  </div>
                  <div className="cap">学校から配られた端末（GIGA端末）</div>
                  <div className="src">同上</div>
                </div>
                <div className="stat">
                  <div className="big">
                    42.5<small>％</small>
                  </div>
                  <div className="cap">自宅用のパソコンやタブレット等</div>
                  <div className="src">同上</div>
                </div>
              </div>
              <figcaption>
                小学生（10歳以上）のインターネット利用率は 98.5％
                <sup>※2</sup>。使っていない子は、ほとんどいません。
              </figcaption>
            </figure>

            <p>
              自宅のパソコンは 42.5％。ここまでは、思っていたとおりでした。ただ、その隣に私が見落としていた数字がありました。
              <strong>学校から配られた端末が 72.7％。</strong>
            </p>

            <p>
              つまり、いまの子どもはパソコンに触っていないわけではありません。むしろ毎日触っています。うちの娘も同じです。
            </p>

            <div className="callout rv">
              <div className="big">
                72.7<span>％ が触っている</span>
              </div>
              <div className="tx">
                私が感じていた引っかかりは、
                <b>「パソコンに触れていない」ことではありませんでした。</b>
                触ってはいる。ただ、
                <b>決められた使い方をする端末としてしか出会っていない。</b>
                そこが引っかかっていたのだと、数字を見て気づきました。
              </div>
            </div>
          </section>

          {/* 04 AI */}
          <section className="blk">
            <span className="kicker">変化</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">AIが、この線を引きにくくしました</h2>
            </div>
            <p>
              ここにAIが入ってくると、話がややこしくなります。AIは、どちらにもなるからです。答えをもらうだけなら、スマホと同じで楽しませてくれる側です。何かをつくるために使えば、パソコンと同じ側になります。
              <strong>同じ道具なのに、使い方で立ち位置が変わる。</strong>
            </p>
            <p>
              そして、つくることの入口はもう下がっています。これは想像で書いているのではありません。私がふだん仕事で使っているコーディングの道具は、
              <strong>2025年10月からブラウザとスマホアプリでも使えます</strong>
              <sup>※3</sup>。
            </p>

            <div className="note rv">
              <span className="nh">実例：ただし「スマホだけ」ではありません</span>
              <p>
                個人開発者が、この道具を使って
                <b>開発の大部分をスマートフォンから行い、約2週間でアプリをApp Storeに公開した記録</b>
                を公開しています<sup>※4</sup>。ただし、この方は
                <b>要所ではMacも使っています</b>
                （リポジトリの作成、ビルド環境の構築など）。「スマホだけで完結する」段階には、まだありません。
              </p>
            </div>

            <p>
              それでも、向きははっきりしています。つくるために必要だったものが、手元の機械の性能から、
              <strong>つくりたいものを言葉にできるかどうか</strong>
              に寄ってきている。
            </p>

            <div className="callout rv">
              <div className="big">
                26.7<span>％ ／ 前年 9.1％</span>
              </div>
              <div className="tx">
                <b>日本で生成AIを使ったことがある人の割合</b>
                <sup>※5</sup>。1年で3倍近くになって、それでもまだ4人に1人です。
                <b>この前提は、いまも動いている最中です。</b>
                娘が大人になるころ、この数字がどうなっているかは分かりません。
              </div>
            </div>

            <p>
              私が「パソコンを触ってほしい」と思っていたのは、それが
              <strong>私の世代の入口だった</strong>
              からです。入口そのものが本質だったわけではないのだと思います。
            </p>
          </section>

          {/* 05 いま */}
          <section className="blk">
            <span className="kicker">いま</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">それでも、渡すのを少し待っています</h2>
            </div>
            <p>
              結論は出ていません。いつ渡すか、何を渡すか、決めていません。急いで渡す理由も、急いで止める理由も、いまのところ見当たらないからです。ただ、渡すときに一度手が止まる自分のことは、そのまま信じておこうと思っています。
            </p>
            <p>
              ひとつだけ、決めていることがあります。娘が何かをつくったら、それがどんなものでも、
              <strong>ちゃんと見る。</strong>
            </p>

            <div className="closing rv">
              <p className="q">
                つくる側に人を引っぱるのは、
                <br />
                道具ではなく、見てくれる誰かのほうなので。
              </p>
              <p>
                道具の話をずっと書いてきましたが、たぶん最後に効くのはそこだと思っています。私自身、つくったものを見てもらえたから続いています。Santa
                Works で
                <Link href="/journal/why-we-built-pokememo/">
                  ポケメモをつくった理由
                </Link>
                を書いたのも、同じ理由からでした。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 総務省「令和7年 通信利用動向調査報告書（世帯編）」（令和7年8月時点・n=17,916。スマートフォン
                91.8％／パソコン 64.4％。2026年5月29日公表）{" "}
                <a href="https://www.soumu.go.jp/johotsusintokei/statistics/pdf/HR202500_001.pdf">
                  soumu.go.jp/johotsusintokei/statistics/pdf/HR202500_001.pdf
                </a>
              </li>
              <li>
                ※2 こども家庭庁「令和7年度 青少年のインターネット利用環境実態調査
                調査結果（速報）」（2026年2月・青少年 n=3,060）{" "}
                <a href="https://www.cfa.go.jp/policies/youth-kankyou/internet_research/results-etc">
                  cfa.go.jp/policies/youth-kankyou/internet_research/results-etc
                </a>
              </li>
              <li>
                ※3 Anthropic「Claude Code on the web」（2025年10月20日発表。ブラウザおよび
                iOS アプリで利用可能）{" "}
                <a href="https://claude.com/blog/claude-code-on-the-web">
                  claude.com/blog/claude-code-on-the-web
                </a>
              </li>
              <li>
                ※4 Zenn「Claude Code on the Web
                でスマホだけでアプリを開発しリリースしてみた」（記事本文によれば、要所では
                Mac も使用）{" "}
                <a href="https://zenn.dev/ruwatana/articles/claude-code-on-the-web-for-app-development">
                  zenn.dev/ruwatana/articles/claude-code-on-the-web-for-app-development
                </a>
              </li>
              <li>
                ※5 総務省「令和7年版 情報通信白書」個人におけるAI利用の現状（日本
                26.7％／前年度 9.1％）{" "}
                <a href="https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r07/html/nd112210.html">
                  soumu.go.jp/johotsusintokei/whitepaper/ja/r07/html/nd112210.html
                </a>
              </li>
              <li>
                ※6 Nick Bilton「Steve Jobs Was a Low-Tech Parent」The New York
                Times（2014年9月11日）。会話は2010年、iPad
                が発売された年のもの。※有料記事のため、リンクは張っていません
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ヒーロー画像：{" "}
            <a href="https://www.pexels.com/photo/white-laptop-and-monitor-on-table-5155218/">
              Pexels
            </a>
            （商用利用可・帰属表示は任意ですが、出典として記載しています）。
            <br />※
            本記事は公開されている調査をもとに構成しています。各数値は出典元の調査時点のものであり、調査ごとに対象・母数・時期が異なります。子育てや教育について一般的な助言をするものではなく、私個人が迷っていることをそのまま書いたものです。
          </p>

          <Byline />


          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
