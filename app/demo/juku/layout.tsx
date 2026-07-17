import type { Metadata } from "next";
import Link from "next/link";
import { Zen_Kaku_Gothic_New, Poppins } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import "./juku.css";

const zkg = Zen_Kaku_Gothic_New({
  variable: "--font-zkg",
  weight: ["500", "700", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "個別指導塾 あすなろ｜デザインサンプル",
  description:
    "架空の学習塾「個別指導塾 あすなろ」を想定した、清潔で信頼感のある学習塾サイトのデザインサンプルです。制作: Santa Works",
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["#reasons", "あすなろの特長"],
  ["#courses", "コース"],
  ["#fee", "料金"],
  ["#access", "教室・アクセス"],
] as const;

export default function JukuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`asunaro ${zkg.variable} ${poppins.variable}`}>
      <header className="as-header">
        <Link href="/demo/juku/" className="as-brand">
          <span className="mark" aria-hidden="true">
            あ
          </span>
          <span className="text">
            <span className="name">個別指導塾 あすなろ</span>
            <span className="en">Asunaro Cram School</span>
          </span>
        </Link>
        <nav className="as-nav" aria-label="サイト内メニュー">
          <a href="#reasons">特長</a>
          <a href="#courses">コース</a>
          <a href="#fee">料金</a>
          <a href="#results">合格実績</a>
          <a href="#access">アクセス</a>
        </nav>
        <a href="#access" className="as-cta">
          無料体験・面談
        </a>
      </header>

      <main>{children}</main>

      <footer className="as-footer">
        <div className="as-wrap as-footer-inner">
          <div>
            <p className="name">個別指導塾 あすなろ</p>
            <p className="en">Asunaro Cram School ・ Since 2005</p>
            <p className="addr">
              山ノ手県 港見市（みなとみし）本町5-2 あすなろビル3F（架空の住所です）
              <br />
              月〜土 15:00–22:00／日曜休（自習室は14:00〜）
            </p>
            <DemoSns
              accounts={[
                { kind: "line", handle: "個別指導塾 あすなろ" },
                { kind: "instagram", handle: "@asunaro_juku" },
              ]}
            />
          </div>
          <ul className="as-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="as-footer-note">
          「個別指導塾 あすなろ」は実在しない架空の学習塾です。合格実績・料金・
          住所・電話番号はすべてサンプルです。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="as-badge">
        Design Sample ・ Santa Works
      </Link>
    </div>
  );
}
