import type { Metadata } from "next";
import Link from "next/link";
import { Bodoni_Moda, Zen_Kaku_Gothic_New } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./cabaret.css";

// 描画重視: ウェイトを最小限に絞り、preloadもしない（日本語グリフは遅延取得）
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const zkg = Zen_Kaku_Gothic_New({
  variable: "--font-zkg",
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "CLUB Diamantine（ディアマンティーヌ）｜デザインサンプル",
  description:
    "架空の高級キャバクラ「CLUB Diamantine」を想定した、漆黒とホワイトゴールドのナイトラウンジサイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const nav = [
  ["#concept", "コンセプト"],
  ["#floor", "フロア"],
  ["#system", "料金システム"],
  ["#access", "アクセス"],
] as const;

export default function CabaretLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`diamantine ${bodoni.variable} ${zkg.variable}`}>
      <header className="dm-header">
        <Link href="/demo/cabaret/" className="dm-brand">
          <span className="club">CLUB</span>
          <span className="name">Diamantine</span>
        </Link>
        <nav className="dm-nav" aria-label="サイト内メニュー">
          {nav.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#access" className="dm-reserve">
          ご予約
        </a>
      </header>

      <main>{children}</main>

      <footer className="dm-footer">
        <div className="dm-wrap dm-footer-inner">
          <div>
            <p className="name">CLUB Diamantine</p>
            <p className="en">ディアマンティーヌ ・ Since 2018</p>
            <p className="addr">
              山ノ手県 港見市 宵坂2-9 ジュエルビル5F（架空の住所です）
              <br />
              20:00 – LAST／日曜定休 ・ 20歳未満の方はご入店いただけません
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@club_diamantine" },
                { kind: "x", handle: "@club_diamantine" },
              ]}
            />
          </div>
          <ul className="dm-footer-nav">
            {nav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="dm-footer-note">
          「CLUB Diamantine」は実在しない架空の店舗です。キャスト等の実在人物は登場せず、
          掲載写真はすべてイメージです。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="dm-badge">
        Design Sample ・ Santa Works
      </Link>
    </div>
  );
}
