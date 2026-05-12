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

const values = [
  { title: "Excellence", desc: "We strive for perfection in every treatment, using only the finest products and techniques." },
  { title: "Innovation", desc: "Constantly evolving with the latest beauty trends and advanced skincare technology." },
  { title: "Personalization", desc: "Every client is unique. We tailor each experience to your individual beauty needs." },
  { title: "Sustainability", desc: "Committed to eco-friendly practices and cruelty-free, premium beauty products." },
];

export function AboutContent() {
  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-0">
      {/* Hero Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-20">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#E5C7B1] mb-4 block">ABOUT VINTAGE</span>
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05]">
              OUR STORY
            </h1>
          </motion.div>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/60 max-w-[480px] lg:text-right">
            A journey that began with a passion for enhancing natural beauty has grown into a premier destination for luxurious beauty experiences.
          </motion.p>
        </div>

        {/* Full width image */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] md:h-[550px] rounded-[16px] overflow-hidden mb-20 group" data-cursor="explore">
          <Image src="/images/asset_25.jpg" alt="Vintage Salon luxury interior" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
            <span className="bg-[#E5C7B1] text-[#1C1C1C] px-5 py-2 text-[12px] font-bold uppercase tracking-[0.1em] rounded-full">Est. 2012</span>
          </div>
        </motion.div>

        {/* About Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-heading font-bold uppercase leading-[1.1] mb-6">WHERE BEAUTY<br/>MEETS ARTISTRY</h2>
            <p className="text-[16px] leading-[1.8] text-[#1C1C1C]/60 mb-6">Founded with a vision to redefine the beauty experience, Vintage has become synonymous with elegance, expertise, and personalized care. Our team of skilled professionals combines artistry with advanced techniques.</p>
            <p className="text-[16px] leading-[1.8] text-[#1C1C1C]/60">We use only premium, cruelty-free products and stay at the forefront of beauty innovation to deliver results that exceed expectations.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
            <p className="text-[16px] leading-[1.8] text-[#1C1C1C]/60 mb-6">Every visit to Vintage is a journey of transformation. From the moment you step through our doors, you are enveloped in an atmosphere of luxury and tranquility designed to rejuvenate both body and spirit.</p>
            <p className="text-[16px] leading-[1.8] text-[#1C1C1C]/60 mb-8">We believe beauty is about confidence, self-expression, and the joy that comes from looking and feeling your absolute best.</p>
            <a href="/contact" className="inline-flex bg-[#1C1C1C] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em]" data-cursor="book">
              BOOK A CONSULTATION
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center py-10 border border-[#E5C7B1]/30 rounded-[12px] hover:border-[#E5C7B1] hover:bg-[#E5C7B1]/5 transition-all duration-300">
              <span className="block text-[clamp(2rem,4vw,3.5rem)] font-heading font-bold text-[#E5C7B1] mb-2">{stat.value}</span>
              <span className="text-[13px] text-[#1C1C1C]/55 font-semibold tracking-[0.06em] uppercase">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Two images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
            className="relative h-[350px] md:h-[450px] rounded-[12px] overflow-hidden group" data-cursor="explore">
            <Image src="/images/asset_26.jpg" alt="Vintage team at work" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[350px] md:h-[450px] rounded-[12px] overflow-hidden group" data-cursor="explore">
            <Image src="/images/asset_27.jpg" alt="Premium beauty products" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
          </motion.div>
        </div>
      </div>

      {/* Values — dark section */}
      <section className="bg-[#1C1C1C] text-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16">
            <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#E5C7B1] mb-4 block">WHAT DRIVES US</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-heading font-bold uppercase leading-[1.05]">OUR VALUES</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border border-white/10 rounded-[16px] p-8 md:p-10 hover:border-[#E5C7B1]/40 transition-all duration-300 group">
                <span className="text-[#E5C7B1] text-[14px] font-bold tracking-[0.1em] uppercase mb-4 block">0{i + 1}</span>
                <h3 className="text-[24px] font-heading font-bold mb-4 group-hover:text-[#E5C7B1] transition-colors">{v.title}</h3>
                <p className="text-[15px] text-white/55 leading-[1.7]">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FDF7F2] py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-heading font-bold uppercase leading-[1.05] mb-6">
            READY TO EXPERIENCE<br/>VINTAGE?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] text-[#1C1C1C]/55 max-w-[480px] mx-auto mb-10 leading-[1.7]">
            Book your appointment today and discover why thousands of clients trust Vintage for their beauty journey.
          </motion.p>
          <motion.a href="/contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex bg-[#1C1C1C] text-white px-10 py-4 text-[13px] font-bold uppercase tracking-[0.12em]" data-cursor="book">
            BOOK NOW
          </motion.a>
        </div>
      </section>
    </main>
  );
}
