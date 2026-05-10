"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorMode = "default" | "click" | "book" | "magnify" | "explore";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [cursorSize, setCursorSize] = useState(24);

  const getCursorConfig = useCallback((mode: CursorMode) => {
    switch (mode) {
      case "book":
        return { size: 80, label: "Book", bg: "bg-[#E5C7B1]", text: "text-[#1C1C1C]" };
      case "magnify":
        return { size: 100, label: "", bg: "bg-[#1C1C1C]/20", text: "text-white" };
      case "explore":
        return { size: 70, label: "View", bg: "bg-[#1C1C1C]", text: "text-white" };
      case "click":
        return { size: 70, label: "Click", bg: "bg-[#1C1C1C]", text: "text-white" };
      default:
        return { size: 24, label: "", bg: "bg-[#1C1C1C]", text: "text-white" };
    }
  }, []);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for data-cursor attribute first (explicit cursor hints)
      const cursorHint = target.closest("[data-cursor]");
      if (cursorHint) {
        const hint = (cursorHint as HTMLElement).dataset.cursor as CursorMode;
        setCursorMode(hint);
        const config = getCursorConfig(hint);
        setCursorSize(config.size);
        return;
      }

      // Magnify on large headings (h1, h2) and hero text
      const heading = target.closest("h1, h2, .hero-title");
      if (heading) {
        const el = heading as HTMLElement;
        const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
        setCursorMode("magnify");
        // Scale cursor based on font size
        setCursorSize(Math.min(Math.max(fontSize * 1.5, 60), 140));
        return;
      }

      // "Book" on elements with booking-related content
      const bookElement = target.closest("[data-cursor-book], .book-cursor");
      if (bookElement) {
        setCursorMode("book");
        setCursorSize(80);
        return;
      }

      // "Explore" on gallery images
      const galleryImage = target.closest("[data-cursor-explore]");
      if (galleryImage) {
        setCursorMode("explore");
        setCursorSize(70);
        return;
      }

      // Regular clickable elements
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorMode("click");
        setCursorSize(70);
        return;
      }

      // Default
      setCursorMode("default");
      setCursorSize(24);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [getCursorConfig]);

  if (!isVisible) return null;

  const config = getCursorConfig(cursorMode);
  const halfSize = cursorSize / 2;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      animate={{
        x: mousePosition.x - halfSize,
        y: mousePosition.y - halfSize,
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.15,
      }}
      style={{ mixBlendMode: cursorMode === "magnify" ? "normal" : undefined }}
    >
      <div
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-200 ${
          cursorMode === "magnify"
            ? "bg-[#1C1C1C]/10 backdrop-blur-[2px] border border-[#1C1C1C]/20"
            : cursorMode === "book"
            ? "bg-[#E5C7B1] shadow-lg"
            : "bg-[#1C1C1C]"
        }`}
      >
        <AnimatePresence mode="wait">
          {config.label && (
            <motion.span
              key={config.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className={`text-[11px] font-semibold tracking-wide ${
                cursorMode === "book" ? "text-[#1C1C1C]" : "text-white"
              }`}
            >
              {config.label}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
