import type { Metadata } from "next";
import Link from "next/link";
import GoogleFonts from "@/components/GoogleFonts";
import DemoSns from "@/components/DemoSns";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./salon2.css";

const BIZ: DemoBiz = {
  slug: "salon2",
  schemaType: "HairSalon",
  name: "余白 -YOHAKU-",
  description: "架空のモード系ヘアサロン「余白 -YOHAKU-」を想定した、モノトーン・エディトリアルな美容室サイトのデザインサンプルです。制作: Santa Works",
  telephone: "03-0000-0000",
  streetAddress: "山ノ手県 港見市 本町1-9 KITビル4F",
  openingHours: ["We-Mo 11:00-20:00"],
};

export const metadata: Metadata = {
  title: "余白 -YOHAKU-｜デザインサンプル",
  description: BIZ.description,
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "余白 -YOHAKU-｜デザインサンプル"),
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
    <div className="yohaku" style={{ "--font-bebas": "'Bebas Neue'", "--font-zkg": "'Zen Kaku Gothic New'" } as React.CSSProperties}>
      <GoogleFonts families={["Bebas+Neue:wght@400", "Zen+Kaku+Gothic+New:wght@400;500;700"]} />
      <DemoJsonLd biz={BIZ} />
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
