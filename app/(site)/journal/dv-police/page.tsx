import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import "../dash.css";
import { eyebrowOf } from "../posts";
// 🔴 図は dv 記事のものを再利用する。**複製しない。**
//    この記事は 2026-08-04 に dv 記事の §06・§07 を切り出して独立させたもの。
//    元記事が11,653字・図29と、他の記事の約2倍あったため（→ pr/log.md 2026-08-04）。
import { Fig09, Fig10, Fig11, Fig12, Fig13 } from "../dv/figures";

export const metadata: Metadata = {
  title: "DVの相談件数を、警察庁の統計で調べました",
  description:
    "配偶者からの暴力事案等の相談等件数は令和6年に94,937件で、DV防止法の施行以降で最多。5年の増加分のうち71.1%は男性被害者でした。ただし相談等件数は発生件数ではなく、その最多を更新した年は、計上する対象が広がった年でもありました。",
  alternates: { canonical: "/journal/dv-police/" },
  openGraph: {
    type: "article",
    title: "DVの相談件数を、警察庁の統計で調べました｜Santa Works Journal",
    description:
      "令和6年に94,937件で過去最多。増えたぶんの71.1%は男性被害者でした。ただし、その年は計上する対象が広がった年でもあります。",
    url: "/journal/dv-police/",
    images: ["/blog/dv-police/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DVの相談件数を、警察庁の統計で調べました｜Santa Works Journal",
    description:
      "相談は最多を更新、検挙は減少。数える主体も期間も向きも違う3つの系列を、一次資料から並べました。",
    images: ["/blog/dv-police/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal dash pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* ⚠️ 人物の写真・人型のイラストを使わない（全社ガードレール⑤）。
                dv 記事と同じ扱い。数字と図だけで作る。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/dv-police/hero.webp)",
                      "--hero-sp": "url(/blog/dv-police/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("dv-police")}</span>
            <h1 className="title">DVの相談件数を、警察庁の統計で調べました</h1>
            {/* 🔴 題名は主題まで。中身は lede が受ける（2026-08-04 の決めごと）。
                🔴 題名に「男性の被害が増えた」と読める語を置かない。
                   相談等件数は発生件数ではないので、記事が自分で否定するものを掲げることになる。 */}
            <p className="lede">
              内閣府の調査では、増えたかどうかが
              <Link href="/journal/dv/">言えませんでした</Link>。
              では、増えていると言われている警察庁の数字はどうか。
              <strong>令和6年に94,937件で、DV防止法の施行以降で最多</strong>。
              増えたぶんの<strong>71.1%は男性被害者</strong>でした。
              ただし、その最多を更新した年は、
              <strong>計上する対象が広がった年でもありました。</strong>
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.04</span>
              <span className="dot" />
              <span>読了 約4分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          <div className="kpi rv" data-fx data-num data-seq="120">
            <div className="tile">
              <span className="lbl">配偶者からの暴力事案等の相談等件数</span>
              <span className="v n">
                94,937<small>件</small>
              </span>
              <span className="note">令和6年。前年比+7.1%で施行以降の最多</span>
            </div>
            <div className="tile on">
              <span className="lbl">5年の増加のうち、男性被害者</span>
              <span className="v n">
                71.1<small>%</small>
              </span>
              <span className="note">12,294件のうち8,736件</span>
            </div>
            <div className="tile">
              <span className="lbl">関連する刑法犯等の検挙件数</span>
              <span className="v n">
                8,423<small>件</small>
              </span>
              <span className="note">前年比−2.5%。相談は最多、検挙は減少</span>
            </div>
          </div>

          {/* 01（旧 dv 記事の §06） */}
          <section className="blk">
            <span className="kicker">もう一方の数字</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">増えているぶんの7割は、男性の被害でした</h2>
            </div>

            <Fig09 />

            <p>
              配偶者からの暴力事案等の相談等件数は<strong>令和6年に94,937件</strong>。
              前年比+7.1%で、<strong>DV防止法の施行以降で最多</strong>です
              <sup>※1</sup>。
            </p>
            <p>この内訳を、被害者の性別で開くとこうなります。</p>

            <table className="tbl">
              <thead>
                <tr>
                  <th>相談等件数・被害者</th>
                  <th>令和2年</th>
                  <th>令和6年</th>
                  <th>5年の伸び</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>女性</td>
                  <td>63,165</td>
                  <td>66,723</td>
                  <td>
                    <b>+5.6%</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>男性</b>
                  </td>
                  <td>19,478</td>
                  <td>
                    <b>28,214</b>
                  </td>
                  <td>
                    <b>+44.9%</b>
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              女性への相談等件数は、5年でほとんど動いていません。
              <strong>増えたのは男性のほうです。</strong>
            </p>

            <Fig10 />

            <p>
              5年間で総数は12,294件増えました。そのうち
              <strong>男性被害者の増加が8,736件。増加分の71.1%</strong>を占めます。
            </p>

            <Fig11 />

            <p>
              加害者の側も裏返しに動いていて、
              <strong>女性加害者は19,921件 → 28,752件（+44.3%）</strong>。
              令和6年には全体の<strong>30.3%</strong>になりました。
            </p>

            {/* 🔴 ここで止まらないと、記事が「男性被害が増えた」と読まれる。
                相談等件数は発生件数ではない。**カウンタの話**であることを必ず置く。 */}
            <p>
              ここで一度止まります。
              <strong>これは相談等件数であって、発生件数ではありません。</strong>
              男性の被害が増えたのか、男性が相談するようになったのかを、
              この数字は区別できません。
            </p>
            <p>
              内閣府の調査では、
              <strong>男性被害者の57.2%は、どこにも相談していませんでした</strong>
              <sup>※3</sup>（
              <Link href="/journal/dv/">前の記事</Link>で見たところです）。
              下がる余地がいちばん大きいのは男性側です。
              <strong>カウンタだけが動いている可能性は、十分にあります。</strong>
            </p>
          </section>

          {/* 02（旧 dv 記事の §07）─────────────────────────
              🔴 公表資料の言い回しをそのまま引いて、評価を足さずに次へ行く。
                 ここで一言でも皮肉を入れると、記事全体が社会評論に倒れる
                 （dv-src/SOURCES.md「罠」8）。 */}
          <section className="blk">
            <span className="kicker">器のほうを見る</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">その最多の年に、数える範囲も広がっていました</h2>
            </div>

            <Fig12 />

            <p>警察庁の資料には、表の下に小さく注が付いています。</p>

            <div className="pull rv">
              <p className="q">
                ＤＶ防止法の改正を受け、…
                <em>
                  令和６年４月１日施行以降、自由、名誉又は財産に対する脅迫についても計上
                </em>
              </p>
              <div className="rule" />
              <p className="sub">
                <b>過去最多を更新した令和6年は、計上する対象が広がった年でもありました。</b>
              </p>
            </div>

            <p>
              しかも初めてではありません。平成16年に離婚後の暴力、
              平成20年に生命・身体への脅迫、平成26年に同居する交際相手からの暴力が、
              それぞれ途中から足されています。
              <strong>この系列は、伸びながら、器も広げてきました。</strong>
            </p>
            <p>
              同じことが、
              <Link href="/journal/dv/">内閣府の調査でも起きていました</Link>。
              <strong>
                あちらは数える人が入れ替わり、こちらは数える出来事が広がった。
              </strong>
              どちらも、増減を読む前に確かめないといけない変更です。
            </p>

            <Fig13 />

            <p>そのうえ、呼び名が同じでも、中身は3つに分かれています。</p>

            <table className="tbl">
              <thead>
                <tr>
                  <th>系列</th>
                  <th>直近</th>
                  <th>動き</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>警察庁 相談等件数（暦年）</td>
                  <td>94,937件（令和6年）</td>
                  <td>
                    <b>最多を更新中</b>
                  </td>
                </tr>
                <tr>
                  <td>配偶者暴力相談支援センター（年度）</td>
                  <td>約12.8万件（令和6年度）</td>
                  <td>
                    <b>令和2年度がピーク</b>。以降ほぼ横ばい
                  </td>
                </tr>
                {/* 🔴 一度「開設年をピークにやや減」と書いた（2026-08-03 に訂正）。
                    ピークは令和3年度の54,489件で、令和6年度は前年度から微増。
                    グラフPDFは値のテキスト順が年の順にならない
                    （→ dv-src/SOURCES.md §3③）。 */}
                <tr>
                  <td>DV相談＋（年度）</td>
                  <td>45,858件（令和6年度）</td>
                  <td>令和3年度がピーク。以降4〜5万件台</td>
                </tr>
              </tbody>
            </table>

            <p>
              数える主体が違い、年度と暦年が違い、総数が違い、
              <strong>向きも違います。</strong>
            </p>
            <p>
              もうひとつ添えておくと、
              <strong>関連する刑法犯等の検挙件数は8,423件で、前年比−2.5%</strong>
              でした。相談は最多を更新して、検挙は減っています。
            </p>
          </section>

          {/* 03 おわりに */}
          <section className="blk">
            <span className="kicker">おわりに</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">最多を更新した、とだけは言えます</h2>
            </div>

            <div className="closing rv">
              <p className="q">
                相談は最多を更新しました。ただ、それが
                <br />
                「増えた」なのかは、この数字では決められません。
              </p>
              <p>
                件数は確かに動いています。ただ、動いた先にあるのが
                <b>被害そのものなのか、相談する人の数なのか、数える範囲なのか</b>。
                この統計は、そこを分けて持っていません。
                <br />
                <br />
                この記事の数字は、すべて出典の一次資料から直接転記したものです。
                間違いを見つけたら教えていただけるとありがたいです（
                <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
                ）。直します。
              </p>
            </div>

            {/* 🔴 意見の節（2026-08-04〜の方針・記憶 journal-own-opinion）。
                ⚠️ **dv 記事と同じ型にしない。**一度そちらと同じ
                「ここから先は、私の考えです」→「窓口を下に置いたのは、そのためです」で
                書いたら、**中身が違っても同じに見えた**（Satoshiさん指摘）。
                → **枠も締めも変える。**節を切る役目だけ果たせばよく、決まった文言は要らない。
                ⚠️ 内容も、この記事にしか書けないもの（＝件数の話）にする。
                🔴 感嘆符を使わない（brand/voice.md）。命令形にしない。 */}
            <div className="opinion rv">
              <p>
                ここからは、数字の話ではありません。
                <br />
                相談しても、件数が1つ増えるだけではないか。
                この記事を書きながら、私もそう思いました。
              </p>
              <p>
                それでも、増えた1件のほうがいいと思っています。
                数える範囲が広がっても、カウンタが動いただけだとしても、
                <b>その1件は、誰かが言えたということだからです。</b>
              </p>
            </div>

            <div className="note rv">
              <span className="nh">心当たりがあるときの窓口です</span>
              <p>
                <b>DV相談＋</b>（内閣府）… <b>0120-279-889</b>／24時間／
                <a href="https://soudanplus.jp/" target="_blank" rel="noreferrer">
                  soudanplus.jp
                </a>
              </p>
              <p>
                <b>DV相談ナビ</b> … <b>#8008</b>（最寄りの相談機関につながります）
              </p>
              <p>緊急のとき … 110</p>
            </div>

            <div className="sources rv">
              <h3>出典</h3>
              <ol>
                <li>
                  ※1 警察庁「令和6年におけるストーカー事案、配偶者からの暴力事案等、
                  児童虐待事案等への対応状況について」（令和7年5月22日公表）第2。
                  被害者・加害者の性別内訳、および計上対象の変遷（注3）はこの資料によります。
                  総数は「令和6年の犯罪情勢」（令和7年2月・警察庁長官官房）図29・図30と一致します。
                </li>
                <li>
                  ※2 内閣府男女共同参画局「配偶者暴力相談支援センターへの相談件数の推移」、
                  および「DV相談＋」の相談件数。
                </li>
                <li>
                  ※3 内閣府「男女間における暴力に関する調査」（令和5年度）。
                  57.2%は被害を受けた男性173人のうち、どこにも相談しなかった人の割合です。
                  詳しくは<Link href="/journal/dv/">前の記事</Link>に書いています。
                </li>
              </ol>
            </div>

            <p className="disclaimer">
              ※ 警察庁の「相談等件数」は、
              <b>警察が相談等を受理した件数であり、発生件数ではありません。</b>
              <br />※ 計上の対象は法改正のたびに広がっています（平成16年・20年・26年・令和6年）。
              本記事で伸び率を示した令和2年〜令和6年の区間には、
              <b>令和6年4月1日の拡大が含まれます。</b>
              <br />※ 警察庁は暦年、配偶者暴力相談支援センターと DV相談＋ は年度の集計です。
              <b>同じ図の上で足したり引いたりできる数字ではありません。</b>
            </p>

            <p className="disclaimer">
              この記事は、
              <Link href="/journal/dv/">「DVについて調べてみました」</Link>
              の後半を切り出して独立させたものです（2026-08-04）。
              内閣府の調査の話は、そちらに書いています。
            </p>
          </section>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
