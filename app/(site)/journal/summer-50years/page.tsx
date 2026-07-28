import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import { CalendarPc, CalendarSp, SlopePc, SlopeSp } from "./figures";
import "../journal.css";

const TITLE = "昔の夏は涼しかった、を50年分の記録で確かめました";
const DESC =
  "最近、夏の暑さに耐えられなくなってきました。ただ、それは年齢のせいかもしれません。気象庁の公開データで東京の50年分（1976〜2025年）を数えたら、猛暑日は10年平均で1.4日から13.0日になっていました。確かめる途中で、観測地点が引っ越していたことにも気づきます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/journal/summer-50years/" },
  openGraph: {
    type: "article",
    title: `${TITLE}｜Santa Works Journal`,
    description:
      "東京の猛暑日は、10年平均で1.4日から13.0日へ。気象庁の公開データを50年分数えて、「昔の夏は涼しかった」を確かめました。",
    url: "/journal/summer-50years/",
    images: [
      {
        url: "/blog/summer-50years/ogp.png",
        width: 1200,
        height: 630,
        alt: `${TITLE}｜Santa Works Journal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE}｜Santa Works Journal`,
    description:
      "東京の猛暑日は、10年平均で1.4日から13.0日へ。50年分の記録で確かめました。",
    images: ["/blog/summer-50years/ogp.png"],
  },
};

/** 10年ごとの猛暑日日数。バー長は最大値(13.0日)を84%に割り当てている */
const DECADES = [
  { label: "1976–1985", v: 1.4, ac: false },
  { label: "1986–1995", v: 3.2, ac: false },
  { label: "1996–2005", v: 3.3, ac: false },
  { label: "2006–2015", v: 6.2, ac: false },
  { label: "2016–2025", v: 13.0, ac: true },
];
const BAR = (v: number) => ((v / 13.0) * 84).toFixed(1);

export default function Page() {
  return (
    <div className="journal pt-14">
      <JournalFx />
      <div className="jprog" />
      <div className="wrap">
        <article>
          {/* 熊本地震のお見舞い。記事本文ではないので静かな器に置く */}
          <div className="condolence">
            <p>
              2026年7月28日に発生した、熊本県熊本地方を震源とする地震により被害を受けられた皆さまに、心よりお見舞い申し上げます。
            </p>
            <p>
              お亡くなりになった方々のご冥福をお祈りするとともに、ご家族の皆さまに謹んでお悔やみを申し上げます。いまも安否の分からない方の一日も早い救出と、被災された地域に穏やかな日常が戻ることを願っております。
            </p>
          </div>

          <div className="hero">
            <figure className="herofig nodim rv">
              <div className="ph">
                {/* chip は置かない。`.ph` が中身を中央寄せする作りなので、
                    グラフの真ん中に重なってしまう。見出しは図版側に入れてある。 */}
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/summer-50years/hero.webp)",
                      "--hero-sp": "url(/blog/summer-50years/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">公開データ</span>
            <h1 className="title">
              昔の夏は涼しかった、を
              <br />
              50年分の記録で確かめました
            </h1>
            <p className="lede">
              最近、夏の暑さに耐えられなくなってきました。こどもの頃は、こうではなかった気がします。ただ、これは
              <strong>年齢のせいかもしれません。</strong>
              「昔はよかった」は、いちばん疑ったほうがいい種類の記憶です。だから、公開されている気温の記録で確かめました。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.07.29</span>
              <span className="dot" />
              <span>読了 約7分</span>
              <span className="dot" />
              <span>公開データ / 出典つき</span>
            </div>
          </div>

          <div className="toc rv">
            <h3>この記事のポイント</h3>
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  東京の猛暑日は、10年平均で<strong>1.4日から13.0日</strong>
                  へ。「昔は涼しかった」は本当でした
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  猛暑日が1日もない夏が、かつては<strong>2年に1回</strong>
                  あった。直近10年はゼロ
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  暑い日が増えただけでなく、
                  <strong>夏の期間が前後に伸びた</strong>。6月末から9月半ばまで
                </span>
              </li>
              <li>
                <span className="n">04</span>
                <span className="tx">
                  確かめる途中で計算が合わなくなった。
                  <strong>東京の観測地点は2014年に引っ越していた</strong>
                </span>
              </li>
            </ol>
          </div>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">50年分を開いてみました</h2>
            </div>
            <p>
              こどもの頃の記憶で、ひとつはっきりしているものがあります。夏の朝、「今日は30度を超えるらしい」という話が、家族のあいだで出ました。テレビだったか、ラジオだったか。だれかがそう言って、みんなが少し身構える。
            </p>
            <p>
              <strong>30度は、わざわざ口に出す数字でした。</strong>
              いまは、その言い方をしません。
            </p>
            <p>
              気象庁の「過去の気象データ検索」から、東京の日ごとの気温を落としました。1976年から2025年まで、6月1日から9月30日まで。50年
              × 122日 ぶんです。
            </p>
            <p>
              見るのは気温そのものではなく、<strong>日数</strong>
              にしました。「あの年は平均何度でした」は覚えていませんが、「暑い日が何日続いたか」なら、体が覚えているはずだからです。
            </p>
            <p>
              数えたのは猛暑日（最高気温35℃以上）と真夏日（同30℃以上）の2つ。
            </p>
          </section>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">猛暑日は、1.4日から13.0日になっていました</h2>
            </div>
            <figure className="rv">
              <p className="fh">猛暑日は、1.4日から13.0日になりました</p>
              <p className="fs">
                東京・6〜9月に日最高気温が35℃以上だった日数／10年ごとの平均
              </p>
              <div className="chart">
                <div className="rows">
                  {DECADES.map((d) => (
                    <div className="row" key={d.label}>
                      <div className={d.ac ? "lb ac" : "lb"}>{d.label}</div>
                      <div className="tk">
                        <div
                          className={d.ac ? "fl ac" : "fl"}
                          data-w={BAR(d.v)}
                          style={
                            { "--w": `${BAR(d.v)}%` } as React.CSSProperties
                          }
                        />
                        <div
                          className="vl num"
                          data-to={d.v}
                          data-suffix="日"
                          style={
                            { "--w": `${BAR(d.v)}%` } as React.CSSProperties
                          }
                        >
                          {d.v.toFixed(1)}日
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <figcaption>
                気象庁「過去の気象データ検索」東京（47662）の日別値から集計。1976〜2025年。
              </figcaption>
            </figure>
            <p>
              気のせいではありませんでした。
              <strong>
                私がこどもだった頃の東京の夏には、35℃を超える日が、10年の平均で年に1.4日しかありません。
              </strong>
              いまは13.0日あります。
            </p>
            <p>
              真夏日のほうも、41.1日から64.4日へ。3週間ぶん以上増えています。朝の話題になっていた30度は、いまは夏のあいだに64日あります。
            </p>
            <p>
              ちなみに直近の2025年は、猛暑日29日、真夏日87日でした。猛暑日は、50年でいちばん多い年です。真夏日のほうは、2023年の88日に次いで2番目でした。
            </p>
          </section>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">「猛暑日のない夏」が、半分ありました</h2>
            </div>
            <p>
              平均の話をすると、どうしても薄まります。年ごとに並べたほうが、たぶん体感に近い。
            </p>
            <div className="callout rv">
              <div className="big num">
                5<span>年</span>
              </div>
              <div className="tx">
                1976年から1985年の10年のうち、<b>猛暑日が1日もなかった年</b>
                。1977・1979・1980・1981・1982年。直近の10年（2016–2025年）は
                <b>ゼロ</b>です。
              </div>
            </div>
            <p>
              35℃を超えない夏。それが2年に1回あった、ということになります。私が覚えている「涼しかった夏」は、たぶんこのどれかです。
            </p>
          </section>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">暑い日が増えたのではなく、夏が伸びていました</h2>
            </div>
            <p>
              平均も年ごとの数も、結局は「何日あったか」の話です。
              <strong>いつあったか</strong>を見ていませんでした。
            </p>
            <p>
              そこで、50年ぶんの猛暑日を1日ずつ打ってみました。1年を1本の線にして、50年ぶんを並べています。
            </p>
            <figure className="rv">
              <p className="fh">猛暑日を、1日ずつ打ってみました</p>
              <p className="fs">
                東京・35℃以上の日／1976〜2025年の6月1日〜9月30日
              </p>
              <div className="figbox pconly">
                <CalendarPc />
              </div>
              <div className="figbox sponly">
                <CalendarSp />
              </div>
              <figcaption>
                1マスが1日。点線は2014年12月の観測地点の移転（→
                §06）。狭い画面では縦横を入れ替えた図に切り替わります。
              </figcaption>
            </figure>
            <p>
              古い年のほうが、私の覚えている夏です。
              <strong>点がまばらで、8月に固まっています。</strong>
              1976年から1985年でいちばん早い猛暑日は8月7日、いちばん遅くて9月3日でした。
            </p>
            <p>
              新しい年へ進むほど点が増え、そして
              <strong>夏の前後へ広がります。</strong>
              2022年は6月25日に始まり、2024年は9月18日まで続きました。
            </p>
            <p>
              暑い日が増えたというより、
              <strong>夏そのものが前後に伸びた</strong>
              、という言い方のほうが近そうです。耐えられなくなったのは、暑さの高さではなく、長さのほうかもしれません。
            </p>
          </section>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">これは東京だけの話でしょうか</h2>
            </div>
            <p>
              ここで、当然の疑問が出ます。東京はビルとアスファルトが増えました。都市が暑くなっただけではないか、と。
            </p>
            <p>
              気象庁は長期変化の分析に、
              <strong>都市化の影響が比較的少ない15地点</strong>
              を使い分けています。そのうち5地点について、夏（6〜8月）の平均気温を30年ずつ区切って計算しました。平年値と同じつくり方です。
            </p>
            <figure className="rv">
              <p className="fh">都市化の影響が少ない5地点でも、上がっています</p>
              <p className="fs">夏（6〜8月）の平均気温・30年平均</p>
              <div className="figbox pconly">
                <SlopePc />
              </div>
              <div className="figbox sponly">
                <SlopeSp />
              </div>
              <figcaption>
                気象庁「過去の気象データ検索」の月別値から計算。表示は小数2桁で、差も表示値どうしの引き算に合わせている。
              </figcaption>
            </figure>
            <p>
              <strong>5本とも、右上がりでした。</strong>
              上がり幅は石巻の+0.38℃から彦根の+0.89℃まで。
            </p>
            <p>
              日数でも同じです。山形の猛暑日は、1976–1985年の平均3.7日から、2016–2025年は11.4日になっていました。
              <strong>東京だけの話ではありませんでした。</strong>
            </p>
          </section>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">暑さを測っていたら、ものさしが動いていました</h2>
            </div>
            <p>ここまで書いて、ひとつ気づいたことがあります。</p>
            <p>
              上の図と同じやり方で、東京の1991年から2020年の平均を出したら、7月は26.31℃になりました。ところが気象庁が公表している東京の7月の平年値は、
              <strong>25.7℃</strong>です。0.6℃ずれています。
            </p>
            <p>
              計算を間違えたのかと思って確かめると、そうではありませんでした。
              <strong>東京の観測地点は、2014年12月2日に引っ越しています。</strong>
              大手町から、北の丸公園へ。
            </p>
            <div className="note rv">
              <span className="nh">
                気象庁が公表している、新旧2地点の同時比較観測（2012年4月〜2014年3月の2年平均）
              </span>
              北の丸公園のほうが、年平均で <b>平均気温が約0.9℃低い</b>
              ／日最高気温が約0.2℃低い／<b>日最低気温が約1.4℃低い</b>
              。猛暑日の日数も、北の丸公園のほうが少なく出る。
            </div>
            <div className="callout rv">
              <div className="big num">
                0.9<span>℃↓</span>
              </div>
              <div className="tx">
                移転にともなって、
                <b>東京の平年値は16.3℃から15.4℃へ下がりました。</b>
                気温が下がったのではありません。観測している場所が変わっただけです。
              </div>
            </div>
            <p>
              §04
              の図に入れた点線が、この移転です。点線より右は、別の場所で測った値だということになります。
            </p>
            <p>
              私の計算がずれていたのは、公表されている平年値が移転を補正した値で、私が使ったのが補正前の生の観測値だったからでした。計算は合っていて、意味が違っていた、ということになります。
            </p>
          </section>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">07</span>
              <h2 className="tt">平年並みの、平年が動いています</h2>
            </div>
            <p>平年値には、もうひとつ知らなかったことがありました。</p>
            <p>
              <strong>平年値は10年ごとに更新されます。</strong>
              いま使われているのは1991年から2020年の30年平均で、2021年5月19日から運用が始まりました。2030年まで使われます。
            </p>
            <p>
              気象庁の発表によれば、その更新で
              <strong>年平均気温は全国的に0.1〜0.5℃高くなりました</strong>
              。さくらの開花は、ほとんどの気象官署で1〜2日早くなっています。
            </p>
            <p>
              つまり、天気予報で聞く「今日は平年並みです」の平年は、10年ごとに書き換わっています。私がこどもの頃に聞いた「平年並み」と、今朝聞いた「平年並み」は、違う数字を指しています。
            </p>
            <div className="pull rv">
              <p className="q">
                基準が一緒に動いていると、<em>ズレは感じにくくなります。</em>
              </p>
              <div className="rule" />
            </div>
          </section>

          <section className="blk rv">
            <div className="h2">
              <span className="idx">08</span>
              <h2 className="tt">覚えていたことは、正しかった</h2>
            </div>
            <p>50年分を見て、分かったことを並べます。</p>
            <ul>
              <li>
                昔の夏が涼しかったのは、<strong>本当</strong>
                でした。猛暑日は1.4日から13.0日へ
              </li>
              <li>猛暑日のない夏が、2年に1回あった。いまは10年で1年もない</li>
              <li>
                暑い日が増えただけでなく、
                <strong>夏の期間そのものが前後に伸びた</strong>
              </li>
              <li>都市化の影響が少ない5地点でも、夏の平均気温は上がっている</li>
              <li>ただし東京の記録は、途中で観測場所が引っ越している</li>
            </ul>
            <p>
              最後にひとつだけ。この記事の東京の猛暑日13.0日は、
              <strong>たぶん少なめに出ています。</strong>
              気象庁の比較観測によれば、猛暑日の日数は北の丸公園のほうが少なく出るからです。2015年以降がその新しい場所の値なので、大手町のままだったら、もう少し多かったことになります。
            </p>
            <p>
              <strong>控えめに見積もって、9倍でした。</strong>
            </p>
            <p>
              私の体力は、たしかに落ちているのだと思います。それはそれとして、夏のほうも変わっていました。両方本当だった、というのが、50年分を開いてみた結論です。
            </p>
            <div className="closing rv">
              <p className="q">
                記憶は、答え合わせをする相手がいて初めて、記憶のままでいられます。
              </p>
              <p>
                覚えていたことが正しかったと分かるのは少し嬉しく、それを確かめてくれたのは記録でした。
              </p>
            </div>
            <p>それにしても、近年の夏は暑すぎます。</p>
            <p>
              皆さまも、どうか無理をなさらず、熱中症にはお気をつけてお過ごしください。
            </p>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <p style={{ fontSize: ".77rem", color: "var(--muted)", margin: "0 0 12px" }}>
              すべて気象庁の公開データ・公表資料です。日別値・月別値は 2026-07-29
              に取得しました。
            </p>
            <ol>
              <li>
                気象庁「過去の気象データ検索」{" "}
                <a href="https://www.data.jma.go.jp/stats/etrn/">
                  data.jma.go.jp/stats/etrn/
                </a>
                <br />
                東京 47662／山形 47588／彦根 47761／宮崎 47830／伏木 47606／石巻
                47592。日別値（6〜9月・1976〜2025年）と月別値を使用。
              </li>
              <li>
                気象庁「日本の平均気温偏差の算出方法」{" "}
                <a href="https://ds.data.jma.go.jp/cpdinfo/temp/clc_jpn.html">
                  ds.data.jma.go.jp/cpdinfo/temp/clc_jpn.html
                </a>
                <br />
                都市化の影響が小さい15地点（網走・根室・寿都・山形・石巻・伏木・飯田・銚子・境・浜田・彦根・宮崎・多度津・名瀬・石垣島）。本記事はこのうち5地点を使用。
              </li>
              <li>
                気象庁「観測場所の移転に伴う気温データの補正方法について」{" "}
                <a href="https://www.data.jma.go.jp/cpdinfo/temp/correction.html">
                  data.jma.go.jp/cpdinfo/temp/correction.html
                </a>
              </li>
              <li>
                気象庁観測部「『東京』の観測地点の移転について」（2014年11月14日）{" "}
                <a href="https://www.jma.go.jp/jma/kishou/minkan/koushu141114/shiryou1.pdf">
                  jma.go.jp/jma/kishou/minkan/koushu141114/shiryou1.pdf
                </a>
                <br />
                同時比較観測（2012年4月〜2014年3月の2年平均）の結果と、平年値の更新（平均気温
                16.3℃ → 15.4℃）。
              </li>
              <li>
                気象庁「地上観測地点『東京』の移転について」（2014年10月3日）{" "}
                <a href="https://www.jma.go.jp/jma/press/1410/03b/20141003_tokyo_rojo.html">
                  jma.go.jp/jma/press/1410/03b/20141003_tokyo_rojo.html
                </a>
              </li>
              <li>
                気象庁「平年値の更新について」（2021年3月24日）{" "}
                <a href="https://www.jma.go.jp/jma/press/2103/24a/210324_heinenchi.html">
                  jma.go.jp/jma/press/2103/24a/210324_heinenchi.html
                </a>
              </li>
              <li>
                気象庁「東京（東京都）平年値（年・月ごとの値）」{" "}
                <a href="https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php?prec_no=44&block_no=47662">
                  data.jma.go.jp/stats/etrn/view/nml_sfc_ym.php
                </a>
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ 集計期間は1976年から2025年の50年、6月1日〜9月30日（122日）のみ。猛暑日＝日最高気温35.0℃以上、真夏日＝同30.0℃以上。
            <br />※ 30年平均は平年値と同じく30年ぶんの月平均気温を単純平均したもので、
            移転補正をしていない生の観測値のため、気象庁が公表している平年値とは一致しません。
            <br />※ 1994年の東京に日最低気温の欠測が1日ありますが、本記事では最低気温を使用していません。
            山形の観測所に移転があったかどうかは確認していません。移転があれば、日数の推移にその影響が含まれます。
            <br />※ 東京の熱帯夜（日最低気温25℃以上）は使用していません。移転で最低気温が約1.4℃低く出るため、
            日数の推移が観測場所の変更を反映してしまうためです。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
