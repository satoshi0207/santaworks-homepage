import type { Metadata } from "next";
import GoogleFonts from "@/components/GoogleFonts";
import DemoJsonLd from "@/components/DemoJsonLd";
import { demoOg, type DemoBiz } from "@/components/demoMeta";
import "./ramen.css";

const BIZ: DemoBiz = {
  slug: "ramen",
  schemaType: "Restaurant",
  name: "麺処 ゆげや",
  description: "架空のラーメン店「麺処 ゆげや」を想定したWebデザインサンプルです。制作: Santa Works",
  telephone: "03-0000-0000",
  streetAddress: "東京都某区麺食町一丁目2-3",
  openingHours: ["Th-Tu 11:30-15:00", "Th-Tu 18:00-21:00"],
  servesCuisine: "ラーメン",
};

export const metadata: Metadata = {
  title: "麺処 ゆげや｜デザインサンプル",
  description: BIZ.description,
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
  ...demoOg(BIZ, "麺処 ゆげや｜デザインサンプル"),
};

export default function RamenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="yugeya" style={{ "--font-shippori": "'Shippori Mincho B1'" } as React.CSSProperties}>
      <GoogleFonts families={["Shippori+Mincho+B1:wght@400;600;800"]} />
      <DemoJsonLd biz={BIZ} />
      {children}
    </div>
  );
}
