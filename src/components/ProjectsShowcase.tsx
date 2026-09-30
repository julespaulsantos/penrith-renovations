"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData, Project } from "@/data/projectsData";
import { ArrowRight, X, Calendar, MapPin, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsShowcase({ limit }: { limit?: number }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const openProjectModal = (project: Project) => {
    setActiveModalProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section className="py-24 bg-[#FAF7F2] text-[#22352a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block mb-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
                Portfolio of Work
              </span>
              <div className="h-0.5 w-12 bg-[#4F775D] mt-1"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#183324]">
              Check out our <span className="font-light text-[#4F775D]">recent projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider font-semibold">
            {[
              { id: "all", label: "All Projects" },
              { id: "kitchens", label: "Designer Kitchens" },
              { id: "bathrooms", label: "Luxury Bathrooms" },
              { id: "combos", label: "Kitchen & Bath Combos" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 border transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? "bg-[#183324] text-white border-[#183324] shadow-sm"
                    : "bg-white text-[#3B5243] border-[#DED8CC] hover:border-[#183324] hover:text-[#183324]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="group cursor-pointer bg-white border border-[#E2DDD5] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#6B8E7B] transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F1E9]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#183324]/90 text-[#FAF7F2] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 backdrop-blur-sm border border-[#3A5D46]">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#667E70] mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#4F775D]" />
                    {project.suburb}
                  </div>
                  <h3 className="text-base font-bold text-[#183324] group-hover:text-[#4F775D] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#667E70] font-medium">
                  <span>{project.stats.duration}</span>
                  <span className="text-[#183324] group-hover:translate-x-1 group-hover:text-[#4F775D] transition-transform inline-flex items-center gap-1 font-semibold">
                    View Project &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-[#183324] hover:bg-[#254F38] text-white font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>View All Completed Projects</span>
              <ArrowRight className="w-4 h-4 text-[#8DA792]" />
            </Link>
          </div>
        )}

        {/* Modal for Project Deep-Dive */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E1E15]/80 backdrop-blur-md">
            <div className="relative bg-[#FAF7F2] text-[#22352a] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#DED8CC] shadow-2xl p-6 sm:p-8">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 text-[#4F775D] hover:text-[#183324] bg-[#E8EFE9] hover:bg-[#D5E3D8] rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Carousel */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black mb-6 border border-[#E2DDD5]">
                <img
                  src={activeModalProject.images[activeImageIndex]}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />

                {activeModalProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(
                          (prev) =>
                            (prev - 1 + activeModalProject.images.length) %
                            activeModalProject.images.length
                        );
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 p-2 text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex(
                          (prev) => (prev + 1) % activeModalProject.images.length
                        );
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 p-2 text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                      {activeModalProject.images.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 transition-all ${
                            i === activeImageIndex ? "w-6 bg-[#183324]" : "w-2 bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Modal Metadata */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2DDD5] pb-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#4F775D] font-bold">
                      {activeModalProject.categoryLabel}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#183324]">
                      {activeModalProject.title}
                    </h3>
                    <p className="text-xs text-[#667E70] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#4F775D]" />
                      {activeModalProject.suburb}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono bg-[#F5F1E9] p-3 border border-[#E2DDD5]">
                    <div>
                      <span className="text-[#667E70] block text-[10px] uppercase font-semibold">Duration</span>
                      <span className="text-[#183324] font-bold">{activeModalProject.stats.duration}</span>
                    </div>
                    <div className="w-px h-6 bg-[#D8D2C5]"></div>
                    <div>
                      <span className="text-[#667E70] block text-[10px] uppercase font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#4F775D]" />
                        Completed
                      </span>
                      <span className="text-[#183324] font-bold">{activeModalProject.stats.completedYear}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#384C3F] leading-relaxed font-normal">
                  {activeModalProject.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#4F775D] font-bold mb-3">
                    Project Highlights &amp; Scope
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#22352a]">
                        <CheckCircle className="w-4 h-4 text-[#4F775D] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Call To Action */}
                <div className="pt-6 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#667E70]">
                    Want a similar transformation for your home?
                  </span>
                  <Link
                    href="/contact"
                    onClick={() => setActiveModalProject(null)}
                    className="bg-[#183324] hover:bg-[#254F38] text-white font-bold px-6 py-2.5 uppercase text-xs tracking-widest transition-colors shadow-sm"
                  >
                    Request Similar Build Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
