import type { Metadata } from "next";
import Link from "next/link";
import { Zen_Kaku_Gothic_New, Poppins } from "next/font/google";
import DemoSns from "@/components/DemoSns";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import Nav from "./Nav";
import { NAV, SCHOOL } from "./data";
import "./juku.css";

const zkg = Zen_Kaku_Gothic_New({
  variable: "--font-zkg",
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const BIZ: DemoBiz = {
  slug: "juku",
  schemaType: "EducationalOrganization",
  name: "個別指導塾 あすなろ",
  description: "架空の学習塾「個別指導塾 あすなろ」を想定した、清潔で信頼感のある学習塾サイトのデザインサンプルです。制作: Santa Works",
  telephone: "0120-000-000",
  streetAddress: "山ノ手県 港見市 本町5-2 あすなろビル3F",
  openingHours: ["Mo-Sa 15:00-22:00"],
};

export const metadata: Metadata = {
  title: {
    default: "個別指導塾 あすなろ｜デザインサンプル",
    template: `%s｜${BIZ.name}`,
  },
  description: BIZ.description,
  // 架空の店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "個別指導塾 あすなろ｜デザインサンプル"),
};

export default function JukuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`asunaro ${zkg.variable} ${poppins.variable}`}>
      <DemoJsonLd biz={BIZ} />
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
        <Nav />
        <Link href="/demo/juku/access/#trial" className="as-cta">
          無料体験・面談
        </Link>
      </header>

      <main>{children}</main>

      <footer className="as-footer">
        <div className="as-wrap as-footer-inner">
          <div>
            <p className="name">個別指導塾 あすなろ</p>
            <p className="en">Asunaro Cram School ・ Since 2005</p>
            <p className="addr">
              {SCHOOL.address}（架空の住所です）
              <br />
              {SCHOOL.open}／{SCHOOL.closed}休（{SCHOOL.openNote}）
              <br />
              電話 {SCHOOL.tel}（架空の番号です）
            </p>
            <DemoSns
              accounts={[
                { kind: "line", handle: "個別指導塾 あすなろ" },
                { kind: "instagram", handle: "@asunaro_juku" },
              ]}
            />
          </div>
          <ul className="as-footer-nav">
            {NAV.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
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
