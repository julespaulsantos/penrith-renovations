"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Ruler, CheckCircle2 } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    caption: "Open-Plan Living & Architectural Renovations",
    location: "Jamisontown, Penrith",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
    caption: "Luxury Alfresco Entertaining & Outdoor Living",
    location: "Glenmore Park",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    caption: "Ground Floor & Second Storey Extensions",
    location: "Jordan Springs",
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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#15161a]">
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
        <div className="inline-flex items-center gap-2 bg-[#21232b]/80 border border-[#383d4a] px-4 py-1.5 mb-6 text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium backdrop-blur-sm">
          <span>Penrith &amp; Greater Western Sydney Builders</span>
        </div>

        {/* Main Heading modeled directly after McGirr */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-white mb-4">
          Home Renovation <span className="text-[#c5a059] font-light">Builder</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-light italic text-zinc-300 mb-6">
          Need more space? Want to modernise?
        </p>

        {/* Body narrative modeled directly from McGirr reference copy */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-200 leading-relaxed font-light mb-10">
          Transform your Penrith home to be more <strong className="text-white font-semibold">stylish, modern</strong> and{" "}
          <strong className="text-white font-semibold">comfortable</strong> with Penrith Renovations. We’re dedicated to creating spaces that you’ll be in love with and proud to call your home.
          We provide high-calibre construction and personalised director-led service from initial design to completion.
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
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 uppercase text-xs tracking-widest backdrop-blur-sm transition-all duration-300"
          >
            <span>View Recent Projects</span>
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/15 text-left">
          <div className="flex items-center gap-3 text-zinc-300">
            <ShieldCheck className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Licensed &amp; Insured</div>
              <div className="text-[11px] text-zinc-400">NSW Licence #394821C</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <CheckCircle2 className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Fixed-Price Contracts</div>
              <div className="text-[11px] text-zinc-400">No Hidden Surprise Variations</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <Award className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">10-Year Warranty</div>
              <div className="text-[11px] text-zinc-400">Structural &amp; Waterproofing</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <Ruler className="w-6 h-6 text-[#c5a059] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Director On-Site</div>
              <div className="text-[11px] text-zinc-400">Hands-on Daily Supervision</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {heroSlides.map((_, i) => (
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
