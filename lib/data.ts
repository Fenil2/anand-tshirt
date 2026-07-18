export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#services" },
  { label: "Collections", href: "#showcase" },
  { label: "New In", href: "#process" },
  { label: "Journal", href: "#stories" },
  { label: "Contact", href: "#contact" }
];

export const heroChecklist = [
  "Soft premium fabrics in fresh everyday fits",
  "Easy sizes, fast delivery, and limited seasonal drops"
];

// The five real SpotDot product / campaign images (in /public).
// Filenames match the exact on-disk casing so they load on case-sensitive hosts.
export const brandImages = {
  essentialsModel: "/man.png", // orange "Essentials" campaign — model in green tee
  essentialsHanger: "/IMG_9323.PNG", // orange "Essentials" campaign — hanger shot
  navy: "/IMG_9324.JPG.jpeg", // navy tee — "Wear Your Confidence"
  drop: "/IMG_0173.JPG.jpeg", // grey "Drop 01" — "Engineered for the perfect fit"
  flatlay: "/IMG_9302.PNG" // clean navy tee flat lay
} as const;

export const categories = [
  { name: "T-shirts", count: 15, tag: "Everyday" },
  { name: "Oversized", count: 8, tag: "Street" },
  { name: "Essentials", count: 18, tag: "Core" },
  { name: "Half Sleeves", count: 9, tag: "Summer" },
  { name: "New Drops", count: 6, tag: "Limited" }
];

export const showcaseItems = [
  {
    id: "essentials",
    label: "Essentials",
    tag: "Mens Half Sleeve",
    copy: "The foundation of every wardrobe — clothes which you love.",
    image: brandImages.essentialsHanger
  },
  {
    id: "confidence",
    label: "Signature Navy",
    tag: "Oversized Fit",
    copy: "Wear your confidence. Soft, stylish, and comfortable.",
    image: brandImages.navy
  },
  {
    id: "drop01",
    label: "Drop 01",
    tag: "260+ GSM Heavy Cotton",
    copy: "Built different. Worn by few. Engineered for the perfect fit.",
    image: brandImages.drop
  },
  {
    id: "core",
    label: "Core Flat Lay",
    tag: "Everyday Staple",
    copy: "A clean minimal essential with a premium finish and soft hand feel.",
    image: brandImages.flatlay
  }
];

export const customCards = [
  {
    title: "Engineered for the perfect fit",
    copy: "Oversized, structural, timeless. No noise, just design — premium matte texture on ultra-heavy cotton.",
    action: "Shop Drop 01",
    image: brandImages.drop,
    panel: "bg-[#ebe5dc]"
  },
  {
    title: "Wear your confidence every day",
    copy: "Start with easy staples in soft premium fabrics and build a clean wardrobe you keep coming back to.",
    action: "Discover More",
    image: brandImages.navy,
    panel: "bg-[#f1ece5]"
  }
];

export const testimonials = [
  {
    quote:
      "SpotDot makes shopping feel elevated. The tees fit beautifully, the hoodies feel premium, and every drop has that fresh look you want to wear right away.",
    name: "Mary",
    role: "Verified Customer"
  },
  {
    quote:
      "The fit is exactly what the photos promise. Soft, structured cotton that holds its shape wash after wash — these have quickly become my everyday go-to.",
    name: "Aditya",
    role: "Verified Customer"
  },
  {
    quote:
      "Ordered three tees and every single one felt premium straight out of the box. Fast delivery, and the size guide was completely spot on.",
    name: "Sara",
    role: "Verified Customer"
  },
  {
    quote:
      "Finally a brand that gets oversized right. Clean drops, no loud branding — just quality basics I actually reach for every week.",
    name: "Kabir",
    role: "Verified Customer"
  },
  {
    quote:
      "Effortless from checkout to wearing it out. The colours stay rich and the fabric feels breathable even on the warmest days.",
    name: "Neha",
    role: "Verified Customer"
  }
];

export const features = [
  {
    title: "Worldwide Delivery",
    copy: "Fast shipping for customers shopping across local and international markets."
  },
  {
    title: "Easy Returns",
    copy: "Simple exchanges and smooth return support for the right fit."
  },
  {
    title: "Always New",
    copy: "Frequent drops, updated colors, and fresh seasonal edits."
  },
  {
    title: "Flexible Checkout",
    copy: "Convenient payment options designed for quick and secure shopping."
  }
];

export const articles = [
  {
    category: "Style Guide",
    date: "August 20, 2025",
    title: "How to build a clean wardrobe around everyday tees"
  },
  {
    category: "New Drop",
    date: "August 20, 2025",
    title: "What to shop first from our latest seasonal collection"
  },
  {
    category: "Fashion Notes",
    date: "August 20, 2025",
    title: "The premium essentials that work in every rotation"
  }
];

export const footerColumns = [
  {
    title: "Shop",
    links: ["New Arrivals", "Best Sellers", "Men", "Women", "Kids"]
  },
  {
    title: "Support",
    links: ["Shipping Info", "Returns", "Size Guide", "FAQs", "Contact Us"]
  },
  {
    title: "About",
    links: ["Our Story", "Journal", "Store Policy", "Careers", "Gift Cards"]
  }
];
