"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface Props {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function Counter({ to, suffix = "", prefix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() =>
    spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = prefix + Math.round(v) + suffix;
    }),
  [spring, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
