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
  title: "Penrith Renovations | Expert Home Renovation Builders Penrith & Western Sydney",
  description:
    "Penrith Renovations are expert renovation builders delivering high-quality home upgrades, extensions, kitchens, bathrooms, and architectural transformations across Penrith, Glenmore Park, Jordan Springs, and Western Sydney.",
  keywords: [
    "Penrith Renovations",
    "Home renovation builders Penrith",
    "Builders Glenmore Park",
    "Home extensions Western Sydney",
    "Kitchen renovations Penrith",
    "Bathroom renovations Penrith",
    "Architectural renovations NSW",
  ],
  authors: [{ name: "Penrith Renovations" }],
  openGraph: {
    title: "Penrith Renovations | Expert Home Renovation Builders",
    description:
      "Transform your space with expert home renovation builders in Penrith & Western Sydney. Personalised director-led service from concept to completion.",
    url: "https://penrithrenovations.com.au",
    siteName: "Penrith Renovations",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penrith Renovations | Architectural Builders",
    description:
      "High-end home renovations, extensions, kitchens, and bathrooms in Penrith and Western Sydney.",
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
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    telephone: "0488 921 345",
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
      "Penrith",
      "Glenmore Park",
      "Jordan Springs",
      "Jamisontown",
      "Emu Plains",
      "Leonay",
      "Mulgoa",
      "Western Sydney",
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
