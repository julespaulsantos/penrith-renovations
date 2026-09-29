import React from "react";

export default function VisionBanner() {
  return (
    <section className="bg-[#1f2228] border-y border-[#2d323c] py-14 px-4 sm:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-200 leading-snug tracking-wide">
          Whether you&apos;re dreaming of an expansive open-plan chef&apos;s kitchen with a waterfall stone island, or a tranquil hotel-inspired ensuite sanctuary, <span className="text-[#c5a059] font-medium">NP4 Building Pty Ltd</span> has the specialist craftsmanship and licensed expertise to{" "}
          <strong className="text-white font-semibold underline decoration-[#c5a059] decoration-2 underline-offset-8">
            turn your vision into reality.
          </strong>
        </h2>
      </div>
    </section>
  );
}
