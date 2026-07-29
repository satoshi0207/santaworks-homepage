import type { Metadata } from "next";
import { Klee_One, Playfair_Display } from "next/font/google";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./piano.css";

const klee = Klee_One({
  variable: "--font-klee",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const BIZ: DemoBiz = {
  slug: "piano",
  schemaType: "EducationalOrganization",
  name: "おとのは ぴあの教室",
  description: "架空のピアノ教室「おとのは ぴあの教室」を想定したWebデザインサンプルです。制作: Santa Works",
  telephone: "03-0000-0000",
  streetAddress: "東京都某区おとは台2-5-8",
  openingHours: ["Tu-Sa 10:00-20:00"],
};

export const metadata: Metadata = {
  title: "おとのは ぴあの教室｜デザインサンプル",
  description: BIZ.description,
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "おとのは ぴあの教室｜デザインサンプル"),
};

export default function PianoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`otonoha ${klee.variable} ${playfair.variable}`}>
      <DemoJsonLd biz={BIZ} />
      {children}
    </div>
  );
}
