"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Vintage completely transformed my look. The attention to detail and the relaxing environment make it my go-to sanctuary.",
    author: "Sarah Jenkins",
    role: "Regular Client"
  },
  {
    quote: "An absolute dream. The team understood exactly what I wanted for my wedding day. I've never felt more beautiful.",
    author: "Emily Chen",
    role: "Bride"
  },
  {
    quote: "The best spa experience I've had. Professional, clean, and incredibly rejuvenating. Highly recommended to everyone.",
    author: "Michael Ross",
    role: "Member"
  }
];

export function TestimonialsCarousel() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted border-y border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="uppercase text-sm tracking-widest font-semibold mb-12 text-muted-foreground">What Our Clients Say</div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="min-w-full snap-center flex flex-col items-center justify-center bg-background rounded-[2rem] p-12"
            >
              <p className="text-2xl md:text-4xl font-heading leading-relaxed mb-10 max-w-3xl">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <div className="font-bold text-lg">{t.author}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
