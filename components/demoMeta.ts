import type { Metadata } from "next";

/**
 * デモ（架空店舗サンプル）1本ぶんの事業データ。
 *
 * 実データは各デモの layout.tsx 側に置く。ここに全店舗をまとめて持つと、
 * ページ本文（営業時間・住所）とここの2箇所に同じ事実が並んで必ず食い違うため。
 */
export type DemoBiz = {
  /** /demo/<slug>/ の slug */
  slug: string;
  /** schema.org の型（Restaurant / HairSalon / MedicalClinic など） */
  schemaType: string;
  name: string;
  description: string;
  telephone?: string;
  /** 架空の住所（番地まで含む1行） */
  streetAddress?: string;
  /** schema.org 形式の営業時間。例: "Tu-Su 09:00-19:00" */
  openingHours?: string[];
  priceRange?: string;
  servesCuisine?: string;
};

const SITE = "https://santaworks.net";

/**
 * デモの OGP / Twitter カード。各 layout.tsx の metadata にスプレッドして使う。
 *
 * これが無いと、ルートの metadata（Santa Works のOGP画像）をそのまま継承してしまい、
 * デモのURLをLINEやXに貼っても「Santa Works」のカードしか出ない。
 */
export function demoOg(
  biz: DemoBiz,
  title: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const url = `${SITE}/demo/${biz.slug}/`;
  const image = `${SITE}/demo/${biz.slug}/og.jpg`;
  const alt = `${biz.name}（架空店舗のデザインサンプル）`;
  return {
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url,
      siteName: "Santa Works",
      title,
      description: biz.description,
      images: [{ url: image, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: biz.description,
      images: [image],
    },
  };
}

/** schema.org の構造化データ本体。値が無い項目は出力しない（空欄を捏造しない）。 */
export function demoSchema(biz: DemoBiz) {
  return {
    "@context": "https://schema.org",
    "@type": biz.schemaType,
    name: biz.name,
    description: biz.description,
    // 架空であることを、人間向けの注記だけでなく機械側にも明示しておく
    disambiguatingDescription:
      "これは実在しない架空の事業所です。Santa Works が制作したWebデザインサンプルの一部で、住所・電話番号・営業時間はすべて架空です。",
    url: `${SITE}/demo/${biz.slug}/`,
    image: `${SITE}/demo/${biz.slug}/og.jpg`,
    ...(biz.telephone ? { telephone: biz.telephone } : {}),
    ...(biz.streetAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: biz.streetAddress,
            addressCountry: "JP",
          },
        }
      : {}),
    ...(biz.openingHours ? { openingHours: biz.openingHours } : {}),
    ...(biz.priceRange ? { priceRange: biz.priceRange } : {}),
    ...(biz.servesCuisine ? { servesCuisine: biz.servesCuisine } : {}),
  };
}
