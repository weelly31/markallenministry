
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MinistryTimeline from "./components/MinistryTimeline";
import GallerySection from "./components/GallerySection";
import SkillsSection from "./components/SkillsSection";
import VisionSection from "./components/VisionSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#faf7f2]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MinistryTimeline />
      <GallerySection />
      <SkillsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </div>
  );
}