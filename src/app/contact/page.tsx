import React from "react";
import ContactSection from "@/components/ContactSection";
import StressFreeBanner from "@/components/StressFreeBanner";

export const metadata = {
  title: "Contact Us & Book Free Site Consultation | Penrith Renovations",
  description:
    "Contact Penrith Renovations to discuss your home renovation, extension, kitchen, or bathroom project. Call Marcus on 0488 921 345 or request an on-site consultation.",
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-10 bg-[#141518]">
      {/* Header */}
      <section className="bg-[#141518] text-white py-16 px-4 sm:px-8 border-b border-[#292e37]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Get Started
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            Contact &amp; <span className="font-light text-zinc-400">Consultation</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Ready to bring your home vision to life? Contact our director Marcus Vance directly or complete the form below to book your free on-site feasibility inspection.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      <StressFreeBanner />
    </main>
  );
}
