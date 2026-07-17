import Link from "next/link";

export default function PageHead({ en, title }: { en: string; title: string }) {
  return (
    <>
      <div className="hd-pagehead">
        <div className="hd-wrap inner">
          <p className="en">{en}</p>
          <h1>{title}</h1>
        </div>
      </div>
      <nav className="hd-crumb" aria-label="パンくずリスト">
        <div className="hd-wrap inner">
          <Link href="/demo/koumuten/">ホーム</Link>
          <span aria-hidden="true">›</span>
          <span>{title}</span>
        </div>
      </nav>
    </>
  );
}
