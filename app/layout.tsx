import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://santaworks-homepage.syamada125.workers.dev";
const SITE_NAME = "Santa Works";
const DEFAULT_TITLE =
  "Santa Works（サンタワークス）｜「忘れたくない」を、かたちに。";
const DESCRIPTION =
  "Santa Works（サンタワークス）は、記憶と思い出をITでサポートする個人事業です。Web制作・LINE Bot・業務ツール各種・AI活用支援まで。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s｜Santa Works",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Santa Works",
    "サンタワークス",
    "個人事業",
    "LINE Bot開発",
    "業務ツール開発",
    "AI活用支援",
    "Web制作",
    "ホームページ制作",
    "記憶",
    "思い出",
    "山田悟司",
  ],
  authors: [{ name: "山田 悟司" }],
  creator: "山田 悟司",
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Santa Works — 「忘れたくない」を、かたちに。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Santa Works",
      alternateName: "サンタワークス",
      url: `${SITE_URL}/`,
      description: DESCRIPTION,
      image: `${SITE_URL}/og.png`,
      areaServed: "JP",
      founder: { "@type": "Person", name: "山田 悟司" },
      knowsAbout: ["LINE Bot開発", "業務ツール開発", "AI活用支援", "Web制作"],
      slogan: "「忘れたくない」を、かたちに。",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Santa Works",
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
