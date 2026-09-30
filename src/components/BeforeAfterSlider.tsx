"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Maximize2,
} from "lucide-react";
import { projectsData, Project } from "@/data/projectsData";

export default function BeforeAfterSlider() {
  // Filter only projects with valid before & after photos
  const showcaseProjects = projectsData.filter(
    (p) => p.beforeImage && p.afterImage
  );

  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    showcaseProjects[0]?.id || ""
  );
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"all" | "kitchens" | "bathrooms" | "combos">("all");
  const [activeDetailImage, setActiveDetailImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentProject: Project =
    showcaseProjects.find((p) => p.id === selectedProjectId) ||
    showcaseProjects[0];

  const filteredProjects = showcaseProjects.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  // Handle position calculation on mouse / touch event
  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    },
    [isDragging, updateSliderPosition]
  );

  // Global mouseup / touchend listener to guarantee smooth drag release
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalTouchEnd);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, []);

  // Handle project selection cleanly without cascading renders
  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id);
    setSliderPosition(50);
    setActiveDetailImage(null);
  };

  const handleTabChange = (tabId: "all" | "kitchens" | "bathrooms" | "combos") => {
    setActiveTab(tabId);
    const match = showcaseProjects.find(
      (p) => tabId === "all" || p.category === tabId
    );
    if (match) {
      handleSelectProject(match.id);
    }
  };

  return (
    <section className="relative py-24 bg-[#FAF7F2] text-[#1A2E22] overflow-hidden border-y border-[#E2DDD5]">
      {/* Background ambient botanical accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4F775D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#183324]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFE9] border border-[#CBDCD0] text-[#1E432D] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4F775D]" />
            <span>Actual Renovation Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#183324] mb-4">
            Interactive <span className="text-[#4F775D]">Before &amp; After</span> Showcase
          </h2>
          <p className="text-[#3B5243] text-sm sm:text-base leading-relaxed font-light">
            Drag the slider horizontally to reveal the dramatic structural and interior
            transformations delivered by NP4 Building Pty Ltd across Penrith and Western Sydney.
            All photos represent genuine completed client homes.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all" as const, label: "All Transformations" },
              { id: "kitchens" as const, label: "Designer Kitchens" },
              { id: "bathrooms" as const, label: "Luxury Bathrooms" },
              { id: "combos" as const, label: "Wet Area Conversions" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#183324] text-[#FAF7F2] shadow-sm font-bold"
                    : "bg-[#EFEAE1] text-[#2C4033] hover:bg-[#E2DDD3] border border-[#D5CEBF]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Selector Horizontal Scroll / Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-zinc-300">
          {filteredProjects.map((p) => {
            const isSelected = p.id === currentProject?.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectProject(p.id)}
                className={`whitespace-nowrap px-4 py-2.5 text-xs font-medium transition-all flex items-center gap-2 border shrink-0 ${
                  isSelected
                    ? "bg-white border-[#183324] text-[#183324] shadow-sm"
                    : "bg-[#F2ECE1] border-[#DDD5C8] text-[#47604F] hover:bg-white hover:text-[#183324]"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? "bg-[#183324]" : "bg-[#8DA792]"
                  }`}
                />
                <span className="font-semibold">{p.title.split(":")[0]}</span>
                <span className="text-[10px] text-[#5A7363] font-mono">({p.suburb.split(",")[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Main Comparison Stage */}
        {currentProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: The Interactive Slider (8 cols on lg) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onClick={(e) => updateSliderPosition(e.clientX)}
                className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8E3D8] select-none cursor-ew-resize border border-[#D5CEBF] shadow-xl group"
                style={{ touchAction: "none" }}
                role="slider"
                aria-valuenow={sliderPosition}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") setSliderPosition((prev) => Math.max(0, prev - 5));
                  if (e.key === "ArrowRight") setSliderPosition((prev) => Math.min(100, prev + 5));
                }}
              >
                {/* AFTER IMAGE (Full Background) */}
                <img
                  src={currentProject.afterImage}
                  alt={`${currentProject.title} - After Transformation`}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />

                {/* BEFORE IMAGE (Clipped Layer on Left) */}
                <div
                  className="absolute inset-0 overflow-hidden select-none pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src={currentProject.beforeImage}
                    alt={`${currentProject.title} - Before Renovation`}
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>

                {/* SLIDER DIVIDER LINE */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)] pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Central Circular Handle in Forest Green & Sage */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#183324] border-2 border-[#8DA792] shadow-2xl flex items-center justify-center text-white pointer-events-auto cursor-ew-resize group-hover:scale-110 transition-transform">
                    <div className="flex items-center gap-0.5">
                      <ChevronLeft className="w-3.5 h-3.5 text-white" />
                      <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating "BEFORE" Badge */}
                <div className="absolute top-4 left-4 z-20 bg-[#183324]/85 backdrop-blur-md border border-[#2B543D] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#FAF7F2] pointer-events-none shadow-md">
                  Before
                </div>

                {/* Floating "AFTER" Badge */}
                <div className="absolute top-4 right-4 z-20 bg-[#4F775D] text-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest pointer-events-none shadow-md">
                  After Transformation
                </div>

                {/* Quick Hint Bottom Pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#183324]/80 backdrop-blur-md px-3.5 py-1 text-[11px] text-[#E8EFE9] font-medium tracking-wide pointer-events-none flex items-center gap-1.5 border border-[#2B543D] opacity-85 group-hover:opacity-100 transition-opacity shadow-md">
                  <Sliders className="w-3 h-3 text-[#A3C2AD]" />
                  <span>Drag or click to compare</span>
                </div>
              </div>

              {/* Detail Gallery Strip */}
              {currentProject.images && currentProject.images.length > 0 && (
                <div className="bg-white border border-[#E2DDD5] p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="uppercase tracking-wider text-[#334D3D] font-semibold flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#4F775D]" />
                      Project Detail Gallery &amp; In-Progress Proof
                    </span>
                    <button
                      onClick={() => setSliderPosition(50)}
                      className="text-[11px] text-[#183324] hover:text-[#4F775D] uppercase tracking-wider font-mono font-semibold"
                    >
                      Reset Split to 50%
                    </button>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                    {currentProject.images.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveDetailImage(imgSrc)}
                        className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                          activeDetailImage === imgSrc
                            ? "border-[#183324] ring-2 ring-[#4F775D]/40"
                            : "border-[#E2DDD5] hover:border-[#4F775D] opacity-80 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`${currentProject.title} gallery ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Project Specifications & Builder Credentials (4 cols on lg) */}
            <div className="lg:col-span-4 bg-white border border-[#E2DDD5] p-6 sm:p-7 flex flex-col justify-between shadow-lg text-[#1A2E22]">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#2E583D] font-bold mb-2">
                  <Award className="w-3.5 h-3.5 text-[#4F775D]" />
                  <span>{currentProject.categoryLabel}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#183324] mb-2 leading-snug">
                  {currentProject.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-[#5A7363] mb-5">
                  <MapPin className="w-3.5 h-3.5 text-[#4F775D] shrink-0" />
                  <span>{currentProject.suburb}</span>
                </div>

                {/* Key Build Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-[#F5F1E9] p-3.5 border border-[#E8E2D8] text-xs">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#6A8272] font-mono">
                      Build Duration
                    </span>
                    <span className="font-bold text-[#183324] text-sm">
                      {currentProject.stats.duration}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#6A8272] font-mono">
                      Completion
                    </span>
                    <span className="font-bold text-[#2E583D] text-sm">
                      {currentProject.stats.completedYear}
                    </span>
                  </div>
                </div>

                {/* Scope Description */}
                <p className="text-xs sm:text-sm text-[#334A3C] font-light leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Scope Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-[11px] uppercase tracking-widest text-[#2E583D] font-bold">
                    Key Scope &amp; Craftsmanship:
                  </h4>
                  {currentProject.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#2E4236]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4F775D] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Builder Quality Compliance Card */}
              <div className="pt-6 border-t border-[#E8E2D8]">
                <div className="bg-[#EBF2EC] p-3.5 border border-[#CBDCD0] mb-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#183324]">
                    <ShieldCheck className="w-4 h-4 text-[#4F775D]" />
                    <span>NP4 Building Pty Ltd Guarantee</span>
                  </div>
                  <p className="text-[11px] text-[#3B5444] leading-normal">
                    Licensed NSW Builder <strong>#394821C</strong> (Philmorr Galon). All wet area work
                    complies strictly with <strong>AS 3740:2021</strong> waterproofing &amp; <strong>AS 3500</strong> plumbing
                    standards, backed by a 7-year statutory warranty.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 bg-[#183324] hover:bg-[#254F38] text-[#FAF7F2] font-bold py-3 px-4 text-center uppercase text-xs tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/projects`}
                    className="bg-[#F2EDE4] hover:bg-[#E5DFD5] text-[#183324] font-semibold py-3 px-4 text-center uppercase text-xs tracking-wider transition-colors inline-flex items-center justify-center border border-[#DED8CC]"
                  >
                    All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal for Zooming Detail Gallery Image */}
        {activeDetailImage && (
          <div
            onClick={() => setActiveDetailImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden border border-[#D5CEBF] bg-black">
              <img
                src={activeDetailImage}
                alt="Enlarged Project Detail"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <button
                onClick={() => setActiveDetailImage(null)}
                className="absolute top-3 right-3 bg-black/80 hover:bg-black text-white px-3 py-1.5 text-xs uppercase tracking-wider font-bold border border-zinc-700"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
