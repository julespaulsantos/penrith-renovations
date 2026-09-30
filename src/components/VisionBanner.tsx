import React from "react";

export default function VisionBanner() {
  return (
    <section className="bg-[#F2ECE1] border-y border-[#DFD8CC] py-14 px-4 sm:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#233B2C] leading-snug tracking-wide">
          Whether you&apos;re dreaming of an expansive open-plan chef&apos;s kitchen with a waterfall stone island, or a tranquil hotel-inspired ensuite sanctuary, <span className="text-[#183324] font-semibold">NP4 Building Pty Ltd</span> has the specialist craftsmanship and licensed expertise to{" "}
          <strong className="text-[#183324] font-semibold underline decoration-[#4F775D] decoration-2 underline-offset-8">
            turn your vision into reality.
          </strong>
        </h2>
      </div>
    </section>
  );
}
