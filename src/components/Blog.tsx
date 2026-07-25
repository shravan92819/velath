"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ── */
interface Chapter { label: string; icon: string; body: string[]; }
interface Post {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  chapters: Chapter[];
  stats?: { value: string; label: string }[];
  pullQuote?: string;
}

/* ── Post data ── */
const posts: Post[] = [
  {
    id: "journey",
    category: "Our Story",
    title: "From Humble Beginnings to Industry Leadership",
    excerpt: "The inspiring journey of Velath Prabhakaran — from arriving in UAE on 6th June 1975 to building one of the region's most respected engineering companies.",
    image: "/prabhakaran-tour.jpg",
    imageAlt: "Velath Prabhakaran — the journey",
    date: "June 6, 1975 – Present",
    pullQuote: "Success is not determined by where you begin, but by your willingness to persevere through challenges and remain focused on your goals.",
    stats: [
      { value: "1975", label: "Arrived in UAE" },
      { value: "1985", label: "Velath Engineering Founded" },
      { value: "20+", label: "Countries Touched" },
    ],
    chapters: [
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
          "Driven by ambition and a clear vision, Velath Prabhakaran moved forward with greater opportunities within the UAE. The journey was far from easy, requiring countless hours of hard work, continuous learning, and the courage to take calculated risks.",
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
    ],
  },
  {
    id: "separation-packages",
    category: "Products",
    title: "Separation Packages: Engineering Precision for Oil & Gas",
    excerpt: "Velath Engineering's separation packages represent a landmark in process engineering — fully integrated skid-mounted systems that separate oil, gas, and water with precision and reliability.",
    image: "/product-separation-packages.jpg",
    imageAlt: "Velath Engineering Separation Package — oil gas separator skid with vessels and pump units",
    date: "Velath Engineering Works",
    stats: [
      { value: "ASME", label: "Code Compliant" },
      { value: "3-Phase", label: "Separation Capable" },
      { value: "UAE & GCC", label: "Delivered Across" },
    ],
    chapters: [
      {
        label: "What Are Separation Packages?",
        icon: "⚙️",
        body: [
          "In the oil and gas industry, separation packages are critical process systems designed to separate the three phases produced from a well — crude oil, natural gas, and produced water. These skid-mounted units integrate pressure vessels, piping manifolds, control valves, and pump packages into a single, ready-to-install system.",
          "Velath Engineering International FZC has established a strong reputation for designing and fabricating high-performance separation packages that meet the most demanding industry standards, including ASME, API, and international safety codes.",
        ],
      },
      {
        label: "Velath's Engineering Capability",
        icon: "🏗️",
        body: [
          "Each separation package delivered by Velath Engineering is engineered from the ground up — from process design and vessel fabrication to complete piping assembly, structural skid construction, and pre-commissioning testing. The image above showcases one such package: a large horizontal separator vessel mounted on a robust blue structural skid, complete with multi-line piping manifolds and electric motor-driven pump units.",
          "The precision of fabrication, the quality of materials, and the attention to detail in every weld and fitting reflect four decades of accumulated engineering expertise under the leadership of Mr. Velath Prabhakaran.",
        ],
      },
      {
        label: "Applications Across the Region",
        icon: "🌍",
        body: [
          "Velath Engineering's separation packages have been delivered to oil fields, refineries, and petrochemical plants across the UAE and the wider GCC region. These systems are built to operate reliably in the harsh environmental conditions of the Middle East — high temperatures, corrosive fluids, and demanding operational cycles.",
          "Clients including major national oil companies and international operators have trusted Velath's separation packages for their upstream and midstream operations, a testimony to the company's uncompromising standards and proven track record.",
        ],
      },
      {
        label: "A Milestone in Velath's Journey",
        icon: "✨",
        body: [
          "For Mr. Velath Prabhakaran, every separation package delivered represents more than a product — it represents the culmination of decades of learning, perseverance, and commitment to engineering excellence. From the early days of building a business from scratch in the UAE to delivering complex process packages to world-class clients, separation packages stand as one of Velath Engineering's proudest achievements.",
        ],
      },
    ],
  },
  {
    id: "pressure-vessels",
    category: "Products",
    title: "Pressure Vessels: The Backbone of Industrial Process Plants",
    excerpt: "Large-scale, ASME-certified pressure vessels fabricated and delivered by Velath Engineering — built to the highest international standards for the oil, gas, and petrochemical industries.",
    image: "/product-pressure-vessels.jpg",
    imageAlt: "Velath Engineering large horizontal pressure vessels being transported on heavy-duty trailers",
    date: "Velath Engineering Works",
    stats: [
      { value: "ASME U", label: "Stamp Certified" },
      { value: "40+", label: "Years Fabricating" },
      { value: "100+", label: "Vessels Delivered" },
    ],
    chapters: [
      {
        label: "What Are Pressure Vessels?",
        icon: "🔩",
        body: [
          "Pressure vessels are closed containers designed to hold gases or liquids at pressures substantially different from the ambient environment. They are among the most critical pieces of equipment in oil refineries, gas processing plants, petrochemical facilities, and power generation units — operating under extreme pressure and temperature conditions where failure is simply not an option.",
          "The image above captures two of Velath Engineering's large horizontal pressure vessels being transported on heavy-duty multi-axle trailers for delivery — a sight that represents both the scale of the company's fabrication capability and the trust of its clients.",
        ],
      },
      {
        label: "Velath's Fabrication Standards",
        icon: "🏗️",
        body: [
          "Velath Engineering International FZC holds ASME U, U2, S, PP, and NB R authorisation — among the most stringent certifications in the pressure vessel industry globally. Every vessel fabricated at Velath's Sharjah facility undergoes rigorous non-destructive testing (NDT), radiographic inspection, hydrostatic pressure testing, and third-party inspection before leaving the factory.",
          "The company's engineering team designs vessels to comply with ASME Section VIII Division I & II, PD 5500, and other applicable international codes, ensuring full compliance with client specifications and regulatory requirements.",
        ],
      },
      {
        label: "Range of Vessels",
        icon: "⚗️",
        body: [
          "Velath Engineering fabricates a comprehensive range of pressure vessels including separators, drums, filter vessels, scrubbers, deaerators, flash drums, knockout pots, and storage vessels. Sizes range from small skid-mounted vessels to the large horizontal vessels shown above — some of the largest fabricated in the UAE region.",
          "Each vessel is custom-engineered to meet exact process requirements, including material selection (carbon steel, stainless steel, duplex), nozzle layout, internal design, and surface treatment for the specific service environment.",
        ],
      },
      {
        label: "Trusted by the Industry",
        icon: "🌍",
        body: [
          "Over four decades of fabrication excellence have made Velath Engineering a trusted name among oil and gas companies, EPCs, and plant operators across the UAE, Qatar, Oman, and beyond. The company's pressure vessels have been installed in refineries, offshore platforms, gas treatment facilities, and water injection systems operated by some of the most recognised names in the energy industry.",
          "Under the leadership of Mr. Velath Prabhakaran, whose vision and commitment to quality have guided the company since 1985, Velath Engineering continues to set the benchmark for pressure vessel fabrication in the region.",
        ],
      },
    ],
  },
  {
    id: "deaeration-equipment",
    category: "Products",
    title: "Deaeration Equipment: Protecting Boilers and Process Systems",
    excerpt: "Velath Engineering's deaeration systems remove dissolved oxygen and corrosive gases from boiler feedwater — a critical step in protecting plant equipment and ensuring operational longevity.",
    image: "/product-deaeration.jpg",
    imageAlt: "Velath Engineering deaeration tower — multi-level structure with insulated vessels and process piping",
    date: "Velath Engineering Works",
    stats: [
      { value: "O₂ Removal", label: "Core Function" },
      { value: "Multi-Level", label: "Structural Design" },
      { value: "Power & Oil Gas", label: "Industries Served" },
    ],
    chapters: [
      {
        label: "What Is Deaeration?",
        icon: "💧",
        body: [
          "Deaeration is the process of removing dissolved oxygen and other non-condensable gases — particularly carbon dioxide — from boiler feedwater and process water. Dissolved oxygen is one of the primary causes of corrosion in boilers, heat exchangers, and process piping, leading to costly equipment failures and unplanned shutdowns.",
          "By eliminating these corrosive gases before water enters the boiler or process system, deaeration equipment significantly extends the life of plant equipment, reduces maintenance costs, and ensures continuous, safe operation.",
        ],
      },
      {
        label: "Velath's Deaeration Systems",
        icon: "🏗️",
        body: [
          "The image above showcases one of Velath Engineering's multi-level deaeration towers — a large, thermally insulated structure featuring a spray-type or tray-type deaerator vessel at the upper level, a storage tank below, and an extensive network of process piping, control valves, and structural steelwork.",
          "Velath Engineering designs and fabricates deaeration systems tailored to specific plant requirements — from small packaged units for industrial boiler systems to large-scale deaeration towers for power generation and refinery applications. Each system is engineered for maximum gas removal efficiency, thermal performance, and operational reliability.",
        ],
      },
      {
        label: "Industries and Applications",
        icon: "⚡",
        body: [
          "Velath's deaeration equipment serves a wide range of industries across the UAE and the Middle East, including power generation plants, oil refineries, petrochemical complexes, water injection systems for enhanced oil recovery, and desalination plants.",
          "The ability to fabricate, assemble, and pre-commission complete deaeration systems — including vessels, structural steelwork, piping, insulation, and instruments — within Velath's Sharjah facility ensures faster delivery, better quality control, and reduced installation time at site.",
        ],
      },
      {
        label: "Engineering Excellence at Every Level",
        icon: "✨",
        body: [
          "Mr. Velath Prabhakaran has always believed that true engineering excellence lies in the details — the precision of a weld, the accuracy of a nozzle orientation, the quality of insulation work. Deaeration equipment, with its complex multi-vessel, multi-level design and stringent performance requirements, exemplifies this philosophy.",
          "Every deaeration system delivered by Velath Engineering is a reflection of the company's four-decade commitment to quality, safety, and customer satisfaction — values instilled from day one by Mr. Prabhakaran himself.",
        ],
      },
    ],
  },
  {
    id: "desalination-equipment",
    category: "Products",
    title: "Desalination Equipment: Engineering Fresh Water for the Middle East",
    excerpt: "Velath Engineering's large-scale desalination vessels and components support the UAE's critical water security infrastructure — fabricated with precision for multi-stage flash and thermal desalination plants.",
    image: "/product-desalination.jpg",
    imageAlt: "Velath Engineering large desalination vessel — corrugated cylindrical column in fabrication workshop",
    date: "Velath Engineering Works",
    stats: [
      { value: "MSF / MED", label: "Technologies Supported" },
      { value: "Large Scale", label: "Fabrication Capability" },
      { value: "UAE Water", label: "Security Contribution" },
    ],
    chapters: [
      {
        label: "Desalination in the UAE",
        icon: "🌊",
        body: [
          "The UAE is one of the most water-scarce countries in the world, relying heavily on desalination for its freshwater supply. Desalination plants — which convert seawater into potable water — are therefore among the most strategically important industrial facilities in the region, serving millions of residents and supporting the country's continued growth.",
          "The massive scale of desalination infrastructure in the UAE demands engineering partners capable of fabricating large, complex equipment to the highest international standards — and Velath Engineering International FZC has been one such trusted partner.",
        ],
      },
      {
        label: "What the Image Shows",
        icon: "🏗️",
        body: [
          "The image above captures a large cylindrical desalination vessel — notable for its distinctive corrugated external profile and its sheer scale, resting on heavy-duty support rollers in Velath Engineering's fabrication workshop. The corrugated design provides structural rigidity while accommodating thermal expansion in the demanding operating environment of multi-stage flash (MSF) or multi-effect distillation (MED) desalination processes.",
          "The fabrication of vessels of this scale and complexity requires advanced workshop facilities, experienced welders, sophisticated quality control procedures, and a deep understanding of the materials and processes involved — all of which Velath Engineering has developed over four decades.",
        ],
      },
      {
        label: "Technical Capability",
        icon: "⚙️",
        body: [
          "Velath Engineering's desalination work spans the fabrication of flash chambers, heat transfer vessels, brine heaters, condenser sections, and associated structural components for MSF and MED desalination plants. The company's ASME authorisations and ISO certifications ensure that every component meets the stringent quality requirements of plant operators and international inspection authorities.",
          "Material handling, precision rolling of large-diameter shells, complex internal configuration, and full NDT inspection are all carried out within Velath's Sharjah facility, ensuring complete quality control from raw material to finished product.",
        ],
      },
      {
        label: "Contributing to UAE's Future",
        icon: "🇦🇪",
        body: [
          "For Mr. Velath Prabhakaran, contributing to the UAE's desalination infrastructure is a source of deep pride. Having arrived in the UAE on 6th June 1975 and witnessed first-hand the country's remarkable transformation, the opportunity to fabricate equipment that directly supports the nation's water security represents the highest expression of his commitment to the UAE — the country that gave him his opportunity and that he has proudly called home for over 50 years.",
          "Velath Engineering's desalination work stands as a testament to what is possible when vision, perseverance, and technical excellence come together — and as an enduring contribution to the country that shaped the company's story.",
        ],
      },
    ],
  },
];

