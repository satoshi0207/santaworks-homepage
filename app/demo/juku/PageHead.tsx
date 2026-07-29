import Link from "next/link";

export default function PageHead({
  en,
  title,
  lead,
}: {
  en: string;
  title: string;
  lead?: string;
}) {
  return (
    <>
      <div className="as-pagehead">
        <div className="as-wrap inner">
          <p className="en as-poppins">{en}</p>
          <h1>{title}</h1>
          {lead ? <p className="lead">{lead}</p> : null}
        </div>
      </div>
      <nav className="as-crumb" aria-label="パンくずリスト">
        <div className="as-wrap inner">
          <Link href="/demo/juku/">ホーム</Link>
          <span aria-hidden="true">›</span>
          <span>{title}</span>
        </div>
      </nav>
    </>
  );
}
