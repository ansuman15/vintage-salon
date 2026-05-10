"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const posts = [
  { title: "PROTECTING YOUR HAIR FROM HEAT DAMAGE", desc: "Essential strategies for maintaining healthy hair while using heat styling tools.", image: "/images/asset_46.jpg", date: "May 5, 2026" },
  { title: "THE ULTIMATE SKINCARE ROUTINE", desc: "Build a morning and evening routine that transforms your skin in 30 days.", image: "/images/asset_47.jpg", date: "Apr 28, 2026" },
  { title: "BRIDAL BEAUTY COUNTDOWN", desc: "A month-by-month guide to looking your absolute best on your wedding day.", image: "/images/asset_48.jpg", date: "Apr 15, 2026" },
  { title: "SUMMER GLOW ESSENTIALS", desc: "Top products and treatments for radiant summer skin without the damage.", image: "/images/asset_49.jpg", date: "Apr 1, 2026" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05] mb-16">
          BEAUTY INSIGHTS
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <motion.article key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ duration: 0.7, delay: i * 0.1 }} className="group cursor-pointer" data-cursor="explore">
              <div className="relative h-[300px] md:h-[380px] rounded-[12px] overflow-hidden mb-5">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <span className="text-[13px] text-[#1C1C1C]/40 font-medium tracking-[0.06em] uppercase">{post.date}</span>
              <h2 className="text-[22px] md:text-[26px] font-heading font-bold uppercase leading-[1.15] mt-2 mb-3 group-hover:text-[#E5A87C] transition-colors">{post.title}</h2>
              <p className="text-[15px] text-[#1C1C1C]/55 leading-[1.7]">{post.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
