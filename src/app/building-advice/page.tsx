import React from "react";
import Link from "next/link";
import { FileText, HelpCircle, AlertTriangle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import StressFreeBanner from "@/components/StressFreeBanner";

export const metadata = {
  title: "Building Advice for Home Owners | Penrith Renovations",
  description:
    "Expert building advice for Penrith and Western Sydney homeowners: Council approvals (CDC vs DA), budgeting traps to avoid, and renovation planning tips.",
};

const adviceTopics = [
  {
    icon: FileText,
    title: "Complying Development (CDC) vs Council DA in Penrith",
    summary:
      "Understanding whether your extension or renovation can be fast-tracked through a private certifier or requires full Penrith City Council Development Application.",
    content: [
      "In NSW, many home additions, internal renovations, and patio pavilions qualify for Complying Development (CDC) under State Environmental Planning Policies (SEPP).",
      "CDC approvals typically take 2-4 weeks, bypassing council planning queues.",
      "If your property is in a designated bushfire zone (BAL-40/Flame Zone) or heritage conservation precinct, a standard Development Application (DA) with Penrith City Council is usually required.",
      "At Penrith Renovations, we conduct a free planning certificate check to confirm the fastest and most cost-effective approval pathway for your lot.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "NSW Home Building Compensation Fund (HBCF) & Licences",
    summary:
      "Why you should never work with an unverified builder or accept an owner-builder loophole on major works.",
    content:
      [
        "Under NSW law, any residential building work exceeding $20,000 requires Home Building Compensation Fund (HBCF) insurance cover.",
        "This protects homeowners against non-completion, defective work, or builder insolvency for up to 6 years for major defects and 2 years for other defects.",
        "Always verify that your builder holds an unrestricted Contractor Licence in Carpentry or General Building. Marcus Vance holds NSW Contractor Licence #394821C.",
      ],
  },
  {
    icon: AlertTriangle,
    title: "Avoiding the 'Low Tender / High Variation' Trap",
    summary:
      "Why the cheapest building quote almost always turns out to be the most expensive in the end.",
    content:
      [
        "Some builders deliberately under-quote initial tenders by excluding critical items (such as waste removal, council certifier fees, scaffolding, or electrical upgrades).",
        "Once demolition has begun and your house is gutted, heavy variations are introduced.",
        "Our tenders at Penrith Renovations are 100% itemised with transparent prime cost (PC) and provisional sum allowances, ensuring your fixed-price contract stays fixed.",
      ],
  },
  {
    icon: HelpCircle,
    title: "Managing Asbestos in Western Sydney Homes",
    summary:
      "Safe and certified identification for properties built or altered prior to 1990.",
    content:
      [
        "Many homes in older Penrith suburbs (Kingswood, Jamisontown, South Penrith, Cambridge Park) contain bonded asbestos in eaves, wet area wall linings, or roof sheeting.",
        "We engage licensed, certified asbestos removal specialists who safely remove, dispose of, and provide official clearance certificates before interior framing commences.",
      ],
  },
];

export default function BuildingAdvicePage() {
  return (
    <main className="pt-28 pb-20 bg-[#faf9f6]">
      {/* Header */}
      <section className="bg-[#141518] text-white py-20 px-4 sm:px-8 border-b border-[#292e37]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Homeowner Resources
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            Building Advice <span className="font-light text-zinc-400">for Home Owners</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Essential knowledge to help you navigate your upcoming home renovation, council approvals, and budgeting with confidence and zero stress.
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
              className="bg-white p-8 sm:p-10 border border-zinc-200 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-[#c5a059]/10 text-[#9c7832] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-zinc-900">
                  {topic.title}
                </h2>
              </div>

              <p className="text-sm font-medium text-zinc-600 italic">
                {topic.summary}
              </p>

              <div className="space-y-2.5 pt-2">
                {topic.content.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-sm text-zinc-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#9c7832] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Free Feasibility CTA */}
        <div className="p-8 sm:p-10 bg-[#1f2228] text-white border border-[#323640] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white">
              Unsure which approvals your property requires?
            </h3>
            <p className="text-sm text-zinc-300 font-light">
              Send us your address and ideas. We will review your zoning and provide practical guidance at no charge.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-8 py-4 uppercase text-xs tracking-widest transition-colors flex items-center gap-2"
          >
            <span>Ask Marcus Directly</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <StressFreeBanner />
    </main>
  );
}
