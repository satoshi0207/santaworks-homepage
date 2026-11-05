import type { Metadata } from "next";
import GoogleFonts from "@/components/GoogleFonts";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./piano.css";

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
    <div className="otonoha" style={{ "--font-klee": "'Klee One'", "--font-playfair": "'Playfair Display'" } as React.CSSProperties}>
      <GoogleFonts families={["Klee+One:wght@400;600", "Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600"]} />
      <DemoJsonLd biz={BIZ} />
      {children}
    </div>
  );
}
