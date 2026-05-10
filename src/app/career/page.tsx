"use client";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const openings = [
  { title: "Senior Hair Stylist", type: "Full-Time", location: "New York" },
  { title: "Makeup Artist", type: "Full-Time", location: "New York" },
  { title: "Spa Therapist", type: "Part-Time", location: "New York" },
  { title: "Nail Technician", type: "Full-Time", location: "New York" },
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05]">
            JOIN OUR TEAM
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/60 max-w-[420px] lg:text-right">
            We are always looking for passionate beauty professionals to join the Vintage family.
          </motion.p>
        </div>
        <div className="space-y-0 mb-16">
          {openings.map((job, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group flex items-center justify-between py-8 md:py-10 border-b border-[#E5C7B1]/30 hover:bg-[#E5C7B1]/10 px-4 -mx-4 transition-colors cursor-pointer">
              <div>
                <h2 className="text-[22px] md:text-[28px] font-heading font-bold mb-1">{job.title}</h2>
                <div className="flex gap-4 text-[14px] text-[#1C1C1C]/50">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-[#1C1C1C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-white transition-colors">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
          className="bg-[#1C1C1C] text-white rounded-[20px] p-10 md:p-14 text-center">
          <h3 className="text-[28px] font-heading font-bold mb-4">No matching position?</h3>
          <p className="text-white/60 text-[16px] mb-8 max-w-[450px] mx-auto">Send us your resume and we will keep you in mind for future opportunities.</p>
          <a href="/contact" className="inline-flex bg-[#E5C7B1] text-[#1C1C1C] px-10 py-4 rounded-full text-[13px] font-bold uppercase tracking-[0.1em]" data-cursor="book">
            GET IN TOUCH
          </a>
        </motion.div>
      </div>
    </main>
  );
}
