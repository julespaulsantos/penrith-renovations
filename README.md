# Penrith Renovations

A website for **Penrith Renovations**, modeled after the design language and structure of [McGirr Constructions](https://mcgirrconstructions.com.au/home-renovations/). Built with **React**, **Next.js (App Router)**, **Node.js**, **Tailwind CSS**, and **TypeScript**, ready for **GitHub** version control and **free hosting on Vercel**.

---

## 🌟 Features Modeled After McGirr Constructions

1. **Header & Navigation**:
   - Clean slate/charcoal header with licensing badge (`NSW Lic #394821C`), phone direct dial, and email.
   - Dropdown navigation for services (*Home Renovations, Home Extensions, Kitchens, Bathrooms, Outdoor Living*).
   - Responsive mobile navigation drawer.

2. **Hero Section**:
   - Tagline: *"Penrith & Greater Western Sydney"*
   - Headline: *"Home Renovation Builder"*
   - Subtitle: *"Need more space? Want to modernise?"*
   - Copy: Modeled after McGirr Constructions' architectural renovation narrative.
   - Trust highlights: Fixed-Price Guarantee, 10-Year Warranty, Director On-Site.

3. **Core Philosophy Banner**:
   - *"Whether you're dreaming of a modern open-plan kitchen, a luxurious bathroom sanctuary, or a spacious outdoor alfresco living area, we have the expertise and creativity to turn your vision into reality."*

4. **"Building Seamless Homes" Section**:
   - Focus on flow, functionality, open-plan structural wall removals, and architectural collaboration.

5. **"A Collaborative Build Process" (5 Steps)**:
   - 01. On-Site Consultation & Concept
   - 02. Design & Approvals (Penrith Council CDC / DA)
   - 03. Fixed-Price Tender (Zero hidden variations)
   - 04. Director-Led Construction (Daily on-site supervision by Philmoor Galon)
   - 05. Handover & 10-Year Warranty

6. **Recent Projects Showcase (4-Column Portfolio Grid)**:
   - Filterable by *All Works, Renovations, Extensions, Kitchens, Bathrooms, Alfresco*.
   - Interactive modal popup with high-resolution image carousel, duration, scope, and key highlights.

7. **"Stress-Free Building Journey" Callout Banner**:
   - Direct quote banner with immediate *"Get In Touch"* link.

8. **Interactive Renovation Cost Estimator**:
   - Allows prospective clients to calculate realistic ballpark budgets based on project type, finish grade (Builder Quality vs. Executive vs. Architectural Luxury), and floor area.

9. **Client Testimonials**:
   - 5-star verified reviews from homeowners in Jamisontown, Glenmore Park, Jordan Springs, and Leonay.

10. **Consultation Request Form & Node.js API**:
    - Interactive form backed by `/api/contact` on the Node.js server runtime.

11. **Dedicated Pages**:
    - `/about`: Company story, director profile, licensing, and credentials.
    - `/services`: Full breakdown of renovation and building solutions.
    - `/services/[slug]`: Dedicated pages for each specialty.
    - `/projects`: Complete portfolio gallery.
    - `/building-advice`: Homeowner guide for Penrith City Council approvals (CDC vs DA), budgeting, and asbestos management.
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
