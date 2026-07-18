import type { Metadata } from "next";
import Link from "next/link";
import { Anton, Zen_Kaku_Gothic_New } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./barber.css";

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const zkg = Zen_Kaku_Gothic_New({
  variable: "--font-zkg",
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "バーバー ミナト（BARBER MINATO）｜デザインサンプル",
  description:
    "架空の理容室「バーバー ミナト」を想定した、ヴィンテージなメンズバーバーサイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["#about", "こだわり"],
  ["#menu", "お品書き"],
  ["#gallery", "店内"],
  ["#access", "ご予約・アクセス"],
] as const;

export default function BarberLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`minato ${anton.variable} ${zkg.variable}`}>
      <div className="bm-stripe" aria-hidden="true" />
      <header className="bm-header">
        <Link href="/demo/barber/" className="bm-brand">
          <span className="mark" aria-hidden="true">
            ✂
          </span>
          <span className="text">
            <span className="en">Barber Minato</span>
            <span className="ja">り よ う み な と ・ SINCE 1962</span>
          </span>
        </Link>
        <nav className="bm-nav" aria-label="サイト内メニュー">
          <a href="#about">こだわり</a>
          <a href="#menu">お品書き</a>
          <a href="#gallery">店内</a>
          <a href="#access">アクセス</a>
        </nav>
        <a href="#access" className="bm-cta">
          ご予約・受付
        </a>
      </header>

      <main>{children}</main>

      <footer className="bm-footer">
        <div className="bm-wrap bm-footer-inner">
          <div>
            <p className="en">Barber Minato</p>
            <p className="ja">理容 みなと ・ 港町の床屋</p>
            <p className="addr">
              山ノ手県 港見市（みなとみし）栄町1-8（架空の住所です）
              <br />
              火〜日 9:00–19:00／月曜定休（祝日は営業）
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@barber_minato" },
                { kind: "line", handle: "バーバー ミナト" },
              ]}
            />
          </div>
          <ul className="bm-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="bm-footer-note">
          「バーバー ミナト」は実在しない架空の理容室です。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="bm-badge">
        Design Sample · Santa Works
      </Link>
    </div>
  );
}
