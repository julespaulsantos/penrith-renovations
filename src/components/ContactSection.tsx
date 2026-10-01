"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    service: "kitchen-renovations",
    budget: "$15k - $50k",
    timeframe: "1-3 months",
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
    <section id="contact" className="py-24 bg-[#F5F1E9] text-[#22352a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-block mb-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#4F775D] font-bold">
                  Get In Touch
                </span>
                <div className="h-0.5 w-12 bg-[#4F775D] mt-1"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#183324] mb-4">
                Start Your <span className="font-light text-[#4F775D]">Project</span>
              </h2>
              <p className="text-sm text-[#55695C] font-normal leading-relaxed">
                Whether you have architectural plans ready to quote or are simply exploring possibilities for your Penrith home, Philmorr and our team look forward to discussing your vision.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8EFE9] border border-[#D5E3D8] flex items-center justify-center text-[#183324] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#4F775D] block font-bold">
                    Direct Builder Line
                  </span>
                  <a
                    href="tel:0497985592"
                    className="text-lg font-bold text-[#183324] hover:text-[#4F775D] transition-colors"
                  >
                    0497 985 592
                  </a>
                  <p className="text-xs text-[#667E70]">Speak directly with manager Philmorr Galon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8EFE9] border border-[#D5E3D8] flex items-center justify-center text-[#183324] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#4F775D] block font-bold">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:NP4BUILDING@gmail.com"
                    className="text-sm font-semibold text-[#183324] hover:text-[#4F775D] transition-colors"
                  >
                    NP4BUILDING@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8EFE9] border border-[#D5E3D8] flex items-center justify-center text-[#183324] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#4F775D] block font-bold">
                    Service Region
                  </span>
                  <p className="text-sm text-[#22352a] font-medium">
                    Western Sydney, South Western Sydney, Eastern Sydney
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8EFE9] border border-[#D5E3D8] flex items-center justify-center text-[#183324] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#4F775D] block font-bold">
                    Licence &amp; Compliance
                  </span>
                  <p className="text-sm text-[#22352a] font-medium">
                    NP4 Building Pty Ltd Licence No. 336447C
                  </p>
                  <p className="text-xs text-[#667E70]">Fully insured with Home Building Compensation Fund (HBCF)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-[#E2DDD5] shadow-xl">
            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#E8EFE9] text-[#183324] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-[#183324]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#384C3F] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#183324]">{formData.name}</strong>. Philmorr Galon has received your project details and will call you within 24 hours to arrange your on-site walkthrough.
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
                    className="text-xs uppercase tracking-widest text-[#183324] font-bold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold uppercase tracking-wider text-[#183324] border-b border-[#EAE5DC] pb-3">
                  Request Free On-Site Consultation
                </h3>

                {status === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#22352a] placeholder-[#8A9C90] focus:outline-none focus:border-[#183324]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 0412 345 678"
                      className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#22352a] placeholder-[#8A9C90] focus:outline-none focus:border-[#183324]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@example.com.au"
                      className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#22352a] placeholder-[#8A9C90] focus:outline-none focus:border-[#183324]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                      Project Suburb
                    </label>
                    <input
                      type="text"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      placeholder="e.g. Glenmore Park"
                      className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#22352a] placeholder-[#8A9C90] focus:outline-none focus:border-[#183324]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                      Primary Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3 py-2.5 text-xs text-[#22352a] focus:outline-none focus:border-[#183324]"
                    >
                      <option value="kitchen-renovations">Designer Kitchen Renovation</option>
                      <option value="bathroom-renovations">Luxury Bathroom Renovation</option>
                      <option value="kitchen-bathroom-packages">Kitchen &amp; Bath Combo Package</option>
                      <option value="custom-joinery">Custom Joinery &amp; Pantry</option>
                      <option value="open-plan-wall-removals">Kitchen Wall Removal / Open-Plan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3 py-2.5 text-xs text-[#22352a] focus:outline-none focus:border-[#183324]"
                    >
                      <option value="$15k - $50k">$15k - $50k</option>
                      <option value="$50k - $100k">$50k - $100k</option>
                      <option value="$100k - $250k">$100k - $250k</option>
                      <option value="$250k - $400k">$250k - $400k</option>
                      <option value="$400k+">$400k+ (Whole Home)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                      Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3 py-2.5 text-xs text-[#22352a] focus:outline-none focus:border-[#183324]"
                    >
                      <option value="Immediately">Immediately (Ready)</option>
                      <option value="1-3 months">Within 1-3 Months</option>
                      <option value="3-6 months">Within 3-6 Months</option>
                      <option value="Planning stage">Early Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#4F775D] mb-1 font-bold">
                    Tell us about your project &amp; ideas
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g. We want to renovate our kitchen with an open-plan island bench and butler's pantry, plus upgrade the master ensuite with a walk-in double shower and freestanding stone bath..."
                    className="w-full bg-[#FAF7F2] border border-[#D8D2C5] px-3.5 py-2.5 text-sm text-[#22352a] placeholder-[#8A9C90] focus:outline-none focus:border-[#183324]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#183324] hover:bg-[#254F38] disabled:opacity-50 text-white font-bold py-4 text-xs uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#8DA792]" />
                  <span>{status === "submitting" ? "Sending Request..." : "Request Site Consultation"}</span>
                </button>

                <p className="text-[11px] text-[#667E70] text-center">
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
