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
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#FAF7F2]">
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

      {/* Subtle contrast scrim and soft edge fades so background photos are vibrant & vivid */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/25 pointer-events-none" />

      {/* Floating authentic project caption pill */}
      <div className="absolute top-28 right-4 sm:right-8 hidden md:flex items-center gap-2 bg-[#183324]/80 text-[#FAF7F2] text-[11px] px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg z-20 transition-all duration-500">
        <span className="w-2 h-2 rounded-full bg-[#8DA792] animate-pulse" />
        <span className="font-semibold text-white">Actual Project:</span>
        <span className="text-[#D2E2D7]">{heroSlides[currentSlide].caption}</span>
        <span className="text-[#8DA792] font-medium">&bull; {heroSlides[currentSlide].location}</span>
      </div>

      {/* Content Container - Centered Frosted Glass Architectural Panel */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center text-[#183324] z-10 my-auto">
        <div className="bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E2DDD5] rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl">
          {/* Subtle pill tag in Sage & Forest Green */}
          <div className="inline-flex items-center gap-2 bg-[#E8EFE9] border border-[#CBDCD0] px-4 py-1.5 mb-5 text-xs uppercase tracking-[0.25em] text-[#1E432D] font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4F775D]" />
            <span>NP4 Building Pty Ltd • Kitchen &amp; Bathroom Specialists</span>
          </div>

          {/* Main Heading focused on Kitchen & Bathroom */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-[#183324] mb-3 leading-tight">
            Kitchen &amp; Bathroom <span className="text-[#4F775D] font-light">Renovations</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl font-light italic text-[#3B5444] mb-5">
            Transforming the heart and sanctuaries of your Penrith home.
          </p>

          {/* Body narrative with heavy emphasis on Kitchen & Bathroom expertise */}
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-[#2C4033] leading-relaxed font-normal mb-8">
            From show-stopping entertainer kitchens with statement stone islands to spa-inspired bathroom sanctuaries with certified waterproofing, <strong className="text-[#183324] font-semibold">NP4 Building Pty Ltd</strong> delivers precision craftsmanship across Penrith and Western Sydney. Led personally by director <strong className="text-[#183324] font-semibold">Philmorr Galon</strong>, we bring custom joinery, structural open-plan conversions, and fixed-price certainty to every project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#183324] hover:bg-[#254F38] text-[#FAF7F2] font-bold px-8 py-3.5 uppercase text-xs tracking-widest transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Book Free Site Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#8DA792]" />
            </Link>
            <Link
              href="/services/kitchen-renovations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-[#FAF7F2] text-[#183324] border border-[#CBDCD0] px-7 py-3.5 uppercase text-xs tracking-widest transition-all duration-300 shadow-sm"
            >
              <span>Explore Kitchens</span>
            </Link>
            <Link
              href="/services/bathroom-renovations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-[#FAF7F2] text-[#183324] border border-[#CBDCD0] px-7 py-3.5 uppercase text-xs tracking-widest transition-all duration-300 shadow-sm"
            >
              <span>Explore Bathrooms</span>
            </Link>
          </div>

          {/* Trust Badges Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#DED6C9] text-left">
            <div className="flex items-center gap-3 text-[#2C4033]">
              <ShieldCheck className="w-6 h-6 text-[#4F775D] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#183324] uppercase tracking-wider">NP4 Building Pty Ltd</div>
                <div className="text-[11px] text-[#5A7363]">NSW Licence #394821C</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#2C4033]">
              <CheckCircle2 className="w-6 h-6 text-[#4F775D] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#183324] uppercase tracking-wider">Fixed-Price Tenders</div>
                <div className="text-[11px] text-[#5A7363]">No Hidden Surprise Variations</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#2C4033]">
              <Award className="w-6 h-6 text-[#4F775D] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#183324] uppercase tracking-wider">10-Yr Waterproofing</div>
                <div className="text-[11px] text-[#5A7363]">AS 3740 Dual-Layer Certified</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#2C4033]">
              <Ruler className="w-6 h-6 text-[#4F775D] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#183324] uppercase tracking-wider">Director On-Site Daily</div>
                <div className="text-[11px] text-[#5A7363]">Philmorr Galon Supervising</div>
              </div>
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
              i === currentSlide ? "w-8 bg-[#183324]" : "w-3 bg-white/70 hover:bg-white shadow-sm"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
