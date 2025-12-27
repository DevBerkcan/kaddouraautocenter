export const siteConfig = {
  name: "Autocenter Kaddoura",
  tagline: "Ihr offizieller VOLVO Vertragshändler in Wuppertal",
  description: "Entdecken Sie die Welt von VOLVO bei Autocenter Kaddoura. Qualität, Vertrauen und Service seit Jahren in Wuppertal.",
  url: "https://www.autocenterkaddoura.de",
  mobileDeUrl: "https://www.mobile.de/haendler/autocenter-kaddoura-12345",
  phone: "+49 202 1234567",
  email: "info@autocenterkaddoura.de",
  address: {
    street: "Vohwinkeler Str. 126",
    city: "42329 Wuppertal",
    country: "Deutschland"
  },
  coordinates: {
    lat: 51.2372,
    lng: 7.0727
  },
  socialMedia: {
    instagram: "https://instagram.com/autocenterkaddoura",
    whatsapp: "https://wa.me/49202XXXXXXX"
  },
  openingHours: [
    { day: "Montag - Freitag", time: "09:00 - 18:00 Uhr" },
    { day: "Samstag", time: "10:00 - 14:00 Uhr" },
    { day: "Sonntag", time: "Geschlossen" }
  ],
  navigation: [
    { name: "Home", href: "/" },
    { name: "Fahrzeuge", href: "#fahrzeuge" },
    { name: "Services", href: "#services" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Team", href: "#team" },
    { name: "Kontakt", href: "#kontakt" }
  ],
  footerLinks: {
    legal: [
      { name: "Impressum", href: "/impressum" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "AGB", href: "/agb" }
    ],
    quicklinks: [
      { name: "Alle Fahrzeuge", href: "#fahrzeuge" },
      { name: "Finanzierung", href: "#services" },
      { name: "Kontakt", href: "#kontakt" }
    ]
  }
};

export const vehicles = [
  {
    id: 1,
    brand: "VOLVO",
    model: "XC60 B5 Mild Hybrid",
    year: 2023,
    mileage: 12000,
    price: 52900,
    fuel: "Benzin/Hybrid",
    transmission: "Automatik",
    power: "250 PS",
    image: "/images/vehicles/volvo-xc60.jpg",
    featured: true
  },
  {
    id: 2,
    brand: "VOLVO",
    model: "XC40 Recharge Pure Electric",
    year: 2024,
    mileage: 5000,
    price: 48900,
    fuel: "Elektro",
    transmission: "Automatik",
    power: "231 PS",
    image: "/images/vehicles/volvo-xc40-electric.jpg",
    featured: true
  },
  {
    id: 3,
    brand: "VOLVO",
    model: "V60 B4 Diesel",
    year: 2023,
    mileage: 18000,
    price: 42900,
    fuel: "Diesel",
    transmission: "Automatik",
    power: "197 PS",
    image: "/images/vehicles/volvo-v60.jpg",
    featured: true
  },
  {
    id: 4,
    brand: "VOLVO",
    model: "XC90 B6 Mild Hybrid",
    year: 2022,
    mileage: 28000,
    price: 59900,
    fuel: "Benzin/Hybrid",
    transmission: "Automatik",
    power: "300 PS",
    image: "/images/vehicles/volvo-xc90.jpg",
    featured: true
  },
  {
    id: 5,
    brand: "VOLVO",
    model: "S60 B5 Mild Hybrid",
    year: 2023,
    mileage: 15000,
    price: 44900,
    fuel: "Benzin/Hybrid",
    transmission: "Automatik",
    power: "250 PS",
    image: "/images/vehicles/volvo-s60.jpg",
    featured: false
  },
  {
    id: 6,
    brand: "VOLVO",
    model: "V90 Cross Country",
    year: 2022,
    mileage: 32000,
    price: 49900,
    fuel: "Diesel",
    transmission: "Automatik",
    power: "197 PS",
    image: "/images/vehicles/volvo-v90.jpg",
    featured: false
  }
];

export const services = [
  {
    title: "Fahrzeugankauf",
    description: "Wir kaufen Ihr Fahrzeug zu fairen Preisen. Schnell, unkompliziert und seriös.",
    icon: "car"
  },
  {
    title: "Finanzierung",
    description: "Flexible Finanzierungslösungen passend zu Ihrem Budget.",
    icon: "banknote"
  },
  {
    title: "Garantie",
    description: "Alle unsere Fahrzeuge kommen mit umfassender Garantie.",
    icon: "shield"
  },
  {
    title: "Inzahlungnahme",
    description: "Ihr altes Fahrzeug wird fair bewertet und in Zahlung genommen.",
    icon: "refresh"
  }
];

export const testimonials = [
  {
    name: "Thomas M.",
    text: "Hervorragender Service! Die Beratung war kompetent und das Fahrzeug genau wie beschrieben. Absolut empfehlenswert.",
    rating: 5,
    date: "November 2024"
  },
  {
    name: "Sarah K.",
    text: "Schnelle und unkomplizierte Abwicklung. Das Autocenter Kaddoura ist mein Ansprechpartner für Gebrauchtwagen.",
    rating: 5,
    date: "Oktober 2024"
  },
  {
    name: "Michael B.",
    text: "Faire Preise und ehrliche Beratung. So stelle ich mir einen vertrauenswürdigen Autohändler vor.",
    rating: 5,
    date: "September 2024"
  }
];

export const galleryImages = [
  {
    src: "/images/gallery/showroom-1.jpg",
    alt: "Showroom Autocenter Kaddoura",
    category: "showroom"
  },
  {
    src: "/images/gallery/vehicle-1.jpg",
    alt: "Premium Fahrzeug",
    category: "vehicles"
  },
  {
    src: "/images/gallery/team-1.jpg",
    alt: "Unser Team",
    category: "team"
  },
  {
    src: "/images/gallery/showroom-2.jpg",
    alt: "Ausstellungsfläche",
    category: "showroom"
  },
  {
    src: "/images/gallery/vehicle-2.jpg",
    alt: "Luxusfahrzeug",
    category: "vehicles"
  },
  {
    src: "/images/gallery/service-1.jpg",
    alt: "Kundenservice",
    category: "service"
  }
];

export const teamMembers = [
  {
    name: "Hassan Kaddoura",
    role: "Geschäftsführer",
    image: "/images/team/hassan.jpg",
    description: "Ihr Ansprechpartner für alle Fragen rund um VOLVO und unseren Service."
  },
  {
    name: "Team Verkauf",
    role: "Verkaufsberatung",
    image: "/images/team/sales.jpg",
    description: "Kompetente Beratung für Ihren neuen VOLVO - persönlich und individuell."
  },
  {
    name: "Team Service",
    role: "Werkstatt & Service",
    image: "/images/team/service.jpg",
    description: "Professioneller Service und Wartung für Ihr VOLVO Fahrzeug."
  }
];
