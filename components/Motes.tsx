"use client";

import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  r: number;
  vy: number;
  phase: number;
  twinkle: number;
  accent: boolean;
  big: boolean;
};

/**
 * 「光の粒＝記憶の欠片」がゆっくり舞い降りるヒーロー背景。
 * 親要素（position: relative）いっぱいに広がる。
 */
export default function Motes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = devicePixelRatio;
    let W = 0;
    let H = 0;
    let motes: Mote[] = [];
    let moteColor = "";
    let moteAccent = "";
    let raf = 0;

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      moteColor = cs.getPropertyValue("--mote").trim();
      moteAccent = cs.getPropertyValue("--mote-accent").trim();
    };
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      W = canvas.width = rect.width * dpr;
      H = canvas.height = rect.height * dpr;
    };
    const makeMotes = () => {
      // 密度アップ＋大小の粒でボケ感（記憶の欠片が舞い降りる空気）
      const n = Math.min(110, Math.floor(W / dpr / 13));
      motes = Array.from({ length: n }, () => {
        const big = Math.random() < 0.3;
        const r = (big ? Math.random() * 3.6 + 2.6 : Math.random() * 1.5 + 0.7) * dpr;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          r,
          vy: (Math.random() * 0.13 + 0.05) * dpr * (big ? 1.35 : 0.8),
          phase: Math.random() * Math.PI * 2,
          twinkle: Math.random() * Math.PI * 2,
          accent: Math.random() < 0.16,
          big,
        };
      });
    };
    const drawMote = (m: Mote, t: number) => {
      // 大きい粒は淡くやわらかいボケ、小さい粒はきらめく
      const base = m.big ? 0.1 : 0.4;
      const amp = m.big ? 0.14 : 0.5;
      const alpha = base + amp * (0.5 + 0.5 * Math.sin(t / 1600 + m.twinkle));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = m.accent ? moteAccent : moteColor;
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = m.r * (m.big ? 6 : 4);
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fill();
    };
    const frame = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      for (const m of motes) {
        m.y += m.vy;
        m.x += Math.sin(t / 3200 + m.phase) * 0.18 * dpr;
        if (m.y - m.r * 5 > H) {
          m.y = -m.r * 5;
          m.x = Math.random() * W;
        }
        drawMote(m, t);
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    };

    readColors();
    resize();
    makeMotes();

    const onResize = () => {
      resize();
      makeMotes();
    };
    addEventListener("resize", onResize);
    const scheme = matchMedia("(prefers-color-scheme: dark)");
    scheme.addEventListener("change", readColors);

    if (!reduced) {
      raf = requestAnimationFrame(frame);
    } else {
      for (const m of motes) drawMote(m, 0);
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", onResize);
      scheme.removeEventListener("change", readColors);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
