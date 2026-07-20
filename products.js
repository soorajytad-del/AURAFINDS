const products = [
  {
    id: "1001",
    title: "C-Cure Disposable Surgical Skin Razor (Pack of 3)",
    tagline: "Disposable Razor For Men Pack of 3 | Surgical Skin Blade Use And Throw Shaving Razor With Safety Cap",
    category: "Fitness",
    price: 299,
    originalPrice: 399,
    rating: 4.3,
    reviewCount: 350,
    image: "assets/images/c_cure_razor.jpg",
    amazonUrl: "https://link.amazon/B08ATGBYM",
    features: [
      "Surgical-Grade Platinum Edge: Equipped with high-quality stainless steel blades coated with Platinum & Teflon for smooth, clean skin preparation.",
      "Comes with Protective Safety Cap: Each razor features a snap-on plastic safety cap to prevent accidental cuts and maintain hygiene during storage.",
      "Ergonomic Manual Grip: Designed with a wide ribbed handle for maximum control and stability during manual face, body, or beard grooming.",
      "ISO & CE Approved Quality: Fully certified medical manufacturing ensures absolutely clean, skin-friendly, and hypoallergenic materials.",
      "Travel-Friendly & Disposable: Lightweight, compact design makes it perfect for gym bags, travel kits, and easy single-use disposal."
    ],
    specifications: {
      "Brand": "C-Cure",
      "Blade Material": "Surgical-Grade Stainless Steel (Platinum & Teflon Coated)",
      "Pack Quantity": "3 Razors",
      "Safety Guard": "Included (Protective Safety Cap)",
      "Certifications": "ISO Approved, CE Certified",
      "Recommended Use": "Manual Shaving, Beard/Face Grooming, Surgical Skin Preparation",
      "Special Feature": "Disposable, Ultra-Sharp Single Edge, Ribbed Non-Slip Grip"
    },
    description: "The C-Cure Disposable Surgical Skin Razor is a premium grooming and skin-preparation tool, now available in a handy pack of 3. Manufactured under strict ISO and CE guidelines, these razors feature surgical-grade stainless steel single-edge blades coated with Teflon and Platinum for an exceptionally close, smooth shave without pulling or irritating sensitive skin. Perfect for travel, beard lining, and quick face grooming, each razor includes a secure safety cap. Its lightweight build and ribbed handle offer precise control, making it an excellent utility choice for both medical clinics and home grooming routines.",
    variants: [
      { name: "Pack of 3", price: 299, originalPrice: 399, amazonUrl: "https://link.amazon/B08ATGBYM" }
    ],
    colors: [
      { name: "Standard Blue/White", image: "assets/images/c_cure_razor.jpg", hex: "#0055ff" }
    ]
  }
];

// Export for ES Modules (fallback to global variable if loaded in browser directly)
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = products;
} else {
  window.products = products;
}
