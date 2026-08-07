import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import "../dash.css";
import Byline from "../Byline";
import { eyebrowOf } from "../posts";
import { Fig01, Fig02, Fig03, Fig04, Fig05, Fig06, Fig07 } from "./figures";

export const metadata: Metadata = {
  title: "離婚の理由は不倫だと思っていたら、5番目でした",
  description:
    "不倫が原因の離婚は年に何件あるのか。探しても出てきませんでした。2024年の離婚185,904件のうち87.5%は協議離婚で、理由を書く欄がないからです。理由が残るのは家庭裁判所へ行った12.5%だけ。その申立ての動機を見ると、異性関係は妻から5番目・夫から3番目で、男女とも1位は「性格が合わない」でした。司法統計と人口動態調査から数えた記録です。",
  alternates: { canonical: "/journal/rikon/" },
  openGraph: {
    type: "article",
    title: "離婚の理由は不倫だと思っていたら、5番目でした｜Santa Works Journal",
    description:
      "理由が記録されているのは、話がつかずに裁判所へ行った12.5%だけでした。その中で異性関係は5番目。1位はずっと「性格が合わない」です。",
    url: "/journal/rikon/",
    images: ["/blog/rikon/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "離婚の理由は不倫だと思っていたら、5番目でした｜Santa Works Journal",
    description:
      "いちばん多く選ばれているのは、いちばん中身の分からない選択肢でした。",
    images: ["/blog/rikon/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal dash pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* 🔴 指輪・離婚届・カップル・背中合わせの人を使わない。
                離婚の記号を出すと、記事の終わりで決めた「代弁しない」を絵のほうで越える。
                🔴 人物・人型・顔も描かない（全社ガードレール⑤）。
                生成は pr/drafts/rikon-src/make_images.py。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/rikon/hero.webp)",
                      "--hero-sp": "url(/blog/rikon/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("rikon")}</span>
            <h1 className="title">
              離婚の理由は不倫だと思っていたら、5番目でした
            </h1>
            {/* ⚠️ **本文と同じ文を置かない。**最初の稿はリードと 01 で1文まるごと
                重なっていて、横断lintに拾われた（2026-08-07）。ここは要約であって、
                書き出しの写しではない。 */}
            <p className="lede">
              不倫が原因の離婚は、年に何件あるのか。探しても、その数字は出てきませんでした。
              日本の離婚の<strong>87.5%は協議離婚</strong>で、理由を書く欄がないからです。
              記録が残るのは、話がつかずに裁判所へ行った12.5%だけ。
              その中を数えてみたら、順番が思っていたのと違いました。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.07</span>
              <span className="dot" />
              <span>読了 約5分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          {/* ⚠️ 4枚の並びが、そのまま記事の筋になっている。
              全体の件数 → 理由が残らない9割弱 → 残りで数えた1位 → 不倫の位置。 */}
          <div className="kpi rv" data-fx data-num data-seq="120">
            <div className="tile">
              <span className="lbl">2024年の離婚</span>
              <span className="v n">
                185,904<small>件</small>
              </span>
              <span className="note">人口動態調査。前年より2,090件増えています</span>
            </div>
            <div className="tile">
              <span className="lbl">うち協議離婚</span>
              <span className="v n">
                87.5<small>%</small>
              </span>
              <span className="note">162,682件。理由を書く欄はありません</span>
            </div>
            <div className="tile">
              <span className="lbl">妻からの申立て・1位</span>
              <span className="v n">
                16,503<small>件</small>
              </span>
              <span className="note">「性格が合わない」。2位は12,461件です</span>
            </div>
            <div className="tile on">
              <span className="lbl">同じく「異性関係」は</span>
              <span className="v n">
                5,743<small>件</small>
              </span>
              <span className="note">5番目でした。夫からの申立てでは3番目です</span>
            </div>
          </div>

          <div className="points rv">
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  離婚の<strong>87.5%は協議離婚</strong>で、
                  理由はどこにも記録されていません。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  裁判所へ行った人の申立てでは、
                  <strong>異性関係は妻から5番目・夫から3番目</strong>でした。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  男女とも1位は<strong>「性格が合わない」</strong>。
                  取れた4年ぶん、順位は動きませんでした。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">はじまりは、ただの疑問でした</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">何件なんだろう、と思った</h2>
            </div>

            <p>
              不倫が原因の離婚は、年に何件あるんだろう。
              ふと気になって、調べはじめました。
            </p>
            <p>
              世の中の話題としてはよく見かけるので、
              数字くらいはすぐ出てくると思っていました。
            </p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">聞かれていない9割弱</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">そもそも、ほとんど聞かれていません</h2>
            </div>

            <Fig01 />

            <p>
              2024年の離婚は<strong>185,904件</strong>。
              そのうち<strong>162,682件、87.5%が協議離婚</strong>です<sup>※1</sup>。
            </p>
            <p>
              夫婦で話がついて、役所に紙を出して終わり。
              <strong>理由を書く欄はありません。</strong>
            </p>
            <p>
              理由が記録されているのは、話がつかずに家庭裁判所へ行った、
              残りの<strong>12.5%</strong>だけです。
            </p>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">読み方の注意が、先に要ります</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">数えているのは、裁判所です</h2>
            </div>

            <p>
              その12.5%のほうには、統計があります。
              最高裁判所が毎年出している司法統計の、第19表。
              「婚姻関係事件数―申立ての動機別」という表で、
              <strong>申し立てた人が何を理由に挙げたか</strong>
              が13の項目で数えられています<sup>※2</sup>。
            </p>
            <p>ひとつ、読み方の注意があります。</p>
            <blockquote className="quote">
              <p>
                （注）申立ての動機は、申立人の言う動機のうち主なものを
                <b>３個まで</b>挙げる方法で調査<b>重複集計</b>した。
              </p>
              <cite>司法統計年報 家事編 第19表</cite>
            </blockquote>
            <p>
              <strong>1人が3つまで選べるので、足しても人数にはなりません。</strong>
            </p>

            <Fig02 />

            <p>
              なので以下は「何人が離婚したか」ではなく、
              <strong>「どの言葉が何回選ばれたか」</strong>の数です。
            </p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">順番を見てみる</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">不倫は、5番目でした</h2>
            </div>

            <Fig03 />

            <p>
              2024年、妻から申し立てた人は 43,033人。
              多い順に、性格が合わない<strong>16,503</strong>、
              生活費を渡さない<strong>12,461</strong>、
              精神的に虐待する<strong>11,288</strong>、
              暴力を振るう<strong>7,690</strong>。
            </p>
            <p>
              <strong>異性関係は5番目で、5,743</strong>でした。
            </p>

            <Fig04 />

            <p>
              夫から申し立てた人は 15,396人で、こちらは順番が少し違います。
              性格が合わない<strong>9,233</strong>、
              精神的に虐待する<strong>3,358</strong>、そして
              <strong>異性関係が3番目で1,820</strong>。
            </p>
            <p>
              男女どちらから見ても、
              <strong>いちばん多いのは「性格が合わない」でした。</strong>
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">差のほうが、驚きでした</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">差が、思っていたより大きい</h2>
            </div>

            <Fig05 />

            <p>順番が違うだけなら、まだ分かります。差が大きい。</p>
            <p>
              夫の場合、15,396人のうち 9,233人ですから、
              <strong>申し立てた人の6割</strong>が選んでいます。
              2番目の「精神的に虐待する」が 3,358なので、
              <strong>3倍近い開き</strong>。
              妻のほうも、1位の16,503に対して2位が12,461です。
            </p>

            <Fig06 />

            <p>
              これは2024年だけの話ではありませんでした。
              <strong>2021年から2024年まで、4年とも、男女とも1位は「性格が合わない」です。</strong>
              異性関係は、妻からの申立てでは4年とも5番目でした<sup>※3</sup>。
            </p>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">選択肢そのものを見る</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">では、「性格が合わない」とは何なのか</h2>
            </div>

            <Fig07 />

            <p>
              ここで手が止まりました。
              選択肢を並べてみると、他の12個はどれも、
              何が起きたのかが分かる言葉です。
            </p>
            <p>
              暴力を振るう。酒を飲み過ぎる。生活費を渡さない。家庭を捨てて省みない。
              読めば、その家で何があったのか、だいたい想像がつきます。
            </p>
            <p>
              <strong>「性格が合わない」だけ、何も分かりません。</strong>
              何があったのかは書かれていなくて、
              <b>合わなかった、という結果だけ</b>があります。
              そして、いちばん多く選ばれているのが、これです。
            </p>
            <p>
              自分のことを考えました。
              私も、アンケートで理由を聞かれて、
              <strong>本当のことを書きたくないとき</strong>があります。
              そういうとき、嘘は書かないけれど、
              <b>いちばん角の立たない、いちばん広い選択肢</b>を選びます。
              間違ってはいないので。
            </p>
          </section>

          {/* 07 */}
          <section className="blk">
            <span className="kicker">数えられているもの</span>
            <div className="h2">
              <span className="idx">07</span>
              <h2 className="tt">理由ではなく、言わないための言葉</h2>
            </div>

            <p>
              統計に出ているのは、<strong>その人に起きたこと</strong>ではありません。
              <strong>その人が選んだ言葉</strong>です。
            </p>
            <p>
              「性格が合わない」は、理由ではなくて、
              <strong>理由を言わないための言葉</strong>なのかもしれません。
              だとすると、いちばん多く選ばれているのは、当たり前のことになります。
            </p>
            <p>不倫の数字が見つからなかったのも、たぶん同じ理由です。</p>
          </section>

          <div className="notes">
            <ol>
              <li>
                ※1 厚生労働省「人口動態調査」上巻 離婚の種類別にみた年次別離婚件数及び百分率
                （2024年）。e-Stat の統計表 ID 0003411863 から取得しました。
              </li>
              <li>
                ※2 最高裁判所「司法統計年報 3 家事編」令和6年 第19表
                「婚姻関係事件数―申立ての動機別申立人別―全家庭裁判所」。
              </li>
              <li>
                ※3 同 令和3年〜令和6年。
                <b>2020年以前は年報の本体が公開されていない</b>ため、
                遡れたのは4年ぶんです。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ 申立ての動機は<b>1人につき3個まで</b>挙げる重複集計です。
            項目を足しても人数にはならず、割合の合計も100%を超えます。
            <br />※ これは<b>婚姻関係事件の申立て</b>の数であって、
            離婚が成立した件数ではありません。申し立てたあとに取り下げた人も含みます。
            <br />※ 順位を出すとき、<b>「その他」と「不詳」は外しました</b>。
            理由の名前ではないためです。
            <br />※ 協議離婚に理由が記録されないことを、制度の欠陥として書いてはいません。
            離婚届は理由を届け出る書類ではない、というだけの話です。
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
