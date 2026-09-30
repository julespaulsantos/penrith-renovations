import React from "react";
import ContactSection from "@/components/ContactSection";
import StressFreeBanner from "@/components/StressFreeBanner";

export const metadata = {
  title: "Contact Us & Book Free Site Consultation | Penrith Renovations",
  description:
    "Contact NP4 Building Pty Ltd to discuss your designer kitchen or luxury bathroom renovation. Call Philmoor on 0497 985 592 or request an on-site consultation.",
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-10 bg-[#FAF7F2]">
      {/* Header */}
      <section className="bg-[#183324] text-[#FAF7F2] py-16 px-4 sm:px-8 border-b border-[#244C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8DA792] font-bold">
              Get Started
            </span>
            <div className="h-0.5 w-12 bg-[#8DA792] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#FAF7F2] mb-6">
            Contact &amp; <span className="font-light text-[#A4C4AD]">Consultation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#D2E2D7] font-normal leading-relaxed">
            Ready to bring your kitchen or bathroom vision to life? Contact director Philmoor Galon directly or complete the form below to book your free on-site feasibility inspection.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      <StressFreeBanner />
    </main>
  );
}
