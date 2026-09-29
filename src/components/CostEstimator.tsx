"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Info, Check } from "lucide-react";

export default function CostEstimator() {
  const [projectType, setProjectType] = useState<string>("renovation");
  const [finishGrade, setFinishGrade] = useState<string>("designer");
  const [sizeM2, setSizeM2] = useState<number>(80);

  // Ballpark calculation logic for Sydney/Penrith renovations market
  const calculateEstimate = () => {
    let ratePerUnit = 2200; // baseline

    if (projectType === "renovation") {
      ratePerUnit = finishGrade === "standard" ? 1800 : finishGrade === "designer" ? 2600 : 3800;
      const low = Math.round(sizeM2 * ratePerUnit * 0.9);
      const high = Math.round(sizeM2 * ratePerUnit * 1.15);
      return { low, high, unitLabel: "Approx. Area" };
    } else if (projectType === "extension") {
      ratePerUnit = finishGrade === "standard" ? 2800 : finishGrade === "designer" ? 3600 : 4900;
      const low = Math.round(sizeM2 * ratePerUnit * 0.9);
      const high = Math.round(sizeM2 * ratePerUnit * 1.15);
      return { low, high, unitLabel: "Extension Footprint" };
    } else if (projectType === "kitchen") {
      const base = finishGrade === "standard" ? 35000 : finishGrade === "designer" ? 55000 : 85000;
      const factor = (sizeM2 / 20); // normalized around 20m2 kitchen
      const low = Math.round(base * Math.max(0.8, factor * 0.9));
      const high = Math.round(base * Math.max(1.1, factor * 1.15));
      return { low, high, unitLabel: "Kitchen Area" };
    } else if (projectType === "bathroom") {
      const base = finishGrade === "standard" ? 25000 : finishGrade === "designer" ? 38000 : 58000;
      const low = Math.round(base * 0.95);
      const high = Math.round(base * 1.15);
      return { low, high, unitLabel: "Bathroom Scope" };
    } else {
      // Outdoor
      ratePerUnit = finishGrade === "standard" ? 1200 : finishGrade === "designer" ? 1800 : 2800;
      const low = Math.round(sizeM2 * ratePerUnit * 0.9);
      const high = Math.round(sizeM2 * ratePerUnit * 1.15);
      return { low, high, unitLabel: "Alfresco Footprint" };
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
                Transparent Planning
              </span>
              <div className="h-0.5 w-12 bg-[#c5a059] mt-1"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              Renovation <span className="font-light text-zinc-400">Cost Estimator</span>
            </h2>

            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Planning your investment is the first step toward a successful build. Use our interactive estimator to gain immediate clarity on ballpark budgets for the Penrith and Western Sydney building market.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Includes licensed trades, certified waterproofing, and site management.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Adjusts for standard vs. architectural luxury finishes.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Every formal quote from Philmoor is fixed-price with zero hidden surprises.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Card */}
          <div className="lg:col-span-7 bg-[#1c1f26] p-6 sm:p-8 border border-[#323844] shadow-2xl">
            <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-[#c5a059] font-bold">
              <Calculator className="w-4 h-4" />
              <span>Interactive Budget Planner</span>
            </div>

            {/* Step 1: Select Type */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: "renovation", label: "Full Renovation" },
                  { id: "extension", label: "Home Extension" },
                  { id: "kitchen", label: "Designer Kitchen" },
                  { id: "bathroom", label: "Luxury Bathroom" },
                  { id: "outdoor", label: "Alfresco Pavilion" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`py-2.5 px-3 text-xs uppercase tracking-wider border font-medium transition-colors ${
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
                2. Finish &amp; Specification Level
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
            {projectType !== "bathroom" && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    3. Estimated Area ({sizeM2} m²)
                  </label>
                  <span className="text-xs text-[#c5a059] font-mono">{sizeM2} square metres</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="250"
                  step="5"
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
                    Estimated Investment Range (Inc. GST)
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {formatCurrency(estimate.low)} &ndash; {formatCurrency(estimate.high)}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-5 py-3 text-xs uppercase tracking-widest transition-colors shrink-0"
                >
                  <span>Lock In Site Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-[#373e4b] flex items-center gap-2 text-[11px] text-zinc-400">
                <Info className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>
                  Indicative estimate based on recent Penrith projects. Actual scope confirmed after free on-site consultation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
