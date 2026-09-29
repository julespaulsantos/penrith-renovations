"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Info, Check } from "lucide-react";

export default function CostEstimator() {
  const [projectType, setProjectType] = useState<string>("kitchen");
  const [finishGrade, setFinishGrade] = useState<string>("designer");
  const [sizeM2, setSizeM2] = useState<number>(20);

  // Ballpark calculation logic for Sydney/Penrith kitchen & bathroom renovations
  const calculateEstimate = () => {
    if (projectType === "kitchen") {
      const base = finishGrade === "standard" ? 32000 : finishGrade === "designer" ? 52000 : 78000;
      const factor = sizeM2 / 18;
      const low = Math.round(base * Math.max(0.85, factor * 0.9));
      const high = Math.round(base * Math.max(1.15, factor * 1.15));
      return { low, high, unitLabel: "Kitchen Footprint" };
    } else if (projectType === "bathroom") {
      const base = finishGrade === "standard" ? 22000 : finishGrade === "designer" ? 34000 : 49000;
      const low = Math.round(base * 0.95);
      const high = Math.round(base * 1.15);
      return { low, high, unitLabel: "Bathroom Scope" };
    } else if (projectType === "combo") {
      // Kitchen + Bathroom Package
      const base = finishGrade === "standard" ? 58000 : finishGrade === "designer" ? 88000 : 129000;
      const low = Math.round(base * 0.95);
      const high = Math.round(base * 1.12);
      return { low, high, unitLabel: "Kitchen + Bath Package" };
    } else {
      // Kitchen + Structural Wall Removal
      const base = finishGrade === "standard" ? 44000 : finishGrade === "designer" ? 69000 : 98000;
      const factor = sizeM2 / 22;
      const low = Math.round(base * Math.max(0.85, factor * 0.9));
      const high = Math.round(base * Math.max(1.15, factor * 1.15));
      return { low, high, unitLabel: "Open-Plan Kitchen Area" };
    }
  };

  const estimate = calculateEstimate();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 bg-[#141518] text-white border-t border-[#292e37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Transparent Pricing
              </span>
              <div className="h-0.5 w-12 bg-[#c5a059] mt-1"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              Kitchen &amp; Bathroom <span className="font-light text-zinc-400">Cost Estimator</span>
            </h2>

            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Transparent planning is essential for a stress-free build. As kitchen and bathroom specialists, <strong className="text-white font-semibold">NP4 Building Pty Ltd</strong> provides clear, itemized fixed-price quotes tailored to the Penrith and Western Sydney market.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Includes licensed trades, custom joinery, stone fabrication, and certified waterproofing.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Save up to 15% with our combined Kitchen &amp; Bathroom packages.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Every quote from Philmoor Galon is fixed-price with zero hidden variations.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Card */}
          <div className="lg:col-span-7 bg-[#1c1f26] p-6 sm:p-8 border border-[#323844] shadow-2xl">
            <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-[#c5a059] font-bold">
              <Calculator className="w-4 h-4" />
              <span>Kitchen &amp; Bath Renovation Calculator</span>
            </div>

            {/* Step 1: Select Type */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                1. Select Renovation Scope
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "kitchen", label: "Designer Kitchen" },
                  { id: "bathroom", label: "Luxury Bathroom" },
                  { id: "combo", label: "Kitchen + Bath Package (Best Value)" },
                  { id: "wall-kitchen", label: "Kitchen + Wall Removal" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`py-3 px-3 text-xs uppercase tracking-wider border font-medium transition-colors text-center ${
                      projectType === type.id
                        ? "bg-[#c5a059] text-zinc-950 border-[#c5a059] font-bold"
                        : "bg-[#252a33] text-zinc-300 border-[#38404d] hover:border-zinc-500"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Finish Grade */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                2. Fixtures &amp; Stone Specification Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "standard", label: "Quality Builder" },
                  { id: "designer", label: "Executive Designer" },
                  { id: "luxury", label: "Architectural Luxury" },
                ].map((grade) => (
                  <button
                    key={grade.id}
                    onClick={() => setFinishGrade(grade.id)}
                    className={`py-2.5 px-3 text-xs uppercase tracking-wider border font-medium transition-colors ${
                      finishGrade === grade.id
                        ? "bg-[#c5a059] text-zinc-950 border-[#c5a059] font-bold"
                        : "bg-[#252a33] text-zinc-300 border-[#38404d] hover:border-zinc-500"
                    }`}
                  >
                    {grade.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size Slider (if applicable) */}
            {(projectType === "kitchen" || projectType === "wall-kitchen") && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    3. Kitchen Size ({sizeM2} m²)
                  </label>
                  <span className="text-xs text-[#c5a059] font-mono">{sizeM2} m² area</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  step="2"
                  value={sizeM2}
                  onChange={(e) => setSizeM2(Number(e.target.value))}
                  className="w-full h-2 bg-[#2d323e] rounded-lg appearance-none cursor-pointer accent-[#c5a059]"
                />
              </div>
            )}

            {/* Results Output Box */}
            <div className="p-6 bg-[#252a33] border border-[#3e4655]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold block mb-1">
                    Estimated Investment Range (Inc. GST &amp; Trades)
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {formatCurrency(estimate.low)} &ndash; {formatCurrency(estimate.high)}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-5 py-3 text-xs uppercase tracking-widest transition-colors shrink-0"
                >
                  <span>Book Free On-Site Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-[#373e4b] flex items-center gap-2 text-[11px] text-zinc-400">
                <Info className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>
                  Indicative estimate based on recent Penrith kitchen &amp; bathroom projects by NP4 Building Pty Ltd. Confirmed after free on-site review.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
