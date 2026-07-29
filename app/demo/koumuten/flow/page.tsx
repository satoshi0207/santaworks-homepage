import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";

export const metadata: Metadata = {
  title: "家づくりの流れ",
  description:
    "架空の工務店「ひだまり工務店」の家づくりの流れ・お支払いのタイミング・期間の目安・よくあるご質問（デザインサンプル）。",
};

/* 工務店の実務にある8段階。お客様がいちばん不安なのは
   「いつ・いくら払うのか」なので、各段階に費用の欄を持たせている */
const steps: {
  no: string;
  title: string;
  span: string;
  body: string;
  you: string;
  money?: string;
}[] = [
  {
    no: "01",
    title: "ご相談",
    span: "1〜2週間",
    body: "「建て替えかリフォームか迷っている」「予算内で収まるのか知りたい」——その段階でお越しください。図面や資料はなくて構いません。",
    you: "いまのお住まいの困りごと、ご家族の人数、おおよそのご予算をお聞かせください。",
    money: "無料",
  },
  {
    no: "02",
    title: "現地調査・お見積り",
    span: "2〜3週間",
    body: "実際に建物と敷地を拝見します。床下や小屋裏まで見せていただき、傷み具合を確認したうえで概算をお出しします。",
    you: "調査に立ち会っていただきます。所要は2〜3時間ほどです。",
    money: "無料",
  },
  {
    no: "03",
    title: "プランのご提案",
    span: "3〜4週間",
    body: "間取り図と、内訳を開いたお見積りをお持ちします。「一式」とは書きません。どこにいくらかかるのか、素材のグレードまでご説明します。",
    you: "気になる点は遠慮なくおっしゃってください。この段階の変更に費用はかかりません。",
    money: "無料",
  },
  {
    no: "04",
    title: "ご契約",
    span: "",
    body: "工事の範囲・金額・工期・お支払いの時期を書面で確認し、ご契約となります。建設工事の請負契約書と、工事保険の内容をお渡しします。",
    you: "ご不明な点が残ったまま署名なさらないでください。何度でもご説明します。",
    money: "契約金 10%",
  },
  {
    no: "05",
    title: "詳細設計・お打ち合わせ",
    span: "1〜2か月",
    body: "コンセントの位置、収納の高さ、床や壁の色。暮らしの細部を決めていきます。ショールームへも一緒にまいります。",
    you: "3〜5回ほどお打ち合わせをいただきます。ご都合に合わせて夕方・土曜も承ります。",
  },
  {
    no: "06",
    title: "着工・上棟",
    span: "工期による",
    body: "近隣へのご挨拶をすませてから着工します。工事中の様子は写真でお送りしますので、遠方にお住まいでも進み具合がわかります。",
    you: "現場にはいつお越しいただいても構いません。職人に声をかけてください。",
    money: "着工金 30%／上棟金 30%",
  },
  {
    no: "07",
    title: "完成・お引渡し",
    span: "",
    body: "社内検査のあと、お客様立ち会いで確認していただきます。気になる箇所はお引渡し前に手直しします。",
    you: "設備の使い方をひととおりご説明します。保証書と鍵をお渡しします。",
    money: "残金 30%",
  },
  {
    no: "08",
    title: "お引渡し後",
    span: "ずっと",
    body: "6か月・1年・2年で点検にうかがいます。それ以降も、建具の調整や雨漏りのご相談は、お電話一本で駆けつけます。",
    you: "「こんなことで呼んでいいのか」と迷ったときこそ、お呼びください。",
    money: "定期点検は無料",
  },
];

const payments: [string, string, string][] = [
  ["ご契約時", "10%", "請負契約を結んだ時点でお預かりします"],
  ["着工時", "30%", "資材の発注と、基礎工事の着手にあてます"],
  ["上棟時", "30%", "柱と梁が組み上がった時点です"],
  ["お引渡し時", "30%", "お客様の立ち会い確認が終わったあとにお支払いください"],
];

