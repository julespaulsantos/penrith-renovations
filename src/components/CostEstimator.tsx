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
    <section className="py-24 bg-[#F5F1E9] text-[#22352a] border-t border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
                Transparent Pricing
              </span>
              <div className="h-0.5 w-12 bg-[#4F775D] mt-1"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#183324] leading-tight">
              Kitchen &amp; Bathroom <span className="font-light text-[#4F775D]">Cost Estimator</span>
            </h2>

            <p className="text-sm text-[#4A5D50] font-normal leading-relaxed">
              Transparent planning is essential for a stress-free build. As kitchen and bathroom specialists, <strong className="text-[#183324] font-semibold">NP4 Building Pty Ltd</strong> provides clear, itemized fixed-price quotes tailored to the Penrith and Western Sydney market.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-[#3B5243]">
                <Check className="w-4 h-4 text-[#4F775D] shrink-0 mt-0.5" />
                <span>Includes licensed trades, custom joinery, stone fabrication, and certified waterproofing.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3B5243]">
                <Check className="w-4 h-4 text-[#4F775D] shrink-0 mt-0.5" />
                <span>Save up to 15% with our combined Kitchen &amp; Bathroom packages.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#3B5243]">
                <Check className="w-4 h-4 text-[#4F775D] shrink-0 mt-0.5" />
                <span>Every quote from Philmorr Galon is fixed-price with zero hidden variations.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-[#E2DDD5] shadow-xl">
            <div className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-[#4F775D] font-bold">
              <Calculator className="w-4 h-4" />
              <span>Kitchen &amp; Bath Renovation Calculator</span>
            </div>

            {/* Step 1: Select Type */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-2 font-bold">
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
                    className={`py-3 px-3 text-xs uppercase tracking-wider border font-medium transition-all text-center ${
                      projectType === type.id
                        ? "bg-[#183324] text-white border-[#183324] font-bold shadow-sm"
                        : "bg-[#FAF7F2] text-[#334D3D] border-[#D8D2C5] hover:border-[#183324] hover:bg-[#F2ECE1]"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Finish Grade */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-2 font-bold">
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
                    className={`py-2.5 px-3 text-xs uppercase tracking-wider border font-medium transition-all ${
                      finishGrade === grade.id
                        ? "bg-[#183324] text-white border-[#183324] font-bold shadow-sm"
                        : "bg-[#FAF7F2] text-[#334D3D] border-[#D8D2C5] hover:border-[#183324] hover:bg-[#F2ECE1]"
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
                  <label className="text-xs uppercase tracking-wider text-[#4F775D] font-bold">
                    3. Kitchen Size ({sizeM2} m²)
                  </label>
                  <span className="text-xs text-[#183324] font-mono font-bold">{sizeM2} m² area</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="45"
                  step="2"
                  value={sizeM2}
                  onChange={(e) => setSizeM2(Number(e.target.value))}
                  className="w-full h-2 bg-[#E2DDD5] rounded-lg appearance-none cursor-pointer accent-[#183324]"
                />
              </div>
            )}

            {/* Results Output Box */}
            <div className="p-6 bg-[#EBF2EC] border border-[#C5D9CB]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#4F775D] font-bold block mb-1">
                    Estimated Investment Range (Inc. GST &amp; Trades)
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#183324] font-mono">
                    {formatCurrency(estimate.low)} &ndash; {formatCurrency(estimate.high)}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#183324] hover:bg-[#254F38] text-white font-bold px-5 py-3 text-xs uppercase tracking-widest transition-colors shrink-0 shadow-sm"
                >
                  <span>Book Free On-Site Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8DA792]" />
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D5E3D8] flex items-center gap-2 text-[11px] text-[#55695C]">
                <Info className="w-3.5 h-3.5 text-[#4F775D] shrink-0" />
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
