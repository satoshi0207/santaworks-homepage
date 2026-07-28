import Link from "next/link";

/**
 * SNSの常設リンク。**ヘッダーではなくフッターに置く**——上部に置くと、
 * 読みに来た人を読む前に外へ逃がす導線になる。
 *
 * 宛先は各SNSの実URL。短縮パス（santaworks.net/x など・`worker.js`）は
 * **逆向き＝SNSのプロフィール欄からサイトへ**呼び込むためのもので、
 * ここで使うとトップページに出戻りしてしまう。取り違えないこと。
 *
 * クリックの計測は GA4 の拡張計測（離脱クリック）が自動で拾うので、
 * UTMもonClickも足さない。面を増やすときはこの配列に1行足すだけ。
 *
 * **X だけなのは意図的**（2026-07-28）。
 * - YouTube：チャンネルは開設済みだが公開2本。送っても行った先で止まるので載せない。
 *   **本数が増えて「見て回れる」状態になってから**足す。名義がポケメモである点は障害にならない
 *   （訪問者にとっては同じ人の発信）。
 * - note：短縮パス `/note` は worker.js に用意してあるが、アカウントの実体が未確認。
 * リンクは「置けるから置く」ものではない。**行った先に居場所があるか**で決める。
 */
const SOCIALS = [
  {
    name: "X",
    href: "https://x.com/santaworksw99",
    // X のロゴ（公式マーク・単色）。外部リクエストを増やさないようインラインSVG。
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-9 text-[0.8rem] text-muted sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="フッター">
          <Link href="/privacy/" className="transition-colors hover:text-accent">
            プライバシーポリシー
          </Link>
          <Link href="/legal/" className="transition-colors hover:text-accent">
            特定商取引法に基づく表記
          </Link>
        </nav>
        <span>「忘れたくない」を、かたちに。</span>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div>© 2026 Santa Works ／ 山田 悟司</div>
        <ul className="flex items-center gap-x-4" aria-label="SNS">
          {SOCIALS.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                // rel="me" は「このサイトの持ち主＝このアカウント」の宣言（IndieWeb/Mastodon等が読む）。
                rel="me noopener noreferrer"
                aria-label={`${s.name}（新しいタブで開きます）`}
                className="block text-muted transition-colors hover:text-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={s.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
