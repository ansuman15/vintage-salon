"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const servicesList = [
  { name: "SKIN CARE", desc: "Renew your skin with treatments from exfoliation to specialized serums.", image: "/images/asset_26.jpg" },
  { name: "HAIR CARE", desc: "Elevate your locks with nourishing masks, cuts, coloring, and scalp treatments.", image: "/images/asset_27.jpg" },
  { name: "EYE CARE", desc: "Enhance your eyes with specialized services for brighter, youthful results.", image: "/images/asset_28.jpg" },
  { name: "BODY SPA", desc: "Relax and recharge with massages, body wraps, and complete rejuvenation.", image: "/images/asset_29.jpg" },
  { name: "BRIDAL", desc: "Complete bridal packages for your special day — makeup, hair, and spa.", image: "/images/asset_30.jpg" },
  { name: "NAIL ART", desc: "Express yourself with creative nail designs, manicures, and pedicures.", image: "/images/asset_31.jpg" },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05]">
            OUR SERVICES
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/60 max-w-[420px] lg:text-right">
            Discover our comprehensive range of beauty services designed to enhance your natural radiance.
          </motion.p>
        </div>
        <div className="space-y-0">
          {servicesList.map((svc, i) => (
            <motion.a key={i} href="/contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row items-stretch border-b border-[#E5C7B1]/30 hover:bg-[#E5C7B1]/10 transition-colors" data-cursor="book">
              <div className="relative w-full md:w-[280px] h-[220px] md:h-[200px] shrink-0 overflow-hidden">
                <Image src={svc.image} alt={svc.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="280px" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between p-6 md:p-10 gap-4">
                <div>
                  <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-heading font-bold uppercase mb-2">{svc.name}</h2>
                  <p className="text-[15px] text-[#1C1C1C]/55 leading-[1.65] max-w-[400px]">{svc.desc}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-white transition-colors">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
