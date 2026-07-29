import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";
import { SCHOOL } from "../data";

export const metadata: Metadata = {
  title: "講師・教室",
  description:
    "架空の学習塾「個別指導塾 あすなろ」の講師紹介と教室・自習室のご案内（デザインサンプル）。",
};

/* 顔写真は使わない（全社ガードレール⑤）。頭文字と担当科目で人柄を出す */
const teachers = [
  {
    initial: "室",
    role: "教室長",
    name: "青柳 一馬",
    subject: "数学・理科",
    body: "開校から20年、この教室にいます。「勉強しなさい」とは言いません。かわりに、いま何から手をつけるかを一緒に決めます。",
    word: "点数より先に、机に向かう時間を戻しましょう。",
  },
  {
    initial: "英",
    role: "主任講師",
    name: "橘 さやか",
    subject: "英語・国語",
    body: "中学英語のつまずきは、ほとんどが一・二年生の文法にあります。学年をさかのぼることを、恥ずかしいことにしません。",
    word: "戻るのは、遠回りではありません。",
  },
  {
    initial: "受",
    role: "講師",
    name: "森 悠真",
    subject: "高校数学・物理",
    body: "自分も高校で一度つまずいた側です。わからない側の気持ちがわかる、というのが唯一の取り柄だと思っています。",
    word: "解けない理由は、必ずどこかにあります。",
  },
];

const rooms: [string, string, string][] = [
  [
    "/demo/juku/classroom.jpg",
    "明るい教室",
    "1ブースに講師1人・生徒2人まで。声が届く距離で座ります。",
  ],
  [
    "/demo/juku/writing.jpg",
    "自習室",
    "授業のない日も使えます。開校時間中はいつでも、予約も不要です。",
  ],
  [
    "/demo/juku/chalk.jpg",
    "質問対応",
    "自習中でも、手が空いている講師に質問できます。",
  ],
];

export default function JukuTeacher() {
  return (
    <>
      <PageHead
        en="Teachers & Classroom"
        title="講師・教室"
        lead="誰が教えるのか、どんな場所なのか。通う前に知っておきたいことだと思います。"
      />

      {/* 講師 */}
      <section className="as-section">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Teachers</p>
            <h2 className="as-h2">
              教えるのは、<span className="blue">この人たち</span>です
            </h2>
            <p className="as-sub">
              担当は固定制です。毎回ちがう講師が来ることはありません。（人物はすべて架空です）
            </p>
          </div>
          <div className="as-teachers">
            {teachers.map((t) => (
              <article key={t.name} className="as-teacher">
                <div className="avatar" aria-hidden="true">
                  {t.initial}
                </div>
                <span className="role">{t.role}</span>
                <h3>{t.name}</h3>
                <p className="subject">{t.subject}</p>
                <p className="body">{t.body}</p>
                <p className="word">「{t.word}」</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 教室 */}
      <section className="as-section paper2" aria-labelledby="room-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Classroom</p>
            <h2 className="as-h2" id="room-h">
              集中できる、居心地のいい教室
            </h2>
            <p className="as-sub">
              「家だと集中できない」——その悩みを、あすなろが引き受けます。
            </p>
          </div>
          <div className="as-roomgrid">
            {rooms.map(([src, alt, note]) => (
              <figure key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src={src} alt={alt} />
                <figcaption>
                  <b>{alt}</b>
                  {note}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 自習室の使い方 */}
      <section className="as-section" aria-labelledby="self-h">
        <div className="as-wrap">
          <div className="as-head">
            <p className="as-label">Self study</p>
            <h2 className="as-h2" id="self-h">
              自習室の使い方
            </h2>
          </div>
          <div className="as-reasons">
            <div className="as-reason">
              <div className="ico" aria-hidden="true">
                ◷
              </div>
              <h3>{SCHOOL.openNote}から</h3>
              <p>
                学校帰りにそのまま寄れます。開校時間中はいつでも、予約も不要です。
              </p>
            </div>
            <div className="as-reason">
              <div className="ico" aria-hidden="true">
                ¥
              </div>
              <h3>利用は無料</h3>
              <p>
                何時間いても追加料金はいただきません。週1回コースの方も同じです。
              </p>
            </div>
            <div className="as-reason">
              <div className="ico" aria-hidden="true">
                ?
              </div>
              <h3>質問できます</h3>
              <p>
                手が空いている講師に、その場で聞けます。「自習室に置いておくだけ」にはしません。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="as-section paper2">
        <div className="as-wrap as-cta-center">
          <h2 className="as-h2">教室は、いつでも見にいらしてください。</h2>
          <p className="as-sub">
            見学だけでも構いません。授業中の様子をそのままご覧いただけます。
          </p>
          <div className="as-more">
            <Link href="/demo/juku/access/#trial" className="as-btn">
              見学・無料体験を申し込む
            </Link>
            <Link href="/demo/juku/access/" className="as-btn-ghost">
              アクセスを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
