"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "./data";

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="sy-nav" aria-label="サイト内メニュー">
      <ul>
        {NAV.map(([href, label]) => (
          <li key={href}>
            <Link href={href} aria-current={path === href ? "page" : undefined}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
