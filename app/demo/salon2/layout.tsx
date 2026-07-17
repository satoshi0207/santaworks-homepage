import type { Metadata } from "next";
import Link from "next/link";
import { Bebas_Neue, Zen_Kaku_Gothic_New } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./salon2.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: ["400"],
  subsets: ["latin"],
});

const zkg = Zen_Kaku_Gothic_New({
  variable: "--font-zkg",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "余白 -YOHAKU-｜デザインサンプル",
  description:
    "架空のモード系ヘアサロン「余白 -YOHAKU-」を想定した、モノトーン・エディトリアルな美容室サイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["#concept", "CONCEPT"],
  ["#menu", "MENU"],
  ["#works", "WORKS"],
  ["#access", "ACCESS"],
] as const;

export default function Salon2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`yohaku ${bebas.variable} ${zkg.variable}`}>
      <header className="yh-header">
        <Link href="/demo/salon2/" className="yh-brand">
          <span className="name">YOHAKU</span>
          <span className="ja">余白</span>
        </Link>
        <nav className="yh-nav" aria-label="サイト内メニュー">
          <a href="#concept">Concept</a>
          <a href="#menu">Menu</a>
          <a href="#works">Works</a>
          <a href="#access">Access</a>
        </nav>
        <a href="#access" className="yh-reserve">
          Reserve
        </a>
      </header>

      <main>{children}</main>

      <footer className="yh-footer">
        <div className="yh-wrap yh-footer-inner">
          <div>
            <p className="name">YOHAKU</p>
            <p className="ja">余白 ・ HAIR / TOKYO</p>
            <p className="addr">
              山ノ手県 港見市（みなとみし）本町1-9 KITビル4F（架空の住所です）
              <br />
              11:00–20:00／火曜定休・完全予約制
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@yohaku_hair" },
                { kind: "line", handle: "余白 -YOHAKU-" },
              ]}
            />
          </div>
          <ul className="yh-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="yh-footer-note">
          「余白 -YOHAKU-」は実在しない架空のヘアサロンです。掲載写真はイメージで、
          特定の個人・お客様の作品ではありません。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="yh-badge">
        Design Sample
      </Link>
    </div>
  );
}
