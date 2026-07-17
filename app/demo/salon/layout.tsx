import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./salon.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hair atelier 翠雨（すいう）｜デザインサンプル",
  description:
    "架空の美容院「hair atelier 翠雨」を想定したWebデザインサンプルです。制作: Santa Works",
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

export default function SalonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`suiu ${cormorant.variable} ${notoSerif.variable}`}>
      {children}
    </div>
  );
}
