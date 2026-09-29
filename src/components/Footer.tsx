import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141518] text-[#9a9da3] pt-16 pb-10 border-t border-[#262830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Contact Info (modeled directly after McGirr) */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
                PENRITH <span className="text-[#c5a059] font-light">RENOVATIONS</span>
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-light">
                Kitchen &amp; Bathroom Specialists
              </p>
            </Link>

            <div className="space-y-3 text-sm">
              <p className="text-zinc-300">
                Penrith &amp; Lower Blue Mountains
                <br />
                Glenmore Park &amp; Western Sydney
              </p>

              <p>
                <a
                  href="tel:0497985592"
                  className="text-white hover:text-[#c5a059] font-medium transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  0497 985 592
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@penrithrenovations.com.au"
                  className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#c5a059]" />
                  info@penrithrenovations.com.au
                </a>
              </p>

              <p className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold pt-1">
                NP4 Building Pty Ltd • Lic #394821C
              </p>
            </div>
          </div>

          {/* Col 2: Welcome to Penrith Renovations (matches McGirr copy structure) */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase">
              Kitchen &amp; Bath Specialists
            </h4>
            <div className="w-10 h-0.5 bg-[#c5a059]"></div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Penrith Renovations by NP4 Building Pty Ltd delivers master-crafted kitchen transformations, spa-calibre bathrooms, and open-plan wall removals across Penrith and Greater Western Sydney.
            </p>
            <div className="pt-2">
              <Link
                href="/building-advice"
                className="text-xs uppercase tracking-wider text-[#c5a059] hover:text-[#dfba70] inline-flex items-center gap-1 font-semibold group"
              >
                Building Advice for Home Owners
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Col 3: Quick Navigation Menu */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase">Menu</h4>
            <div className="w-10 h-0.5 bg-[#c5a059]"></div>
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
            <div className="w-10 h-0.5 bg-[#c5a059]"></div>
            <p className="text-xs text-zinc-400 leading-relaxed">
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
                  className="bg-[#1f2126] text-zinc-300 px-2 py-1 border border-[#2d3039]"
                >
                  {suburb}
                </span>
              ))}
            </div>

            <div className="pt-2 text-xs text-zinc-400">
              <p className="text-zinc-300 font-medium">Business Hours:</p>
              <p>Monday - Friday: 7:00 AM - 5:30 PM</p>
              <p>Saturday: By Consultation Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-[#22252c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>Copyright &copy; 2026 Penrith Renovations. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>NSW Master Builders Member</span>
            <span>HIA Registered</span>
            <Link href="/contact" className="hover:text-zinc-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
