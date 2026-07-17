import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "Santa Works（サンタワークス）の特定商取引法に基づく表記。",
  alternates: { canonical: "/legal/" },
  openGraph: {
    title: "特定商取引法に基づく表記｜Santa Works",
    description: "Santa Works の特定商取引法に基づく表記。",
    url: "/legal/",
  },
};

const rows: { k: string; v: React.ReactNode }[] = [
  { k: "事業者名（販売業者）", v: "山田 悟司（屋号：Santa Works）" },
  { k: "運営統括責任者", v: "山田 悟司" },
  { k: "所在地", v: "ご請求があれば遅滞なく開示いたします。" },
  { k: "電話番号", v: "ご請求があれば遅滞なく開示いたします。" },
  {
    k: "お問い合わせ",
    v: (
      <>
        <Link href="/contact/" className="font-bold text-accent hover:text-accent-strong">
          お問い合わせフォーム
        </Link>
        よりご連絡ください。
      </>
    ),
  },
  {
    k: "提供サービス",
    v: "Web制作・サイト構築、LINE Bot・業務ツール開発、AI活用支援・導入サポート、自社プロダクトの提供 など",
  },
  {
    k: "対価（料金）",
    v: "サービス内容により異なります。ご依頼内容に応じて個別にお見積りし、契約前に金額（税込）をご提示します。",
  },
  {
    k: "対価以外に必要な費用",
    v: "インターネット接続料・通信料等はお客様のご負担となります。ドメイン・サーバー等の実費が生じる場合は、事前にご案内します。",
  },
  {
    k: "お支払い方法",
    v: "クレジットカード決済、銀行振込",
  },
  {
    k: "お支払い時期",
    v: "クレジットカード決済の場合は、ご利用の各カード会社の会員規約に基づきます。銀行振込の場合は、当方が発行する請求書に記載の期日までにお支払いください。",
  },
  {
    k: "サービスの提供時期",
    v: "契約成立後、別途お打ち合わせのうえ決定します。",
  },
  {
    k: "キャンセル・返品（解約）について",
    v: "役務（サービス）の性質上、提供開始後のキャンセル・返金は原則としてお受けできません。着手前のキャンセルやその他の取扱いについては、個別契約の定めによります。",
  },
];

export default function Legal() {
  return (
    <div className="pt-16">
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mb-4 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            特定商取引法に基づく表記
          </h1>
          <p className="mb-10 text-[0.95rem] text-muted">
            所在地および電話番号は、消費者からのご請求があった場合に遅滞なく開示します。ご希望の方は、
            <Link
              href="/contact/"
              className="font-bold text-accent hover:text-accent-strong"
            >
              お問い合わせフォーム
            </Link>
            よりご連絡ください。
          </p>

          <div className="overflow-hidden rounded-lg border border-line">
            <table className="w-full border-collapse text-[0.92rem]">
              <tbody>
                {rows.map((r) => (
                  <tr key={r.k} className="border-b border-line last:border-b-0">
                    <th
                      scope="row"
                      className="w-[38%] bg-surface/60 px-4 py-4 text-left align-top font-bold sm:w-[32%] sm:px-5"
                    >
                      {r.k}
                    </th>
                    <td className="px-4 py-4 align-top leading-[1.85] text-muted sm:px-5">
                      {r.v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-12 border-t border-line pt-6 text-[0.85rem] text-muted">
            制定日：2026年7月18日
          </p>
          <Link
            href="/privacy/"
            className="mt-6 inline-block text-[0.9rem] font-bold text-accent transition-colors hover:text-accent-strong"
          >
            プライバシーポリシー →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
