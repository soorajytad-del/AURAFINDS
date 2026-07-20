const products = [
  {
    id: "1001",
    title: "Disposable Razor For Men Pack of 3 | Surgical Skin Blade Use And Throw Shaving Razor With Safety Cap | Manual Beard And Face Grooming | Travel Friendly Stainless Steel Blade | ISO, CE Approved",
    tagline: "Disposable Razor For Men Pack of 3 | Surgical Skin Blade Use And Throw Shaving Razor With Safety Cap",
    category: "Fitness",
    price: 299,
    originalPrice: 499,
    rating: 4.3,
    reviewCount: 350,
    image: "assets/images/c_cure_razor.jpg",
    amazonUrl: "https://link.amazon/B08ATGBYM",
    features: [
      "COMPACT SIZE & PORTABLE DESIGN – This Compact Disposable Razor For Men measures approx. 7 cm height and 4.5 cm width, making it easy to handle, store, and carry. Suitable for travel kits, office bags, and daily grooming routines where space-saving tools are preferred.",
      "STAINLESS STEEL SINGLE BLADE – SMOOTH SHAVING SUPPORT - Built with a Stainless Steel Single Blade, this razor supports consistent shaving performance for beard, face, and light body grooming. Designed to glide across the skin while maintaining ease of use for regular shaving routines.",
      "PROTECTIVE SAFETY CAP – SAFE STORAGE & HYGIENE - Each razor includes a Protective Safety Cap that helps cover the blade after use. Supports safe storage in toiletry kits, gym bags, and travel pouches while maintaining hygiene and reducing chances of accidental contact.",
      "USE & THROW RAZOR – HYGIENIC GROOMING OPTION - This Use And Throw Razor is designed for single-use convenience, removing the need for cleaning or blade replacement. Suitable for travel, hotels, salons, and quick grooming situations where hygiene and ease matter.",
      "TRAVEL FRIENDLY GROOMING RAZOR – COMPACT & LIGHTWEIGHT - Compact size and lightweight design make this Travel Friendly Grooming Razor easy to carry in backpacks, office bags, or travel kits. Suitable for business trips, vacations, and outdoor use where portability matters."
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
    description: "COMPACT SIZE & PORTABLE DESIGN – This Compact Disposable Razor For Men measures approx. 7 cm height and 4.5 cm width, making it easy to handle, store, and carry. Suitable for travel kits, office bags, and daily grooming routines where space-saving tools are preferred. STAINLESS STEEL SINGLE BLADE – SMOOTH SHAVING SUPPORT - Built with a Stainless Steel Single Blade, this razor supports consistent shaving performance for beard, face, and light body grooming. Designed to glide across the skin while maintaining ease of use for regular shaving routines. PROTECTIVE SAFETY CAP – SAFE STORAGE & HYGIENE - Each razor includes a Protective Safety Cap that helps cover the blade after use. Supports safe storage in toiletry kits, gym bags, and travel pouches while maintaining hygiene and reducing chances of accidental contact. USE & THROW RAZOR – HYGIENIC GROOMING OPTION - This Use And Throw Razor is designed for single-use convenience, removing the need for cleaning or blade replacement. Suitable for travel, hotels, salons, and quick grooming situations where hygiene and ease matter. TRAVEL FRIENDLY GROOMING RAZOR – COMPACT & LIGHTWEIGHT - Compact size and lightweight design make this Travel Friendly Grooming Razor easy to carry in backpacks, office bags, or travel kits. Suitable for business trips, vacations, and outdoor use where portability matters.",
    variants: [
      { name: "Pack of 3", price: 299, originalPrice: 499, amazonUrl: "https://link.amazon/B08ATGBYM" }
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
