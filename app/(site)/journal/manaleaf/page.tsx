import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import "../dash.css";
import Byline from "../Byline";
import { eyebrowOf } from "../posts";
import { Fig01, Fig02, Fig03 } from "./figures";

// 下書き・判断の記録は pr/drafts/manaleaf.md（1文ずつ番号あり）。
// 数字は pr/drafts/manaleaf-src/data.json だけが真実源。検算は verify.py。
//
// 🔴 **娘さんの気持ちを書かない。**「楽しんでいる」「喜んでいる」は本人にしか分からない。
//    書いてよいのは、親から見えたこと（ノリよく乗ってきた・定期的に開いている）まで。
// 🔴 **娘さんの言葉を「」に入れない。**「」に入っているのは Satoshiさん自身の言葉だけ。
// 🔴 **ゲームの実名を出さない。**「某人気どうぶつゲーム」（2026-09-26・Satoshiさん）。
//    本文・alt・aria-label・X の告知すべてで同じ。

export const metadata: Metadata = {
  title: "「一緒にゲーム作ってみる？」から、はじまりました",
  description:
    "小学3年生の娘に「パパと一緒にゲーム作ってみる？」と聞いたところから、学習クイズアプリをつくりました。どうぶつは娘が馴染んでいたものにし、文字だけでは伝わりにくい問題は絵にしました。こども家庭庁の調査では、スマートフォンを親と一緒に使うほうが多いのは9歳までです。",
  alternates: { canonical: "/journal/manaleaf/" },
  openGraph: {
    type: "article",
    title: "「一緒にゲーム作ってみる？」から、はじまりました｜Santa Works Journal",
    description:
      "小学3年生の娘と一緒に、学習クイズアプリをつくった話です。",
    url: "/journal/manaleaf/",
    images: ["/blog/manaleaf/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "「一緒にゲーム作ってみる？」から、はじまりました｜Santa Works Journal",
    description:
      "小学3年生の娘と一緒に、学習クイズアプリをつくった話です。",
    images: ["/blog/manaleaf/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal dash pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* 絵はアプリのホーム画面から、どうぶつ5匹の並びだけを切り出したもの。
                🔴 ロゴ（アプリ名）は切り出さない。題名にアプリ名を入れないのと同じ理由。
                🔴 人・人型・顔を使わない（全社ガードレール⑤）。娘さんも写さない。
                生成は pr/drafts/manaleaf-src/make_images.py。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/manaleaf/hero.webp)",
                      "--hero-sp": "url(/blog/manaleaf/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("manaleaf")}</span>
            <h1 className="title">
              「一緒にゲーム作ってみる？」
              <br />
              から、はじまりました
            </h1>
            <p className="lede">
              小学3年生の娘と、学習クイズのアプリをつくりました。
              きっかけは、ゲームをつくろうという誘いでした。
              どうぶつは娘が知っている顔にして、問題は隣で解いてもらいながら、
              <strong>文字だけで伝わらないものを絵にしていきました。</strong>
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.09.26</span>
              <span className="dot" />
              <span>読了 約4分</span>
              <span className="dot" />
              <span>つくった理由 / 出典つき</span>
            </div>
          </div>

          <div className="points rv">
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  <strong>はじまりは「一緒にゲーム作ってみる？」。</strong>
                  娘は、ノリよく乗ってきました。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  <strong>どうぶつも絵も、娘に合わせました。</strong>
                  知っている顔にして、文字だけの問題は絵にしています。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  <strong>隣に座れる時期には、終わりがあります。</strong>
                  スマホを親と一緒に使うほうが多いのは、9歳まででした。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">きっかけ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">娘が、私のスマホを見に来る</h2>
            </div>
            <p>
              娘は小学3年生です。
              出かけているときや、家でやることがないとき、私のスマートフォンを見に来ます。
            </p>
            <p>どうせ見るなら、見せるものを自分で選びたいと思いました。</p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">はじまり</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">「パパと一緒にゲーム作ってみる？」</h2>
            </div>
            {/* 🔴 「」の中は Satoshiさん本人の言葉。娘さんの返事は「」に入れない。 */}
            <p>
              あるとき、「パパと一緒にゲーム作ってみる？」と聞いてみました。
              娘は、ノリよく乗ってきました。
              ゲームと言って始めたものが、いまの学習クイズになっています。
            </p>
            <p>
              <strong>私が組んで、娘に見せて、聞く。</strong>
              その繰り返しでした。
            </p>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">キャラクター</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">どうぶつにしたのは、娘が知っていたから</h2>
            </div>

            <Fig01 />

            <p>
              画面に出てくるキャラクターは、どうぶつにしました。
              娘は某人気どうぶつゲームを遊んでいたので、どうぶつのキャラクターには馴染みがありました。
              知らない顔より、知っている顔のほうが、開いてもらえると思ったからです。
            </p>
            <p>どのどうぶつが好きかは、隣で聞きながら決めました。</p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">問題</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">文字だけでは、伝わらなかった</h2>
            </div>
            <p>
              問題は私がつくって、隣で娘に解いてもらいました。
              解いてもらうと、
              <strong>文字だけでは伝わりにくい問題がある</strong>
              ことが分かりました。
            </p>

            <Fig02 />

            <p>
              そういう問題は、できるだけ絵にしました。
              <strong>読んで分かる前に、見て分かるように。</strong>
            </p>
            <p>
              さんすう・こくご・りか・しゃかいの4教科で、44単元、1,125問になりました。
              小3で習う漢字200字も入れています。
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">転調 ── 国の調査を見る</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">一緒に見られる時期のこと</h2>
            </div>
            <p>
              つくっている途中で、国の調査を見ました。
              こども家庭庁が、子どものインターネット利用を毎年調べています
              <sup>※1</sup>。
              スマートフォンを、子ども専用で使っているか、親と一緒に使っているか。
              年齢ごとの表がありました。
            </p>

            <Fig03 />

            <p>
              7歳では、親と一緒が<strong>76.5%</strong>。9歳で<strong>48.5%</strong>。
              10歳になると<strong>23.9%</strong>まで落ちて、かわりに「子ども専用」が
              <strong>65.7%</strong>になります。
            </p>
            <p>
              <strong>親と一緒に見ているほうが多いのは、9歳が最後でした。</strong>
              小学3年生は、その1年前です。
            </p>
            {/* 🔴 この段落を落とさない。割合のもとは「スマホでネットを使っている子ども」で、
                その年齢の子ども全員ではない（SOURCES.md の罠②）。 */}
            <p>
              ただし、この割合が数えているのは「スマートフォンを使っている子ども」の中での話です。
              その年齢の子ども全員が、スマートフォンを持っているという意味ではありません。
            </p>
            <p>
              隣に座って一緒につくるという時間そのものに、期限があったのだと、あとから思いました。
            </p>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">無料にした理由</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">小3は、無料にしました</h2>
            </div>
            <p>
              無料にしました。アプリ内課金も、広告もありません。
              アカウント登録もなく、学習の記録は端末の中だけに残ります。外に送っていません。
              アクセス解析も入れていないので、私にも、誰がどう使ったかは分かりません。
            </p>
            {/* 🔴 無料を「方針」として書かない。小4からは課金する予定（2026-09-09 表明）。
                「お金にはなりません」「ほかの家でも同じ」と書くと、小4が出たときに
                この記事が「無料で集めて次で取る」の入口に見える（2026-09-26 に削った）。
                書くのは小3の事実と、娘に渡す側の理由だけ。小4の予告もしない。 */}
            <p>
              <strong>どれも、娘に渡すときに何も気にしなくてよいものにしたかったからです。</strong>
            </p>
          </section>

          <section className="blk">
            <div className="h2">
              <h2 className="tt">おわりに</h2>
            </div>
            <p>
              この記事は、つくった本人が書いています。
              だから「いいアプリです」とは書きません。それは使う人が決めることです。
              書けるのは、つくった理由だけです。
            </p>
            <p>
              娘は、毎日ではありませんが、いまも定期的に開いています。
              ゲームを作ろうと言って始めたものが、そのまま娘の手元に残っています。
            </p>

            {/* 導線（案A）。🔴 バナー・製品カードにしない。すぐ上で「いいアプリですとは
                書きません」と書いているので、大きな箱を置くとその一文が嘘になる。
                🔴 utm を付けない。まなリーフの LP にはアクセス解析が無く、計測できない。
                ⚠️ .nb は journal.css。助詞が行頭に落ちるのを止める（短い見出しにだけ使う）。 */}
            <div className="closing rv">
              <p className="q">
                <span className="nb">「一緒にゲーム作ってみる？」</span>
                <span className="nb">から、はじまりました。</span>
              </p>
              <p>
                隣に座っていられるうちに、渡せるものを1つ持っておきたかった。それだけです。
                まなリーフ 小3は無料で、広告もアプリ内課金もありません。
                使ってみて「ここが分かりにくい」と思われたところがあれば、
                そう教えていただけると、いちばんありがたいです。
              </p>
              <div className="act">
                <a
                  href="https://apps.apple.com/jp/app/id6808348311"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="App Store でまなリーフ 小3 をダウンロード"
                >
                  {/* Apple 公式バッジ（Works と同じ素材）。⚠️ 最小表示高 40px を下回らせない */}
                  <img
                    className="badge"
                    src="/manaleaf/badge-appstore.svg"
                    alt="App Store でダウンロード"
                    width={109}
                    height={40}
                  />
                </a>
                <a
                  className="site"
                  href="https://manaleaf-grade3.santaworks.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  まなリーフの公式サイト →
                </a>
              </div>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 こども家庭庁「令和6年度 青少年のインターネット利用環境実態調査
                調査結果（概要）」2025年3月。数値は同資料の概要6
                「スマートフォンの専用率（年齢別）」から転記しています。{" "}
                <a href="https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/9a55b57d-cd9d-4cf6-8ed4-3da8efa12d63/0a26134c/20250328_policies_youth-kankyou_internet_research_results-etc_16.pdf">
                  cfa.go.jp（PDF）
                </a>
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ FIG 03 の割合のもとは、<b>スマートフォンでインターネットを利用していると回答した子ども</b>
            （9歳以下は、その保護者が回答）です。<b>その年齢の子ども全員ではありません。</b>
            <br />※ 8歳は79人、9歳は101人の回答です。人数が少ないので、
            <b>1ポイントほどの差は読まないでください。</b>
            <br />※ 年齢と学年は一致しません。小学3年生は、<b>おおむね8〜9歳</b>です。
            <br />※ 「兄弟・姉妹と共用」「その他」などの回答は、図と本文から除いています。
            <br />※ この記事の数字は、出典の一次資料から直接転記したものです。
            間違いを見つけたら教えていただけるとありがたいです（
            <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
            ）。直します。
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
