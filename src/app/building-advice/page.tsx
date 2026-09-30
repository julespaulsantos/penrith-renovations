import React from "react";
import Link from "next/link";
import { FileText, ShieldCheck, AlertTriangle, Droplets, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import StressFreeBanner from "@/components/StressFreeBanner";

export const metadata = {
  title: "Kitchen & Bathroom Building Advice | NP4 Building Pty Ltd",
  description:
    "Expert renovation advice for Penrith homeowners: Bathroom waterproofing standards (AS 3740), kitchen stone safety, structural wall removals, and fixed-price contract protection.",
};

const adviceTopics = [
  {
    icon: Droplets,
    title: "Bathroom Waterproofing: Compliance with AS 3740",
    summary:
      "Over 75% of residential building disputes in NSW stem from defective wet-area waterproofing. How NP4 Building protects your home.",
    content: [
      "In NSW, bathroom waterproofing must strictly comply with Australian Standard AS 3740 (Waterproofing of domestic wet areas).",
      "We apply a Class III dual-layer elastomeric polyurethane membrane with bond-breaker tape on all wall-floor junctions, hob transitions, and internal corners.",
      "Every bathroom completed by NP4 Building Pty Ltd receives photographic verification and a formal 10-year waterproofing warranty certificate.",
      "All shower floor screeds are laid with precise gradients directing water directly into linear strip drains to eliminate puddling.",
    ],
  },
  {
    icon: Sparkles,
    title: "Modern Kitchen Benchtops & The Crystalline Silica Ban",
    summary:
      "Understanding safe, compliant, high-performance benchtop materials for your new kitchen.",
    content: [
      "As of July 2024, Australia has prohibited the fabrication and installation of engineered stone containing high crystalline silica.",
      "At NP4 Building Pty Ltd, we partner with premium certified suppliers offering zero-silica mineral surfaces, sintered porcelain (Dekton, Neolith), and sealed natural granite or marble.",
      "These modern porcelain and zero-silica slabs offer superior heat resistance, scratch protection, and timeless stone veining without health compromises.",
    ],
  },
  {
    icon: FileText,
    title: "Removing Walls for an Open-Plan Kitchen",
    summary:
      "What is involved when knocking down walls to connect your kitchen to the dining and living room?",
    content: [
      "Many 1970s&ndash;1990s homes in Penrith, Jamisontown, and South Penrith have small, boxed-in kitchens separated by load-bearing walls.",
      "Our licensed builder Philmorr Galon inspects roof trusses and ceiling joists to calculate structural loads accurately.",
      "We install concealed steel beams (RSJs) to support the roof load, creating a completely flush ceiling and seamless open living space.",
      "Most internal non-structural alterations do not require a council DA and can proceed immediately under Exempt or Complying Development.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "NSW Home Building Compensation Fund (HBCF) & Licences",
    summary:
      "Why you should only engage a fully licensed residential builder with active insurance.",
    content: [
      "Under NSW law, any residential building or renovation work exceeding $20,000 requires Home Building Compensation Fund (HBCF) insurance cover.",
      "This protects homeowners against non-completion or defective work for up to 6 years for major defects and 2 years for other defects.",
      "Always verify that your builder holds an unrestricted Contractor Licence in Carpentry or General Building. Philmorr Galon holds NP4 Building Pty Ltd Licence #394821C.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Avoiding the 'Low Tender / High Variation' Trap",
    summary:
      "Why cheap kitchen and bathroom quotes end up costing thousands more during demolition.",
    content: [
      "Some budget installers deliberately omit plumbing rough-in relocations, sub-floor leveling, electrical circuit upgrades, or waste disposal from initial quotes.",
      "Once your old kitchen or bathroom is torn out, unexpected 'variations' are introduced.",
      "Our tenders at NP4 Building Pty Ltd are 100% itemised with transparent PC allowances, guaranteeing your fixed-price contract remains truly fixed.",
    ],
  },
];

export default function BuildingAdvicePage() {
  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Header */}
      <section className="bg-[#183324] text-[#FAF7F2] py-20 px-4 sm:px-8 border-b border-[#244C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8DA792] font-bold">
              Homeowner Knowledge Base
            </span>
            <div className="h-0.5 w-12 bg-[#8DA792] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#FAF7F2] mb-6">
            Kitchen &amp; Bathroom <span className="font-light text-[#A4C4AD]">Renovation Advice</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#D2E2D7] font-normal leading-relaxed">
            Essential guidance on waterproofing compliance, benchtop materials, structural wall removals, and budget protections by <strong className="text-white font-semibold">NP4 Building Pty Ltd</strong>.
          </p>
        </div>
      </section>

      {/* Advice Topics */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        {adviceTopics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 sm:p-10 border border-[#E2DDD5] shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#E8EFE9] text-[#183324] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#183324]">
                  {topic.title}
                </h2>
              </div>

              <p className="text-sm font-medium text-[#4F775D] italic">
                {topic.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                {topic.content.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-sm text-[#22352a] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#4F775D] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Free Feasibility CTA */}
        <div className="p-8 sm:p-10 bg-[#183324] text-[#FAF7F2] border border-[#254F38] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="space-y-2 relative z-10">
            <h3 className="text-xl font-bold uppercase tracking-wider text-[#FAF7F2]">
              Planning a kitchen or bathroom renovation?
            </h3>
            <p className="text-sm text-[#C2D6C8] font-normal">
              Send us your floorplan or book a free on-site consultation with Philmorr Galon to discuss spatial possibilities and fixed-price estimates.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-[#FAF7F2] hover:bg-white text-[#183324] font-bold px-8 py-4 uppercase text-xs tracking-widest transition-colors flex items-center gap-2 relative z-10 shadow-md"
          >
            <span>Ask Philmorr Directly</span>
            <ArrowRight className="w-4 h-4 text-[#4F775D]" />
          </Link>
        </div>
      </section>

      <StressFreeBanner />
    </main>
  );
}
