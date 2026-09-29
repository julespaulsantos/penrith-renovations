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
    id: "home-renovations",
    slug: "home-renovations",
    title: "Home Renovations",
    shortDesc:
      "Transforming dated, compartmentalised houses into open, light-filled, functional modern homes.",
    fullDesc:
      "Whether your family has outgrown your current layout or you've bought a character property in the Penrith region that needs a complete contemporary update, we handle end-to-end structural and cosmetic renovations. We work with you from concept drawings to council permits through to the final polish.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Open-plan living conversions and structural wall removals",
      "Full internal re-modelling and flow optimisation",
      "Architectural flooring, lighting, and custom joinery",
      "Council approval management (DA and Fast-Track CDC)",
      "Strict fixed-price contract with zero hidden variations",
    ],
    processSteps: [
      {
        title: "Site Feasibility & Design Review",
        desc: "We assess your current floor plan, structure, and budget to map out the ideal layout.",
      },
      {
        title: "Fixed-Price Proposal",
        desc: "A fully itemised, transparent quotation with specified milestones and timeline.",
      },
      {
        title: "Hands-on Master Construction",
        desc: "Our director is personally on-site managing licensed local Penrith trades daily.",
      },
    ],
  },
  {
    id: "home-extensions",
    slug: "home-extensions",
    title: "Home Extensions & Additions",
    shortDesc:
      "Add substantial living space, extra bedrooms, or a second storey without the stress of moving.",
    fullDesc:
      "Avoid the high stamp duty and hassle of selling in Western Sydney. A thoughtfully engineered ground-floor extension or second-storey addition allows you to expand your home to accommodate growing teenagers, multi-generational living, or dedicated work-from-home suites.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Ground floor rear living & master suite extensions",
      "Second-storey additions engineered to seamlessly match existing rooflines",
      "Granny flats and luxury guest pavilions",
      "Structural engineering and foundation reinforcement",
      "Bushfire (BAL) and flood zoning compliance expertise in Western Sydney",
    ],
    processSteps: [
      {
        title: "Architectural & Engineering Drawings",
        desc: "Precision engineering to guarantee structural integrity and seamless roof integration.",
      },
      {
        title: "Council Approvals",
        desc: "Complete handling of Penrith City Council DA or Private Certifier CDC approvals.",
      },
      {
        title: "Seamless Build",
        desc: "We enclose and weatherproof the new addition rapidly to minimise disruption to your daily life.",
      },
    ],
  },
  {
    id: "kitchen-renovations",
    slug: "kitchen-renovations",
    title: "Designer Kitchen Renovations",
    shortDesc:
      "The heart of your home engineered with culinary ergonomics, premium stone, and bespoke joinery.",
    fullDesc:
      "A great kitchen balances show-stopping aesthetics with durable functionality. We design and build culinary spaces featuring massive statement waterfall islands, hidden walk-in butler's pantries, soft-close Blum hardware, and high-performance European appliances.",
    heroImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom 2PAC, Polytec, and natural timber veneer cabinetry",
      "Engineered stone, porcelain, and natural marble benchtops",
      "Smart storage solutions, concealed appliance garages & wine bars",
      "Electrical, LED track illumination & plumbing reconfiguration",
    ],
    processSteps: [
      {
        title: "3D Design & Material Selection",
        desc: "Visualise your layout in 3D and select premium stones, tapware, and cabinetry finishes.",
      },
      {
        title: "Demolition & Trade Rough-In",
        desc: "Careful removal of old cabinets, updating wiring, and precision plumbing rough-ins.",
      },
      {
        title: "Installation & Stone Templating",
        desc: "Cabinetry installation followed by laser-measured stone fabrication and appliance fitout.",
      },
    ],
  },
  {
    id: "bathroom-renovations",
    slug: "bathroom-renovations",
    title: "Luxury Bathroom Renovations",
    shortDesc:
      "Spa-like sanctuaries featuring frameless glass, freestanding stone baths, and heated floors.",
    fullDesc:
      "Turn your morning routine into a relaxing ritual. Our licensed waterproofing specialists and master tilers build bathrooms that stand the test of time, backed by an industry-leading 10-year waterproofing guarantee.",
    heroImage:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Multi-stage waterproofing certified above Australian Standards (AS 3740)",
      "Curbless walk-in showers with concealed linear strip drains",
      "Floating timber vanities with recessed LED undermount lighting",
      "Thermostatic dual showers, freestanding baths, and in-wall cisterns",
    ],
    processSteps: [
      {
        title: "Concept & Spatial Layout",
        desc: "Maximising light, ventilation, and movement in your ensuite or family bathroom.",
      },
      {
        title: "Certified Waterproofing",
        desc: "Double-membrane waterproofing with certificate of compliance before any tile is laid.",
      },
      {
        title: "Precision Tiling & Fixtures",
        desc: "Mitred tile edges, epoxy grouting, and installation of luxury tapware and mirrors.",
      },
    ],
  },
  {
    id: "outdoor-living",
    slug: "outdoor-living",
    title: "Alfresco & Outdoor Living",
    shortDesc:
      "Extend your living outdoors with covered architectural alfrescos, BBQ kitchens, and timber decks.",
    fullDesc:
      "Enjoy the quintessential Australian outdoor lifestyle throughout all seasons. We build custom insulated patio pavilions, timber decking, integrated outdoor kitchens, and motorized louvre pergolas that connect your indoor lounge with the backyard.",
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom insulated pitched and raked patio roofs",
      "Built-in outdoor kitchens with gas BBQ, rangehood, and bar refrigeration",
      "Commercial-grade timber decking (Merbau, Blackbutt, or composite Trex)",
      "Recessed ceiling radiant heaters and ceiling fans for year-round comfort",
    ],
    processSteps: [
      {
        title: "Solar Orientation & Layout",
        desc: "Positioning rooflines and screening for optimal shade, winter sun, and privacy.",
      },
      {
        title: "Structural Framework & Roofing",
        desc: "Heavy-duty structural posts, insulated roofing, and electrical rough-in.",
      },
      {
        title: "Fitout & Outdoor Finishes",
        desc: "Cabinetry installation, decking, ceiling linings, and ambient evening lighting.",
      },
    ],
  },
];
