import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Santa Works へのお問い合わせ。開発のご相談・お見積もりなど、お気軽にどうぞ。",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact｜Santa Works",
    description:
      "Santa Works へのお問い合わせ。開発のご相談・お見積もりなど、お気軽にどうぞ。",
    url: "/contact/",
  },
};

// ご相談の流れ（申し込み前の不安を減らすための道筋）
const steps: { t: string; d: string }[] = [
  { t: "お問い合わせ", d: "まずは下のフォームからご連絡ください。" },
  { t: "ヒアリング", d: "やりたいこと・お困りごとを伺います。（無料）" },
  { t: "ご提案・お見積り", d: "内容と概算をご提示します。（無料）" },
  { t: "制作・開発", d: "進捗を共有しながら、かたちにしていきます。" },
  { t: "納品・公開", d: "公開後の運用や改善のご相談もどうぞ。" },
];

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mb-6 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            お問い合わせ
          </h1>
          <p className="jp-flow max-w-2xl text-muted">
            開発のご相談・お見積もりなど、お気軽にどうぞ。
            <br />
            2〜3日以内を目安にお返事します。
          </p>

          {/* ご相談の流れ */}
          <h2 className="mb-5 mt-14 text-lg font-extrabold">ご相談の流れ</h2>
          <ol className="max-w-2xl space-y-4">
            {steps.map((s, i) => (
              <li key={s.t} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[0.9rem] font-bold text-accent"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[1rem] font-bold">{s.t}</h3>
                  <p className="jp-flow text-[0.9rem] text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* 料金について */}
          <div className="mt-10 max-w-2xl rounded-md border border-line bg-surface p-6 shadow-card">
            <h2 className="mb-2 text-lg font-extrabold">料金について</h2>
            <p className="jp-flow text-[0.92rem] leading-relaxed text-muted">
              ご依頼の内容・規模に応じて、都度お見積もりします。お見積もり・初回のご相談は
              <strong className="font-bold text-accent">無料</strong>
              です。まずは「こんなことできる？」だけでも、お気軽にどうぞ。
            </p>
          </div>

          {/* お問い合わせフォーム */}
          <h2 className="mb-5 mt-14 text-lg font-extrabold">
            お問い合わせフォーム
          </h2>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
