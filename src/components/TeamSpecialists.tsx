"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const specialists = [
  { name: "Olivia", title: "Makeup Artist", image: "/images/asset_34.jpg" },
  { name: "Christina", title: "Nail Specialist", image: "/images/asset_35.jpg" },
  { name: "Isabella", title: "Massage Therapist", image: "/images/asset_36.jpg" },
  { name: "Abegal", title: "Pedicure Specialist", image: "/images/asset_37.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

export function TeamSpecialists() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#FDF7F2]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-16 md:mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-heading font-bold italic uppercase leading-[1.05] tracking-[-0.01em]"
          >
            OUR SPECIALISTS
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/55 max-w-[420px] lg:text-right"
          >
            Passionate professionals dedicated to enhancing your beauty journey
            with our Vintage where you will get fulfilled satisfaction.
          </motion.p>
        </div>

        {/* Specialist Rows */}
        <div className="relative">
          {specialists.map((spec, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative group cursor-pointer"
            >
              {/* Peach highlight bar */}
              <div
                className={`absolute inset-0 bg-[#E5C7B1]/20 transition-all duration-500 ${
                  hoveredIdx === i ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative flex items-center justify-between py-8 md:py-10 border-b border-[#E5C7B1]/30">
                <span className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-heading font-normal tracking-[-0.01em]">
                  {spec.name}
                </span>
                <span className="text-[clamp(1rem,2.5vw,1.8rem)] font-heading italic text-[#1C1C1C]/70 tracking-[-0.01em]">
                  {spec.title}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Floating tilted photo — appears on hover */}
          <AnimatePresence>
            {hoveredIdx !== null && (
              <motion.div
                key={hoveredIdx}
                initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-20"
                style={{
                  top: `${hoveredIdx * 25 + 5}%`,
                }}
              >
                <div className="w-[220px] h-[280px] md:w-[260px] md:h-[330px] relative rounded-[4px] overflow-hidden shadow-2xl">
                  <Image
                    src={specialists[hoveredIdx].image}
                    alt={specialists[hoveredIdx].name}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
