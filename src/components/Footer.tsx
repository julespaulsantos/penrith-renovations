import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14291D] text-[#C2D6C8] pt-16 pb-10 border-t border-[#1F3D2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Contact Info */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
                PENRITH <span className="text-[#8DA792] font-light">RENOVATIONS</span>
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#A0BAA7] font-medium">
                Kitchen &amp; Bathroom Specialists
              </p>
            </Link>

            <div className="space-y-3 text-sm">
              <p className="text-[#E2ECE5]">
                Penrith &amp; Lower Blue Mountains
                <br />
                Glenmore Park &amp; Western Sydney
              </p>

              <p>
                <a
                  href="tel:0497985592"
                  className="text-white hover:text-[#8DA792] font-medium transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#8DA792]" />
                  0497 985 592
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@penrithrenovations.com.au"
                  className="text-[#D2E2D7] hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#8DA792]" />
                  info@penrithrenovations.com.au
                </a>
              </p>

              <p className="text-xs uppercase tracking-widest text-[#8DA792] font-semibold pt-1">
                NP4 Building Pty Ltd • Lic #336447C
              </p>
            </div>
          </div>

          {/* Col 2: Welcome to Penrith Renovations */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase">
              Kitchen &amp; Bath Specialists
            </h4>
            <div className="w-10 h-0.5 bg-[#4F775D]"></div>
            <p className="text-sm leading-relaxed text-[#B7CABE]">
              Penrith Renovations by NP4 Building Pty Ltd delivers master-crafted kitchen transformations, spa-calibre bathrooms, and open-plan wall removals across Penrith and Greater Western Sydney.
            </p>
            <div className="pt-2">
              <Link
                href="/building-advice"
                className="text-xs uppercase tracking-wider text-[#8DA792] hover:text-[#A7C5B0] inline-flex items-center gap-1 font-semibold group"
              >
                Building Advice for Home Owners
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Col 3: Quick Navigation Menu */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase">Menu</h4>
            <div className="w-10 h-0.5 bg-[#4F775D]"></div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/kitchen-renovations" className="hover:text-white transition-colors">
                  Designer Kitchens
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-renovations" className="hover:text-white transition-colors">
                  Luxury Bathrooms
                </Link>
              </li>
              <li>
                <Link href="/services/kitchen-bathroom-packages" className="hover:text-white transition-colors">
                  Kitchen &amp; Bath Packages
                </Link>
              </li>
              <li>
                <Link href="/services/custom-joinery" className="hover:text-white transition-colors">
                  Custom Joinery &amp; Pantries
                </Link>
              </li>
              <li>
                <Link href="/services/open-plan-wall-removals" className="hover:text-white transition-colors">
                  Kitchen Wall Removals
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Site Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Suburbs & Hours */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase">
              Service Areas
            </h4>
            <div className="w-10 h-0.5 bg-[#4F775D]"></div>
            <p className="text-xs text-[#B7CABE] leading-relaxed">
              Proudly delivering tailored renovations across:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                "Penrith",
                "Glenmore Park",
                "Jordan Springs",
                "Jamisontown",
                "Emu Plains",
                "Leonay",
                "Mulgoa",
                "Cranebrook",
                "South Penrith",
                "Regentville",
                "Lapstone",
                "Springwood",
              ].map((suburb) => (
                <span
                  key={suburb}
                  className="bg-[#1B3827] text-[#D8E6DC] px-2 py-1 border border-[#274F37]"
                >
                  {suburb}
                </span>
              ))}
            </div>

            <div className="pt-2 text-xs text-[#B7CABE]">
              <p className="text-[#E2ECE5] font-medium">Business Hours:</p>
              <p>Monday - Friday: 7:00 AM - 5:30 PM</p>
              <p>Saturday: By Consultation Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-[#1C3828] flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#8DA792]">
          <p>Copyright &copy; 2026 Penrith Renovations. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2">
            <span>NSW Master Builders Member</span>
            <span>HIA Registered</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-[#2B543D]">•</span>
            <span className="inline-flex items-center gap-1 text-[#A0BAA7]">
              Made With{" "}
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/25 inline-block mx-0.5 -mt-0.5" aria-hidden="true" />{" "}
              By{" "}
              <a
                href="https://github.com/julespaulsantos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2ECE5] hover:text-white font-medium transition-colors hover:underline decoration-[#4F775D] underline-offset-2 ml-0.5"
              >
                Jules Santos
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
