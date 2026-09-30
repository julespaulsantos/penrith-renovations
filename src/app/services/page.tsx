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
    <main className="pt-28 pb-20 bg-[#FAF7F2]">
      {/* Header */}
      <section className="bg-[#183324] text-[#FAF7F2] py-20 px-4 sm:px-8 border-b border-[#244C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8DA792] font-bold">
              Specialist Wet Area Excellence
            </span>
            <div className="h-0.5 w-12 bg-[#8DA792] mx-auto mt-1"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#FAF7F2] mb-6">
            Kitchen &amp; Bathroom <span className="font-light text-[#A4C4AD]">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#D2E2D7] font-normal leading-relaxed">
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
                <div className="relative aspect-[16/11] rounded overflow-hidden shadow-xl border border-[#E2DDD5] group">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              {/* Text */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="text-xs uppercase tracking-widest text-[#4F775D] font-bold">
                  Service #{index + 1}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#183324]">
                  {service.title}
                </h2>
                <p className="text-base text-[#3D5245] leading-relaxed font-normal">
                  {service.fullDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs uppercase tracking-wider text-[#183324] font-bold mb-3">
                    What&apos;s Included:
                  </h3>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-[#22352a]">
                      <span className="w-5 h-5 rounded-full bg-[#E8EFE9] flex items-center justify-center text-[#183324] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#4F775D]" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 bg-[#183324] hover:bg-[#254F38] text-white font-bold px-6 py-3 uppercase text-xs tracking-widest transition-colors shadow-sm"
                  >
                    <span>View Service Guide</span>
                    <ArrowRight className="w-4 h-4 text-[#8DA792]" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-[#B3C8BA] hover:border-[#183324] text-[#183324] font-semibold px-6 py-3 uppercase text-xs tracking-widest transition-colors bg-white hover:bg-[#F5F1E9]"
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
