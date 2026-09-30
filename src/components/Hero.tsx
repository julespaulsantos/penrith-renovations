"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Ruler, CheckCircle2, Sparkles } from "lucide-react";

const heroSlides = [
  {
    image: "/projects/real/aj-kitchen-after.jpg",
    caption: "Open-Concept Living & Statement Island Kitchen",
    location: "Penrith / Jamisontown",
  },
  {
    image: "/projects/real/lyn-bath-after.jpg",
    caption: "Fluted Oak Ensuite with Pill LED Mirror & Walk-In Shower",
    location: "Glenmore Park",
  },
  {
    image: "/projects/real/perlie-kitchen-after.jpg",
    caption: "Coastal Calacatta Waterfall Island & Herringbone Splashback",
    location: "Glenmore Park",
  },
  {
    image: "/projects/real/mary-master-bath-after.jpg",
    caption: "Architectural Freestanding Bath & Curbless Wet Room",
    location: "Western Sydney",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#15161a]">
      {/* Background Slideshow with smooth transition */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1.2s ease-in-out, transform 8s ease-out",
          }}
        />
      ))}

      {/* Cinematic dark overlay gradient matching McGirr's mood */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/75 to-[#141518]/50" />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 text-center text-white z-10 my-auto">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 bg-[#21232b]/85 border border-[#383d4a] px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>NP4 Building Pty Ltd • Kitchen &amp; Bathroom Renovation Specialists</span>
        </div>

        {/* Main Heading focused on Kitchen & Bathroom */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-white mb-4">
          Kitchen &amp; Bathroom <span className="text-[#c5a059] font-light">Renovations</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-light italic text-zinc-300 mb-6">
          Transforming the heart and sanctuaries of your Penrith home.
        </p>

        {/* Body narrative with heavy emphasis on Kitchen & Bathroom expertise */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed font-light mb-10">
          From show-stopping entertainer kitchens with statement stone islands to spa-inspired bathroom sanctuaries with certified waterproofing, <strong className="text-white font-semibold">NP4 Building Pty Ltd</strong> delivers precision craftsmanship across Penrith and Western Sydney. Led personally by director <strong className="text-white font-semibold">Philmoor Galon</strong>, we bring custom joinery, structural open-plan conversions, and fixed-price certainty to every project.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <span>Book Free Site Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services/kitchen-renovations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 uppercase text-xs tracking-widest backdrop-blur-sm transition-all duration-300"
          >
            <span>Explore Kitchens</span>
          </Link>
          <Link
            href="/services/bathroom-renovations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 uppercase text-xs tracking-widest backdrop-blur-sm transition-all duration-300"
          >
            <span>Explore Bathrooms</span>
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/15 text-left">
          <div className="flex items-center gap-3 text-zinc-300">
            <ShieldCheck className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">NP4 Building Pty Ltd</div>
              <div className="text-[11px] text-zinc-400">NSW Licence #394821C</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <CheckCircle2 className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Fixed-Price Tenders</div>
              <div className="text-[11px] text-zinc-400">No Hidden Surprise Variations</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <Award className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">10-Yr Waterproofing</div>
              <div className="text-[11px] text-zinc-400">AS 3740 Dual-Layer Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <Ruler className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Director On-Site Daily</div>
              <div className="text-[11px] text-zinc-400">Philmoor Galon Supervising</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {heroSlides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 transition-all duration-300 ${
              i === currentSlide ? "w-8 bg-[#c5a059]" : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
