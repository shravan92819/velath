"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Blog", href: null },
  { label: "Contact", href: "#contact" },
];

function openBlog() {
  window.dispatchEvent(new CustomEvent("velath:openBlog"));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "relative text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium tracking-widest uppercase group";

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX, width: "100%" }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a1220]/90 backdrop-blur-xl shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-heading text-white font-bold text-xl tracking-wide group">
            <div className="bg-white rounded-lg p-1 shadow-md shadow-black/20 flex-shrink-0">
              <Image
                src="/velath-logo.png"
                alt="Velath logo"
                width={28}
                height={28}
                className="rounded w-7 h-7"
              />
            </div>
            <span>
              <span className="text-amber-400 group-hover:text-amber-300 transition-colors">V</span>
              elath
            </span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href} className={linkClass}>
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ) : (
                  <button onClick={openBlog} className={linkClass}>
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
                  </button>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-[#0a1220] transition-all duration-200 text-sm font-semibold tracking-wide"
              >
                Get in Touch
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-[#0a1220]/98 border-t border-white/5"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="block py-3 text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium uppercase tracking-widest"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    className="block w-full text-left py-3 text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium uppercase tracking-widest"
                    onClick={() => { setMenuOpen(false); openBlog(); }}
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>
    </>
  );
}
