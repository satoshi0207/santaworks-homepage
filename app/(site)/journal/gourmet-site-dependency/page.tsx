import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";

export const metadata: Metadata = {
  title: "飲食店の集客、グルメサイトだけに委ねてよいか——公開データから考える",
  description:
    "グルメサイト・SNSへの依存と自社ホームページの役割を、公正取引委員会の調査や各種の公開データ（2020〜2026）から整理します。手数料・表示順位・口コミ評価・予約経路のデータを可視化。",
  alternates: { canonical: "/journal/gourmet-site-dependency/" },
  openGraph: {
    type: "article",
    title: "飲食店の集客、グルメサイトだけに委ねてよいか｜Santa Works Journal",
    description:
      "グルメサイト依存と自社ホームページの役割を公開データ（2020〜2026）で整理。手数料・表示順位・口コミ・予約経路を可視化。",
    url: "/journal/gourmet-site-dependency/",
  },
};

// インラインの CSS カスタムプロパティ（--w 等）を JSX の style に渡すヘルパー
const cvar = (vars: Record<string, string>) =>
  vars as unknown as React.CSSProperties;

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ヒーロー写真: public/blog/gourmet-site-dependency/hero.webp を置くと自動表示。
                無い間は下のブランドグラデが出る（壊れ画像にならない）。推奨: 商用可フリー素材・顔が主役でない・横1600px程度 */}
            <figure className="herofig rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "url(/blog/gourmet-site-dependency/hero.webp)",
                  }}
                />
                <span className="chip">SANTA WORKS JOURNAL</span>
                <span className="ph-t">データで読み解く、飲食店の集客</span>
              </div>
            </figure>
            <span className="eyebrow">データで考える</span>
            <h1 className="title">
              飲食店の集客、グルメサイトだけに
              <br />
              委ねてよいのでしょうか。
            </h1>
            <p className="lede">
              「Instagramと食べログがあれば、自社ホームページは要らないのでは」——飲食店の集客をめぐって、しばしば語られる問いです。実際、グルメサイトを使う飲食店は
              <strong>約63%</strong>にのぼる一方、自社ホームページの保有は
              <strong>50.2%</strong>
              。この「依存」と「未整備」のギャップは、公開データにもあらわれています。本記事では結論を押し付けず、公開データだけを並べて、その判断材料を整理します。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.07.25</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 公開データ</span>
            </div>
          </div>

          <div className="duel rv">
            <div className="side a">
              <div className="big num">
                63<small>%</small>
              </div>
              <div className="lab">
                <b>グルメサイトを利用</b>している飲食店
              </div>
            </div>
            <div className="vs">vs</div>
            <div className="side b">
              <div className="big num">
                50.2<small>%</small>
              </div>
              <div className="lab">
                <b>自社ホームページを保有</b>している飲食店
              </div>
            </div>
          </div>
          <p className="duel-cap">
            出典 ※1（公正取引委員会2020）／ ※2　※調査・母数が異なる数値の並置です
          </p>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  グルメサイト利用は約63%、自社HP保有は50.2%。
                  <strong>依存と整備状況にギャップ</strong>がある。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  手数料・表示順位・口コミ評価は、
                  <strong>構造的にプラットフォーム側に依存</strong>している。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  自社サイトは予約経路として既に機能し（一部調査で約34〜46%）、
                  <strong>顧客データも自店に蓄積</strong>される。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 現状 */}
          <section className="blk">
            <span className="kicker">現状</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">多くの飲食店がグルメサイトに依存している</h2>
            </div>
            <p>
              公正取引委員会が2020年に実施した「飲食店ポータルサイトに関する取引実態調査」によりますと、
              <strong>約63%の飲食店が集客を目的として何らかのグルメサイトを利用</strong>
              しており、そのうち約57%が「グルメサイトの影響力は非常に大きい、または大きい」と回答しています
              <sup>※1</sup>
              。一方で、自社ホームページを保有している飲食店は50.2%というデータもあります
              <sup>※2</sup>。
            </p>

            <figure className="rv">
              <p className="fh">依存度と、自社インフラの整備状況</p>
              <p className="fs">
                それぞれ調査・母数が異なる数値の並置です（比率の直接比較ではありません）
              </p>
              <div className="stats">
                <div className="stat ac">
                  <div className="big num">
                    63<small>%</small>
                  </div>
                  <div className="cap">集客のためグルメサイトを利用</div>
                  <div className="src">公取委2020／※1</div>
                </div>
                <div className="stat">
                  <div className="big num">
                    57<small>%</small>
                  </div>
                  <div className="cap">うち「影響力は大きい」と回答</div>
                  <div className="src">公取委2020／※1</div>
                </div>
                <div className="stat">
                  <div className="big num">
                    50.2<small>%</small>
                  </div>
                  <div className="cap">自社ホームページを保有</div>
                  <div className="src">※2</div>
                </div>
              </div>
              <figcaption>
                依存度の高さと自社インフラの整備状況の間には、一定の差があるように見受けられます。
              </figcaption>
            </figure>
          </section>

          {/* 02 手数料と表示順位 */}
          <section className="blk">
            <span className="kicker">Data 01</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">手数料と表示順位の構造</h2>
            </div>
            <p>
              前述の調査では、グルメサイトの多くが
              <strong>予約客お一人あたり50〜200円程度の送客手数料</strong>
              を飲食店から徴収している実態が報告されています。ポイントプログラムの原資も、飲食店側の負担でまかなわれるケースが多いとされます
              <sup>※1※3</sup>。
            </p>

            <div className="callout rv">
              <div className="big num">
                50<span>〜</span>200<span>円</span>
              </div>
              <div className="tx">
                <b>ネット予約1名あたりの送客手数料</b>
                の目安。宴会シーズンなど予約が集中するほど、この従量コストは積み上がっていきます。
                <sup>（※1・※3）</sup>
              </div>
            </div>

            <p>
              また表示順位については、
              <strong>
                高額な掲載プランを契約している飲食店ほど、検索結果の上位に表示されやすい構造
              </strong>
              があると報告書は指摘しています。公正取引委員会は、「集客のために表示順位を上げなければ」という圧力が高額プラン契約を事実上強いる可能性があるとし、独占禁止法上の
              <strong>「優越的地位の濫用」に該当するおそれ</strong>
              があると言及しています<sup>※1※3</sup>
              。契約面でも、約11%の飲食店が、グルメサイト側からの一方的な契約内容の変更を経験したと回答しています
              <sup>※1※3</sup>。
            </p>
          </section>

          {/* 03 口コミ・評価 */}
          <section className="blk">
            <span className="kicker">Data 02</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">口コミ・評価は自店でコントロールしにくい</h2>
            </div>
            <p>
              同調査では、
              <strong>
                無断で掲載された情報により不利益を被った経験があると回答した飲食店は約29%
              </strong>
              にのぼりました。そして、削除・修正を求めても必ずしも解決するとは限らない、という実態がうかがえます
              <sup>※1※3</sup>。
            </p>

            <figure className="rv">
              <p className="fh">「無断掲載で不利益」を受けた後、どうなったか</p>
              <p className="fs">
                公正取引委員会 調査の回答比率より（各項目は母数が異なります）
              </p>
              <div className="fun">
                <div className="fstep">
                  <div className="pct num">
                    29<small>%</small>
                  </div>
                  <div className="desc">
                    <b>無断掲載情報で不利益を被った経験がある</b>
                    <em>回答した飲食店の割合</em>
                  </div>
                </div>
                <div className="fstep">
                  <div className="pct num">
                    54<small>%</small>
                  </div>
                  <div className="desc">
                    <b>削除・修正を求めた</b>
                    <em>不利益への対応を試みた</em>
                  </div>
                </div>
                <div className="fstep">
                  <div className="pct num">
                    21<small>%</small>
                  </div>
                  <div className="desc">
                    <b>実際に削除・修正できた</b>
                    <em>求めても実現は限定的</em>
                  </div>
                </div>
                <div className="fstep bad">
                  <div className="pct num">
                    29<small>%</small>
                  </div>
                  <div className="desc">
                    <b>「拒否された」との回答</b>
                    <em>対応を求めても拒まれるケース</em>
                  </div>
                </div>
              </div>
              <figcaption>
                不利益な情報に気づいて対応を求めても、削除・修正が実現するとは限りません。
                <sup>※1※3</sup>
              </figcaption>
            </figure>

            <p>
              この構造がもたらした実際の紛争事例として、グルメサイト最大手が評価点の算出アルゴリズムを変更した結果、店舗の評価平均が下落したとして、店舗運営企業が損害賠償を求めた訴訟があります。
            </p>

            <div className="note rv">
              <span className="nh">
                この訴訟のその後 ── 最高裁で決着しました（2026年）
              </span>
              一審の東京地方裁判所（2022年6月）は、アルゴリズム変更が「優越的地位の濫用」にあたるとして運営企業側に
              <b>約3,840万円の賠償を命じました</b>
              <sup>※4</sup>
              。もっとも控訴審の東京高等裁判所（2024年1月）は、変更を「合理的」として賠償命令を取り消し、
              <b>運営企業側が逆転勝訴</b>
              <sup>※10</sup>。
              <b>
                2026年、最高裁判所が店舗側の上告を退け、運営企業側の勝訴が確定
              </b>
              しました<sup>※11</sup>
              。結果として賠償は認められませんでしたが、いずれの審級でも前提とされたのは、
              <b>
                プラットフォーム側の一方的な仕様変更によって、店舗の点数・集客が実際に動いた
              </b>
              という事実そのものです。数年におよぶ裁判を経ても店舗側の救済には至らなかった——依存のリスクを考えるうえで、示唆的な一件といえます。
            </div>
          </section>

          {/* 04 消費者行動 */}
          <section className="blk">
            <span className="kicker">Data 03</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">消費者の店探し行動にも変化が</h2>
            </div>
            <p>
              飲食店向け予約・顧客管理システムを提供するTableCheck社の調査では、グルメサイトの評価・ランキングを「信頼していない」「気にしていない」と回答した飲食店が、合わせて
              <strong>約7割</strong>にのぼりました<sup>※5</sup>
              。消費者側も、評価の受け止め方に次のような傾向が見られます。
            </p>

            <figure className="rv">
              <p className="fh">消費者は、グルメサイトの評価をどう受け止めているか</p>
              <p className="fs">
                TableCheck 消費者調査より<sup>※6</sup>（横軸＝回答者に占める割合）
              </p>
              <div className="split">
                <div className="sp ac">
                  <div className="top">
                    <span className="t">「情報源の一つに過ぎない」</span>
                    <span className="p num" data-to="56">
                      56%
                    </span>
                  </div>
                  <div className="tk">
                    <i data-w="56" style={cvar({ width: "56%" })} />
                  </div>
                </div>
                <div className="sp">
                  <div className="top">
                    <span className="t">「店選びの決定的な基準」</span>
                    <span className="p num" data-to="12">
                      12%
                    </span>
                  </div>
                  <div className="tk">
                    <i data-w="12" style={cvar({ width: "12%" })} />
                  </div>
                </div>
              </div>
              <figcaption>
                評価を「決定的な基準」とする層は12%にとどまります。同社は別調査で、店探し行動がグルメサイトから「Google検索」「Googleマップ」へシフトする傾向も報告しています
                <sup>※7</sup>。
              </figcaption>
            </figure>

            <p>
              SNSは情報収集の<strong>入口</strong>
              として使われる一方、最終的な検討・確認の段階では検索エンジンや地図アプリが使われるケースが多いとされます
              <sup>※7</sup>
              。「見つけてもらう入口」と「確かめてもらう受け皿」は、必ずしも同じ場所ではない、ということです。
            </p>

            <p>
              この流れは、より新しい調査でさらに鮮明になっています。2022年の調査では、飲食店探しに使うツールとして
              <strong>
                「Google」（86.1%）が「グルメサイト」（61.3%）を初めて上回りました
              </strong>
              <sup>※12</sup>。
            </p>

            <figure className="rv">
              <p className="fh">【2022年】飲食店探しに「使うツール」</p>
              <p className="fs">
                TableCheck 意識調査（2022年6月・全国の消費者1,100名）より
                <sup>※12</sup>
              </p>
              <div className="split">
                <div className="sp ac">
                  <div className="top">
                    <span className="t">Google（検索・マップ）</span>
                    <span className="p num" data-to="86.1" data-decimals="1">
                      86.1%
                    </span>
                  </div>
                  <div className="tk">
                    <i data-w="86.1" style={cvar({ width: "86.1%" })} />
                  </div>
                </div>
                <div className="sp">
                  <div className="top">
                    <span className="t">グルメサイト</span>
                    <span className="p num" data-to="61.3" data-decimals="1">
                      61.3%
                    </span>
                  </div>
                  <div className="tk">
                    <i data-w="61.3" style={cvar({ width: "61.3%" })} />
                  </div>
                </div>
              </div>
              <figcaption>
                飲食店探しに使うツールで、Googleがグルメサイトを初めて上回りました。グルメサイトを「信頼しない」人も30.4%へ増加（2年で約1.2倍）し、理由には「自分好みの店が探せない」「情報が信頼できない」などが挙がっています
                <sup>※12</sup>。
              </figcaption>
            </figure>
          </section>

          {/* 05 予約経路 */}
          <section className="blk">
            <span className="kicker">Data 04</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">予約経路としての自社ホームページ</h2>
            </div>
            <p>
              ネット予約の受付経路をたずねた調査では、大手グルメサイトに続き、
              <strong>自社ホームページが34.1%</strong>
              という結果でした<sup>※8</sup>
              。大手には及ばないものの、既に一定の予約経路として機能していることが読み取れます。
            </p>

            <figure className="rv">
              <p className="fh">ネット予約の受付経路（複数回答）</p>
              <p className="fs">
                飲食店ドットコム「飲食店リサーチ」より<sup>※8</sup>
              </p>
              <div className="chart">
                <div className="grid">
                  <div className="g" style={{ left: "0%" }}>
                    <b>0</b>
                  </div>
                  <div className="g" style={{ left: "25%" }}>
                    <b>25</b>
                  </div>
                  <div className="g" style={{ left: "50%" }}>
                    <b>50</b>
                  </div>
                  <div className="g" style={{ left: "75%" }}>
                    <b>75%</b>
                  </div>
                </div>
                <div className="rows">
                  <div className="row">
                    <div className="lb">食べログ</div>
                    <div className="tk">
                      <div className="fl" data-w="50" style={cvar({ "--w": "50%" })} />
                      <div className="vl" data-to="50.0" style={cvar({ "--w": "50%" })}>
                        50.0%
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="lb">ぐるなび</div>
                    <div className="tk">
                      <div className="fl" data-w="42.8" style={cvar({ "--w": "42.8%" })} />
                      <div className="vl" data-to="42.8" style={cvar({ "--w": "42.8%" })}>
                        42.8%
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="lb">
                      ホットペッパー
                      <br />
                      グルメ
                    </div>
                    <div className="tk">
                      <div className="fl" data-w="42.8" style={cvar({ "--w": "42.8%" })} />
                      <div className="vl" data-to="42.8" style={cvar({ "--w": "42.8%" })}>
                        42.8%
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="lb ac">
                      自社
                      <br />
                      ホームページ
                    </div>
                    <div className="tk">
                      <div className="fl ac" data-w="34.1" style={cvar({ "--w": "34.1%" })} />
                      <div className="vl" data-to="34.1" style={cvar({ "--w": "34.1%" })}>
                        34.1%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption>
                公式ウェブ予約を経由すると、来店・注文履歴などの顧客データが店舗側に直接蓄積され、店舗と顧客の関係構築に寄与しうるとされます
                <sup>※9</sup>
                。グルメサイト経由の予約では、こうしたデータは基本的にプラットフォーム側が保持する形になります。
              </figcaption>
            </figure>

            <p>
              より新しい2025年の調査でも、この傾向は続いています。ネット予約に使うメディアは食べログ（60.5%）に次いで、
              <strong>店舗ウェブサイトが2位（46.5%）</strong>
              に入りました<sup>※13</sup>。
            </p>

            <figure className="rv">
              <p className="fh">【2025年】ネット予約に「使うメディア」</p>
              <p className="fs">
                COLLINS「飲食店の選び方」調査（2025年2月発表）より<sup>※13</sup>
              </p>
              <div className="chart">
                <div className="grid">
                  <div className="g" style={{ left: "0%" }}>
                    <b>0</b>
                  </div>
                  <div className="g" style={{ left: "25%" }}>
                    <b>25</b>
                  </div>
                  <div className="g" style={{ left: "50%" }}>
                    <b>50</b>
                  </div>
                  <div className="g" style={{ left: "75%" }}>
                    <b>75%</b>
                  </div>
                </div>
                <div className="rows">
                  <div className="row">
                    <div className="lb">食べログ</div>
                    <div className="tk">
                      <div className="fl" data-w="60.5" style={cvar({ "--w": "60.5%" })} />
                      <div className="vl" data-to="60.5" style={cvar({ "--w": "60.5%" })}>
                        60.5%
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="lb ac">
                      店舗
                      <br />
                      ウェブサイト
                    </div>
                    <div className="tk">
                      <div className="fl ac" data-w="46.5" style={cvar({ "--w": "46.5%" })} />
                      <div className="vl" data-to="46.5" style={cvar({ "--w": "46.5%" })}>
                        46.5%
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="lb">ホットペッパー</div>
                    <div className="tk">
                      <div className="fl" data-w="26.2" style={cvar({ "--w": "26.2%" })} />
                      <div className="vl" data-to="26.2" style={cvar({ "--w": "26.2%" })}>
                        26.2%
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="lb">Google Map</div>
                    <div className="tk">
                      <div className="fl" data-w="24.9" style={cvar({ "--w": "24.9%" })} />
                      <div className="vl" data-to="24.9" style={cvar({ "--w": "24.9%" })}>
                        24.9%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption>
                店舗ウェブサイトが2位に。自社サイトの存在感はむしろ高まっています。
                <br />※
                ①の34.1%（別調査）とは調査主体・設問・時期が異なるため、厳密な同一時系列の比較ではありません。
              </figcaption>
            </figure>
          </section>

          {/* 06 まとめ */}
          <section className="blk">
            <span className="kicker">まとめ</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">見えてきた構造</h2>
            </div>
            <p>
              ここまでのデータを並べると、両者の役割の違いが、次のように整理できます。
            </p>

            <div className="vsgrid rv">
              <div className="vscol plat">
                <div className="cap">グルメサイト・SNS</div>
                <ul>
                  <li>
                    <span className="ic">◎</span>
                    <span>
                      <span className="k">初期コスト・拡散力</span>
                      高い（無料で始めやすく利用率も高い）
                    </span>
                  </li>
                  <li>
                    <span className="ic">△</span>
                    <span>
                      <span className="k">表示順位・評価</span>
                      プラットフォーム側の仕様に依存
                    </span>
                  </li>
                  <li>
                    <span className="ic">△</span>
                    <span>
                      <span className="k">手数料</span>
                      送客手数料等が発生
                    </span>
                  </li>
                  <li>
                    <span className="ic">△</span>
                    <span>
                      <span className="k">顧客データ</span>
                      プラットフォーム側に蓄積
                    </span>
                  </li>
                  <li>
                    <span className="ic">◎</span>
                    <span>
                      <span className="k">予約経路の実績</span>
                      大手3サイトで4〜5割
                    </span>
                  </li>
                </ul>
              </div>
              <div className="vscol hp">
                <div className="cap">自社ホームページ</div>
                <ul>
                  <li>
                    <span className="ic">△</span>
                    <span>
                      <span className="k">初期コスト・拡散力</span>
                      制作コストがかかる
                    </span>
                  </li>
                  <li>
                    <span className="ic">◎</span>
                    <span>
                      <span className="k">表示順位・評価</span>
                      自店で完全にコントロール可能
                    </span>
                  </li>
                  <li>
                    <span className="ic">◎</span>
                    <span>
                      <span className="k">手数料</span>
                      制作・運用コストのみ
                    </span>
                  </li>
                  <li>
                    <span className="ic">◎</span>
                    <span>
                      <span className="k">顧客データ</span>
                      自店に直接蓄積される
                    </span>
                  </li>
                  <li>
                    <span className="ic">○</span>
                    <span>
                      <span className="k">予約経路の実績</span>
                      約34〜46%（無視できない規模）
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="closing rv">
              <p className="q">
                「どちらか一方」ではなく、「どう組み合わせるか」。
              </p>
              <p>
                グルメサイト・SNSへの高い依存度と、そこで生じる手数料・表示順位・評価コントロールの構造的課題。一方で、自社ホームページが既に一定の予約経路・顧客接点として機能している実態。この両方を踏まえたうえで、最適なバランスは店舗ごとの事情によって異なります。本記事が、その判断材料の一つになれば幸いです。
              </p>
            </div>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 公正取引委員会「飲食店ポータルサイトに関する取引実態調査報告書」（令和2年3月18日）{" "}
                <a href="https://www.jftc.go.jp/houdou/pressrelease/2020/mar/200318-2.pdf">
                  jftc.go.jp/houdou/pressrelease/2020/mar/200318-2.pdf
                </a>
              </li>
              <li>
                ※2 株式会社hypex「飲食店のSNS運用で集客・売上を伸ばす方法と成功事例」{" "}
                <a href="https://hypex.jp/articles/restaurant-sns-examples">
                  hypex.jp/articles/restaurant-sns-examples
                </a>
              </li>
              <li>
                ※3 飲食店ドットコム ジャーナル「公取委がグルメサイトを調査。飲食店からはサイト上の表示順位に不満の声も」{" "}
                <a href="https://www.inshokuten.com/foodist/article/5716/">
                  inshokuten.com/foodist/article/5716/
                </a>
              </li>
              <li>
                ※4 ITmedia NEWS「『食べログ』運営会社に3840万円の賠償命令 アルゴリズム変更→点数ダウンで客足減 東京地裁」（2022年6月）{" "}
                <a href="https://www.itmedia.co.jp/news/articles/2206/16/news187.html">
                  itmedia.co.jp/news/articles/2206/16/news187.html
                </a>
              </li>
              <li>
                ※5 株式会社TableCheck プレスリリース「グルメサイト評価、『信頼していない』『気にしない』飲食店7割近く」{" "}
                <a href="https://prtimes.jp/main/html/rd/p/000000045.000023564.html">
                  prtimes.jp/main/html/rd/p/000000045.000023564.html
                </a>
              </li>
              <li>
                ※6 飲食店ドットコム ジャーナル「グルメサイト離れが加速？ テーブルチェックが飲食店と消費者に意識調査」{" "}
                <a href="https://www.inshokuten.com/foodist/article/5622/">
                  inshokuten.com/foodist/article/5622/
                </a>
              </li>
              <li>
                ※7 株式会社TableCheck「【第2回グルメサイト意識調査】飲食店探しは『Googleマップ』『ウェブ検索』が急増」{" "}
                <a href="https://www.tablecheck.com/ja/company/press/ota-survey-20210409/">
                  tablecheck.com/ja/company/press/ota-survey-20210409/
                </a>
              </li>
              <li>
                ※8 飲食店ドットコム ジャーナル「飲食店の『ネット予約』、店主が抱える悩みは？」{" "}
                <a href="https://www.inshokuten.com/foodist/article/4826/">
                  inshokuten.com/foodist/article/4826/
                </a>
              </li>
              <li>
                ※9 株式会社TableCheck「TCinfographic｜データでみる飲食業界とテーブルチェック」{" "}
                <a href="https://www.tablecheck.com/ja/join/about-us/tcinfographic/">
                  tablecheck.com/ja/join/about-us/tcinfographic/
                </a>
              </li>
              <li>
                ※10 日本経済新聞「食べログ逆転勝訴、点数修正は『合理的』 それでも戻らぬ口コミの信頼」（2024年1月・東京高裁判決）{" "}
                <a href="https://www.nikkei.com/article/DGXZQOUC034GG0T00C24A4000000/">
                  nikkei.com/article/DGXZQOUC034GG0T00C24A4000000/
                </a>
              </li>
              <li>
                ※11 飲食店ドットコム ジャーナル／各種報道「食べログ訴訟、最高裁が店舗側の上告を退け運営会社の勝訴が確定」（2026年）{" "}
                <a href="https://www.inshokuten.com/foodist/article/7349/">
                  inshokuten.com/foodist/article/7349/
                </a>
              </li>
              <li>
                ※12 株式会社TableCheck「加速するグルメサイト離れ。『Google』利用率トップに。」（2022年8月・意識調査）{" "}
                <a href="https://www.tablecheck.com/ja/join/about-us/press/ota-survey-2022/">
                  tablecheck.com/ja/join/about-us/press/ota-survey-2022/
                </a>
              </li>
              <li>
                ※13 COLLINS株式会社「【飲食店の選び方】2025年最新調査結果を発表！」（2025年2月）{" "}
                <a href="https://prtimes.jp/main/html/rd/p/000000006.000135874.html">
                  prtimes.jp/main/html/rd/p/000000006.000135874.html
                </a>
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※
            本記事は公開されている調査・報道をもとに構成しています。各数値は出典元の調査時点のものであり、調査ごとに対象・母数・時期が異なります。特定のサービスを推奨・批判する意図はなく、最終的な判断は読者の皆様にお委ねしています。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
