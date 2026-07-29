import { demoSchema, type DemoBiz } from "./demoMeta";

/**
 * 構造化データ（JSON-LD）。
 *
 * ⚠️ デモは robots: noindex なので、これが検索結果に効くことはない。
 *    ここに置いているのは「実装できる」ことを示す参照実装であり、
 *    実案件ではこれをそのまま実データに差し替えて使う。
 */
export default function DemoJsonLd({ biz }: { biz: DemoBiz }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify したオブジェクトのみを埋め込む（ユーザー入力は通さない）
      dangerouslySetInnerHTML={{ __html: JSON.stringify(demoSchema(biz)) }}
    />
  );
}
