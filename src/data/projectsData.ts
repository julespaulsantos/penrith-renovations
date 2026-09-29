export interface Project {
  id: string;
  slug: string;
  title: string;
  suburb: string;
  category: "renovations" | "extensions" | "kitchens" | "bathrooms" | "outdoor";
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
    id: "nepean-street",
    slug: "nepean-street-jamisontown",
    title: "Nepean River Sanctuary",
    suburb: "Jamisontown / Penrith",
    category: "renovations",
    categoryLabel: "Full Home Renovation",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A complete ground floor architectural transformation turning an enclosed 1980s brick home into an expansive open-plan sanctuary overlooking the Nepean River precinct. Featuring custom timber joinery, floor-to-ceiling glass sliding doors, and seamless indoor-outdoor polished concrete flow.",
    highlights: [
      "Open-plan living & kitchen reconfiguration",
      "Architectural black steel framed glazing",
      "Custom Tasmanian Oak cabinetry",
      "Polished concrete flooring with underfloor heating",
    ],
    stats: {
      duration: "18 Weeks",
      scope: "Full Interior & Rear Alfresco Overhaul",
      completedYear: "2025",
    },
  },
  {
    id: "glenmore-pavilion",
    slug: "glenmore-pavilion",
    title: "The Glenmore Pavilion",
    suburb: "Glenmore Park",
    category: "outdoor",
    categoryLabel: "Alfresco & Outdoor Living",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A luxury resort-style outdoor living pavilion equipped with a built-in outdoor kitchen, cedar raked ceiling, recessed heaters, and seamless transition from the main living room to the poolside terrace.",
    highlights: [
      "Raked western red cedar ceiling with integrated LED uplighting",
      "Outdoor chef's kitchen with Dekton stone benchtops",
      "Flush-threshold recessed track stacking sliding doors",
      "Integrated audio and multi-season climate control",
    ],
    stats: {
      duration: "10 Weeks",
      scope: "Architectural Pavilion & Poolside Decking",
      completedYear: "2025",
    },
  },
  {
    id: "jordan-springs-addition",
    slug: "jordan-springs-addition",
    title: "Jordan Springs Modern Addition",
    suburb: "Jordan Springs",
    category: "extensions",
    categoryLabel: "Home Extension",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Designed for a growing family, this modern rear extension added an executive master retreat, walk-in dressing room, and a light-drenched family rumpus room with skylights that frame tree canopy views.",
    highlights: [
      "65m² ground level extension with 3.2m raked ceilings",
      "Velux automated solar skylights with rain sensors",
      "Sound-insulated parent retreat & private courtyard",
      "Seamless blend with existing exterior facade",
    ],
    stats: {
      duration: "14 Weeks",
      scope: "Ground Floor Extension & Structural Alterations",
      completedYear: "2024",
    },
  },
  {
    id: "emu-plains-kitchen",
    slug: "emu-plains-kitchen",
    title: "Emu Plains Coastal Kitchen",
    suburb: "Emu Plains",
    category: "kitchens",
    categoryLabel: "Kitchen Transformation",
    thumbnail: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "An extraordinary kitchen overhaul replacing a dark, boxed-in layout with a showpiece 3.4m curved quartz island bench, hidden butler's pantry, and brushed brass ABI Interiors tapware.",
    highlights: [
      "Curved fluted island with engineered stone waterfall edge",
      "Concealed butler's pantry with wine fridge & secondary wash station",
      "Fully integrated Miele appliances & induction cooking",
      "Warm ambient LED under-cabinet strip lighting",
    ],
    stats: {
      duration: "5 Weeks",
      scope: "Complete Kitchen & Walk-in Pantry Renovation",
      completedYear: "2025",
    },
  },
  {
    id: "leonay-ensuite",
    slug: "leonay-luxury-ensuite",
    title: "Leonay Spa Sanctuary",
    suburb: "Leonay",
    category: "bathrooms",
    categoryLabel: "Luxury Bathroom",
    thumbnail: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Inspired by high-end boutique hotels, this master ensuite features floor-to-ceiling travertine tiles, an oversized walk-in double shower with frameless glass, and a freestanding solid stone bathtub.",
    highlights: [
      "Hand-selected Turkish travertine porcelain tiles",
      "Custom floating double vanity with reeded oak doors",
      "Thermostatic dual rainfall shower heads in brushed nickel",
      "Under-tile electric floor heating and heated towel rails",
    ],
    stats: {
      duration: "4 Weeks",
      scope: "Ensuite Expansion & Luxury Fitout",
      completedYear: "2024",
    },
  },
  {
    id: "mulgoa-estate",
    slug: "mulgoa-estate-renovation",
    title: "Mulgoa Valley Homestead",
    suburb: "Mulgoa",
    category: "renovations",
    categoryLabel: "Architectural Renovation",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Restoration and contemporary modernisation of a sprawling rural residence. We preserved the original exposed timber beams while re-engineering internal load-bearing walls to bring sweeping natural light and panoramic valley views inside.",
    highlights: [
      "Removal of 3 structural walls and installation of hidden steel portal frames",
      "Restored vaulted ceiling with custom feature chandelier",
      "Triple-glazed thermal acoustic aluminium windows",
      "Whole-home acoustic insulation and architectural lighting",
    ],
    stats: {
      duration: "22 Weeks",
      scope: "Comprehensive Whole-Home Modernisation",
      completedYear: "2025",
    },
  },
];
