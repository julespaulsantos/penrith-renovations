import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function SeamlessHomes() {
  return (
    <section className="py-24 bg-[#faf9f6] text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content focused on Kitchen & Bathroom expertise */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9c7832] font-semibold">
                Specialist Expertise
              </span>
              <div className="h-0.5 w-12 bg-[#c5a059] mt-1"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-zinc-950 leading-tight">
              Crafting <span className="font-light text-zinc-600">Seamless</span> Kitchens &amp; Bathrooms
            </h2>

            <div className="space-y-4 text-zinc-700 leading-relaxed text-base sm:text-lg font-light">
              <p>
                The kitchen and bathroom are the most technically demanding spaces in any home. As specialised builders, <strong className="text-zinc-950 font-semibold">NP4 Building Pty Ltd</strong> blends structural carpentry, custom joinery, and certified waterproofing to create spaces that look breathtaking and endure for decades.
              </p>
              <p>
                Whether you need to remove load-bearing masonry walls to expand your kitchen into an open-plan entertainer&apos;s paradise, or convert a dated bathroom into a hotel-calibre ensuite with curbless showers and heated travertine, director <strong className="text-zinc-950 font-semibold">Philmoor Galon</strong> manages every stage on site.
              </p>
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#9c7832]">
                  <Check className="w-3.5 h-3.5" />
                </span>
                Custom Joinery &amp; Islands
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#9c7832]">
                  <Check className="w-3.5 h-3.5" />
                </span>
                10-Year Certified Waterproofing
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#9c7832]">
                  <Check className="w-3.5 h-3.5" />
                </span>
                Structural Kitchen Wall Removals
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#9c7832]">
                  <Check className="w-3.5 h-3.5" />
                </span>
                Laser-Templated Stone &amp; Mitred Tiles
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/services/kitchen-renovations"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-900 hover:text-[#9c7832] transition-colors border-b-2 border-zinc-900 pb-1"
              >
                <span>Kitchen Renovations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/bathroom-renovations"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-900 hover:text-[#9c7832] transition-colors border-b-2 border-zinc-900 pb-1"
              >
                <span>Bathroom Renovations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Architectural imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded shadow-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury kitchen renovation with waterfall island in Penrith"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-1">
                  Featured Renovation by NP4 Building Pty Ltd
                </div>
                <div className="text-lg font-bold">The Jamisontown Open Kitchen &amp; Butler&apos;s Pantry</div>
                <div className="text-xs text-zinc-300">Custom Timber Joinery, Stone Benchtops &amp; Wall Removal</div>
              </div>
            </div>

            {/* Overlapping feature card */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 bg-[#1f2228] text-white p-6 rounded shadow-xl border border-[#343a46] max-w-xs">
              <div className="text-2xl font-bold text-[#c5a059]">NP4 Building</div>
              <div className="text-xs uppercase tracking-widest text-zinc-400 mt-0.5">
                Director-Led Supervision
              </div>
              <div className="text-xs text-zinc-300 mt-2">
                Every kitchen and bathroom is directly overseen on site by licensed builder Philmoor Galon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
