"use client";

import Image from "next/image";
import AnimateOnView from "./AnimateOnView";

const chapters = [
  {
    label: "The Early Struggles",
    icon: "🌱",
    body: [
      "The 1980s were a period filled with challenges and uncertainty. Like many aspiring professionals of that era, Velath Prabhakaran began his career with limited resources but limitless determination. Starting from humble beginnings, he faced financial hardships, unfamiliar environments, and the demanding realities of building a future from scratch.",
      "Rather than allowing these obstacles to define his path, he viewed every challenge as an opportunity to learn, grow, and improve. Through dedication, discipline, and an unwavering work ethic, he steadily earned the trust and respect of those around him.",
    ],
  },
  {
    label: "Building a Dream in the UAE",
    icon: "🏗️",
    body: [
      "Driven by ambition and a clear vision, Velath Prabhakaran moved to the United Arab Emirates in search of greater opportunities. The journey was far from easy, requiring countless hours of hard work, continuous learning, and the courage to take calculated risks.",
      "With years of industry experience and an uncompromising commitment to quality, he laid the foundation for Velath Engineering Works in 1985. What began as a modest venture gradually evolved into a trusted engineering company known for delivering reliable solutions, maintaining high standards, and fostering lasting client relationships.",
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
      "From humble beginnings in the 1980s to leading one of the UAE's respected engineering companies, his legacy reflects the values of resilience, dedication, and visionary leadership. His story continues to inspire future generations to dream boldly, work tirelessly, and believe that determination can transform even the most modest beginnings into remarkable success.",
    ],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-28 bg-[#060d18] relative overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute w-[500px] h-[500px] bottom-0 -left-32 rounded-full bg-blue-700/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <AnimateOnView>
          <div className="text-center mb-16">
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
              Success is rarely achieved overnight. Behind every successful entrepreneur lies a story
              of determination, resilience, and unwavering commitment.
            </p>
          </div>
        </AnimateOnView>

        {/* Featured image + pull quote */}
        <AnimateOnView delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden mb-20 aspect-[16/7]">
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
        </AnimateOnView>

        {/* Chapters */}
        <div className="space-y-14">
          {chapters.map((chapter, i) => (
            <AnimateOnView key={chapter.label} delay={i * 0.08}>
              <div className="grid lg:grid-cols-[220px_1fr] gap-6 lg:gap-12">
                {/* Chapter label */}
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

                {/* Body */}
                <div className="space-y-4 text-gray-400 leading-relaxed border-l border-white/10 pl-6 lg:pl-10">
                  {chapter.body.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>

        {/* Bottom highlight strip */}
        <AnimateOnView delay={0.1}>
          <div className="mt-20 grid sm:grid-cols-3 gap-6">
            {[
              { value: "1980s", label: "Journey Began" },
              { value: "1985", label: "Velath Engineering Founded" },
              { value: "20+", label: "Countries Touched" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl px-6 py-8 text-center"
              >
                <p className="font-heading text-4xl font-extrabold text-amber-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-heading">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
