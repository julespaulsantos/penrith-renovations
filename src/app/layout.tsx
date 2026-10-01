import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Penrith Renovations | Kitchen & Bathroom Specialists | NP4 Building Pty Ltd",
  description:
    "NP4 Building Pty Ltd are specialist kitchen and bathroom renovation builders in Penrith, Glenmore Park, and Western Sydney. Bespoke cabinetry, statement stone islands, and luxury spa ensuites led by Philmorr Galon.",
  keywords: [
    "Kitchen renovations Penrith",
    "Bathroom renovations Penrith",
    "NP4 Building Pty Ltd",
    "Kitchen builders Western Sydney",
    "Luxury bathroom renovations Glenmore Park",
    "Custom kitchen joinery Penrith",
    "Ensuite renovations Jordan Springs",
    "Kitchen wall removal Penrith",
  ],
  authors: [{ name: "NP4 Building Pty Ltd" }],
  openGraph: {
    title: "Penrith Renovations | Kitchen & Bathroom Specialists",
    description:
      "Transform your kitchen and bathroom with NP4 Building Pty Ltd. Personalised director-led service from concept to completion across Penrith and Western Sydney.",
    url: "https://penrithrenovations.com.au",
    siteName: "Penrith Renovations",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penrith Renovations | Kitchen & Bathroom Specialists",
    description:
      "Bespoke designer kitchens and luxury bathroom sanctuaries by NP4 Building Pty Ltd in Penrith and Western Sydney.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Penrith Renovations",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    telephone: "0497 985 592",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "High Street",
      addressLocality: "Penrith",
      addressRegion: "NSW",
      postalCode: "2750",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.7511,
      longitude: 150.6942,
    },
    areaServed: [
      "Western Sydney",
      "South Western Sydney",
      "Eastern Sydney",
    ],
    url: "https://penrithrenovations.com.au",
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-[#1c1d21] antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
