import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleFonts from "@/components/GoogleFonts";

// 本体サイト共通のヘッダー/フッター。/demo/ 配下には適用されない
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      {/* ヒラギノの無い端末（Windows/Android）向け。mac/iOS ではヒラギノが先に当たるのでフォント本体は落ちてこない */}
      <GoogleFonts
        families={["Noto+Sans+JP:wght@400;700;800", "Noto+Serif+JP:wght@400;700;800"]}
      />
      <Header />
      <main className="site-content flex-1">{children}</main>
      <Footer />
    </div>
  );
}
