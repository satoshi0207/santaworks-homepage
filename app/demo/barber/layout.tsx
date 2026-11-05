import type { Metadata } from "next";
import Link from "next/link";
import GoogleFonts from "@/components/GoogleFonts";
import DemoSns from "@/components/DemoSns";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./barber.css";

const BIZ: DemoBiz = {
  slug: "barber",
  schemaType: "HairSalon",
  name: "バーバー ミナト",
  description:
    "架空の理容室「バーバー ミナト」を想定した、ヴィンテージなメンズバーバーサイトのデザインサンプルです。制作: Santa Works",
  telephone: "03-0000-0000",
  streetAddress: "山ノ手県 港見市 栄町1-8",
  openingHours: ["Tu-Su 09:00-19:00"],
};

export const metadata: Metadata = {
  title: "バーバー ミナト（BARBER MINATO）｜デザインサンプル",
  description: BIZ.description,
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "バーバー ミナト（BARBER MINATO）｜デザインサンプル"),
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
    <div className="minato" style={{ "--font-anton": "'Anton'", "--font-zkg": "'Zen Kaku Gothic New'" } as React.CSSProperties}>
      <GoogleFonts families={["Anton:wght@400", "Zen+Kaku+Gothic+New:wght@500;700;900"]} />
      <DemoJsonLd biz={BIZ} />
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
