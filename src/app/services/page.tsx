import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, Check } from "lucide-react";
import StressFreeBanner from "@/components/StressFreeBanner";

export const metadata = {
  title: "Kitchen & Bathroom Renovation Services | NP4 Building Pty Ltd",
  description:
    "Explore our specialist kitchen and bathroom renovation services across Penrith, Glenmore Park, and Western Sydney: Designer kitchens, spa ensuites, packages, and custom joinery.",
};

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-20 bg-[#faf9f6]">
      {/* Header */}
      <section className="bg-[#141518] text-white py-20 px-4 sm:px-8 border-b border-[#292e37]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Specialist Wet Area Excellence
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            Kitchen &amp; Bathroom <span className="font-light text-zinc-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            From bespoke culinary kitchens with waterfall stone islands to hotel-calibre bathroom sanctuaries and combined multi-room packages, NP4 Building Pty Ltd delivers master-crafted excellence across Western Sydney.
          </p>
        </div>
      </section>

      {/* Services List Detail */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative aspect-[16/11] rounded overflow-hidden shadow-xl group">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              {/* Text */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="text-xs uppercase tracking-widest text-[#9c7832] font-bold">
                  Service #{index + 1}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-zinc-950">
                  {service.title}
                </h2>
                <p className="text-base text-zinc-700 leading-relaxed font-light">
                  {service.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs uppercase tracking-wider text-zinc-900 font-bold mb-3">
                    What&apos;s Included:
                  </h3>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-zinc-700">
                      <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#9c7832] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-[#181a1f] hover:bg-zinc-800 text-white font-bold px-6 py-3 uppercase text-xs tracking-widest transition-colors"
                  >
                    <span>View Service Guide</span>
                    <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-zinc-400 hover:border-zinc-900 text-zinc-900 font-semibold px-6 py-3 uppercase text-xs tracking-widest transition-colors"
                  >
                    <span>Book Quote</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <StressFreeBanner />
    </main>
  );
}
