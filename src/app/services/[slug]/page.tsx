import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";
import { Check, ArrowRight, Phone, ShieldCheck, Calendar, Clock } from "lucide-react";
import SeamlessHomes from "@/components/SeamlessHomes";
import StressFreeBanner from "@/components/StressFreeBanner";
import ContactSection from "@/components/ContactSection";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related projects
  const relatedProjects = projectsData.filter(
    (p) => p.category === slug || (slug === "home-renovations" && p.category === "renovations")
  );

  return (
    <main className="pt-24 pb-20 bg-[#faf9f6]">
      {/* Hero Section matching McGirr's dedicated service hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#15161a] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-[#141518]/70 to-[#141518]/50" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Penrith &amp; Greater Western Sydney
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold px-8 py-3.5 uppercase text-xs tracking-widest transition-all"
            >
              Book Site Feasibility
            </Link>
            <a
              href="tel:0488921345"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 uppercase text-xs tracking-widest transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              0488 921 345
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#9c7832] font-bold">
              Expertise &amp; Craft
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-zinc-950">
              Transforming Your Living Environment
            </h2>
            <p className="text-base text-zinc-700 leading-relaxed font-light">
              {service.fullDesc}
            </p>

            <div className="space-y-3 pt-4">
              <h3 className="text-xs uppercase tracking-wider text-zinc-900 font-bold mb-2">
                Scope &amp; Inclusions:
              </h3>
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-zinc-800">
                  <span className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#9c7832] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1f2228] text-white p-8 border border-[#343a46] shadow-xl space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white border-b border-[#343a46] pb-4">
              The Penrith Guarantee
            </h3>

            <div className="space-y-4 text-xs text-zinc-300">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c5a059] shrink-0" />
                <div>
                  <strong className="text-white block uppercase tracking-wider mb-0.5">
                    10-Year Structural Guarantee
                  </strong>
                  Fully certified construction adhering to the highest Australian Standards (BCA/NCC).
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#c5a059] shrink-0" />
                <div>
                  <strong className="text-white block uppercase tracking-wider mb-0.5">
                    Fixed-Price Contract
                  </strong>
                  Guaranteed milestones and zero unexpected surprise cost overruns.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#c5a059] shrink-0" />
                <div>
                  <strong className="text-white block uppercase tracking-wider mb-0.5">
                    Director Hands-On Daily
                  </strong>
                  Marcus Vance personally inspects and oversees works on site each day.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#343a46]">
              <Link
                href="/contact"
                className="w-full text-center block bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-bold py-3 uppercase text-xs tracking-widest transition-colors"
              >
                Inquire For This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Building Seamless Homes component */}
      {slug === "home-renovations" && <SeamlessHomes />}

      {/* 3 Step Specific Build Process */}
      <section className="py-20 bg-[#181a1f] text-white border-t border-[#292e37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Step-by-Step Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-2">
              How We Deliver {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="bg-[#21242b] p-8 border border-[#313642]">
                <div className="text-3xl font-mono font-bold text-[#c5a059] mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StressFreeBanner />
      <ContactSection />
    </main>
  );
}
