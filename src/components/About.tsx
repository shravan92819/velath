"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnView from "./AnimateOnView";

const attributes = [
  { icon: "🏭", label: "Heavy Process Equipment" },
  { icon: "🌍", label: "UAE & Middle East" },
  { icon: "⚙️", label: "Oil & Gas Sector" },
  { icon: "✈️", label: "Travelled 20+ Countries" },
];

const moments = [
  { src: "/prabhakaran-personal.jpg", caption: "Grounded in faith and family" },
  { src: "/prabhakaran-tour.jpg", caption: "On the road, close to the work" },
  { src: "/prabhakaran-active.jpg", caption: "75+, and still active as ever — yoga, sport, and a teenager's drive" },
  { src: "/prabhakaran-beach.jpg", caption: "Time for reflection" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <AnimateOnView direction="left">
            <div className="relative">
              {/* Quote card */}
              <div className="bg-[#0f1a2e] rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-600/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <span className="font-heading text-amber-400/60 text-8xl leading-none select-none">&ldquo;</span>
                  <p className="text-lg text-gray-200 leading-relaxed italic -mt-4">
                    Engineering is not just about building machines — it is about engineering
                    trust, precision, and long-term value for our clients across the Middle
                    East and beyond.
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-px bg-amber-400" />
                    <div>
                      <p className="font-heading font-bold text-white">Velath Prabhakaran</p>
                      <p className="text-amber-400 text-sm mt-0.5">Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-6 bg-amber-400 text-[#0f1a2e] rounded-2xl px-6 py-4 shadow-2xl hidden lg:block glow-amber"
              >
                <p className="font-heading font-extrabold text-3xl">30+</p>
                <p className="text-sm font-semibold opacity-80">Years in Industry</p>
              </motion.div>
            </div>
          </AnimateOnView>

          {/* Right */}
          <AnimateOnView direction="right" delay={0.1}>
            <p className="text-amber-500 font-heading font-semibold tracking-[0.25em] uppercase text-xs mb-4">
              About Me
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#0f1a2e] mb-7 leading-tight">
              A Life Forged in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Industrial Excellence
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
              <p>
                I am the Managing Director of{" "}
                <strong className="text-[#0f1a2e]">Velath Engineering International FZC</strong>,
                a flagship UAE enterprise specialising in the design, fabrication, and supply
                of capital process equipment for the oil &amp; gas and heavy industrial sectors.
              </p>
              <p>
                I was born in Velur, Thrissur, Kerala, to a mother who served as a freedom
                fighter — a legacy of courage and conviction that has shaped my own values of
                integrity and perseverance. I carried that spirit with me to the UAE, where I
                arrived in the UAE on 6th June 1975, beginning a journey that would lead him
                to found Velath Engineering in 1985 and build one of the region&apos;s respected engineering
                conglomerates, headquartered in Sharjah.
              </p>
              <p>
                Under my leadership, the company has established a strong track record
                delivering pressure vessels, boilers, heat exchangers, and end-to-end project
                management services to major clients across the Middle East and South Asia.
              </p>
              <p>
                Over the years, I have travelled to more than 20 countries for both personal
                and professional needs, building international connections that have helped
                Velath Engineering expand its reach into global markets. When I&apos;m not
                working, I enjoy travelling and am an avid lover of gadgets and new technology.
              </p>
            </div>

            {/* Attribute grid */}
            <div className="grid grid-cols-2 gap-3">
              {attributes.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 bg-gray-50 hover:bg-amber-50 border border-transparent hover:border-amber-200 rounded-xl px-4 py-3 transition-all duration-200 cursor-default"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-heading text-sm font-semibold text-[#0f1a2e]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimateOnView>
        </div>

        {/* Beyond the boardroom */}
        <AnimateOnView delay={0.15}>
          <div className="mt-20">
            <p className="text-amber-500 font-heading font-semibold tracking-[0.25em] uppercase text-xs mb-6 text-center">
              Beyond the Boardroom
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {moments.map((moment) => (
                <div
                  key={moment.src}
                  className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5]"
                >
                  <Image
                    src={moment.src}
                    alt={moment.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/80 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-heading font-semibold">
                    {moment.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnView>

        {/* Family & Values */}
        <AnimateOnView delay={0.15}>
          <div className="mt-20 grid lg:grid-cols-2 gap-14 items-center bg-gray-50 rounded-3xl p-10 lg:p-14">
            <div className="order-2 lg:order-1">
              <p className="text-amber-500 font-heading font-semibold tracking-[0.25em] uppercase text-xs mb-4">
                Family &amp; Values
              </p>
              <h3 className="font-heading text-3xl font-extrabold text-[#0f1a2e] mb-5 leading-tight">
                A Partnership Rooted in Service
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Behind my journey stands my wife, a retired teaching professional who spent
                  over 40 years shaping young minds in the UAE. Like me, her roots trace back
                  to Thrissur, Kerala, and that shared heritage has been a constant source of
                  strength throughout our life together.
                </p>
                <p>
                  We are both committed believers in Sanatana Dharma, and that faith guides our
                  shared dedication to charitable work — supporting causes close to our hearts
                  in both the UAE and our hometown in Kerala.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden aspect-[5/4]">
              <Image
                src="/prabhakaran-family.jpg"
                alt="Velath Prabhakaran with his wife"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
