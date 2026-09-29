import React from "react";
import Link from "next/link";
import { MessageSquare, FileCheck2, Calculator, HardHat, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "On-Site Consultation & Concept",
    description:
      "We meet at your home to explore your aspirations, examine the structure, discuss budget parameters, and review potential layout innovations.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Design & Approvals",
    description:
      "We coordinate architectural plans, structural engineering, and fast-track Complying Development (CDC) or Penrith City Council DA approvals.",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Fixed-Price Tender",
    description:
      "A crystal-clear, fully specified quotation with guaranteed fixed pricing, timeline milestones, and premium PC item allowances.",
  },
  {
    number: "04",
    icon: HardHat,
    title: "Director-Led Construction",
    description:
      "Marcus Vance and our trusted team of licensed trades build with meticulous craft, holding weekly site meetings to keep you fully informed.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Handover & 10-Yr Warranty",
    description:
      "A thorough final walk-through, thorough professional clean, certification certificates, and our 10-year structural & waterproofing warranty.",
  },
];

export default function CollaborativeProcess() {
  return (
    <section className="py-24 bg-[#181a1f] text-white border-t border-[#292e37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header modeled after McGirr */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Transparent &amp; Stress-Free
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mt-1"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            A Collaborative <span className="font-light text-zinc-400">Build Process</span>
          </h2>

          <div className="space-y-4 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              We believe that renovating your home should be an empowering, collaborative journey. Our dedicated team works closely with you every step of the way, providing the clear options and transparent advice you need to make informed decisions while remaining true to your vision and budget.
            </p>
            <p>
              Our director, Marcus Vance, takes a genuinely hands-on approach to every renovation &mdash; being actively involved from preliminary design through on-site framing to final finishing. Regular site meetings and real-time communication ensure your expectations are consistently exceeded.
            </p>
          </div>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#21242b] p-6 border border-[#313642] relative group hover:border-[#c5a059] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-[#c5a059]/40 group-hover:text-[#c5a059] transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded bg-[#2b2f3a] group-hover:bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 p-8 bg-[#22262e] border border-[#373e4b] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">
              Have existing plans or just getting started?
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Marcus is happy to review your floorplans or visit your property for a complimentary feasibility appraisal.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-6 py-3 uppercase text-xs tracking-widest transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
