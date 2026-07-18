import type { Metadata } from "next";
import Link from "next/link";
import { Kaisei_Decol, Shippori_Mincho } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./kissa.css";

const decol = Kaisei_Decol({
  variable: "--font-decol",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "純喫茶 おもかげ｜デザインサンプル",
  description:
    "架空の昭和レトロな純喫茶「おもかげ」を想定した、ノスタルジックな喫茶店サイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["#welcome", "ようこそ"],
  ["#menu", "お品書き"],
  ["#gallery", "店内"],
  ["#access", "ご案内"],
] as const;

export default function KissaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`omokage ${decol.variable} ${shippori.variable}`}>
      <header className="ok-header">
        <Link href="/demo/kissa/" className="ok-brand">
          <span className="mark" aria-hidden="true">
            珈
          </span>
          <span className="text">
            <span className="name">純喫茶 おもかげ</span>
            <span className="en">COFFEE &amp; OMOKAGE ・ SINCE 1972</span>
          </span>
        </Link>
        <nav className="ok-nav" aria-label="サイト内メニュー">
          <a href="#welcome">ようこそ</a>
          <a href="#menu">お品書き</a>
          <a href="#gallery">店内</a>
          <a href="#access">ご案内</a>
        </nav>
        <a href="#access" className="ok-cta">
          ご案内・地図
        </a>
      </header>

      <main>{children}</main>

      <footer className="ok-footer">
        <div className="ok-wrap ok-footer-inner">
          <div>
            <p className="name">純喫茶 おもかげ</p>
            <p className="en">Coffee &amp; Omokage ・ Since 1972</p>
            <p className="addr">
              山ノ手県 港見市（みなとみし）栄町2-3 おもかげビル1F（架空の住所です）
              <br />
              8:00–19:00／木曜定休
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@junkissa_omokage" },
                { kind: "line", handle: "純喫茶 おもかげ" },
              ]}
            />
          </div>
          <ul className="ok-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="ok-footer-note">
          「純喫茶 おもかげ」は実在しない架空の喫茶店です。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="ok-badge">
        Design Sample ・ Santa Works
      </Link>
    </div>
  );
}
