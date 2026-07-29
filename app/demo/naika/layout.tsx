import type { Metadata } from "next";
import Link from "next/link";
import { BIZ_UDPGothic, Barlow } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import Nav from "./Nav";
import { LeafMark, IconPhone } from "./icons";
import { CLINIC, NAV } from "./data";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./soyogi.css";

/* UD書体＝判読性のために設計された書体。「高齢の患者が読む」前提に理屈が通る */
const biz = BIZ_UDPGothic({
  variable: "--font-biz",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

/* 数字（診療時間・電話番号）を締めるための欧文 */
const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const BIZ: DemoBiz = {
  slug: "naika",
  schemaType: "MedicalClinic",
  name: "そよぎ内科クリニック",
  description: "架空の内科クリニック「そよぎ内科クリニック」を想定した、かかりつけ医のサイトのデザインサンプルです。読みやすさ・使いやすさを主役に設計しています。制作: Santa Works",
  telephone: "0000-00-0000",
  streetAddress: "山ノ手県港見市 若葉台2-8-1 そよぎメディカルビル1F",
  openingHours: ["Mo,Tu,Th,Fr 09:00-12:30", "Mo,Tu,Th,Fr 15:00-18:30", "We,Sa 09:00-12:30"],
};

export const metadata: Metadata = {
  title: {
    default: "そよぎ内科クリニック｜デザインサンプル",
    template: `%s｜${CLINIC.name}`,
  },
  description: BIZ.description,
  // 架空のクリニックのため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "そよぎ内科クリニック｜デザインサンプル"),
};

export default function NaikaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`soyogi ${biz.variable} ${barlow.variable}`}>
      <DemoJsonLd biz={BIZ} />
      <a className="sy-skip" href="#main">
        本文へスキップ
      </a>

      <header className="sy-header">
        <Link href="/demo/naika/" className="sy-logo">
          <span className="mark">
            <LeafMark />
          </span>
          <span className="text">
            {CLINIC.name}
            <small>{CLINIC.en}</small>
          </span>
        </Link>
        <Nav />
        <a className="sy-header-tel" href={CLINIC.telHref}>
          <IconPhone />
          <span>
            <span className="num">{CLINIC.tel}</span>
            <small>タップで発信（架空の番号です）</small>
          </span>
        </a>
      </header>

      <main id="main">{children}</main>

      <footer className="sy-footer">
        <div className="sy-wrap sy-footer-inner">
          <div>
            <p className="sy-footer-name">
              {CLINIC.name}
              <small>{CLINIC.en}</small>
            </p>
            <p className="sy-footer-addr">
              {CLINIC.departments}
              <br />
              {CLINIC.zip} {CLINIC.address}（架空の住所です）
              <br />
              電話 {CLINIC.tel}（架空の番号です）
              <br />
              午前 {CLINIC.am}／午後 {CLINIC.pm}
              <br />
              休診：{CLINIC.closed}
            </p>
            <DemoSns
              accounts={[
                { kind: "line", handle: "そよぎ内科クリニック" },
                { kind: "instagram", handle: "@soyogi_naika" },
              ]}
            />
          </div>
          <ul className="sy-footer-nav">
            {NAV.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="sy-footer-note">
          「そよぎ内科クリニック」は実在しない架空のクリニックです。院名・住所・電話番号・医師名・
          診療時間・費用はすべて架空で、掲載写真はイメージです。
          このページは <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      {/* スマホ用の下部固定バー。電話と予約は、どこを読んでいても押せる場所に置く */}
      <div className="sy-bottombar" aria-label="電話・予約">
        <a className="tel" href={CLINIC.telHref}>
          <IconPhone />
          電話する
        </a>
        <a className="web" href="/demo/naika/access/#reserve">
          Web予約
          <small>24時間受付</small>
        </a>
        <a className="line" href="/demo/naika/access/#line">
          LINE
          <small>予約・お知らせ</small>
        </a>
      </div>

      <Link href="/works/" className="sy-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </div>
  );
}
