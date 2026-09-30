import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAF7F2] text-[#22352a] border-t border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
              Client Testimonials
            </span>
            <div className="h-0.5 w-12 bg-[#4F775D] mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#183324]">
            What Our <span className="font-light text-[#4F775D]">Clients Say</span>
          </h2>
          <p className="text-[#55695C] text-sm sm:text-base mt-4 font-normal leading-relaxed">
            Genuine experiences from homeowners across Penrith and Western Sydney who trusted us with their largest financial investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 border border-[#E2DDD5] relative hover:border-[#6B8E7B] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#4F775D]/15 absolute top-6 right-6" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#4F775D]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#4F775D] text-[#4F775D]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#384C3F] font-normal leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE5DC] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#183324]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#4F775D] font-semibold mt-0.5">{item.suburb}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-[#667E70] block font-medium">
                    {item.projectType}
                  </span>
                  <span className="text-[10px] text-[#86998D]">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
