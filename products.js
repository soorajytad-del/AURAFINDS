const products = [
  {
    id: "aurasound-max",
    title: "AuraSound Max ANC",
    tagline: "Unrivaled Silence, Exceptional Acoustics",
    category: "Audio",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviewCount: 1248,
    image: "assets/images/aurasound_max.png",
    amazonUrl: "https://www.amazon.com/dp/B08HMWX9ZJ?tag=affiliate-deals-20",
    features: [
      "Industry-leading Hybrid Active Noise Cancellation (ANC) up to 45dB",
      "Custom-designed 40mm dynamic drivers for high-fidelity audio",
      "Up to 60 hours of continuous wireless playback on a single charge",
      "Ultra-soft memory foam earcups with premium leather finish",
      "Multipoint bluetooth: Switch seamlessly between phone and laptop"
    ],
    specifications: {
      "Driver Size": "40 mm Dynamic",
      "Frequency Response": "4Hz - 40,000Hz",
      "Bluetooth Version": "Bluetooth 5.2 (LE Audio ready)",
      "Battery Life": "Up to 60 Hours (ANC Off) / 40 Hours (ANC On)",
      "Charging": "USB-C Fast Charging (10-min charge = 5 hours play)",
      "Weight": "250g",
      "Water Resistance": "IPX4 Sweat Resistant"
    },
    description: "Immerse yourself in pure auditory bliss with the AuraSound Max. Engineered for audio purists and daily commuters alike, our flagship over-ear headphones combine state-of-the-art hybrid noise cancellation with custom-tuned acoustic drivers. Whether you are working in a bustling coffee shop or traveling at 30,000 feet, AuraSound Max silences the world so you can focus on what matters: the music."
  },
  {
    id: "novalight-beam",
    title: "NovaLight Beam Projector",
    tagline: "Cinematic Home Theater in the Palm of Your Hand",
    category: "Smart Home",
    price: 599.99,
    originalPrice: 699.99,
    rating: 4.7,
    reviewCount: 842,
    image: "assets/images/novalight_beam.png",
    amazonUrl: "https://www.amazon.com/dp/B09HN5X9ZJ?tag=affiliate-deals-20",
    features: [
      "Native 1080p Full HD resolution with 4K UHD support",
      "Bright 1200 ANSI Lumens for vivid projections even in ambient light",
      "Smart Auto-Keystone correction and autofocus in under 3 seconds",
      "Built-in Google TV OS for streaming Netflix, Prime, and Disney+ directly",
      "Dual 10W Harman Kardon speakers for rich, room-filling sound"
    ],
    specifications: {
      "Brightness": "1200 ANSI Lumens",
      "Contrast Ratio": "10,000:1",
      "Projection Size": "40 to 200 inches",
      "Light Source": "LED (30,000 hours lifespan)",
      "OS": "Google TV OS with Play Store access",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.0, HDMI, USB-C, Aux",
      "Weight": "1.2 kg"
    },
    description: "Turn any blank wall into a private cinema with the NovaLight Beam. Combining outstanding 1080p sharpness, high brightness, and Google TV integration, this ultra-portable projector provides endless entertainment anywhere you go. Complete with powerful built-in speakers and smart autofocus, you can set up theater-quality viewings in seconds."
  },
  {
    id: "ergodesk-flow",
    title: "ErgoDesk Flow Standing Desk",
    tagline: "Work Healthy, Work Smart",
    category: "Productivity",
    price: 449.99,
    originalPrice: 499.99,
    rating: 4.9,
    reviewCount: 512,
    image: "assets/images/ergodesk_flow.png",
    amazonUrl: "https://www.amazon.com/dp/B08FLWX9ZJ?tag=affiliate-deals-20",
    features: [
      "Smooth, quiet dual-motor height adjustments (under 45dB)",
      "Premium solid natural walnut tabletop with rounded safety corners",
      "Digital controller with 4 programmable memory height presets",
      "Integrated cable management tray and dual power outlets",
      "Anti-collision safety sensors detect obstacles and halt movement"
    ],
    specifications: {
      "Height Range": "24.5 to 50.2 inches",
      "Weight Capacity": "300 lbs (136 kg)",
      "Tabletop Material": "Solid Natural Walnut Wood",
      "Frame Material": "Heavy-duty Industrial Steel",
      "Adjustment Speed": "1.5 inches per second",
      "Desktop Dimensions": "55\" x 28\" x 0.75\"",
      "Warranty": "5-Year Frame & Motor Warranty"
    },
    description: "Elevate your productivity and health with the ErgoDesk Flow. Crafted from high-grade natural walnut and supported by an industrial-strength dual-motor steel frame, this height-adjustable desk transitions smoothly and silently from sitting to standing. It is the perfect centerpiece for a clean, ergonomic, and inspiring workstation."
  },
  {
    id: "chronos-fit",
    title: "Chronos Fit v2 Smartwatch",
    tagline: "Timeless Design Meets Elite Health Tracking",
    category: "Fitness",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviewCount: 2154,
    image: "assets/images/chronos_fit.png",
    amazonUrl: "https://www.amazon.com/dp/B09DMWX9ZJ?tag=affiliate-deals-20",
    features: [
      "1.43\" Always-On Curved AMOLED display with scratch-resistant glass",
      "Advanced 24/7 heart rate, SpO2, sleep stages, and stress level monitoring",
      "Over 120 professional workout modes with automatic exercise detection",
      "Built-in multi-system GPS for accurate path tracking without your phone",
      "Incredible 14-day battery life on a single charge under standard use"
    ],
    specifications: {
      "Display": "1.43\" Curved AMOLED (466x466 px, 326 PPI)",
      "Body Material": "Aerospace-grade Titanium Alloy",
      "Sensors": "Optical Heart Rate, SpO2, Accelerometer, Gyroscope, Barometer",
      "Waterproofing": "5 ATM (up to 50 meters depth)",
      "Battery": "450mAh (Up to 14 days normal, 7 days heavy)",
      "Compatibility": "iOS 12.0+ and Android 8.0+",
      "Strap Width": "22mm Quick Release"
    },
    description: "Balance style and fitness with the Chronos Fit v2. Designed with an elegant titanium alloy chassis and a gorgeous AMOLED screen, this smartwatch keeps pace with both your formal board meetings and your intense weekend runs. Monitor your vitals, track your coordinates, and stay connected with notifications that last for two full weeks."
  },
  {
    id: "keyquest-pro",
    title: "KeyQuest Pro Mechanical Keyboard",
    tagline: "The Ultimate Tactile Typing Experience",
    category: "Productivity",
    price: 169.99,
    originalPrice: 189.99,
    rating: 4.9,
    reviewCount: 389,
    image: "assets/images/keyquest_pro.png",
    amazonUrl: "https://www.amazon.com/dp/B08HMWX5ZJ?tag=affiliate-deals-20",
    features: [
      "Compact 75% layout maximizes desk space for mouse movement",
      "Hot-swappable sockets support 3-pin and 5-pin MX switches",
      "Pre-lubed linear red switches for buttery smooth, quiet keystrokes",
      "Three-mode connectivity: 2.4Ghz wireless, Bluetooth 5.1, and USB-C",
      "Premium double-shot PBT keycaps with dye-sublimated legends"
    ],
    specifications: {
      "Form Factor": "75% (84 Keys)",
      "Mounting Style": "Gasket Mounted",
      "Switch Type": "Pre-lubed Custom Linear Red Switches",
      "Battery Capacity": "4000mAh (Up to 200 hours without RGB)",
      "Backlighting": "16.8 Million Color Per-Key RGB",
      "Frame Material": "CNC Anodized Aluminum",
      "Stabilizers": "Screw-in PCB Stabilizers (Lubed)"
    },
    description: "Rediscover the joy of typing with the KeyQuest Pro. Built on a gasket-mounted structure and encased in premium CNC aluminum, this mechanical keyboard offers unmatched acoustic resonance and structural comfort. With pre-lubed switches and hot-swappable convenience, it is a keyboard enthusiast's dream, ready to boost your typing speed and gaming response."
  },
  {
    id: "hydrostream-go",
    title: "HydroStream Go Smart Bottle",
    tagline: "Hydration Tracking for the Modern Explorer",
    category: "Fitness",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 618,
    image: "assets/images/hydrostream_go.png",
    amazonUrl: "https://www.amazon.com/dp/B09BMWX9ZJ?tag=affiliate-deals-20",
    features: [
      "Double-walled vacuum insulation keeps drinks cold for 24h, hot for 12h",
      "Smart touch LED cap displays current temperature with a tap",
      "Periodic glowing alert ring reminds you to take a sip every hour",
      "Built-in UV-C water purification sanitizes cap and bottle in 60s",
      "Eco-friendly, BPA-free premium food-grade 18/8 stainless steel"
    ],
    specifications: {
      "Volume Capacity": "20 oz (600 ml)",
      "Material": "18/8 Premium Stainless Steel",
      "Battery Life": "Up to 30 days on a magnetic charge",
      "Sterilization": "280nm UV-C LED (99.99% sterilization)",
      "Weight": "350g (Empty)",
      "Leak Protection": "Leak-proof silicon seal ring",
      "Color Options": "Deep Ocean Blue, Matte Black, Alpine White"
    },
    description: "Stay healthy, pure, and hydrated with the HydroStream Go. This smart water bottle does more than keep your drinks at the perfect temperature; it sanitizes your water using cutting-edge UV-C light and vibrates to remind you to drink. Made from food-grade stainless steel, it is the ultimate companion for travel, gym, or office."
  }
];

// Export for ES Modules (fallback to global variable if loaded in browser directly)
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = products;
} else {
  window.products = products;
}
