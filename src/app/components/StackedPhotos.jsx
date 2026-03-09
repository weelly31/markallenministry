"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "lucide-react";

export default function StackedPhotos({ images }) {
  const [stack, setStack] = useState(images);
  const [flipping, setFlipping] = useState(false);

  const handleClick = () => {
    if (flipping || stack.length <= 1) return;
    setFlipping(true);
    setTimeout(() => {
      setStack((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setFlipping(false);
    }, 300);
  };

  const visibleCards = stack.slice(0, 3);

  // Responsive: use a ref-free approach with CSS variables
  const W = 220;
  const H = 260;

  return (
    <div className="flex flex-col items-center gap-4 select-none w-full">
      {/* Stack container */}
      <div
        className="relative cursor-pointer mx-auto"
        style={{ width: W, height: H + 16 }}
        onClick={handleClick}
        title="Click to view more"
      >
        {/* Back card */}
        {visibleCards.length >= 3 && (
          <div
            className="absolute rounded-2xl overflow-hidden border-2 border-white/80 shadow-lg"
            style={{
              width: W - 30,
              height: H - 30,
              top: 16,
              left: "50%",
              transform: "translateX(-50%) rotate(6deg)",
              zIndex: 1,
            }}
          >
            <img src={visibleCards[2].src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        )}

        {/* Middle card */}
        {visibleCards.length >= 2 && (
          <div
            className="absolute rounded-2xl overflow-hidden border-2 border-white/90 shadow-lg"
            style={{
              width: W - 16,
              height: H - 16,
              top: 8,
              left: "50%",
              transform: "translateX(-50%) rotate(-3deg)",
              zIndex: 2,
            }}
          >
            <img src={visibleCards[1].src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/12" />
          </div>
        )}

        {/* Front card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={stack[0].src}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="absolute rounded-2xl overflow-hidden border-2 border-white shadow-2xl"
            style={{
              width: W,
              height: H,
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
            }}
          >
            <img
              src={stack[0].src}
              alt={stack[0].caption || ""}
              className="w-full h-full object-cover"
            />
            {/* Caption bar */}
            {stack[0].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="text-white text-xs font-medium">{stack[0].caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Count badge */}
        {stack.length > 1 && (
          <div className="absolute top-2 right-2 z-10 bg-[#d4a853] text-[#0f172a] text-[11px] font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg">
            {stack.length}
          </div>
        )}
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 items-center">
        {stack.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === 0 ? "w-5 h-2 bg-[#d4a853]" : "w-2 h-2 bg-white/25"
            }`}
          />
        ))}
      </div>

      {/* Hint */}
      <div className="flex items-center gap-1.5 text-white/40 text-[11px] tracking-wider uppercase">
        <Images className="w-3 h-3" />
        <span>tap to flip</span>
      </div>
    </div>
  );
}