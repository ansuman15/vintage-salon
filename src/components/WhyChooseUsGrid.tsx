"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Expert Team",
    desc: "Skilled professionals dedicated to enhancing your natural beauty.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#E5C7B1]">
        <path d="M8 36L16 28L24 36L32 20L40 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 32L20 24L28 32L36 16L44 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Personal Care",
    desc: "Tailored services that highlight your unique beauty and preferences.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#E5C7B1]">
        <path d="M24 42S6 30 6 18c0-6.6 5.4-12 12-12 3.6 0 6.8 1.6 9 4.1C29.2 7.6 32.4 6 36 6c6.6 0 12 5.4 12 12 0 12-18 24-18 24H24z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 42S6 30 6 18c0-6.6 5.4-12 12-12 3.6 0 6.8 1.6 9 4.1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" opacity="0.15"/>
      </svg>
    ),
  },
  {
    title: "Quality Products",
    desc: "High-end, cruelty-free products ensuring a flawless, lasting finish.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#E5C7B1]">
        <path d="M24 6L30 18L24 30L18 18L24 6Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 18L36 24L24 30L12 24L24 18Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="currentColor" opacity="0.15"/>
        <path d="M24 30V42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Good Ambiance",
    desc: "Indulge in beauty surrounded by a serene and luxurious atmosphere.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[#E5C7B1]">
        <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.2"/>
        <circle cx="24" cy="24" r="3" fill="currentColor"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="24"
            cy="10"
            rx="3"
            ry="6"
            fill="currentColor"
            opacity="0.7"
            transform={`rotate(${angle} 24 24)`}
          />
        ))}
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

export function WhyChooseUsGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#1C1C1C] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Centered image with overlay heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[600px] mx-auto h-[350px] md:h-[450px] rounded-[12px] overflow-hidden mb-16"
        >
          <Image
            src="/images/asset_26.jpg"
            alt="Why choose Vintage"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-heading font-bold uppercase tracking-[0.02em]">
              WHY VINTAGE
            </h2>
          </div>
        </motion.div>

        {/* 4-column features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-5">{f.icon}</div>
              <h3 className="text-[20px] md:text-[22px] font-heading font-bold mb-3">
                {f.title}
              </h3>
              <p className="text-[14px] text-white/55 leading-[1.7] max-w-[260px]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
