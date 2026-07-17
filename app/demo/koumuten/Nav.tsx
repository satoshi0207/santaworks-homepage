"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["/demo/koumuten/", "ホーム"],
  ["/demo/koumuten/works/", "施工事例"],
  ["/demo/koumuten/about/", "私たちのこと"],
  ["/demo/koumuten/contact/", "お問い合わせ"],
] as const;

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="hd-nav" aria-label="サイト内メニュー">
      <ul>
        {items.map(([href, label]) => (
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
