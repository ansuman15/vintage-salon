"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "SKIN CARE",
    desc: "Renew your skin with our Skin Rejuvenate treatments. From exfoliation to specialized serums.",
    image: "/images/asset_26.jpg",
    href: "/service/skin-care",
  },
  {
    name: "HAIR CARE",
    desc: "Elevate your locks with our Hair Treatment. From nourishing masks to scalp massages for your hair.",
    image: "/images/asset_27.jpg",
    href: "/service/hair-care",
  },
  {
    name: "EYE CARE",
    desc: "Enhance your eyes with our specialized services for brighter, more youthful eyes.",
    image: "/images/asset_28.jpg",
    href: "/service/eye-care",
  },
  {
    name: "BODY SPA",
    desc: "Relax and recharge with our body treatments for complete rejuvenation.",
    image: "/images/asset_29.jpg",
    href: "/service/body-spa",
  },
];

export function ServicesInteractive() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const currentBg = hoveredIdx !== null ? services[hoveredIdx].image : services[activeIdx].image;

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image with dark overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentBg}
            alt="Service background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* Service List — centered vertical */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[700px] lg:min-h-[800px] py-20">
        {services.map((service, i) => {
          const isActive = hoveredIdx === i || (hoveredIdx === null && activeIdx === i);
          return (
            <a
              key={i}
              href={service.href}
              onMouseEnter={() => { setHoveredIdx(i); setActiveIdx(i); }}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative flex flex-col items-center py-4 md:py-5 cursor-pointer w-full max-w-[700px] px-6"
            >
              {/* Service Name */}
              <motion.h3
                className={`text-[clamp(1.5rem,4vw,2.8rem)] font-heading font-bold uppercase tracking-[0.05em] text-center transition-all duration-300 ${
                  isActive ? "text-white" : "text-white/40"
                }`}
              >
                {service.name}
              </motion.h3>

              {/* Expanded content on active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col items-center overflow-hidden"
                  >
                    <p className="text-[14px] md:text-[15px] text-white/70 leading-[1.65] text-center max-w-[480px] mt-3 mb-4">
                      {service.desc}
                    </p>
                    {/* Arrow circle button */}
                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          );
        })}
      </div>
    </section>
  );
}