/* ── Main component ── */
export default function Blog() {
  const [open, setOpen] = useState(false);
  const [activePost, setActivePost] = useState<Post | null>(null);

  const close = useCallback(() => { setOpen(false); setActivePost(null); }, []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("velath:openBlog", onOpen);
    return () => window.removeEventListener("velath:openBlog", onOpen);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { if (activePost) setActivePost(null); else close(); } };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open, activePost, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] bg-[#060d18]/97 backdrop-blur-xl overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close"
            className="fixed top-5 right-5 z-[210] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <AnimatePresence mode="wait">
            {activePost ? (
              /* ── Single post view ── */
              <motion.div
                key={activePost.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl mx-auto px-6 py-16"
              >
                {/* Back */}
                <button
                  onClick={() => setActivePost(null)}
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-heading font-semibold mb-10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </button>

                {/* Category + title */}
                <p className="text-amber-500 font-heading font-semibold tracking-[0.25em] uppercase text-xs mb-4">
                  {activePost.category}
                </p>
                <h2 className="font-heading text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                  {activePost.title}
                </h2>
                <p className="text-gray-500 text-sm font-heading mb-10">{activePost.date}</p>

                {/* Hero image + pull quote */}
                <div className="relative rounded-3xl overflow-hidden mb-14 aspect-[16/8]">
                  <Image src={activePost.image} alt={activePost.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/40 to-transparent" />
                  {activePost.pullQuote && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                      <p className="font-heading text-amber-400/40 text-5xl leading-none select-none mb-1">&ldquo;</p>
                      <p className="text-white text-base lg:text-xl font-heading font-semibold leading-snug max-w-2xl">
                        {activePost.pullQuote}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="w-6 h-px bg-amber-400" />
                        <p className="text-amber-400 text-xs font-heading font-semibold tracking-wide">Velath Prabhakaran</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chapters */}
                <div className="space-y-12 mb-14">
                  {activePost.chapters.map((chapter, i) => (
                    <div key={chapter.label} className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-10">
                      <div className="flex lg:flex-col items-start gap-3">
                        <span className="text-2xl">{chapter.icon}</span>
                        <div>
                          <span className="text-xs font-heading font-bold tracking-[0.2em] uppercase text-amber-400 block mb-1">
                            {activePost.category === "Our Story" ? `Chapter ${i + 1}` : `Section ${i + 1}`}
                          </span>
                          <h3 className="font-heading text-sm font-bold text-white leading-snug">{chapter.label}</h3>
                        </div>
                      </div>
                      <div className="space-y-4 text-gray-400 leading-relaxed border-l border-white/10 pl-6 lg:pl-10 text-sm">
                        {chapter.body.map((para, j) => <p key={j}>{para}</p>)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                {activePost.stats && (
                  <div className="grid sm:grid-cols-3 gap-4">
                    {activePost.stats.map((stat) => (
                      <div key={stat.label} className="glass rounded-2xl px-6 py-6 text-center">
                        <p className="font-heading text-2xl lg:text-3xl font-extrabold text-amber-400 mb-1">{stat.value}</p>
                        <p className="text-gray-400 text-xs uppercase tracking-widest font-heading">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              /* ── Post grid view ── */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-6xl mx-auto px-6 py-20"
              >
                {/* Header */}
                <div className="text-center mb-14">
                  <p className="text-amber-500 font-heading font-semibold tracking-[0.25em] uppercase text-xs mb-4">
                    Insights & Projects
                  </p>
                  <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Blog &{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                      Stories
                    </span>
                  </h2>
                </div>

                {/* Featured post */}
                <motion.button
                  onClick={() => setActivePost(posts[0])}
                  whileHover={{ scale: 1.01 }}
                  className="w-full text-left mb-6 group relative rounded-3xl overflow-hidden aspect-[16/7]"
                >
                  <Image src={posts[0].image} alt={posts[0].imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d18] via-[#060d18]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                    <span className="inline-block text-xs font-heading font-bold tracking-[0.2em] uppercase text-amber-400 mb-3">
                      {posts[0].category} · Featured
                    </span>
                    <h3 className="font-heading text-2xl lg:text-4xl font-extrabold text-white leading-tight mb-3 max-w-3xl">
                      {posts[0].title}
                    </h3>
                    <p className="text-gray-300 text-sm max-w-2xl leading-relaxed hidden lg:block">{posts[0].excerpt}</p>
                  </div>
                </motion.button>

                {/* Product posts grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {posts.slice(1).map((post) => (
                    <motion.button
                      key={post.id}
                      onClick={() => setActivePost(post)}
                      whileHover={{ y: -4 }}
                      className="text-left group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0f1a2e]"
                    >
                      <Image src={post.image} alt={post.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060d18]/95 via-[#060d18]/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-amber-400 text-[10px] font-heading font-bold tracking-[0.2em] uppercase block mb-1">
                          {post.category}
                        </span>
                        <h3 className="font-heading text-sm font-bold text-white leading-snug">{post.title}</h3>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
