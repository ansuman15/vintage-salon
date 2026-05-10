"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "5K+", label: "Happy Clients" },
  { value: "25+", label: "Expert Stylists" },
  { value: "50+", label: "Beauty Services" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-0">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-20">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05]">
            OUR STORY
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/60 max-w-[480px] lg:text-right">
            A journey that began with a passion for enhancing natural beauty has grown into a premier destination for luxurious beauty experiences.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] md:h-[550px] rounded-[16px] overflow-hidden mb-20">
          <Image src="/images/asset_25.jpg" alt="Vintage Salon" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-heading font-bold uppercase leading-[1.1] mb-6">WHERE BEAUTY MEETS ARTISTRY</h2>
            <p className="text-[16px] leading-[1.8] text-[#1C1C1C]/60">Founded with a vision to redefine the beauty experience, Vintage has become synonymous with elegance, expertise, and personalized care.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="text-[16px] leading-[1.8] text-[#1C1C1C]/60 mb-6">Every visit to Vintage is a journey of transformation. From the moment you step through our doors, you are enveloped in luxury and tranquility.</p>
            <p className="text-[16px] leading-[1.8] text-[#1C1C1C]/60">We believe beauty is about confidence, self-expression, and feeling your absolute best.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center py-8 border border-[#E5C7B1]/30 rounded-[12px]">
              <span className="block text-[clamp(2rem,4vw,3.5rem)] font-heading font-bold text-[#E5C7B1] mb-2">{stat.value}</span>
              <span className="text-[14px] text-[#1C1C1C]/55 font-medium tracking-[0.04em] uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="bg-[#1C1C1C] text-white py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-heading font-bold uppercase leading-[1.05] mb-6">
            READY TO EXPERIENCE VINTAGE?
          </motion.h2>
          <motion.a href="/contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.15 }}
            className="inline-flex bg-[#E5C7B1] text-[#1C1C1C] px-10 py-4 text-[13px] font-bold uppercase tracking-[0.12em] rounded-full" data-cursor="book">
            BOOK NOW
          </motion.a>
        </div>
      </section>
    </main>
  );
}
