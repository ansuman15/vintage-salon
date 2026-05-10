"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "The personalized service exceeded my expectations, making each visit.",
    author: "Emma Turner",
    image: "/images/asset_48.jpg",
  },
  {
    quote: "Vintage Beauty Salon Spa is my go-to for all things beauty and relaxation",
    author: "Sophie Taylor",
    image: "/images/asset_49.jpg",
  },
  {
    quote: "I had the most amazing experience at Vintage Spa. The Staff make me feel welcome and comfortable.",
    author: "Bency Smith",
    image: "/images/asset_50.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

export function ClientStories() {
  return (
    <section className="py-20 md:py-28 bg-[#FDF7F2] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-14 md:mb-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-heading font-bold uppercase leading-[1.05] tracking-[-0.01em]"
          >
            CLIENT STORIES
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/55 max-w-[420px] lg:text-right italic"
          >
            Discover joy and inspiration through heartfelt testimonials,
            sharing radiant beauty experiences.
          </motion.p>
        </div>

        {/* Testimonial cards with decorative circle */}
        <div className="relative">
          {/* Decorative circle behind center card */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-[#E5C7B1]/25 pointer-events-none z-0" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[6px] cursor-pointer"
              >
                {/* Portrait image */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src={t.image}
                    alt={t.author}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Hover overlay with quote */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-white text-[15px] md:text-[16px] leading-[1.6] mb-4 italic">
                        {t.quote}
                      </p>
                      <span className="text-white/80 text-[14px] font-semibold">
                        -{t.author}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
