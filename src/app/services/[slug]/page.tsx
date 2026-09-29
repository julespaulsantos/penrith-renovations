import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";
import { Check, ArrowRight, Phone, ShieldCheck, Calendar, Clock, MapPin } from "lucide-react";
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
  const relatedProjects = projectsData.filter((p) => {
    if (slug === "kitchen-renovations" || slug === "custom-joinery" || slug === "open-plan-wall-removals") {
      return p.category === "kitchens" || p.category === "combos";
    }
    if (slug === "bathroom-renovations") {
      return p.category === "bathrooms" || p.category === "combos";
    }
    return true;
  });

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
              href="tel:0497985592"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 uppercase text-xs tracking-widest transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              0497 985 592
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
                  Philmoor Galon personally inspects and oversees works on site each day.
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

      {/* Related Projects Showcase */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-[#faf9f6] border-t border-zinc-200 text-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-block mb-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#9c7832] font-semibold">
                    Completed Transformations
                  </span>
                  <div className="h-0.5 w-12 bg-[#c5a059] mt-1"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-zinc-900">
                  Featured {service.title} Work
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-900 hover:text-[#9c7832] transition-colors"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#181a1f]/80 text-[#c5a059] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 backdrop-blur-sm">
                      {project.categoryLabel}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#c5a059]" />
                        {project.suburb}
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#9c7832] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-600 line-clamp-2 mt-2 font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium">
                      <span>Timeline: {project.stats.duration}</span>
                      <Link
                        href="/projects"
                        className="text-[#9c7832] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold"
                      >
                        Explore Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <StressFreeBanner />
      <ContactSection />
    </main>
  );
}
