const products = [
  {
    id: "1001",
    title: "iQOO Z11x 5G",
    tagline: "7200mAh Massive Battery & Dimensity 7400 Turbo",
    category: "Productivity",
    price: 24999,
    originalPrice: 27999,
    rating: 4.7,
    reviewCount: 1024,
    image: "assets/images/iqoo_z11x_black.jpg",
    amazonUrl: "https://link.amazon/B02PhmY3S",
    features: [
      "Dimensity 7400 Turbo Processor: Segment-first performance with 1Mn+ AnTuTu score, paired with UFS 3.1 storage.",
      "Massive 7200mAh Z11x Battery: Packed with 44W FlashCharge support and Bypass gaming charge protection.",
      "OriginOS 6 (Android 16): Features Circle to Search, AI Transcript Assist, and 4 years of security updates.",
      "50MP Sony IMX852 AI Camera: Ultra-HD photography with a 32MP front selfie lens and 4K recording support.",
      "IP68 & IP69+ Durability: Segment-leading dust/waterproof rating alongside certified Military Grade drop-proof builds."
    ],
    specifications: {
      "Brand": "iQOO",
      "Operating System": "OriginOS 6.0 based on Android 16",
      "Processor": "MediaTek Dimensity 7400 Turbo (2.6 GHz)",
      "RAM Memory": "6 GB / 8 GB LPDDR5",
      "Storage": "128 GB / 256 GB UFS 3.1",
      "Battery Capacity": "7200 mAh (44W FlashCharge)",
      "Main Camera": "50 MP Sony IMX 852 (f/1.8, EIS) + 2 MP Depth",
      "Front Camera": "32 MP Selfie (4K Video Support)",
      "IP Rating": "IP68 & IP69+ Dust/Water Resistance",
      "Durability": "Military Grade Shockproof & Drop Resistant"
    },
    description: "Unleash the ultimate power and endurance with the iQOO Z11x 5G. Designed for power-users and gaming enthusiasts alike, this smartphone is driven by the lightning-fast MediaTek Dimensity 7400 Turbo processor, scoring over 1 million on AnTuTu benchmarks. It packs the segment's largest 7200mAh battery, keeping you connected for days with safety-engineered 44W FlashCharge. Outfitted with high-visibility OriginOS 6 powered by Android 16, an ultra-crisp 50MP Sony IMX852 camera, and double-certified IP68/IP69+ military durability, the iQOO Z11x is ready to conquer any challenge.",
    variants: [
      { name: "6GB + 128GB", price: 24999, originalPrice: 27999, amazonUrl: "https://link.amazon/B02PhmY3S" },
      { name: "8GB + 128GB", price: 27999, originalPrice: 30999, amazonUrl: "https://link.amazon/B0bc2UmVi" },
      { name: "8GB + 256GB", price: 30999, originalPrice: 33999, amazonUrl: "https://link.amazon/B0j1TZY1O" }
    ],
    colors: [
      { name: "Titan Black", image: "assets/images/iqoo_z11x_black.jpg", hex: "#2b2e35" },
      { name: "Prismatic Green", image: "assets/images/iqoo_z11x_green.jpg", hex: "#c2e7e2" }
    ]
  },
  {
    id: "1002",
    title: "iQOO Neo 10 5G",
    tagline: "India's Slimmest 7000mAh Battery Smartphone with Snapdragon 8s Gen 4",
    category: "Productivity",
    price: 41999,
    originalPrice: 46999,
    rating: 4.8,
    reviewCount: 512,
    image: "assets/images/iqoo_neo10_white.jpg",
    amazonUrl: "https://link.amazon/A0fn3g7W7",
    features: [
      "Fastest Smartphone in Segment: Snapdragon 8s Gen 4 (4nm) with 2.51Mn+ AnTuTu score. Self-developed Supercomputing Chip Q1 for ultra-smooth 144FPS gaming.",
      "India's Slimmest 7000mAh Battery Smartphone: 120W FlashCharge from 1 to 50% in just 19 mins, packed in an ultra-slim 0.809cm lightweight body.",
      "Segment's Brightest AMOLED Display: 1.5K AMOLED, 144Hz refresh rate, 2000 nits HBM & up to 5500 nits peak brightness for clear sunlight visibility.",
      "4K 60FPS Front & Rear Camera: 50MP Sony OIS Portrait camera with AI Erase, AI Image Expander, and built-in editing tools.",
      "OriginOS 6.0 (Android 15): Faster UI with One-Tap Transfer, Office Kit, and Origin Island for seamless Android & iOS connectivity."
    ],
    specifications: {
      "Brand": "iQOO",
      "Operating System": "Funtouch OS 15 / OriginOS 6.0 (Android 15)",
      "Processor": "Snapdragon 8s Gen 4 (4nm, 3.21 GHz)",
      "RAM Memory": "12 GB LPDDR5X",
      "Storage": "256 GB / 512 GB UFS 4.0",
      "Display": "1.5K AMOLED, 144Hz, 5500 nits Peak Brightness",
      "Battery Capacity": "7000 mAh (120W FlashCharge)",
      "Main Camera": "50 MP Sony OIS Portrait (4K 60FPS)",
      "Front Camera": "4K 60FPS Selfie Camera",
      "Thickness": "Ultra-Slim 0.809 cm"
    },
    description: "Meet the iQOO Neo 10 — India's slimmest 7000mAh battery smartphone, engineered to redefine performance and endurance. Powered by the blazing Snapdragon 8s Gen 4 chip with the proprietary Q1 gaming processor, it delivers an AnTuTu score of 2.51 million and segment-leading 144FPS stability for demanding titles. The 1.5K AMOLED display shines brilliantly at up to 5500 nits peak brightness, while the 120W FlashCharge gets you from 1% to 50% in just 19 minutes. Capture every moment in stunning clarity with the 50MP Sony OIS camera offering 4K 60FPS front and rear recording, enhanced by AI tools. All of this in an impossibly slim 0.809cm chassis running OriginOS 6.0 for a connected, seamless daily experience.",
    variants: [
      { name: "8GB + 256GB", price: 41999, originalPrice: 46999, amazonUrl: "https://link.amazon/A0fn3g7W7" },
      { name: "12GB + 256GB", price: 46999, originalPrice: 51999, amazonUrl: "https://link.amazon/A0hD0xD3o" }
    ],
    colors: [
      { name: "Marble White", image: "assets/images/iqoo_neo10_white.jpg", hex: "#e8e8e8" },
      { name: "Graphite Black", image: "assets/images/iqoo_neo10_black.jpg", hex: "#2d2d2d" }
    ]
  },
  {
    id: "1003",
    title: "iQOO 15R 5G",
    tagline: "Snapdragon 8 Gen 5 · 7600mAh · 144Hz AMOLED · India's Slimmest Flagship",
    category: "Productivity",
    price: 49999,
    originalPrice: 54999,
    rating: 4.8,
    reviewCount: 256,
    image: "assets/images/iqoo_15r_blue.jpg",
    amazonUrl: "https://link.amazon/A0eYxJ4q2",
    features: [
      "Fastest in Segment: Snapdragon 8 Gen 5 (3nm TSMC) with 3.5Mn+ AnTuTu, LPDDR5X Ultra RAM & UFS 4.1 storage for ultimate flagship speed.",
      "India's Slimmest 7600mAh Battery Smartphone: 0.790cm ultra-slim body with 100W FlashCharge (20→44% in 10 mins) and Bypass Charging 2.0.",
      "Segment's Most Stable 144FPS Gaming: Supercomputing Chip Q2 with 1.5K Super Resolution, 144FPS frame interpolation & 6.5K IceCore VC Cooling.",
      "50MP Sony LYT-700V OIS Camera: AI Magic Move, AI Image Expander, AI Four Seasons — IP68 & IP69 dust/water resistance.",
      "OriginOS 6.0 (Android 16): 4 years OS + 6 years security updates. Origin Island, Office Kit, One-Tap Transfer & Android-iOS connectivity."
    ],
    specifications: {
      "Brand": "iQOO",
      "Operating System": "OriginOS 6.0 based on Android 16",
      "Processor": "Snapdragon 8 Gen 5 (3nm, 3.8 GHz)",
      "RAM Memory": "8 GB / 12 GB LPDDR5X Ultra",
      "Storage": "256 GB / 512 GB UFS 4.1",
      "Display": "1.5K 144Hz AMOLED, 5000 nits Local Peak",
      "Battery Capacity": "7600 mAh (100W FlashCharge)",
      "Main Camera": "50 MP Sony LYT-700V OIS (AI Enhanced)",
      "IP Rating": "IP68 & IP69 Dust/Water Resistance",
      "Thickness": "Ultra-Slim 0.790 cm",
      "Gaming Chip": "Supercomputing Chip Q2 + Dedicated Network Chip"
    },
    description: "The iQOO 15R 5G is the ultimate flagship-performance smartphone built for power users and gamers. Driven by the Snapdragon 8 Gen 5 on TSMC's 3nm process, it smashes through benchmarks with a 3.5 million AnTuTu score. The Supercomputing Chip Q2 delivers simultaneous 1.5K Super Resolution and rock-solid 144FPS gaming, cooled by a 6.5K IceCore VC system. Despite packing a massive 7600mAh battery with 100W FlashCharge, it remains India's slimmest at just 0.790cm. The 1.5K AMOLED display blazes at 5000 nits local peak brightness and 144Hz, while the 50MP Sony LYT-700V OIS camera captures stunning shots enhanced by cutting-edge AI. Running OriginOS 6.0 with 4 years of OS updates and IP68/IP69 durability, the 15R is built to last.",
    variants: [
      { name: "8GB + 256GB",  price: 49999, originalPrice: 54999, amazonUrl: "https://link.amazon/A0eYxJ4q2" },
      { name: "12GB + 256GB", price: 54999, originalPrice: 59999, amazonUrl: "https://link.amazon/A097L3pIJ" },
      { name: "12GB + 512GB", price: 61999, originalPrice: 66999, amazonUrl: "https://link.amazon/A0baNRnhb" }
    ],
    colors: [
      { name: "Pixel Blue",     image: "assets/images/iqoo_15r_blue.jpg",  hex: "#adc8e0" },
      { name: "Graphite Black", image: "assets/images/iqoo_15r_black.jpg", hex: "#3a3a3a" }
    ]
  },
  {
    id: "1004",
    title: "Lenovo IdeaPad Slim 3 15",
    tagline: "13th Gen Intel Core i3 · 15.6\" FHD Anti-Glare · 1.6kg Ultra Thin & Light",
    category: "Productivity",
    price: 46390,
    originalPrice: 56890,
    rating: 4.5,
    reviewCount: 184,
    image: "assets/images/lenovo_slim3_1.jpg",
    amazonUrl: "https://link.amazon/B0i7yNgv1",
    features: [
      "13th Gen Intel Core i3-1315U Processor: 6 Cores (2 P-cores + 4 E-cores) and 8 Threads, with P-core up to 4.5GHz and 10MB Smart Cache.",
      "15.6\" FHD Anti-Glare Display: Clear 1920x1080 resolution, 250 nits brightness, and TUV Low Blue Light certified for eye protection.",
      "Fast Memory & Storage: Preloaded with 8GB high-speed LPDDR5-4800 RAM and 512GB PCIe Gen 4 SSD (expandable up to 1TB).",
      "Sleek & Lightweight Design: Ultra-thin profile of 1.79cm and only 1.6kg light weight, featuring a 4-side narrow bezel screen.",
      "Pre-installed OS & Office: Out-of-the-box Windows 11 Home, Microsoft Office Home 2024, and 3-month Xbox Game Pass subscription."
    ],
    specifications: {
      "Brand": "Lenovo",
      "Model Number": "82X700HMIN",
      "Processor": "Intel Core i3-1315U (6 Cores, 8 Threads, up to 4.5 GHz)",
      "RAM Memory": "8 GB LPDDR5-4800 (Soldered)",
      "Storage": "512 GB PCIe x4 SSD (Expandable up to 1TB)",
      "Display": "15.6\" FHD (1920x1080) Anti-Glare, 250 nits",
      "Operating System": "Windows 11 Home",
      "Office Suite": "Microsoft Office Home 2024",
      "Graphics": "Intel UHD Graphics (Shared)",
      "Color": "Arctic Grey",
      "Weight": "1.62 Kg (1620 Grams)",
      "Special Features": "Anti-Glare Coating, HD Audio, Memory Card Slot, FHD 1080p Webcam",
      "Warranty": "1 Year On-Site + 1 Year ADP Free",
      "Dimensions": "35.9L x 23.5W x 1.8Th Centimeters"
    },
    description: "Designed for students, business professionals, and personal daily use, the Lenovo IdeaPad Slim 3 is a powerful, thin, and light laptop that goes wherever you go. Powered by the 13th Gen Intel Core i3-1315U processor with 6 cores and 8 threads, it delivers snappy multi-tasking alongside energy efficiency. The 15.6\" FHD anti-glare screen with TUV low blue light certification protects your eyes during long study or work sessions. Outfitted with 8GB high-speed LPDDR5 memory, a 512GB SSD, Windows 11 Home, and Office Home 2024 pre-installed, this Arctic Grey companion is ready to boost your productivity out of the box.",
    colors: [
      { name: "Arctic Grey", image: "assets/images/lenovo_slim3_1.jpg", hex: "#8e9196" },
      { name: "Inside View", image: "assets/images/lenovo_slim3_2.jpg", hex: "#5c5e62" }
    ]
  },
  {
    id: "1005",
    title: "Sony WH-1000XM4 Wireless ANC Headphones",
    tagline: "Active Noise Cancellation · 30 Hrs Battery Life · Voice Control",
    category: "Audio",
    price: 19990,
    originalPrice: 29990,
    rating: 4.7,
    reviewCount: 12450,
    image: "https://m.media-amazon.com/images/I/71o8Q5GPXtL._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0863TXGM3",
    features: [
      "Digital Noise Cancellation: Industry-leading ANC blocks out ambient sound for pure listening pleasure.",
      "Smart Listening Tech: Automatically adjusts ambient sound settings based on your activity and location.",
      "Long Battery Life: Up to 30 hours of playback on a single charge with quick charge support (10 min for 5 hours).",
      "Wearing Detection: Automatically pauses playback when you take the headphones off to save battery life.",
      "Clear Hands-free Calls: Multiple built-in microphones with advanced voice signal processing for crystal-clear calls."
    ],
    specifications: {
      "Brand": "Sony",
      "Model": "WH-1000XM4",
      "Color": "Black",
      "Form Factor": "Over Ear",
      "Battery Life": "30 Hours",
      "Charging Time": "Approx. 3 Hours (Quick Charge: 10 mins for 5 hrs)",
      "Connector Type": "Wireless Bluetooth & 3.5mm Jack",
      "Control Type": "Touch Control Sensors",
      "Weight": "254 Grams"
    },
    description: "The Sony WH-1000XM4 wireless headphones deliver industry-leading noise cancelling performance, combining sleek design with advanced audio technology. Featuring proprietary Dual Noise Sensor technology and the HD Noise Cancelling Processor QN1, these headphones constantly filter out external noise in real-time. Smart features like Speak-to-Chat automatically pause music when you speak, while wearing detection ensures you never miss a beat. With a lightweight design, pressure-relieving earpads, and up to 30 hours of battery life, the WH-1000XM4 offers ultimate long-wear comfort for travelers, remote workers, and audiophiles alike.",
    variants: [
      { name: "Standard Pack", price: 19990, originalPrice: 29990, amazonUrl: "https://amazon.in/dp/B0863TXGM3" }
    ],
    colors: [
      { name: "Black", image: "https://m.media-amazon.com/images/I/71o8Q5GPXtL._SL1500_.jpg", hex: "#1e1e1e" },
      { name: "Silver", image: "https://m.media-amazon.com/images/I/611ZzKz7k0L._SL1500_.jpg", hex: "#d1d5db" }
    ]
  },
  {
    id: "1006",
    title: "Apple MacBook Air Laptop M3 chip",
    tagline: "M3 Liquid Retina Display · 8-core CPU · 10-core GPU · Superlight",
    category: "Productivity",
    price: 99990,
    originalPrice: 114900,
    rating: 4.8,
    reviewCount: 3840,
    image: "https://m.media-amazon.com/images/I/71xk5a1f6aL._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0CXF14P77",
    features: [
      "Blazing Fast Apple M3 Chip: Speed through everyday tasks, intense coding, and heavy photo editing with an 8-core CPU.",
      "Up to 18 Hours Battery Life: Go all day without plugging in, thanks to the incredible efficiency of Apple silicon.",
      "Stunning 13.6-inch Liquid Retina Display: Supports one billion colors and up to 500 nits brightness for rich imagery.",
      "Silent Design: Fanless aluminum enclosure runs completely silent even under heavy workloads.",
      "Facetime HD Camera & 3-Mic Array: Look and sound your best with a 1080p camera and spatial audio sound system."
    ],
    specifications: {
      "Brand": "Apple",
      "Model": "MacBook Air M3",
      "Screen Size": "13.6 Inches",
      "Processor": "Apple M3 Chip (8-core CPU, 10-core GPU)",
      "RAM Size": "8 GB Unified Memory",
      "Storage": "256 GB SSD",
      "Operating System": "macOS",
      "Weight": "1.24 Kg",
      "Battery Life": "Up to 18 Hours"
    },
    description: "The redesigned Apple MacBook Air powered by the state-of-the-art M3 chip is the ultimate thin-and-light laptop for productivity, creativity, and entertainment. Housed in a durable 100% recycled aluminum enclosure, it features a beautiful Liquid Retina display that delivers vibrant colors and sharp details. The next-generation M3 chip brings phenomenal speed, allowing you to multitask seamlessly, edit 4K video, or write code with ease. With up to 18 hours of battery life, a silent fanless architecture, and MagSafe charging, this laptop is designed for maximum efficiency and portability.",
    variants: [
      { name: "8GB RAM / 256GB SSD", price: 99990, originalPrice: 114900, amazonUrl: "https://amazon.in/dp/B0CXF14P77" },
      { name: "16GB RAM / 512GB SSD", price: 129990, originalPrice: 144900, amazonUrl: "https://amazon.in/dp/B0CXF57H2F" }
    ],
    colors: [
      { name: "Space Grey", image: "https://m.media-amazon.com/images/I/71xk5a1f6aL._SL1500_.jpg", hex: "#4a4d50" },
      { name: "Midnight Blue", image: "https://m.media-amazon.com/images/I/71-D16nJqJL._SL1500_.jpg", hex: "#1e293b" }
    ]
  },
  {
    id: "1007",
    title: "OnePlus Buds 3",
    tagline: "49dB Active Noise Cancellation · Dual Drivers · 44 Hours Battery Life",
    category: "Audio",
    price: 5499,
    originalPrice: 6499,
    rating: 4.6,
    reviewCount: 3820,
    image: "https://m.media-amazon.com/images/I/61F1Wk-nB6L._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0CQYGVF5Z",
    features: [
      "49dB Smart Noise Cancellation: High-performance ANC dynamically filters out noise for distraction-free listening.",
      "Dual Dynamic Drivers: Features 10.4mm + 6mm drivers for deep bass, crisp mids, and beautiful high-frequency audio.",
      "44 Hours Total Playback: Charging case extends listening time up to 44 hours with support for fast charging.",
      "Hi-Res Audio Support: LDAC audio codec certification delivers studio-grade wireless sound resolution.",
      "IP55 Water & Sweat Resistance: Built to withstand intense workouts, dust, and rain showers."
    ],
    specifications: {
      "Brand": "OnePlus",
      "Model": "Buds 3",
      "Color": "Metallic Gray",
      "Form Factor": "In Ear",
      "Active Noise Cancellation": "Yes (Up to 49dB)",
      "Battery Life": "Up to 44 Hours (with case)",
      "Water Resistance": "IP55 Rating",
      "Bluetooth Version": "5.3",
      "Charging Time": "10 min charge for 7 hours playback"
    },
    description: "Experience premium, immersive audio on the go with the OnePlus Buds 3. Armed with dual dynamic drivers and LHDC 5.0 high-definition audio support, these earbuds reproduce rich, detailed soundscapes. Smart ANC adaptively cancels up to 49dB of external noise depending on your environment, ensuring clarity in noisy cafes or offices. With an ergonomic design, dual-connection support, and up to 44 hours of total battery life, the OnePlus Buds 3 are the perfect companions for all-day calls and music.",
    variants: [
      { name: "Standard Pack", price: 5499, originalPrice: 6499, amazonUrl: "https://amazon.in/dp/B0CQYGVF5Z" }
    ],
    colors: [
      { name: "Metallic Gray", image: "https://m.media-amazon.com/images/I/61F1Wk-nB6L._SL1500_.jpg", hex: "#4b5563" },
      { name: "Splendid Blue", image: "https://m.media-amazon.com/images/I/61g+2Vv-51L._SL1500_.jpg", hex: "#60a5fa" }
    ]
  },
  {
    id: "1008",
    title: "Echo Dot (5th Gen, 2023 release)",
    tagline: "Smart Speaker with Alexa · Deeper Bass & Clearer Vocals",
    category: "Smart Home",
    price: 4999,
    originalPrice: 5499,
    rating: 4.5,
    reviewCount: 9400,
    image: "https://m.media-amazon.com/images/I/61k0+TDFBKL._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B09B8SB767",
    features: [
      "Our Best Sounding Echo Dot Yet: Enjoy clearer vocals and deeper bass for vibrant sound in any room.",
      "Alexa Smart Assistant: Ask Alexa to play music, check the weather, set alarms, or tell jokes hands-free.",
      "Smart Home Control: Control compatible smart devices like lights, plugs, and ACs using voice commands.",
      "In-built Motion & Temperature Sensors: Trigger custom smart routines (e.g. turn on AC when temperature rises).",
      "Privacy Protections: Built with multiple layers of privacy controls, including a dedicated mic-off button."
    ],
    specifications: {
      "Brand": "Amazon",
      "Model": "Echo Dot 5th Gen",
      "Color": "Black",
      "Speaker Type": "1.73” Front-firing Speaker",
      "Smart Assistant": "Alexa Built-in",
      "Connectivity": "Wi-Fi & Bluetooth",
      "Sensors": "Temperature & Motion Sensors",
      "Dimensions": "3.9”W x 3.9”D x 3.5”H"
    },
    description: "The 5th generation Echo Dot is Amazon's most advanced smart speaker yet, delivering richer, clearer vocals and deeper bass for immersive audio. Powered by Alexa, it serves as the central hub of your smart home, allowing you to control lighting, temperature, and electronics using simple voice commands. The built-in indoor temperature and motion sensors can automate smart routines, like turning on fans or lights when someone enters. Designed with privacy in mind, it includes a physical button to disconnect the microphones, offering complete control over your home environment.",
    variants: [
      { name: "Standard Echo Dot", price: 4999, originalPrice: 5499, amazonUrl: "https://amazon.in/dp/B09B8SB767" }
    ],
    colors: [
      { name: "Black", image: "https://m.media-amazon.com/images/I/61k0+TDFBKL._SL1500_.jpg", hex: "#1e1e24" },
      { name: "Blue", image: "https://m.media-amazon.com/images/I/618xSg-aU5L._SL1500_.jpg", hex: "#4f728c" }
    ]
  },
  {
    id: "1009",
    title: "ASUS Vivobook 15 Laptop",
    tagline: "Intel Core i3-1215U · 8GB RAM · 512GB SSD · 1.6Kg thin & light",
    category: "Productivity",
    price: 38990,
    originalPrice: 50990,
    rating: 4.3,
    reviewCount: 2980,
    image: "https://m.media-amazon.com/images/I/71-FS5K9VbL._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0C3RDG1PZ",
    features: [
      "12th Gen Intel Core i3 Processor: 6 Cores and 8 Threads handle daily office tasks, streaming, and homework with ease.",
      "Brilliant 15.6-inch FHD Display: Clear 1920x1080 resolution with a 16:9 aspect ratio and narrow bezels.",
      "High-speed Memory & Storage: Equipped with 8GB DDR4 RAM and a rapid 512GB M.2 NVMe SSD for fast boot times.",
      "Ergonomic Keyboard: Comes with a full-sized chiclet keyboard and numeric keypad for comfortable typing.",
      "Military-grade Toughness: Engineered to meet US MIL-STD 810H durability standards for reliable daily usage."
    ],
    specifications: {
      "Brand": "ASUS",
      "Model": "Vivobook 15 X1502ZA",
      "Processor": "Intel Core i3-1215U (up to 4.4 GHz)",
      "RAM": "8 GB DDR4",
      "Storage": "512 GB PCIe 4.0 SSD",
      "Screen Size": "15.6 Inches",
      "Operating System": "Windows 11 Home",
      "Weight": "1.7 Kg",
      "Battery Life": "Up to 6 Hours"
    },
    description: "The ASUS Vivobook 15 is a feature-rich, daily companion laptop that makes tasks easy. Running a 12th Gen Intel Core i3 processor, 8GB of expandable memory, and 512GB SSD, it provides all the computing power you need for school, office, and media consumption. The 180-degree lay-flat hinge allows easy screen-sharing, while the physical webcam shield ensures instant privacy. Certified with military-grade ruggedness, this laptop is a dependable, high-durability powerhouse for anyone seeking budget-friendly performance.",
    variants: [
      { name: "Intel i3 / 8GB / 512GB", price: 38990, originalPrice: 50990, amazonUrl: "https://amazon.in/dp/B0C3RDG1PZ" },
      { name: "Intel i5 / 16GB / 512GB", price: 49990, originalPrice: 65990, amazonUrl: "https://amazon.in/dp/B0C3RDG1PZ" }
    ],
    colors: [
      { name: "Quiet Blue", image: "https://m.media-amazon.com/images/I/71-FS5K9VbL._SL1500_.jpg", hex: "#2b344a" },
      { name: "Icelight Silver", image: "https://m.media-amazon.com/images/I/71G1wKqR4aL._SL1500_.jpg", hex: "#e2e8f0" }
    ]
  },
  {
    id: "1010",
    title: "Apple Watch SE (2nd Gen)",
    tagline: "GPS 40mm · Heart Rate Tracker · Sleep Monitor · Water Resistant",
    category: "Fitness",
    price: 27900,
    originalPrice: 29900,
    rating: 4.7,
    reviewCount: 4520,
    image: "https://m.media-amazon.com/images/I/71YdE55GwjL._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0BDK62PDX",
    features: [
      "Track Your Daily Workouts: Monitor running, yoga, swimming, and dance metrics in the enhanced Activity app.",
      "Heart Health Alerts: Get alerts for high, low, or irregular heart rhythms directly on your wrist.",
      "Safety Detection Features: Crash Detection and Fall Detection can automatically call emergency services if needed.",
      "Water Resistant to 50m: Swim-proof design allows you to track splits and sets in the pool or open water.",
      "Seamless Apple Integration: Unlock your Mac automatically, pay with Apple Pay, and view notifications."
    ],
    specifications: {
      "Brand": "Apple",
      "Model": "Watch SE (GPS, 40mm)",
      "Color": "Starlight",
      "Case Size": "40 mm",
      "Display": "Retina OLED Display (up to 1000 nits)",
      "Battery Life": "Up to 18 Hours",
      "Water Resistance": "Swimproof (50 meters)",
      "Sensors": "Heart Rate, Accelerometer, Gyroscope"
    },
    description: "The Apple Watch SE brings all the essential connectivity, fitness tracking, and safety features of Apple Watch at an accessible price point. Powered by the S8 SiP chip, it runs smoothly and coordinates notifications, calls, and texts right from your wrist. With advanced health trackers, sleep monitoring, and crash detection features, it acts as a reliable guardian and fitness companion. Its swim-proof design and curated starlight finish make it stylish and robust for any workout.",
    variants: [
      { name: "GPS / 40mm", price: 27900, originalPrice: 29900, amazonUrl: "https://amazon.in/dp/B0BDK62PDX" },
      { name: "GPS / 44mm", price: 29900, originalPrice: 32900, amazonUrl: "https://amazon.in/dp/B0BDK3M1N2" }
    ],
    colors: [
      { name: "Starlight", image: "https://m.media-amazon.com/images/I/71YdE55GwjL._SL1500_.jpg", hex: "#eae4d9" },
      { name: "Midnight Black", image: "https://m.media-amazon.com/images/I/71d1ytcCNTL._SL1500_.jpg", hex: "#1e1e24" }
    ]
  },
  {
    id: "1011",
    title: "Redmi Pad SE Tablet",
    tagline: "11-inch FHD+ 90Hz Display · 8000mAh Battery · Dolby Atmos Sound",
    category: "Productivity",
    price: 13999,
    originalPrice: 15999,
    rating: 4.4,
    reviewCount: 1580,
    image: "https://m.media-amazon.com/images/I/718yP553Z2L._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0D1898VQC",
    features: [
      "11-inch FHD+ Eye Protection Screen: 90Hz refresh rate and TUV Rheinland certified low blue light screen.",
      "Snapdragon 680 Processor: Smooth multitasking, web browsing, and casual gaming with a 6nm octa-core chip.",
      "Quad Speakers with Dolby Atmos: Quad speaker layout outputs immersive surround sound for media enjoyment.",
      "Massive 8000mAh Battery: Long-lasting power keeps you streaming videos up to 14 hours on a single charge.",
      "Unibody Metal Design: Premium aluminum build that is light (478g) and slim (7.36mm) for absolute portability."
    ],
    specifications: {
      "Brand": "Xiaomi",
      "Model": "Redmi Pad SE",
      "Screen Size": "11 Inches",
      "Resolution": "FHD+ (1920x1200)",
      "Processor": "Snapdragon 680 (6nm, Octa-Core)",
      "RAM Memory": "6 GB LPDDR4X",
      "Storage": "128 GB eMMC (Expandable up to 1TB)",
      "Battery": "8000 mAh (10W Fast Charging)",
      "Weight": "478 Grams"
    },
    description: "The Redmi Pad SE is a premium-feeling, metal-unibody budget tablet designed for seamless learning, reading, and entertainment. Driven by the efficient Snapdragon 680 chip, it operates smoothly for daily streaming and app multitasking. The large 11-inch 90Hz display is accompanied by quad speakers certified by Dolby Atmos to create an outstanding cinematic streaming experience. Housed with a massive 8000mAh battery that guarantees long-range daily usage, this tablet is the perfect budget multimedia device.",
    variants: [
      { name: "6GB RAM / 128GB Storage", price: 13999, originalPrice: 15999, amazonUrl: "https://amazon.in/dp/B0D1898VQC" },
      { name: "8GB RAM / 128GB Storage", price: 14999, originalPrice: 16999, amazonUrl: "https://amazon.in/dp/B0D1898VQC" }
    ],
    colors: [
      { name: "Graphite Gray", image: "https://m.media-amazon.com/images/I/718yP553Z2L._SL1500_.jpg", hex: "#4b5563" },
      { name: "Mint Green", image: "https://m.media-amazon.com/images/I/71r61t6i76L._SL1500_.jpg", hex: "#d1fae5" }
    ]
  },
  {
    id: "1012",
    title: "Bose QuietComfort Wireless Headphones",
    tagline: "Legendary Noise Cancellation · Custom EQ · 24 Hours Battery",
    category: "Audio",
    price: 32900,
    originalPrice: 35900,
    rating: 4.8,
    reviewCount: 2310,
    image: "https://m.media-amazon.com/images/I/51J8uN2S4UL._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0CCZ229PY",
    features: [
      "Legendary Noise Cancellation: Alternate between Quiet Mode for full ANC and Aware Mode to hear surroundings.",
      "High-Fidelity Audio: Adjust bass, mid-range, and treble settings easily using Bose's customizable EQ controls.",
      "All-day Comfort: Plush earcup cushions and a padded headband keep you comfortable for long listening sessions.",
      "Up to 24 Hours Battery Life: Get 24 hours of playback from one charge (15-min charge gives 2.5 hours).",
      "Seamless Multi-Point Connection: Bluetooth Multipoint allows you to switch between phone and laptop instantly."
    ],
    specifications: {
      "Brand": "Bose",
      "Model": "QuietComfort Headphones",
      "Color": "Triple Black",
      "Form Factor": "Over Ear",
      "Battery Life": "Up to 24 Hours",
      "Bluetooth Range": "Up to 30 Feet",
      "Charging Port": "USB Type-C",
      "Audio Cable": "3.5mm to 2.5mm Included",
      "Weight": "240 Grams"
    },
    description: "Take control of your music with Bose QuietComfort wireless headphones. Engineered with legendary active noise cancellation and high-fidelity sound components, they allow you to listen with absolute focus. The lightweight, padded headband and premium synthetic leather cushions ensure a secure, fatigue-free fit. Customize your sound profile using the Bose Music app's adjustable EQ or switch modes seamlessly between work and play using Bluetooth multi-point linking.",
    variants: [
      { name: "Standard QC Pack", price: 32900, originalPrice: 35900, amazonUrl: "https://amazon.in/dp/B0CCZ229PY" }
    ],
    colors: [
      { name: "Triple Black", image: "https://m.media-amazon.com/images/I/51J8uN2S4UL._SL1500_.jpg", hex: "#1e1e1e" },
      { name: "Cypress Green", image: "https://m.media-amazon.com/images/I/51p831iI7zL._SL1500_.jpg", hex: "#2f4f4f" }
    ]
  },
  {
    id: "1013",
    title: "Mi Smart Air Fryer 3.5L",
    tagline: "WiFi App Control · 1500W · Intelligent OLED Display · Healthy Oil-Free Cook",
    category: "Smart Home",
    price: 6999,
    originalPrice: 14999,
    rating: 4.4,
    reviewCount: 3420,
    image: "https://m.media-amazon.com/images/I/51r29vV-Q0L._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0B5L8K9LN",
    features: [
      "Healthy Cooking with Less Oil: Uses 360-degree hot air circulation to fry, bake, and grill food with minimal fat.",
      "Smart App Control: Connect to the Xiaomi Home app to set timers, view over 100 recipes, and schedule cooking.",
      "Wide-Range Temperature Control: Adjustable from 40°C to 200°C for yogurt fermentation, defrosting, and baking.",
      "Intelligent OLED Touchscreen: Easily monitor temperature, time, and cooking modes with the interactive dial display.",
      "Double-layer Non-stick Coating: Removable 3.5L basket features a durable, wear-resistant coating for easy cleaning."
    ],
    specifications: {
      "Brand": "Xiaomi",
      "Model": "MAF02",
      "Capacity": "3.5 Liters",
      "Power Wattage": "1500 Watts",
      "Voltage": "220-240V",
      "Control Mode": "OLED Dial & WiFi App Control",
      "Temperature Range": "40°C to 200°C",
      "Inner Coating": "Double-layer PTFE Non-stick",
      "Weight": "3.9 Kg"
    },
    description: "The Mi Smart Air Fryer 3.5L is a smart kitchen appliance designed to make cooking healthy and hassle-free. Featuring 360-degree hot air circulation and 1500W of power, it heats food evenly to create crispy textures with up to 85% less oil. It goes beyond simple frying, serving as a defroster, fruit dehydrator, and yogurt maker. With WiFi control, you can schedule cooking up to 24 hours in advance and access a library of smart recipes right from your phone.",
    variants: [
      { name: "3.5L Smart Air Fryer", price: 6999, originalPrice: 14999, amazonUrl: "https://amazon.in/dp/B0B5L8K9LN" }
    ],
    colors: [
      { name: "Glossy White", image: "https://m.media-amazon.com/images/I/51r29vV-Q0L._SL1500_.jpg", hex: "#ffffff" }
    ]
  },
  {
    id: "1014",
    title: "OnePlus Nord CE4 Lite 5G",
    tagline: "Sony LYT-600 Camera with OIS · 80W SuperVOOC · 5500mAh Battery",
    category: "Productivity",
    price: 19999,
    originalPrice: 20999,
    rating: 4.3,
    reviewCount: 2950,
    image: "https://m.media-amazon.com/images/I/61Io5-19e7L._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0D5Y7QWMR",
    features: [
      "Sony LYT-600 Camera with OIS: Capture sharp, vibrant photos even in challenging low light with hardware OIS support.",
      "80W SuperVOOC Fast Charge: Charge the phone from 1% to 100% in just 52 minutes with absolute safety-guard checks.",
      "Massive 5500mAh Battery: High-density battery gives you up to two days of calls, messaging, and streaming.",
      "120Hz AMOLED Display: Enjoy ultra-smooth scrolling and viewing on a bright screen (up to 2100 nits peak).",
      "Dual Stereo Speakers: Integrated dual speakers output crisp, loud audio with 300% Ultra Volume Mode."
    ],
    specifications: {
      "Brand": "OnePlus",
      "Model": "Nord CE4 Lite 5G",
      "Operating System": "OxygenOS based on Android 14",
      "Processor": "Snapdragon 695 5G",
      "RAM Size": "8 GB LPDDR4X",
      "Storage": "128 GB UFS 2.2 (Expandable up to 1TB)",
      "Battery Capacity": "5500 mAh (80W SuperVOOC)",
      "Main Camera": "50 MP Sony LYT-600 with OIS",
      "Display": "6.67-inch AMOLED, 120Hz, 2100 nits Peak"
    },
    description: "The OnePlus Nord CE4 Lite 5G brings flagship-grade features to a budget-friendly price. Equipped with a 50MP Sony LYT-600 camera with Optical Image Stabilization, it takes bright, blur-free photos in any lighting. The 80W SuperVOOC fast charger fuels the massive 5500mAh battery in minutes, keeping you powered for up to two days. Running OxygenOS for a fast, clean interface, it features a beautiful 120Hz AMOLED screen, dual stereo speakers, and a modern geometric finish.",
    variants: [
      { name: "8GB + 128GB", price: 19999, originalPrice: 20999, amazonUrl: "https://amazon.in/dp/B0D5Y7QWMR" },
      { name: "8GB + 256GB", price: 21999, originalPrice: 22999, amazonUrl: "https://amazon.in/dp/B0D5Y8RTYQ" }
    ],
    colors: [
      { name: "Super Canyon Blue", image: "https://m.media-amazon.com/images/I/61Io5-19e7L._SL1500_.jpg", hex: "#3b82f6" },
      { name: "Mega Silver", image: "https://m.media-amazon.com/images/I/61Io5-19e7L._SL1500_.jpg", hex: "#cbd5e1" }
    ]
  },
  {
    id: "1015",
    title: "Samsung Galaxy Buds2 Pro",
    tagline: "24-bit Hi-Fi Sound · Intelligent ANC · 360 Audio · Ergonomic Fit",
    category: "Audio",
    price: 14999,
    originalPrice: 19999,
    rating: 4.6,
    reviewCount: 4560,
    image: "https://m.media-amazon.com/images/I/61LlGR7jVTL._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B0B3D55S48",
    features: [
      "24-bit Hi-Fi Audio: Enjoy clear, high-resolution sound with Samsung's seamless audio codec compression.",
      "Intelligent Active Noise Cancellation: Three high SNR microphones filter out external noises including wind and whispers.",
      "Voice Detect: Instantly switches from ANC to Ambient Sound when you start speaking, so you can converse freely.",
      "360 Spatial Audio: Creates a multi-channel soundstage that dynamically matches head movements.",
      "IPX7 Water Resistance: Sweat-proof and water-resistant for up to 30 minutes in 1 meter of fresh water."
    ],
    specifications: {
      "Brand": "Samsung",
      "Model": "Galaxy Buds2 Pro",
      "Color": "Graphite",
      "Form Factor": "In Ear",
      "Water Resistance": "IPX7 Rating",
      "Audio Quality": "24-bit Hi-Fi",
      "Microphones": "3 High SNR Microphones",
      "Battery Life": "Up to 29 Hours (with case)"
    },
    description: "The Samsung Galaxy Buds2 Pro represent the peak of wireless audio tech, producing immersive, studio-quality sound. Powered by a coaxial 2-way speaker and 24-bit audio resolution, they present crisp high notes and deep, booming bass. The Intelligent ANC adapts to your voice, automatically switching to ambient transparency mode when you begin speaking. Housed in a compact, ergonomic design with an IPX7 water rating, they are built for comfortable, worry-free workouts.",
    variants: [
      { name: "Standard Pack", price: 14999, originalPrice: 19999, amazonUrl: "https://amazon.in/dp/B0B3D55S48" }
    ],
    colors: [
      { name: "Graphite", image: "https://m.media-amazon.com/images/I/61LlGR7jVTL._SL1500_.jpg", hex: "#27272a" },
      { name: "White", image: "https://m.media-amazon.com/images/I/61o4sSg+kBL._SL1500_.jpg", hex: "#f4f4f5" }
    ]
  },
  {
    id: "1016",
    title: "TP-Link Deco M4 Whole Home Mesh WiFi",
    tagline: "AC1200 Dual-Band Mesh WiFi · Coverage up to 5500 Sq Ft · Connect 100+ Devices",
    category: "Smart Home",
    price: 9999,
    originalPrice: 18999,
    rating: 4.5,
    reviewCount: 8940,
    image: "https://m.media-amazon.com/images/I/51SswG1L88L._SL1500_.jpg",
    amazonUrl: "https://amazon.in/dp/B07R8526F7",
    features: [
      "Seamless Whole-Home Coverage: Deco units work together to form a unified network, eliminating dead zones.",
      "Dual Band Speed: Deliver lag-free AC1200 dual band speeds (up to 867Mbps on 5GHz, 300Mbps on 2.4GHz).",
      "Connect 100+ Devices: Advanced Deco Mesh technology handles heavy traffic loads, supporting multiple streams.",
      "Robust Parental Controls: Limit screen time, block inappropriate websites, and pause internet access.",
      "Easy App Setup: Quick and intuitive network configuration using the TP-Link Deco smartphone app."
    ],
    specifications: {
      "Brand": "TP-Link",
      "Model": "Deco M4 (3-Pack)",
      "Wireless Standard": "802.11ac (WiFi 5)",
      "Speed Rating": "AC1200 Dual Band",
      "Coverage": "Up to 5500 Square Feet",
      "Gigabit Ports": "2 Gigabit Ports per Deco Unit",
      "App Control": "Deco App (iOS & Android)",
      "Security Protocols": "WPA-PSK/WPA2-PSK"
    },
    description: "Eliminate WiFi dead zones and enjoy seamless, high-speed connectivity across your entire home with the TP-Link Deco M4 Mesh system. The 3-pack kit covers up to 5500 square feet, allowing your devices to automatically switch Deco connections as you move from room to room without experiencing buffering or dropouts. Highly capable of handling over 100 connected devices, it operates as a router or access point. Setting up your home network is a breeze using the guided visual instructions in the Deco app.",
    variants: [
      { name: "3-Pack Mesh Kit", price: 9999, originalPrice: 18999, amazonUrl: "https://amazon.in/dp/B07R8526F7" }
    ],
    colors: [
      { name: "White Cylinder", image: "https://m.media-amazon.com/images/I/51SswG1L88L._SL1500_.jpg", hex: "#ffffff" }
    ]
  }
];

// Export for ES Modules (fallback to global variable if loaded in browser directly)
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = products;
} else {
  window.products = products;
}
