"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: "⚗️",
    title: "Pressure Vessels",
    description:
      "Custom-designed ASME-compliant pressure vessels for high-pressure applications in refining, petrochemical, and gas processing industries.",
    tags: ["ASME Code", "High Pressure", "Custom Design"],
    span: "lg:col-span-2",
    dark: true,
  },
  {
    icon: "🔥",
    title: "Industrial Boilers",
    description:
      "Fire-tube and water-tube boilers engineered for reliability and efficiency in power generation and steam supply.",
    tags: ["Fire Tube", "Water Tube", "Steam"],
    span: "lg:col-span-1",
    dark: false,
  },
  {
    icon: "🔄",
    title: "Heat Exchangers",
    description:
      "Shell-and-tube, plate, and air-cooled heat exchangers designed to maximise thermal efficiency across oil refining and gas processing plants.",
    tags: ["Shell & Tube", "Plate Type", "Air Cooled"],
    span: "lg:col-span-1",
    dark: false,
  },
  {
    icon: "📋",
    title: "Project Management",
    description:
      "Full-cycle EPC project management — engineering design, procurement, construction supervision, and commissioning.",
    tags: ["EPC", "Commissioning", "Supervision"],
    span: "lg:col-span-2",
    dark: true,
  },
  {
    icon: "🏗️",
    title: "Steel Engineering",
    description:
      "Structural steel design, fabrication, and erection for industrial facilities, including storage tanks, skids, and process plant structures.",
    tags: ["Structural", "Fabrication", "Storage Tanks"],
    span: "lg:col-span-1",
    dark: false,
  },
  {
    icon: "🌐",
    title: "Capital Equipment Supply",
    description:
      "Global sourcing and supply of certified capital equipment with full compliance documentation.",
    tags: ["Global Sourcing", "Certified", "Compliance"],
    span: "lg:col-span-2",
    dark: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-amber-500 font-heading font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Core Expertise
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-[#0f1a2e] mb-5 leading-tight">
            Services &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Delivering precision-engineered solutions across the full spectrum of
            heavy industrial and process equipment needs.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.015 }}
              className={`${svc.span} group rounded-2xl p-8 transition-all duration-300 cursor-default ${
                svc.dark
                  ? "bg-[#0f1a2e] border border-white/5 hover:border-amber-400/20"
                  : "bg-gray-50 border border-gray-100 hover:border-amber-200 hover:bg-amber-50/50"
              }`}
            >
              <div className="text-4xl mb-5">{svc.icon}</div>
              <h3
                className={`font-heading font-bold text-xl mb-3 ${
                  svc.dark ? "text-white" : "text-[#0f1a2e]"
                }`}
              >
                {svc.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  svc.dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      svc.dark
                        ? "bg-amber-400/10 text-amber-400 border border-amber-400/20"
                        : "bg-amber-100 text-amber-700 border border-amber-200"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent project showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9]"
        >
          <Image
            src="/project-recent.jpg"
            alt="Pressure vessels delivered on a recent Velath Engineering project"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a2e]/90 via-[#0f1a2e]/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10">
            <p className="text-amber-400 font-heading font-semibold tracking-[0.25em] uppercase text-xs mb-2">
              Recently Delivered
            </p>
            <p className="text-white font-heading font-bold text-xl lg:text-2xl max-w-2xl">
              Pressure vessels commissioned on-site at a power generation facility under
              Velath Engineering&apos;s ownership and supervision
            </p>
          </div>
        </motion.div>

        {/* Milestone project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-amber-400/20"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src="/milestone-plant.jpg"
              alt="Chemical process skid — a landmark project by Velath Engineering Works"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f1a2e]/30 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="bg-[#0f1a2e] p-8 lg:p-12 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-amber-400 font-heading font-semibold tracking-[0.25em] uppercase text-xs">
                Career Milestone
              </p>
            </span>
            <h3 className="font-heading text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-5">
              Chemical Process Skid &amp; Integrated Dosing System
            </h3>
            <div className="space-y-3 text-gray-400 leading-relaxed text-sm mb-8">
              <p>
                One of the defining achievements in Velath Engineering&apos;s history — a fully
                integrated chemical process skid featuring large-capacity stainless steel
                vessels, a complex multi-line piping manifold, and precision pump packages.
              </p>
              <p>
                Engineered, fabricated, and commissioned entirely under Velath Engineering
                Works, this project demonstrated the company&apos;s capability to deliver
                complete, high-complexity process packages for the oil &amp; gas and
                petrochemical industries — a true milestone in Mr. Prabhakaran&apos;s journey
                and the company&apos;s rise to regional prominence.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Process Skid", "Chemical Dosing", "Stainless Steel Vessels", "Pump Packages", "Oil & Gas"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
