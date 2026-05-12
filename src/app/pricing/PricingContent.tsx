"use client";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const pricingData = [
  {
    category: "HAIR CARE",
    services: [
      { name: "Haircut & Styling", price: "from $45" },
      { name: "Color & Highlights", price: "from $120" },
      { name: "Hair Treatments", price: "from $60" },
      { name: "Bridal Styling", price: "from $150" }
    ]
  },
  {
    category: "SKIN CARE",
    services: [
      { name: "Signature Facial", price: "from $85" },
      { name: "Anti-Aging Treatment", price: "from $130" },
      { name: "Acne Clear Facial", price: "from $95" },
      { name: "Microdermabrasion", price: "from $110" }
    ]
  },
  {
    category: "NAIL & BODY",
    services: [
      { name: "Classic Manicure", price: "from $30" },
      { name: "Spa Pedicure", price: "from $45" },
      { name: "Full Body Massage", price: "from $90" },
      { name: "Waxing Services", price: "from $25" }
    ]
  }
];

export function PricingContent() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <motion.h1 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05] mb-16"
        >
          SERVICE PRICING
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingData.map((section, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp} 
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[12px] shadow-sm border border-[#1C1C1C]/5"
            >
              <h2 className="text-[20px] font-heading font-bold uppercase mb-8 pb-4 border-b border-[#1C1C1C]/10 text-[#E5A87C]">
                {section.category}
              </h2>
              <ul className="space-y-6">
                {section.services.map((service, i) => (
                  <li key={i} className="flex justify-between items-end border-b border-dashed border-[#1C1C1C]/20 pb-2">
                    <span className="text-[16px] font-medium text-[#1C1C1C]/80 pr-4 bg-white relative top-[2px]">
                      {service.name}
                    </span>
                    <span className="text-[15px] font-semibold text-[#1C1C1C] bg-white pl-4 relative top-[2px]">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-[15px] text-[#1C1C1C]/60 max-w-[600px] mx-auto mb-8">
            Prices may vary depending on the length and thickness of hair, or specific skin conditions. 
            Complimentary consultations are available for all services.
          </p>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            data-cursor="book"
            className="inline-block bg-[#1C1C1C] text-white px-8 py-4 rounded-full text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-[#E5A87C] transition-colors"
          >
            BOOK APPOINTMENT
          </a>
        </motion.div>
      </div>
    </main>
  );
}
