"use client";

import { useEffect } from "react";

/**
 * Journal 記事のスクロール演出。
 * - 上部のスクロール進捗バー
 * - 図版の「ふわぁ」リビール（.rv → .in）
 * - グラフのバーが 0 から伸び、数字がバーに連動してカウントアップ（小数対応・時間差）
 * reduced-motion 時はアニメーションせず最終値を即表示。
 *
 * ## 2つの系統がある（2026-08-02）
 *
 * **① 旧：クラス名で拾う**（`.chart .row` の `.fl`＋`.vl` と `.split .sp`）。
 * gourmet-site-dependency と summer-50years だけが使っている。**触っていない。**
 *
 * **② 新：属性で宣言する**（`data-grow` / `data-pop` / `data-count`）。
 * 167-children 以降は図版を `figures.tsx` の自前SVGと dash 層の div に変えたので、
 * ①のクラス名から外れて演出が効かなくなっていた。**クラス名に依存するのをやめた。**
 * HTML の div でも SVG の circle / rect でも、属性さえ付いていれば同じ処理で動く。
 *
 * 🔴 **②は幅ではなく transform を動かす。**`width` を毎フレーム変えるとレイアウトが
 * 走る。図④は51行×2区間＝102本あるので、そのままだと古い端末で落ちる。
 * `scaleX()` なら合成だけで済む（レイアウトもペイントも起きない）。
 * 🔴 **カウントアップは rAF を1本だけ回す。**要素ごとに立てない。
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

    // ── ② 属性で宣言する系統 ───────────────────────────────
    // rAF は**1本だけ**。動く数字が無くなったらループごと止める（常時コストを残さない）。
    type Ctr = { node: Text | HTMLElement; to: number; dec: number; sfx: string; t0: number };
    const ctrs: Ctr[] = [];
    let raf = 0;

    const put = (c: Ctr, v: number) => {
      const s = v.toFixed(c.dec) + c.sfx;
      if (c.node.nodeType === 3) c.node.textContent = s;
      else (c.node as HTMLElement).textContent = s;
    };

    const loop = (ts: number) => {
      for (let i = ctrs.length - 1; i >= 0; i--) {
        const c = ctrs[i];
        const p = Math.min(Math.max((ts - c.t0) / 1050, 0), 1);
        put(c, (1 - Math.pow(1 - p, 3)) * c.to);
        if (p >= 1) ctrs.splice(i, 1);
      }
      raf = ctrs.length ? requestAnimationFrame(loop) : 0;
    };

    /** 数字は「最初のテキストノード」だけ見る（`21.9<small>%</small>` の % を残すため） */
    const textNodeOf = (el: HTMLElement) => {
      for (const n of Array.from(el.childNodes))
        if (n.nodeType === 3 && n.textContent?.trim()) return n as Text;
      return null;
    };

    // 51行あっても全体が伸び切るまで 1.7 秒で終わるように、遅延に上限を置く
    const MAXD = 700;
    const delayOf = (i: number, step: number) => Math.min(i * step, MAXD);

    /**
     * 🔴 **要素ごとに属性を書かない**（2026-08-02）。
     * 最初 `data-grow` / `data-pop` / `data-count` を1要素ずつ付けたら、
     * ドット100個＋点102個＋数字73個で **HTMLが 17KB 増えた**。
     * → 目印は**箱に1つ**（`data-fx`）。中の `i`（棒・ドット）と `circle`（点）と
     *   `.n`（数字）を、箱の側から拾う。**マークアップは1バイトも増えない。**
     * 目標値は表示テキストから読む。属性に書き写さないので、**数字が二重に持たれない。**
     */
    const play = (box: HTMLElement) => {
      const seq = parseInt(box.getAttribute("data-seq") || "", 10) || 34;

      // 棒とドットと点。CSS が初期値（scale 0）と transition を持ち、
      // ここで書くのは遅延と最終値の2つ、**1要素につき1回きり**。
      // `rect` を足した（2026-08-02）。SVG の棒グラフを動かすため。
      // ✅ 既存の `data-fx` 箱に `<rect>` は1つも無いことを確認済み＝他の記事は変わらない。
      box.querySelectorAll<HTMLElement>("i, circle, rect").forEach((el, i) => {
        if (!reduced) el.style.transitionDelay = delayOf(i, seq) + "ms";
        el.style.transform = "none";
      });

      // 🔴 **数えるのは名乗った箱だけ**（`data-num`）。textContent を毎フレーム書き換えると、
      //    幅が変わらなくてもレイアウトが走る。図④は数字が51個あって、
      //    ここを全部数えると**レイアウト時間が 7ms → 107ms に跳ねた**（実測して外した）。
      //    51個の小さい数字が一斉に回っても読めないので、図④は棒だけ動かす。
      if (!box.hasAttribute("data-num")) return;

      const now = performance.now();
      box.querySelectorAll<HTMLElement>(".n").forEach((el, i) => {
        const node = textNodeOf(el);
        if (!node) return;
        const m = /^\s*(-?[\d.]+)(.*)$/.exec(node.textContent || "");
        if (!m) return;
        const dot = m[1].indexOf(".");
        const c: Ctr = {
          node,
          to: parseFloat(m[1]),
          dec: dot < 0 ? 0 : m[1].length - dot - 1,
          sfx: m[2],
          t0: now + delayOf(i, seq),
        };
        if (reduced) return; // 表示は最終値のまま。何もしない
        put(c, 0);
        ctrs.push(c);
      });
      if (ctrs.length && !raf) raf = requestAnimationFrame(loop);
    };

    const fio = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (!e.isIntersecting) return;
          play(e.target as HTMLElement);
          fio.unobserve(e.target); // 一度動いたら見張らない
        });
      },
      { threshold: 0.2 },
    );
    // 図の外にある KPI タイルも拾えるよう、figure ではなく「中身を持つ箱」で観測する
    root
      .querySelectorAll<HTMLElement>("[data-fx]")
      .forEach((el) => fio.observe(el));

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
      fio.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="jprog" aria-hidden="true" />;
}
