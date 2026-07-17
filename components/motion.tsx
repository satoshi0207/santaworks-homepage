"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 0.8, 0.3, 1] as const;
const HIDDEN = { opacity: 0, y: 28, filter: "blur(9px)" };
const SHOWN = { opacity: 1, y: 0, filter: "blur(0px)" };

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** ページ読み込み時に「ふわぁ」と現れる（ヒーロー用） */
export function FadeIn({ children, delay = 0, className }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : HIDDEN}
      animate={SHOWN}
      transition={{ duration: 1.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** スクロールで画面に入ったときに「ふわぁ」と現れる（セクション用） */
export function Reveal({ children, delay = 0, className }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : HIDDEN}
      whileInView={SHOWN}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
