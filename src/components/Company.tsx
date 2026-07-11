"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnView from "./AnimateOnView";

const networkPhotos = [
  { src: "/prabhakaran-network-1.jpg", caption: "Connecting with global partners at an international trade exhibition" },
  { src: "/prabhakaran-network-2.jpg", caption: "Exploring new supplier networks across the industry floor" },
];

const highlights = [
  {
    title: "Capital Equipment Supply",
    description:
      "End-to-end procurement and supply of heavy process equipment including pressure vessels, boilers, and heat exchangers tailored for demanding industrial environments.",
    color: "from-amber-500/10 to-orange-500/5 border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Steel Engineering & Fabrication",
    description:
      "In-house steel engineering capabilities with adherence to ASME, PED, and API standards, ensuring world-class quality in every deliverable.",
    color: "from-blue-500/10 to-indigo-500/5 border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Industrial Project Management",
    description:
      "Comprehensive industrial project management from feasibility studies through commissioning, serving clients in oil & gas, petrochemical, and power generation.",
    color: "from-violet-500/10 to-purple-500/5 border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    title: "Free Zone Trade Advantage",
    description:
      "Incorporated as an FZC in the UAE, enabling seamless international trade, full foreign ownership, and strategic access to global markets.",
    color: "from-emerald-500/10 to-teal-500/5 border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
];

export default function Company() {
  return (
    <section id="company" className="py-28 bg-[#060d18] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimateOnView className="text-center mb-16">
          <p className="text-amber-400 font-heading font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            The Enterprise
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Velath Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              International FZC
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A UAE powerhouse in heavy industrial engineering, delivering precision-engineered
            capital equipment and integrated project services across the Middle East.
          </p>
        </AnimateOnView>

        {/* Stats banner */}
        <AnimateOnView delay={0.1}>
          <div className="glass rounded-2xl p-8 mb-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Entity Type", value: "Free Zone (FZC)" },
              { label: "Headquarters", value: "Sharjah, UAE" },
              { label: "Industry", value: "Oil & Gas / Industrial" },
              { label: "Speciality", value: "Process Equipment" },
            ].map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <p className="text-amber-400/80 text-[10px] uppercase tracking-widest font-heading mb-1">
                  {item.label}
                </p>
                <p className="text-white font-heading font-bold text-base">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimateOnView>

        {/* Bento-style grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`rounded-2xl p-8 border bg-gradient-to-br ${item.color} transition-all duration-300 cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl glass flex items-center justify-center font-heading font-bold ${item.iconColor} text-sm`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global network */}
        <AnimateOnView delay={0.15}>
          <div className="mt-16">
            <p className="text-amber-400 font-heading font-semibold tracking-[0.3em] uppercase text-xs mb-6 text-center">
              A Global Network
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {networkPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className="group relative rounded-2xl overflow-hidden glass aspect-[16/10]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/90 via-[#060d18]/10 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-gray-200 text-sm font-heading font-semibold">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
