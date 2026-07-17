import Link from "next/link";

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
      <div className="mt-4">© 2026 Santa Works ／ 山田 悟司</div>
    </footer>
  );
}
