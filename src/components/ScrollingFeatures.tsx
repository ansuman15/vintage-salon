"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { title: "Radiant Glow", desc: "Experience a radiant transformation with personalized beauty services tailored to enhance your unique allure." },
  { title: "Tranquil Retreats", desc: "Escape into soothing spa retreats, where each session promises tranquility and rejuvenation for your mind and body." },
  { title: "Expert Guidance", desc: "Receive expert guidance from our skilled professionals, ensuring your beauty journey aligns with your unique vision." },
  { title: "Membership Privileges", desc: "Enjoy exclusive privileges and savings with our membership programs, making beauty enhancements luxurious and cost-effective." },
  { title: "Beauty Craft", desc: "Indulge in artisanal beauty craft, where our skilled professionals blend creativity and precision for stunning results." },
  { title: "Beauty Beyond Trends", desc: "Embrace timeless beauty with services that transcend trends, ensuring your radiance is a classic statement of elegance." },
];

const FlowerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#E5C7B1]">
    <circle cx="20" cy="20" r="4" fill="currentColor"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <ellipse
        key={angle}
        cx="20"
        cy="9"
        rx="3"
        ry="5.5"
        fill="currentColor"
        opacity="0.75"
        transform={`rotate(${angle} 20 20)`}
      />
    ))}
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
} as const;

export function ScrollingFeatures() {
  return (
    <section className="py-20 md:py-28 bg-[#FDF7F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left: Tall portrait image (sticky on desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="lg:w-[45%] lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-[8px] overflow-hidden">
              <Image
                src="/images/asset_38.jpg"
                alt="Beauty portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>

          {/* Right: Stacked feature cards */}
          <div className="flex-1 flex flex-col gap-12 md:gap-16 lg:pt-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="text-center lg:text-center"
              >
                <div className="flex justify-center mb-5">
                  <FlowerIcon />
                </div>
                <h3 className="text-[22px] md:text-[24px] font-heading font-bold mb-3">
                  {f.title}
                </h3>
                <p className="text-[15px] text-[#1C1C1C]/55 leading-[1.7] max-w-[380px] mx-auto">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
