import Link from "next/link";

export default function PageHead({ title }: { title: string }) {
  return (
    <>
      <div className="sy-pagehead">
        <div className="sy-wrap inner">
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
