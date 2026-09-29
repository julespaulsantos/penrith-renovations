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
      {/* Top micro bar for high credibility */}
      <div className="bg-[#121316] text-[#b0b3b8] text-xs py-2 px-4 sm:px-8 border-b border-[#24272e]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
              NP4 Building Pty Ltd • NSW Lic #394821C
            </span>
            <span className="hidden md:inline text-zinc-400">
              Penrith &amp; Western Sydney&apos;s Kitchen &amp; Bathroom Specialists
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@penrithrenovations.com.au"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
              info@penrithrenovations.com.au
            </a>
            <a
              href="tel:0497985592"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              0497 985 592
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#18191d]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#2d3039]"
            : "bg-[#18191d]/90 backdrop-blur-sm py-4 border-b border-[#262830]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo modeled after architectural minimalism */}
          <Link href="/" className="group flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#c5a059] transition-colors">
                PENRITH <span className="text-[#c5a059] font-light">RENOVATIONS</span>
              </span>
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-light -mt-0.5">
              Kitchen &amp; Bathroom Specialists • NP4 Building Pty Ltd
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className="text-sm font-medium tracking-wide uppercase text-zinc-200 hover:text-[#c5a059] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services/kitchen-renovations"
              className="text-sm font-semibold tracking-wide uppercase text-[#c5a059] hover:text-[#dfba70] transition-colors"
            >
              Kitchens
            </Link>
            <Link
              href="/services/bathroom-renovations"
              className="text-sm font-semibold tracking-wide uppercase text-[#c5a059] hover:text-[#dfba70] transition-colors"
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
                className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-zinc-200 hover:text-[#c5a059] transition-colors py-2"
              >
                All Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#1f2127] border border-[#323640] rounded shadow-2xl py-3 z-50">
                  <Link
                    href="/services/kitchen-renovations"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#282b33] transition-colors"
                  >
                    Designer Kitchen Renovations
                  </Link>
                  <Link
                    href="/services/bathroom-renovations"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#282b33] transition-colors"
                  >
                    Luxury Bathroom Renovations
                  </Link>
                  <Link
                    href="/services/kitchen-bathroom-packages"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#282b33] transition-colors"
                  >
                    Kitchen &amp; Bath Combo Packages
                  </Link>
                  <Link
                    href="/services/custom-joinery"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#282b33] transition-colors"
                  >
                    Custom Joinery &amp; Pantries
                  </Link>
                  <Link
                    href="/services/open-plan-wall-removals"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#282b33] transition-colors"
                  >
                    Kitchen Wall Removals
                  </Link>
                  <div className="border-t border-[#2e313b] my-1"></div>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-xs font-semibold text-[#c5a059] hover:text-[#dfba70] transition-colors"
                  >
                    Explore Specialised Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="text-sm font-medium tracking-wide uppercase text-zinc-200 hover:text-[#c5a059] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium tracking-wide uppercase text-zinc-200 hover:text-[#c5a059] transition-colors"
            >
              About
            </Link>
            <Link
              href="/building-advice"
              className="text-sm font-medium tracking-wide uppercase text-zinc-200 hover:text-[#c5a059] transition-colors"
            >
              Advice
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium tracking-wide uppercase text-zinc-200 hover:text-[#c5a059] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#c5a059] hover:bg-[#b08b47] text-zinc-950 font-semibold px-5 py-2.5 rounded-none text-xs uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-200 hover:text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#16171b] border-b border-[#2c2f38] px-6 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-zinc-200 hover:text-[#c5a059]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-zinc-200 hover:text-[#c5a059]"
            >
              About Us
            </Link>
            <div className="space-y-2 pl-3 border-l-2 border-[#c5a059]/40">
              <span className="block text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                Services
              </span>
              <Link
                href="/services/kitchen-renovations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-zinc-300 hover:text-white py-1 font-semibold"
              >
                Designer Kitchen Renovations
              </Link>
              <Link
                href="/services/bathroom-renovations"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-zinc-300 hover:text-white py-1 font-semibold"
              >
                Luxury Bathroom Renovations
              </Link>
              <Link
                href="/services/kitchen-bathroom-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-zinc-400 hover:text-white py-1"
              >
                Kitchen &amp; Bath Combo Packages
              </Link>
              <Link
                href="/services/custom-joinery"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-zinc-400 hover:text-white py-1"
              >
                Custom Joinery &amp; Pantries
              </Link>
              <Link
                href="/services/open-plan-wall-removals"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs uppercase tracking-wide text-zinc-400 hover:text-white py-1"
              >
                Kitchen Wall Removals
              </Link>
            </div>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-zinc-200 hover:text-[#c5a059]"
            >
              Recent Projects
            </Link>
            <Link
              href="/building-advice"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-zinc-200 hover:text-[#c5a059]"
            >
              Building Advice for Home Owners
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-zinc-200 hover:text-[#c5a059]"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-[#262830] flex flex-col gap-3">
              <a
                href="tel:0497985592"
                className="flex items-center justify-center gap-2 text-center bg-[#252830] text-white py-2.5 text-xs uppercase tracking-wider font-semibold"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                Call 0497 985 592
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center bg-[#c5a059] text-zinc-950 py-3 text-xs uppercase tracking-widest font-bold"
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
