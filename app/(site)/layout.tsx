import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 本体サイト共通のヘッダー/フッター。/demo/ 配下には適用されない
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="site-content flex-1">{children}</main>
      <Footer />
    </div>
  );
}
