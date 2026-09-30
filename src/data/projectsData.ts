export interface Project {
  id: string;
  slug: string;
  title: string;
  suburb: string;
  category: "kitchens" | "bathrooms" | "combos";
  categoryLabel: string;
  thumbnail: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
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
    id: "penrith-open-concept-island-kitchen",
    slug: "penrith-open-concept-island-kitchen",
    title: "Penrith Open-Concept Living & Statement Island Kitchen",
    suburb: "Penrith / Jamisontown, NSW",
    category: "kitchens",
    categoryLabel: "Structural Kitchen",
    thumbnail: "/projects/real/aj-kitchen-after.jpg",
    beforeImage: "/projects/real/aj-kitchen-before.jpg",
    afterImage: "/projects/real/aj-kitchen-after.jpg",
    images: [
      "/projects/real/aj-kitchen-after.jpg",
      "/projects/real/aj-kitchen-detail-1.jpg",
      "/projects/real/aj-kitchen-detail-2.jpg",
      "/projects/real/aj-kitchen-before.jpg",
    ],
    description:
      "A complete structural wall demolition and luxury kitchen transformation carried out by NP4 Building Pty Ltd (Lic #336447C). We eliminated a dark, restrictive 1980s cellular floorplan and arched servery cutout, opening up the entire living zone into an expansive culinary hub. Features a 3.2m white quartz stone island with breakfast bar seating, flush 5-burner gas cooktop, natural oak acoustic slat feature wall, and floor-to-ceiling gloss white pantry joinery.",
    highlights: [
      "Structural load-bearing wall removal with concealed ceiling beam support",
      "Concrete slab trenching for island gas, plumbing & electrical services",
      "3.2m white quartz waterfall island with flush gas cooktop & barstools",
      "Floor-to-ceiling gloss white flat-panel cabinetry with handleless J-pulls",
      "Large-format 600x600 high-gloss rectified porcelain marble floor tiles",
      "Acoustic timber slat feature wall cladding with designer pendant lighting",
    ],
    stats: {
      duration: "4.5 Weeks",
      scope: "Structural Wall Removal & Open-Concept Kitchen",
      completedYear: "2025",
    },
  },
  {
    id: "minchinbury-luxury-ensuite",
    slug: "minchinbury-luxury-ensuite",
    title: "Minchinbury Ensuite & Walk-In Wet Room",
    suburb: "Minchinbury, NSW",
    category: "bathrooms",
    categoryLabel: "Luxury Ensuite",
    thumbnail: "/projects/real/lyn-bath-after.jpg",
    beforeImage: "/projects/real/lyn-bath-before.jpg",
    afterImage: "/projects/real/lyn-bath-after.jpg",
    images: [
      "/projects/real/lyn-bath-after.jpg",
      "/projects/real/lyn-bath-detail-1.jpg",
      "/projects/real/lyn-bath-detail-2.jpg",
      "/projects/real/lyn-bath-before.jpg",
    ],
    description:
      "Complete strip-out and bespoke fitout of a dated suburban master ensuite. NP4 Building Pty Ltd engineered a five-star hotel-inspired sanctuary featuring a custom wall-hung fluted oak vanity, oversized pill-shaped backlit LED mirror shaving cabinet, curbless walk-in shower with 10mm toughened frameless glass, recessed shampoo niche with continuous marble veining, and smart tile-insert drainage.",
    highlights: [
      "Class III dual-coat polyurethane waterproofing membrane compliant with AS 3740:2021",
      "Custom wall-hung fluted oak timber vanity with engineered stone benchtop",
      "Oversized pill-shaped LED backlit anti-fog mirror shaving cabinet",
      "Curbless zero-threshold walk-in shower with frameless 10mm safety glass",
      "Recessed LED-illuminated shower wall niche with continuous tile veining",
      "Modern rimless back-to-wall toilet suite with concealed soft-close fittings",
    ],
    stats: {
      duration: "3.5 Weeks",
      scope: "Complete Luxury Master Ensuite Fitout",
      completedYear: "2026",
    },
  },
  {
    id: "dean-park-modernist-kitchen",
    slug: "dean-park-modernist-kitchen",
    title: "Dean Park Modernist Kitchen & Stone Slab Splashback",
    suburb: "Dean Park, Western Sydney",
    category: "kitchens",
    categoryLabel: "Modernist Kitchen",
    thumbnail: "/projects/real/edger-kitchen-after.jpg",
    beforeImage: "/projects/real/edger-kitchen-before.jpg",
    afterImage: "/projects/real/edger-kitchen-after.jpg",
    images: [
      "/projects/real/edger-kitchen-after.jpg",
      "/projects/real/edger-kitchen-detail-1.jpg",
      "/projects/real/edger-kitchen-detail-2.jpg",
      "/projects/real/edger-kitchen-before.jpg",
    ],
    description:
      "Replaced a dated, awkward diagonal corner layout and peeling laminate counters with a streamlined modernist kitchen. NP4 Building Pty Ltd removed restrictive corner bulkheads to deliver generous linear prep space, full-height gloss white cabinetry, continuous engineered stone countertops and matching slab splashback, undermount double sink with commercial spring mixer, and an integrated appliance wall tower.",
    highlights: [
      "Removal of dated corner sink bulkheads to maximize usable workspace",
      "Engineered quartz stone benchtops with matching continuous slab splashback",
      "Commercial-style pull-down dual-spray mixer with undermount double stainless bowls",
      "Full-height gloss white cabinetry built up to ceiling cornices for zero-dust storage",
      "Custom appliance tower integrating built-in microwave and pyrolytic wall oven",
      "5-burner gas cooktop with cast iron trivets and high-performance rangehood",
    ],
    stats: {
      duration: "3 Weeks",
      scope: "Full Kitchen Demolition & Stone Masonry Fitout",
      completedYear: "2024",
    },
  },
  {
    id: "western-sydney-master-suite",
    slug: "western-sydney-master-suite",
    title: "Western Sydney Master Suite: Spa Removal & Freestanding Bath",
    suburb: "Western Sydney, NSW",
    category: "bathrooms",
    categoryLabel: "Master Sanctuary",
    thumbnail: "/projects/real/mary-master-bath-after.jpg",
    beforeImage: "/projects/real/mary-master-bath-before.jpg",
    afterImage: "/projects/real/mary-master-bath-after.jpg",
    images: [
      "/projects/real/mary-master-bath-after.jpg",
      "/projects/real/mary-master-bath-detail-1.jpg",
      "/projects/real/mary-master-bath-detail-2.jpg",
      "/projects/real/mary-master-bath-before.jpg",
    ],
    description:
      "A dramatic upper-floor transformation replacing a space-hogging 1990s corner triangular spa and stepped tiled hob with an open, light-filled five-star master bathroom. NP4 Building Pty Ltd reinforced the suspended timber subfloor, applied heavy-duty multi-layer waterproofing, and installed an architectural freestanding bath beneath the window alongside a double shaker vanity with twin round vessel basins and a seamless hobless wet room.",
    highlights: [
      "Demolition of heavy corner spa hob & structural reinforcement of upper-floor subfloor",
      "Architectural 1500mm back-to-corner freestanding acrylic bath beneath double-hung window",
      "1500mm double shaker vanity with stone counter and twin above-counter ceramic basins",
      "Oversized pill-shaped backlit LED mirror shaving cabinet with internal power outlets",
      "Curbless hobless walk-in shower with full-length marine-grade 316 stainless linear grate",
      "Suspended floor waterproofing with fabric perimeter reinforcing band to AS 3740:2021",
    ],
    stats: {
      duration: "4 Weeks",
      scope: "Suspended Upper Floor Master Suite Overhaul",
      completedYear: "2025",
    },
  },
  {
    id: "rousehill-laundry-bathroom-conversion",
    slug: "rousehill-laundry-bathroom-conversion",
    title: "Rouse Hill Accessible Wet Area: Laundry to Full Bathroom Conversion",
    suburb: "Rouse Hill, NSW",
    category: "combos",
    categoryLabel: "Laundry Conversion",
    thumbnail: "/projects/real/irene-laundry-bath-after.jpg",
    beforeImage: "/projects/real/irene-laundry-bath-before.jpg",
    afterImage: "/projects/real/irene-laundry-bath-after.jpg",
    images: [
      "/projects/real/irene-laundry-bath-after.jpg",
      "/projects/real/irene-laundry-bath-detail-1.jpg",
      "/projects/real/irene-laundry-bath-detail-2.jpg",
      "/projects/real/irene-laundry-bath-before.jpg",
    ],
    description:
      "A clever multi-functional transformation converting an underutilised external laundry and powder room into a fully accessible luxury wet room. NP4 Building Pty Ltd excavated subfloors, re-routed 100mm DWV sewer lines, and installed a heavy-duty sliding glass barn-door shower system, full-height Calacatta marble porcelain cladding, mobility-assisted grab rails (AS 1428.1 compliant), and a warm timber floating vanity.",
    highlights: [
      "Structural demolition and re-routing of 100mm sewer line for new shower & toilet suite",
      "Heavy-duty frameless sliding glass shower screen on exposed matte black stainless rail",
      "Recessed shower wall niche with LED lighting and twin-shower rail system",
      "Accessibility-compliant construction with integrated stainless grab rails (AS 1428.1)",
      "Warm natural timber floating vanity paired with circular halo-lit anti-fog LED mirror",
      "Precision floor screed with 1:60 fall to smart tile-insert floor waste",
    ],
    stats: {
      duration: "4 Weeks",
      scope: "Full Laundry-to-Bathroom Conversion & Wet Room",
      completedYear: "2024",
    },
  },
  {
    id: "glenmore-park-coastal-calacatta-kitchen",
    slug: "glenmore-park-coastal-calacatta-kitchen",
    title: "Glenmore Park Coastal Hamptons Kitchen & Double Waterfall Island",
    suburb: "Glenmore Park, NSW",
    category: "kitchens",
    categoryLabel: "Coastal Hamptons",
    thumbnail: "/projects/real/perlie-kitchen-after.jpg",
    beforeImage: "/projects/real/perlie-kitchen-before.jpg",
    afterImage: "/projects/real/perlie-kitchen-after.jpg",
    images: [
      "/projects/real/perlie-kitchen-after.jpg",
      "/projects/real/perlie-kitchen-detail-1.jpg",
      "/projects/real/perlie-kitchen-before.jpg",
    ],
    description:
      "A complete strip-out down to slab and timber framing, replacing a tired 1980s U-shaped kitchen with an awe-inspiring coastal Hamptons centerpiece. Features a grand Calacatta gold-veined quartz island with 40mm double mitred waterfall ends, woven coastal wicker barstools, dual-tone artisan splashback combining grey herringbone tile and white fish-scale mosaic borders, and concealed ice-blue/warm-white mood LED lighting.",
    highlights: [
      "Grand 40mm Calacatta quartz stone island with book-matched double waterfall gables",
      "Slab trenching to relocate plumbing and power services to the central entertaining island",
      "Bespoke artisan tile splashback pairing vertical herringbone with fish-scale mosaic borders",
      "Integrated dual-circuit RGB/CCT under-cabinet LED mood and prep lighting",
      "Floor-to-ceiling appliance tower housing built-in pyrolytic oven and microwave",
      "Undermount composite black granite double bowl sink with high-arc commercial mixer",
    ],
    stats: {
      duration: "5 Weeks",
      scope: "Full Demolition & Bespoke Coastal Kitchen",
      completedYear: "2023",
    },
  },
  {
    id: "south-penrith-master-bath",
    slug: "south-penrith-master-bath",
    title: "South Penrith Master Bath & Fluted Oak Arch Suite",
    suburb: "South Penrith, NSW",
    category: "bathrooms",
    categoryLabel: "Luxury Bathroom",
    thumbnail: "/projects/real/southp-bath-after.jpg",
    beforeImage: "/projects/real/southp-bath-before.jpg",
    afterImage: "/projects/real/southp-bath-after.jpg",
    images: [
      "/projects/real/southp-bath-after.jpg",
      "/projects/real/southp-bath-detail-1.jpg",
      "/projects/real/southp-bath-detail-2.jpg",
      "/projects/real/southp-bath-before.jpg",
    ],
    description:
      "Complete overhaul of a 1990s family bathroom with dated beige diagonal tiles and stepped hob. NP4 Building Pty Ltd transformed the space with full-height 600x1200mm soft grey veined porcelain tiles, a modern inset soaking bathtub, frameless glass shower enclosure, fluted designer vanity with above-counter round basin, and an illuminated arched LED mirror.",
    highlights: [
      "Demolition of dated beige floral tiles and clumsy corner hob",
      "Floor-to-ceiling 600x1200 rectified porcelain wall and floor tiling",
      "Custom fluted vanity unit with above-counter round ceramic vessel basin",
      "Arched LED backlit mirror providing shadowless grooming illumination",
      "Semi-frameless pivot glass shower enclosure with smart tile-insert waste",
      "Class III liquid-applied polyurethane membrane to AS 3740:2021",
    ],
    stats: {
      duration: "3.5 Weeks",
      scope: "Complete Bathroom Strip-Out & Luxury Fitout",
      completedYear: "2025",
    },
  },
  {
    id: "park-avenue-architectural-kitchen",
    slug: "park-avenue-architectural-kitchen",
    title: "Park Avenue Architectural Kitchen & Island Peninsula",
    suburb: "Kingswood / Penrith, NSW",
    category: "kitchens",
    categoryLabel: "Architectural Kitchen",
    thumbnail: "/projects/real/parkave-kitchen-after.jpg",
    beforeImage: "/projects/real/parkave-kitchen-before.jpg",
    afterImage: "/projects/real/parkave-kitchen-after.jpg",
    images: [
      "/projects/real/parkave-kitchen-after.jpg",
      "/projects/real/parkave-kitchen-detail-1.jpg",
      "/projects/real/parkave-kitchen-before.jpg",
    ],
    description:
      "Modernized a peeling 1990s U-shaped kitchen with burgundy laminate countertops into a high-tech modern entertainer's kitchen. NP4 Building Pty Ltd built custom ceiling bulkheads for seamless cabinet alignment, integrated dual-zone mood LED lighting, 40mm marble-veined quartz benchtops with matching solid stone slab splashback, and a striking black and brass concentric ring LED pendant chandelier.",
    highlights: [
      "Custom ceiling bulkheads ensuring flush floor-to-ceiling cabinetry with zero dust gap",
      "Dual-zone ambient RGB/CCT under-cabinet and kickboard LED strip lighting",
      "40mm engineered marble-veined quartz countertops with matching slab splashback",
      "Architectural black & brass halo pendant chandelier over the peninsula breakfast bar",
      "Built-in black glass pyrolytic wall oven, induction cooktop & ducted rangehood",
      "Blum soft-close drawer runners with integrated cutlery and spice organizational inserts",
    ],
    stats: {
      duration: "6 Weeks",
      scope: "Custom Joinery, Bulkheads & Smart Lighting Kitchen",
      completedYear: "2023",
    },
  },
  {
    id: "south-penrith-country-kitchen",
    slug: "south-penrith-country-kitchen",
    title: "South Penrith Contemporary Country Kitchen",
    suburb: "South Penrith, NSW",
    category: "kitchens",
    categoryLabel: "Country Kitchen",
    thumbnail: "/projects/real/paring-kitchen-after.jpg",
    beforeImage: "/projects/real/paring-kitchen-before.jpg",
    afterImage: "/projects/real/paring-kitchen-after.jpg",
    images: [
      "/projects/real/paring-kitchen-after.jpg",
      "/projects/real/paring-kitchen-detail-1.jpg",
      "/projects/real/paring-kitchen-before.jpg",
    ],
    description:
      "A warm and welcoming contemporary country kitchen renovation. NP4 Building Pty Ltd stripped away peeling 1970s yellow laminate joinery and re-engineered the layout with satin white soft-close cabinetry, rich natural butcher-block timber benchtops, a breakfast bar overhang, and integrated task downlights.",
    highlights: [
      "Complete cabinetry replacement with satin white moisture-resistant carcasses",
      "Natural hardwood butcher-block timber countertops sealed with food-safe polyurethane",
      "Casual breakfast bar dining overhang with stool seating space",
      "Under-cabinet LED task illumination and updated GPO electrical distribution",
      "Stainless steel undermount sink with gooseneck swivel mixer tap",
    ],
    stats: {
      duration: "3 Weeks",
      scope: "Full Cabinetry & Timber Benchtop Makeover",
      completedYear: "2026",
    },
  },
  {
    id: "kingswood-ensuite-walk-in",
    slug: "kingswood-ensuite-walk-in",
    title: "Kingswood Ensuite: Floating Timber Vanity & Subway Walk-In",
    suburb: "Kingswood, Penrith",
    category: "bathrooms",
    categoryLabel: "Ensuite Renovation",
    thumbnail: "/projects/real/jing-bath-after.jpg",
    beforeImage: "/projects/real/jing-bath-before.jpg",
    afterImage: "/projects/real/jing-bath-after.jpg",
    images: [
      "/projects/real/jing-bath-after.jpg",
      "/projects/real/jing-bath-detail-1.jpg",
      "/projects/real/jing-bath-before.jpg",
    ],
    description:
      "A focused ensuite rebuild resolving chronic moisture issues with certified Class III polyurethane waterproofing to AS 3740:2021. Features a custom floating dark oak double-drawer vanity, matte black pin-lever tapware, floor-to-ceiling gloss subway tiles, and a spacious walk-in shower with concealed linear drainage.",
    highlights: [
      "Certified Class III polyurethane waterproofing barrier with certificate of compliance",
      "Custom floating dark oak vanity with integrated soft-close Blum drawers",
      "Matte black pin-lever mixer tapware and dual-function shower rail",
      "Floor-to-ceiling gloss white subway tiles with charcoal contrasting grout",
      "Low-profile step-over threshold with precision fall to drain waste",
    ],
    stats: {
      duration: "3 Weeks",
      scope: "Ensuite Rebuild, Waterproofing & Luxury Fitout",
      completedYear: "2022",
    },
  },
];
