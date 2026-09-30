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
    <section className="relative py-24 bg-[#121418] text-white overflow-hidden border-y border-zinc-800">
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#c5a059] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Actual Renovation Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Interactive <span className="text-[#c5a059]">Before &amp; After</span> Showcase
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
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
                    ? "bg-[#c5a059] text-zinc-950 shadow-md font-bold"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/60"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Selector Horizontal Scroll / Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-zinc-700">
          {filteredProjects.map((p) => {
            const isSelected = p.id === currentProject?.id;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectProject(p.id)}
                className={`whitespace-nowrap px-4 py-2.5 text-xs font-medium transition-all flex items-center gap-2 border shrink-0 ${
                  isSelected
                    ? "bg-zinc-900 border-[#c5a059] text-white shadow-lg"
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? "bg-[#c5a059]" : "bg-zinc-600"
                  }`}
                />
                <span className="font-semibold">{p.title.split(":")[0]}</span>
                <span className="text-[10px] text-zinc-500 font-mono">({p.suburb.split(",")[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Main Comparison Stage */}
        {currentProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: The Interactive Slider (7 cols on lg) */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onClick={(e) => updateSliderPosition(e.clientX)}
                className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-black select-none cursor-ew-resize border border-zinc-800 shadow-2xl group"
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
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Central Circular Handle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#181a1f] border-2 border-[#c5a059] shadow-2xl flex items-center justify-center text-[#c5a059] pointer-events-auto cursor-ew-resize group-hover:scale-110 transition-transform">
                    <div className="flex items-center gap-0.5">
                      <ChevronLeft className="w-3.5 h-3.5 text-white" />
                      <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating "BEFORE" Badge */}
                <div className="absolute top-4 left-4 z-20 bg-black/75 backdrop-blur-md border border-zinc-700/60 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-zinc-300 pointer-events-none shadow-md">
                  Before
                </div>

                {/* Floating "AFTER" Badge */}
                <div className="absolute top-4 right-4 z-20 bg-[#c5a059] text-zinc-950 px-3 py-1 text-[11px] font-bold uppercase tracking-widest pointer-events-none shadow-md">
                  After Transformation
                </div>

                {/* Quick Hint Bottom Pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-md px-3.5 py-1 text-[11px] text-zinc-300 font-medium tracking-wide pointer-events-none flex items-center gap-1.5 border border-zinc-700/50 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Sliders className="w-3 h-3 text-[#c5a059]" />
                  <span>Drag or click to compare</span>
                </div>
              </div>

              {/* Detail Gallery Strip */}
              {currentProject.images && currentProject.images.length > 0 && (
                <div className="bg-[#181a1f] border border-zinc-800 p-4">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#c5a059]" />
                      Project Detail Gallery &amp; In-Progress Proof
                    </span>
                    <button
                      onClick={() => setSliderPosition(50)}
                      className="text-[11px] text-[#c5a059] hover:underline uppercase tracking-wider font-mono"
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
                            ? "border-[#c5a059] ring-2 ring-[#c5a059]/40"
                            : "border-zinc-800 hover:border-zinc-600 opacity-75 hover:opacity-100"
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
            <div className="lg:col-span-4 bg-[#181a1f] border border-zinc-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#c5a059] font-bold mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>{currentProject.categoryLabel}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mb-2 leading-snug">
                  {currentProject.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                  <span>{currentProject.suburb}</span>
                </div>

                {/* Key Build Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6 bg-zinc-900/80 p-3.5 border border-zinc-800/80 text-xs">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                      Build Duration
                    </span>
                    <span className="font-bold text-white text-sm">
                      {currentProject.stats.duration}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                      Completion
                    </span>
                    <span className="font-bold text-[#c5a059] text-sm">
                      {currentProject.stats.completedYear}
                    </span>
                  </div>
                </div>

                {/* Scope Description */}
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Scope Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">
                    Key Scope &amp; Craftsmanship:
                  </h4>
                  {currentProject.highlights.slice(0, 4).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Builder Quality Compliance Card */}
              <div className="pt-6 border-t border-zinc-800">
                <div className="bg-zinc-900/60 p-3.5 border border-zinc-800/80 mb-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                    <span>NP4 Building Pty Ltd Guarantee</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    Licensed NSW Builder <strong>#394821C</strong> (Philmoor Galon). All wet area work
                    complies strictly with <strong>AS 3740:2021</strong> waterproofing &amp; <strong>AS 3500</strong> plumbing
                    standards, backed by a 7-year statutory warranty.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold py-3 px-4 text-center uppercase text-xs tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/projects`}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold py-3 px-4 text-center uppercase text-xs tracking-wider transition-colors inline-flex items-center justify-center"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden border border-zinc-700 bg-black">
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
