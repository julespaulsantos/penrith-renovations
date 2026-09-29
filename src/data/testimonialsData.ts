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
    projectType: "Full Home Renovation & Wall Removal",
    rating: 5,
    date: "November 2025",
    review:
      "Marcus and the team at Penrith Renovations completely transformed our cramped 1980s layout into an entertainer's dream. Marcus was on site nearly every day, keeping us constantly updated. The attention to detail on the custom joinery and structural beams was incredible. No hidden variations, finished right on the agreed timeline!",
  },
  {
    id: "2",
    name: "Greg & Michelle T.",
    suburb: "Glenmore Park",
    projectType: "Alfresco Pavilion & Kitchen Overhaul",
    rating: 5,
    date: "January 2026",
    review:
      "We had talked about renovating our kitchen and outdoor area for five years but were nervous about dodgy builders. From our first consultation, Penrith Renovations stood head and shoulders above everyone else. Professional, respectful of our home, and the craftsmanship on our cedar ceiling and stone island is stunning.",
  },
  {
    id: "3",
    name: "Dr. Ryan & Karen Walsh",
    suburb: "Jordan Springs",
    projectType: "Ground Floor Extension & Ensuite",
    rating: 5,
    date: "August 2025",
    review:
      "Adding a master suite and family rumpus seemed daunting with 3 kids in the house, but the team partitioned the work area cleanly and coordinated trades like clockwork. The council approvals were handled smoothly without any headaches for us. Couldn't recommend them more highly.",
  },
  {
    id: "4",
    name: "Clare & Brett Morrison",
    suburb: "Leonay",
    projectType: "Luxury Bathroom & Laundry Renovation",
    rating: 5,
    date: "October 2025",
    review:
      "Our ensuite feels like a 5-star boutique resort. The travertine tiling mitres are razor sharp and the underfloor heating is heaven. Truly top-tier workmanship and genuine integrity.",
  },
];
