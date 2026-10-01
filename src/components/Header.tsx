"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown, ShieldCheck } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar - Calming Deep Forest Green */}
      <div className="bg-[#183324] text-[#E4EDE7] text-xs py-2 px-4 sm:px-8 border-b border-[#244833]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#E4EDE7]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8DA792]" />
              NP4 Building Pty Ltd • NSW Lic #336447C • ABN: 79 676 281 799
            </span>
            <span className="hidden md:inline text-[#B5CCC0]">
              Penrith &amp; Western Sydney&apos;s Kitchen &amp; Bathroom Specialists
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="mailto:NP4BUILDING@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#8DA792]" />
              NP4BUILDING@gmail.com
            </a>
            <a
              href="tel:0497985592"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#8DA792] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8DA792]" />
              0497 985 592
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#B5CCC0] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar - Warm Organic Cream with Glassmorphism */}
      <nav
        className={`transition-all duration-300 ${isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E5DFD5]"
          : "bg-[#FAF7F2]/90 backdrop-blur-sm py-4 border-b border-[#EAE4DA]"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo in Forest Green & Sage */}
          <Link href="/" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-[#183324] uppercase group-hover:text-[#4F775D] transition-colors">
                PENRITH <span className="text-[#4F775D] font-light">RENOVATIONS</span>
              </span>
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#607768] font-light -mt-0.5">
              Kitchen &amp; Bathroom Specialists • NP4 Building Pty Ltd
            </span>
          </Link>

          {/* Desktop Navigation & Action CTA */}
          <div className="hidden lg:flex items-center">
            {/* Desktop Nav Links */}
            <div className="flex items-center gap-4 xl:gap-6 text-xs xl:text-sm">
              <Link
                href="/"
                className="font-medium tracking-wide uppercase text-[#233C2C] hover:text-[#183324] transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/services/kitchen-renovations"
                className="font-semibold tracking-wide uppercase text-[#2E583D] hover:text-[#183324] transition-colors whitespace-nowrap"
              >
                Kitchens
              </Link>
              <Link
                href="/services/bathroom-renovations"
                className="font-semibold tracking-wide uppercase text-[#2E583D] hover:text-[#183324] transition-colors whitespace-nowrap"
              >
                Bathrooms
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-1 font-medium tracking-wide uppercase text-[#233C2C] hover:text-[#183324] transition-colors py-2 whitespace-nowrap"
                >
                  All Services
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                </Link>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-[#FAF7F2] border border-[#DDD5C8] rounded shadow-xl py-3 z-50">
                    <Link
                      href="/services/kitchen-renovations"
                      className="block px-4 py-2.5 text-xs uppercase tracking-wider text-[#233C2C] hover:text-[#183324] hover:bg-[#EBF1EC] transition-colors"
                    >
                      Designer Kitchen Renovations
                    </Link>
                    <Link
                      href="/services/bathroom-renovations"
                      className="block px-4 py-2.5 text-xs uppercase tracking-wider text-[#233C2C] hover:text-[#183324] hover:bg-[#EBF1EC] transition-colors"
                    >
                      Luxury Bathroom Renovations
                    </Link>
                    <Link
                      href="/services/kitchen-bathroom-packages"
                      className="block px-4 py-2.5 text-xs uppercase tracking-wider text-[#233C2C] hover:text-[#183324] hover:bg-[#EBF1EC] transition-colors"
                    >
                      Kitchen &amp; Bath Combo Packages
                    </Link>
                    <Link
                      href="/services/custom-joinery"
                      className="block px-4 py-2.5 text-xs uppercase tracking-wider text-[#233C2C] hover:text-[#183324] hover:bg-[#EBF1EC] transition-colors"
                    >
                      Custom Joinery &amp; Pantries
                    </Link>
                    <Link
                      href="/services/open-plan-wall-removals"
                      className="block px-4 py-2.5 text-xs uppercase tracking-wider text-[#233C2C] hover:text-[#183324] hover:bg-[#EBF1EC] transition-colors"
                    >
                      Kitchen Wall Removals
                    </Link>
                    <div className="border-t border-[#E5DFD5] my-1"></div>
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-xs font-semibold text-[#2E583D] hover:text-[#183324] transition-colors"
                    >
                      Explore Specialised Services &rarr;
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                className="font-medium tracking-wide uppercase text-[#233C2C] hover:text-[#183324] transition-colors whitespace-nowrap"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="font-medium tracking-wide uppercase text-[#233C2C] hover:text-[#183324] transition-colors whitespace-nowrap"
              >
                About
              </Link>
              <Link
                href="/building-advice"
                className="font-medium tracking-wide uppercase text-[#233C2C] hover:text-[#183324] transition-colors whitespace-nowrap"
              >
                Advice
              </Link>
              <Link
                href="/contact"
                className="font-medium tracking-wide uppercase text-[#233C2C] hover:text-[#183324] transition-colors whitespace-nowrap"
              >
                Contact
              </Link>
            </div>

            {/* Clear Divider & Sleek Resized Action CTA Button */}
            <div className="ml-5 xl:ml-7 pl-5 xl:pl-7 border-l border-[#DDD5C8] flex items-center">
              <Link
                href="/contact"
                className="bg-[#183324] hover:bg-[#254F38] text-[#FAF7F2] font-semibold px-4 py-2 rounded text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#183324] hover:text-[#4F775D] p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#DDD5C8] px-6 py-6 space-y-4 shadow-lg">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-[#233C2C] hover:text-[#183324]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-[#233C2C] hover:text-[#183324]"
            >
              About Us
            </Link>
            <div className="space-y-2 pl-3 border-l-2 border-[#4F775D]">
              <span className="block text-xs uppercase tracking-widest text-[#2E583D] font-semibold">
                Services
              </span>
              <Link
                href="/services/kitchen-renovations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-[#233C2C] hover:text-[#183324] py-1 font-semibold"
              >
                Designer Kitchen Renovations
              </Link>
              <Link
                href="/services/bathroom-renovations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-[#233C2C] hover:text-[#183324] py-1 font-semibold"
              >
                Luxury Bathroom Renovations
              </Link>
              <Link
                href="/services/kitchen-bathroom-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-[#5D7365] hover:text-[#183324] py-1"
              >
                Kitchen &amp; Bath Combo Packages
              </Link>
              <Link
                href="/services/custom-joinery"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-[#5D7365] hover:text-[#183324] py-1"
              >
                Custom Joinery &amp; Pantries
              </Link>
              <Link
                href="/services/open-plan-wall-removals"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-[#5D7365] hover:text-[#183324] py-1"
              >
                Kitchen Wall Removals
              </Link>
            </div>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-[#233C2C] hover:text-[#183324]"
            >
              Recent Projects
            </Link>
            <Link
              href="/building-advice"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-[#233C2C] hover:text-[#183324]"
            >
              Building Advice for Home Owners
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-[#233C2C] hover:text-[#183324]"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-[#E5DFD5] flex flex-col gap-3">
              <a
                href="tel:0497985592"
                className="flex items-center justify-center gap-2 text-center bg-[#EBF1EC] text-[#183324] py-2.5 text-xs uppercase tracking-wider font-semibold border border-[#CBDCD0]"
              >
                <Phone className="w-4 h-4 text-[#4F775D]" />
                Call 0497 985 592
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-[#183324] hover:bg-[#254F38] text-[#FAF7F2] py-3 text-xs uppercase tracking-widest font-bold shadow-sm"
              >
                Request Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
