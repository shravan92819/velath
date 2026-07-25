"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const chapters = [
  {
    label: "The Early Struggles",
    icon: "🌱",
    body: [
      "On 6th June 1975, a young Velath Prabhakaran stepped onto UAE soil — a moment that would define the rest of his life. He arrived with limited resources but limitless determination, facing financial hardships, an unfamiliar environment, and the demanding realities of building a future from scratch.",
      "Rather than allowing these obstacles to define his path, he viewed every challenge as an opportunity to learn, grow, and improve. Through dedication, discipline, and an unwavering work ethic, he steadily earned the trust and respect of those around him.",
    ],
  },
  {
    label: "Building a Dream in the UAE",
    icon: "🏗️",
    body: [
      "Driven by ambition and a clear vision, Velath Prabhakaran moved to the United Arab Emirates in search of greater opportunities. The journey was far from easy, requiring countless hours of hard work, continuous learning, and the courage to take calculated risks.",
      "With a decade of hard-earned experience since his arrival in 1975, and an uncompromising commitment to quality, he laid the foundation for Velath Engineering Works in 1985. What began as a modest venture gradually evolved into a trusted engineering company known for delivering reliable solutions, maintaining high standards, and fostering lasting client relationships.",
    ],
  },
  {
    label: "Leading with Vision",
    icon: "🔭",
    body: [
      "Today, Velath Prabhakaran stands at the helm of Velath Engineering International FZC, leading the company with the same values that shaped his journey — integrity, innovation, quality, and customer satisfaction. Under his leadership, the company has earned a reputation for excellence and continues to contribute to the engineering and industrial sectors across the UAE.",
      "Despite his success, he remains grounded, believing that every achievement is the result of persistence, teamwork, and a commitment to continuous improvement.",
    ],
  },
  {
    label: "An Inspiration for Future Entrepreneurs",
    icon: "✨",
    body: [
      "The story of Velath Prabhakaran serves as an inspiration to aspiring entrepreneurs everywhere. His journey demonstrates that success is not determined by where you begin, but by your willingness to persevere through challenges, embrace opportunities, and remain focused on your goals.",
      "From his arrival on 6th June 1975 to leading one of the UAE's respected engineering companies, his legacy reflects the values of resilience, dedication, and visionary leadership. His story continues to inspire future generations to dream boldly, work tirelessly, and believe that determination can transform even the most modest beginnings into remarkable success.",
    ],
  },
];

export default function Blog() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("velath:openBlog", onOpen);
    return () => window.removeEventListener("velath:openBlog", onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] bg-[#060d18]/95 backdrop-blur-xl overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close blog"
            className="fixed top-5 right-5 z-[210] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto px-6 py-20"
          >
            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-amber-500 font-heading font-semibold tracking-[0.25em] uppercase text-xs mb-4">
                The Journey
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                From Humble Beginnings to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                  Industry Leadership
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Success is rarely achieved overnight. Behind every successful entrepreneur lies
                a story of determination, resilience, and unwavering commitment.
              </p>
            </div>

            {/* Featured image + pull quote */}
            <div className="relative rounded-3xl overflow-hidden mb-16 aspect-[16/7]">
              <Image
                src="/prabhakaran-tour.jpg"
                alt="Velath Prabhakaran — the journey"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <p className="font-heading text-amber-400/50 text-6xl leading-none select-none mb-2">&ldquo;</p>
                <p className="text-white text-lg lg:text-2xl font-heading font-semibold leading-snug max-w-2xl">
                  Success is not determined by where you begin, but by your willingness
                  to persevere through challenges and remain focused on your goals.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-8 h-px bg-amber-400" />
                  <p className="text-amber-400 text-sm font-heading font-semibold tracking-wide">
                    Velath Prabhakaran
                  </p>
                </div>
              </div>
            </div>

            {/* Chapters */}
            <div className="space-y-12">
              {chapters.map((chapter, i) => (
                <div key={chapter.label} className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">
                  <div className="flex lg:flex-col items-start gap-3 lg:pt-1">
                    <span className="text-2xl">{chapter.icon}</span>
                    <div>
                      <span className="inline-block text-xs font-heading font-bold tracking-[0.2em] uppercase text-amber-400 mb-1">
                        Chapter {i + 1}
                      </span>
                      <h3 className="font-heading text-base font-bold text-white leading-snug">
                        {chapter.label}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-4 text-gray-400 leading-relaxed border-l border-white/10 pl-6 lg:pl-10">
                    {chapter.body.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              {[
                { value: "1975", label: "Arrived in UAE" },
                { value: "1985", label: "Velath Engineering Founded" },
                { value: "20+", label: "Countries Touched" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl px-6 py-8 text-center">
                  <p className="font-heading text-4xl font-extrabold text-amber-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-heading">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
