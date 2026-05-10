"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Do you offer virtual consultations for beauty advice?", a: "Visit our website or call our salon to schedule your preferred beauty service." },
  { q: "What is the average duration of a beauty session?", a: "A typical beauty session lasts between 45 minutes to 2 hours, depending on the services selected." },
  { q: "Are walk-ins accepted, or do I need to make an appointment?", a: "While we welcome walk-ins, we recommend booking an appointment to ensure availability and minimal wait times." },
  { q: "Can I bring my own beauty products for the session?", a: "You are welcome to bring your own products. Our specialists will assess compatibility and advise accordingly." },
  { q: "Are your beauty professionals certified and experienced?", a: "All our professionals are fully certified, licensed, and have extensive experience in their respective fields." },
  { q: "Do you host beauty events or workshops?", a: "Yes! We regularly host beauty workshops and events. Follow us on social media or subscribe to our newsletter for updates." },
  { q: "What payment methods do you accept for beauty services?", a: "We accept cash, all major credit/debit cards, and digital payment methods including Apple Pay and Google Pay." },
  { q: "Is there a minimum age requirement for beauty services", a: "Most services are available for clients aged 16 and above. Some treatments may require parental consent for minors." },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  return (
    <section className="py-20 md:py-28 bg-[#2B2B2B] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-heading font-normal tracking-[-0.01em]"
          >
            FAQs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-white/55 max-w-[420px] lg:text-right italic"
          >
            Simplify your experience with answers to common queries, guiding you
            through a seamless journey.
          </motion.p>
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {[leftColumn, rightColumn].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {column.map((faq, i) => {
                const idx = colIdx * 4 + i;
                const isOpen = openIdx === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="border border-white/20 rounded-[4px] p-6 hover:border-white/35 transition-colors duration-300"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full flex items-start justify-between text-left cursor-pointer gap-4"
                    >
                      <span className="text-[15px] md:text-[16px] font-medium leading-[1.5]">
                        {faq.q}
                      </span>
                      <span className="text-[20px] font-light shrink-0 mt-0.5 transition-transform duration-300">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/15 mt-4 pt-4">
                            <p className="text-[14px] text-white/55 leading-[1.7]">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
