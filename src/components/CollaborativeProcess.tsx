import React from "react";
import Link from "next/link";
import { MessageSquare, Palette, Calculator, ShieldCheck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "On-Site Design & Spatial Review",
    description:
      "Philmorr visits your home to inspect current plumbing, structural walls, and electrical services, planning optimal work triangles and storage.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Stone, Tiles & 3D Plans",
    description:
      "We help you select stone benchtops, tapware, tile mitres, and custom cabinetry finishes, visualised with detailed layouts.",
  },
  {
    number: "03",
    icon: Calculator,
    title: "Fixed-Price Tender",
    description:
      "A fully itemised proposal with guaranteed fixed pricing, clear milestone dates, and generous fixture allowances.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Certified Waterproofing & Trades",
    description:
      "NP4 Building Pty Ltd handles structural removals, trade rough-ins, and multi-layer waterproofing certified strictly to AS 3740.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Custom Joinery & Handover",
    description:
      "Laser-templated stone benchtops, custom soft-close cabinetry, appliance commissioning, and our 10-year written warranty.",
  },
];

export default function CollaborativeProcess() {
  return (
    <section className="py-24 bg-[#F5F1E9] text-[#1E3B29] border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#2E583D] font-semibold">
              The Specialist Roadmap
            </span>
            <div className="h-0.5 w-12 bg-[#4F775D] mt-1"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#183324] mb-6">
            A Collaborative <span className="font-light text-[#4F775D]">Renovation Process</span>
          </h2>

          <div className="space-y-4 text-[#2C4033] font-light text-base sm:text-lg leading-relaxed">
            <p>
              Renovating wet areas like kitchens and bathrooms requires flawless trade coordination and uncompromising waterproofing. At <strong className="text-[#183324] font-semibold">NP4 Building Pty Ltd</strong>, we work hand-in-hand with you to choose durable materials and optimize ergonomics while protecting your budget.
            </p>
            <p>
              Our director, <strong className="text-[#183324] font-semibold">Philmorr Galon</strong>, takes a hands-on approach to every build &mdash; personally overseeing structural framing, plumbing pressure tests, waterproofing inspections, and stone templating to guarantee perfection.
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
                className="bg-[#FAF7F2] p-6 border border-[#E2DDD5] relative group hover:border-[#183324] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-[#4F775D]/40 group-hover:text-[#183324] transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded bg-[#E8EFE9] group-hover:bg-[#183324] flex items-center justify-center text-[#183324] group-hover:text-[#FAF7F2] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#183324] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#3B5243] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box in Forest Green */}
        <div className="mt-14 p-8 bg-[#183324] border border-[#274B35] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-lg font-bold text-[#FAF7F2] uppercase tracking-wider">
              Ready to upgrade your kitchen or bathroom?
            </h4>
            <p className="text-sm text-[#C2D6C8] mt-1 font-light">
              Philmorr is happy to review your ideas, layout options, or visit your property for a complimentary on-site feasibility appraisal.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#E8EFE9] hover:bg-white text-[#183324] font-bold px-6 py-3 uppercase text-xs tracking-widest transition-colors shadow-sm"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
