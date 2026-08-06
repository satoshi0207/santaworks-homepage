import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import { FigVacant, FigStock, FigIndex } from "./figures";
import "../journal.css";
import "../dash.css";
import Byline from "../Byline";
import { eyebrowOf } from "../posts";

export const metadata: Metadata = {
  title: "値上がりしていたのは、売りに出された家だけでした",
  description:
    "空き家は900万2千戸で過去最高。それでも家の値段は上がっています。総務省の住宅・土地統計調査と国土交通省の不動産価格指数を一次資料から読むと、上がり方は家の種類で倍ちがい、売りに出していない385万6千戸はどの指数にも出てきませんでした。",
  alternates: { canonical: "/journal/akiya/" },
  openGraph: {
    type: "article",
    title:
      "値上がりしていたのは、売りに出された家だけでした｜Santa Works Journal",
    description:
      "空き家は900万2千戸で過去最高。それでも値段は上がっています。ただし上がり方は家の種類で倍ちがい、売りに出していない385万6千戸は、そもそも指数に入っていませんでした。",
    url: "/journal/akiya/",
    images: ["/blog/akiya/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "値上がりしていたのは、売りに出された家だけでした｜Santa Works Journal",
    description:
      "空き家は900万2千戸で過去最高。それでも値段は上がる。ただし指数が測っているのは、実際に取引が成立した家だけでした。",
    images: ["/blog/akiya/ogp.png"],
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
            {/* ⚠️ 空き家の写真を使わない。荒れた家・割れた窓の絵は、
                この記事が避けている「問題として語る」に一歩で寄ってしまう
                （→ akiya-src/SOURCES.md「罠」1）。図版なので `nodim` で
                写真用の暗幕を外す（journal.css）。生成は akiya-src/make_images.py。
                画像が無いあいだは下のグラデーションが出るので、壊れ画像にはならない。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/akiya/hero.webp)",
                      "--hero-sp": "url(/blog/akiya/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("akiya")}</span>
            <h1 className="title">
              値上がりしていたのは、
              <br />
              売りに出された家だけでした
            </h1>
            <p className="lede">
              家の値段が上がっている、という話をよく聞きます。私も、そういうものだと思っていました。
              ただ、空き家も過去最高だと聞きます。
              <strong>余っているのに上がる</strong>
              というのが、どうもうまく飲み込めませんでした。
              それで、総務省の住宅・土地統計調査と、国土交通省の不動産価格指数を開いてみました。
              結論から書くと、私の飲み込めなさは、半分は思い込みでした。
              そして残りの半分は、思い込みではありませんでした。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.03</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          {/* ⚠️ ここに「空き家率が過去最高」だけを大きく置くと、
              記事の芯（05）ではなく驚きの数字が看板になってしまう。
              4枚目に指数を並べて、**数と値段が別々の話であること**を先に見せる。 */}
          <div className="kpi rv" data-fx data-num data-seq="120">
            <div className="tile">
              <span className="lbl">空き家率</span>
              <span className="v n">
                13.8<small>%</small>
              </span>
              <span className="note">900万2千戸。数も率も過去最高です</span>
            </div>
            <div className="tile on">
              <span className="lbl">うち、市場に出ていない</span>
              <span className="v n">
                385.6<small>万戸</small>
              </span>
              <span className="note">
                賃貸用・売却用・二次的住宅を除いた残りです
              </span>
            </div>
            <div className="tile">
              <span className="lbl">1世帯あたりの住宅</span>
              <span className="v n">
                1.16<small>戸</small>
              </span>
              <span className="note">1968年から一度も1.00を下回っていません</span>
            </div>
            <div className="tile">
              <span className="lbl">マンションの価格指数</span>
              <span className="v n">225.1</span>
              <span className="note">
                戸建住宅は121.9。どちらも2010年＝100です
              </span>
            </div>
          </div>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  空き家は<strong>900万2千戸</strong>、空き家率
                  <strong>13.8%</strong>。どちらも過去最高でした。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  ただし家が余っているのは最近の話ではなく、
                  <strong>1968年から55年以上つづいている状態</strong>でした。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  値段は上がっています。ただし
                  <strong>上がり方が、家の種類で倍ちがいました</strong>。
                </span>
              </li>
              <li>
                <span className="n">04</span>
                <span className="tx">
                  そして指数は<strong>実際に取引が成立した家</strong>から作られています。
                  売りに出していない<strong>385万6千戸</strong>は、そこに出てきません。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、数</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">900万2千戸</h2>
            </div>

            <FigVacant />

            <p>
              総務省の住宅・土地統計調査は、5年に1度おこなわれます。
              いちばん新しいのは令和5年（2023年10月1日現在）の調査です
              <sup>※1</sup>。
            </p>
            <p>
              そこに載っている空き家の数が、<strong>900万2千戸</strong>でした。
              前回（2018年）の848万9千戸から、51万3千戸ふえています。
              空き家率は<strong>13.8%</strong>。2018年の13.6%から0.2ポイント上がって、
              数も率も過去最高です。
            </p>
            <p>
              13.8% という数字は、少し遠く感じます。
              <strong>およそ7.2戸に1戸</strong>と言い換えると、たぶん近くなります。
            </p>
            <p>
              ただ、この900万2千戸は、ひとかたまりではありませんでした。
              内訳は、入居者を募集中の賃貸用、買い手を募集中の売却用、別荘などの二次的住宅、
              そして<strong>そのどれでもないもの</strong>に分かれています。
            </p>
            <p>
              最後のものが<strong>385万6千戸</strong>。総住宅数の5.9%にあたります。
              前回の348万7千戸から、36万9千戸ふえています。
            </p>

            <div className="note rv">
              <span className="nh">原典は、この区分をこう説明しています</span>
              <p>
                「賃貸用の空き家、売却用の空き家及び二次的住宅以外の人が住んでいない住宅で、例えば、
                <b>転勤・入院などのため居住世帯が長期にわたって不在の住宅</b>や
                <b>建て替えなどのために取り壊すことになっている住宅</b>
                など（注：空き家の種類の判断が困難な住宅を含む。）」
                <br />
                {/* 🔴 ここを「誰も次の使い道を決めていない家」と書いていた（2026-08-02）。
                    原典を開いたら、帰ってくる予定の家も、壊すと決まった家も入っていた。
                    **区分の名前から意味を作らない**（→ 記憶 primary-source-discipline）。 */}
                つまり「誰も帰ってこない家」ではありません。
                帰ってくる予定の家も、壊すと決まった家も、判断がつかなかった家も入っています。
                共通しているのは、<b>いま市場に出ていない</b>ということだけです。
              </p>
            </div>

            <p>この記事で見ていくのは、この385万6千戸のほうです。</p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">思っていたより、前から</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">家は、足りている</h2>
            </div>

            <FigStock />

            <p>
              空き家がふえていると聞くと、家が余っていると考えます。それはそのとおりでした。
              ただ、<strong>思っていたより、ずっと前から余っていました。</strong>
            </p>
            <p>
              同じ調査で、住宅の数と世帯の数を並べられます。総住宅数は6,504.7万戸
              （前回比 +4.2%・+263万9千戸）、総世帯数は5,621.5万世帯
              （+4.1%・+221万4千世帯）。住宅のほうが
              <strong>883万2千戸多い</strong>ことになります。
            </p>
            <p>
              面白いのはここからで、<strong>この逆転は1968年に起きています</strong>
              <sup>※2</sup>。1963年の調査までは、世帯の数のほうが多かった。
              それ以降、住宅の数が世帯の数を下回った年は、一度もありません。
              いまは<strong>1世帯あたり1.16戸</strong>です。
            </p>
            <p>
              つまり「空き家がふえた」は最近の話ですが、「家が足りている」のほうは、
              <strong>55年以上つづいている状態</strong>でした。
            </p>

            {/* ⚠️ ここで理由を語り始めると、一次資料の記事ではなく論評になる
                （→ SOURCES.md「罠」2）。事実だけ置いて次へ行く。 */}
            <div className="note rv">
              <span className="nh">なぜそうなっているのかは、書きません</span>
              <p>
                私が調べたのは数字までで、理由のほうは確かめていないからです。
                <b>足りているという事実だけを置きます。</b>
              </p>
            </div>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">値段のほうを見る</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">それでも、値段は上がっている</h2>
            </div>
            <p>
              では値段はどうか。国土交通省が毎月出している
              <strong>不動産価格指数</strong>があります。2010年の平均を100とした指数です
              <sup>※3</sup>。
            </p>
            <p>
              いちばん新しい公表値は、令和7年12月分でした。
              <strong>住宅総合 148.0。</strong>2010年から、およそ1.48倍です。
            </p>
            <p>余っているのに上がっている。ここまでは、聞いていたとおりでした。</p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">一度だけ、割ってみる</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">同じ「家の値段」で、上がり方が倍ちがいました</h2>
            </div>

            <FigIndex />

            <p>ところが、この指数は3つに分かれています。同じ月の値を並べると、こうなります。</p>

            <table className="tbl">
              <thead>
                <tr>
                  <th>令和7年12月・季節調整値</th>
                  <th>指数</th>
                  <th>2010年から</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>マンション（区分所有）</td>
                  <td>
                    <b>225.1</b>
                  </td>
                  <td>約2.25倍</td>
                </tr>
                <tr>
                  <td>戸建住宅</td>
                  <td>
                    <b>121.9</b>
                  </td>
                  <td>約1.22倍</td>
                </tr>
                <tr>
                  <td>住宅地</td>
                  <td>
                    <b>119.8</b>
                  </td>
                  <td>約1.20倍</td>
                </tr>
              </tbody>
            </table>

            <p>
              住宅総合の148.0は、この3つを合わせた数字です。ただし単純な平均ではありません。
              作成方法によれば、<strong>毎月の取引総額で重みをつけた加重平均</strong>です
              <sup>※4</sup>。3つをそのまま平均すると155.6になります。
              公表値が148.0なのは、そういう理由です。
            </p>
            <p>
              <strong>2.25倍と、1.22倍。</strong>
              どれも上がってはいます。ただ、同じ「家の値段」という言葉で呼んでいたものが、
              中では倍ちがっていました。
            </p>
            {/* 🔴 「上がっていたのはマンションだけ」と書いていた（2026-08-02）。
                戸建も +21.9%。**上がっていないものは1つも無かった。**
                「〜だけ」は危険信号（→ 記憶 primary-source-discipline）。 */}
            <p>
              戸建も15年で2割強、上がっています。
              <strong>上がっていない、という話ではありません。</strong>
              マンションの隣に置くと小さく見えるだけです。
            </p>
            <p>
              そしてもうひとつ。さきほどの385万6千戸を建て方で分けると、
              <strong>一戸建が285万1千戸</strong>でした。およそ4分の3です
              （共同住宅は84万8千戸）
              <sup>※1</sup>。私が思い浮かべていた「実家」も、マンションではありませんでした。
            </p>
            <p>
              私が飲み込めなかった「余っているのに上がる」は、
              <strong>半分は言葉のせいでした。</strong>
              「家の値段」がひとつの数字だと思っていたのが、まちがいでした。
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">作り方を読む</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">指数は「売れた家」しか測っていない</h2>
            </div>
            <p>
              ここまでで納得しかけたのですが、もうひとつ気になることが残りました。
              <strong>この指数は、どうやって作っているのか。</strong>
            </p>
            <p>
              国土交通省が公開している「不動産価格指数（住宅）の作成方法」に、
              はっきり書いてありました<sup>※4</sup>。
              「取引事例データの価格は、<strong>実際に取引されて成立した</strong>、
              土地又は土地・建物一体の価格である」。
            </p>
            <p>
              もとになるデータは、
              <strong>①登記異動情報 → ②アンケート調査票 → ③現地調査</strong>
              の3段階で作られています。出発点は、所有権が動いた記録です。
            </p>

            <div className="pull rv">
              <p className="q">
                売られていない家には、<em>値段がつきません。</em>
              </p>
              <div className="rule" />
              <p className="sub">
                値段がつかないので、指数に入りません。指数に入らないので、
                統計のどこを探しても出てきません。385万6千戸は、いま市場に出ていない家です。
                だから<b>構造として、この数字には現れません。</b>
              </p>
            </div>

            {/* 🔴 ここを混ぜると記事が壊れる（→ SOURCES.md「罠」4）。 */}
            <div className="note rv">
              <span className="nh">出てこないことと、価値がないことは別の話です</span>
              <p>
                指数に現れないのは、<b>取引されていないから</b>であって、
                それ以上の意味はありません。ここは混ぜないように書いておきます。
              </p>
            </div>

            <p>そして、もうひとつ。</p>
            {/* ⚠️ 驚かせる材料として使わない。国交省を責める語も足さない。
                公表資料の言い回しをそのまま引いて、評価をつけずに 06 へ降りる
                （→ SOURCES.md §05・「罠」8）。 */}
            <p>
              <strong>この指数は、いま止まっています。</strong>
              令和8年1月分以降の公表が延期されていて、理由は
              「算出時のプログラムに不具合が発生しており、原因の確認作業を行っております」
              と書かれています。再開の日は、まだ決まっていません
              （令和8年7月29日のお知らせ）<sup>※5</sup>。
            </p>
            <p>
              だから私がここに書いた148.0も、
              <strong>いま更新が止まっている系列の、いちばん新しい値</strong>です。
            </p>
          </section>

          {/* 06 ─────────────────────────────────────────────
              🔴 この節は Satoshiさんの言葉で確定（2026-08-02）。
                 「母」で出す／「建て直したい」**とも**言っていた／
                 置いてきたのは**アルバム**／「限りある命」の段落は残す。
                 **私の判断で書き換えない。**直すなら本人に聞いてから。 */}
          <section className="blk">
            <span className="kicker">おわりに</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">実家に置いてきたもの</h2>
            </div>
            <p>
              ここまで385万6千戸の話をしてきましたが、
              <strong>私の実家は、その中に入っていません。</strong>いま母が住んでいます。
            </p>
            <p>
              思っていたよりずっと元気で、この前は「建て直したい」とも言っていました。
              空き家の数を数えたあとでその話を思い出すと、少し妙な気持ちになります。
              <strong>あの家は、この記事で見てきたどの区分にも当てはまりません。</strong>
              空き家でもなく、売りに出してもいない。人が住んでいる家です。
            </p>
            <p>
              置いてきたのは、アルバムでした。紙に焼いた写真を、台紙に貼ってあるものです。
            </p>
            <p>
              いま私が撮っている写真は、<strong>印刷すらしていません。</strong>
              だから置いてくることも、持ち帰ることもできません。
              どこかのサーバーと、手元の端末の中にあります。
            </p>
            <p>
              置いてきたものが、いまもそこにあるのは、
              <strong>誰かがそこに住んでいるから</strong>でした。
              私が何かをしてきたからではありません。
            </p>
            <p>
              限りある命なのは、分かっています。分かってはいますが、それとは別に、
              いつまでも元気でいてほしいと思っています。
            </p>
            <p>だから私は、あの家について、まだ何も決めていません。</p>

            <div className="closing rv">
              <p className="q">
                統計は、家が何戸あるかを数えます。いくらで売れたかも数えます。
                <br />
                そこに誰が住んでいて、どれだけ元気かは、数えません。
              </p>
              <p>
                調べる前、私は「家の値段が上がっている」という一つの話だと思っていました。
                開いてみたら、二つの話でした。上がり方が倍ちがっていたという話と、
                値段の話に出てこない家が385万6千戸あるという話です。
                値段がつくのは、売りに出された家だけでした。
                私の実家は売りに出していません。まだ人が住んでいるからです。
                <br />
                <br />
                だから、あの家がいくらなのかは、どの統計にも書いてありません。
                書いていないことが、悪いわけではありません。測るとはそういうことだ、というだけです。
                数えないままでいいこともある、と思いました。
                <br />
                <br />
                この記事の数字は、すべて出典の一次資料から直接転記しています。
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
                ※1 総務省統計局「令和5年住宅・土地統計調査」
                住宅及び世帯に関する基本集計（確報集計）結果。
                空き家数・空き家率、「賃貸・売却用及び二次的住宅を除く空き家」の数と建て方別の内訳は、
                この確報の結果の概要（PDF）から転記しています。
                調査時点は<b>2023年10月1日現在</b>です。
              </li>
              <li>
                ※2 同「住宅・土地統計調査」時系列統計表（1958年〜2023年）。
                総住宅数・総世帯数の推移と、FIG 02の1世帯あたり住宅数はここから算出しました。
                <b>1958・1963・1968年は沖縄県を含みません</b>（原典の注）。
              </li>
              <li>
                ※3 国土交通省「不動産価格指数（令和7年12月・令和7年第4四半期分）を公表」
                （令和8年3月31日）。本文の指数はすべて<b>2010年平均＝100</b>の
                <b>季節調整値</b>です。
              </li>
              <li>
                ※4 国土交通省「不動産価格指数（住宅）の作成方法」（令和2年8月）。
                取引事例データの定義、①登記異動情報→②アンケート調査票→③現地調査という
                作成の順序、住宅総合が取引総額による加重平均であることは、この資料に基づきます。
              </li>
              <li>
                ※5 国土交通省「不動産価格指数」公表延期のお知らせ（令和8年7月29日）。
                延期の対象は<b>令和8年1月分以降</b>です。
                {/* 🔴 一度「令和8年4月分以降」と書いた。お知らせにある「令和8年4月以降」は
                    **公開予定日**であって、データの月ではなかった（2026-08-02・2回目の点検）。 */}
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ この記事は、空き家を問題として論じるものではありません。
            数がどうなっているかと、値段の指数が何を測っているかを並べただけです。
            <br />※{" "}
            <b>「空き家」には、賃貸用・売却用・二次的住宅が含まれます。</b>
            この記事が扱う385万6千戸は、それらを除いた残りであって、空き家全体ではありません。
            ここを混ぜると数字が2倍以上ずれます。
            <br />※ 住宅・土地統計調査は5年ごとの調査です。
            数値は2023年10月1日現在で、2026年時点の状況とは異なります。
            <br />※ 不動産価格指数は<b>速報値</b>で、
            初回公表後3か月間は改訂されます。本文の148.0なども確定値ではありません。
            <br />※ 指数に現れないことは、
            <b>その家に価値がないことを意味しません。</b>
            取引されていないから測られていない、というだけです。
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
