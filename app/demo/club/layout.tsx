import type { Metadata } from "next";
import Link from "next/link";
import { Shippori_Mincho, Cinzel } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./club.css";

const mincho = Shippori_Mincho({
  variable: "--font-mincho",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "銀座 月讀（つくよみ）｜デザインサンプル",
  description:
    "架空の銀座・会員制クラブ「月讀」を想定した、ダークで上質なナイトラウンジのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

export default function ClubLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`tsukuyomi ${mincho.variable} ${cinzel.variable}`}>
      <header className="gz-header">
        <Link href="/demo/club/" className="gz-brand">
          <span className="name">銀座 月讀</span>
          <span className="en">Tsukuyomi</span>
        </Link>
        <nav className="gz-nav" aria-label="サイト内メニュー">
          <a href="#interior">店内</a>
          <a href="#hospitality">おもてなし</a>
          <a href="#info">ご案内</a>
          <a href="#access">アクセス</a>
        </nav>
        <a href="#access" className="gz-reserve">
          ご予約
        </a>
      </header>

      <main>{children}</main>

      <footer className="gz-footer">
        <div className="gz-wrap gz-footer-inner">
          <div>
            <p className="name">銀座 月讀</p>
            <p className="en">Ginza Tsukuyomi — Members Lounge</p>
          </div>
          <p className="addr">
            東京都中央区銀座某丁目0-0 月讀ビル7F（架空の住所です）
            <br />
            20:00–翌1:00／土日・祝休　完全会員制・ご紹介制
          </p>
          <DemoSns
            accounts={[
              { kind: "instagram", handle: "@ginza_tsukuyomi" },
              { kind: "line", handle: "銀座 月讀" },
            ]}
          />
        </div>
        <p className="gz-footer-note">
          「銀座 月讀」は実在しない架空のクラブです。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="gz-badge">
        Design Sample · Santa Works
      </Link>
    </div>
  );
}
