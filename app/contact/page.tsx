import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Santa Works へのお問い合わせ。開発のご相談・お見積もりなど、お気軽にどうぞ。",
};

export default function Contact() {
  return (
    <div className="pt-16">
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal className="mx-auto max-w-5xl">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mb-6 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            お問い合わせ
          </h1>
          <p className="max-w-2xl text-muted">
            開発のご相談・お見積もりなど、お気軽にどうぞ。
            <br />
            2〜3日以内を目安にお返事します。
          </p>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
