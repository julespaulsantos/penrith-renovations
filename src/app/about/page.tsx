import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Penrith Renovations",
  description:
    "Learn about Penrith Renovations, our hands-on manager Philmorr Galon, and our commitment to luxury home transformations in Western Sydney.",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Page Header */}
      <section className="bg-[#183324] text-[#FAF7F2] py-20 px-4 sm:px-8 border-b border-[#244C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8DA792] font-bold">
              Our Story &amp; Philosophy
            </span>
            <div className="h-0.5 w-12 bg-[#8DA792] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#FAF7F2] mb-6">
            About <span className="font-light text-[#A4C4AD]">NP4 Building Pty Ltd</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#D2E2D7] font-normal leading-relaxed">
            Operating as Penrith Renovations, NP4 Building Pty Ltd is a specialist residential building company dedicated to master-crafted kitchen and luxury bathroom transformations across Western Sydney.
          </p>
        </div>
      </section>

      {/* Main Director Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#22352a]">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#183324]">
              Kitchen &amp; Bathroom <span className="font-light text-[#4F775D]">Specialist Leadership</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#3D5245] font-normal">
              Unlike volume building corporations where wet-area renovations are subcontracted out to impersonal third parties, NP4 Building Pty Ltd operates on a core standard: <strong className="text-[#183324]">specialised craftsmanship with the director personally on site daily.</strong>
            </p>

            <p className="text-base leading-relaxed text-[#3D5245] font-normal">
              Our director, Philmorr Galon, brings over 18 years of specialized carpentry, custom joinery, and residential building experience. Philmorr personally oversees spatial design, structural wall removals to open up kitchens, and double-layer waterproofing applications certified strictly to Australian Standard AS 3740.
            </p>

            <p className="text-base leading-relaxed text-[#3D5245] font-normal">
              Having served the Nepean and Penrith communities for years, Philmorr understands the nuances of local homes&mdash;from converting compartmentalized 1980s brick floorplans into expansive open entertainer kitchens, to retrofitting spa-inspired ensuites with curbless showers and heated travertine floors.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="p-4 bg-white border border-[#E2DDD5] shadow-sm flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#4F775D]" />
                <div>
                  <div className="font-bold text-xs uppercase text-[#183324]">Builder Licence</div>
                  <div className="text-xs text-[#667E70]">NP4 Building Pty Ltd #336447C</div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E2DDD5] shadow-sm flex items-center gap-3">
                <Award className="w-8 h-8 text-[#4F775D]" />
                <div>
                  <div className="font-bold text-xs uppercase text-[#183324]">Guaranteed Quality</div>
                  <div className="text-xs text-[#667E70]">10-Year Waterproofing Warranty</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] rounded overflow-hidden shadow-2xl border border-[#E2DDD5]">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Philmorr Galon, Director of NP4 Building Pty Ltd overseeing a luxury kitchen build"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F5F1E9] text-[#22352a] border-t border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
              The Standard We Set
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#183324] mt-2">
              Our Core Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#E2DDD5] shadow-sm">
              <div className="text-[#4F775D] font-mono text-2xl font-bold mb-4">01</div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#183324] mb-2">
                Guaranteed Fixed-Price
              </h3>
              <p className="text-xs text-[#55695C] leading-relaxed font-normal">
                We despise surprise variations as much as you do. Our tenders are based on deep upfront structural investigations so that your budget is protected down to the dollar.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E2DDD5] shadow-sm">
              <div className="text-[#4F775D] font-mono text-2xl font-bold mb-4">02</div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#183324] mb-2">
                Proven Local Trades
              </h3>
              <p className="text-xs text-[#55695C] leading-relaxed font-normal">
                We only work with a vetted, licensed circle of local electricians, plumbers, tilers, and joiners who uphold our non-negotiable benchmark for precision.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#E2DDD5] shadow-sm">
              <div className="text-[#4F775D] font-mono text-2xl font-bold mb-4">03</div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-[#183324] mb-2">
                Weekly Transparent Comms
              </h3>
              <p className="text-xs text-[#55695C] leading-relaxed font-normal">
                No guessing games. You receive scheduled weekly progress meetings and photo logs so you always know what trades are on site and what milestones are upcoming.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#183324] hover:bg-[#254F38] text-white font-bold px-8 py-4 uppercase text-xs tracking-widest transition-colors shadow-md hover:shadow-lg"
            >
              <span>Speak With Philmorr Directly</span>
              <ArrowRight className="w-4 h-4 text-[#8DA792]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
