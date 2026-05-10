"use client";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const categories = [
  { name: "SKIN CARE", items: [
    { service: "Classic Facial", price: "$85", duration: "60 min" },
    { service: "Hydra Facial", price: "$120", duration: "75 min" },
    { service: "Anti-Aging Treatment", price: "$150", duration: "90 min" },
    { service: "Chemical Peel", price: "$110", duration: "45 min" },
  ]},
  { name: "HAIR CARE", items: [
    { service: "Haircut & Style", price: "$65", duration: "45 min" },
    { service: "Hair Coloring", price: "$130", duration: "120 min" },
    { service: "Keratin Treatment", price: "$200", duration: "150 min" },
    { service: "Scalp Treatment", price: "$75", duration: "45 min" },
  ]},
  { name: "BODY SPA", items: [
    { service: "Swedish Massage", price: "$95", duration: "60 min" },
    { service: "Hot Stone Therapy", price: "$120", duration: "75 min" },
    { service: "Body Scrub & Wrap", price: "$140", duration: "90 min" },
    { service: "Aromatherapy", price: "$105", duration: "60 min" },
  ]},
  { name: "BRIDAL", items: [
    { service: "Bridal Makeup", price: "$350", duration: "180 min" },
    { service: "Pre-Wedding Package", price: "$500", duration: "Full Day" },
    { service: "Bridal Hair", price: "$200", duration: "90 min" },
    { service: "Complete Bridal", price: "$800", duration: "Full Day" },
  ]},
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05]">
            OUR PRICING
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/60 max-w-[420px] lg:text-right">
            Transparent pricing for premium beauty services. All treatments include a complimentary consultation.
          </motion.p>
        </div>
        {categories.map((cat, ci) => (
          <motion.div key={ci} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            transition={{ duration: 0.7, delay: ci * 0.1 }} className="mb-16">
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-heading font-bold uppercase tracking-[0.02em] mb-8 pb-4 border-b-2 border-[#E5C7B1]/40">
              {cat.name}
            </h2>
            <div className="space-y-0">
              {cat.items.map((item, ii) => (
                <div key={ii} className="flex items-center justify-between py-5 border-b border-[#1C1C1C]/8 group hover:bg-[#E5C7B1]/10 px-4 -mx-4 transition-colors">
                  <div className="flex-1">
                    <span className="text-[18px] md:text-[20px] font-heading font-medium">{item.service}</span>
                    <span className="ml-4 text-[14px] text-[#1C1C1C]/40">{item.duration}</span>
                  </div>
                  <span className="text-[20px] md:text-[24px] font-heading font-bold text-[#E5C7B1]">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
          className="bg-[#1C1C1C] text-white rounded-[20px] p-10 md:p-14 text-center">
          <h3 className="text-[28px] font-heading font-bold mb-4">Ready to Book?</h3>
          <p className="text-white/60 text-[16px] mb-8 max-w-[450px] mx-auto">Prices may vary. Contact us for a personalized consultation.</p>
          <a href="/contact" className="inline-flex bg-[#E5C7B1] text-[#1C1C1C] px-10 py-4 rounded-full text-[13px] font-bold uppercase tracking-[0.1em]" data-cursor="book">
            BOOK NOW
          </a>
        </motion.div>
      </div>
    </main>
  );
}
