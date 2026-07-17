import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Santa Works（サンタワークス）｜「忘れたくない」を、かたちに。",
    template: "%s｜Santa Works",
  },
  description:
    "Santa Works（サンタワークス）は、記憶と思い出をITでサポートする個人事業です。LINE Bot・業務ツールの開発から、AI活用支援、Web制作まで。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
