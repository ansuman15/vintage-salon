"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const yWatermark = useTransform(scrollYProgress, [0, 0.3], [0, 60]);

  return (
    <section className="relative min-h-screen bg-[#FDF7F2] overflow-hidden pt-20">
      {/* Main Content Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-12 pb-16 lg:pt-0 lg:pb-0 relative z-10 max-w-[720px]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title text-[clamp(3.2rem,7.5vw,5.8rem)] font-heading font-bold uppercase leading-[0.92] tracking-[0.02em] mb-10"
          >
            ELITE BEAUTY<br />SPA HAVEN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/65 max-w-[480px] mb-10 font-normal"
          >
            Discover the art of beauty in our luxurious studio. Personalized
            services that enhance your natural radiance. Our expert team uses
            premium products, providing top-notch treatments in a relaxing
            ambiance.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center bg-[#1C1C1C] text-white px-10 py-4 w-fit text-[13px] font-bold uppercase tracking-[0.12em]"
            data-cursor="book"
          >
            BOOK NOW
          </motion.a>

          {/* "Beauty" watermark text — at bottom-left of content area */}
          <motion.div
            style={{ y: yWatermark }}
            className="mt-8 lg:mt-auto pointer-events-none select-none"
          >
            <span
              className="text-[clamp(5rem,12vw,10rem)] font-heading font-bold italic leading-none tracking-[-0.02em] block"
              style={{
                WebkitTextStroke: "1.5px rgba(28,28,28,0.08)",
                color: "transparent",
              }}
            >
              Beauty
            </span>
          </motion.div>
        </div>

        {/* Right Image — flush to edge */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:w-[52%] relative min-h-[400px] lg:min-h-0"
        >
          <div className="relative w-full h-full lg:absolute lg:inset-0">
            <Image
              src="/images/asset_1.jpg"
              alt="Elite Beauty Spa Haven — luxury facial treatment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
              priority
            />
          </div>

          {/* Rotating Badge — dark circle, positioned at bottom-center of hero, overlapping image edge */}
          <div className="absolute bottom-0 left-0 lg:-left-[70px] translate-y-1/3 w-[130px] h-[130px] md:w-[150px] md:h-[150px] z-20">
            <div className="w-full h-full bg-[#1C1C1C] rounded-full flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="w-full h-full absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="heroBadgeCircle"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="transparent"
                  />
                  <text className="text-[10px] font-bold tracking-[0.3em] uppercase fill-white">
                    <textPath href="#heroBadgeCircle" startOffset="0%">
                      FOREVER BEAUTY WITH VINTAGE •{" "}
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              {/* Center star icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#E5C7B1]">
                  <path d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5L12 2Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
