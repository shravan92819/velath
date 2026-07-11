"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnView from "./AnimateOnView";

const team = [
  {
    name: "Velath Prabhakaran",
    role: "Managing Director",
    description:
      "I am the driving force behind Velath Engineering International FZC, with decades of experience in heavy process equipment and industrial engineering in the UAE.",
    image: "/prabhakaran.jpg",
    initials: "VP",
    featured: true,
  },
  {
    name: "Praveen Prabhakaran",
    role: "Group General Manager",
    description:
      "Overseeing group-wide operations with strategic expertise ensuring consistent quality and delivery across all business units.",
    image: "/praveen.jpg",
    initials: "PP",
    featured: false,
  },
  {
    name: "Prajeen Prabhakaran",
    role: "Commercial Director",
    description:
      "Leading commercial strategy and client relationships, driving business development and competitive positioning in the UAE market.",
    image: "/prajeen.jpg",
    initials: "PP",
    featured: false,
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-28 bg-[#060d18] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateOnView className="text-center mb-16">
          <p className="text-amber-400 font-heading font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            The Team
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Leadership
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            A cohesive team combining deep engineering expertise, commercial acumen, and
            strategic vision to drive Velath Engineering&apos;s growth.
          </p>
        </AnimateOnView>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-8 text-center overflow-hidden transition-all duration-300 ${
                member.featured
                  ? "bg-gradient-to-b from-amber-400 to-amber-500 shadow-2xl shadow-amber-500/20"
                  : "glass hover:border-white/20"
              }`}
            >
              {/* Decorative circle */}
              {member.featured && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              )}

              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-28 h-28">
                {member.image ? (
                  <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="112px"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-28 h-28 rounded-full flex items-center justify-center text-2xl font-heading font-extrabold ${
                      member.featured
                        ? "bg-white/20 text-white"
                        : "bg-amber-400/15 text-amber-400"
                    }`}
                  >
                    {member.initials}
                  </div>
                )}
              </div>

              <h3
                className={`font-heading font-extrabold text-xl mb-1 ${
                  member.featured ? "text-[#0f1a2e]" : "text-white"
                }`}
              >
                {member.name}
              </h3>
              <p
                className={`text-xs font-heading font-bold uppercase tracking-widest mb-4 ${
                  member.featured ? "text-[#0f1a2e]/70" : "text-amber-400"
                }`}
              >
                {member.role}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  member.featured ? "text-[#0f1a2e]/75" : "text-gray-400"
                }`}
              >
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
