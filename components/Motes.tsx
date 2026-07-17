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
      const n = Math.min(50, Math.floor(W / dpr / 26));
      motes = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: (Math.random() * 1.8 + 1.2) * dpr,
        vy: (Math.random() * 0.16 + 0.06) * dpr,
        phase: Math.random() * Math.PI * 2,
        twinkle: Math.random() * Math.PI * 2,
        accent: Math.random() < 0.14,
      }));
    };
    const drawMote = (m: Mote, t: number) => {
      const alpha = 0.35 + 0.55 * (0.5 + 0.5 * Math.sin(t / 1600 + m.twinkle));
      ctx.globalAlpha = alpha;
      ctx.fillStyle = m.accent ? moteAccent : moteColor;
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = m.r * 4;
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
