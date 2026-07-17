"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  ["/demo/factory/", "ホーム"],
  ["/demo/factory/about/", "会社概要"],
  ["/demo/factory/service/", "事業内容"],
  ["/demo/factory/recruit/", "採用情報"],
  ["/demo/factory/contact/", "お問い合わせ"],
] as const;

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="t-nav" aria-label="サイト内メニュー">
      <ul>
        {items.map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={path === href ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
