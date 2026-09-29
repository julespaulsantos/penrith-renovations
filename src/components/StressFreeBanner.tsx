import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StressFreeBanner() {
  return (
    <section className="bg-[#181a1e] py-16 px-4 sm:px-8 border-y border-[#292d37] text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 leading-snug">
            At NP4 Building Pty Ltd we&apos;re committed to ensuring that your kitchen and bathroom renovation is as{" "}
            <strong className="text-white font-bold">stress free</strong> as possible.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light">
            Fixed-price contracts, dust-controlled home protection, director Philmoor Galon on-site daily, and prompt, honest communication from concept to completion.
          </p>
        </div>

        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-8 py-4 uppercase text-xs tracking-widest transition-all duration-200 shadow-lg hover:-translate-y-0.5"
        >
          <span>Get in touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
