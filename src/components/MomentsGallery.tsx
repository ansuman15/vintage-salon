"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/images/asset_41.jpg",
  "/images/asset_42.jpg",
  "/images/asset_43.jpg",
  "/images/asset_45.jpg",
  "/images/asset_46.jpg",
  "/images/asset_47.jpg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

export function MomentsGallery() {
  return (
    <section className="py-20 md:py-28 bg-[#1C1C1C] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Text + CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="lg:w-[35%] flex flex-col justify-center"
          >
            <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-heading font-bold italic uppercase leading-[1.05] tracking-[-0.01em] mb-6">
              MOMENTS OF US
            </h2>
            <p className="text-[16px] leading-[1.75] text-white/60 mb-10 max-w-[420px]">
              Capturing the allure of glamorous and chic beauty transformations.
              Explore the images of our Services where you will set your face awe.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center bg-[#E5C7B1] text-[#1C1C1C] px-10 py-4 w-fit text-[13px] font-bold uppercase tracking-[0.12em]"
            >
              BOOK NOW
            </motion.a>
          </motion.div>

          {/* Right: Masonry grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative overflow-hidden group cursor-pointer rounded-[6px] ${
                    i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Gallery moment ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
