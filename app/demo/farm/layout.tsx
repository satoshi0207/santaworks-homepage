import type { Metadata } from "next";
import Link from "next/link";
import { Zen_Maru_Gothic, Fraunces } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./sorairo.css";

const zenmaru = Zen_Maru_Gothic({
  variable: "--font-zenmaru",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "そらいろ牧場｜デザインサンプル",
  description:
    "架空の北海道・酪農牧場「そらいろ牧場」を想定した、大自然を主役にした明るいサイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["#about", "牧場のこと"],
  ["#shop", "直売所"],
  ["#experience", "牧場体験"],
  ["#gallery", "風景"],
  ["#access", "アクセス"],
] as const;

export default function FarmLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`sorairo ${zenmaru.variable} ${fraunces.variable}`}>
      <header className="sr-header">
        <Link href="/demo/farm/" className="sr-brand">
          <span className="mark" aria-hidden="true">
            🐄
          </span>
          <span>
            <span className="name">そらいろ牧場</span>
            <span className="en">SORAIRO DAIRY FARM</span>
          </span>
        </Link>
        <nav className="sr-nav" aria-label="サイト内メニュー">
          <a href="#about">牧場のこと</a>
          <a href="#shop">直売所</a>
          <a href="#experience">牧場体験</a>
          <a href="#gallery">風景</a>
        </nav>
        <a href="#access" className="sr-header-cta">
          アクセス
        </a>
      </header>

      <main>{children}</main>

      <footer className="sr-footer">
        <div className="sr-wrap sr-footer-inner">
          <div>
            <p className="name">そらいろ牧場</p>
            <p className="en">Sorairo Dairy Farm ・ Since 1998</p>
            <p className="addr">
              北嶺（ほくれい）地方 大空郡 みなも町 まきば野1200（架空の住所です）
              <br />
              直売所 9:00–17:00／火曜定休（冬季は要問合せ）
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@sorairo_farm" },
                { kind: "line", handle: "そらいろ牧場 直売所" },
              ]}
            />
          </div>
          <ul className="sr-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sr-wrap">
          <p className="sr-footer-note">
            「そらいろ牧場」は実在しない架空の牧場です。このページは{" "}
            <Link href="/">Santa Works</Link>{" "}
            が制作したWebデザインサンプルです。写真: Unsplash
          </p>
        </div>
      </footer>

      <Link href="/works/" className="sr-badge">
        Design Sample ・ Santa Works
      </Link>
    </div>
  );
}
