"use client";

import { useEffect } from "react";

/**
 * ヒーローの壁をポインタに ±22px（縦±14px）追従させる。lerp 0.055。
 * 描画はCSSに任せ、JSはこの視差だけ（性能予算 30KB gzip の内訳はほぼゼロ）。
 * reduced-motion 時は何もしない。
 */
export default function HeroParallax() {
  useEffect(() => {
    const wall = document.getElementById("hf-wall");
    if (!wall || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const loop = () => {
      x += (tx - x) * 0.055;
      y += (ty - y) * 0.055;
      wall.style.transform = `translate(${x}px, ${y}px)`;
      raf =
        Math.abs(tx - x) + Math.abs(ty - y) > 0.1
          ? requestAnimationFrame(loop)
          : 0;
    };
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / innerWidth - 0.5) * 44;
      ty = (e.clientY / innerHeight - 0.5) * 28;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    addEventListener("pointermove", onMove);
    return () => {
      removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
