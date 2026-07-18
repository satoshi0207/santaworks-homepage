import type { Metadata } from "next";
import Link from "next/link";
import { BIZ_UDPGothic, Oswald } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import Nav from "./Nav";
import "./koumuten.css";

const biz = BIZ_UDPGothic({
  variable: "--font-biz",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "ひだまり工務店｜デザインサンプル",
    template: "%s｜ひだまり工務店",
  },
  description:
    "架空の工務店「ひだまり工務店」を想定した、新築・リフォームの地域密着工務店サイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["/demo/koumuten/", "ホーム"],
  ["/demo/koumuten/works/", "施工事例"],
  ["/demo/koumuten/about/", "私たちのこと"],
  ["/demo/koumuten/contact/", "お問い合わせ"],
] as const;

export default function KoumutenLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`hidamari ${biz.variable} ${oswald.variable}`}>
      <header className="hd-header">
        <Link href="/demo/koumuten/" className="hd-logo">
          <span className="mark" aria-hidden="true">
            陽
          </span>
          <span className="text">
            ひだまり工務店
            <small>HIDAMARI KOUMUTEN — SINCE 1998</small>
          </span>
        </Link>
        <Nav />
        <Link href="/demo/koumuten/contact/" className="hd-header-cta">
          無料相談・お見積り
        </Link>
      </header>

      <main>{children}</main>

      <footer className="hd-footer">
        <div className="hd-wrap hd-footer-inner">
          <div>
            <p className="hd-footer-name">
              ひだまり工務店
              <small>ひだまりこうむてん</small>
            </p>
            <p className="hd-footer-addr">
              山ノ手県 陽向市（ひなたし）本町3-12（架空の住所です）
              <br />
              新築・リフォーム・増改築・小さな修繕
              <br />
              受付 9:00–18:00／日曜・祝日休
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@hidamari_koumuten" },
                { kind: "line", handle: "ひだまり工務店" },
              ]}
            />
          </div>
          <ul className="hd-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="hd-footer-note">
          「ひだまり工務店」は実在しない架空の工務店です。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="hd-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </div>
  );
}
