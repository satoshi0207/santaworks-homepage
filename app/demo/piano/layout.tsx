import type { Metadata } from "next";
import { Klee_One, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "おとのは ぴあの教室｜デザインサンプル",
  description:
    "架空のピアノ教室「おとのは ぴあの教室」を想定したWebデザインサンプルです。制作: Santa Works",
  // 架空店舗のため検索エンジンには載せない
  robots: { index: false, follow: false },
};

export default function PianoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`otonoha ${klee.variable} ${playfair.variable}`}>
      {children}
    </div>
  );
}
