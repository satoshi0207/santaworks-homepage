import type { Metadata } from "next";
import Link from "next/link";
import JournalFx from "@/components/JournalFx";
import "../journal.css";
import "../dash.css";
import { eyebrowOf } from "../posts";
import { Fig01, Fig02, Fig03, Fig04, Fig05, Fig06 } from "./figures";

export const metadata: Metadata = {
  title: "ためらっているのは、飼ったことがある私のほう。",
  description:
    "家族が猫を飼いたいと言い出しました。手を挙げていないのは、動物を飼ったことがある私だけです。猫の平均寿命は15.92歳。引き取られる猫は20年で大きく減り、殺処分は49分の1になりました。それでも約4割は飼い主から来ています。総務省・環境省・文部科学省・e-Gov の一次資料から数えた記録です。",
  alternates: { canonical: "/journal/neko/" },
  openGraph: {
    type: "article",
    title:
      "ためらっているのは、飼ったことがある私のほう。｜Santa Works Journal",
    description:
      "猫と暮らすのは、およそ15年。引き取られる猫の約4割は、飼い主から来ていました。飼いたいと言っているのは未経験の家族で、ためらっているのは経験がある私のほうです。",
    url: "/journal/neko/",
    images: ["/blog/neko/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ためらっているのは、飼ったことがある私のほう。｜Santa Works Journal",
    description:
      "「欲しい」を咎める条文は、どこにもありませんでした。法律が線を引いているのは、入口ではなく出口のほうです。",
    images: ["/blog/neko/ogp.png"],
  },
};

export default function Page() {
  return (
    <div className="journal dash pt-14">
      <JournalFx />
      <div className="wrap">
        <article>
          <div className="hero">
            {/* 🔴 猫の写真を使わない。かわいさで読ませる記事ではないし、
                感情で押すと §05 が罪悪感の記事に倒れる。
                🔴 人物・人型・顔も描かない（全社ガードレール⑤）。
                生成は pr/drafts/neko-src/make_images.py。 */}
            <figure className="herofig nodim rv">
              <div className="ph">
                <div
                  className="ph-photo"
                  aria-hidden="true"
                  style={
                    {
                      "--hero-pc": "url(/blog/neko/hero.webp)",
                      "--hero-sp": "url(/blog/neko/hero-sp.webp)",
                    } as React.CSSProperties
                  }
                />
              </div>
            </figure>
            <span className="eyebrow">{eyebrowOf("neko")}</span>
            <h1 className="title">
              ためらっているのは、
              <br />
              飼ったことがある私のほう。
            </h1>
            <p className="lede">
              家族が、猫を飼いたいと言い出しました。妻も娘も、動物を飼ったことがありません。
              私はあります。<strong>手を挙げていないのは、経験がある私だけでした。</strong>
              反対しているわけではないのに、すぐに「いいよ」と言えない。
              なぜ言えないのかが自分でも分からなかったので、数字を見てみることにしました。
            </p>
            <div className="meta">
              <span className="who">Santa Works</span>
              <span className="dot" />
              <span>2026.08.05</span>
              <span className="dot" />
              <span>読了 約6分</span>
              <span className="dot" />
              <span>出典つき / 一次資料から</span>
            </div>
          </div>

          {/* ⚠️ 4枚の並びが、そのまま記事の筋になっている。
              15年という単位 → 学校が教えるのは2年ぶん →
              この20年ではっきり良くなっている → それでも4割は飼い主から。 */}
          <div className="kpi rv" data-fx data-num data-seq="120">
            <div className="tile">
              <span className="lbl">猫の平均寿命</span>
              <span className="v n">
                15.92<small>歳</small>
              </span>
              <span className="note">2010年は14.36歳。民間調査の自社集計です</span>
            </div>
            <div className="tile">
              <span className="lbl">学校で動物を飼うのは</span>
              <span className="v n">
                2<small>学年間</small>
              </span>
              <span className="note">生活科・低学年。中学年からはありません</span>
            </div>
            <div className="tile">
              <span className="lbl">20年で、猫の殺処分は</span>
              <span className="v n">
                49<small>分の1</small>
              </span>
              <span className="note">23万8,929匹から4,866匹へ（年度）</span>
            </div>
            <div className="tile on">
              <span className="lbl">引き取られる猫のうち、飼い主から</span>
              <span className="v n">
                37.8<small>%</small>
              </span>
              <span className="note">22,010匹のうち8,322匹（令和6年度）</span>
            </div>
          </div>

          <div className="points rv">
            <ol>
              <li>
                <span className="n">01</span>
                <span className="tx">
                  猫と暮らすのは、およそ<strong>15年</strong>。
                  15年後、飼いたいと言った本人がいちばん早く家を出ます。
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="tx">
                  引き取られる猫は<strong>大きく減りました</strong>。
                  それでも約<strong>4割</strong>は、飼い主から来ています。
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="tx">
                  「欲しい」を咎める条文は<strong>ありませんでした</strong>。
                  法律が線を引いているのは、出口のほうです。
                </span>
              </li>
            </ol>
          </div>

          {/* 01 */}
          <section className="blk">
            <span className="kicker">まず、単位を確かめる</span>
            <div className="h2">
              <span className="idx">01</span>
              <h2 className="tt">15年という単位</h2>
            </div>

            <Fig01 />

            <p>
              猫の平均寿命は<strong>15.92歳</strong>です<sup>※1</sup>。
              2010年は14.36歳だったので、この15年で1.56歳のびています。
            </p>
            <p>
              ⚠️ この数字は<b>官庁の統計ではありません</b>。
              ペットフード協会という業界団体が、毎年おこなっている自社集計です。
              しかも母数は<b>「一般世帯で過去10年間に飼育された犬猫」</b>で、
              野良猫や、ブリーダー・ショップで亡くなった猫は入っていません
              <sup>※1</sup>。
              <strong>「猫の寿命」ではなく、「家で飼われた猫の寿命」の平均です。</strong>
            </p>
            <p>
              それでも、単位としては十分です。この記事では、
              <strong>15年</strong>として話を進めます。
            </p>
            <p>
              猫を飼うというのは、<strong>15年先まで続く約束をすること</strong>でした。
              そして15年後、<strong>娘はもう家にいません。</strong>
              猫を飼いたいと言った本人が、いちばん早くいなくなります。
              図の右のほう、あの5年ぶんは、たぶん私だけの時間です。
            </p>
          </section>

          {/* 02 */}
          <section className="blk">
            <span className="kicker">未経験、という言葉について</span>
            <div className="h2">
              <span className="idx">02</span>
              <h2 className="tt">命の尊さは、もう学校で習ってきている</h2>
            </div>

            <Fig02 />

            <p>
              「飼ったことがないのに」と言いかけてしまいそうになりました・・・。
              娘は、学校で動物を飼っています。
            </p>
            <p>
              小学校で生き物を飼うのは、先生の思いつきではありません。
              <strong>学習指導要領に書いてあります。</strong>
              生活科の内容の7番目——
              <b>
                動物を飼ったり植物を育てたりする活動を通して（中略）それらは生命をもっていることや成長していることに気付くとともに、生き物への親しみをもち、大切にしようとする
              </b>
              <sup>※2</sup>。
            </p>
            <p>
              文部科学省の解説は、その狙いをもっとはっきり書いています。
              継続的な飼育・栽培を行うのは
              <strong>「生命の尊さを実感する」ため</strong>だ、と<sup>※2</sup>。
            </p>
            <p>
              つまり<strong>娘は、命の尊さを習っていないわけではありません。</strong>
              むしろ2学年かけて実感してきていて、
              <strong>もうそこを通り過ぎたところ</strong>にいます。生活科があるのは低学年だけで、
              中学年からは生活科そのものがないからです。
            </p>
            <p>
              知らないのは、命の尊さではなく<strong>15年のほう</strong>でした。
              そしてそれは、大人も同じです。
              学校が教えられるのは2年ぶんで、それは学校の落ち度ではありません。
              <b>2年ぶんを教える設計だからです。</b>
            </p>
          </section>

          {/* 03 */}
          <section className="blk">
            <span className="kicker">お金の話も、いちおう</span>
            <div className="h2">
              <span className="idx">03</span>
              <h2 className="tt">思っていたより、静かに増えていた</h2>
            </div>

            <Fig03 />

            <p>
              総務省の家計調査から、ペット関連の3品目（フード・用品・サービス）を足したものです
              <sup>※3</sup>。
              <strong>2005年の10,242円が、2025年には22,124円</strong>。2.16倍になっています。
              伸びているのは、いちばんは<strong>フード</strong>で、こちらも2.03倍です。
            </p>
            <p>
              🔴 ただし、<b>これを「猫を飼うと年2万円」と読んではいけません。</b>
              家計調査の数字は<strong>全世帯の平均</strong>で、
              <strong>飼っていない世帯も分母に入っています。</strong>
              実際に飼っている家がいくら払っているかは、この数字からは分かりません。
              分かるのは<b>向きだけ</b>。
            </p>
            <p>
              向きが分かれば、それで足ります。金額の多い少ないは、
              うちが15年を渡りきれるかどうかとは、あまり関係がありませんでした。
            </p>
          </section>

          {/* 04 */}
          <section className="blk">
            <span className="kicker">ここから、数字が転ぶ</span>
            <div className="h2">
              <span className="idx">04</span>
              <h2 className="tt">引き取られる猫は、49分の1になった</h2>
            </div>

            <Fig04 />

            <p>
              環境省が毎年出している統計です<sup>※4</sup>。
              自治体が引き取った犬猫の数が、都道府県別・年度別に載っています。
            </p>
            <p>
              平成16年度、猫の殺処分は<strong>23万8,929匹</strong>でした。
              令和6年度は<strong>4,866匹</strong>です。
              <strong>49分の1</strong>になっています。
              引取りそのものも、23万7,246匹から22,010匹へ、10分の1以下です。
            </p>
            <p>
              <strong>この20年で、はっきり良くなっています。</strong>
              誰かが頑張った結果で、そこは素直にそう読んでいいところだと思いました。
            </p>
            <p>
              ⚠️ 1つだけ注記があります。環境省は
              <b>
                「殺処分数には、幼齢個体などの保管中の病気等による自然死も含まれる」
              </b>
              と書いています<sup>※4</sup>。
              <strong>殺処分数の全部が、人の手によるものではありません。</strong>
            </p>
          </section>

          {/* 05 */}
          <section className="blk">
            <span className="kicker">中身を割ってみる</span>
            <div className="h2">
              <span className="idx">05</span>
              <h2 className="tt">そのうち約4割は、飼い主から来ていた</h2>
            </div>

            <Fig05 />

            <p>
              減り続けている引取りの中身を割ると、こうなります。
              令和6年度に引き取られた猫22,010匹のうち、
              <strong>8,322匹（37.8%）は「飼い主から」</strong>でした<sup>※4</sup>。
            </p>
            <p>
              捨てられたのではありません。
              <strong>飼い続けられなくなった家がある</strong>、ということになります。
            </p>
            <p>
              <strong>そして、その理由の記載はありませんでした。</strong>
              手放した理由を全国で集計した資料が、見当たらないのです。
              自治体単位で公表しているところはあります。けれど全国では分かりません。
              高齢化かもしれないし、引っ越しかもしれない。
              <b>このデータからは言えない、というのが正確なところです。</b>
            </p>
            <p>
              分かるのは、引き取ったあとに何をすることになっているか、のほうです。
              動物愛護管理法の第35条第4項に、こう書いてあります——
              <b>殺処分がなくなることを目指して</b>、飼い主を発見して返還し、
              あるいは新しい飼い主を募集して譲り渡すよう努めるものとする<sup>※5</sup>。
            </p>
            <p>
              <strong>「殺処分がなくなることを目指して」は、理念集の言葉ではありません。</strong>
              条文にそう書いてあります。
              令和6年度に譲渡されたのは16,854匹でした<sup>※4</sup>。
            </p>
          </section>

          {/* 06 */}
          <section className="blk">
            <span className="kicker">最初の問いに戻る</span>
            <div className="h2">
              <span className="idx">06</span>
              <h2 className="tt">「欲しい」に、法律は反対していない</h2>
            </div>

            <Fig06 />

            <p>
              飼育経験もないのに、欲しいというだけで飼っていいのか。
              これが、私が言葉にできずにいたものでした。
            </p>
            <p>
              <strong>咎める根拠を、見つけられませんでした。</strong>
              動物愛護管理法を最初から読みましたが、
              <b>資格も、講習も、経験年数の要件もありません。</b>
              飼い始めるところに、条文が無いのです。
            </p>
            <p>
              条文があるのは、反対側でした。第7条第4項——
              <b>
                当該動物がその命を終えるまで適切に飼養すること（以下「終生飼養」という。）に努めなければならない
              </b>
              <sup>※5</sup>。
            </p>
            <p>
              そして第35条第1項。自治体は飼い主から求められたら引き取らなければならない、
              と定めたうえで、ただし書でこう続きます——
              <b>
                終生飼養の趣旨に照らして引取りを求める相当の事由がないと認められる場合
              </b>
              には、<strong>引取りを拒否することができる</strong>
              <sup>※5</sup>。
            </p>
            <p>
              <strong>入口は開いていて、途中で降りるところが狭い。</strong>
              法律が線を引いているのは、そこでした。
            </p>
            <p>
              だから、是非を分けるのは<strong>経験があるかどうかではありません</strong>。
              <strong>15年を引き受けるかどうか</strong>のほうでした。
            </p>
            <p>
              ⚠️ 念のため書いておくと、これは
              <b>「未経験でも大丈夫」という話ではありません。</b>
              法が咎めていないことと、うちが15年を渡りきれることは、別の話です。
              終生飼養も努力義務で、罰則はありません。
            </p>
          </section>

          {/* 07 */}
          <section className="blk">
            <span className="kicker">言葉になった</span>
            <div className="h2">
              <span className="idx">07</span>
              <h2 className="tt">単なる動物ではなく、まぎれもない家族</h2>
            </div>

            <p>
              飼ったことがある人間が知っているのは、楽しさではありません。
              <strong>終わり方のほう</strong>です。
            </p>
            <p>
              そして、その重さの正体はこれでした。
              <strong>単なる動物ではなく、まぎれもない家族であるということ。</strong>
            </p>
            <p>
              ここまでの数字が、急に違って見えます。
              <strong>あの4割</strong>は、家族を手放さざるを得なかった家の数です。
              法律が「命を終えるまで」と書いているのは、家族の話をしているからでした。
              そして学校が教えられるのは<b>世話</b>までで、
              <strong>家族になるところは、教わりません。</strong>
            </p>
          </section>

          {/* おわりに */}
          <section className="blk">
            <div className="h2">
              <h2 className="tt">おわりに</h2>
            </div>

            <div className="pull rv">
              <p className="q">
                15年ぶんの自分に、
                <br />
                <em>署名できるか</em>という話。
              </p>
            </div>

            <p>
              数字は、いろいろなことに答えてくれました。
              どれくらいの年数か。どれくらいお金がかかりそうなのか。
              この20年でどれくらい良くなったのか。誰が手放しているのか。
              法律がどこに線を引いているのか。
            </p>
            <p>
              <strong>うちが15年を渡りきれるかは、どこにも書いてありませんでした。</strong>
              それはそうです。書いてあるはずがありません。
            </p>
            <p>
              ただ、<b>ためらっている理由は言葉になりました。</b>
              私は経験があるから慎重なのであって、
              <strong>妻や娘が分かっていないから慎重なのではありません。</strong>
              これは、はっきりさせておきたかったところです。
              飼いたいと言うのは、気持ちとしてはわかる。
              けれどもうしばらく考えてみることにします。
              <br />
              <br />
              この記事の数字は、すべて出典の一次資料から直接転記、
              または公開されている集計結果から再集計したものです。
              間違いを見つけたら教えていただけるとありがたいです（
              <a href="mailto:contact@santaworks.net">contact@santaworks.net</a>
              ）。直します。
            </p>
          </section>

          <div className="sources">
            <h3>参考文献・出典</h3>
            <ol>
              <li>
                ※1 一般社団法人ペットフード協会「令和6年（2024年）全国犬猫飼育実態調査」
                Ⅲ．主要指標サマリー「犬猫 平均寿命の推移」。
                <b>民間団体の自社集計であり、官庁統計ではありません。</b>
                集計ベースは「現在犬または猫飼育者」。
                同資料の注記に「平均寿命算出元データは『（一般世帯で）過去10年間に
                飼育された犬猫』のため、野良犬・猫、ブリーダーやショップで死亡した犬・猫は
                算出対象に含めず」とあります。
              </li>
              <li>
                ※2 文部科学省「小学校学習指導要領（平成29年告示）」第2章第5節 生活、
                第1学年及び第2学年の内容(7)、および同「解説 生活編」（平成29年7月）。
                本文は告示から、「生命の尊さを実感する」「2学年間の見通しをもちながら」は
                解説からの引用です。生活科は第1・2学年のみに置かれています。
              </li>
              <li>
                ※3 総務省統計局「家計調査」家計収支編・二人以上の世帯・全国／
                品目分類（2025年改定）、statsDataId 0004023601（e-Stat API v3.0）。
                「ペットフード」「ペット・他のペット用品」「他のペット関連サービス」の
                月次を年計にしたものです。
              </li>
              <li>
                ※4 環境省「動物愛護管理行政事務提要（令和7年度版）」
                4.(1) 犬・猫の引取り及び負傷動物等の収容並びに処分の状況（全国）。
                年度の集計です。注記に「殺処分数には、幼齢個体などの保管中の
                病気等による自然死も含まれる」「所有者不明には狂犬病予防法に基づく抑留、
                県市条例に基づく収容を含む」とあります。
              </li>
              <li>
                ※5 動物の愛護及び管理に関する法律（昭和48年法律第105号）
                第7条第4項、第35条第1項および第4項。e-Gov 法令検索より。
                いずれも「努めなければならない」「努めるものとする」という努力義務です。
              </li>
            </ol>
          </div>

          <p className="disclaimer">
            ※ 平均寿命は<b>民間団体の自社集計</b>であり、母数は
            「一般世帯で過去10年間に飼育された犬猫」です。野良猫を含みません。
            記事では15.92歳を「15年」として扱っています。
            <br />※ 家計調査の支出は<b>1世帯当たりの全世帯平均</b>であり、
            飼っている世帯の負担ではありません。
            2005年に品目分類の改定があり「用品」が半減して見えるため、
            2000〜2004年とはまたいで比べていません。
            「サービス」は2015年に「用品」から分離したため、
            この2つは個別に長期比較できません。図は合計だけを並べています。
            <br />※ 引取り数・殺処分数は<b>年度</b>の集計で、
            平成16年度は殺処分数が引取り数を上回っています
            （前年度からの繰り越し等があるため）。
            このため「引取りのうち何%が殺処分か」は、年をまたいで比べられません。
            <br />※ 手放した理由の全国集計は、本記事では見つけられませんでした。
            理由についての記述は、意図的に置いていません。
            <br />※ 図01の「娘が家にいるあいだ」は目安であり、統計ではありません。
          </p>

          <Link href="/journal/" className="backlink">
            ← Journal 一覧へ
          </Link>
        </article>
      </div>
    </div>
  );
}
