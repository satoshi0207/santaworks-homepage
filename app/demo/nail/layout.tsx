import type { Metadata } from "next";
import { Quicksand, Zen_Maru_Gothic } from "next/font/google";
import "./nail.css";

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zenmaru",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "nail salon こんぺいとう｜デザインサンプル",
  description:
    "架空のネイルサロン「nail salon こんぺいとう」を想定したWebデザインサンプルです。制作: Santa Works",
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

export default function NailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`konpeito ${zenMaru.variable} ${quicksand.variable}`}>
      {children}
    </div>
  );
}
