export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  projectType: string;
  rating: number;
  date: string;
  review: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "David & Sarah Henderson",
    suburb: "Jamisontown, Penrith",
    projectType: "Open-Plan Kitchen & Wall Removal",
    rating: 5,
    date: "November 2025",
    review:
      "Philmoor and the NP4 Building team completely transformed our cramped, dark 1980s kitchen. They removed a load-bearing brick wall and installed a hidden steel beam so smoothly. The massive waterfall island and custom fluted joinery are beyond stunning. Philmoor was on site daily ensuring every single mitre and tile line was millimeter-perfect.",
  },
  {
    id: "2",
    name: "Greg & Michelle T.",
    suburb: "Glenmore Park",
    projectType: "Kitchen & Butler's Pantry Renovation",
    rating: 5,
    date: "January 2026",
    review:
      "We consulted three different kitchen builders in Penrith before choosing NP4 Building Pty Ltd. Philmoor's practical advice on spatial ergonomics and stone selection made all the difference. Our kitchen and butler's pantry were finished exactly on schedule and within the fixed-price quotation. True kitchen renovation masters!",
  },
  {
    id: "3",
    name: "Dr. Ryan & Karen Walsh",
    suburb: "Jordan Springs",
    projectType: "Master Ensuite & Family Bathroom Renovation",
    rating: 5,
    date: "August 2025",
    review:
      "Having our bathrooms renovated while living in the house with young kids seemed intimidating, but NP4 Building kept the work area immaculately sealed and clean. The certified waterproofing and craftsmanship on our floating timber vanities and frameless fluted glass showers is world-class.",
  },
  {
    id: "4",
    name: "Clare & Brett Morrison",
    suburb: "Leonay",
    projectType: "Travertine Luxury Bathroom Sanctuary",
    rating: 5,
    date: "October 2025",
    review:
      "Our ensuite feels like an exclusive 5-star day spa. The floor-to-ceiling travertine tiling mitres are razor-sharp, the underfloor heating is heaven, and the custom LED niches add so much ambiance. NP4 Building Pty Ltd is the benchmark for luxury bathroom renovations in Western Sydney.",
  },
];
