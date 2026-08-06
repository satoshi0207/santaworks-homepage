import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import { KpiTiles, CalendarHeat, WeekdayBars, AprilBars, RokuyoDots } from "./figures";
import Cal from "./Cal";
import "../journal.css";
import "../dash.css";
import Byline from "../Byline";
import { eyebrowOf } from "../posts";

export const metadata: Metadata = {
  title: "生まれる日を決めていたのは、病院の営業日と法律でした",
  description:
    "子どもが生まれる日は縁起のいい日に寄っているのか。10年分・854万人の出生記録を数えたら、六曜の差は0.9%でした。代わりに出てきたのは曜日1.68倍、祝日0.69倍、そして4月1日と2日のあいだにある38.4%の段差です。",
  alternates: { canonical: "/journal/birthday-distribution/" },
  openGraph: {
    type: "article",
    title:
      "生まれる日を決めていたのは、病院の営業日と法律でした｜Santa Works Journal",
    description:
      "六曜による差は0.9%。一方、曜日は1.68倍、祝日は0.69倍。4月1日から2日にかけては一晩で38.4%跳ねます。人口動態統計の保管統計表を10年分数えました。",
    url: "/journal/birthday-distribution/",
    images: ["/blog/birthday-distribution/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "生まれる日を決めていたのは、病院の営業日と法律でした｜Santa Works Journal",
    description:
      "六曜の差は0.9%。曜日は1.68倍、祝日は0.69倍。4月1日と2日のあいだに38.4%の段差があります。",
    images: ["/blog/birthday-distribution/ogp.png"],
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
            {/* ⚠️ ヒーローに写真を使わない。この記事は一次資料だけで書いているので、
                絵だけ借り物の素材にすると、記事全体の作り方と食い違う。
                人物が写る素材を避ける（全社ガードレール⑤）という制約にも自動的に従える。
                図版なので `nodim` で写真用の暗幕を外す（journal.css）。
                中身は §03 のヒートマップそのもの。記事の看板を表紙にしている。
                生成は pr/drafts/birthday-distribution-src/make_images.py。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/birthday-distribution/hero.webp)",
                      "--hero-sp": "url(/blog/birthday-distribution/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("birthday-distribution")}</span>
            <h1 className="title">
              生まれる日を決めていたのは、
              <br />
              病院の営業日と法律でした
            </h1>
            <p className="lede">
              子どもが生まれる日は、縁起のいい日に寄っているのではないか。そう思って、10年分の出生記録を数えてみた。
              <strong>結果は、ほとんど寄っていなかった。</strong>
              代わりに、まったく別のものが出てきた。生まれる日を動かしていたのは、願いではなく、病院の営業日と法律だった。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.07.31</span>
              <span className="dot" />
              <span>読了 約5分</span>
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
                  六曜（大安・仏滅などの6つ）による差は<strong>+0.9%</strong>
                  。統計的には「差があるとは言えない」水準でした。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  一方、曜日による差は<strong>1.68倍</strong>、祝日は
                  <strong>0.69倍</strong>。縁起とは比べものになりません。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  4月1日から4月2日にかけて、出生数が<strong>38.4%</strong>
                  跳ねます。祝日でも土日でもない一晩の段差です。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">きっかけ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">「大安に産みたい」は、あるのだろうか</h2>
            </div>
            <p>きっかけは、ふと浮かんだ疑問でした。</p>
            {/* ⚠️ 六曜は一般的な言葉ではない（Satoshiさん・2026-07-31）。
                図とTOCに先に出てくるので、本文で最初に出るここで意味を渡しておく。
                旧暦との関係は出典側にもう一度書いてある（そちらは検証の話）。 */}
            <p>
              カレンダーの隅に、小さく「大安」「仏滅」と入っていることがあります。
              <strong>六曜（ろくよう）</strong>といって、
              先勝・友引・先負・仏滅・大安・赤口の6つが順に巡るものです。
              旧暦の月と日から機械的に決まるので、日付とも曜日とも関係なく並びます。
              大安は縁起がよく、仏滅はよくない、とされています。
            </p>
            <p>
              結婚式や引っ越しの日取りをこれで決める人はいます。
              <strong>では、子どもが生まれる日はどうなのだろう。</strong>
              予定帝王切開や計画分娩なら、日にちをある程度は選べるはずです。縁起のいい日に寄せたい、と考える人がいてもおかしくない。
            </p>
            <p>
              私自身は、<strong>出産は奇跡でもあるし、どうにもならない場面もある。</strong>
              そう思っているので、日取りを気にしたことがない、というのが正直なところ。
            </p>
            <p>
              ただ、気にする人はいるだろう、とも思いました。そして調べられるはずだ、とも。六曜は旧暦から機械的に決まりますし、出生数の統計は公開されています。
            </p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">数えてみた</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">ほとんど差がありませんでした</h2>
            </div>
            <p>
              使ったのは、厚生労働省の人口動態統計のうち、
              <strong>報告書には載せていない「保管統計表」</strong>です<sup>※1</sup>。
              出生の場所・月・日・時間まで分かれた詳細な集計で、
              <strong>2015年から2024年までの10年分、3,653日、8,549,425人</strong>が入っています。
            </p>
            <p>
              日付ごとの出生数を六曜に振り分けました。ただし、そのまま比べると曜日の影響が混ざります。六曜は約6日周期、曜日は7日周期なので、標本が有限だと偏りが出るためです。そこで
              <strong>同じ年・同じ曜日の平均を1.00としたときの比</strong>
              で見ています。土日と祝日も除いています。
            </p>

            <figure className="fig rv">
              <div className="hd">
                <div className="ttl">
                  六曜別（同じ年・同じ曜日の平均を1.00とした比）
                </div>
                <div className="src n">土日と祝日は除外</div>
              </div>
              <RokuyoDots />
              <table className="tbl">
                <thead>
                  <tr>
                    <th>六曜</th>
                    <th>比</th>
                    <th>95%信頼区間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>大安</td>
                    <td>1.0086</td>
                    <td>±0.0094</td>
                  </tr>
                  <tr>
                    <td>先負</td>
                    <td>1.0017</td>
                    <td>±0.0083</td>
                  </tr>
                  <tr>
                    <td>仏滅</td>
                    <td>0.9998</td>
                    <td>±0.0084</td>
                  </tr>
                  <tr>
                    <td>先勝</td>
                    <td>0.9987</td>
                    <td>±0.0091</td>
                  </tr>
                  <tr>
                    <td>友引</td>
                    <td>0.9963</td>
                    <td>±0.0097</td>
                  </tr>
                  <tr>
                    <td>赤口</td>
                    <td>0.9950</td>
                    <td>±0.0091</td>
                  </tr>
                </tbody>
              </table>
              <figcaption>
                点が推定値、横棒が95%信頼区間、破線が1.00。
                大安がわずかに右にあるが、<strong>区間は1.00にかかっている</strong>。
              </figcaption>
            </figure>

            <p>
              大安がいちばん多い。ただし、その差は0.9%。しかも95%信頼区間が1.00にかかっているので、差があるとは言い切れません。
            </p>
            <p>
              大安と赤口を比べても1.014倍。100人のうち1人ぶんの違いです。
            </p>
            <p>もう少し出るだろうと思っていましたが、予想は外れました。</p>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">代わりに出てきたもの</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">動かしていたのは、病院のカレンダーでした</h2>
            </div>
            <p>同じデータを、今度は曜日で切ります。</p>

            <figure className="fig rv">
              <div className="hd">
                <div className="ttl">曜日別の1日平均出生数</div>
                <div className="src n">n=各522日</div>
              </div>
              <WeekdayBars />
              <figcaption>
                <strong>平日は土日の1.476倍。</strong>
                最多の火曜と最少の日曜では1.684倍です。
              </figcaption>
            </figure>

            <p>
              祝日も見ました。祝日を土日と一緒に数えると、土日の効果を二重に数えてしまうので、
              <strong>土日を除いた平日のなかだけで</strong>比べます。
            </p>
            <ul>
              <li>
                ふつうの平日：<strong>2,598人</strong>
              </li>
              <li>
                平日にあたった祝日：<strong>1,797人</strong>（65日分）
              </li>
              <li>
                → 祝日は、ふつうの平日の<strong>0.692倍</strong>
              </li>
            </ul>
            <p>
              六曜が1.014倍だったのに対して、曜日は1.684倍、祝日は0.692倍。
              <strong>六曜の0.9%とは、大きさがまるで違います。</strong>
            </p>
            <p>
              つまり、生まれる日を動かしていたのは縁起ではなく、
              <strong>医療機関が動いている日かどうか</strong>
              でした。予定帝王切開も計画分娩も、平日の日中に組まれます。
            </p>
            <p>
              規模を出しておきます。<strong>仮に土日が平日と同じペースだったとすると</strong>
              、10年で867,658人、<strong>年に約8万7千人ぶんが平日側に寄っている</strong>
              計算になります。全出生数の<strong>10.1%</strong>です。当たり前のことが、これだけの量として現れている。
            </p>
            <p>
              なお、この傾向自体は新発見ではなく、厚生労働省が平成12年の時点で「病院では平日の出生数が休日の約1.4倍」と報告しています
              <sup>※2</sup>。四半世紀後のいまも、同じことが起きているようです。
            </p>

            <h3 style={{ marginTop: "2.6rem", marginBottom: "0.2rem", fontSize: "1.12rem", fontWeight: 800, lineHeight: 1.5 }}>
              年末年始だけ、6日つづけて沈みます
            </h3>

            <figure className="fig rv">
              <div className="hd">
                <div className="ttl">1年365日の出生数（2015〜2024年の平均）</div>
                <div className="src n">n=3,653日</div>
              </div>
              {/* `.cal` は Cal 側が持つ。読み取り欄をマスの真下に出すため */}
              <Cal>
                <CalendarHeat />
              </Cal>
              <div className="ramp">
                <span>少ない</span>
                <span className="sw">
                  <i style={{ background: "var(--ramp-1)" }} />
                  <i style={{ background: "var(--ramp-2)" }} />
                  <i style={{ background: "var(--ramp-3)" }} />
                  <i style={{ background: "var(--ramp-4)" }} />
                  <i style={{ background: "var(--ramp-5)" }} />
                </span>
                <span>多い</span>
              </div>
              {/* ⚠️ 下書きの figcaption は「年末年始に横一列」「4月1日に縦の筋」と
                  書いていたが、この配置（行＝月・列＝日）では**どちらも存在しない形**。
                  沈んでいる年末年始は12/29〜1/3の6日で、図では対角の隅2箇所に分かれる。
                  4/1は1マスだけ（1日の月をまたいだ平均は99.5%で筋にならない）。
                  図に無い形を探させないよう、見えるとおりに書き直している。 */}
              <figcaption>
                <strong>12月の右端と1月の左端が、続けて沈んでいます。</strong>
                年をまたぐ6日間（12/29〜1/3）が、この並べ方だと図の両端に分かれて出ます。
                <strong>4月1日のマスも1つだけ沈んでいます。</strong>
                どちらも祝日でも土日でもありません。
                縦の並びが月、横が日。濃淡は5段階（等頻度）。マスに触れると、その日の数字が図の下に出ます。
              </figcaption>
            </figure>

            <p>
              日付別に並べると、いちばん少ないのは
              <strong>1月1日（全日付平均の63.1%）</strong>でした。12月31日、1月2日、1月3日も同じように沈んでいます。
            </p>
            <p>
              面白いのはその後、1月5日が120.5%で、1年で最多の日になります。
            </p>
            <p>
              押し込められた分が、明けた瞬間に戻ってきている。生まれる日が動いている証拠が、いちばんはっきり見えるのがここ。
            </p>
            <p>
              比較として、お盆を見てみます。8月13日から15日は95〜97%で、
              <strong>ほとんど凹んでいません。</strong>医療機関はお盆に閉まらないからです。
            </p>
            <p>
              <strong>カレンダーの赤い日だけが凹んでいる。</strong>そう言い換えられます。
            </p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">一晩の段差</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">4月1日の夜にある、38%の段差</h2>
            </div>
            <p>
              もう一つ、祝日でも土日でもないのに沈んでいる日があります。
              <strong>4月1日</strong>です。
            </p>

            <figure className="fig rv">
              <div className="hd">
                <div className="ttl">3月30日から4月3日まで</div>
                <div className="src n">全日付平均を100%</div>
              </div>
              <AprilBars />
              <div className="hero">
                <span className="v n">
                  +38.4<small>%</small>
                </span>
                <span className="cap">
                  4月1日から4月2日への増加。4月1日生まれは法律上ひとつ上の学年になる。
                </span>
              </div>
              <figcaption>
                祝日でも土日でもない一晩に、これだけの段差がある。
              </figcaption>
            </figure>

            <p>理由は、法律です。文部科学省が公式に説明しています<sup>※3</sup>。</p>
            <p>
              年齢は「<strong>年齢計算ニ関スル法律</strong>」と
              「<strong>民法第143条</strong>」により、
              <strong>誕生日の前日が終わる時に</strong>
              ひとつ加算されます。4月1日生まれの子は、3月31日の終わりに満6歳になる。
            </p>
            <p>
              そして学校教育法第17条は、就学を
              「<strong>満6歳に達した日の翌日以後における最初の学年の初め</strong>から」と定めています。学年は同施行規則第59条で「4月1日に始まり、翌年3月31日に終わる」。
            </p>
            <p>
              結果として、
              <strong>4月1日生まれの子は、4月2日生まれの子より1年早く小学校に入ります。</strong>
              同じ学年のなかで最も幼く、いわゆる「早生まれ」の極みになる。
            </p>
            <p>その差が、出生数に出ていました。</p>
            <p>
              沈んでいるのは4月1日だけではありません。3月26日から30日は<strong>92%台</strong>
              、3月31日は<strong>84.8%</strong>で、月末にかけて少しずつ下がっていきます
              （3月1日〜25日の平均は96.7%）。学年の区切りは4月2日なので、
              <strong>3月末に生まれた子も、4月1日生まれと同じ学年に入ります。</strong>
              段差は一晩でできたのではなく、数日かけて下がりきった先にありました。
            </p>
            <p>
              <strong>産む日を1日ずらせるなら、ずらす。</strong>
              そういう判断が、10年分・数万件の規模で積み重なると、統計に段差として現れる。誰かが号令をかけたわけでもないのに。
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">おわりに</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">願いではなく、制度と営業日でした</h2>
            </div>
            <p>
              縁起を担ぐ気持ちは、多くの人にあるでしょう。でもデータに出てきたのは1%未満でした。
            </p>
            <p>
              代わりにくっきり出たのは、<strong>病院が開いているかどうか</strong>と、
              <strong>その子が何年生になるか</strong>でした。願いではなく、制度と営業日です。
            </p>

            <h3 style={{ marginTop: "2.6rem", marginBottom: "0.2rem", fontSize: "1.12rem", fontWeight: 800, lineHeight: 1.5 }}>
              そもそも、選べる話なのか
            </h3>
            <p>書き終えてから、ひとつ思いました。</p>
            <p>
              <strong>この記事は「日を選べる」という前提で始めてしまっています。</strong>
              大安に寄せたい人がいるはずだ、と考えたところから調べ始めているので。
            </p>
            <p>
              でも、その前提が成り立たない人は少なくありません。2023年に日本で生まれた子のうち、
              <strong>生殖補助医療によって生まれたのは85,048人</strong>でした
              <sup>※4</sup>。同じ年の出生数で割ると、<strong>8.6人に1人</strong>です。
            </p>
            <p>
              治療を続けて、願い、ようやく授かった人にとって、何曜日か、大安かどうか、という話は、たぶん最初から視野の外にあるんだと思います。無事に生まれてくれるかどうかの前では、日取りは順位がつかないほど後ろにある。
            </p>
            <p>
              「選べる」という前提のほうが、限られた場面の話なのだと、逆に学ばせてもらった機会となりました。
            </p>

            <div className="closing rv">
              <p className="q">
                自分が生まれた日を、自分では選べません。それは当たり前です。
                <br />
                ただ、選んだのが親でもなかった。
              </p>
              <p>
                私たちの誕生日は、けっこうな部分をカレンダーと法律に決められている。
                そして多くの場合、そもそも誰も選んでいないのかもしれません。
                <br />
                <br />
                数字はすべて公開データから直接集計しています。間違いを見つけたら教えていただけるとありがたいです（
                <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
                ）。直します。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 厚生労働省「人口動態調査 人口動態統計 確定数 保管統計表（報告書非掲載表）出生7
                出生数，出生の場所・出生月・出生日・出生時別」（e-Stat・statsDataId 0003411915）2015〜2024年。
                本記事の数値は、この表からAPIで取得した生データを独自に集計したものです。
                日別の積み上げが表の「総数」と10年すべて一致することを確認しています。
              </li>
              <li>
                ※2 厚生労働省「人口動態統計特殊報告 出生に関する統計」（7）出生曜日・時間別にみた出生。
                平成12年時点の分析。
              </li>
              <li>
                ※3 文部科学省「4月1日生まれの児童生徒の学年について」。
                学校教育法第17条第1項、学校教育法施行規則第59条、年齢計算ニ関スル法律、民法第143条。
              </li>
              <li>
                ※4 日本産科婦人科学会「2023年 体外受精・胚移植等の臨床実施成績」。
                出生児数は IVF 1,772人＋ICSI 2,502人＋FET（凍結融解胚移植）80,774人＝
                <b>85,048人</b>として集計しました。分母の出生数（727,288人）は※1と同じ表から取っているため、
                727,288 ÷ 85,048 で<b>8.55人に1人</b>。
                一般に「8.6人に1人」と紹介されている数字と一致しますが、
                <b>分母の取り方によって小数第1位は動きます</b>（同じ2023年でも727,277人とする資料があります）。
              </li>
              <li>
                <b>六曜について</b>：旧暦の（月＋日）を6で割った余りから機械的に決まります。
                旧暦の変換にはライブラリを用いたため、日本の天保暦とずれる可能性を考え、
                外部カレンダー61日分（旧暦正月と閏月の切り替わりを含む）と照合して全一致を確認しました。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ 本記事の数値は2015〜2024年の実測値です。
            <br />※ タイトルの<b>「決めていた」は、偏りの原因をそう読んだ筆者の解釈です。</b>
            データが示しているのは偏りの存在までで、因果を測定したものではありません。
            <br />※ 2月29日は10年間で3回しかないため、他の日付と同列には扱っていません（参考値：83.9%）。
            <br />※ 祝日は日付が固定のもののみを集計対象としています。春分・秋分やハッピーマンデーは
            年によって日付が動くため、ふつうの平日に含まれています。したがって
            <b>祝日の落ち込みは、実際にはもう少し大きい可能性があります。</b>
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
