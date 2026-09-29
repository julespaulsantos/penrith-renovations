import React from "react";
import Hero from "@/components/Hero";
import VisionBanner from "@/components/VisionBanner";
import SeamlessHomes from "@/components/SeamlessHomes";
import CollaborativeProcess from "@/components/CollaborativeProcess";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import StressFreeBanner from "@/components/StressFreeBanner";
import ServicesShowcase from "@/components/ServicesShowcase";
import CostEstimator from "@/components/CostEstimator";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section with Background Slideshow modeled after McGirr */}
      <Hero />

      {/* 2. Core Value Quote Banner */}
      <VisionBanner />

      {/* 3. Building Seamless Homes Section */}
      <SeamlessHomes />

      {/* 4. A Collaborative Build Process (5 Steps) */}
      <CollaborativeProcess />

      {/* 5. Featured Projects Showcase (4-Column Grid + Modals) */}
      <ProjectsShowcase limit={4} />

      {/* 6. Stress Free Building Journey Banner */}
      <StressFreeBanner />

      {/* 7. Comprehensive Services Showcase */}
      <ServicesShowcase />

      {/* 8. Interactive Renovation Cost Estimator */}
      <CostEstimator />

      {/* 9. Verified Client Testimonials */}
      <Testimonials />

      {/* 10. Consultation Request & Contact Form */}
      <ContactSection />
    </main>
  );
}
