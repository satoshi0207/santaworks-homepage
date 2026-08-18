import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import "../dash.css";
import Byline from "../Byline";
import { eyebrowOf } from "../posts";
import { Fig01, Fig02, Fig03, Fig04 } from "./figures";

export const metadata: Metadata = {
  title: "「3年は続けろ」の3年を、国も数えていました",
  description:
    "大卒の3年以内離職率は33.6%（1996年3月卒）から33.8%（2022年3月卒）で、30年ほとんど動いていません。動いていたのは辞める時期のほうでした。厚生労働省の統計を一次資料から数えた記録です。",
  alternates: { canonical: "/journal/three-years/" },
  openGraph: {
    type: "article",
    title: "「3年は続けろ」の3年を、国も数えていました｜Santa Works Journal",
    description:
      "大卒の3年以内離職率は30年で0.2ポイントしか動いていません。変わったのは、辞める時期のほうでした。",
    url: "/journal/three-years/",
    images: ["/blog/three-years/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "「3年は続けろ」の3年を、国も数えていました｜Santa Works Journal",
    description:
      "「すぐ辞める」と言われますが、割合は30年変わっていませんでした。",
    images: ["/blog/three-years/ogp.png"],
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
                🔴 オフィス・スーツ・退職届の絵も使わない。辞めることに絵を付けると、
                   この記事が評価していないもの（辞めたかどうか）を
                   評価しているように見える。
                生成は pr/drafts/three-years-src/make_images.py。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/three-years/hero.webp)",
                      "--hero-sp": "url(/blog/three-years/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("three-years")}</span>
            <h1 className="title">
              「3年は続けろ」の3年を、
              <br />
              国も数えていました
            </h1>
            <p className="lede">
              国の統計に「<strong>3年以内離職率</strong>」というものがあります。
              大学を出て就職した人のうち、3年以内に辞めた人の割合です。
              いちばん新しい数字は<strong>33.8%</strong>。30年前は<strong>33.6%</strong>でした。
              30年ぶんを並べても、この数字は<strong>「3割」から出ていません。</strong>
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.18</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          {/* ⚠️ 3枚の並びが、そのまま記事の筋になっている。
              横ばい → 中身の入れ替わり → 数え方。
              🔴 「1年目は29年で最低（10.1%）」をここに置かない。**1年目だけの数字**で、
                 KPI は飛ばし読みされる場所なので、3年以内の話と混ざる。
                 §04 の後半が丸ごとこの数字の節で、断りもそこに全部ある。 */}
          <div className="kpi rv">
            <div className="tile on">
              <span className="lbl">大卒の3年以内離職率・30年の差</span>
              <span className="v">
                0.2<small>ポイント</small>
              </span>
              <span className="note">33.6% → 33.8%</span>
            </div>
            <div className="tile">
              <span className="lbl">離職した人のうち1年目に辞めた割合</span>
              <span className="v">
                41.7→35.5<small>%</small>
              </span>
              <span className="note">3年目は26.2→29.4%に増えました</span>
            </div>
            <div className="tile">
              {/* ⚠️ ここに「すべて」を `<small>` で割って入れると
                  「す」＋小さい「べて」になる（v は数字のための枠）。**割らない。** */}
              <span className="lbl">「離職」の理由による区別は</span>
              <span className="v">なし</span>
              <span className="note">転職も家庭の事情も会社都合も同じ1件</span>
            </div>
          </div>

          <div className="points rv">
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  <strong>3年以内離職率は30年ほぼ同じ。</strong>
                  大卒で0.2ポイントしか動いていません。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  <strong>動いたのは、辞める時期のほう。</strong>
                  1年目が減り、3年目が増えています。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  <strong>「離職」に理由は入っていません。</strong>
                  雇用保険の記録を数えたものです。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、言われたことから</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">「3年は続けろ」と言われた</h2>
            </div>
            <p>
              新入社員のころ、親に「3年は最低続けろ」と言われました。
              当時、そういうものだと思っていたしフレッシュな気持ちもありました。
              楽しかったし、我慢もしたし、社会というものを少し学んだように記憶しています。
            </p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">同じ「3年」が、統計にもある</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">三割は、30年前から三割でした</h2>
            </div>

            <Fig01 />

            <p>
              厚生労働省が毎年、新規学卒就職者の離職状況を公表しています
              <sup>※1</sup>。大学を出て就職した人のうち、3年以内に辞めた人が何%か。
              いちばん新しい数字は<strong>33.8%</strong>（2022年3月に卒業した人）でした。
            </p>
            <p>
              30年前、1996年3月に卒業した人は<strong>33.6%</strong>。
              <strong>差は0.2ポイントです。</strong>
              あいだの27年も、いちばん低い年で28.8%、高い年で36.6%。
              上下はしていますが、<strong>「3割」から出ていません。</strong>
            </p>
            <p>増えてはいない、ということです。</p>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">学歴で分けてみる</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">動いたのは、中卒と高卒だけでした</h2>
            </div>

            <Fig02 />

            <p>
              4つの学歴を、30年前と並べてみます。
              中学卒<strong>71.0% → 54.1%</strong>、高校卒<strong>48.1% → 37.9%</strong>、
              短大等卒<strong>41.2% → 44.5%</strong>、大学卒<strong>33.6% → 33.8%</strong>。
            </p>
            <p>
              <strong>下がったのは、中卒と高卒だけです。</strong>
              大卒は動いていません。短大等は、少し上がっています。
              30年で3割ほど下がった学歴と、まったく動かない学歴が、同じ表に並んでいます。
            </p>
            <p>
              {/* 🔴 この段落を落とさない。54.1%だけ出すと誤読させる（下書き29〜31）。 */}
              ただ、中卒の54.1%は<strong>675人のうち365人</strong>の話です。
              30年前は7,472人が就職していました。<strong>母数が9割減っています。</strong>
              率だけを並べると、<strong>大きな集団のことのように見えてしまいます。</strong>
            </p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">転調 ── 合計の中身を開く</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">辞める人は増えていなくて、辞める時期が動いていました</h2>
            </div>

            <Fig03 />

            <p>
              合計が動いていないなら、中身も動いていないのか。
              <strong>そうではありません。</strong>
              3年以内に辞めた人を100として、何年目に辞めたかを見ます。
            </p>
            <p>
              大卒。30年前は<strong>1年目が41.7%、3年目が26.2%</strong>でした。
              直近は<strong>1年目が35.5%、3年目が29.4%</strong>。
              <strong>1年目が減って、3年目が増えています。</strong>
              高卒も同じ向きでした（1年目 50.9 → 45.4／3年目 19.5 → 23.5）。
              2つの学歴がそろって同じ向きに動いているので、
              <strong>その年だけの揺れではなさそうです。</strong>
            </p>
            <p>
              <strong>辞める人は増えていない。辞める時期が、後ろにずれている。</strong>
            </p>
            <p>
              {/* 🔴 この段落を落とさない。この記事でいちばん滑りやすいところ。 */}
              「3年は続けろ」と言われるから3年目に寄った——と書きたくなりますが、
              <strong>それは言えません。</strong>
              景気も、転職のしやすさも、育てる側の事情も、この30年で動いています。
            </p>

            {/* 🔴 FIG 04 は FIG 01 と並べない。3年以内（2022年3月卒まで）と
                1年目（2024年3月卒まで）で、数え終わっている範囲が違う。
                同じ節でも、あいだに本文を挟んで別の図として置く。 */}
            <Fig04 />

            <p>
              ここまでは、3年ぶん数え終わった人たちの話です。
              まだ3年経っていない人たちも、<strong>1年目だけなら数え終わっています</strong>
              <sup>※3</sup>。
              2024年3月に卒業した大卒の1年目は、<strong>10.1%</strong>。
              <strong>1996年以降で、いちばん低い数字です。</strong>
            </p>
            <p>
              ⚠️ ここで言えるのは<b>1年目だけ</b>です。2023年・2024年3月卒はまだ3年経っていないので、
              <b>3年以内離職率が下がった、とは書けません。</b>
              また、これは<b>大卒の話</b>で、高卒の1年目（16.6%）は最低ではありません
              （最低は2020年3月卒の15.1%）。
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">転調 ── 数え方を読む</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">この数字の「辞めた」には、理由が入っていません</h2>
            </div>
            <p>
              ここまで「辞めた」と書いてきました。
              けれど、この統計の「離職」はこう定義されています
              <sup>※2</sup>。
            </p>
            {/* ⚠️ **`blockquote` を使わない。**journal.css にスタイルが無く、
                地の文と見分けがつかなくなる（rikon で 2026-08-07 に見つかっている）。
                資料の引用は DV・離婚の記事と同じ `.pull` を使う。 */}
            <div className="pull rv">
              <p className="q">
                離職理由や離職後の就業の状態に<em>関わらず</em>
                離職者として算出している
              </p>
              <p className="sub">
                厚生労働省「資料出所及び離職率の集計の考え方」
              </p>
            </div>
            <p>
              <strong>転職も、家庭の事情も、会社都合も、同じ1件です。</strong>
              「辞めた」は、「続かなかった」ではありません。
            </p>
            <p>
              そもそもこれは調査ではなく、<strong>雇用保険の加入と離職の記録</strong>です。
              新卒かどうかも、生年月日と加入した時期からの<strong>推定</strong>。
              本人には聞いていません。雇用保険に入らなかった人は、はじめから入っていません。
            </p>
            <p>
              数え方が雑なのではありません。行政の記録なのだから、そうなります。
              知らずに読むほうの問題です。
              <strong>
                私はずっと、この数字を「続かなかった人の割合」だと思って見ていました。
              </strong>
            </p>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">3年の外側</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">3年で切ると、その先が見えない</h2>
            </div>
            <p>
              <strong>4年目に辞めた人は、この数字に入りません。</strong>
              「3年以内」の外に出てしまえば、統計のうえでは<strong>辞めなかった人</strong>です。
            </p>
            <p>
              私はそこにいます。
              でもその欄は、
              <strong>3年と1か月で辞めた人と、定年まで勤めた人と、私を、区別していません。</strong>
            </p>
          </section>

          <section className="blk">
            <div className="h2">
              <h2 className="tt">おわりに</h2>
            </div>
            <p>
              「3年は続けろ」と言われた3年と、国が数えている3年は、同じところにあります。
              でも、測っているものが違いました。
              片方は、続けられたかどうか。もう片方は、いつ辞めたか。
            </p>
            <p>
              <strong>同じ線に見えて、別のものを分けていました。</strong>
            </p>
            <p>
              この記事の数字は、すべて出典の一次資料から直接転記、
              または公開されている表から計算し直したものです。
              間違いを見つけたら教えていただけるとありがたいです（
              <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
              ）。直します。
            </p>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 厚生労働省「新規学卒就職者の離職状況（令和4年3月卒業者）」
                令和7年10月24日公表。数値は同資料の表
                「新規学校卒業就職者の在職期間別離職状況」から、
                就職者数と離職者数をもとに計算し直しています。
                対象は平成8年3月卒から令和4年3月卒までの27年ぶん、
                学歴は中学・高校・短大等・大学の4区分です。
              </li>
              <li>
                ※2 同「資料出所及び離職率の集計の考え方」。
                事業所からハローワークに提出された雇用保険の加入届をもとに、
                生年月日・加入日・資格取得理由から
                <b>新規学卒者と推定される就職者数</b>を算出し、
                その離職日から離職者数・離職率を出しています。
                離職者は<b>離職理由や離職後の就業の状態に関わらず</b>算出されます。
              </li>
              <li>
                ※3 「1年目」は日付で決まる区間（卒業年3月1日〜翌年3月31日）で、
                観測はどの期も区間の終わりから3か月後（6月時点）です。
                前年の公表版（令和6年10月25日）と突き合わせたところ、
                <b>3年ぶん数え終わった期の数値は1つも変わっておらず</b>、
                同じ熟度どうしの改定は<b>0.1ポイント</b>でした
                （2023年3月卒 10.9% → 11.0%）。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ <b>3年以内離職率が数え終わっているのは2022年3月卒までです。</b>
            2023年・2024年3月卒はまだ3年経っていません。
            <br />※ FIG 04は<b>1年目だけ</b>の数字で、FIG 01（3年以内）とは
            数え終わっている範囲が違います。<b>並べて1本の線として読めません。</b>
            <br />※ 中学卒の就職者は30年で7,472人から675人に減っています。
            <b>54.1%は675人のうち365人</b>の話で、ほかの3つと同じようには読めません。
            <br />※ この統計の「離職」に<b>理由は入っていません。</b>
            転職も、家庭の事情も、会社都合も同じ1件として数えられています。
            <br />※ 分母は<b>雇用保険に加入した人</b>だけです。
            就職しなかった人や、加入しない働き方は入っていません。
            <br />※ <b>辞める時期が後ろにずれた理由は書いていません。</b>
            この資料からは分からないためです。
            <br />※ 事業所規模別・産業別の数字は、この記事では扱っていません。
            差の大きい項目ですが、<b>原因の説明にはならない</b>ためです。
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
