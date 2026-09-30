import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StressFreeBanner() {
  return (
    <section className="bg-[#183324] py-16 px-4 sm:px-8 border-y border-[#254F38] text-[#FAF7F2] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#FAF7F2] leading-snug">
            At NP4 Building Pty Ltd we&apos;re committed to ensuring that your kitchen and bathroom renovation is as{" "}
            <strong className="text-white font-bold underline decoration-[#8DA792]/70 underline-offset-4">stress free</strong> as possible.
          </h2>
          <p className="text-xs sm:text-sm text-[#C2D6C8] mt-3 font-normal leading-relaxed">
            Fixed-price contracts, dust-controlled home protection, director Philmoor Galon on-site daily, and prompt, honest communication from concept to completion.
          </p>
        </div>

        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-2 bg-[#FAF7F2] hover:bg-white text-[#183324] font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-200 shadow-lg hover:-translate-y-0.5"
        >
          <span>Get in touch</span>
          <ArrowRight className="w-4 h-4 text-[#4F775D]" />
        </Link>
      </div>
    </section>
  );
}
