import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-[#FAF7F2] text-[#22352a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
              Specialist Craftsmanship
            </span>
            <div className="h-0.5 w-12 bg-[#4F775D] mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#183324]">
            Kitchen &amp; Bathroom <span className="font-light text-[#4F775D]">Services</span>
          </h2>
          <p className="text-[#55695C] text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Bespoke culinary kitchens, hotel-calibre bathrooms, and synchronized packages crafted by <strong className="text-[#183324] font-semibold">NP4 Building Pty Ltd</strong> across Penrith and Greater Western Sydney.
          </p>
        </div>

        {/* 3-Column Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-[#E2DDD5] overflow-hidden flex flex-col justify-between hover:border-[#6B8E7B] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F1E9]">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-[#183324] mb-2 group-hover:text-[#4F775D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#55695C] leading-relaxed font-normal mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#2C4033] mb-6">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F775D]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between bg-[#EBF2EC] hover:bg-[#183324] text-[#183324] hover:text-white font-bold px-4 py-3 text-xs uppercase tracking-widest transition-all duration-200 border border-[#D5E3D8]"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
