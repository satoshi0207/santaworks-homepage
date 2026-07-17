import Link from "next/link";

export default function PageHead({
  en,
  title,
}: {
  en: string;
  title: string;
}) {
  return (
    <>
      <div className="t-pagehead">
        <p className="en">{en}</p>
        <h1>{title}</h1>
      </div>
      <nav className="t-crumb" aria-label="パンくずリスト">
        <div className="inner">
          <Link href="/demo/factory/">ホーム</Link>
          <span aria-hidden="true">›</span>
          <span>{title}</span>
        </div>
      </nav>
    </>
  );
}
