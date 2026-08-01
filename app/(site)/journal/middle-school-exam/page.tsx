import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import {
  KpiTiles,
  FigNational,
  FigBasis,
  FigSpread,
  FigAll,
  FigPick,
  FigTrend,
} from "./figures";
import "../journal.css";
import "../dash.css";

export const metadata: Metadata = {
  title: "調べたら、決められることが1つも増えませんでした",
  description:
    "中学受験をするかどうか、まだ何も決めていません。決める前に、東京都教育委員会と学校基本調査の一次資料で数えてみました。全国は12人に1人、東京都は4〜5人に1人。同じ都内で16.7倍の開きがあります。",
  alternates: { canonical: "/journal/middle-school-exam/" },
  openGraph: {
    type: "article",
    title:
      "調べたら、決められることが1つも増えませんでした｜Santa Works Journal",
    description:
      "中学受験は全国で12人に1人、東京都では4〜5人に1人。同じ都内で16.7倍の開きがあります。都教委の進路状況調査と学校基本調査を、一次資料から数え直しました。",
    url: "/journal/middle-school-exam/",
    images: ["/blog/middle-school-exam/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "調べたら、決められることが1つも増えませんでした｜Santa Works Journal",
    description:
      "中学受験は全国で12人に1人、東京都では4〜5人に1人。同じ都内で16.7倍。一次資料から数え直しました。",
    images: ["/blog/middle-school-exam/ogp.png"],
  },
};

export default function Page() {
  return (
    // ⚠️ `dash` を付けるとレイアウトが新デザイン層に乗る（dash.css）。
    //    既存6本は付けていない。遡って統一しない方針（dash.css 冒頭）。
    <div className="journal dash pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ⚠️ 子ども・教室・塾の写真を使わない。受験を演出しないため。
                人物が写る素材を避ける（全社ガードレール⑤）にも自動的に従える。
                図版なので `nodim` で写真用の暗幕を外す（journal.css）。
                生成は pr/drafts/chuju-src/make_images.py。
                画像が無いあいだは下のグラデーションが出るので、壊れ画像にはならない。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/middle-school-exam/hero.webp)",
                      "--hero-sp": "url(/blog/middle-school-exam/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">親として / 公開データの整理</span>
            <h1 className="title">
              調べたら、決められることが
              <br />
              1つも増えませんでした
            </h1>
            {/* ⚠️ 書き出しを「盆休みに話題が出た」から直した（Satoshiさん・2026-08-01）。
                きっかけは一度の出来事ではなく、**最近になって少しずつ**。
                🔴 主語を自分から外さない。「周りが言い始めた」にすると伝聞の報告になる
                （→ 記憶 journal-article-backlog 案L の決めごと）。 */}
            <p className="lede">
              最近になって、中学受験のことを考える場面が増えました。
              といっても、何かを決めたわけではありません。話題が出るたびに、
              <strong>自分がまだ何も決めていない</strong>と気づく。それだけです。
              できればしてほしい気もするし、無理にすることでもない気もする。
              決める材料も持っていなかったので、まず、どれくらいの子がしているのかを数えました。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.02</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          <KpiTiles />

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  全国では<strong>12人に1人</strong>。東京都では
                  <strong>4〜5人に1人</strong>でした。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  同じ都内で<strong>16.7倍</strong>の開き。ただし「公立へ行った」は
                  <strong>「受験しなかった」ではありません</strong>でした。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  都外へ進学した子が、受験したのか引っ越したのかは
                  <strong>分けられませんでした</strong>。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、大きさ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">12人に1人</h2>
            </div>
            <p>
              最初に知りたかったのは、そもそもどれくらい多い話なのか、でした。
              周りで聞くと多そうに感じますが、それは自分の周りの話でしかありません。
            </p>

            <FigNational />

            <p>
              文部科学省の学校基本調査に、中学校の生徒数を学年ごと・設置者ごとに数えた表があります
              <sup>※1</sup>。令和7年度の中学1年生は全国で1,018,443人。
              そのうち私立は84,267人で、<strong>8.27%</strong>でした。
              国立の8,684人を足すと9.13%になります。
            </p>
            <p>
              <strong>およそ12人に1人。</strong>1クラス35人なら、3人ほどという規模です。
              多いと言えば多いし、大半ではない、とも言えます。
            </p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">数字を探しに行く</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">「東京都は27%」は、私の知りたい数字ではありませんでした</h2>
            </div>
            <p>
              同じ表には都道府県の行もあります。東京都を見ると、私立は27.3%。
              全国の3倍以上です。ここで納得しかけました。
            </p>
            <p>
              でも、表の作りを読んで手が止まりました。
              この調査は<strong>学校のある場所</strong>で数えています。
              東京都の私立中学に通う1年生には、埼玉・千葉・神奈川から電車で通ってくる子が入っています。
            </p>
            <p>
              私が知りたいのは、学校がどこにあるかではありません。
              <strong>ここに住んでいる子が、どうしているか</strong>です。
            </p>

            <FigBasis />

            <p>
              探し直して、東京都教育委員会の「公立学校統計調査報告書」に行き当たりました
              <sup>※2</sup>。
              都内の公立小学校を卒業した子が、どこの中学校へ進んだかを数えた表です。
              こちらは<strong>通っていた小学校の場所</strong>、つまり住んでいる場所で並んでいます。
            </p>
            <p>
              {/* ⚠️ ここは第1表の**都計の行**の数字（98,264人 / 19,572人）。
                  図の51区市町村は卒業者100人未満の町村と島部を落としているので、
                  合算すると 22.0% になって**都全体の21.9%と一致しない**。
                  2026-08-01 の検算で発覚。**本文は都全体、図の基準線も都全体**に揃えた。 */}
              令和6年度の卒業生は98,264人。私立へ進んだのは19,572人で19.9%。
              国立と、あとで触れる都立の中高一貫を足すと<strong>21.9%</strong>になります。
              4〜5人に1人です。
            </p>

            <div className="note rv">
              <span className="nh">同じ言葉で、違うものを数えている</span>
              <p>
                「東京の中学受験率」として世の中に出ている数字には、
                この2つが混ざっています。どちらも正しく、どちらかが嘘というわけでもありません。
                ただ<b>問いが違います。</b>
                自分の家の話をしたいときに要るのは、住んでいる場所のほうでした。
              </p>
            </div>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">割ってみる</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">同じ都内で、16.7倍</h2>
            </div>
            <p>
              この表は、区市町村ごとに分かれています。せっかくなので、全部並べてみました。
            </p>

            <FigSpread />

            <p>
              いちばん高いところで52.3%、いちばん低いところで3.1%。
              <strong>同じ都内で16.7倍</strong>ありました。
              上のほうは、2人に1人が受験しています。
            </p>
            <p>
              並べてから、この図をどう読むかで少し悩みました。
              高いところが熱心で、低いところがそうでない、という読み方は、たぶん違います。
              通える範囲に学校が何校あるかが、そもそも違うからです。
              <strong>選べる数が違えば、選ぶ人の数も変わります。</strong>
            </p>

            <FigAll />

            <div className="note rv">
              <span className="nh">この記事を、順位表として読まないでください</span>
              <p>
                並びは区市町村の順で、率の順ではありません。
                地区名を出しているのは、読んだ方が自分の場所を探せるようにするためで、
                <b>上下をつけるためではありません。</b>
                この数字は、その土地に住む人の考え方を測ったものではないです。
              </p>
            </div>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">読み違えていた</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">「公立へ行った」は「受験しなかった」ではありませんでした</h2>
            </div>
            <p>
              最初、私はこの表の「私立」の列だけを見ていました。受験といえば私立だろう、と思っていたからです。
            </p>
            <p>
              表の下にある注を読んで、間違いに気づきました。
              <strong>都立の中高一貫校と、区立の中等教育学校は「公立」に入っています</strong>
              <sup>※2</sup>。当たり前といえば当たり前で、設置者は公立です。
              {/* ⚠️ 表記は「適性検査」。**「適正」ではない**（能力を見るので「性」）。
                  都立・区立の中高一貫はこの呼び名で、私立・国立の入学試験とは別物。
                  Satoshiさんの指示で、ぼかさず正しい呼び名を出す（2026-08-01）。 */}
              けれど入るには適性検査を受ける必要があります。
            </p>

            <FigPick />

            <p>
              市部でよく効きました。ある市は私立だけなら15.1%ですが、
              都立の中高一貫を足すと20.3%になります。
              <strong>私が見ていた列は、市部の受験をまるごと落としていました。</strong>
            </p>
            <p>
              知らない土地の話ではありません。自分が数え方を選んだ結果、見えなくなっていたものです。
              決めていないというのは、たぶんこういうことなのだと思いました。
              何を見ればいいかを、まだ知らない。
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">分からなかったこと</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">この数字は、受験した人数ではありません</h2>
            </div>
            <p>
              数え方をひとつ直したので、ほかも確かめました。そうしたら、
              <strong>この表で受験の多さを言い切ることはできない</strong>と分かりました。
            </p>

            <FigTrend />

            <p>
              いちばん上の線は、都外の中学校へ進んだ子を足したものです。
              6年で21.8%から24.6%まで上がっています。
              ところがこの列には、都外の私立へ進んだ子と、
              <strong>引っ越して都外の公立に入った子が、両方入っています。</strong>
              表に内訳はありません。分けられないことが分かっただけで、分けられませんでした。
            </p>
            <p>だから、この線が上がっている理由も書けません。</p>
            <p>ほかにも、実際より低く出ている理由が3つありました。</p>

            <div className="note rv">
              <span className="nh">どれも「実際はもっと多い」方向に効きます</span>
              <p>
                <b>① 分母は公立小学校の卒業者です。</b>
                私立の小学校に通っている子は、はじめから入っていません。
                <br />
                <b>② 進学した先を数えた表です。</b>
                受けて合格しなかった子は公立中学校へ進むので、この数には現れません。
                <br />
                <b>③ 全国の数字には中等教育学校の前期課程が入りません。</b>
                別の調査票で数えているためです。
              </p>
            </div>

            <p>
              つまり、実際に受験した子はここに出ている数より多い。
              <strong>どれくらい多いかは、どこにも書いてありませんでした。</strong>
            </p>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">おわりに</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">分かったことと、分からなかったこと</h2>
            </div>
            <p>
              数えるあいだ、ずっと同じことを考えていました。
              この数字が高かったら、うちもそうするのだろうか。低かったら、しないのだろうか。
            </p>
            <p>
              たぶん、どちらでもありません。
              <strong>私が知りたかったのは、周りがどうしているかではなかった</strong>のだと、
              数え終わってから気づきました。
            </p>
            <p>
              公開データは、よくできています。誰が数えたか、何を数えたか、何を数えていないかまで、
              表の注に書いてあります。書いていないことは、書いていないと分かるようになっている。
              それでも、この問いには答えてくれませんでした。答えられる種類の問いではないからです。
            </p>

            <div className="closing rv">
              <p className="q">
                調べたら、周りが何をしているかは、はっきり分かりました。
                <br />
                自分がどうするかは、やっぱり分かりませんでした。
              </p>
              <p>
                それが分かったことが、たぶん今回の収穫です。
                <br />
                <br />
                この記事の数字は、すべて出典の一次資料から直接集計しています。
                間違いを見つけたら教えていただけるとありがたいです（
                <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
                ）。直します。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 文部科学省「学校基本調査」令和7年度（確定値）
                初等中等教育機関・専修学校・各種学校／学校調査票（中学校）
                表番号75「学年別生徒数」（e-Stat）。
                本記事の数値は、この表の計・国立・公立・私立の4シートから
                第1学年（男＋女）を取り出して独自に算出したものです。
                国立＋公立＋私立が計と一致することを確認しています。
                <b>
                  なお、この表は学校の所在地で数えているため、都道府県別の行は
                  住んでいる場所の話とは比べられません
                </b>
                （本文02）。使用したのは全国の行だけです。
              </li>
              <li>
                ※2 東京都教育委員会「令和7年度 公立学校統計調査報告書
                【公立学校卒業者（令和6年度）の進路状況調査編】」
                第1表「状況別卒業者数」。
                区市町村別の率と「受験計」（私立＋国立＋都立の中高一貫）は、
                この表から独自に算出したものです。
                都立の中学校、区立および都立の中等教育学校、
                区立および市立の義務教育学校への進学者が「公立」に含まれることは、
                同表の注3に明記されています。
              </li>
              <li>
                <b>区市町村の選び方について</b>：
                卒業者が100人に満たない町村は、1人の増減で率が大きく動くため集計から外しました。
                残った51区市町村で数えています。
                図で並べた6地区は、区部と市部から3つずつ選んだもので、上位下位ではありません。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ この記事は、中学受験をすすめるものでも、すすめないものでもありません。
            進路の助言をする立場にないので、書いていません。
            <br />※{" "}
            <b>ここに出てくる率は、受験した子の割合ではありません。</b>
            進学した先を数えたものです（本文05）。
            <br />※ 令和6年度の卒業生は、令和7年4月に中学校へ進学しています。
            全国の数字は令和7年5月1日現在の中学1年生なので、
            <b>同じ学年の子たちを、別の調査から見ています。</b>
            <br />※ 「16.7倍」は、集計対象の51区市町村のうち、受験計がいちばん高い地区と
            いちばん低い地区の比です。<b>順位を示すために出した数字ではありません。</b>
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
