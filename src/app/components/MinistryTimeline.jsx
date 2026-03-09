
"use client"

import { motion } from "framer-motion";
import { Church, Music, Users, Tent, Briefcase, HeartHandshake } from "lucide-react";
import StackedPhotos from "./StackedPhotos";

const roles = [
  {
    icon: Church,
    title: "Associate Pastor",
    org: "The Living Saviour Christian Fellowship",
    location: "Binangonan, Rizal",
    period: "2023 – Present",
    items: [
      "Assist in pastoral leadership, preaching, and discipleship",
      "Support spiritual development programs and church ministries",
    ],
    photos: [
      { src: "img/preaching1.jpg", caption: "Preaching" },
      { src: "img/preaching2.jpg", caption: "Preaching" },
      { src: "img/preaching3.jpg", caption: "Preaching" },
      { src: "img/preaching4.jpg", caption: "Preaching" },
      { src: "img/preaching5.jpg", caption: "Preaching" },
    ],
  },
  {
    icon: Briefcase,
    title: "Program Head Coordinator",
    org: "The Living Saviour Christian Fellowship",
    location: "Binangonan, Rizal",
    period: "2020 – Present",
    items: [
      "Lead planning and coordination of church programs and fellowship activities",
      "Develop themes, program flow, and ministry initiatives",
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", caption: "Event planning" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", caption: "Program coordination" },
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80", caption: "Church event" },
    ],
  },
  {
    icon: HeartHandshake,
    title: "Young Professionals Ministry Adviser",
    org: "The Living Saviour Christian Fellowship",
    location: "Binangonan, Rizal",
    period: "2024 – Present",
    items: [
      "Provide mentorship and spiritual guidance for young professionals",
      "Facilitate discussions on faith, career, and Christian living",
    ],
    photos: [
      { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", caption: "Mentorship" },
      { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80", caption: "Discussion" },
      { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80", caption: "Fellowship" },
    ],
  },
  {
    icon: Tent,
    title: "Youth Camp Director",
    org: "The Living Saviour Christian Fellowship",
    location: "Binangonan, Rizal",
    period: "2019 – Present",
    items: [
      "Direct and organize youth camps and leadership training events",
      "Develop camp themes, sessions, and small group discussions",
    ],
    photos: [
      { src: "img/camp1.jpg", caption: "Youth camp" },
      { src: "img/camp2.jpg", caption: "Youth camp" },
      { src: "img/camp3.jpg", caption: "Youth camp" },
      { src: "img/camp4.jpg", caption: "Youth camp" },
    ],
  },
  {
    icon: Music,
    title: "Musical Director – Worship Team",
    org: "The Living Saviour Christian Fellowship",
    location: "Binangonan, Rizal",
    period: "2015 – Present",
    items: [
      "Lead and train worship team members",
      "Coordinate worship services and rehearsals",
    ],
    photos: [
      { src: "img/instrument1.jpg", caption: "Worship" },
      { src: "img/instrument2.jpg", caption: "Music ministry" },
      { src: "img/instrument3.jpg", caption: "Praise & worship" },
 
    ],
  },
  {
    icon: Users,
    title: "Men's Ministry Leader",
    org: "The Living Saviour Christian Fellowship",
    location: "Binangonan, Rizal",
    period: "Present",
    items: [
      "Lead discipleship and fellowship gatherings for men",
      "Encourage spiritual leadership and accountability",
    ],
    photos: [
      { src: "img/mens1.jpg", caption: "Men's fellowship" },
      { src: "img/mens2.jpg", caption: "Discipleship" },
      { src: "img/mens3.jpg", caption: "Accountability" },
    ],
  },
];

export default function MinistryTimeline() {
  return (
    <section id="ministry" className="relative py-24 md:py-32 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-sm font-medium mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ministry Involvement</h2>
          <div className="mt-4 h-px w-16 bg-[#d4a853] mx-auto" />
        </motion.div>

        <div className="space-y-10">
          {roles.map((role, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card — equal half */}
                <div className="w-full md:flex-1">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300 group h-full">
                    {/* Period badge */}
                    <span className="inline-block text-[#d4a853] text-xs font-semibold tracking-wider uppercase bg-[#d4a853]/10 px-3 py-1 rounded-full mb-4">
                      {role.period}
                    </span>

                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#d4a853]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a853]/20 transition-colors">
                        <role.icon className="w-5 h-5 text-[#d4a853]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{role.title}</h3>
                        <p className="text-gray-400 text-sm mt-0.5">{role.org}</p>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {role.items.map((item, j) => (
                        <li key={j} className="text-gray-300 text-sm flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853]/70 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider line on desktop */}
                <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-px h-16 bg-[#d4a853]/20" />
                  <div className="w-3 h-3 rounded-full bg-[#d4a853] ring-4 ring-[#0f172a]" />
                  <div className="w-px h-16 bg-[#d4a853]/20" />
                </div>

                {/* Photos — equal half */}
                <div className="w-full md:flex-1 flex justify-center">
                  <StackedPhotos images={role.photos} label={role.title} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}