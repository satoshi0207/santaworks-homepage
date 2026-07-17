import type { Metadata } from "next";
import { Yuji_Syuku } from "next/font/google";
import "./izakaya.css";

const yuji = Yuji_Syuku({
  variable: "--font-yuji",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "大衆酒場 ほおずき｜デザインサンプル",
  description:
    "架空の居酒屋「大衆酒場 ほおずき」を想定したWebデザインサンプルです。制作: Santa Works",
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

export default function IzakayaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`hoozuki ${yuji.variable}`}>{children}</div>;
}
