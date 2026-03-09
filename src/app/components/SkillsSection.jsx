

"use client"

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Calculator } from "lucide-react";

const ministrySkills = [
  "Spiritual Mentoring and Discipleship",
  "Bible Teaching and Small Group Facilitation",
  "Youth Leadership and Camp Organization",
  "Worship Leadership and Music Ministry",
  "Program Planning and Event Coordination",
  "Leadership Development",
];

const education = [
  {
    degree: "Bachelor of Arts in Theology (ABTh)",
    major: "Major in Pastoral Studies (Units Completed)",
    school: "Philippine International College",
    period: "2023 – 2024",
  },
  {
    degree: "Bachelor of Science in Commerce",
    major: "Major in Management Accounting",
    school: "Colegio de San Sebastian",
    period: "2008 – 2012",
  },
];

const secularSkills = [
  "Accounts Payable & Financial Reporting",
  "Audit Support & Ledger Reconciliation",
  "NetSuite/Oracle & Microsoft Dynamics 365",
  "Microsoft Office Suite",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-sm font-medium mb-3">Competencies</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">Skills & Education</h2>
          <div className="mt-4 h-px w-16 bg-[#d4a853] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ministry Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#faf7f2] rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Ministry Skills</h3>
            </div>
            <ul className="space-y-3">
              {ministrySkills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="w-2 h-2 rounded-full bg-[#d4a853] mt-2 shrink-0" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#faf7f2] rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <p className="text-[#d4a853] text-xs font-medium tracking-wider uppercase">{edu.period}</p>
                  <h4 className="font-bold text-[#0f172a] mt-1">{edu.degree}</h4>
                  <p className="text-gray-500 text-sm mt-0.5">{edu.major}</p>
                  <p className="text-gray-400 text-sm">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#faf7f2] rounded-2xl p-8 border border-gray-100 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#d4a853]" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">Professional</h3>
            </div>
            <p className="text-[#d4a853] text-xs font-medium tracking-wider uppercase mb-1">10+ Years</p>
            <h4 className="font-bold text-[#0f172a]">Accounting Professional</h4>
            <ul className="mt-4 space-y-3">
              {secularSkills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="w-2 h-2 rounded-full bg-[#d4a853] mt-2 shrink-0" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}