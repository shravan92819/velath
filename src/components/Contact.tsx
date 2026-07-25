"use client";

import { motion } from "framer-motion";
import AnimateOnView from "./AnimateOnView";

const info = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+971 5526549",
    sub: "Call or WhatsApp",
    href: "tel:+9715526549",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Headquarters",
    value: "Sharjah, United Arab Emirates",
    sub: "Free Zone Company (FZC)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Company",
    value: "Velath Engineering International FZC",
    sub: "Capital Equipment & Engineering Services",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Region",
    value: "Middle East & South Asia",
    sub: "Oil & Gas | Industrial | Power",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: "Origin",
    value: "Velur, Thrissur, Kerala, India",
    sub: "Proud Kerala-born entrepreneur in the UAE",
  },
];

const offerings = [
  "Pressure Vessels & Boiler Enquiries",
  "Heat Exchanger Specifications",
  "EPC & Project Management",
  "Business Partnerships & Collaborations",
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateOnView className="text-center mb-16">
          <p className="text-amber-500 font-heading font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#0f1a2e] mb-5 leading-tight">
            Contact &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Presence
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Reach out to discuss engineering solutions, partnerships, or project enquiries.
          </p>
        </AnimateOnView>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <div className="space-y-4">
            {info.map((item, i) => {
              const inner = (
                <>
                  <div className="flex-shrink-0 w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-heading mb-1">
                      {item.label}
                    </p>
                    <p className="font-heading font-bold text-[#0f1a2e]">{item.value}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{item.sub}</p>
                  </div>
                </>
              );
              const cls = "bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all duration-200";
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                >
                  {"href" in item && item.href ? (
                    <a href={item.href} className={cls}>{inner}</a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA card */}
          <AnimateOnView direction="right" delay={0.15}>
            <div className="bg-[#0f1a2e] rounded-3xl p-10 text-white relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/8 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/8 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <h3 className="font-heading text-2xl font-extrabold mb-4 leading-snug">
                  Partner with Me
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                  Whether you need process equipment, an experienced project partner, or wish to
                  explore business opportunities in the UAE industrial sector — I&apos;m ready
                  to be your trusted partner through Velath Engineering International FZC.
                </p>

                <div className="space-y-3 mb-10">
                  {offerings.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-8 space-y-5">
                  <div>
                    <p className="text-amber-400 text-[10px] uppercase tracking-widest font-heading mb-2">
                      Location
                    </p>
                    <p className="font-heading font-bold text-white">Sharjah, United Arab Emirates</p>
                    <p className="text-gray-400 text-sm mt-1">
                      Strategically positioned in the UAE Free Zone for global trade access
                    </p>
                  </div>
                  <a
                    href="tel:+9715526549"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/30 transition-all duration-200 text-sm text-gray-300 hover:text-amber-400"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +971 5526549
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
