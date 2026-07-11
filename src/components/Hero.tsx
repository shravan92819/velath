"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "./Counter";

const words = ["Velath", "Prabhakaran"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060d18] grain">
      {/* ── Aurora blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] -top-64 -left-48 rounded-full bg-blue-700/20 blur-[120px] animate-blob" />
        <div className="absolute w-[600px] h-[600px] top-1/2 -right-32 rounded-full bg-amber-500/15 blur-[120px] animate-blob delay-2000" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 left-1/3 rounded-full bg-violet-700/15 blur-[120px] animate-blob delay-4000" />
      </div>

      {/* ── Dot-grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center w-full">
        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-xs font-semibold tracking-[0.2em] uppercase font-heading">
              Managing Director
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] tracking-tight mb-6 overflow-hidden">
            {words.map((word, wi) => (
              <span key={word} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.25 + wi * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {wi === 0 ? (
                    word
                  ) : (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 animate-shimmer">
                      {word}
                    </span>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Company + description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <p className="text-lg text-gray-300 font-medium mb-3">
              Velath Engineering International FZC
            </p>
            <p className="text-gray-500 max-w-lg leading-relaxed mb-10">
              I am a visionary industrialist driving excellence in heavy process engineering
              across the UAE and the Middle East — championing precision-built solutions
              for the oil &amp; gas and process industries.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-amber-400 text-[#060d18] font-heading font-bold text-sm tracking-wide uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
            >
              <span className="relative z-10">Discover More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white hover:border-amber-400/60 hover:text-amber-300 font-heading font-semibold text-sm tracking-wide uppercase transition-all duration-300"
            >
              Contact
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="grid grid-cols-3 gap-6 max-w-xs"
          >
            {[
              { value: 30, suffix: "+", label: "Years" },
              { value: 3, suffix: " UAE", prefix: "", label: "Locations" },
              { value: 100, suffix: "%", label: "Client Focus" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-extrabold text-amber-400">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Rotating gradient ring */}
            <div className="absolute -inset-[3px] rounded-[2rem] overflow-hidden">
              <div
                className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #f59e0b, #3b82f6, #8b5cf6, #ec4899, #f59e0b)",
                }}
              />
            </div>

            {/* Photo */}
            <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-[22rem] lg:h-[28rem] rounded-[2rem] overflow-hidden bg-[#0f1a2e]">
              <Image
                src="/prabhakaran.jpg"
                alt="Velath Prabhakaran – Managing Director, Velath Engineering International FZC"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 352px"
              />
              {/* Gradient fade at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#060d18]/80 to-transparent" />
            </div>

            {/* Floating badge — Sharjah */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-6 glass rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-amber-400 text-xs font-heading font-bold uppercase tracking-widest">
                Sharjah, UAE
              </p>
              <p className="text-white/70 text-xs mt-0.5">Headquarters</p>
            </motion.div>

            {/* Floating badge — industry */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-5 -right-6 glass rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-white/70 text-xs">Core Sector</p>
              <p className="text-amber-400 text-xs font-heading font-bold mt-0.5">Oil &amp; Gas</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs font-heading uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
