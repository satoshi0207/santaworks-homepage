import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./salon.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

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
    <div className={`suiu ${cormorant.variable} ${notoSerif.variable}`}>
      <DemoJsonLd biz={BIZ} />
      {children}
    </div>
  );
}
