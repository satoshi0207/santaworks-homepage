import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "Santa Works（サンタワークス）のプライバシーポリシー（個人情報の取扱いに関する方針）。",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "プライバシーポリシー｜Santa Works",
    description:
      "Santa Works のプライバシーポリシー（個人情報の取扱いに関する方針）。",
    url: "/privacy/",
  },
};

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: "1. 事業者情報",
    body: (
      <ul className="space-y-1">
        <li>事業者名：山田 悟司（屋号：Santa Works）</li>
        <li>
          連絡先：
          <Link href="/contact/" className="font-bold text-accent hover:text-accent-strong">
            お問い合わせフォーム
          </Link>
        </li>
        <li className="text-[0.9rem]">
          ※ 住所・電話番号は、ご請求があれば遅滞なく開示いたします。
        </li>
      </ul>
    ),
  },
  {
    h: "2. 取得する個人情報",
    body: (
      <p>
        お問い合わせフォームからご送信いただいた、お名前・メールアドレス・お問い合わせ内容などの情報を取得します。
      </p>
    ),
  },
  {
    h: "3. 利用目的",
    body: (
      <>
        <p>取得した個人情報は、次の目的の範囲でのみ利用します。</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>お問い合わせへの回答・ご連絡のため</li>
          <li>お見積り・ご提案・契約の締結および履行のため</li>
          <li>上記に付随する業務のため</li>
        </ul>
      </>
    ),
  },
  {
    h: "4. 第三者への提供",
    body: (
      <p>
        法令に基づく場合などを除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することはありません。
      </p>
    ),
  },
  {
    h: "5. 外部サービスの利用",
    body: (
      <>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            お問い合わせフォームは Formspree（Formspree,
            Inc.／米国）を利用しています。送信された内容は同社のサーバーを経由して当方に届き、同社における取扱いは同社のプライバシーポリシーに従います。
          </li>
          <li>本サイトのホスティングには Cloudflare を利用しています。</li>
        </ul>
        <p className="mt-2 text-[0.9rem]">
          これらのサービスの利用に伴い、情報が国外のサーバーで処理される場合があります。
        </p>
      </>
    ),
  },
  {
    h: "6. Cookie・アクセス解析",
    body: (
      <p>
        現在、本サイトではアクセス解析やCookieによる個人の追跡は行っていません。今後導入する場合は、本ポリシーを更新のうえお知らせします。
      </p>
    ),
  },
  {
    h: "7. 安全管理",
    body: (
      <p>
        取得した個人情報について、漏えい・滅失・毀損の防止その他の安全管理のために、必要かつ適切な措置を講じます。
      </p>
    ),
  },
  {
    h: "8. 開示・訂正・削除等のご請求",
    body: (
      <p>
        ご自身の個人情報の開示・訂正・利用停止・削除などをご希望の場合は、お問い合わせフォームよりご連絡ください。ご本人であることを確認のうえ、遅滞なく対応いたします。
      </p>
    ),
  },
  {
    h: "9. 改定について",
    body: (
      <p>
        本ポリシーの内容は、法令の変更や事業内容の変更などに応じて改定することがあります。改定後の内容は、本ページに掲載した時点から効力を生じます。
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="pt-16">
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-3xl">
          <SectionLabel>Privacy</SectionLabel>
          <h1 className="mb-4 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            プライバシーポリシー
          </h1>
          <p className="mb-10 text-[0.95rem] text-muted">
            Santa Works（以下「当方」）は、お客様の個人情報を適切に取り扱うため、以下のとおりプライバシーポリシー（個人情報の取扱いに関する方針）を定めます。
          </p>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="mb-2 text-[1.05rem] font-bold">{s.h}</h2>
                <div className="text-[0.95rem] leading-[1.9] text-muted">
                  {s.body}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-line pt-6 text-[0.85rem] text-muted">
            制定日：2026年7月18日
          </p>
          <Link
            href="/legal/"
            className="mt-6 inline-block text-[0.9rem] font-bold text-accent transition-colors hover:text-accent-strong"
          >
            特定商取引法に基づく表記 →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
