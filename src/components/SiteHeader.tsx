"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDF7F2]/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-10 h-20">
        {/* Logo with star icon */}
        <a href="/" className="flex items-center gap-2 font-heading text-[22px] font-bold tracking-[-0.02em] uppercase">
          {/* Sparkle/star icon */}
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-[#E5C7B1]">
            <path d="M16 2L17.5 8L24 6L19 11L26 14L19 15L24 22L17.5 18L16 26L14.5 18L8 22L13 15L6 14L13 11L8 6L14.5 8L16 2Z" fill="currentColor"/>
            <circle cx="8" cy="4" r="1.5" fill="currentColor" opacity="0.7"/>
            <circle cx="26" cy="8" r="1" fill="currentColor" opacity="0.5"/>
            <circle cx="6" cy="20" r="1" fill="currentColor" opacity="0.5"/>
          </svg>
          VINTAGE
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/" className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#E5A87C] transition-opacity">HOME</a>
          <a href="/about" className="text-[13px] font-semibold tracking-[0.08em] uppercase hover:opacity-60 transition-opacity">ABOUT</a>
          <a href="/pricing" className="text-[13px] font-semibold tracking-[0.08em] uppercase hover:opacity-60 transition-opacity">PRICING</a>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="text-[13px] font-semibold tracking-[0.08em] uppercase flex items-center gap-1.5 hover:opacity-60 transition-opacity py-6">
              PAGES
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-[#FDF7F2] border border-[#E5DED9] shadow-lg rounded-2xl py-3 w-44"
                >
                  <a href="/blog" className="block px-5 py-2.5 text-[13px] font-medium hover:bg-[#F0EAE5] transition-colors">Blog</a>
                  <a href="/career" className="block px-5 py-2.5 text-[13px] font-medium hover:bg-[#F0EAE5] transition-colors">Career</a>
                  <a href="/service" className="block px-5 py-2.5 text-[13px] font-medium hover:bg-[#F0EAE5] transition-colors">Services</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/contact" className="text-[13px] font-semibold tracking-[0.08em] uppercase hover:opacity-60 transition-opacity">CONTACT</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-[#E5C7B1] text-[#1C1C1C] px-7 py-3 rounded-full text-[13px] font-bold uppercase tracking-[0.06em]"
          >
            BOOK NOW
          </motion.a>
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#FDF7F2] border-t border-[#E5DED9] overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              <a href="/" className="text-[14px] font-semibold tracking-[0.08em] uppercase text-[#E5A87C]">HOME</a>
              <a href="/about" className="text-[14px] font-semibold tracking-[0.08em] uppercase">ABOUT</a>
              <a href="/pricing" className="text-[14px] font-semibold tracking-[0.08em] uppercase">PRICING</a>
              <a href="/blog" className="text-[14px] font-semibold tracking-[0.08em] uppercase">BLOG</a>
              <a href="/career" className="text-[14px] font-semibold tracking-[0.08em] uppercase">CAREER</a>
              <a href="/service" className="text-[14px] font-semibold tracking-[0.08em] uppercase">SERVICES</a>
              <a href="/contact" className="text-[14px] font-semibold tracking-[0.08em] uppercase">CONTACT</a>
              <a href="/contact" className="bg-[#E5C7B1] text-center text-[#1C1C1C] px-7 py-3 rounded-full text-[13px] font-bold uppercase tracking-[0.06em] mt-2">BOOK NOW</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
