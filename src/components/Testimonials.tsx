import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#181a1f] text-white border-t border-[#2a2f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Client Testimonials
            </span>
            <div className="h-0.5 w-12 bg-[#c5a059] mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
            What Our <span className="font-light text-zinc-400">Clients Say</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 font-light">
            Genuine experiences from homeowners across Penrith and Western Sydney who trusted us with their largest financial investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#21242c] p-8 border border-[#313642] relative hover:border-[#c5a059] transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#c5a059]/20 absolute top-6 right-6" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#c5a059]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#2e3340] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#c5a059] mt-0.5">{item.suburb}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 block">
                    {item.projectType}
                  </span>
                  <span className="text-[10px] text-zinc-400">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
