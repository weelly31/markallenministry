

"use client"

import { motion } from "framer-motion";
import { BookOpen, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "Discipleship",
    desc: "Guiding believers to grow deeper in their faith through the Word of God",
  },
  {
    icon: Heart,
    title: "Worship",
    desc: "Leading people into the presence of God through authentic worship",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Building Christ-centered communities rooted in love and accountability",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-sm font-medium mb-3">About</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">Personal Profile</h2>
          <div className="mt-4 h-px w-16 bg-[#d4a853] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-center">
            A ministry-driven leader with a passion for discipleship, worship, and spiritual formation. 
            With years of leadership experience in church ministry, youth development, and worship leadership, 
            my desire is to help individuals grow in their relationship with Christ and develop spiritually mature 
            Christian communities.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#d4a853]/20 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0f172a] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#d4a853] transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#d4a853] group-hover:text-[#0f172a] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4a853]" />
            <span>Age: <strong className="text-[#0f172a]">33</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4a853]" />
            <span>Civil Status: <strong className="text-[#0f172a]">Married</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4a853]" />
            <span>Nationality: <strong className="text-[#0f172a]">Filipino</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}