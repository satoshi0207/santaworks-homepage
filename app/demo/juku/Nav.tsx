"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./data";

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="as-nav" aria-label="サイト内メニュー">
      {NAV.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          aria-current={path === href ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
