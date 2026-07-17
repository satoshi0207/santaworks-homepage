import type { Metadata } from "next";
import Link from "next/link";
import { Zen_Kaku_Gothic_New, Zen_Old_Mincho } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import Nav from "./Nav";
import "./factory.css";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zenkaku",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const zenOld = Zen_Old_Mincho({
  variable: "--font-zenold",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "有限会社 灯火製作所｜デザインサンプル",
    template: "%s｜有限会社 灯火製作所",
  },
  description:
    "架空のものづくり企業「有限会社 灯火製作所」を想定したコーポレートサイトのデザインサンプルです。制作: Santa Works",
  // 架空企業のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

const footerNav = [
  ["/demo/factory/", "ホーム"],
  ["/demo/factory/about/", "会社概要"],
  ["/demo/factory/service/", "事業内容"],
  ["/demo/factory/recruit/", "採用情報"],
  ["/demo/factory/contact/", "お問い合わせ"],
] as const;

export default function FactoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`tomoshibi ${zenKaku.variable} ${zenOld.variable}`}>
      <header className="t-header">
        <Link href="/demo/factory/" className="t-logo">
          <span className="mark" aria-hidden="true">
            灯
          </span>
          <span className="text">
            有限会社 灯火製作所
            <small>TOMOSHIBI SEISAKUSHO — SINCE 1973</small>
          </span>
        </Link>
        <Nav />
      </header>

      <main>{children}</main>

      <footer className="t-footer">
        <div className="t-footer-inner">
          <div>
            <p className="t-footer-name">
              有限会社 灯火製作所
              <small>ともしびせいさくしょ</small>
            </p>
            <p className="t-footer-addr">
              東京都某区灯町2-7-4（架空の住所です）
              <br />
              金属精密部品加工・板金・小ロット量産
            </p>
            <DemoSns accounts={[{ kind: "x", handle: "@tomoshibi_1973" }]} />
          </div>
          <ul className="t-footer-nav">
            {footerNav.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="t-footer-note">
          「有限会社 灯火製作所」は実在しない架空の企業です。このページは{" "}
          <Link href="/">Santa Works</Link>{" "}
          が制作したWebデザインサンプルです。写真: Unsplash
        </p>
      </footer>

      <Link href="/works/" className="t-badge">
        DESIGN SAMPLE ｜ Santa Works
      </Link>
    </div>
  );
}
