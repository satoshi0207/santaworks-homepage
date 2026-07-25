import Link from "next/link";

export default function PageHead({ en, title }: { en: string; title: string }) {
  return (
    <>
      <div className="sy-pagehead">
        <div className="sy-wrap inner">
          <p className="en">{en}</p>
          <h1>{title}</h1>
        </div>
      </div>
      <nav className="sy-crumb" aria-label="パンくずリスト">
        <div className="sy-wrap inner">
          <Link href="/demo/naika/">ホーム</Link>
          <span aria-hidden="true">›</span>
          <span>{title}</span>
        </div>
      </nav>
    </>
  );
}
