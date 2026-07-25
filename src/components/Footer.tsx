"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030810] text-white py-14 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-xl p-1.5 shadow-lg shadow-black/20 flex-shrink-0">
              <Image
                src="/velath-logo.png"
                alt="Velath logo"
                width={36}
                height={36}
                className="rounded-md w-9 h-9"
              />
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-heading font-extrabold text-xl"
              >
                <span className="text-amber-400">V</span>elath Prabhakaran
              </motion.p>
              <p className="text-gray-600 text-sm mt-1">
                Managing Director — Velath Engineering International FZC
              </p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors duration-200 font-heading"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-gray-700 text-xs font-heading">
            &copy; {year} Velath Engineering International FZC
          </p>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-700 text-xs font-heading tracking-wide">
            Sharjah, United Arab Emirates &nbsp;&bull;&nbsp; Velur, Thrissur, Kerala, India
          </p>
          <p className="text-gray-700 text-xs">
            In UAE since 1975 · Est. 1985 · Oil &amp; Gas · Pressure Vessels · Boilers · Heat Exchangers
          </p>
        </div>
      </div>
    </footer>
  );
}
