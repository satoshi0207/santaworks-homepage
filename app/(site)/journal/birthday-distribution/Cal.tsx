"use client";

import { useState, type PointerEvent, type ReactNode } from "react";

/** ヒートマップの読み取り欄。
 *
 * ⚠️ **`title` 属性だけでは足りない。**ネイティブのツールチップは1秒ほど静止しないと
 * 出ないうえ、**タッチ端末では出ない**。「マスに触れると人数が出ます」と書いた以上、
 * スマホでも出ないと figcaption が嘘になる。
 *
 * 浮かせるツールチップにはしない。マスは1辺20px前後しかないので、指やカーソルで
 * 隠れるうえ、365個ぶんの当たり判定と位置計算が要る。**図の下の決まった場所に出す。**
 * 高さを固定してあるので、出ても消えても本文が動かない。
 */
export default function Cal({ children }: { children: ReactNode }) {
  const [txt, setTxt] = useState<string | null>(null);

  // pointer 系なら、マウス・タッチ・ペンを1つの経路で拾える
  const pick = (e: PointerEvent<HTMLDivElement>) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>("[data-t]");
    setTxt(el?.dataset.t ?? null);
  };

  // ⚠️ タッチでは消さない。指を離した時点で pointerleave が飛ぶので、
  //    素直に消すと「触った瞬間に出て、離すと消える」＝読む前に消える。
  //    マウスとペンは、図から出たら消えるほうが自然なのでそのまま。
  const leave = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") setTxt(null);
  };

  return (
    <>
      <div
        className="cal"
        onPointerMove={pick}
        onPointerDown={pick}
        onPointerLeave={leave}
      >
        {children}
      </div>
      {/* aria-live は polite。365マスを撫でると読み上げが洪水になるので assertive にしない */}
      <p className="readout n" aria-live="polite">
        {txt ?? "マスに触れると、その日の平均出生数が出ます"}
      </p>
    </>
  );
}
