"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    service: "home-renovations",
    budget: "$100k - $250k",
    timeframe: "3-6 months",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please call us directly.");
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#141518] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info (modeled after McGirr's contact info) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-block mb-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                  Get In Touch
                </span>
                <div className="h-0.5 w-12 bg-[#c5a059] mt-1"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                Start Your <span className="font-light text-zinc-400">Project</span>
              </h2>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Whether you have architectural plans ready to quote or are simply exploring possibilities for your Penrith home, Philmoor and our team look forward to discussing your vision.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#22252e] border border-[#313642] flex items-center justify-center text-[#c5a059] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 block font-semibold">
                    Direct Builder Line
                  </span>
                  <a
                    href="tel:0497985592"
                    className="text-lg font-bold text-white hover:text-[#c5a059] transition-colors"
                  >
                    0497 985 592
                  </a>
                  <p className="text-xs text-zinc-400">Speak directly with Director Philmoor Galon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#22252e] border border-[#313642] flex items-center justify-center text-[#c5a059] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 block font-semibold">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:info@penrithrenovations.com.au"
                    className="text-sm font-semibold text-white hover:text-[#c5a059] transition-colors"
                  >
                    info@penrithrenovations.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#22252e] border border-[#313642] flex items-center justify-center text-[#c5a059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 block font-semibold">
                    Service Region
                  </span>
                  <p className="text-sm text-zinc-300">
                    Penrith, Glenmore Park, Jordan Springs, Jamisontown, Emu Plains &amp; Lower Blue Mountains
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#22252e] border border-[#313642] flex items-center justify-center text-[#c5a059] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 block font-semibold">
                    Licence &amp; Compliance
                  </span>
                  <p className="text-sm text-zinc-300">
                    NP4 Building Pty Ltd Licence No. 394821C
                  </p>
                  <p className="text-xs text-zinc-400">Fully insured with Home Building Compensation Fund (HBCF)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-[#1c1e24] p-6 sm:p-10 border border-[#2e333e] shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#c5a059]/20 text-[#c5a059] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-white">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Philmoor Galon has received your project details and will call you within 24 hours to arrange your on-site walkthrough.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        suburb: "",
                        service: "home-renovations",
                        budget: "$100k - $250k",
                        timeframe: "3-6 months",
                        message: "",
                      });
                    }}
                    className="text-xs uppercase tracking-widest text-[#c5a059] font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white border-b border-[#2d323c] pb-3">
                  Request Free On-Site Consultation
                </h3>

                {status === "error" && (
                  <div className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#252831] border border-[#373c47] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0412 345 678"
                      className="w-full bg-[#252831] border border-[#373c47] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com.au"
                      className="w-full bg-[#252831] border border-[#373c47] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Project Suburb
                    </label>
                    <input
                      type="text"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      placeholder="e.g. Glenmore Park"
                      className="w-full bg-[#252831] border border-[#373c47] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Primary Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#252831] border border-[#373c47] px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="home-renovations">Home Renovation</option>
                      <option value="home-extensions">Home Extension</option>
                      <option value="kitchen-renovations">Kitchen Remodel</option>
                      <option value="bathroom-renovations">Bathroom Luxury</option>
                      <option value="outdoor-living">Alfresco &amp; Outdoor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#252831] border border-[#373c47] px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="$50k - $100k">$50k - $100k</option>
                      <option value="$100k - $250k">$100k - $250k</option>
                      <option value="$250k - $400k">$250k - $400k</option>
                      <option value="$400k+">$400k+ (Whole Home)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                      Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full bg-[#252831] border border-[#373c47] px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="Immediately">Immediately (Ready)</option>
                      <option value="1-3 months">Within 1-3 Months</option>
                      <option value="3-6 months">Within 3-6 Months</option>
                      <option value="Planning stage">Early Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1 font-medium">
                    Tell us about your project &amp; ideas
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g. We want to remove the wall between our kitchen and lounge, install an island bench and stacker doors leading to our back deck..."
                    className="w-full bg-[#252831] border border-[#373c47] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5a059]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#c5a059] hover:bg-[#b08b47] disabled:opacity-50 text-zinc-950 font-bold py-4 text-xs uppercase tracking-widest transition-all duration-200 shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Sending Request..." : "Request Site Consultation"}</span>
                </button>

                <p className="text-[11px] text-zinc-400 text-center">
                  Your information is protected. We will never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