const faqs: [string, string][] = [
  [
    "小さな修繕だけでもお願いできますか。",
    "できます。網戸の張り替え、建具の立て付け、雨樋の詰まりなど、半日で終わる仕事も承っています。新築だけの会社ではありません。",
  ],
  [
    "予算をオーバーしませんか。",
    "お見積り後に金額が上がるのは、工事中に予期しない傷みが見つかった場合です。その際は必ず、工事を止めてご相談してから進めます。黙って進めることはありません。",
  ],
  [
    "住みながらのリフォームはできますか。",
    "水まわり以外は可能なことが多いです。ただし工期は長くなります。仮住まいと比べてどちらが良いか、費用を並べてご説明します。",
  ],
  [
    "他社の見積りと比べてもよいですか。",
    "もちろんです。むしろ比べてください。そのとき、内訳が「一式」でまとめられていないかをご覧いただければと思います。",
  ],
  [
    "打ち合わせは平日の日中だけですか。",
    "土曜と平日の夕方も承ります。日曜と祝日はお休みをいただいております。",
  ],
];

export default function KoumutenFlow() {
  return (
    <>
      <PageHead en="Flow" title="家づくりの流れ" />

      <section className="hd-section">
        <div className="hd-wrap">
          <p className="hd-label">Flow</p>
          <h2 className="hd-h2">
            ご相談から、<span className="accent">お引渡しのあと</span>まで。
          </h2>
          <p className="hd-lead">
            家づくりは、一生に何度もあることではありません。
            いま自分がどこにいて、次に何が起きるのか。
            それが分かっているだけで、ずいぶん気が楽になるはずです。
          </p>

          <ol className="hd-flow">
            {steps.map((s) => (
              <li className="hd-fstep" key={s.no}>
                <div className="marker" aria-hidden="true">
                  <span className="no">{s.no}</span>
                </div>
                <div className="body">
                  <div className="head">
                    <h3>{s.title}</h3>
                    {/* 期間が決まらない段階は「—」ではなくバッジごと出さない */}
                    {s.span ? <span className="span">{s.span}</span> : null}
                    {s.money ? <span className="money">{s.money}</span> : null}
                  </div>
                  <p>{s.body}</p>
                  <p className="you">
                    <span className="tag">お客様にお願いすること</span>
                    {s.you}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* お金のタイミング。工務店でいちばん質問が多いところなので独立させる */}
      <section className="hd-section hd-band" aria-labelledby="pay-h">
        <div className="hd-wrap">
          <p className="hd-label">Payment</p>
          <h2 className="hd-h2" id="pay-h">
            お支払いのタイミング
          </h2>
          <p className="hd-lead">
            工事の進み具合に合わせて、4回に分けてお支払いいただきます。
            着工前に全額をいただくことはありません。
          </p>
          <table className="hd-pay">
            <caption>
              お支払いの割合（架空の設定です。実際の契約では工事内容により変わります）
            </caption>
            <thead>
              <tr>
                <th scope="col">時期</th>
                <th scope="col">割合</th>
                <th scope="col">内容</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(([when, rate, note]) => (
                <tr key={when}>
                  <th scope="row">{when}</th>
                  <td className="rate">{rate}</td>
                  <td>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="hd-note" style={{ marginTop: "1.4rem" }}>
            住宅ローンをご利用の場合は、金融機関の実行時期に合わせて調整します。
            つなぎ融資が必要かどうかも含めて、ご契約前にご説明します。
          </p>
        </div>
      </section>

      <section className="hd-section" aria-labelledby="faq-h">
        <div className="hd-wrap">
          <p className="hd-label">FAQ</p>
          <h2 className="hd-h2" id="faq-h">
            よくあるご質問
          </h2>
          <div className="hd-faq">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hd-section hd-band hd-cta-band">
        <div className="hd-wrap">
          <p className="hd-label" style={{ justifyContent: "center" }}>
            Contact
          </p>
          <h2 className="hd-h2">まだ決まっていない段階で、けっこうです。</h2>
          <p className="hd-lead" style={{ marginInline: "auto" }}>
            「そもそも建て替えるべきか」から一緒に考えます。ご相談・お見積りは無料です。
          </p>
          <div
            className="hd-hero-actions"
            style={{ justifyContent: "center", marginTop: "1.6rem" }}
          >
            <Link href="/demo/koumuten/contact/" className="hd-btn">
              無料相談・お見積り
            </Link>
            <Link href="/demo/koumuten/works/" className="hd-btn-wood hd-btn">
              施工事例を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
