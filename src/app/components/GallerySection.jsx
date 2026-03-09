"use client"

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const PROFILE_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_685b67d505e6414317f5ae8c/62150728d_profile.jpg";

const galleryImages = [
  {
    src: PROFILE_IMAGE,
    caption: "Pastor Mark Allen Andrade",
  },
  {
    src: "img/worship1.jpg",
    caption: "Worship Service",
  },
  {
    src: "img/worship2.jpg",
    caption: "Church Annivesary",
  },
  {
    src: "img/worship3.jpg",
    caption: "Youth Camp ",
  },
  {
    src: "img/worship4.jpg",
    caption: "Youth Camp",
  },
  {
    src: "img/worship5.jpg",
    caption: "Community Service-Giving packed",
  },
{
    src: "img/worship6.jpg",
    caption: "Community Service-Giving packed",
  },
  {
    src: "img/worship7.jpg",
    caption: "Community Service-Giving packed",
  },
   {
    src: "img/biblestudy.jpg",
    caption: "Bible Study",
  },
  {
    src: "img/biblestudy2.jpg",
    caption: "Bible Study",
  },
   {
    src: "img/biblestudy3.jpg",
    caption: "Bible Study",
  },
    {
    src: "img/gallery1.jpg",
    caption: "Fellowship",
  },
  {
    src: "img/gallery2.jpg",
    caption: "Children Ministry",
  },
  {
    src: "img/gallery3.jpg",
    caption: "Christmas Party",
  },
  {
    src: "img/gallery4.jpg",
    caption: "Youth & Young Professionals Fellowship",
  },
  {
    src: "img/gallery5.jpg",
    caption: "DVBS | Children Ministry",
  },
  {
    src: "img/gallery6.jpg",
    caption: "Youth & Young Professionals Fellowshi",
  },
  {
    src: "img/gallery7.jpg",
    caption: "Christmas Party 2025",
  },
  {
    src: "img/gallery8.jpg",
    caption: "Koinonia",
  },
  {
    src: "img/gallery9.jpg",
    caption: "Leaders",
  },
  {
    src: "img/gallery10.jpg",
    caption: "Anniversary Special",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    if (lightboxOpen) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, lightboxOpen]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-sm font-medium mb-3">Moments</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">Ministry Gallery</h2>
          <div className="mt-4 h-px w-16 bg-[#d4a853] mx-auto" />
        </motion.div>

        {/* Main Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto group"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].caption}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            />
          </AnimatePresence>

          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
            <p className="text-white text-lg font-medium">{galleryImages[currentIndex].caption}</p>
            <p className="text-white/60 text-sm mt-1">{currentIndex + 1} / {galleryImages.length}</p>
          </div>

          {/* Expand button */}
          <button
            onClick={() => openLightbox(currentIndex)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-[#d4a853]" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              onClick={() => {
                setCurrentIndex(i);
                openLightbox(i);
              }}
              className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group/thumb transition-all duration-300 ${
                i === currentIndex ? "ring-2 ring-[#d4a853] ring-offset-2 ring-offset-[#faf7f2]" : "opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].caption}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-white/50 text-center text-sm mt-1">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}