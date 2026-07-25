import Link from "next/link";
import DemoMap from "@/components/DemoMap";
import Hours from "./Hours";
import { CLINIC } from "./data";
import {
  IconClipboard,
  IconHeart,
  IconPhone,
  IconPulse,
  IconThermo,
} from "./icons";

/* 診療案内のダイジェスト。詳しくは /shinryo/ へ */
const menus = [
  {
    icon: <IconThermo />,
    title: "風邪・発熱・のどの痛み",
    body: "急な発熱や咳、のどの痛み、お腹の風邪など、日常のからだの不調を診ます。来院前にお電話をいただければ、受診の時間帯と入口をご案内します。",
  },
  {
    icon: <IconHeart />,
    title: "高血圧・糖尿病・脂質異常症",
    body: "健診で指摘された数値のご相談から、お薬を続けながらの通院まで。生活の事情を伺いながら、続けられる方法を一緒に決めていきます。",
  },
  {
    icon: <IconClipboard />,
    title: "健康診断・予防接種",
    body: "特定健診や港見市の各種健診、インフルエンザ・肺炎球菌などの予防接種に対応します（予約制）。費用と内容は診療案内のページに記載しています。",
  },
  {
    icon: <IconPulse />,
    title: "各種検査",
    body: "血液・尿検査、心電図、レントゲン、超音波検査など院内で行える検査をご案内します。当院で対応できない検査は、連携先の病院へご紹介します。",
  },
];

const news = [
  {
    date: "2026-07-01",
    label: "2026.07.01",
    tag: "重要",
    important: true,
    title: "8月1日から、これまでの健康保険証は使えません",
    body: "2026年8月1日以降は、マイナ保険証（健康保険証として登録したマイナンバーカード）または資格確認書が必要です。どちらもお持ちでないと、医療費を全額お支払いいただく場合があります。お手元の書類がご不明なときは、加入している保険者へご確認いただくか、受付でお声がけください。",
  },
  {
    date: "2026-07-10",
    label: "2026.07.10",
    tag: "お知らせ",
    important: false,
    title: "夏季休診のお知らせ（8月13日〜8月16日）",
    body: "8月13日（木）から16日（日）までは休診します。お薬が足りなくなりそうな方は、8月12日までにご来院ください。",
  },
  {
    date: "2026-06-20",
    label: "2026.06.20",
    tag: "受診のご案内",
    important: false,
    title: "発熱・咳の症状がある方の受診について",
    body: "他の患者さんと動線を分けてご案内しています。来院前にお電話をいただけると、待ち時間を短くできます。",
  },
];

