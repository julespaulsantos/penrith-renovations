import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Users, CheckCircle, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "About Us | Penrith Renovations",
  description:
    "Learn about Penrith Renovations, our hands-on director Philmoor Galon, and our commitment to luxury home transformations in Western Sydney.",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20 bg-[#faf9f6]">
      {/* Page Header */}
      <section className="bg-[#141518] text-white py-20 px-4 sm:px-8 border-b border-[#292e37]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Our Story &amp; Philosophy
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            About <span className="font-light text-zinc-400">NP4 Building Pty Ltd</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Operating as Penrith Renovations, NP4 Building Pty Ltd is a specialist residential building company dedicated to master-crafted kitchen and luxury bathroom transformations across Western Sydney.
          </p>
        </div>
      </section>

      {/* Main Director Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-zinc-800">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-zinc-950">
              Kitchen &amp; Bathroom <span className="font-light text-zinc-600">Specialist Leadership</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-700 font-light">
              Unlike volume building corporations where wet-area renovations are subcontracted out to impersonal third parties, NP4 Building Pty Ltd operates on a core standard: <strong>specialised craftsmanship with the director personally on site daily.</strong>
            </p>

            <p className="text-base leading-relaxed text-zinc-700 font-light">
              Our director, Philmoor Galon, brings over 18 years of specialized carpentry, custom joinery, and residential building experience. Philmoor personally oversees spatial design, structural wall removals to open up kitchens, and double-layer waterproofing applications certified strictly to Australian Standard AS 3740.
            </p>

            <p className="text-base leading-relaxed text-zinc-700 font-light">
              Having served the Nepean and Penrith communities for years, Philmoor understands the nuances of local homes&mdash;from converting compartmentalized 1980s brick floorplans into expansive open entertainer kitchens, to retrofitting spa-inspired ensuites with curbless showers and heated travertine floors.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="p-4 bg-white border border-zinc-200 shadow-sm flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#c5a059]" />
                <div>
                  <div className="font-bold text-xs uppercase text-zinc-900">Builder Licence</div>
                  <div className="text-xs text-zinc-500">NP4 Building Pty Ltd #394821C</div>
                </div>
              </div>

              <div className="p-4 bg-white border border-zinc-200 shadow-sm flex items-center gap-3">
                <Award className="w-8 h-8 text-[#c5a059]" />
                <div>
                  <div className="font-bold text-xs uppercase text-zinc-900">Guaranteed Quality</div>
                  <div className="text-xs text-zinc-500">10-Year Waterproofing Warranty</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Philmoor Galon, Director of NP4 Building Pty Ltd overseeing a luxury kitchen build"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#16171b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              The Standard We Set
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-2">
              Our Core Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#21242b] p-8 border border-[#313642]">
              <div className="text-[#c5a059] font-mono text-2xl font-bold mb-4">01</div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                Guaranteed Fixed-Price
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                We despise surprise variations as much as you do. Our tenders are based on deep upfront structural investigations so that your budget is protected down to the dollar.
              </p>
            </div>

            <div className="bg-[#21242b] p-8 border border-[#313642]">
              <div className="text-[#c5a059] font-mono text-2xl font-bold mb-4">02</div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                Proven Local Trades
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                We only work with a vetted, licensed circle of local electricians, plumbers, tilers, and joiners who uphold our non-negotiable benchmark for precision.
              </p>
            </div>

            <div className="bg-[#21242b] p-8 border border-[#313642]">
              <div className="text-[#c5a059] font-mono text-2xl font-bold mb-4">03</div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                Weekly Transparent Comms
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                No guessing games. You receive scheduled weekly progress meetings and photo logs so you always know what trades are on site and what milestones are upcoming.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-8 py-4 uppercase text-xs tracking-widest transition-colors"
            >
              <span>Speak With Philmoor Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
