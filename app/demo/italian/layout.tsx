import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display, Shippori_Mincho } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./candelume.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osteria Candelume｜デザインサンプル",
  description:
    "架空のイタリアン居酒屋「Osteria Candelume（オステリア・カンデルーメ）」を想定した、夜のエノテカ風サイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["#about", "店主のことば"],
  ["#menu", "お品書き"],
  ["#vino", "ワイン"],
  ["#gallery", "店のなか"],
  ["#access", "ご案内"],
] as const;

export default function ItalianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`candelume ${playfair.variable} ${shippori.variable}`}>
      <header className="cd-header">
        <Link href="/demo/italian/" className="cd-brand">
          <span className="name cd-en">Candelume</span>
          <span className="sub">OSTERIA</span>
        </Link>
        <nav className="cd-nav" aria-label="サイト内メニュー">
          <a href="#about">店主のことば</a>
          <a href="#menu">お品書き</a>
          <a href="#vino">ワイン</a>
          <a href="#gallery">店のなか</a>
        </nav>
        <a href="#access" className="cd-header-cta">
          ご案内・地図
        </a>
      </header>

      <main>{children}</main>

      <footer className="cd-footer">
        <div className="cd-wrap cd-footer-inner">
          <div>
            <p className="name cd-en">Osteria Candelume</p>
            <p className="sub">VINO E CICCHETTI</p>
            <p className="addr">
              山ノ手県 港見市（みなとみし）灯り横丁2-9 カンテラビル1F（架空の住所です）
              <br />
              18:00–24:00（L.O. 23:00）／日曜・月曜おやすみ
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@osteria_candelume" },
                { kind: "line", handle: "Osteria Candelume" },
              ]}
            />
          </div>
          <ul className="cd-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="cd-wrap">
          <p className="cd-footer-note">
            「Osteria Candelume」は実在しない架空のイタリアン居酒屋です。このページは{" "}
            <Link href="/">Santa Works</Link>{" "}
            が制作したWebデザインサンプルです。写真: Unsplash
          </p>
        </div>
      </footer>

      <Link href="/works/" className="cd-badge">
        Design Sample ・ Santa Works
      </Link>
    </div>
  );
}
