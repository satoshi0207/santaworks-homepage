import type { Metadata } from "next";
import Link from "next/link";
import { Zen_Antique, Zen_Kaku_Gothic_New } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./photo.css";

const antique = Zen_Antique({
  variable: "--font-antique",
  weight: ["400"],
  subsets: ["latin"],
});

const zkg = Zen_Kaku_Gothic_New({
  variable: "--font-zkg",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "写真館 ひととき｜デザインサンプル",
  description:
    "架空の写真館「ひととき」を想定した、節目の思い出を残すフォトスタジオサイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["#message", "想い"],
  ["#scenes", "撮影シーン"],
  ["#album", "アルバムより"],
  ["#access", "ご案内"],
] as const;

export default function PhotoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`hitotoki ${antique.variable} ${zkg.variable}`}>
      <header className="ht-header">
        <Link href="/demo/photo/" className="ht-brand">
          <span className="name">写真館 ひととき</span>
          <span className="en">Photo Studio Hitotoki</span>
        </Link>
        <nav className="ht-nav" aria-label="サイト内メニュー">
          <a href="#message">想い</a>
          <a href="#scenes">撮影シーン</a>
          <a href="#album">アルバムより</a>
          <a href="#access">ご案内</a>
        </nav>
        <a href="#access" className="ht-reserve">
          ご予約・ご相談
        </a>
      </header>

      <main>{children}</main>

      <footer className="ht-footer">
        <div className="ht-wrap ht-footer-inner">
          <div>
            <p className="name">写真館 ひととき</p>
            <p className="en">Photo Studio Hitotoki ・ Since 1985</p>
            <p className="addr">
              山ノ手県 港見市（みなとみし）本町4-6 ひとときビル2F（架空の住所です）
              <br />
              10:00–18:00／水曜定休・完全予約制
            </p>
            <DemoSns
              accounts={[
                { kind: "instagram", handle: "@studio_hitotoki" },
                { kind: "line", handle: "写真館 ひととき" },
              ]}
            />
          </div>
          <ul className="ht-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="ht-footer-note">
          「写真館 ひととき」は実在しない架空の写真館です。掲載写真はイメージで、
          特定の個人・お客様の作品ではありません。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="ht-badge">
        Design Sample ・ Santa Works
      </Link>
    </div>
  );
}
