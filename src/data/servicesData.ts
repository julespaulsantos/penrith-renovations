export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  heroImage: string;
  features: string[];
  processSteps: { title: string; desc: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "kitchen-renovations",
    slug: "kitchen-renovations",
    title: "Designer Kitchen Renovations",
    shortDesc:
      "Show-stopping culinary spaces featuring bespoke joinery, statement stone islands, and integrated European appliances.",
    fullDesc:
      "As kitchen renovation specialists, NP4 Building Pty Ltd transforms outdated, boxed-in kitchens into luminous, open-plan culinary hubs. We manage every single trade—from structural wall removals and electrical re-wiring to laser-measured stone fabrication and custom joinery—delivering a seamless, stress-free build.",
    heroImage: "/projects/real/perlie-kitchen-after.jpg",
    features: [
      "Custom 2PAC, Polytec, and natural timber veneer cabinetry",
      "Engineered stone, sintered porcelain, and natural marble waterfall islands",
      "Concealed butler's pantries, appliance garages, and integrated wine bars",
      "Structural beam installation for open-plan kitchen integration",
      "Fixed-price contract with zero hidden variation fees",
    ],
    processSteps: [
      {
        title: "3D Design & Ergonomics Consultation",
        desc: "We plan spatial flow, work triangles, and cabinetry storage tailored to how your family cooks and entertains.",
      },
      {
        title: "Demolition & Trade Rough-In",
        desc: "Precision removal of old cabinetry, structural wall alterations, and rough-ins for power, water, and gas.",
      },
      {
        title: "Cabinetry & Laser Stone Fitout",
        desc: "Installation of custom soft-close joinery followed by laser-templated stone benchtops and appliance commissioning.",
      },
    ],
  },
  {
    id: "bathroom-renovations",
    slug: "bathroom-renovations",
    title: "Luxury Bathroom & Ensuite Renovations",
    shortDesc:
      "Hotel-inspired spa sanctuaries with curbless walk-in showers, freestanding baths, and 10-year certified waterproofing.",
    fullDesc:
      "Turn your bathroom into a private sanctuary. NP4 Building Pty Ltd specialises in bespoke bathroom renovations, master ensuites, and powder rooms throughout Penrith. We pair exquisite artisan tiling with state-of-the-art waterproofing exceeding Australian Standard AS 3740.",
    heroImage: "/projects/real/lyn-bath-after.jpg",
    features: [
      "Multi-stage certified waterproofing backed by a 10-year written warranty",
      "Curbless walk-in showers with concealed linear strip drains",
      "Floating timber vanities with stone tops and recessed LED accent lighting",
      "Under-tile electric floor heating and heated towel rails",
      "Floor-to-ceiling porcelain, travertine, and zellige tile installation",
    ],
    processSteps: [
      {
        title: "Spatial Planning & Fixture Selection",
        desc: "Optimising layout for light, ventilation, storage, and premium tapware selections.",
      },
      {
        title: "Certified Double-Layer Waterproofing",
        desc: "Strict compliance application with photographic proof and official compliance certificate.",
      },
      {
        title: "Master Tiling & Fixture Fitout",
        desc: "Mitred tile edging, epoxy grouting, frameless glass installation, and luxury tapware fitoff.",
      },
    ],
  },
  {
    id: "kitchen-bathroom-packages",
    slug: "kitchen-bathroom-packages",
    title: "Kitchen & Bathroom Combo Packages",
    shortDesc:
      "Maximise value, cohesion, and cost savings by renovating your kitchen and bathrooms simultaneously.",
    fullDesc:
      "Our most popular renovation option for Penrith homeowners. Renovating your kitchen, main bathroom, ensuite, and laundry in a single synchronized project saves up to 15% on trade mobilization and ensures matching material palettes across your home.",
    heroImage: "/projects/real/irene-laundry-bath-after.jpg",
    features: [
      "Unified material and stone palette connecting kitchen, bathrooms, and laundry",
      "Synchronised trade scheduling minimising total renovation downtime",
      "Substantial cost savings on bulk plumbing, electrical, and stone procurement",
      "Single point of contact: Director Philmoor Galon on site daily",
    ],
    processSteps: [
      {
        title: "Whole-Home Wet Area Strategy",
        desc: "Harmonising colours, stones, and hardware across all wet areas simultaneously.",
      },
      {
        title: "Streamlined Sequential Construction",
        desc: "Demolition, rough-in, and waterproofing completed in coordinated phases.",
      },
      {
        title: "Unified Handover",
        desc: "Complete multi-room delivery with a single comprehensive warranty pack.",
      },
    ],
  },
  {
    id: "custom-joinery",
    slug: "custom-joinery",
    title: "Bespoke Joinery & Butler's Pantries",
    shortDesc:
      "Tailor-made kitchen cabinetry, walk-in pantries, custom laundry suites, and floating vanities.",
    fullDesc:
      "Exceptional kitchens and bathrooms rely on superior cabinetry. NP4 Building Pty Ltd manufactures custom joinery tailored down to the millimetre, incorporating premium Blum soft-close hardware, pull-out pantry larders, and concealed LED illumination.",
    heroImage: "/projects/real/edger-kitchen-after.jpg",
    features: [
      "Custom kitchen islands, fluted timber profiles, and breakfast bars",
      "Integrated butler's pantries with secondary sinks and prep surfaces",
      "Matching laundry cabinetry with concealed washing machines and linen hampers",
      "Floating vanity units built to withstand humid bathroom environments",
    ],
    processSteps: [
      {
        title: "Laser Site Measurement",
        desc: "Sub-millimetre digital laser measuring ensures flawless fit against existing walls.",
      },
      {
        title: "Precision Joinery Fabrication",
        desc: "Manufactured using high-moisture resistant board (HMR) and European hardware.",
      },
      {
        title: "Master Installation",
        desc: "Expert leveling, scribing, and integration with stone benchtops and splashbacks.",
      },
    ],
  },
  {
    id: "open-plan-wall-removals",
    slug: "open-plan-wall-removals",
    title: "Structural Wall Removals for Kitchens",
    shortDesc:
      "Knocking down load-bearing walls to merge dark, isolated kitchens with bright dining and living zones.",
    fullDesc:
      "Most older homes in the Penrith district suffer from small, closed-off kitchens. As licensed builders, NP4 Building Pty Ltd calculates structural loads, coordinates engineering certification, and installs flush-mounted steel beams so your new kitchen flows seamlessly into your living areas.",
    heroImage: "/projects/real/aj-kitchen-after.jpg",
    features: [
      "Structural load-bearing wall removal and steel beam (RSJ) installation",
      "Engineered certification and council/certifier documentation",
      "Floor leveling and ceiling patching for seamless open-plan continuity",
      "Safe, dust-controlled temporary containment screens",
    ],
    processSteps: [
      {
        title: "Structural Assessment",
        desc: "Identifying load-bearing walls, roof truss configurations, and plumbing services.",
      },
      {
        title: "Engineered Steel Installation",
        desc: "Propping ceilings, removing masonry/studs, and securing structural steel lintels.",
      },
      {
        title: "Open-Plan Preparation",
        desc: "Patching, flush ceiling plastering, and prepping the expanded open footprint for your dream kitchen.",
      },
    ],
  },
];
