# Penrith Renovations | NP4 Building Pty Ltd

A modern, high-converting website for **Penrith Renovations** by **NP4 Building Pty Ltd**, specialized in **Kitchen and Bathroom Renovations** across Penrith and Greater Western Sydney. Modeled after the architectural structure and trust elements of [McGirr Constructions](https://mcgirrconstructions.com.au/home-renovations/). Built with **React**, **Next.js (App Router)**, **Node.js**, **Tailwind CSS**, and **TypeScript**, version-controlled on **GitHub** and hosted with continuous deployment on **Vercel**.

---

## 🌟 Key Features & Specialisations

1. **Header & Navigation**:
   - Clean slate/charcoal header with licensing badge (`NSW Lic #394821C`), direct dial (`0497 985 592`), and email.
   - Direct navigation for specialized services (*Kitchen Renovations, Bathroom Renovations, Kitchen & Bath Combos, Custom Joinery, Open-Plan Wall Removals*).
   - Responsive mobile navigation drawer.

2. **Hero Section**:
   - Tagline: *"Penrith & Greater Western Sydney"*
   - Headline: *"Kitchen & Bathroom Renovations"*
   - Subtitle: *"Specialist Wet-Area Craftsmanship by NP4 Building Pty Ltd"*
   - Copy: Focus on bespoke cabinetry, luxury stone benchtops, AS 3740 waterproofed retreats, and licensed structural wall removals.
   - Trust highlights: Fixed-Price Guarantee, 10-Year Warranty, Director On-Site (Philmoor Galon).

3. **Core Philosophy Banner**:
   - *"Whether you're dreaming of an open-plan chef's kitchen, a hotel-inspired bathroom sanctuary, or a complete wet-area transformation, NP4 Building Pty Ltd has the licensed craftsmanship and design vision to make it a reality."*

4. **"Crafting Seamless Kitchens & Sanctuary Bathrooms" Section**:
   - Focus on ergonomic kitchen flow, Australian Standard AS 3740 waterproofing, zero-silica premium stone, and architectural joinery.

5. **"A Collaborative Build Process" (5 Steps)**:
   - 01. On-Site Consultation & Spatial Vision
   - 02. Detailed Design & Material Selection (Cabinetry, tile, stone & tapware)
   - 03. Transparent Fixed-Price Tender (Zero hidden variations)
   - 04. Director-Led Wet-Area Construction (Daily supervision by Philmoor Galon)
   - 05. Detailed Handover & 10-Year Waterproofing Warranty

6. **Recent Projects Showcase (Interactive Portfolio Grid)**:
   - Filterable by *All Projects, Designer Kitchens, Luxury Bathrooms, Kitchen & Bath Combos*.
   - Interactive modal popup with high-resolution Unsplash photography, duration, scope, and key highlights.

7. **"Stress-Free Building Journey" Callout Banner**:
   - Direct quote banner with immediate *"Get In Touch"* link and direct phone dial to `0497 985 592`.

8. **Interactive Kitchen & Bathroom Cost Estimator**:
   - Allows prospective clients to calculate realistic ballpark budgets based on project type (Kitchen, Ensuite/Bathroom, Combo, Wall Removal), finish grade (Designer Standard vs. Executive vs. Architectural Luxury), and room size.

9. **Client Testimonials**:
   - 5-star verified reviews from homeowners across Jamisontown, Glenmore Park, Jordan Springs, and Leonay celebrating kitchen and bathroom transformations.

10. **Consultation Request Form & Node.js API**:
    - Interactive form backed by `/api/contact` on the Node.js server runtime.

11. **Dedicated Pages**:
    - `/about`: Company story, director profile (Philmoor Galon), NP4 Building Pty Ltd credentials, and licensing.
    - `/services`: Full breakdown of Kitchen, Bathroom, Combo, Joinery, and Wall Removal solutions.
    - `/services/[slug]`: Dedicated deep-dive pages for each specialty.
    - `/projects`: Complete portfolio gallery of kitchen and bathroom transformations.
    - `/building-advice`: Homeowner guide for Penrith City Council approvals, AS 3740 waterproofing compliance, silica-free benchtops, and structural wall removals.
    - `/contact`: Direct booking page with interactive form.

12. **Local SEO & Schema.org**:
    - Embedded `LocalBusiness` JSON-LD structured data for Google Maps and local Penrith search rankings.

---

## 🚀 Getting Started Locally

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create an optimized production build:
```bash
npm run build
npm start
```

---

## 📦 Storing Your Code in GitHub

1. Create a new repository on [GitHub](https://github.com/new) named `penrith-renovations`.
2. Connect and push your local code:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/penrith-renovations.git

# Rename branch to main if not already
git branch -M main

# Push the code
git push -u origin main
```

---

## ⚡ Free Hosting on Vercel

Vercel is built specifically for Next.js / React and offers 100% free hosting with automatic continuous deployment:

### Method 1: Using the Vercel Web Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Select your `penrith-renovations` repository from GitHub.
4. Keep the default settings (Framework Preset: **Next.js**, Root Directory: `./`).
5. Click **"Deploy"**.
6. In ~60 seconds, your site will be live with a free SSL certificate (e.g., `https://penrith-renovations.vercel.app`).
7. Every time you push changes to GitHub, Vercel will automatically re-deploy your site!

### Method 2: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly
vercel
```
