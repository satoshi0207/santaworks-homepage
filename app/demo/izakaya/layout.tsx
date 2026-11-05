import type { Metadata } from "next";
import GoogleFonts from "@/components/GoogleFonts";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./izakaya.css";

const BIZ: DemoBiz = {
  slug: "izakaya",
  schemaType: "BarOrPub",
  name: "大衆酒場 ほおずき",
  description: "架空の居酒屋「大衆酒場 ほおずき」を想定したWebデザインサンプルです。制作: Santa Works",
  telephone: "03-0000-0000",
  streetAddress: "東京都某区赤提灯横丁3-2-1",
  openingHours: ["Mo-Sa 17:00-23:30"],
};

export const metadata: Metadata = {
  title: "大衆酒場 ほおずき｜デザインサンプル",
  description: BIZ.description,
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "大衆酒場 ほおずき｜デザインサンプル"),
};

export default function IzakayaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hoozuki" style={{ "--font-yuji": "'Yuji Syuku'" } as React.CSSProperties}>
      <GoogleFonts families={["Yuji+Syuku:wght@400"]} />
      <DemoJsonLd biz={BIZ} />
      {children}
    </div>
  );
}
