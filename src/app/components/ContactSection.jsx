
"use client"

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "B17 L7 K-10 St., Karangalan Village, San Isidro, Cainta, Rizal",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0994-841-6544",
    href: "tel:09948416544",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lenmark06@gmail.com",
    href: "mailto:lenmark06@gmail.com",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-sm font-medium mb-3">Reach Out</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f172a]">Get In Touch</h2>
          <div className="mt-4 h-px w-16 bg-[#d4a853] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Contact Information</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Feel free to reach out for ministry inquiries, speaking engagements, 
              or any questions about our church community.
            </p>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f172a] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#d4a853]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#0f172a] font-medium hover:text-[#d4a853] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#0f172a] font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] outline-none transition-all text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] outline-none transition-all text-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#d4a853] focus:ring-1 focus:ring-[#d4a853] outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0f172a] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#1e293b] transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}