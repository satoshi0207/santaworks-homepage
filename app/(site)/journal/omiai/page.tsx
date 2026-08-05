import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import "../dash.css";
import { eyebrowOf } from "../posts";
import { Fig01, Fig02, Fig03, Fig04, Fig05 } from "./figures";

export const metadata: Metadata = {
  title: "恋愛結婚が当たり前になってから、まだ60年でした",
  description:
    "1930年代に結婚した夫婦の69.0%は見合い結婚でした。恋愛結婚がそれを追い抜くのは1960年代の後半で、7割を超えるのは1980年代。いま「普通」だと思っている出会い方は、そんなに古いものではありませんでした。社人研の出生動向基本調査を一次資料から読んだ記録です。",
  alternates: { canonical: "/journal/omiai/" },
  openGraph: {
    type: "article",
    title: "恋愛結婚が当たり前になってから、まだ60年でした｜Santa Works Journal",
    description:
      "1930年代の夫婦は69.0%が見合い結婚。入れ替わったのは1960年代の後半でした。ただし、どの5年で入れ替わったかは書けませんでした。",
    url: "/journal/omiai/",
    images: ["/blog/omiai/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "恋愛結婚が当たり前になってから、まだ60年でした｜Santa Works Journal",
    description:
      "見合い結婚を「昔の話」だと思っていました。数字を見たら、60年前のことでした。",
    images: ["/blog/omiai/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal dash pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* 🔴 人物・人型・顔を使わない（全社ガードレール⑤）。
                🔴 結婚式・指輪・カップルの絵も使わない。幸せの絵を足すと、
                   この記事が評価していないもの（結婚しているかどうか）を
                   評価しているように見える。
                生成は pr/drafts/omiai-src/make_images.py。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/omiai/hero.webp)",
                      "--hero-sp": "url(/blog/omiai/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("omiai")}</span>
            <h1 className="title">
              恋愛結婚が当たり前になってから、
              <br />
              まだ60年でした
            </h1>
            <p className="lede">
              「見合い結婚」と聞くと、ずいぶん昔の話だと思っていました。
              調べてみたら、<strong>1930年代に結婚した夫婦の69.0%が見合い結婚</strong>。
              そして恋愛結婚がそれを追い抜くのは、<strong>1960年代の後半</strong>でした。
              いま「普通」だと思っている出会い方は、
              <strong>そんなに古いものではありませんでした。</strong>
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.06</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          {/* ⚠️ 4枚の並びが、そのまま記事の筋になっている。
              7割が見合いだった → 入れ替わりは1960年代後半 →
              7割を超えたのは1980年代 → 最新値はコロナで動いている。 */}
          <div className="kpi rv" data-fx data-num data-seq="120">
            <div className="tile">
              <span className="lbl">1930年代の夫婦のうち、見合い結婚</span>
              <span className="v n">
                69.0<small>%</small>
              </span>
              <span className="note">恋愛結婚は13.4%でした</span>
            </div>
            <div className="tile on">
              <span className="lbl">恋愛結婚と入れ替わったのは</span>
              <span className="v">
                1960<small>年代後半</small>
              </span>
              <span className="note">どの5年かは特定できませんでした</span>
            </div>
            <div className="tile">
              <span className="lbl">恋愛結婚が7割を超えたのは</span>
              <span className="v">
                1980<small>年代</small>
              </span>
              <span className="note">8割は1985〜89年です</span>
            </div>
            <div className="tile">
              <span className="lbl">いちばん新しい数字（恋愛結婚）</span>
              <span className="v n">
                74.8<small>%</small>
              </span>
              <span className="note">⚠️ コロナで動いています（§04）</span>
            </div>
          </div>

          <div className="points rv">
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  見合い結婚は<strong>7割</strong>でした。
                  戦後もしばらく、そちらのほうが多数派です。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  <strong>入れ替わった5年間は、書けませんでした。</strong>
                  差が小さく、信頼区間が公表されていません。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  いちばん新しい数字は<strong>コロナで動いています</strong>。
                  報告書が注でそう書いています。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、90年ぶんを並べる</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">見合い結婚が、7割だった</h2>
            </div>

            <Fig01 />

            <p>
              国立社会保障・人口問題研究所が、1940年から続けている調査があります
              <sup>※1</sup>。夫婦に「どのようなきっかけでお知り合いになりましたか」と
              聞いて、答えを結婚した年ごとに並べたものです。
            </p>
            <p>
              <strong>1930年代に結婚した夫婦のうち、69.0%が見合い結婚</strong>でした。
              恋愛結婚は<strong>13.4%</strong>。戦後もしばらく、見合いのほうが多数派です。
            </p>
            <p>
              ⚠️ ここでの<b>「見合い結婚」は、調査の分類名</b>です。
              知り合ったきっかけを<b>「見合いで」または「結婚相談所で」</b>と答えたものを
              こう呼んでいます。それ以外——学校で、職場で、友人を通じて、街なかで、
              アルバイトで——を<b>「恋愛結婚」</b>としてまとめています<sup>※1</sup>。
              <strong>恋愛があったかどうかを聞いた数字ではありません。</strong>
            </p>
            <p>
              ⚠️ もうひとつ。対象は<b>初婚どうしの夫婦</b>だけです。
              そして図の点は、<b>第7回（1977年）から第16回（2021年）までの
              10回ぶんの調査をつないだもの</b>で、
              <strong>同じ調査をずっと続けた系列ではありません。</strong>
            </p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">ここで、書けなくなる</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">入れ替わった年は、書けませんでした</h2>
            </div>

            <Fig02 />

            <p>
              1960〜64年に結婚した夫婦は、<strong>恋愛41.1%・見合い49.8%</strong>。
              1970〜74年は、<strong>恋愛61.5%・見合い33.0%</strong>
              <sup>※1</sup>。
              <strong>この10年のあいだに、入れ替わっています。</strong>
            </p>
            <p>
              ではどの5年で抜いたのか。あいだの1965〜69年は
              <strong>48.6%対44.9%</strong>で、差は<strong>3.7ポイント</strong>です。
            </p>
            <p>
              🔴 <strong>ここが書けませんでした。</strong>
              図には95%信頼区間のエラーバーが描かれているのに、
              <b>その数値がどこにも公表されていません。</b>
              しかもこの年の数字は<b>1977年の調査</b>から来ているので、
              いま確かめる手立てもありません。
            </p>
            <p>
              なので、この記事が言えるのは
              <strong>「1960年代の後半に入れ替わった」</strong>までです。
              前後がはっきり分かれているので、
              <b>どこかで交差したこと自体は確かです。</b>
            </p>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">そのあと、どうなったか</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">当たり前になってから、まだ60年</h2>
            </div>

            <Fig03 />

            <p>
              恋愛結婚が<strong>7割を超えるのは1980〜84年</strong>（72.6%）。
              <strong>8割は1985〜89年</strong>（80.2%）です<sup>※1</sup>。
              1990年代の終わりには87%台に達し、そこで頭打ちになります。
            </p>
            <p>
              つまり、<strong>いま「普通」だと思っている出会い方が多数派になってから、
              まだ60年ほど</strong>。7割を超えてからだと、40年ほどしか経っていません。
            </p>
            <p>
              ⚠️ 印を打ったのは<b>その水準を最初に超えた区間</b>です。
              区間は5年ごとなので、<b>超えた年そのものは、やはり分かりません。</b>
            </p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">最新の数字だけ、別扱いにする</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">いちばん新しい点は、コロナで動いていた</h2>
            </div>

            <Fig04 />

            <p>
              いちばん新しい数字（2019〜21年の結婚）は<strong>恋愛結婚74.8%</strong>で、
              急に下がって見えます。<strong>これは傾向として読めません。</strong>
            </p>
            <p>
              報告書が、注でそう書いているからです<sup>※2</sup>。
              <b>
                2020年の初婚数は、前年の38万件から33万件へ大きく減少しており、この時期の値は「例年より婚姻発生が少ない状況下」のもので、構成割合の上昇は必ずしも発生の増加を意味しない
              </b>
              。
            </p>
            <p>
              実際に動いたのは<strong>「職場や仕事で」</strong>でした。
              <strong>28.2%から21.4%へ</strong>。
              コロナ下で、職場から始まる結婚そのものが減った、ということです
              <sup>※2</sup>。
              職場は「恋愛結婚」に分類されるので、その減りがそのまま恋愛結婚の割合を下げます。
            </p>
            <p>
              同じ期間に「見合い結婚」は6.4%から9.0%へ、
              「ネットで」は6.0%から13.6%へ上がっています<sup>※2</sup>。
              けれど<strong>これも「増えた」とは書けません。</strong>
              分母のほうが痩せているからです。
            </p>
            <p>
              ⚠️ そのうえ<b>「ネットで」は、この回で新しく作られた選択肢</b>です
              <sup>※2</sup>。前の回まではこの答え方ができませんでした。
              <strong>増えた分に、選択肢を作った効果が混ざっています。</strong>
            </p>
            <p>
              私は最初、この節を「恋愛結婚が初めて減った」という話として書こうとしていました。
              <b>報告書の注に止められました。</b>
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">残っているところ</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">見合いが、まだ残っているところ</h2>
            </div>

            <Fig05 />

            <p>
              見合い結婚は無くなっていません。
              最新3年間の結婚を<b>妻の初婚年齢</b>で分けると、
              <strong>30〜34歳で13.3%、35歳以上で26.9%</strong>が見合い結婚です
              <sup>※3</sup>。
            </p>
            <p>
              ⚠️ この数字を、図01の9.8%と並べないでください。
              <b>図01は結婚した年で、こちらは妻の初婚年齢で分けたもの</b>です。
              <strong>母数が違うので、比べられません。</strong>
            </p>
            <p>
              ひとつ気づいたことがあります。この調査で「見合い結婚」に入るのは、
              <b>「見合いで」と「結婚相談所で（オンラインを含む）」</b>です。
              一方、SNSやマッチングアプリは「ネットで」に入ります<sup>※1</sup>。
              <strong>分けているのは仕組みではなく、窓口の名前でした。</strong>
            </p>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">読み終えて</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">当たり前だと思っていた</h2>
            </div>

            <p>
              調べる前、私は見合い結婚を「昔の話」だと思っていました。
              時代劇の中にあるような、遠いものとして。
            </p>
            <p>
              <strong>60年前のことでした。</strong>
              自分が生まれるより少し前まで、そちらが多数派だった。
              それを「昔」と呼んでいたのは、
              <strong>自分が生まれたときにはもう終わっていたから</strong>にすぎません。
            </p>
            <p>
              数字は、こういうことを教えてくれます。
              <b>自分が何を「普通」だと思っているのか</b>を、
              <b>いつからそうなのか</b>という形で。
            </p>
          </section>

          {/* おわりに */}
          <section className="blk">
            <div className="h2">
              <h2 className="tt">おわりに</h2>
            </div>

            <div className="pull rv">
              <p className="q">
                「当たり前」には、
                <br />
                <em>始まった年</em>がある。
              </p>
            </div>

            <p>
              この記事で分かったのは、出会い方の構成比が動いたということだけです。
              どの出会い方が良いかは、どこにも書いてありませんし、
              <strong>この調査はそれを聞いていません。</strong>
            </p>
            <p>
              分からなかったことも、はっきりしました。
              <b>入れ替わった5年間</b>は特定できず、
              <b>いちばん新しい数字</b>はコロナと切り分けられませんでした。
              調べるほど、書けないことが増えます。
              <br />
              <br />
              この記事の数字は、すべて出典の一次資料から直接転記、
              または公開されている図表から読み取ったものです。
              間違いを見つけたら教えていただけるとありがたいです（
              <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
              ）。直します。
            </p>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 国立社会保障・人口問題研究所「第16回出生動向基本調査（結婚と出産に
                関する全国調査）現代日本の結婚と出産」第Ⅱ部 夫婦調査の結果、
                図表5-2-1「結婚年次別にみた、恋愛結婚・見合い結婚の構成割合」。
                調査は2021年6月実施、報告書は2022年9月公表。
                対象は初婚どうしの夫婦で、第7回（1977年）から第16回までの調査を
                つないだ系列です。「見合い結婚」は知り合ったきっかけが
                「見合いで」「結婚相談所で（オンラインを含む）」の結婚、
                それ以外を「恋愛結婚」として集計しています。
              </li>
              <li>
                ※2 同 図表5-2-2「調査別にみた、夫と妻が知り合ったきっかけの構成割合」
                および本文。「ネットで」は第16回で新設された選択肢です。
                初婚数の減少（38万件→33万件）は、報告書の注が
                厚生労働省「人口動態統計」から引用しているものです。
              </li>
              <li>
                ※3 同 図表5-2-3「調査・妻の初婚年齢別にみた、夫妻が知り合ったきっかけの
                構成割合」および本文。最新3年間（2018年7月〜2021年6月）の結婚が対象です。
              </li>
              <li>
                ※4 第17回調査は2025年6月30日に実施されていますが、
                本記事の執筆時点で結果は公表されていません。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ 図01の系列は<b>10回ぶんの調査をつないだもの</b>で、
            同一の調査を継続した系列ではありません。集計対象（妻の年齢の条件）も
            回ごとに異なります。
            <br />※ すべて<b>初婚どうしの夫婦</b>が対象です。
            どちらかが再婚の夫婦は別の集計になっており、そちらでは
            「仕事や職場で」が最多です。
            <br />※ <b>入れ替わった5年間は特定していません。</b>
            1965〜69年の差は3.7ポイントで、図に描かれた95%信頼区間の数値が
            公表されていないためです。
            <br />※ 2019〜21年の結婚は<b>新型コロナウイルス感染拡大期を含みます。</b>
            この期間の構成割合は、婚姻そのものが減った状況下のものです。
            <br />※ 図05は<b>妻の初婚年齢</b>で分けたもので、
            結婚年次で分けた図01とは母数が違います。並べて比べられません。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
