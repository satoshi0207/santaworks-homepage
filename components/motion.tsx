"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** blur演出を外して軽くする（画像グリッド等の重い領域向け） */
  plain?: boolean;
};

/**
 * ページ読み込み時に「ふわぁ」と現れる（ヒーロー用）。
 * framer-motionを廃し、CSSアニメ（globals.css の sw-fade-in）だけで実現。
 */
export function FadeIn({ children, delay = 0, className = "" }: Props) {
  return (
    <div
      className={`sw-fadein ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

/**
 * スクロールで画面に入ったときに「ふわぁ」と現れる（セクション用）。
 * 軽量なIntersectionObserverで .is-visible を付けるだけ（旧framer-motionの
 * whileInViewを置換）。JSはこのわずかな処理のみで、依存ライブラリなし。
 */
export function Reveal({ children, delay = 0, className = "", plain = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    // 画面内なら即表示に倒す（縦に長い要素だと threshold で発火せず不可視になるため、
    // 「少しでも入ったら／少し手前で」発火。rootMarginで下端の手前でトリガー）
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sw-reveal${plain ? " sw-plain" : ""}${shown ? " is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
