"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Skin Care", "Hair Care", "Eye Care", "Body Spa",
  "Makeup", "Nail Art", "Bridal Package", "Other"
];

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "",
    date: "", time: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919876543210"; // Replace with actual number
    const text = `*New Booking Request*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Service:* ${form.service}%0A` +
      `*Date:* ${form.date}%0A` +
      `*Time:* ${form.time}%0A` +
      `*Message:* ${form.message || "N/A"}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen bg-[#FDF7F2] pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16">
          <motion.h1
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-heading font-bold uppercase leading-[1.05] tracking-[-0.02em]"
          >
            BOOK YOUR<br />APPOINTMENT
          </motion.h1>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[16px] leading-[1.75] text-[#1C1C1C]/60 max-w-[420px] lg:text-right"
          >
            Reserve your spot for a premium beauty experience. Our team is ready to enhance your natural radiance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#1C1C1C] text-white rounded-[20px] p-12 text-center min-h-[400px] flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#E5C7B1] flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="text-[28px] font-heading font-bold mb-3">Booking Confirmed!</h3>
                <p className="text-white/60 text-[16px] max-w-[380px]">
                  Redirecting you to WhatsApp to complete your booking...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-semibold tracking-[0.06em] uppercase mb-2 text-[#1C1C1C]/70">Full Name *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-[#1C1C1C]/15 focus:border-[#E5C7B1] py-4 text-[16px] outline-none transition-colors placeholder:text-[#1C1C1C]/30"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold tracking-[0.06em] uppercase mb-2 text-[#1C1C1C]/70">Phone Number *</label>
                    <input
                      type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-[#1C1C1C]/15 focus:border-[#E5C7B1] py-4 text-[16px] outline-none transition-colors placeholder:text-[#1C1C1C]/30"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold tracking-[0.06em] uppercase mb-2 text-[#1C1C1C]/70">Email Address</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#1C1C1C]/15 focus:border-[#E5C7B1] py-4 text-[16px] outline-none transition-colors placeholder:text-[#1C1C1C]/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold tracking-[0.06em] uppercase mb-2 text-[#1C1C1C]/70">Select Service *</label>
                  <select
                    name="service" required value={form.service} onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#1C1C1C]/15 focus:border-[#E5C7B1] py-4 text-[16px] outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Choose a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-semibold tracking-[0.06em] uppercase mb-2 text-[#1C1C1C]/70">Preferred Date *</label>
                    <input
                      type="date" name="date" required value={form.date} onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-[#1C1C1C]/15 focus:border-[#E5C7B1] py-4 text-[16px] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold tracking-[0.06em] uppercase mb-2 text-[#1C1C1C]/70">Preferred Time *</label>
                    <select
                      name="time" required value={form.time} onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-[#1C1C1C]/15 focus:border-[#E5C7B1] py-4 text-[16px] outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold tracking-[0.06em] uppercase mb-2 text-[#1C1C1C]/70">Special Requests</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={3}
                    className="w-full bg-transparent border-b-2 border-[#1C1C1C]/15 focus:border-[#E5C7B1] py-4 text-[16px] outline-none transition-colors resize-none placeholder:text-[#1C1C1C]/30"
                    placeholder="Any special requests or notes..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1C1C1C] text-white py-5 text-[14px] font-bold uppercase tracking-[0.12em] mt-4 hover:bg-[#333] transition-colors"
                  data-cursor="book"
                >
                  BOOK VIA WHATSAPP
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="bg-[#1C1C1C] text-white rounded-[20px] p-8">
              <h3 className="text-[20px] font-heading font-bold mb-6">Visit Us</h3>
              <div className="space-y-5 text-[15px] text-white/70 leading-[1.7]">
                <div>
                  <span className="block text-white/40 text-[12px] font-semibold tracking-[0.1em] uppercase mb-1">Address</span>
                  123 Beauty Lane, Luxury District<br />New York, NY 10001
                </div>
                <div>
                  <span className="block text-white/40 text-[12px] font-semibold tracking-[0.1em] uppercase mb-1">Phone</span>
                  +1 (555) 123-4567
                </div>
                <div>
                  <span className="block text-white/40 text-[12px] font-semibold tracking-[0.1em] uppercase mb-1">Email</span>
                  hello@vintagesalon.com
                </div>
                <div>
                  <span className="block text-white/40 text-[12px] font-semibold tracking-[0.1em] uppercase mb-1">Hours</span>
                  Mon–Sat: 10:00 AM – 8:00 PM<br />Sunday: 11:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            <div className="border border-[#E5C7B1]/40 rounded-[20px] p-8">
              <h3 className="text-[20px] font-heading font-bold mb-4">Why Book With Us?</h3>
              <ul className="space-y-3 text-[15px] text-[#1C1C1C]/65 leading-[1.7]">
                <li className="flex items-start gap-3">
                  <span className="text-[#E5C7B1] mt-1">✦</span>
                  Instant WhatsApp confirmation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E5C7B1] mt-1">✦</span>
                  Premium products & expert stylists
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E5C7B1] mt-1">✦</span>
                  Flexible rescheduling
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E5C7B1] mt-1">✦</span>
                  First-timer 20% discount
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
