"use client";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-20 flex items-center justify-center">
      <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="block text-[clamp(8rem,20vw,16rem)] font-heading font-bold leading-none tracking-[-0.04em] mb-4"
            style={{ WebkitTextStroke: "2px rgba(229,199,177,0.5)", color: "transparent" }}
          >
            404
          </span>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-heading font-bold uppercase mb-6">
            PAGE NOT FOUND
          </h1>
          <p className="text-[16px] text-[#1C1C1C]/55 leading-[1.75] max-w-[450px] mx-auto mb-10">
            The page you are looking for might have been moved or does not exist. Let us guide you back to beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a href="/" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-[#1C1C1C] text-white px-10 py-4 text-[13px] font-bold uppercase tracking-[0.12em]" data-cursor="click">
              BACK TO HOME
            </motion.a>
            <motion.a href="/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="bg-[#E5C7B1] text-[#1C1C1C] px-10 py-4 rounded-full text-[13px] font-bold uppercase tracking-[0.12em]" data-cursor="book">
              BOOK NOW
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
