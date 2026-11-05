import type { Metadata } from "next";
import GoogleFonts from "@/components/GoogleFonts";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./salon.css";

const BIZ: DemoBiz = {
  slug: "salon",
  schemaType: "HairSalon",
  name: "hair atelier 翠雨",
  description: "架空の美容院「hair atelier 翠雨」を想定したWebデザインサンプルです。制作: Santa Works",
  telephone: "03-0000-0000",
  streetAddress: "東京都某区翠町2-4-6 1F",
  openingHours: ["Tu-Su 10:00-19:00"],
};

export const metadata: Metadata = {
  title: "hair atelier 翠雨（すいう）｜デザインサンプル",
  description: BIZ.description,
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "hair atelier 翠雨（すいう）｜デザインサンプル"),
};

export default function SalonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="suiu" style={{ "--font-cormorant": "'Cormorant Garamond'", "--font-noto-serif": "'Noto Serif JP'" } as React.CSSProperties}>
      <GoogleFonts families={["Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500", "Noto+Serif+JP:wght@300;400;600"]} />
      <DemoJsonLd biz={BIZ} />
      {children}
    </div>
  );
}
