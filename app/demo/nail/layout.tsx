import type { Metadata } from "next";
import GoogleFonts from "@/components/GoogleFonts";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./nail.css";

const BIZ: DemoBiz = {
  slug: "nail",
  schemaType: "NailSalon",
  name: "nail salon こんぺいとう",
  description: "架空のネイルサロン「nail salon こんぺいとう」を想定したWebデザインサンプルです。制作: Santa Works",
  telephone: "03-0000-0000",
  streetAddress: "東京都某区こんぺい坂1-8-15 2F",
  openingHours: ["Fr-We 10:00-19:00"],
};

export const metadata: Metadata = {
  title: "nail salon こんぺいとう｜デザインサンプル",
  description: BIZ.description,
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "nail salon こんぺいとう｜デザインサンプル"),
};

export default function NailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="konpeito" style={{ "--font-zenmaru": "'Zen Maru Gothic'", "--font-quicksand": "'Quicksand'" } as React.CSSProperties}>
      <GoogleFonts families={["Zen+Maru+Gothic:wght@400;500;700", "Quicksand:wght@400;600"]} />
      <DemoJsonLd biz={BIZ} />
      {children}
    </div>
  );
}
