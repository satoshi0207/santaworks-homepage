import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../PageHead";
import { CLINIC } from "../data";

export const metadata: Metadata = {
  title: "院内・院長紹介",
  description:
    "そよぎ内科クリニック（架空）の院長のことば、院内の様子、備えている設備のデザインサンプルです。",
};

const rooms = [
  {
    src: "/demo/naika/wait.webp",
    alt: "白い椅子と観葉植物が並ぶ明るい待合室。天窓から光が入っている。",
    cap: "待合室｜席の間隔をひろく取り、通路は車いす・ベビーカーでも通れる幅にしています",
  },
  {
    src: "/demo/naika/room.webp",
    alt: "淡い緑の壁の診察室。診察台とデスク、モニター、観葉植物が置かれている。",
    cap: "診察室｜検査の画像や数値は、画面でお見せしながらご説明します",
  },
  {
    src: "/demo/naika/tools.webp",
    alt: "診察室の壁に取り付けられた診察器具。耳や喉を見るための機器が並んでいる。",
    cap: "診察器具｜使うたびに交換・消毒しています",
  },
  {
    src: "/demo/naika/stetho.webp",
    alt: "白い台の上に置かれた聴診器。",
    cap: "聴診器｜まずは丁寧に、からだの音を聴くところから",
  },
];

const equipment = [
  "血液検査・尿検査（項目により当日結果）",
  "心電図",
  "胸部・腹部レントゲン",
  "腹部・頸動脈 超音波検査",
  "自動血圧計（待合に設置・自由にお使いください）",
];

const facility = [
  ["段差", "入口から診察室まで段差はありません（スロープ・自動ドア）"],
  ["お手洗い", "車いすでお使いいただける多目的トイレ（手すり・おむつ交換台）"],
  ["キッズスペース", "待合の一角に絵本を置いています"],
  ["駐車場", `${CLINIC.parking}／うち1台は幅の広い区画`],
  ["お会計", "現金・クレジットカード・交通系ICに対応"],
];

export default function Clinic() {
  return (
    <>
      <PageHead en="Our Clinic" title="院内・院長紹介" />

      {/* 院長のことば：顔写真ではなく文章で人柄を伝える */}
      <section className="sy-section">
        <div className="sy-wrap sy-split">
          <div className="sy-prose">
            <div className="sy-shead">
              <p className="en">Message</p>
              <h2>「変わりありませんか」から始めたい</h2>
            </div>
            <p>
              大きな病院の内科で13年、たくさんの患者さんを診てきました。
              その中でいちばん心に残ったのは、診断がついた瞬間ではなく、
              何年も通ってくださっている方が「先週の話の続きなんだけど」と切り出してくれた時間でした。
            </p>
            <p>
              かかりつけ医の仕事は、病気を見つけることだけではありません。
              その人がいつもと比べてどうなのかを知っていることだと思っています。
              血圧の数字も、少し痩せたことも、去年の夏は食欲がなかったことも、
              前回どんな話をしたかも——カルテに残し、覚えておく。
              そうすると、次に会ったときの「変わりありませんか」がただの挨拶ではなくなります。
            </p>
            <p>
              風邪でも、健診の紙を持って迷っているだけでも構いません。
              長くつき合っていく相手として、気軽に使っていただけるクリニックでありたいと思っています。
            </p>
            <h3>院長のあゆみ（架空の設定です）</h3>
            <p>
              医学部を卒業後、総合病院の内科で呼吸器・生活習慣病の診療に従事。
              {CLINIC.opened}、生まれ育った若葉台に当院を開院しました。
            </p>
            <p className="sy-sign">
              そよぎ内科クリニック 院長
              <strong>
                {CLINIC.director}（{CLINIC.directorKana}）
              </strong>
            </p>
          </div>
          <figure className="sy-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/demo/naika/leaf.webp"
              alt="オフホワイトの壁に、風にそよぐ葉の影がやわらかく落ちている。"
              width={1100}
              height={733}
              loading="lazy"
            />
            <figcaption>
              院名の「そよぎ」は、風にそよぐ葉から。待合にも植物を置いています。
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 院内紹介 */}
      <section className="sy-section sy-band" aria-labelledby="rooms-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Inside</p>
            <h2 id="rooms-h">院内のご案内</h2>
            <p>
              初めての方が入口で迷わないよう、受付までまっすぐ進める配置にしています。
            </p>
          </div>
          <div className="sy-gallery">
            {rooms.map((r) => (
              <figure className="sy-figure" key={r.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={r.src}
                  alt={r.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                />
                <figcaption>{r.cap}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 設備・院内の配慮 */}
      <section className="sy-section" aria-labelledby="equip-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Equipment</p>
            <h2 id="equip-h">備えている検査機器</h2>
          </div>
          <div className="sy-cards">
            <div className="sy-card">
              <h3>院内で行える検査</h3>
              <ul>
                {equipment.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="sy-note">
                CT・MRI・内視鏡などは、連携先の病院へご紹介します。
              </p>
            </div>
            <div className="sy-card">
              <h3>院内の設備</h3>
              <ul>
                {facility.map(([k, v]) => (
                  <li key={k}>
                    {k}：{v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 概要 */}
      <section className="sy-section sy-beige" aria-labelledby="outline-h">
        <div className="sy-wrap">
          <div className="sy-shead">
            <p className="en">Outline</p>
            <h2 id="outline-h">クリニックの概要</h2>
          </div>
          <dl className="sy-info">
            <div>
              <dt>名称</dt>
              <dd>
                {CLINIC.name}（{CLINIC.kana}）
              </dd>
            </div>
            <div>
              <dt>院長</dt>
              <dd>
                {CLINIC.director}（{CLINIC.directorKana}）
              </dd>
            </div>
            <div>
              <dt>診療科</dt>
              <dd>{CLINIC.departments}</dd>
            </div>
            <div>
              <dt>開院</dt>
              <dd>{CLINIC.opened}</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>
                {CLINIC.zip} {CLINIC.address}
              </dd>
            </div>
            <div>
              <dt>電話</dt>
              <dd>
                <a href={CLINIC.telHref}>{CLINIC.tel}</a>
              </dd>
            </div>
            <div>
              <dt>診療時間</dt>
              <dd>
                午前 {CLINIC.am}／午後 {CLINIC.pm}
                <br />
                休診：{CLINIC.closed}
              </dd>
            </div>
          </dl>
          <p className="sy-note">
            ※
            上記はすべて架空の設定です。医師の氏名・経歴・所在地・電話番号は実在しません。
          </p>
        </div>
      </section>

      <section className="sy-cta">
        <div className="sy-wrap sy-cta-inner">
          <h2>はじめての受診も、どうぞ気軽に</h2>
          <p>
            持ち物や初診の流れは「初診・アクセス」のページにまとめています。
            分からないことはお電話でお尋ねください。
          </p>
          <a className="sy-cta-tel" href={CLINIC.telHref}>
            <span className="num">{CLINIC.tel}</span>
            <small>
              午前 {CLINIC.am}／午後 {CLINIC.pm}（架空の番号です）
            </small>
          </a>
          <div className="sy-cta-actions">
            <Link className="sy-btn-outline" href="/demo/naika/access/">
              初診の流れ・アクセス
            </Link>
            <Link className="sy-btn-outline" href="/demo/naika/shinryo/">
              診療案内
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
