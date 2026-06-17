export const mockProducts = [
  {
    id: "p1",
    name: "Court Star Pro",
    slug: "court-star-pro",
    category: "Badminton Shoes",
    price: 1599,
    originalPrice: 1999,
    discount: "20% OFF",
    colors: ["#C41F22", "#0D0D0D", "#C9A84C"],
    sizes: ["7 UK", "8 UK", "9 UK", "10 UK", "11 UK"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    features: [
      "Cushioned EVA midsole for all-day comfort",
      "Reinforced Active Grip outsole for sudden stops",
      "Breathable mesh/PU upper for ventilation",
      "Heel Lock technology for lateral stability"
    ],
    isBestSeller: true
  },
  {
    id: "p2",
    name: "Raze Pro II",
    slug: "raze-pro-ii",
    category: "Badminton Racket",
    price: 2499,
    originalPrice: 3299,
    discount: "24% OFF",
    colors: ["#0D0D0D", "#F9F8F6"],
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800",
    features: [
      "High modulus carbon graphite shaft",
      "Head-heavy balance for devastating smashes",
      "Supports string tension up to 30 lbs",
      "T-joint technology for enhanced durability"
    ],
    isBestSeller: true
  },
  {
    id: "p3",
    name: "Atomic X Series",
    slug: "atomic-x-series",
    category: "Kit Bag",
    price: 1299,
    originalPrice: 1599,
    discount: "18% OFF",
    colors: ["#1D3A8A", "#7B1D1D"],
    sizes: ["Medium", "Large"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    features: [
      "Thermal compartment protects up to 2 rackets",
      "Ventilated shoe pocket",
      "Water-resistant 600D polyester",
      "Ergonomic padded back straps"
    ],
    isBestSeller: false
  },
  {
    id: "p4",
    name: "Predator Series",
    slug: "predator-series",
    category: "Badminton Racket",
    price: 3199,
    originalPrice: 4099,
    discount: "21% OFF",
    colors: ["#C9A84C", "#1D3A8A"],
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    features: [
      "Aerodynamic T-shaped frame",
      "Ultra-lightweight 78g design",
      "Pre-strung with high-repulsion string",
      "Isometric head shape for larger sweet spot"
    ],
    isBestSeller: true
  }
];

export const mockCategories = [
  { name: "Badminton", href: "/collections/badminton" },
  { name: "Cricket",   href: "/collections/cricket" },
  { name: "Pickleball",href: "/collections/pickleball" },
  { name: "Accessories",href: "/collections/accessories" },
  { name: "Clothing",  href: "/collections/clothing" },
];
