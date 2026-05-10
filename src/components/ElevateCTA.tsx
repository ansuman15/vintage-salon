"use client";
import { motion } from "framer-motion";

export function ElevateCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#1C1C1C] text-white rounded-t-[40px] relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase tracking-[-0.03em] leading-[1.05] mb-6"
        >
          ELEVATE YOUR BEAUTY<br />EXPRIENCE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[16px] text-white/60 max-w-[550px] mx-auto mb-10 leading-[1.7]"
        >
          Connect with us to embark on a journey of radiant beauty. Discover personalized services and expert guidance for your unique glow.
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-[#E5C7B1] text-[#1C1C1C] px-8 py-4 rounded-full text-[13px] font-bold uppercase tracking-[0.1em]"
        >
          BOOK NOW
        </motion.a>
      </div>
    </section>
  );
}
