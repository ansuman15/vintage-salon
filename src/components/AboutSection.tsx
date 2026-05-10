"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
} as const;

export function AboutSection() {
  return (
    <section className="bg-[#FDF7F2]">
      {/* About Us — Overlapping Images Layout */}
      <div className="relative py-0">
        <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
          {/* Left large image — flush left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="lg:w-[52%] relative min-h-[400px] lg:min-h-[700px]"
          >
            <Image
              src="/images/asset_13.jpg"
              alt="Hand with flowers — beauty treatment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </motion.div>

          {/* Right side — text + smaller image */}
          <div className="flex-1 relative flex flex-col">
            {/* White text card — overlapping the left image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="bg-[#FDF7F2] lg:absolute lg:left-[-80px] lg:top-[55%] lg:-translate-y-1/2 z-10 p-8 md:p-12 lg:p-14 max-w-[520px]"
            >
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-heading font-bold uppercase leading-[1.05] tracking-[-0.01em] mb-6">
                ABOUT US
              </h2>
              <p className="text-[16px] leading-[1.75] text-[#1C1C1C]/65 mb-8">
                Unveil the essence of Vintage—a concept born from the fusion of expertise and elegance. Our idea: Enhance natural beauty, promote radiant skin, and create personalized, uplifting experiences.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center bg-[#1C1C1C] text-white px-10 py-4 w-fit text-[13px] font-bold uppercase tracking-[0.12em]"
              >
                BOOK NOW
              </motion.a>
            </motion.div>

            {/* Smaller right image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block absolute right-0 top-0 w-[280px] h-[380px] xl:w-[320px] xl:h-[420px]"
            >
              <Image
                src="/images/asset_25.jpg"
                alt="Salon ambiance — dried flowers and candles"
                fill
                className="object-cover"
                sizes="320px"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Steps — with SVG icons */}
      <div className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {/* Step 1: Discover Availability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="text-[#E5C7B1]">
                  <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="2"/>
                  <path d="M28 16v12l8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M44 20c2 3 3 7 3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M48 28l-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M46 22l-3 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[20px] md:text-[22px] font-heading font-bold mb-3">Discover Availability</h3>
              <p className="text-[15px] text-[#1C1C1C]/55 leading-[1.65] max-w-[280px]">
                Explore and choose a convenient time slot that suits your schedule
              </p>
            </motion.div>

            {/* Step 2: Book Your Session */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="text-[#E5C7B1]">
                  <path d="M28 8L20 28H36L28 8Z" fill="currentColor" opacity="0.15"/>
                  <path d="M28 8L20 28H36L28 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="28" cy="20" r="3" fill="currentColor"/>
                  <path d="M24 28v16h8V28" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 44h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[20px] md:text-[22px] font-heading font-bold mb-3">Book Your Session</h3>
              <p className="text-[15px] text-[#1C1C1C]/55 leading-[1.65] max-w-[280px]">
                Book your preferred service effortlessly with our user-friendly system
              </p>
            </motion.div>

            {/* Step 3: Enjoy Expert Care */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="text-[#E5C7B1]">
                  <path d="M16 38h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18 38V26c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 24l6-10 6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="28" cy="18" r="2" fill="currentColor"/>
                  <path d="M24 42c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[20px] md:text-[22px] font-heading font-bold mb-3">Enjoy Expert Care</h3>
              <p className="text-[15px] text-[#1C1C1C]/55 leading-[1.65] max-w-[280px]">
                Exceptional beauty by skilled, dedicated professionals
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
