import React from "react";

export default function VisionBanner() {
  return (
    <section className="bg-[#1f2228] border-y border-[#2d323c] py-14 px-4 sm:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-200 leading-snug tracking-wide">
          Whether you&apos;re dreaming of a modern open-plan kitchen, a luxurious bathroom sanctuary, or a spacious outdoor alfresco living area, we have the expertise and creativity to{" "}
          <strong className="text-white font-semibold underline decoration-[#c5a059] decoration-2 underline-offset-8">
            turn your vision into reality.
          </strong>
        </h2>
      </div>
    </section>
  );
}
