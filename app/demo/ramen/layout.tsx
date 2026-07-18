import type { Metadata } from "next";
import { Shippori_Mincho_B1 } from "next/font/google";
import "./ramen.css";

const shippori = Shippori_Mincho_B1({
  variable: "--font-shippori",
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "麺処 ゆげや｜デザインサンプル",
  description:
    "架空のラーメン店「麺処 ゆげや」を想定したWebデザインサンプルです。制作: Santa Works",
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

export default function RamenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`yugeya ${shippori.variable}`}>{children}</div>;
}
