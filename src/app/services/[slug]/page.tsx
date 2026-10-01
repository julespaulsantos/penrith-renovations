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

  // Related projects - strictly filtered so kitchen services only display kitchen projects
  const relatedProjects = projectsData.filter((p) => {
    if (slug === "kitchen-renovations" || slug === "custom-joinery" || slug === "open-plan-wall-removals") {
      return p.category === "kitchens";
    }
    if (slug === "bathroom-renovations") {
      return p.category === "bathrooms" || p.category === "combos";
    }
    if (slug === "kitchen-bathroom-packages") {
      return true;
    }
    return true;
  });

  return (
    <main className="pt-24 pb-20 bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#14291D] text-white py-20 px-4 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14291D] via-[#14291D]/80 to-[#14291D]/60" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8DA792] font-bold">
              Penrith &amp; Greater Western Sydney
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#FAF7F2] mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#D2E2D7] font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            {service.shortDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="bg-[#FAF7F2] hover:bg-white text-[#183324] font-bold px-8 py-3.5 uppercase text-xs tracking-widest transition-all shadow-md"
            >
              Book Site Feasibility
            </Link>
            <a
              href="tel:0497985592"
              className="bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-white/30 px-6 py-3.5 uppercase text-xs tracking-widest transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#8DA792]" />
              0497 985 592
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#4F775D] font-bold">
              Expertise &amp; Craft
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#183324]">
              Transforming Your Living Environment
            </h2>
            <p className="text-base text-[#3D5245] leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            <div className="space-y-3 pt-4">
              <h3 className="text-xs uppercase tracking-wider text-[#183324] font-bold mb-2">
                Scope &amp; Inclusions:
              </h3>
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#22352a]">
                  <span className="w-5 h-5 rounded-full bg-[#E8EFE9] flex items-center justify-center text-[#183324] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#4F775D]" />
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white text-[#22352a] p-8 border border-[#E2DDD5] shadow-xl space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wider text-[#183324] border-b border-[#E2DDD5] pb-4">
              The Penrith Guarantee
            </h3>

            <div className="space-y-4 text-xs text-[#55695C]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#4F775D] shrink-0" />
                <div>
                  <strong className="text-[#183324] block uppercase tracking-wider mb-0.5">
                    5-Year Structural Guarantee
                  </strong>
                  Fully certified construction adhering to the highest Australian Standards (BCA/NCC).
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#4F775D] shrink-0" />
                <div>
                  <strong className="text-[#183324] block uppercase tracking-wider mb-0.5">
                    Fixed-Price Contract
                  </strong>
                  Guaranteed milestones and zero unexpected surprise cost overruns.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#4F775D] shrink-0" />
                <div>
                  <strong className="text-[#183324] block uppercase tracking-wider mb-0.5">
                    Manager Hands-On Daily
                  </strong>
                  Philmorr Galon personally inspects and oversees works on site each day.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2DDD5]">
              <Link
                href="/contact"
                className="w-full text-center block bg-[#183324] hover:bg-[#254F38] text-white font-bold py-3 uppercase text-xs tracking-widest transition-colors shadow-sm"
              >
                Inquire For This Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Specific Build Process */}
      <section className="py-20 bg-[#F5F1E9] text-[#22352a] border-t border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
              Step-by-Step Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#183324] mt-2">
              How We Deliver {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#E2DDD5] shadow-sm">
                <div className="text-3xl font-mono font-bold text-[#4F775D] mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#183324] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#55695C] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Showcase */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-[#FAF7F2] border-t border-[#E2DDD5] text-[#22352a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-block mb-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
                    Completed Transformations
                  </span>
                  <div className="h-0.5 w-12 bg-[#4F775D] mt-1"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#183324]">
                  Featured {service.title} Work
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#183324] hover:text-[#4F775D] transition-colors"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#4F775D]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-[#E2DDD5] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#6B8E7B] transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F1E9]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#183324]/90 text-[#FAF7F2] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 backdrop-blur-sm border border-[#3A5D46]">
                      {project.categoryLabel}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-[#667E70] mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#4F775D]" />
                        {project.suburb}
                      </div>
                      <h3 className="text-lg font-bold text-[#183324] group-hover:text-[#4F775D] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#55695C] line-clamp-2 mt-2 font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#667E70] font-medium">
                      <span>Timeline: {project.stats.duration}</span>
                      <Link
                        href="/projects"
                        className="text-[#183324] group-hover:translate-x-1 group-hover:text-[#4F775D] transition-transform inline-flex items-center gap-1 font-semibold"
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
