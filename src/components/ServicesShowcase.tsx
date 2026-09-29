import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-[#141518] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header modeled after McGirr */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Master Craftsmanship
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
            Our <span className="font-light text-zinc-400">Services</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 font-light">
            Comprehensive residential renovation and building solutions crafted specifically for homes throughout the Penrith and Nepean region.
          </p>
        </div>

        {/* 3-Column Visual Grid modeled after McGirr services block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-[#1c1e23] border border-[#2c303b] overflow-hidden flex flex-col justify-between hover:border-[#c5a059] transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1e23] via-transparent to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 text-xs text-zinc-300 mb-6">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
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
                  className="w-full inline-flex items-center justify-between bg-[#242730] hover:bg-[#c5a059] text-zinc-200 hover:text-zinc-950 font-bold px-4 py-3 text-xs uppercase tracking-widest transition-all duration-200"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
