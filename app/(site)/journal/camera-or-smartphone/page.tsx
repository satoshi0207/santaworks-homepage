import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import { IndexPc, IndexSp, TypesPc, TypesSp, MinePc, MineSp, Undated } from "./figures";
import "../journal.css";

export const metadata: Metadata = {
  title: "台数は9割減って、金額は横ばいでした",
  description:
    "デジタルカメラの出荷台数は2010年のピークから92.2%減りました。ところが金額は直近10年でほとんど動いていません。消えたのは「カメラ」ではなく「みんなのカメラ」でした。CIPAの出荷統計23年ぶんを一次資料から整理しています。",
  alternates: { canonical: "/journal/camera-or-smartphone/" },
  openGraph: {
    type: "article",
    title: "台数は9割減って、金額は横ばいでした｜Santa Works Journal",
    description:
      "デジタルカメラの出荷台数は2010年から92.2%減。ところが金額は直近10年でほぼ横ばいでした。消えたのは「カメラ」ではなく「みんなのカメラ」だった、という話です。",
    url: "/journal/camera-or-smartphone/",
  },
  twitter: {
    card: "summary_large_image",
    title: "台数は9割減って、金額は横ばいでした｜Santa Works Journal",
    description:
      "デジタルカメラの出荷台数は2010年から92.2%減。金額は直近10年でほぼ横ばい。数え方を変えると結論が反対になります。",
  },
};

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* 写真ヒーロー。事故や病を扱う記事ではないので、盆記事と違って写真を使う。
                ⚠️ 人物の顔が写る素材は使わない（全社ガードレール⑤）。
                画像は CSS変数で渡す。モバイル（16/10）では --hero-sp に差し替わる。
                ファイルを置くまでは下のグラデーションが出るので、壊れ画像にはならない。 */}
            <figure className="herofig rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/camera-or-smartphone/hero.webp)",
                      "--hero-sp": "url(/blog/camera-or-smartphone/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
                <span className="chip">CIPA 2003 → 2025</span>
                <div className="ph-t">総出荷台数　1億2,146万台 → 944万台</div>
              </div>
            </figure>
            <span className="eyebrow">写真 / 公開データの整理</span>
            <h1 className="title">
              台数は9割減って、
              <br />
              金額は横ばいでした。
            </h1>
            <p className="lede">
              旅行に出るとき、<strong>スマホとカメラを両方持っていきます</strong>。
              そして毎回、帰ってきてから同じことで困ります。同じ日の写真が、2箇所に分かれている。
              どちらで撮っているんだろうと思って、
              カメラ映像機器工業会が毎年出している出荷統計を、2003年から2025年まで全部開いてみました。
              <strong>思っていたのと違う絵が出ました。</strong>
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.XX</span>
              <span className="dot" />
              <span>読了 約7分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          <div className="duel rv">
            <div className="side">
              <div className="big">
                1.21<small>億台</small>
              </div>
              <div className="lab">
                <b>2010年</b>
                <br />
                台数のピーク
              </div>
            </div>
            <div className="vs">→</div>
            <div className="side b">
              <div className="big">
                944<small>万台</small>
              </div>
              <div className="lab">
                <b>2025年</b>
                <br />
                15年で 92.2%減
              </div>
            </div>
          </div>
          <p className="duel-cap">
            デジタルカメラの総出荷台数（世界全体）<sup>※1</sup>
          </p>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  出荷台数は2010年の1億2,146万台から2025年の944万台へ。
                  <strong>92.2%減</strong>。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  ところが<strong>金額はほとんど減っていません</strong>。直近10年で見ると、
                  <strong>台数は73.3%減ったのに、金額は0.6%しか減っていない</strong>。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  消えたのは「カメラ」ではなく<strong>「みんなのカメラ」</strong>でした。
                  レンズ一体型は<strong>97.8%減</strong>。
                </span>
              </li>
              <li>
                <span className="n">04</span>
                <span className="tx">
                  そして自分の写真を数えたら、
                  <strong>6枚に1枚が「いつ撮ったのか分からない」写真</strong>でした。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、大きさ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">崖</h2>
            </div>
            <p>
              カメラ映像機器工業会（CIPA）が毎年「デジタルカメラ生産出荷実績表」という資料を出しています
              <sup>※1</sup>。2003年から2025年まで、23年ぶんが1年ずつPDFで公開されています。全部落として、並べました。
            </p>

            <figure className="rv">
              <div className="fh">デジタルカメラの総出荷台数</div>
              <div className="fs">世界全体・各年1〜12月累計<sup>※1</sup></div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    1.21<small>億台</small>
                  </div>
                  <div className="cap">ピーク</div>
                  <div className="src">2010年 121,463,234台</div>
                </div>
                <div className="stat">
                  <div className="big">
                    772<small>万台</small>
                  </div>
                  <div className="cap">底</div>
                  <div className="src">2023年 7,720,505台</div>
                </div>
                <div className="stat ac">
                  <div className="big">
                    944<small>万台</small>
                  </div>
                  <div className="cap">直近</div>
                  <div className="src">2025年 9,438,876台</div>
                </div>
              </div>
              <figcaption>
                <strong>2010年から2025年で92.2%減。</strong>
                100台あったものが8台になった、という減り方です。市場が縮んだという言い方では足りない気がします。
              </figcaption>
            </figure>

            <div className="note rv">
              <span className="nh">「売れた台数」ではありません</span>
              <p>
                原典の表題は「生産<b>出荷</b>実績表」です。メーカーが出荷した台数であって、店頭で売れた台数ではありません。
                また<b>世界全体の数字</b>で、日本向けは別の列になっています。日本向けだけを見ると、
                2008年の 11,110,644台 が 2025年には 996,328台。<b>91.0%減</b>です。
                この記事で「台数」と書いているのは、断りがなければ<b>総出荷（世界全体）</b>のことです。
              </p>
            </div>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">同じ表の、下の行</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">ところが、金額は減っていない</h2>
            </div>
            <p>
              同じ表には、<strong>下段に金額の行があります</strong>。
              台数だけ見て「カメラは終わった」と言いかけたところで、こちらに気づきました。
            </p>

            <figure className="rv">
              <div className="fh">台数と金額を、同じ物差しに載せる</div>
              <div className="fs">
                2010年（台数のピーク年）を100とした指数。2003〜2025年<sup>※1</sup>
              </div>
              <div className="figbox pconly">
                <IndexPc />
              </div>
              <div className="figbox sponly">
                <IndexSp />
              </div>
              <figcaption>
                <strong>2本が2011年あたりから離れていきます。</strong>
                台数は7.8まで落ちるのに、金額は53.6で止まり、2020年からは戻しています。
                ⚠️ 2軸グラフにすると目盛りの取り方で印象が変わるので、
                <b>両方を同じ基準年（2010年＝100）で割った指数</b>にしています。
              </figcaption>
            </figure>

            <p>10年で切ると、こうなります。</p>

            <div className="vsgrid rv">
              <div className="vscol plat">
                <div className="cap">2015年</div>
                <ul>
                  <li>
                    <span className="ic">◦</span>
                    <div>
                      <span className="k">総出荷台数</span>
                      35,395,457台
                    </div>
                  </li>
                  <li>
                    <span className="ic">◦</span>
                    <div>
                      <span className="k">総出荷金額</span>
                      885,446,105千円
                    </div>
                  </li>
                </ul>
              </div>
              <div className="vscol hp">
                <div className="cap">2025年</div>
                <ul>
                  <li>
                    <span className="ic">●</span>
                    <div>
                      <span className="k">総出荷台数</span>
                      9,438,876台（<b>−73.3%</b>）
                    </div>
                  </li>
                  <li>
                    <span className="ic">●</span>
                    <div>
                      <span className="k">総出荷金額</span>
                      880,574,519千円（<b>−0.6%</b>）
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              <strong>台数は4分の1になったのに、金額はほとんど同じ。</strong>
              割り算をすると、こうなります。
            </p>

            <div className="callout rv">
              <div className="big">
                6.9<span>倍</span>
              </div>
              <div className="tx">
                出荷1台あたりの金額は、2010年の<b>13,529円</b>から2025年の<b>93,292円</b>へ。
                同じ「デジタルカメラ1台」という言葉が、15年で
                <b>まったく違う値段のものを指すようになっていました</b>。
              </div>
            </div>

            <div className="note rv">
              <span className="nh">この1台あたりの金額は、私の計算です</span>
              <p>
                原典に平均単価という欄はありません。<b>総出荷金額 ÷ 総出荷台数</b>を私が割ったものです。
                出荷ベースなので店頭価格ではなく、為替の影響も入っています。
                <b>「カメラの値段が6.9倍になった」ではなく、「出荷1台あたりの金額が6.9倍になった」</b>です。
              </p>
            </div>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">中身が入れ替わっていた</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">消えたのは「みんなのカメラ」</h2>
            </div>
            <p>
              台数と金額でこれだけ話が違うなら、<strong>中身が入れ替わっている</strong>はずです。
              原典はカメラを2種類に分けています。<strong>レンズ一体型</strong>
              （いわゆるコンパクトデジカメ）と、<strong>レンズ交換式</strong>です。
            </p>

            <figure className="rv">
              <div className="fh">レンズ一体型と、レンズ交換式</div>
              <div className="fs">総出荷台数<sup>※1</sup></div>
              <div className="figbox pconly">
                <TypesPc />
              </div>
              <div className="figbox sponly">
                <TypesSp />
              </div>
              <figcaption>
                レンズ一体型は 108,576,298台（2010年）から 2,436,911台（2025年）へ、
                <strong>97.8%減</strong>。レンズ交換式は 12,886,936台から 7,001,965台で、
                <strong>45.7%減</strong>です。2020年の交換式だけは原典に行が無いため、総出荷から一体型を差し引きました。
              </figcaption>
            </figure>

            <p>
              2010年のカメラは、<strong>9割近くがレンズ一体型</strong>でした。
              家に1台あって、運動会と旅行のときだけ引き出しから出てくる、あの機械です。
              それが2025年には全体の<strong>4分の1</strong>になりました。
            </p>

            <div className="pull rv">
              <p className="q">
                カメラが要らなくなったのではなく、
                <br />
                <em>「みんなが1台ずつ持っていたカメラ」</em>
                が無くなった。
              </p>
              <div className="rule" />
              <p className="sub">
                残ったのは、<b>はじめから趣味の道具だったほう</b>です。
              </p>
            </div>

            <p>
              その残ったほうの中でも、入れ替わりが起きています。2025年のレンズ交換式の内訳は、
              <strong>ミラーレスが 6,311,054台（前年比112.5%）</strong>に対して、
              <strong>一眼レフは 690,911台（前年比69.3%）</strong>。
              一眼レフはいま、年に3割ずつ減っています<sup>※2</sup>。
            </p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">意外だったところ</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">底は、3年前でした</h2>
            </div>

            <figure className="rv">
              <div className="fh">2023年を底に、3年続けて増えている</div>
              <div className="fs">総出荷<sup>※1</sup></div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    +22.3<small>%</small>
                  </div>
                  <div className="cap">台数（2023年→2025年）</div>
                  <div className="src">7,720,505台 → 9,438,876台</div>
                </div>
                <div className="stat ac">
                  <div className="big">
                    2.1<small>倍</small>
                  </div>
                  <div className="cap">金額（2020年→2025年）</div>
                  <div className="src">4,201億円 → 8,806億円</div>
                </div>
                <div className="stat">
                  <div className="big">
                    129.6<small>%</small>
                  </div>
                  <div className="cap">2025年に伸び率が最大だったもの</div>
                  <div className="src">レンズ一体型・前年比</div>
                </div>
              </div>
              <figcaption>
                2025年にいちばん伸びたのが、<strong>あれだけ消えたはずのレンズ一体型</strong>でした。
              </figcaption>
            </figure>

            <div className="note rv">
              <span className="nh">
                「スマホに押されて減り、スマホが飽きられて戻った」とは書けませんでした
              </span>
              <p>
                そう書けたら気持ちのいい記事になるのですが、<b>手元のデータでは示せません</b>。
                総務省の通信利用動向調査で世帯のスマートフォン保有率が確認できるのは
                <b>令和2年からの5年ぶん</b>で、86.8% → 88.6% → 90.1% → 90.6% → <b>90.5%</b>
                <sup>※3</sup>。<b>すでに天井に当たっているところしか見えていません。</b>
                一方カメラの台数が減り始めたのは2011年です。<b>重なっている期間が足りない。</b>
                2つの線が同じ向きに動いていることと、片方がもう片方の原因であることは、別の話です。
                ここでは<b>「2023年に底を打って、3年増えている」という事実だけ</b>を書きます。
              </p>
            </div>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">自分の写真を数える</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">書こうとしていたことが、書けなくなりました</h2>
            </div>
            <p>
              全国の23年に、自分1人の線を重ねてみます。手元の写真フォルダ
              <strong>約5,800ファイル</strong>のメタデータだけを読んで、機種別に数えました
              <sup>※4</sup>。
            </p>

            <figure className="rv">
              <div className="fh">私の写真は、何で撮られていたか</div>
              <div className="fs">期間別の枚数<sup>※4</sup></div>
              <div className="figbox pconly">
                <MinePc />
              </div>
              <div className="figbox sponly">
                <MineSp />
              </div>
              <figcaption>
                <strong>カメラを使っていたのは、実質2017〜2018年の2年間だけ</strong>でした。
                前後はどの期間も9割以上がスマホです。
              </figcaption>
            </figure>

            <p>
              この記事を始めたとき、私は
              <strong>
                「1つの出来事を2台で撮るから、写真が2箇所に分かれて困る」
              </strong>
              という話を書くつもりでいました。実際に数えたら、そうではありませんでした。
            </p>

            <figure className="rv">
              <div className="fh">写真を撮った日を、数えてみると</div>
              <div className="fs">約980日ぶん<sup>※4</sup></div>
              <div className="fun">
                <div className="fstep">
                  <div className="pct">
                    約920<small>日</small>
                  </div>
                  <div className="desc">
                    <b>スマホだけの日</b>
                    <em>ほとんどがこれでした</em>
                  </div>
                </div>
                <div className="fstep bad">
                  <div className="pct">
                    約40<small>日</small>
                  </div>
                  <div className="desc">
                    <b>カメラだけの日</b>
                    <em>持ち出した日は、それ1台で済ませている</em>
                  </div>
                </div>
                <div className="fstep bad">
                  <div className="pct">
                    20<small>日ほど</small>
                  </div>
                  <div className="desc">
                    <b>両方で撮った日</b>
                    <em>全体の約2%。いちばん多い2017〜2018年でも7%ほど、直近はほぼゼロ</em>
                  </div>
                </div>
              </div>
              <figcaption>
                「2台持ちで困る」は、<strong>自分のデータでは起きていませんでした</strong>。思い込みでした。
              </figcaption>
            </figure>

            <div className="note rv">
              <span className="nh">このフォルダには偏りがあります</span>
              <p>
                RAWファイルが<b>1枚もありません</b>。カメラで撮ったぶんは、別の場所にあるか、
                現像を通っていない可能性があります。
                <b>
                  「私の写真の98%はスマホ」ではなく、「このフォルダの98%はスマホ」
                </b>
                が、ここで言えることの限界です。
              </p>
            </div>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">数えて、手が止まった</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">6枚に1枚が、いつ撮ったのか分からない</h2>
            </div>

            <figure className="rv">
              <div className="fh">撮影日時を持たない写真</div>
              <div className="fs">
                約5,800ファイルのうち、約970枚（約17%）<sup>※4</sup>
              </div>
              <div className="figbox">
                <Undated />
              </div>
              <figcaption>
                これらは撮影日時を持っていないので、日付で並べ替えることが
                <strong>原理的にできません</strong>。私のフォルダでは
                <code>Unknown_Date年</code> という行き場所のない場所に、まとめて入っていました。
              </figcaption>
            </figure>

            <p>
              面白いのは、<strong>この約970枚に共通点があった</strong>ことです。
            </p>

            <figure className="rv">
              <div className="fh">サイズが、きれいに揃っていた</div>
              <div className="fs">撮影日時を持たない約970枚の画像サイズ<sup>※4</sup></div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    約750<small>枚</small>
                  </div>
                  <div className="cap">長辺が1400〜1500pxに収まる</div>
                  <div className="src">全体の8割弱</div>
                </div>
                <div className="stat">
                  <div className="big">
                    約630<small>枚</small>
                  </div>
                  <div className="cap">長辺がちょうど1478px</div>
                  <div className="src">同じ1点に集まっている</div>
                </div>
                <div className="stat">
                  <div className="big">
                    30<small>枚ほど</small>
                  </div>
                  <div className="cap">長辺が2000px以上</div>
                  <div className="src">ほとんど残っていない</div>
                </div>
              </div>
              <figcaption>
                いまのスマホで撮った写真は、長辺が4000px前後あります。
                <strong>つまりこの約970枚は、自分のカメラから直接来たものではありません。</strong>
                どこかで一度縮小され、作り直されている。そのときに撮影日時が落ちています。
              </figcaption>
            </figure>

            <p>
              どこを経由したのかまでは、メタデータからは分かりません。ただ、
              <strong>サイズがこれだけ揃っている</strong>ということは、
              人の手ではなく、<strong>何かの仕組みが一律に処理した</strong>ということです。
            </p>

            <div className="pull rv">
              <p className="q">
                自分で撮った写真は残る。
                <br />
                <em>もらった写真は、いつのものか分からなくなる。</em>
              </p>
              <div className="rule" />
              <p className="sub">
                アルバムに貼るときいちばん困るのは、たぶん<b>後者のほう</b>です。
              </p>
            </div>

            <div className="note rv">
              <span className="nh">道具を作ったのに、道具では直せない</span>
              <p>
                私は結局、撮影日時のメタデータで写真を並べ替える道具を自分で作りました。
                <b>これは宣伝ではありません</b>——いまは配布を止めていて、押せるリンクもありません。
                ただ、その道具がいちばん手こずるのが、この<b>日付を失った6分の1</b>です。
                並べ替える道具は、<b>並べ替えるための情報が無いものには何もできません</b>。
                数えてはじめて分かりました。
              </p>
            </div>
          </section>

          {/* 07 */}
          <section className="blk">
            <span className="kicker">この記事の芯</span>
            <div className="h2">
              <span className="idx">07</span>
              <h2 className="tt">数え方を変えると、結論が反対になる</h2>
            </div>
            <p>
              台数だけ見れば「カメラは終わった」でした。金額も見たら、
              <strong>終わったのは商品カテゴリのほうで、道具としてのカメラは残っていました</strong>。
            </p>
            <p>
              盆に任意保険のデータで、まったく同じことを書いたばかりでした。
              <Link href="/journal/">同じ穴に、2回落ちています</Link>
              。そして今回は、<strong>自分の思い込みも外れました</strong>。
              2台で撮るから困っているのだと思っていたら、実際に困っていたのは
              <strong>もらった写真</strong>のほうでした。
            </p>

            <div className="closing rv">
              <p className="q">
                写真は増え続けています。撮る道具がどちらであれ、増えます。
                <br />
                ただ、そのうちの何割が「いつのものか分かる状態」で残っているのかは、
                数えるまで知りませんでした。
              </p>
              <p>
                私は6分の1を、失っていました。
                <br />
                <br />
                この記事の数字は、すべて出典のPDFから直接引いています。間違いを見つけたら教えていただけるとありがたいです（
                <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
                ）。直します。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 一般社団法人カメラ映像機器工業会（CIPA）「デジタルカメラ生産出荷実績表（年計）」2003〜2025年の各年版{" "}
                <a href="https://www.cipa.jp/j/stats/dc.html">
                  cipa.jp/j/stats/dc.html
                </a>
                <br />
                総出荷の台数・金額、日本向け、レンズ一体型／レンズ交換式の台数は、各年のPDFから直接転記しました。
                年により表の列構成が異なるため（2019年版は生産に「当初公表」と「修正値」の2列がある、2021年から表側の名称が「デジタルスチルカメラ」から「デジタルカメラ」に変わる）、
                <b>総出荷＝日本向け＋日本向け以外</b>という関係が台数・金額の両方で成り立つことを23年すべてで確認しています。
              </li>
              <li>
                ※2 同「2026年カメラ等品目別出荷見通し」（2026年2月26日）{" "}
                <a href="https://www.cipa.jp/documents/j/PRESSRELEASE20260226.pdf">
                  cipa.jp/documents/j/PRESSRELEASE20260226.pdf
                </a>
                <br />
                2025年実績のカテゴリー別内訳（ミラーレス 6,311,054台・前年比112.5%／一眼レフ
                690,911台・前年比69.3%）はこちらによります。
              </li>
              <li>
                ※3 総務省「令和6年 通信利用動向調査報告書（世帯編）」図表1-3{" "}
                <a href="https://www.soumu.go.jp/johotsusintokei/statistics/pdf/HR202400_001.pdf">
                  soumu.go.jp/johotsusintokei/statistics/pdf/HR202400_001.pdf
                </a>
                <br />
                世帯のスマートフォン保有率。令和2年 86.8%／令和3年 88.6%／令和4年 90.1%／令和5年
                90.6%／令和6年 90.5%。
              </li>
              <li>
                ※4 筆者自身の写真フォルダ 約5,800ファイル（1998年〜2026年7月）。
                <code>exiftool</code>{" "}
                でメーカー名・機種名・撮影日時・画像サイズのみを読み出して集計しました。
                <b>画像の中身は解析していません。</b>RAWファイルは含まれません。
                本文の枚数・日数は<b>概数</b>で、
                比率は概数どうしを割ったものではなく実数から計算して丸めています。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ ※1は<b>出荷</b>の統計であり、販売台数ではありません。また断りのない数値は
            <b>世界全体の総出荷</b>です。
            <br />※ <b>原典に載っていない数値は、すべて本記事の計算です。</b>
            具体的には出荷1台あたりの金額（金額÷台数）、および各種の増減率
            （92.2% / 73.3% / 0.6% / 46.4% / 6.9倍 / 97.8% / 45.7% / 91.0% / 22.3% / 2.1倍）。
            2020年のレンズ交換式は、総出荷から一体型を差し引いた値です。
            <br />※ 図の指数は<b>2010年＝100</b>で揃えています。基準年を変えると印象が変わります。
            2軸グラフは使っていません。
            <br />※ 本記事は特定のメーカーや製品の優劣を論じるものではありません。
            <br />※ ※4は個人のフォルダの集計であり、一般的な傾向を示すものではありません。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
