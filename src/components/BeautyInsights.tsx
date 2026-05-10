"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    title: "PROTECTING YOUR HAIR FROM HEAT DAMAGE",
    desc: "Dive into our comprehensive guide to discover essential strategies for safeguarding your strands from the harmful effects of heat styling",
    image: "/images/asset_51.jpg",
    href: "/blog/protecting-your-hair-from-heat-damage",
  },
  {
    title: "ACHIEVING SALON-QUALITY NAILS AT HOME",
    desc: "Dive into our guide to discover essential tips and techniques for achieving salon-quality nails without ever leaving your house.",
    image: "/images/asset_52.jpg",
    href: "/blog/achieving-salon-quality-nails-at-home",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

export function BeautyInsights() {
  return (
    <section className="py-20 md:py-28 bg-[#FDF7F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-14">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-heading font-bold uppercase leading-[1.05] tracking-[-0.01em]"
          >
            BEAUTY INSIGHTS
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/55 max-w-[420px] lg:text-right italic"
          >
            Explore our blog for the latest beauty trends, tips, and expert
            insights. Your guide to beauty starts here.
          </motion.p>
        </div>

        {/* Blog posts — two column large images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-[18px] md:text-[20px] font-heading font-bold uppercase tracking-[0.02em] mb-3 group-hover:opacity-70 transition-opacity">
                {post.title}
              </h3>
              <p className="text-[14px] text-[#1C1C1C]/55 leading-[1.65]">
                {post.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
