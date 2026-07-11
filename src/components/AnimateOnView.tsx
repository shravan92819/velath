"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export default function AnimateOnView({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.65,
}: Props) {
  const initial =
    direction === "up"    ? { opacity: 0, y: 48 } :
    direction === "left"  ? { opacity: 0, x: -48 } :
    direction === "right" ? { opacity: 0, x: 48 } :
                            { opacity: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
