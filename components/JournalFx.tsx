"use client";

import { useEffect } from "react";

/**
 * Journal 記事のスクロール演出。
 * - 上部のスクロール進捗バー
 * - 図版の「ふわぁ」リビール（.rv → .in）
 * - グラフのバーが 0 から伸び、数字がバーに連動してカウントアップ（小数対応・時間差）
 * reduced-motion 時はアニメーションせず最終値を即表示。
 * ドラフト（Artifact）の挙動をそのまま移植。
 */
export default function JournalFx() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".journal");
    if (!root) return;
    const prog = root.querySelector<HTMLElement>(".jprog");
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      if (!prog) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 数字を 0 → 目標値へカウントアップ（小数対応）
    const countUp = (
      el: HTMLElement,
      to: number,
      dur: number,
      delay: number,
      decimals: number,
      suffix: string,
    ) => {
      if (reduced) {
        el.textContent = to.toFixed(decimals) + suffix;
        return;
      }
      let begin: number | null = null;
      const step = (ts: number) => {
        if (begin === null) begin = ts + delay;
        const p = Math.min(Math.max((ts - begin) / dur, 0), 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (eased * to).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    root.querySelectorAll(".rv").forEach((el) => io.observe(el));

    const bio = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (!e.isIntersecting) return;
          const fig = e.target as HTMLElement;
          fig
            .querySelectorAll<HTMLElement>(".fl, .sp .tk i")
            .forEach((b) => (b.style.width = "0"));

          // split 図（数字はカウントアップ・小数は data-decimals 指定）
          const caps: {
            p: HTMLElement;
            bar: HTMLElement;
            to: number;
            i: number;
            dec: number;
          }[] = [];
          fig.querySelectorAll<HTMLElement>(".split .sp").forEach((sp, i) => {
            const p = sp.querySelector<HTMLElement>(".p");
            const bar = sp.querySelector<HTMLElement>(".tk i");
            if (!p || !bar) return;
            const to =
              parseFloat(p.getAttribute("data-to") || p.textContent || "0") || 0;
            const dec = parseInt(p.getAttribute("data-decimals") || "0", 10);
            if (!reduced) p.textContent = (0).toFixed(dec) + "%";
            caps.push({ p, bar, to, i, dec });
          });
          // チャート図の数字は 0 から
          // 単位は既定 "%"。日数など別単位の図は .vl に data-suffix を付ける
          if (!reduced)
            fig
              .querySelectorAll<HTMLElement>(".chart .vl")
              .forEach(
                (v) =>
                  (v.textContent =
                    "0.0" + (v.getAttribute("data-suffix") ?? "%")),
              );

          void fig.offsetWidth;
          requestAnimationFrame(() => {
            // チャート：バー＋数字（1桁小数）を上から時間差で立ち上げる
            fig.querySelectorAll<HTMLElement>(".chart .row").forEach((row, i) => {
              const fl = row.querySelector<HTMLElement>(".fl");
              const vl = row.querySelector<HTMLElement>(".vl");
              const delay = i * 130;
              if (fl) {
                fl.style.transitionDelay = delay + "ms";
                fl.style.width = fl.getAttribute("data-w")
                  ? fl.getAttribute("data-w") + "%"
                  : getComputedStyle(fl).getPropertyValue("--w");
              }
              if (vl)
                countUp(
                  vl,
                  parseFloat(vl.getAttribute("data-to") || "0") || 0,
                  1050,
                  delay,
                  1,
                  vl.getAttribute("data-suffix") ?? "%",
                );
            });
            // チャート外の .fl（保険）
            fig.querySelectorAll<HTMLElement>(".fl").forEach((b) => {
              if (b.closest(".row")) return;
              b.style.width = b.getAttribute("data-w")
                ? b.getAttribute("data-w") + "%"
                : getComputedStyle(b).getPropertyValue("--w");
            });
            // split：数字＋バー
            caps.forEach((c) => {
              const delay = c.i * 200;
              c.bar.style.transitionDelay = delay + "ms";
              c.bar.style.width = c.to + "%";
              countUp(c.p, c.to, 1050, delay, c.dec, "%");
            });
          });
          bio.unobserve(fig);
        });
      },
      { threshold: 0.25 },
    );
    root.querySelectorAll("figure").forEach((f) => bio.observe(f));

    return () => {
      document.removeEventListener("scroll", onScroll);
      io.disconnect();
      bio.disconnect();
    };
  }, []);

  return <div className="jprog" aria-hidden="true" />;
}
