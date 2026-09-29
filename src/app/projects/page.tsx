import React from "react";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import StressFreeBanner from "@/components/StressFreeBanner";

export const metadata = {
  title: "Recent Projects Gallery | Penrith Renovations",
  description:
    "Explore our completed residential renovations, ground-floor additions, designer kitchens, and alfresco pavilions across Penrith and Greater Western Sydney.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-28 pb-20 bg-[#faf9f6]">
      {/* Header */}
      <section className="bg-[#141518] text-white py-20 px-4 sm:px-8 border-b border-[#292e37]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Craftsmanship In Detail
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            Project <span className="font-light text-zinc-400">Gallery</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Browse our portfolio of completed transformations throughout Penrith, Glenmore Park, Jordan Springs, and the Nepean district. Click any project to inspect the scope, timeline, and finishes.
          </p>
        </div>
      </section>

      {/* Full Projects Showcase without limit */}
      <ProjectsShowcase />

      <StressFreeBanner />
    </main>
  );
}
