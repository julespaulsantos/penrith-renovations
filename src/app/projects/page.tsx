import React from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import StressFreeBanner from "@/components/StressFreeBanner";

export const metadata = {
  title: "Recent Projects Gallery | Penrith Renovations",
  description:
    "Explore our completed residential renovations, ground-floor additions, designer kitchens, and alfresco pavilions across Penrith and Greater Western Sydney.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Header */}
      <section className="bg-[#183324] text-[#FAF7F2] py-20 px-4 sm:px-8 border-b border-[#244C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8DA792] font-bold">
              Craftsmanship In Detail
            </span>
            <div className="h-0.5 w-12 bg-[#8DA792] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#FAF7F2] mb-6">
            Project <span className="font-light text-[#A4C4AD]">Gallery</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#D2E2D7] font-normal leading-relaxed">
            Browse our portfolio of completed transformations throughout Penrith, Glenmore Park, Jordan Springs, and the Nepean district. Click any project to inspect the scope, timeline, and finishes.
          </p>
        </div>
      </section>

      {/* Interactive Before & After Slider Showcase */}
      <BeforeAfterSlider />

      {/* Full Projects Showcase without limit */}
      <ProjectsShowcase />

      <StressFreeBanner />
    </main>
  );
}
