
"use client"

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-24 md:py-32 bg-[#0f172a] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4a853]/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d4a853]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-sm font-medium mb-3">Purpose</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ministry Vision</h2>
          <div className="mt-4 h-px w-16 bg-[#d4a853] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-14"
        >
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center">
            My vision in ministry is to see believers grow in their faith, become committed disciples of Christ, 
            and actively serve in the mission of the church. I desire to help build a Christ-centered community 
            where people experience spiritual transformation through God's Word, worship, and discipleship.
          </p>
        </motion.div>

        {/* Life Verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Quote className="w-10 h-10 text-[#d4a853]/40 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-relaxed">
            "The Lord is my shepherd; I shall not want."
          </blockquote>
          <p className="mt-4 text-[#d4a853] tracking-wider text-sm font-medium">
            Psalm 23:1 — Life Verse
          </p>
        </motion.div>
      </div>
    </section>
  );
}