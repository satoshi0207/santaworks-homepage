import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import { IndexPc, IndexSp, TypesPc, TypesSp, HomePc, HomeSp } from "./figures";
import "../journal.css";

export const metadata: Metadata = {
  title: "カメラは9割売れなくなって、金額は残りました",
  description:
    "デジタルカメラの出荷台数は2010年のピークから92.2%減りました。ところが金額は直近10年でほとんど動いていません。消えたのは「カメラ」ではなく「みんなのカメラ」でした。CIPAの出荷統計23年ぶんを一次資料から整理しています。",
  alternates: { canonical: "/journal/camera-or-smartphone/" },
  openGraph: {
    type: "article",
    title: "カメラは9割売れなくなって、金額は残りました｜Santa Works Journal",
    description:
      "デジタルカメラの出荷台数は2010年から92.2%減。ところが金額は直近10年でほぼ横ばいでした。消えたのは「カメラ」ではなく「みんなのカメラ」だった、という話です。",
    url: "/journal/camera-or-smartphone/",
    // ⚠️ OGP は webp ではなく png（LINE / X の互換）。生成は make_camera_figs.py。
    images: [
      {
        url: "/blog/camera-or-smartphone/ogp.png",
        width: 1200,
        height: 630,
        alt: "カメラは9割売れなくなって、金額は残りました｜Santa Works Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "カメラは9割売れなくなって、金額は残りました｜Santa Works Journal",
    description:
      "デジタルカメラの出荷台数は2010年から92.2%減。金額は直近10年でほぼ横ばい。数え方を変えると結論が反対になります。",
    images: ["/blog/camera-or-smartphone/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ⚠️ ヒーローに写真を使わない。この記事は一次資料だけで書いているので、
                絵だけ借り物の素材にすると、記事全体の作り方と食い違う。
                人物が写る素材を避ける（全社ガードレール⑤）という制約にも自動的に従える。
                図版なので `nodim` で写真用の暗幕を外す（journal.css）。
                画像は CSS変数で渡す。モバイル（16/10）では --hero-sp に差し替わる。
                生成は pr/drafts/figures/make_camera_figs.py。 */}
            <figure className="herofig nodim rv">
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
                {/* chip も ph-t も置かない。`.ph` は中身を中央寄せする作りなので、
                    図版の線の上に重なる。見出しは画像側に入れてある。 */}
              </div>
            </figure>
            <span className="eyebrow">写真 / 公開データの整理</span>
            <h1 className="title">
              カメラは9割売れなくなって、
              <br />
              金額は残りました。
            </h1>
            <p className="lede">
              「カメラが売れなくなった」という話は、何度も聞いたことがあります。
              <strong>ただ、どれくらい売れていないのかは知りませんでした。</strong>
              カメラ映像機器工業会が毎年出している出荷統計を、2003年から2025年まで全部開いてみました。
              <strong>思っていたのと違う絵が出ました。</strong>
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.07.30</span>
              <span className="dot" />
              <span>読了 約6分</span>
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
                  レンズ一体型は<strong>97.8%減</strong>、レンズ交換式は45.7%減。
                </span>
              </li>
              <li>
                <span className="n">04</span>
                <span className="tx">
                  そして<strong>家からは、まだ無くなっていません</strong>。
                  二人以上の世帯の<strong>47.6%</strong>がいまも持っています。
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
              {/* ⚠️「年に3割ずつ」と書かない。原典にあるのは2024→2025の1年ぶんだけで、
                  毎年その率で減っている根拠は無い。 */}
              一眼レフは<strong>1年で3割減りました</strong>
              <sup>※2</sup>。
            </p>
            <p>
              もうひとつ、同じ資料に交換レンズの数字があります。2025年の出荷は
              <strong>10,600,826本</strong>
              <sup>※2</sup>。同じ年に出たレンズ交換式カメラ 7,001,965台より、
              <strong>レンズのほうが多い</strong>。
              本体を1台買って終わりではなく、レンズを足している人がいる、ということだと思います。
              <b>（ここは私の読みです。出荷の数字は、誰が何本買ったかまでは教えてくれません。）</b>
            </p>

            {/* ⚠️ 画質の優劣は、この記事のどの資料にも書かれていない。
                「スマホはカメラに勝てない」と書いた瞬間、出典の無い主張が1つ混ざる。
                書けないことを書けないと言い、代わりに表から言えることだけを置く。 */}
            <div className="note rv">
              <span className="nh">「でも、画質はカメラのほうがいいのでは」</span>
              <p>
                そう思われた方へ。<b>たぶん、その通りだと思います。</b>
                ただ、この記事で使ったのは<b>出荷の台数と金額だけ</b>で、
                画質について何も言っていない統計です。<b>だからここでは書けません。</b>
                <br />
                言えるのはひとつだけです。
                <b>残ったカメラは、出荷1台あたり9万円を超えるものになりました。</b>
                安いほうから順に消えた、という事実だけが、この表には出ています。
                <b>それが「良いから残った」のか「良いものしか残れなかった」のかは、この表では分かりません。</b>
              </p>
            </div>
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

            {/* ⚠️ 「それはコロナでは」は読者が必ず思う。先回りして答える。
                ただし因果は主張しない。**底が2つあって3年ずれている**という
                表の形そのもので、単一の原因では説明できないことだけを示す。 */}
            <div className="note rv">
              <span className="nh">「それは、コロナでは」</span>
              <p>
                私も最初にそう思いました。ただ、
                <b>底が2つあって、3年ずれています。</b>
                <br />
                <b>金額の底は2020年</b>です。前年から28.4%落ちて、翌2021年には
                <b>+16.4%</b>、その次の年は<b>+39.3%</b>と戻しました。
                <b>急に落ちて、急に戻る。</b>出来事に殴られた形です。
                <br />
                <b>台数の底は2023年</b>でした。2020年に41.6%落ちたあとも、
                5.9%、4.2%、3.6%と<b>3年続けて落ちています</b>。
                そもそも台数は<b>コロナの直前2年</b>も、毎年2割ずつ減っていました
                （2018年 −22.2%、2019年 −21.7%）。
                <br />
                <b>同じひとつの出来事なら、同じように戻るはずです。</b>
                戻り方が違うということは、たぶん別のことが起きています。
                <b>それが何かは、この表には書いてありません。</b>
              </p>
            </div>

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
            <span className="kicker">出荷ではなく、家の中</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">家からは、まだ無くなっていない</h2>
            </div>
            <p>
              ここまでは<strong>出荷</strong>の話でした。
              では、<strong>家からカメラは無くなったのか</strong>。これは別の資料になります。
            </p>
            <p>
              内閣府の消費動向調査に、二人以上の世帯がどんな耐久消費財を持っているかを聞いた項目があります
              <sup>※4</sup>。
            </p>

            <figure className="rv">
              <div className="fh">デジタルカメラを持っている世帯の割合</div>
              <div className="fs">
                二人以上の世帯・各年3月末。<b>カメラ付き携帯電話は除く</b>
                <sup>※4</sup>
              </div>
              <div className="figbox pconly">
                <HomePc />
              </div>
              <div className="figbox sponly">
                <HomeSp />
              </div>
              <figcaption>
                2026年3月末で<strong>47.6%</strong>。100世帯あたりの保有数量は66.6台です。
                出荷が9割減っても、<strong>まだ半分近くの家にあります</strong>。
              </figcaption>
            </figure>

            <p>
              <strong>「売れていない」と「持っていない」は、別のことでした。</strong>
              新しく買われなくなっても、かつて買われたものは家に残ります。押し入れの中かもしれませんが、
              <strong>捨てられてはいません</strong>。
            </p>
            <p>
              ただ、その割合も6年で<strong>62.3%から47.6%へ</strong>下がっています。
              新しく入ってこないまま、古いものが少しずつ退場している。
              <strong>いま起きているのは、そういう減り方に見えます。</strong>
            </p>

            <div className="note rv">
              <span className="nh">この数字は単年で上下します</span>
              <p>
                標本調査なので、1年ごとの増減で語れません。実際
                <b>2025年3月末は前年から+2.7ポイント増えています</b>
                （48.6% → 51.3%）。ここでは<b>6年間の傾向としてのみ</b>読んでいます。
                また<b>カメラ付き携帯電話を除いた数字</b>である点も、混ぜないよう注意が要ります。
              </p>
            </div>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">この記事の芯</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">数えられる場所から、出ていっただけ</h2>
            </div>
            <p>
              コンパクトデジカメは97.8%消えました。でも、
              <strong>
                家に1台あって、運動会と旅行のときだけ引き出しから出てくる機械
              </strong>
              ——あれ自体が無くなったとは、どうしても思えません。
            </p>
            <p>
              <strong>いまはポケットに入っていて、毎日出てきます。</strong>
              カメラが売れなくなったのではなく、
              <strong>カメラが売り物ではなくなった</strong>
              のだと思います。電話に含まれてしまったので、もう単体では数えられません。
              <b>（ここは統計に書いてあることではなく、私の読みです。）</b>
            </p>
            <p>
              そして家の中を見れば、まだ半分近くの世帯に残っている。
              出荷の表から消えたことと、世の中から消えたことは、<strong>同じではありませんでした</strong>。
            </p>

            <div className="closing rv">
              <p className="q">
                出荷統計から消えたものは、
                <br />
                無くなったのではなく、数えられる場所から出ていっただけでした。
              </p>
              <p>
                台数だけ見て「カメラは終わった」と言いかけて、同じ表の下の行に気づいた。
                <b>数え方を変えたら、結論が反対になった。</b>
                この記事は、それだけの話です。
                <br />
                <br />
                数字は、すべて出典のPDFから直接引いています。間違いを見つけたら教えていただけるとありがたいです（
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
                690,911台・前年比69.3%）および交換レンズの総出荷本数 10,600,826本（前年比102.8%）はこちらによります。
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
                ※4 内閣府経済社会総合研究所「消費動向調査」各年3月実施分{" "}
                <a href="https://www.esri.cao.go.jp/jp/stat/shouhi/menu_shouhi.html">
                  esri.cao.go.jp/jp/stat/shouhi/menu_shouhi.html
                </a>
                <br />
                主要耐久消費財等の保有状況（二人以上の世帯）のうちデジタルカメラの普及率。
                2020年 62.3%／2021年 59.4%／2022年 56.6%／2023年 53.1%／2024年 48.6%／2025年
                51.3%／2026年 47.6%（いずれも各年3月末）。100世帯あたりの保有数量は2026年3月末で66.6台。
                <b>カメラ付き携帯電話は除きます。</b>
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
            <br />※ ※1と※4は<b>別々の調査</b>です。出荷（世界全体・年）と世帯の保有（日本・各年3月末）を、
            そのまま同じ物差しで比べることはできません。
            <br />※ 本記事は特定のメーカーや製品の優劣を論じるものではありません。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
