export interface Project {
  id: string;
  slug: string;
  title: string;
  suburb: string;
  category: "kitchens" | "bathrooms" | "combos";
  categoryLabel: string;
  thumbnail: string;
  images: string[];
  description: string;
  highlights: string[];
  stats: {
    duration: string;
    scope: string;
    completedYear: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "jamisontown-chef-kitchen",
    slug: "jamisontown-chef-kitchen",
    title: "Jamisontown Coastal Chef's Kitchen",
    suburb: "Jamisontown, Penrith",
    category: "kitchens",
    categoryLabel: "Designer Kitchen",
    thumbnail: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A complete structural wall removal and luxury kitchen makeover carried out by NP4 Building Pty Ltd. We opened up a closed 1980s brick kitchen into a breathtaking culinary showcase featuring a 3.6m engineered stone waterfall island, custom Polytec fluted timber joinery, and a concealed walk-in butler's pantry.",
    highlights: [
      "3.6m statement stone island with waterfall edges",
      "Structural wall removal with concealed steel support beam",
      "Concealed butler's pantry with secondary prep sink & wine fridge",
      "Miele induction cooktop with downdraft extraction",
    ],
    stats: {
      duration: "5 Weeks",
      scope: "Structural Wall Removal & Custom Kitchen",
      completedYear: "2025",
    },
  },
  {
    id: "leonay-spa-ensuite",
    slug: "leonay-spa-ensuite",
    title: "Leonay Travertine Spa Sanctuary",
    suburb: "Leonay",
    category: "bathrooms",
    categoryLabel: "Luxury Bathroom",
    thumbnail: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Engineered by NP4 Building Pty Ltd to replicate the tranquility of a five-star luxury day spa. This master ensuite renovation features floor-to-ceiling honed travertine tiles, an oversized curbless double shower with linear drains, a freestanding stone bath, and multi-stage certified waterproofing.",
    highlights: [
      "Honed Turkish travertine tiles with mitred edge transitions",
      "Curbless walk-in double shower with concealed floor gradient",
      "Freestanding solid stone composite bathtub",
      "In-wall cistern, heated towel ladders & underfloor heating",
    ],
    stats: {
      duration: "4 Weeks",
      scope: "Complete Master Ensuite Overhaul",
      completedYear: "2025",
    },
  },
  {
    id: "glenmore-entertainer-kitchen",
    slug: "glenmore-entertainer-kitchen",
    title: "The Glenmore Park Entertainer",
    suburb: "Glenmore Park",
    category: "kitchens",
    categoryLabel: "Designer Kitchen",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Designed for generous family entertaining in Glenmore Park. NP4 Building Pty Ltd crafted a dark contemporary kitchen with textured matte black 2PAC joinery, brushed warm brass hardware, custom LED strip illumination, and seamless bi-fold servery windows opening out to the alfresco terrace.",
    highlights: [
      "Matte fingerprint-resistant 2PAC joinery with brushed brass handles",
      "Integrated bi-fold servery window leading to outdoor dining",
      "Custom appliance garage with pocket retracting doors",
      "Sintered stone heat-and-scratch-proof countertops",
    ],
    stats: {
      duration: "6 Weeks",
      scope: "Kitchen, Servery & Servery Bar Overhaul",
      completedYear: "2025",
    },
  },
  {
    id: "jordan-springs-ensuite",
    slug: "jordan-springs-ensuite",
    title: "Jordan Springs Master Ensuite",
    suburb: "Jordan Springs",
    category: "bathrooms",
    categoryLabel: "Luxury Bathroom",
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A luminous bathroom redesign featuring a custom Tasmanian Oak floating double vanity, fluted glass shower screen, brushed nickel tapware from ABI Interiors, and backlit custom arched mirrors.",
    highlights: [
      "Custom floating double vanity crafted from native Tasmanian Oak",
      "Frameless fluted glass walk-in shower partition",
      "Recessed shower niches with integrated warm LED lighting",
      "10-Year certified Class III polyurethane waterproofing",
    ],
    stats: {
      duration: "3.5 Weeks",
      scope: "Full Bathroom Strip-Out & Luxury Fitout",
      completedYear: "2024",
    },
  },
  {
    id: "emu-plains-kitchen-bath-combo",
    slug: "emu-plains-kitchen-bath-combo",
    title: "Emu Plains Kitchen & Bathroom Package",
    suburb: "Emu Plains",
    category: "combos",
    categoryLabel: "Kitchen & Bath Package",
    thumbnail: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "The ultimate whole-home wet area transformation. NP4 Building Pty Ltd updated the kitchen, family bathroom, master ensuite, and laundry in a synchronized 7-week build, harmonizing Caesarstone finishes and brushed brass fixtures throughout the home.",
    highlights: [
      "Synchronized simultaneous renovation of 4 wet areas",
      "Consistent stone, timber, and brushed brass palette",
      "Estimated 15% cost savings through consolidated trade scheduling",
      "Daily on-site management by Philmoor Galon",
    ],
    stats: {
      duration: "7 Weeks",
      scope: "Kitchen, 2 Bathrooms & Laundry Package",
      completedYear: "2025",
    },
  },
  {
    id: "mulgoa-homestead-kitchen",
    slug: "mulgoa-homestead-kitchen",
    title: "Mulgoa Valley Luxury Kitchen & Scullery",
    suburb: "Mulgoa",
    category: "kitchens",
    categoryLabel: "Designer Kitchen",
    thumbnail: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A sprawling country-homestead kitchen renovation featuring an oversized curved marble island, custom shaker cabinetry, full secondary scullery prep room, and high-performance integrated Sub-Zero refrigeration.",
    highlights: [
      "Custom 2PAC French-shaker cabinetry with soft-close Blum hardware",
      "Natural Calacatta marble slab benchtops with protective sealant",
      "Secondary scullery equipped with commercial dishwasher and cold store",
      "Restored vaulted ceiling with directional architectural lighting",
    ],
    stats: {
      duration: "6 Weeks",
      scope: "Kitchen & Scullery Rebuild",
      completedYear: "2025",
    },
  },
];
