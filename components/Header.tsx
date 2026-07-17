"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about/", label: "About" },
  { href: "/works/", label: "Works" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ページ遷移したらメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-20 flex items-center justify-between border-b border-line/60 bg-bg/80 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-[1.05rem] font-extrabold tracking-wide text-ink"
        >
          Santa Works<span className="text-accent">.</span>
        </Link>
        <nav aria-label="メイン" className="hidden gap-8 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.82rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative z-20 h-10 w-10 p-2 sm:hidden"
        >
          <span
            className={`my-[5px] block h-0.5 rounded bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`my-[5px] block h-0.5 rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`my-[5px] block h-0.5 rounded bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </header>

      {/* モバイル全画面メニュー。Safariはopacity:0でもbackdrop-filterを描画するためvisibilityで完全に消す */}
      <div
        className={`fixed inset-0 z-10 grid place-items-center bg-bg/95 backdrop-blur-lg transition-[opacity,visibility] duration-300 sm:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="grid gap-8 text-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xl font-bold tracking-[0.12em] text-ink transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
