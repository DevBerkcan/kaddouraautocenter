export const siteConfig = {
  name: "Autocenter Kaddoura",
  tagline: "Ihr vertrauensvoller Partner für hochwertige Jahres- und Gebrauchtwagen seit über 25 Jahren",
  description: "Entdecken Sie hochwertige Jahres- und Gebrauchtwagen bei Autocenter Kaddoura. Qualität, Vertrauen und Service seit über 25 Jahren in Wuppertal.",
  url: "https://www.autocenterkaddoura.de",
  mobileDeUrl: "https://home.mobile.de/KADDOURA#ses",
  phone: "+49 157 37015935",
  mobile: "+49 (0)202 2443611",
  fax: "+49 (0)202 2443613",
  email: "info@autocenter-kaddoura.de",
  emailSales: "rami@autocenter-kaddoura.de",
  address: {
    street: "Friedrich-Ebert-Straße 150",
    city: "42117 Wuppertal",
    country: "Deutschland"
  },
  coordinates: {
    lat: 51.2639,
    lng: 7.1467
  },
  vatId: "DE453978437",
  taxNumber: "5132/5149/3299",
  languages: ["Deutsch", "English", "العربية"],
  mobileDeVisitors: "379297 Besucher seit 22.05.2000",
  mobileDeRating: 4.5,
  googleRating: 4.5,
  googleReviews: 320,
  googleBusinessUrl: "https://www.google.com/search?sa=X&sca_esv=d412fff20e7449cb&q=Autocenter+Kaddoura+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjYzNTM1MLMwtTAyMTAzNDI038DI-IpR3rG0JD85Na8ktUjBOzElJb-0KFEhKLUqNa84Mz8vNW8RKyEVAEHMAQxeAAAA&rldimm=3365650685824061217&tbm=lcl&hl=de-DE&ved=2ahUKEwi-xbnio-CRAxVd2wIHHXtTARAQ9fQKegQIJxAG",
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
      { name: "Cookie-Einstellungen", href: "/cookies-einstellungen" },
      { name: "AGB", href: "/agb" },
      { name: "Widerruf", href: "/widerruf" }
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
    image: "/volvo_1.jpeg",
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
    image: "/volvo_2.jpeg",
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
    image: "/volvo_3.jpeg",
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
    image: "/volvo_4.jpeg",
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
    image: "/volvo_5.jpeg",
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
    image: "/volvo_6.jpeg",
    featured: false
  }
];

export const services = [
  {
    title: "Faire Inzahlungnahme Ihres Fahrzeugs",
    description: "Wir bewerten Ihr Auto transparent und bieten Ihnen einen fairen Preis. Gerne nehmen wir Ihr aktuelles Fahrzeug in Zahlung.",
    icon: "refresh"
  },
  {
    title: "Online-Besichtigungen per WhatsApp-Video",
    description: "Sehen Sie Ihr Wunschfahrzeug bequem von zu Hause aus live und in Echtzeit. Kontaktieren Sie uns einfach per WhatsApp.",
    icon: "video"
  },
  {
    title: "Internationaler Fahrzeugverkauf",
    description: "Verkaufen Sie Ihr Fahrzeug unkompliziert ins Ausland. Wir kümmern uns um Netto-Abrechnung, Ausfuhrdokumente und alle Formalitäten für Nicht-EU-Länder.",
    icon: "plane"
  },
  {
    title: "Rundum-Service für Ihr Fahrzeug",
    description: "Auf Wunsch kümmern wir uns um TÜV, Inspektion, DEKRA-Gebrauchtwagencheck, Zulassung und bieten optional eine Gebrauchtwagengarantie für maximale Sicherheit und Komfort.",
    icon: "shield"
  },
  {
    title: "Zulassungsdienst",
    description: "In Zusammenarbeit mit dem Zulassungsdienst sind wir in der Lage in den umliegenden Kreisen die Zulassung Ihres Fahrzeuges durchzuführen. So sparen Sie sich zeitraubende Behördengänge.",
    icon: "clipboard"
  },
  {
    title: "Finanzierung",
    description: "Flexible Finanzierungslösungen passend zu Ihrem Budget. Wir beraten Sie gerne und finden gemeinsam die beste Lösung für Sie.",
    icon: "banknote"
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
    name: "Ahmad Kaddoura",
    role: "Geschäftsführer",
    image: "/chef.jpeg",
    description: "Geschäftsführer und Ihr Hauptansprechpartner für alle Fragen rund um hochwertige Fahrzeuge und unseren Service."
  },
  {
    name: "Rami Kaddoura",
    role: "Geschäftsführer",
    image: "/images_rami.jpeg",
    description: "Geschäftsführer mit langjähriger Expertise im Automobilhandel und persönlicher Kundenbetreuung."
  }
];