export default function SoyogiTop() {
  return (
    <>
      {/* ヒーロー：写真の上に文字を重ねず、左に文章・右に写真（可読性を優先）。
          写真は文章とボタンの間に置く＝狭い画面でもボタンの下に埋もれず、院内の空気が先に伝わる */}
      <section className="sy-hero">
        <div className="sy-wrap sy-hero-inner">
          <div className="sy-hero-copy">
            <p className="sy-hero-eyebrow">
              山ノ手県港見市 若葉台／{CLINIC.departments}
            </p>
            <h1 className="sy-hero-title">
              変わりありませんか、と
              <br />
              <span className="accent">言える関係</span>を。
            </h1>
            <p className="sy-hero-lead">
              風邪や発熱から、血圧・血糖のご相談、健診・予防接種まで。
              前回どんな話をしたかを覚えている、地域のかかりつけ医です。
            </p>
          </div>
          <div className="sy-hero-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/demo/naika/hero.webp"
              alt="窓から光が入るクリニックの受付カウンター。そばに背の高い観葉植物が置かれている。"
              width={1500}
              height={909}
              fetchPriority="high"
            />
          </div>
          <div className="sy-hero-cta">
            <div className="sy-hero-actions">
              <a className="sy-btn" href={CLINIC.telHref}>
                <IconPhone />
                電話する（{CLINIC.tel}）
              </a>
              <Link className="sy-btn-outline" href="/demo/naika/access/#reserve">
                Web予約
              </Link>
              {/* 狭い画面ではCSSで隠す（同じ導線が下部固定バーに常設されているため） */}
              <Link className="sy-btn-line" href="/demo/naika/access/#line">
                LINEで予約・お知らせ
              </Link>
            </div>
            <p className="sy-note">
              ※ これは架空のクリニックのデザインサンプルです。電話番号・予約はすべて架空で、
              予約フォームからの送信もできません。
            </p>
          </div>
        </div>
      </section>

      {/* いちばん聞かれることを、スクロールせずに読める位置に置く */}
      <div className="sy-quick">
        <div className="sy-wrap sy-quick-inner">
          <dl>
            <dt>診療時間</dt>
            <dd>
              午前 <span className="time">{CLINIC.am}</span>
              <br />
              午後 <span className="time">{CLINIC.pm}</span>
            </dd>
            <dt>休診日</dt>
            <dd>{CLINIC.closed}</dd>
          </dl>
          <dl>
            <dt>アクセス</dt>
            <dd>
              {CLINIC.station}
              {CLINIC.walk}
              <br />
              駐車場 3台
            </dd>
            <dt>電話</dt>
            <dd>
              <a href={CLINIC.telHref} className="time">
                {CLINIC.tel}
              </a>
            </dd>
          </dl>
        </div>
      </div>

      {/* お知らせ：制度の変更は患者さんがいちばん知りたい情報 */}
      <section className="sy-section" aria-labelledby="news-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">News</p>
            <h2 id="news-h">お知らせ</h2>
          </div>
          <ul className="sy-news">
            {news.map((n) => (
              <li key={n.date}>
                <div className="meta">
                  <time dateTime={n.date}>{n.label}</time>
                  <span className={n.important ? "tag important" : "tag"}>
                    {n.tag}
                  </span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 診療案内ダイジェスト */}
      <section className="sy-section sy-band" aria-labelledby="menu-h">
        <div className="sy-wrap">
          {/* 表・カード・文章が続く区間なので、ここに写真を1枚入れて視線を休ませる */}
          <div className="sy-shead sy-shead-media">
            <div>
              <p className="en">Medical</p>
              <h2 id="menu-h">診ているもの</h2>
              <p>
                内科のかかりつけ医として、日常の体調不良と生活習慣病の管理を中心に診ています。
                専門的な治療が必要なときは、連携している病院へご紹介します。
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="sy-shead-photo"
              src="/demo/naika/stetho.webp"
              alt="白い机の上に置かれた聴診器。"
              width={1000}
              height={665}
              loading="lazy"
            />
          </div>
          <div className="sy-cards">
            {menus.map((m) => (
              <div className="sy-card" key={m.title}>
                <h3>
                  <span className="ico">{m.icon}</span>
                  {m.title}
                </h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.6rem" }}>
            <Link className="sy-btn-outline" href="/demo/naika/shinryo/">
              診療案内をくわしく見る
            </Link>
          </p>
        </div>
      </section>

      {/* 診療時間表 */}
      <section className="sy-section" aria-labelledby="hours-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Hours</p>
            <h2 id="hours-h">診療時間</h2>
          </div>
          <Hours />
        </div>
      </section>

      {/* 初めての方へ（詳細は初診・アクセスのページ） */}
      <section className="sy-section sy-beige" aria-labelledby="first-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">First Visit</p>
            <h2 id="first-h">初めての方へ</h2>
            <p>
              受付から会計まで、だいたい30〜60分です（検査の内容によって前後します）。
            </p>
          </div>
          <ol className="sy-steps">
            <li>
              <h3>ご予約（なくても受診できます）</h3>
              <p>
                お電話・Web・LINEで承ります。ご予約は日時・お名前・連絡先・初診か再診かだけで結構です。
                症状は受付と診察室で伺います。
              </p>
            </li>
            <li>
              <h3>受付でお出しいただくもの</h3>
              <p>
                マイナ保険証（または資格確認書）、お持ちの方はお薬手帳・健診の結果・紹介状。
                受付の機械の操作はスタッフがお手伝いします。
              </p>
            </li>
            <li>
              <h3>診察・検査・お会計</h3>
              <p>
                お困りのことを伺い、必要な検査をご相談してから進めます。
                次回いつ来ればよいかを、必ずお伝えします。
              </p>
            </li>
          </ol>
          <p style={{ marginTop: "1.6rem" }}>
            <Link className="sy-btn-outline" href="/demo/naika/access/">
              初診の流れ・持ち物を見る
            </Link>
          </p>
        </div>
      </section>

      {/* 院内の様子 */}
      <section className="sy-section" aria-labelledby="inside-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Clinic</p>
            <h2 id="inside-h">院内の様子</h2>
            <p>
              待合は席の間隔をひろく取り、通路は車いす・ベビーカーでも通れる幅にしています。
            </p>
          </div>
          {/* 1枚目を横いっぱいの主役にして、残り2枚を並べる */}
          <div className="sy-gallery sy-gallery-lead">
            <figure className="sy-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/naika/wait.webp"
                alt="白い椅子と観葉植物が並ぶ明るい待合室。天窓から光が入っている。"
                width={1200}
                height={800}
                loading="lazy"
              />
              <figcaption>待合室（8席・キッズスペースあり）</figcaption>
            </figure>
            <figure className="sy-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/naika/room.webp"
                alt="モニターと診察机が置かれた明るい診察室。"
                width={1200}
                height={800}
                loading="lazy"
              />
              <figcaption>診察室（検査の画像は画面でご説明します）</figcaption>
            </figure>
            <figure className="sy-figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/naika/leaf.webp"
                alt="オフホワイトの壁に、風にそよぐ葉の影がやわらかく落ちている。"
                width={1100}
                height={733}
                loading="lazy"
              />
              <figcaption>院名の「そよぎ」は、風にそよぐ葉から</figcaption>
            </figure>
          </div>
          <p style={{ marginTop: "1.6rem" }}>
            <Link className="sy-btn-outline" href="/demo/naika/clinic/">
              院内・院長紹介を見る
            </Link>
          </p>
        </div>
      </section>

      {/* アクセス */}
      <section className="sy-section sy-band" aria-labelledby="access-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Access</p>
            <h2 id="access-h">アクセス</h2>
          </div>
          <div className="sy-split">
            <dl className="sy-info">
              <div>
                <dt>住所</dt>
                <dd>
                  {CLINIC.zip} {CLINIC.address}
                </dd>
              </div>
              <div>
                <dt>電車</dt>
                <dd>
                  {CLINIC.station}
                  {CLINIC.walk}
                </dd>
              </div>
              <div>
                <dt>駐車場</dt>
                <dd>{CLINIC.parking}</dd>
              </div>
              <div>
                <dt>バス</dt>
                <dd>港見市営バス「若葉台三丁目」下車 徒歩1分</dd>
              </div>
            </dl>
            <DemoMap station={CLINIC.station} walk={CLINIC.walk} shop="そ" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sy-cta">
        <div className="sy-wrap sy-cta-inner">
          <h2>気になることがあれば、まずお電話ください</h2>
          <p>
            受診したほうがよいか迷うとき、症状のご相談だけでも構いません。
            受付時間内はスタッフが応対します。
          </p>
          <a className="sy-cta-tel" href={CLINIC.telHref}>
            <span className="num">{CLINIC.tel}</span>
            <small>
              午前 {CLINIC.am}／午後 {CLINIC.pm}（架空の番号です）
            </small>
          </a>
          <div className="sy-cta-actions">
            <Link className="sy-btn-outline" href="/demo/naika/access/#reserve">
              Web予約
            </Link>
            <Link className="sy-btn-line" href="/demo/naika/access/#line">
              LINEで予約・お知らせ
            </Link>
          </div>
          <p className="sy-note">
            ※ デザインサンプルのため、予約・お問い合わせは送信されません。
          </p>
        </div>
      </section>
    </>
  );
}
