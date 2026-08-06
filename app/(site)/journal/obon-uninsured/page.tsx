import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import Byline from "../Byline";
import { eyebrowOf } from "../posts";

export const metadata: Metadata = {
  title: "10年ぶりに同じデータを開いたら、1割は1割のままでした",
  description:
    "任意保険（対人賠償）の普及率は全国88.6%。裏返すと943万台が入っていません。10年前は1,004万台で、割合はほとんど変わっていませんでした。同じ資料に75.4%という数字もあり、違いは共済を数えたかどうかだけ、という読み違えの話です。",
  alternates: { canonical: "/journal/obon-uninsured/" },
  openGraph: {
    type: "article",
    title:
      "10年ぶりに同じデータを開いたら、1割は1割のままでした｜Santa Works Journal",
    description:
      "任意保険（対人賠償）の普及率は全国88.6%。同じ資料に75.4%という数字もあり、違いは共済を数えたかどうかだけでした。損害保険料率算出機構の資料を一次資料から整理しています。",
    url: "/journal/obon-uninsured/",
    images: ["/blog/obon-uninsured/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "10年ぶりに同じデータを開いたら、1割は1割のままでした｜Santa Works Journal",
    description:
      "任意保険（対人賠償）の普及率は全国88.6%。裏返すと943万台。10年前とほとんど変わっていませんでした。",
    images: ["/blog/obon-uninsured/ogp.png"],
  },
};


// 第31表〈2025年3月末〉の「共済・保険計」普及率。並びは都道府県コード順。
// ⚠️ 値の大きい順に並べ替えないこと。順位表に見えると「あの県は意識が低い」
//    という読まれ方に転ぶ。この記事が言いたいのは県の優劣ではない。
const PREF47: [string, number][] = [
  ["北海道",86.3], ["青森",90.4], ["岩手",89.2], ["宮城",90.0], ["秋田",89.9],
  ["山形",90.9], ["福島",88.5], ["茨城",84.7], ["栃木",88.4], ["群馬",89.1],
  ["埼玉",88.0], ["千葉",85.8], ["東京",85.2], ["神奈川",86.7], ["新潟",91.4],
  ["富山",92.7], ["石川",91.7], ["福井",91.7], ["山梨",85.2], ["長野",89.4],
  ["岐阜",90.9], ["静岡",88.8], ["愛知",91.4], ["三重",89.7], ["滋賀",90.1],
  ["京都",89.3], ["大阪",87.9], ["兵庫",89.1], ["奈良",89.4], ["和歌山",89.7],
  ["鳥取",90.0], ["島根",92.1], ["岡山",90.0], ["広島",90.5], ["山口",90.6],
  ["徳島",91.2], ["香川",91.8], ["愛媛",91.3], ["高知",88.0], ["福岡",87.3],
  ["佐賀",90.5], ["長崎",88.0], ["熊本",89.0], ["大分",86.6], ["宮崎",85.1],
  ["鹿児島",83.4], ["沖縄",80.4]
];

// 第18表〈2025年3月末〉任意自動車保険 用途・車種別（対人賠償）。
// ⚠️ この表は共済を含まない。全体が75.4%なのはそのため（88.6%と混ぜない）。
const BY_TYPE: [string, number, boolean][] = [
  ["自家用普通乗用車", 83.2, false],
  ["自家用小型貨物車", 80.8, false],
  ["自家用小型乗用車", 78.4, false],
  ["軽四輪乗用車", 77.9, false],
  ["全体", 75.4, true],
  ["軽四輪貨物車", 56.8, false],
  ["二輪車", 47.2, false],
];

/** 横棒1本。journal.css の .fl は JournalFx が幅を0に戻すため、ここでは使わない。 */
function Bar({
  label,
  value,
  labelWidth = 52,
  accent = false,
}: {
  label: string;
  value: number;
  labelWidth?: number;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: labelWidth + "px 1fr 42px",
        gap: 8,
        alignItems: "center",
        height: 19,
      }}
    >
      <span
        style={{
          fontSize: ".72rem",
          textAlign: "right",
          lineHeight: 1.2,
          color: accent ? "var(--accent)" : "inherit",
          fontWeight: accent ? 700 : 400,
        }}
      >
        {label}
      </span>
      <span style={{ display: "block", height: 9, background: "var(--track)", borderRadius: 5 }}>
        <span
          style={{
            display: "block",
            height: "100%",
            width: value + "%",
            borderRadius: 5,
            background: accent ? "var(--accent)" : "var(--ghost)",
          }}
        />
      </span>
      <span
        style={{
          fontSize: ".68rem",
          fontVariantNumeric: "tabular-nums",
          color: accent ? "var(--accent)" : "var(--muted)",
          fontWeight: accent ? 700 : 400,
        }}
      >
        {value.toFixed(1)}%
      </span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ⚠️ ヒーローに車や事故の写真は使わない。事故を演出しないため。
                図版（グラフ）を作ったら nodim + --hero-pc / --hero-sp に差し替える。
                画像が無いあいだは下のグラデーションが出るので、壊れ画像にはならない。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/obon-uninsured/hero.webp)",
                      "--hero-sp": "url(/blog/obon-uninsured/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("obon-uninsured")}</span>
            <h1 className="title">
              10年ぶりに同じデータを開いたら、
              <br />
              1割は1割のままでした。
            </h1>
            <p className="lede">
              盆休みに車で帰省する人は多いと思います。私もそうです。長距離を走る前に保険証券を眺めていて、
              <strong>
                Pythonを覚えたての頃、Excelの自動化・可視化や分析の練習の題材にこのデータを使ったことがある
              </strong>
              のを思い出しました。車が好きで、その延長でたまたま行き着いたデータです。10年以上経って、同じものをもう一度開いてみました。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.01</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          <div className="duel rv">
            <div className="side">
              <div className="big">
                87.6<small>%</small>
              </div>
              <div className="lab">
                <b>2015年3月末</b>
                <br />
                未加入 1,004万台
              </div>
            </div>
            <div className="vs">→</div>
            <div className="side b">
              <div className="big">
                88.6<small>%</small>
              </div>
              <div className="lab">
                <b>2025年3月末</b>
                <br />
                未加入 943万台
              </div>
            </div>
          </div>
          <p className="duel-cap">
            対人賠償の普及率（自動車共済・自動車保険の計／全国）<sup>※1、※2</sup>
          </p>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  対人賠償の普及率は<strong>全国88.6%</strong>
                  。裏返すと<strong>943万台</strong>
                  が入っていません。10年前は1,004万台で、
                  <strong>割合はほとんど変わっていません</strong>。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  同じ資料に<strong>75.4%と88.6%が両方あります</strong>。
                  違いは<strong>共済を数えたかどうかだけ</strong>。県別に見ると、
                  順位は<strong>47県中17県で20位以上動きます</strong>。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  「お盆に事故が増える」を示す
                  <strong>一次統計は、見つけられませんでした</strong>。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、大きさ</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">943万台</h2>
            </div>
            <p>
              損害保険料率算出機構が毎年「自動車保険の概況」という資料を出しています。その中に、都道府県別の対人賠償普及率という表があります
              <sup>※1</sup>。
            </p>

            <figure className="rv">
              <div className="fh">任意保険（対人賠償）の普及率（全国・2025年3月末）</div>
              <div className="fs">
                共済も含めた数字。母数は保有車両 82,699,840台（一般原動機付自転車・特定小型原動機付自転車を除く）
              </div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    88.6<small>%</small>
                  </div>
                  <div className="cap">任意の対人賠償に入っている割合</div>
                  <div className="src">保険会社ぶん＋共済</div>
                </div>
                <div className="stat ac">
                  <div className="big">
                    943<small>万台</small>
                  </div>
                  <div className="cap">入っていない台数</div>
                  <div className="src">実数 9,435,233台（差引き）</div>
                </div>
                <div className="stat">
                  <div className="big">
                    約9<small>台に1台</small>
                  </div>
                  <div className="cap">すれ違う車のうち</div>
                  <div className="src">同上</div>
                </div>
              </div>
              <figcaption>
                「943万台」と「約9台に1台」は、原典の数値からこちらで計算したものです。
                原典に直接その表記があるわけではありません。
              </figcaption>
            </figure>

            <p>
              10年前と比べてみます。
              <strong>2015年3月末</strong>の数字も同じ資料で公表されています
              <sup>※2</sup>。保有車両 80,670,393台に対して、対人賠償あり
              70,629,762台。普及率は<strong>87.6%</strong>でした。
            </p>

            <p>
              <strong>10年で1.0ポイント。</strong>
              台数では約61万台減っています。良くなってはいます。ただ、10年という時間の割には、ほとんど動いていないというのが率直な印象です。
            </p>


            <p>
              ここまでは全国の話です。<strong>県ごとに見ると、どうなっているか。</strong>
              47都道府県ぶんを、そのまま並べます。
            </p>

            <figure className="rv">
              <div className="fh">都道府県別の普及率（2025年3月末）</div>
              <div className="fs">
                共済も含めた対人賠償。並びは<b>都道府県コード順</b>で、
                順位ではありません<sup>※1</sup>
              </div>
              <div style={{ position: "relative" }}>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "calc(60px + (100% - 110px) * 0.886)",
                    top: 0,
                    bottom: 22,
                    width: 1,
                    background: "var(--accent)",
                    opacity: 0.55,
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {PREF47.map(([n, v]) => (
                    <Bar key={n} label={n} value={v} />
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    paddingLeft: 60,
                    paddingRight: 50,
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: ".62rem",
                    color: "var(--muted)",
                  }}
                >
                  <span>0</span>
                  <span>50</span>
                  <span>100%</span>
                </div>
              </div>
              <figcaption>
                縦の赤い線が<strong>全国平均の88.6%</strong>です。いちばん低い県で80.4%、
                いちばん高い県で92.7%。
                <strong>どの県も8割を超えています</strong>が、
                <b>その差が何を意味するかは、次の章の話になります。</b>
              </figcaption>
            </figure>

            <div className="note rv">
              <span className="nh">
                「お盆は事故が増える」と書きたくなりましたが、書けませんでした
              </span>
              <p>
                警察庁の統計、交通事故総合分析センター、内閣府の交通安全白書を当たりましたが、
                <b>盆期間を切り出した公表値を見つけられませんでした</b>
                （年次と月次まではあります）。ですからこの記事では、
                <b>増えるかどうかではなく、走る距離が伸びるという事実だけ</b>
                を前提にします。普段は近所しか運転しない人が高速を何百キロも走る。それだけで、すれ違う台数の母数が変わります。確率の話をしているだけで、誰かを疑う話ではありません。
              </p>
            </div>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">数字が2つある理由</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">「任意保険の加入率」は、2つあります</h2>
            </div>
            <p>
              「任意保険、入ってる？」と聞かれたら、たいていの人は入っているかどうかで答えます。
              <strong>
                保険会社と契約しているのか、共済なのかまでは、あまり意識しません。
              </strong>
              どちらも自分の意思で入る対人賠償で、事故のときに相手へ賠償されるという点では同じです。
            </p>
            <p>
              ところが統計は、そこを分けています。
              <strong>同じ資料の、同じ時点の数字が2つ載っています。</strong>
            </p>

            <div className="vsgrid sync3 rv">
              <div className="vscol plat">
                <div className="cap">75.4% — 保険会社ぶんだけ</div>
                <ul>
                  <li>
                    <span className="ic">◦</span>
                    <div>
                      <span className="k">原典の表題</span>
                      任意自動車保険 都道府県別普及率表（第19表）
                    </div>
                  </li>
                  <li>
                    <span className="ic">◦</span>
                    <div>
                      <span className="k">台数</span>
                      62,343,349台
                    </div>
                  </li>
                  <li>
                    <span className="ic">◦</span>
                    <div>
                      <span className="k">共済</span>
                      数えていない
                    </div>
                  </li>
                </ul>
              </div>
              <div className="vscol hp">
                <div className="cap">88.6% — 共済も入れて</div>
                <ul>
                  <li>
                    <span className="ic">●</span>
                    <div>
                      <span className="k">原典の表題</span>
                      自動車共済・自動車保険 都道府県別 対人賠償普及率（第31表）
                    </div>
                  </li>
                  <li>
                    <span className="ic">●</span>
                    <div>
                      <span className="k">台数</span>
                      73,264,607台
                    </div>
                  </li>
                  <li>
                    <span className="ic">●</span>
                    <div>
                      <span className="k">共済</span>
                      10,921,258台ぶんを加算
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              母数はどちらも同じ保有車両 82,699,840台、時点も同じ2025年3月末です
              <sup>※1</sup>。
              <strong>違うのは、共済を数えたかどうかだけ。</strong>
              それだけで<strong>13.2ポイント</strong>ずれます。
            </p>

            <div className="note rv">
              <span className="nh">言葉のほうが、統計より広い</span>
              <p>
                ややこしいのは、<b>原典で「任意自動車保険」と名の付いた表のほうが、共済を含まない</b>
                という点です。私たちが日常で使う「任意保険」は共済に入っている人も含みますが、
                その名前の統計表は保険会社ぶんしか数えていません。
                <b>言葉のほうが、表よりも広い。</b>
                この記事では、日常の言い方に合わせて<b>共済も含めた88.6%のほう</b>を
                「任意保険の加入率」として扱っています。
              </p>
            </div>

            <p>
              全国で13.2ポイントということは、<strong>県ごとに見ればもっと開きます</strong>
              。共済がどれくらい使われているかは、地域によってまったく違うからです。
            </p>

            <figure className="rv">
              <div className="fh">県ごとのばらつき（2025年3月末・47都道府県）</div>
              <div className="fs">
                いちばん高い県と、いちばん低い県の開き<sup>※1</sup>
              </div>
              <div className="stats">
                <div className="stat">
                  <div className="big">
                    27.5<small>pt</small>
                  </div>
                  <div className="cap">保険会社ぶんだけで見たときの開き</div>
                  <div className="src">55.2% 〜 82.7%</div>
                </div>
                <div className="stat ac">
                  <div className="big">
                    12.3<small>pt</small>
                  </div>
                  <div className="cap">共済も入れたときの開き</div>
                  <div className="src">80.4% 〜 92.7%</div>
                </div>
                <div className="stat">
                  <div className="big">
                    6.2<small>倍</small>
                  </div>
                  <div className="cap">共済そのものの、県による差</div>
                  <div className="src">5.2% 〜 32.4%</div>
                </div>
              </div>
              <figcaption>
                <strong>共済を入れると、県ごとの差は半分以下に縮みます。</strong>
                保険会社ぶんだけで見えていた「大きな地域差」の相当部分は、
                <b>共済を数えていなかったことによるもの</b>でした。
              </figcaption>
            </figure>

            <p>
              差が縮むだけではありません。<strong>順位そのものが入れ替わります。</strong>
            </p>

            <figure className="rv">
              <div className="fh">順位はどれくらい動くか</div>
              <div className="fs">
                保険会社ぶんだけの順位 → 共済も入れた順位（47都道府県）<sup>※1</sup>
              </div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    17<small>県</small>
                  </div>
                  <div className="cap">順位が20位以上動く</div>
                  <div className="src">47県中</div>
                </div>
                <div className="stat">
                  <div className="big">
                    14<small>位</small>
                  </div>
                  <div className="cap">順位の動きの中央値</div>
                  <div className="src">同上</div>
                </div>
                <div className="stat">
                  <div className="big">
                    5<small>県</small>
                  </div>
                  <div className="cap">
                    保険会社ぶんだけなら下位10県、共済込みなら全国平均以上
                  </div>
                  <div className="src">全国平均 88.6%</div>
                </div>
              </div>
              <figcaption>
                特定の県が例外なのではありません。
                <strong>47都道府県のうち3分の1以上で、順位が20位以上動きます。</strong>
                順位表としては、ほぼ別物です。
              </figcaption>
            </figure>

            <div className="pull rv">
              <p className="q">
                同じ言葉で、
                <br />
                <em>違うものが語られている</em>。
              </p>
              <div className="rule" />
              <p className="sub">
                保険会社ぶんだけを数えた表を見て「この県は意識が低い」と読むと、
                <b>事実と逆のことを言ってしまう</b>ことがあります。
              </p>
            </div>

            <div className="note rv">
              <span className="nh">この構造は、10年前も同じでした</span>
              <p>
                2015年3月末で同じ計算をすると、保険会社ぶんだけの開きが
                <b>28.9ポイント</b>、共済も入れた開きが<b>15.2ポイント</b>
                <sup>※2</sup>
                。<b>10年経っても、共済を数えるかどうかで景色が変わる構造は動いていません。</b>
                変わったのは全国の普及率が1.0ポイント上がったことだけです。
              </p>
            </div>

            {/* ⚠️ 図には47県の名前を出している（Satoshiさんの判断・2026-07-31）。
                だから「県名を挙げていない」とは書けない。**読み方のほうを断る。**
                本文で個別の県に言及しない方針は変えていない。 */}
            <div className="note rv">
              <span className="nh">この記事を、順位表として読まないでください</span>
              <p>
                図には47県ぶんを並べていますが、
                <b>並びは都道府県コード順で、順位ではありません</b>
                。順位の話は、書き方しだいで
                <b>「あの県は意識が低い」という読まれ方</b>
                に転びます。この記事で言いたいのは県の優劣ではなく、
                <b>数え方を確かめずに順位を眺めると読み違える</b>という一点です。
                だから本文では、個別の県に触れていません。
              </p>
            </div>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">車の種類で見ると</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">帰省で乗る車は、平均より高めです</h2>
            </div>
            <p>
              同じ資料に、<strong>車種ごとの普及率</strong>を出した表もあります
              <sup>※3</sup>。こちらは
              <strong>共済を含まない数字</strong>
              なので、全体が75.4%になっている点だけ先にお断りしておきます。
            </p>

            <figure className="rv">
              <div className="fh">用途・車種別の普及率（2025年3月末）</div>
              <div className="fs">
                対人賠償。<b>共済を含まない</b>数字です<sup>※3</sup>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {BY_TYPE.map(([n, v, ac]) => (
                  <Bar key={n} label={n} value={v} labelWidth={104} accent={ac} />
                ))}
              </div>
              <figcaption>
                帰省で使うであろう乗用車は、いずれも<strong>全体より高め</strong>です。
                一方で<strong>軽四輪貨物車は56.8%、二輪車は47.2%</strong>
                。同じ道路を走っていても、車種によって備えの厚みはかなり違います。
              </figcaption>
            </figure>

            <div className="note rv">
              <span className="nh">この数字の、慎重な読み方</span>
              <p>
                <b>「軽貨物や二輪は危ない」という話ではありません。</b>
                ここに出ているのは保険会社との契約だけで、共済は数えられていません。
                また車種ごとの使われ方（走行距離、業務用か否か、保有者の年齢構成）も
                まったく違います。<b>車種の違いがそのまま人の違いを表すわけではない</b>
                ——この記事の主題からしても、そこは踏み外さないでおきます。
              </p>
            </div>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">10年前の自分</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">もう一度、同じ表を開きました</h2>
            </div>
            {/* ⚠️ 由来（Pythonを覚えたて・車が好き・たまたま行き着いた）は
                リードで言い切っている。ここで繰り返さない。2026-07-31に削除。
                削ったのは①同じ由来をもう一度述べる段落と、②「好きなものが題材だと
                手が動きます」以下の感想だけの段落。**新しい事実がゼロだった。** */}
            <p>
              10年経って、同じデータをもう一度開きました。
              <strong>全国の数字はほとんど動いていませんでした。</strong>
              87.6%が88.6%になっただけです。県ごとのばらつきの構造も、10年前とほとんど同じでした
              <sup>※1、※2</sup>。
            </p>


            <figure className="rv">
              <div className="fh">この10年で、47都道府県はどう動いたか</div>
              <div className="fs">
                2015年3月末 → 2025年3月末の変化（共済も含めた普及率）<sup>※1、※2</sup>
              </div>
              <div className="stats">
                <div className="stat ac">
                  <div className="big">
                    45<small>県</small>
                  </div>
                  <div className="cap">普及率が上がった</div>
                  <div className="src">下がったのは2県</div>
                </div>
                <div className="stat">
                  <div className="big">
                    +1.2<small>pt</small>
                  </div>
                  <div className="cap">変化の中央値</div>
                  <div className="src">幅は −0.1 〜 +4.1</div>
                </div>
                <div className="stat">
                  <div className="big">
                    40<small>県</small>
                  </div>
                  <div className="cap">共済の割合が下がった</div>
                  <div className="src">保険の割合は46県で上昇</div>
                </div>
              </div>
              <figcaption>
                ほとんどの県で少しずつ上がっています。ただ<strong>中央値は+1.2ポイント</strong>
                で、10年という時間を思うと小さい。
                <strong>
                  そして共済から保険へ、静かに置き換わっているのが分かります。
                </strong>
                この記事で私が読み違えていた「共済の列」は、10年かけて少しずつ細くなっていました。
              </figcaption>
            </figure>

            {/* 2026-07-31、Satoshiさんの回答で埋めた（「当時共済は多分見てません」）。
                ⚠️ **「多分」を落とさない。**10年前に何を見たかは確かめようがないので、
                言い切ると、この記事が一番きらう「確かめないまま断定する」側に回る。 */}
            <p>
              当時、共済の列を見ていたか。<strong>たぶん、見ていません。</strong>
              普及率という言葉のついた表を開いて、県ごとに並べて、上と下を眺めて、それで満足していたと思います。
            </p>
            <p>
              共済の数字は、同じ資料の中にありました。
              <strong>私が開かなかっただけです。</strong>
            </p>

            <p>変わっていたのは、データではなく、私の見方のほうでした。</p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">帰省の前に</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">私が自分の保険証券で見たところ</h2>
            </div>
            <p>
              <strong>私は保険の専門家ではありません。</strong>
              どの保険に入るべきか、どの特約が要るかは書けませんし、書くべきでもないと思います。ここに並べるのは、
              <strong>私が自分の保険証券を開いて確認した3つ</strong>だけです。
            </p>

            <figure className="rv">
              <div className="fh">出発前に自分の契約で見たところ</div>
              <div className="fs">
                一般化した助言ではありません。私がやったことの記録です
              </div>
              <div className="fun">
                <div className="fstep">
                  <div className="pct">①</div>
                  <div className="desc">
                    <b>対人・対物の金額</b>
                    <em>いくらまで出る契約になっているか</em>
                  </div>
                </div>
                <div className="fstep">
                  <div className="pct">②</div>
                  <div className="desc">
                    <b>自分と同乗者側の補償</b>
                    <em>家族を乗せて長距離を走るので</em>
                  </div>
                </div>
                <div className="fstep">
                  <div className="pct">③</div>
                  <div className="desc">
                    <b>相手が無保険だったときに、自分の契約側で何が起きるか</b>
                    <em>恥ずかしながら、今回はじめてちゃんと読みました</em>
                  </div>
                </div>
              </div>
            </figure>

            <p>
              943万台という数字を見たあとだと、③の読み方が変わります。
              <strong>相手の備えは、こちらでは選べません。</strong>
            </p>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">この記事の芯</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">数字は、どう切るかで別の顔になります</h2>
            </div>
            <p>
              これは保険に限った話ではありませんでした。自分のサービスの利用者数でも、子どもに関する統計でも同じです。
              <strong>
                母数と定義を確かめないまま眺めた数字は、だいたい自分に都合よく見える。
              </strong>
            </p>

            <div className="closing rv">
              <p className="q">
                帰省の前に保険証券を開いてみたら、
                <br />
                10年前の自分の宿題が出てきた。
              </p>
              <p>
                そういう話でした。この記事の数字は、すべて出典のPDFから直接引いています。間違いを見つけたら教えていただけるとありがたいです（
                <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
                ）。直します。
                <br />
                <br />
                道中、お気をつけて。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 損害保険料率算出機構「2025年度（2024年度統計）自動車保険の概況」{" "}
                <a href="https://www.giroj.or.jp/publication/outline_j/j_2025.pdf">
                  giroj.or.jp/publication/outline_j/j_2025.pdf
                </a>
                <br />
                第31表「自動車共済・自動車保険 都道府県別 対人賠償普及率〈2025年3月末〉」および第19表「任意自動車保険 都道府県別普及率表〈2025年3月末〉」より。第19表の対人賠償欄は第31表の「自動車保険」列と一致します（本記事で16県を照合し全件一致）。全国計（保有車両
                82,699,840台／共済 10,921,258台・13.2%／保険 62,343,349台・75.4%／計 73,264,607台・88.6%）。ばらつきと順位に関する数値は、同表の都道府県別47件をすべて用いて本記事で算出しました（保険のみの最小・最大＝55.2%・82.7%、共済・保険計の最小・最大＝80.4%・92.7%、共済の最小・最大＝5.2%・32.4%）。本文では個別の県に言及していません（図には47県ぶんを都道府県コード順で並べています）。原典の表でもご確認いただけます。
              </li>
              <li>
                ※3 同上（2025年度版）第18表「任意自動車保険 用途・車種別普及率表〈2025年3月末〉」。
                対人賠償の普及率（自家用普通乗用車83.2%／自家用小型貨物車80.8%／自家用小型乗用車78.4%／
                軽四輪乗用車77.9%／軽四輪貨物車56.8%／二輪車47.2%／合計75.4%）。
                <b>この表は自動車共済を含みません。</b>合計75.4%は第31表の「自動車保険」列と一致します。
              </li>
              <li>
                ※2 損害保険料率算出機構「自動車保険の概況（2015年度）」{" "}
                <a href="https://www.giroj.or.jp/publication/outline_j/j_2015.pdf">
                  giroj.or.jp/publication/outline_j/j_2015.pdf
                </a>
                <br />
                第32表「自動車共済・自動車保険 都道府県別 対人賠償普及率〈平成27年3月末〉」より。全国計（保有車両
                80,670,393台／共済 11,105,110台・13.8%／保険 59,524,652台・73.8%／計 70,629,762台・87.6%）。10年前のばらつき（保険のみ 28.9ポイント、共済・保険計 15.2ポイント）も、同表の47件から本記事で算出しました。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ 本記事は公表されている統計をもとに構成しています。数値は各調査時点のものです。
            <br />※ 原典の用語は「加入率」ではなく
            <b>「普及率」</b>で、<b>対人賠償</b>についての数値です。車両保険や対物賠償の普及率とは異なります。
            <br />※ 本記事の「任意保険」は<b>共済を含む</b>言い方です。原典で
            <b>「任意自動車保険」</b>と題された表（第19表）は共済を含まず、その全国値は75.4%になります。
            <br />※ 保有車両数は「自動車保有車両数・月報」（自動車検査登録情報協会）から作成され、
            一般原動機付自転車および特定小型原動機付自転車を除きます。都道府県合計には都道府県不明分を含みます。
            <br />※ <b>原典に載っていない数値は、すべて本記事の計算です。</b>
            具体的には「943万台」「1,004万台」「約61万台」「約9台に1台」（保有台数と付保台数の差）、
            および「27.5／12.3／28.9／15.2ポイント」「6.2倍」「17県」「中央値14位」「5県」
            （都道府県別47件から算出したばらつきと順位）、「45県／2県」「中央値+1.2ポイント」
            「40県」「46県」（2015年と2025年の47件を突き合わせた10年の変化）。
            原典が示すのは各県の台数と普及率までです。
            <br />※
            本記事は保険・法律・金融上の助言を目的とするものではありません。ご自身の契約内容については、契約先の窓口にご確認ください。
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
