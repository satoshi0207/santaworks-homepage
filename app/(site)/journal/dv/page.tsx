import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import "../dash.css";
import { eyebrowOf } from "../posts";
import {
  Fig01,
  Fig02,
  Fig03,
  Fig04,
  Fig05,
  Fig06,
  Fig07,
  Fig08,
} from "./figures";

export const metadata: Metadata = {
  title: "DVの数字に入っているのは、相談できた人だけでした",
  description:
    "被害を受けた人の44.2%は、どこにも相談していません。男性では57.2%。専門の窓口まで届いた男性は173人のうち1人でした。黙った理由の最多は、男女とも「相談するほどのことではないと思ったから」。内閣府の調査と警察庁の統計を、一次資料から数えた記録です。",
  alternates: { canonical: "/journal/dv/" },
  openGraph: {
    type: "article",
    title:
      "DVの数字に入っているのは、相談できた人だけでした｜Santa Works Journal",
    description:
      "被害を受けた人の44.2%は、どこにも相談していません。男性では57.2%。黙った理由の最多は「相談するほどのことではないと思ったから」でした。",
    url: "/journal/dv/",
    images: ["/blog/dv/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DVの数字に入っているのは、相談できた人だけでした｜Santa Works Journal",
    description:
      "「相談するほどのことか」を決めているのは、相談する前の自分でした。内閣府の調査を一次資料から数えています。",
    images: ["/blog/dv/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal dash pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* 🔴 人物の写真・人型のイラストを使わない（全社ガードレール⑤）。
                被害を絵にすると、当事者性のない絵が一人称の記事に乗る。
                生成は pr/drafts/dv-src/make_images.py。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/dv/hero.webp)",
                      "--hero-sp": "url(/blog/dv/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("dv")}</span>
            <h1 className="title">
              DVの数字に入っているのは、
              <br />
              相談できた人だけでした
            </h1>
            <p className="lede">
              きっかけは、動画でした。配偶者からの暴力を受けたことがあるのは
              <strong>女性の約4人に1人、男性の約5人に1人</strong>。
              そう聞いて、そんなに多いのか、と思いました。
              出典に当たってみたら、その数字は3年前のもの。
              では増えているのか——そこは、はっきりしません。
              代わりに、もっとはっきりしたものが出てきます。
              <strong>この数字に入っているのは、誰かに言えた人だけでした。</strong>
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.04</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          {/* ⚠️ 4枚の並びが、そのまま記事の筋になっている。
              4割黙る → 理由の最多は「大したことではない」 →
              でも8人に1人は命の危険を感じている → 専門窓口には1人しか届いていない。 */}
          <div className="kpi rv" data-fx data-num data-seq="120">
            <div className="tile">
              <span className="lbl">被害を受けた人のうち、どこにも相談しなかった</span>
              <span className="v n">
                44.2<small>%</small>
              </span>
              <span className="note">女性36.3%、男性57.2%。462人中204人です</span>
            </div>
            <div className="tile on">
              <span className="lbl">黙った理由の最多「相談するほどのことではない」</span>
              <span className="v n">
                58.6<small>%</small>
              </span>
              <span className="note">男性の答え。女性も46.7%で、どちらも最多です</span>
            </div>
            <div className="tile">
              <span className="lbl">被害を受けた人のうち、命の危険を感じたことがある</span>
              <span className="v n">
                12.6<small>%</small>
              </span>
              <span className="note">
                8人に1人。左の44.2%と同じ462人の話です
              </span>
            </div>
            <div className="tile">
              <span className="lbl">支援センターに届いた男性</span>
              <span className="v n">
                1<small>人／173人中</small>
              </span>
              <span className="note">女性は289人のうち8人でした</span>
            </div>
          </div>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  被害を受けた人の<strong>44.2%</strong>は、どこにも相談していません。
                  男性では<strong>57.2%</strong>。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  被害を受けた男性173人のうち、公的な相談窓口に届いたのは
                  <strong>1人</strong>。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  「増えている」と言われる相談件数が数えているのは、被害の量ではなく
                  <strong>届いた人の数</strong>です。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、出典に当たる</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">見ていた数字が、古かった</h2>
            </div>

            <p>
              「女性の約4人に1人、男性の約5人に1人」。この言い回しは、
              <strong>令和2年度の調査</strong>のものです。報告書の概要版に、
              ほぼこのままの文で載っています<sup>※1</sup>。
            </p>
            <p>
              最新は令和5年度。2023年11月から12月にかけて無作為に選んだ5,000人に配り、
              <strong>2,950人（59.0%）</strong>から回収しています<sup>※1</sup>。
            </p>

            <table className="tbl">
              <thead>
                <tr>
                  <th>令和5年度・配偶者からの被害経験</th>
                  <th>ある（計）</th>
                  <th>うち「何度もあった」</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>総数</td>
                  <td>25.1%</td>
                  <td>10.7%</td>
                </tr>
                <tr>
                  <td>
                    <b>女性</b>
                  </td>
                  <td>
                    <b>27.5%</b>
                  </td>
                  <td>13.2%</td>
                </tr>
                <tr>
                  <td>男性</td>
                  <td>22.0%</td>
                  <td>7.2%</td>
                </tr>
              </tbody>
            </table>

            <p>
              母数は回答者全員ではなく、
              <strong>これまでに結婚したことのある1,838人</strong>です。
            </p>
            <p>
              出典を開いたのは、増えているのかを確かめたかったからでした。
              <strong>その話は最後にします。</strong>
              先に、同じ報告書の別のページにあった数字を書きます。
            </p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">同じ報告書の、別のページ</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">4割の人は、誰にも言っていません</h2>
            </div>

            <Fig01 />

            <p>
              被害を受けたと答えたのは462人。そのうち
              <strong>どこにも相談しなかった人が44.2%</strong>です。
              <strong>男性では、半分を超えます</strong>（57.2%）。
            </p>
            {/* ⚠️ 箇条書きのクラスがこのサイトに無い（journal.css / dash.css とも）。
                他の9本も ul を使っていない。**新しい記法を1記事のために足さない。** */}
            <div className="note rv">
              <span className="nh">同じ調査には、こんな数字も並んでいます</span>
              <p>
                被害を受けた人の<b>12.6%</b>は、<b>命の危険を感じた</b>ことがある
                （女性15.6%／男性7.5%）。
                <br />
                {/* 🔴 「子どもがいる人の30.8%」と書いていた（2026-08-04 の検算で発覚）。
                    母数は子どもがいる人全員（1,527人）ではなく、
                    **被害を受けた人のうち子どもがいる399人**。4倍近く違う。 */}
                被害を受けた人のうち、子どもがいる<b>399人</b>の<b>30.8%</b>は、
                <b>子どもへの被害もあった</b>と答えている（女性35.6%／男性22.8%）。
              </p>
            </div>
            <p>
              命の危険を感じた人が8人に1人いて、それでも4割は誰にも言っていない。
              <strong>この2つは、同じ462人の話です。</strong>
            </p>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">理由を聞いている</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">黙る理由が、男女で入れ替わります</h2>
            </div>

            <Fig02 />

            <p>相談しなかった人に、その理由を聞いています（複数回答）。</p>

            <table className="tbl">
              <thead>
                <tr>
                  <th>相談しなかった理由</th>
                  <th>女性（105人）</th>
                  <th>男性（99人）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>相談するほどのことではないと思ったから</b>
                  </td>
                  <td>
                    <b>46.7%</b>
                  </td>
                  <td>
                    <b>58.6%</b>
                  </td>
                </tr>
                <tr>
                  <td>自分にも悪いところがあると思ったから</td>
                  <td>17.1%</td>
                  <td>
                    <b>41.4%</b>
                  </td>
                </tr>
                <tr>
                  <td>自分さえがまんすれば、なんとかやっていけると思ったから</td>
                  <td>33.3%</td>
                  <td>24.2%</td>
                </tr>
                <tr>
                  <td>恥ずかしくてだれにも言えなかったから</td>
                  <td>21.0%</td>
                  <td>11.1%</td>
                </tr>
                <tr>
                  <td>他人を巻き込みたくなかったから</td>
                  <td>
                    <b>16.2%</b>
                  </td>
                  <td>3.0%</td>
                </tr>
              </tbody>
            </table>

            <p>
              男性の<strong>41.4%</strong>が「自分にも悪いところがあると思った」と
              答えています。女性の2.4倍で、この差は偶然では説明しにくい大きさです
              <sup>※2</sup>。女性のほうは「他人を巻き込みたくなかった」が16.2%で、
              男性の5倍以上。
              <strong>外に向かって黙るか、自分に向かって黙るか。</strong>
            </p>
            {/* 🔴 ここが、おわりにで回収する伏線。第2稿では1行流していた。 */}
            <p>
              ただ、いちばん多いのは男女とも
              <strong>「相談するほどのことではないと思ったから」</strong>でした。
              女性46.7%、男性58.6%。
              <strong>命の危険を感じた人が12.6%いる、同じ462人の中で、です。</strong>
            </p>

            {/* 🔴 相談窓口は §03 と末尾の2箇所に置く（dv-src/SOURCES.md）。
                末尾だけだと、読み切らなかった人に届かない。 */}
            <div className="note rv">
              <span className="nh">心当たりがあるときの窓口です</span>
              <p>
                <b>DV相談＋</b>（内閣府）… <b>0120-279-889</b>／24時間
                <br />
                <b>DV相談ナビ</b> … <b>#8008</b>（最寄りの相談機関につながります）
                <br />
                緊急のとき … <b>110</b>
              </p>
            </div>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">どこに届いているか</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">公的な窓口に届いた男性は、173人のうち1人でした</h2>
            </div>

            <Fig03 />

            <p>
              では、相談した人はどこに相談したのか。届いているのは
              <strong>家族と友人</strong>でした。公的な窓口の数字は、
              どれも数%しかありません。
            </p>

            <Fig04 />

            <p>
              なかでも、
              <strong>
                配偶者暴力相談支援センターに相談した男性は、173人のうち1人。
              </strong>
              女性も289人のうち8人です。
            </p>
            <p>
              {/* ⚠️ 「いちばん専門的な窓口」と書いていたが、順位づけは出典に無い。
                  法にもとづいて置かれている、という事実だけにする。 */}
              支援センターは、DV防止法にもとづいて全国に置かれている専門の窓口です。
              <strong>そこに届いているのが、この人数でした。</strong>
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">よく見る数字に戻る</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">だから「増えている」の意味が変わります</h2>
            </div>

            <Fig05 />

            <p>
              警察庁によると、配偶者からの暴力事案等の相談等件数は
              <strong>令和6年に94,937件</strong>。前年比+7.1%で、
              <strong>DV防止法の施行以降で最多</strong>でした<sup>※3</sup>。
              性別で開くと、5年で女性は+5.6%、
              <strong>男性は+44.9%</strong>（19,478 → 28,214件）。
              増えた12,294件のうち、
              <strong>8,736件（71.1%）が男性被害者の増加</strong>です。
            </p>
            <p>
              ここで§02を思い出します。
              <strong>男性被害者の57.2%は、どこにも相談していません。</strong>
              いちばん多く残っていたのは、男性側でした。
            </p>
            <p>
              <strong>
                男性への暴力が増えたのか、男性が相談するようになったのか。
                この数字は、それを区別できません。
              </strong>
              相談等件数は、被害の量ではなく<strong>窓口に届いた数</strong>だからです。
            </p>

            <Fig06 />

            {/* 🔴 公表資料の言い回しをそのまま引いて、評価を足さずに次へ行く。
                皮肉を1つ入れると、記事全体が社会評論に倒れる。 */}
            <p>そして、最多を更新した年について、資料には小さく注が付いていました。</p>
            <div className="pull rv">
              <p className="q">
                ＤＶ防止法の改正を受け、…
                <em>
                  令和６年４月１日施行以降、自由、名誉又は財産に対する脅迫についても計上
                </em>
              </p>
              <div className="rule" />
              <p className="sub">
                <b>過去最多の年は、数える範囲が広がった年でもありました。</b>
                平成16年、20年、26年にも同じ拡大があります。
              </p>
            </div>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">最初の疑問に戻る</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">では、被害そのものは増えているのか</h2>
            </div>

            <Fig07 />

            <p>
              ここは、はっきり書けません。令和5年度から、調査の対象が
              <strong>20歳以上（上限なし）→ 18歳以上59歳以下</strong>
              に変わっていました。60歳以上が丸ごと抜け、18歳と19歳が入っている。
              <strong>同じ調査の名前で、違う人たちを数えていた</strong>ことになります。
            </p>
            <p>
              内閣府はこれを、認知度のページでは「20歳〜59歳のみ」の再集計を併記して
              処理しています。
              <strong>
                ところが被害経験のページには、過去の調査への言及が1つもありません。
              </strong>
              「令和2年度」も「参考」も、検索して0件でした。
            </p>
            <p>
              公開されている集計結果（実数）には性別×年齢の内訳があるので
              <sup>※4</sup>、20〜59歳だけを足し直しました。女性は
              <strong>28.46% → 27.53%（−0.92pt）</strong>、男性は
              20.44% → 21.88%（+1.44pt）。
              見出しどうしなら女性は +1.6ポイントですが、揃えると
              <strong>向きが変わります</strong>。
              令和2年度の対象者のうち20〜59歳は51.4%しかいないので、
              動くのは当たり前でした。
            </p>

            <Fig08 />

            <p>
              ただし、揃えたあとの差も<strong>統計的に有意ではありません。</strong>
              8項目すべて、95%信頼区間が0をまたぎます。回答者2,950人のうち、
              結婚したことがあるのが1,838人、被害経験があるのが462人。
              <strong>3年に1回・この規模では、数ポイントの変化は検出できません。</strong>
            </p>
            <p>
              増えたのか、減ったのか。<strong>この調査からは分かりませんでした。</strong>
            </p>
          </section>

          {/* 07 ─────────────────────────────────────────────
              🔴 この記事のコンセプト（Satoshiさん・2026-08-04）——
                 **定量データを受けて、遠慮せず相談していこう**。
                 既存9本に「〜しましょう」で終わる記事は0本だが、この記事は
                 意図して外す。ただし §03 の表（黙る理由の最多が
                 「相談するほどのことではない」）から導けることだけを書く。
              ⚠️ 相談すれば解決する、とは書かない（この調査に結果のデータは無い）。
              ⚠️ 黙った44.2%を責める書き方にしない。 */}
          <section className="blk">
            <span className="kicker">おわりに</span>
            <div className="h2">
              <span className="idx">07</span>
              <h2 className="tt">決めているのは、相談する前の自分でした</h2>
            </div>

            <p>
              窓口に届いた件数は増えています。ただしそれが、被害が増えたのか、
              届くようになったのかは区別がつきません。
              被害そのものを測るはずの調査のほうは、変化を検出できる設計になっていない。
              <strong>見えている数字は、どれも「誰かに言えた人」を数えていました。</strong>
            </p>

            <div className="pull rv">
              <p className="q">
                「相談するほどのことか」を決めているのは、
                <br />
                <em>相談する前の自分</em>でした。
              </p>
              <div className="rule" />
              <p className="sub">
                黙った理由の最多が、男女ともこれです。女性46.7%、男性58.6%。
                <b>命の危険を感じた人が12.6%いる母集団の中で、半分以上がそう判断していました。</b>
              </p>
            </div>

            <p>
              その判断が正しかったかどうかは、この数字では分かりません。
              分かるのは、<strong>半分以上の人がそこで止まっている</strong>ことだけです。
            </p>
            <p>
              そして§04のとおり、届いている先は<strong>家族と友人</strong>でした。
              公的な窓口はどれも数%です。
              <strong>相談は、窓口から始めなくてもいい</strong>、とも読めます。
            </p>

            <div className="closing rv">
              <p className="q">
                私は、自分の周りでは起きていないと思っています。
                <br />
                ただ、そう思えているのは、言わなかった人が4割いるからかもしれません。
              </p>
              <p>
                だから、この記事で言えることは1つだけです。
                <b>「相談するほどのことか」を決めるところから、相談していいはずです。</b>
                下に窓口を置いておきます。24時間つながる番号と、
                最寄りの相談機関につないでくれる番号です。
                <br />
                <br />
                この記事の数字は、すべて出典の一次資料から直接転記、
                または公開されている集計結果（実数）から再集計したものです。
                間違いを見つけたら教えていただけるとありがたいです（
                <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
                ）。直します。
              </p>
            </div>

            {/* 🔴 2箇所目の窓口。読み切った人がいちばん動きやすい位置に置く。 */}
            <div className="note rv">
              <span className="nh">相談窓口</span>
              <p>
                <b>DV相談＋</b>（内閣府）… <b>0120-279-889</b>／24時間／
                <a
                  href="https://soudanplus.jp/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  soudanplus.jp
                </a>
                <br />
                <b>DV相談ナビ</b> … <b>#8008</b>（最寄りの相談機関につながります）
                <br />
                緊急のとき … <b>110</b>
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 内閣府男女共同参画局「男女間における暴力に関する調査」
                （令和5年度・令和6年3月公表／令和2年度・令和3年3月公表）。
                統計法に基づく一般統計調査で、平成11年度以降3年に1回。
                令和5年度は全国18歳以上59歳以下の男女5,000人を層化二段無作為抽出、
                郵送留置訪問回収法、令和5年11〜12月実施、有効回収2,950人（59.0%）。
                令和2年度は全国20歳以上の男女5,000人、有効回収3,438人（68.8%）。
              </li>
              <li>
                ※2 「自分にも悪いところがあると思ったから」の男女差は、
                比率の差の95%信頼区間が<b>[+12.2, +36.4]ポイント</b>で0を含みません。
              </li>
              <li>
                ※3 警察庁「令和6年におけるストーカー事案、配偶者からの暴力事案等、
                児童虐待事案等への対応状況について」（令和7年5月22日公表）第2。
                被害者の性別内訳と、計上対象の変遷（注3）はこの資料によります。
              </li>
              <li>
                ※4 同調査「集計結果（実数）」（e-Stat・政府統計コード00100201）。
                令和5年度 statInfId 000040164460／令和2年度 statInfId 000032109850。
                20〜59歳限定の数値は、この表の「性・年齢別」からの独自集計です。
                公表値10件を実数から再現できること、および年齢別の積み上げが
                全体と一致することを確認しています。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ 被害経験の割合の母数は「これまでに結婚したことのある人」であり、
            回答者総数ではありません。相談経験・相談しなかった理由の母数は、
            それぞれ「被害を受けた人」「相談しなかった人」です。
            <br />※ 令和2年度と令和5年度は<b>調査対象の年齢範囲が異なります。</b>
            §06の経年比較は20〜59歳に揃えたものです。
            信頼区間は比率の差の正規近似による95%区間です。
            <br />※ 令和5年度の集計表の年齢は令和5年11月30日現在です。
            結婚したことのある1,838人のうち6人は60歳以上で、
            20〜59歳（1,832人）はこの6人を除いたものです。
            <br />※ 警察庁の「相談等件数」は
            <b>警察が相談等を受理した件数であり、発生件数ではありません。</b>
            計上の対象は法改正のたびに広がっています（平成16年・20年・26年・令和6年）。
            伸び率を示した令和2年〜令和6年の区間には、令和6年4月1日の拡大が含まれます。
            <br />※ 調査方法は両年度とも郵送留置訪問回収法ですが、
            回収率は68.8%から59.0%に下がっています。
            回答する人の性質が変わった可能性は、本記事では検討できていません。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
