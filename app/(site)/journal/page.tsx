import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { Reveal } from "@/components/motion";
import JournalList from "./JournalList";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Santa Works のジャーナル。つくっているもののこと、公開データから考えたこと、会社員との両立や家族のこと。ジャンルは決めずに書いています。",
  alternates: { canonical: "/journal/" },
  openGraph: {
    title: "Journal｜Santa Works",
    description:
      "つくっているもののこと、公開データから考えたこと、会社員との両立や家族のこと。",
    url: "/journal/",
  },
};

export default function Journal() {
  return (
    <div className="pt-16">
      <section className="px-6 py-20 sm:px-10 md:py-28">
        <Reveal plain className="mx-auto max-w-3xl">
          <SectionLabel>Journal</SectionLabel>
          <h1 className="mb-4 text-[clamp(1.6rem,3.8vw,2.4rem)] font-extrabold">
            ジャーナル
          </h1>
          <p className="mb-12 max-w-2xl leading-relaxed text-muted">
            つくっているもののこと、公開データから考えたこと、会社員との両立や家族のこと。
            <br className="hidden sm:block" />
            ジャンルは決めずに、そのときに書きたいことを書いています。
          </p>

          <JournalList />
        </Reveal>
      </section>
    </div>
  );
}
