"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const offers = [
  {
    title: "FIRST TIMER",
    discount: "Enjoy 20% Off",
    desc: "Romantic beauty treatments for a dazzling Valentine's Day glow.",
    image: "/images/asset_30.jpg",
    href: "/contact",
  },
  {
    title: "BIRTHDAY",
    discount: "Enjoy 10% Off",
    desc: "Romantic beauty treatments for a dazzling Valentine's Day glow.",
    image: "/images/asset_31.jpg",
    href: "/contact",
  },
  {
    title: "WEDDING",
    discount: "Enjoy 25% Off",
    desc: "Romantic beauty treatments for a dazzling Valentine's Day glow.",
    image: "/images/asset_32.jpg",
    href: "/contact",
  },
  {
    title: "FESTIVE SEASON",
    discount: "Enjoy 15% Off",
    desc: "Romantic beauty treatments for a dazzling Valentine's Day glow.",
    image: "/images/asset_33.jpg",
    href: "/contact",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

export function SpecialCollections() {
  return (
    <section className="bg-[#1C1C1C]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {offers.map((offer, i) => (
          <motion.a
            key={i}
            href={offer.href}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer"
            data-cursor="book"
          >
            {/* Background image */}
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
              {/* Title — always visible */}
              <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-heading font-bold text-white uppercase tracking-[0.02em] mb-0 group-hover:mb-4 transition-all duration-500">
                {offer.title}
              </h3>

              {/* Hover reveal content */}
              <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block bg-[#1C1C1C] text-white text-[14px] font-bold px-5 py-2 rounded-full mb-3">
                  {offer.discount}
                </span>
                <p className="text-[15px] text-white/80 leading-[1.6] max-w-[380px]">
                  {offer.desc}
                </p>
              </div>
            </div>

            {/* Book circle — appears on hover */}
            <div className="absolute top-1/2 right-8 md:right-12 -translate-y-1/2 w-[70px] h-[70px] rounded-full border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
              <span className="text-white text-[13px] font-semibold">Book</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
