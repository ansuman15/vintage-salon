"use client";
import { motion } from "framer-motion";

const brands = ["Unive", "Quaba", "Zavix", "Xylion", "Noviax", "Zephiar"];

export function MarqueePartners() {
  return (
    <section className="py-6 overflow-hidden bg-[#FDF7F2] border-y border-[#1C1C1C]/10">
      <div className="relative flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
          className="flex shrink-0"
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-bold uppercase tracking-[0.05em] text-[#1C1C1C]/15 mx-10 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
