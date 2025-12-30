export const siteConfig = {
  name: "Autocenter Kaddoura",
  tagline: "Ihr vertrauensvoller Partner für hochwertige Jahres- und Gebrauchtwagen seit über 25 Jahren",
  description: "Entdecken Sie hochwertige Jahres- und Gebrauchtwagen bei Autocenter Kaddoura. Qualität, Vertrauen und Service seit über 25 Jahren in Wuppertal.",
  url: "https://www.autocenterkaddoura.de",
  mobileDeUrl: "https://home.mobile.de/KADDOURA#ses",
  phone: "+49 157 37015935",
  phone1: "+49 172 2812576",

  mobile: "+49 (0)202 2443611",
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
    { day: "Samstag", time: "10:00 - 13:00 Uhr" },
    { day: "Sonntag", time: "Geschlossen" }
  ],
  navigation: [
    { name: "Home", href: "/" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Fahrzeuge", href: "#fahrzeuge" },
    { name: "Services", href: "#services" },
    { name: "Unser Team", href: "#team" },
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
    model: "V60 B4 Plus Dark",
    year: 2025,
    mileage: 19654,
    price: 36990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: "197 PS",
    image: "/1767029675652.jpeg",
    alt: "VOLVO V60 B4 Plus Dark Kombi mit Panoramadach und Harman Kardon",
    link: "https://home.mobile.de/KADDOURA#des_442746153",
    featured: true
  },
  {
    id: 2,
    brand: "VOLVO",
    model: "EX30 Ultra AWD Twin Performance",
    year: 2024,
    mileage: 4517,
    price: 37990,
    fuel: "Elektro",
    transmission: "Automatik",
    power: "428 PS",
    image: "/1767029685190.jpeg",
    alt: "VOLVO EX30 Ultra AWD Twin Performance Elektro mit Panoramadach",
    link: "https://home.mobile.de/KADDOURA#des_443458357",
    featured: true
  },
  {
    id: 3,
    brand: "VOLVO",
    model: "XC60 T6 AWD Plus Black Edition",
    year: 2025,
    mileage: 14415,
    price: 51590,
    fuel: "Plug-in-Hybrid",
    transmission: "Automatik",
    power: "398 PS",
    image: "/1767029697164.jpeg",
    alt: "VOLVO XC60 T6 AWD Plus Black Edition mit Panoramadach und Standheizung",
    link: "https://home.mobile.de/KADDOURA#des_442746140",
    featured: true
  },
  {
    id: 4,
    brand: "VOLVO",
    model: "XC90 T8 Plus Bright Facelift",
    year: 2025,
    mileage: 27260,
    price: 68890,
    fuel: "Plug-in-Hybrid",
    transmission: "Automatik",
    power: "455 PS",
    image: "/1767029764837.jpeg",
    alt: "VOLVO XC90 T8 Plus Bright Facelift mit Panoramadach und 360° Kamera",
    link: "https://home.mobile.de/KADDOURA#des_443093417",
    featured: true
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
    title: "Netto-Auslandsverkauf",
    description: "Wir bieten Ihnen den Verkauf Ihres Fahrzeugs im Netto-Auslandsverkauf an. Profitieren Sie von unseren Erfahrungen und unserem Service für einen reibungslosen Ablauf.",
    icon: "banknote"
  }
];

export const testimonials = [
  {
    name: "Fabian Fromm",
    text: "Ich habe vor kurzem einen XC90 beim Autocenter Kaddoura gekauft und bin absolut begeistert. Besonders hervorheben möchte ich den Verkäufer und Eigentümer Rami – äußerst freundlich, kompetent und ehrlich. Vom ersten Kontakt bis zur Fahrzeugübergabe lief alles reibungslos und professionell ab.",
    rating: 5,
    date: "vor 2 Wochen"
  },
  {
    name: "Ronni Holzapfel",
    text: "So macht Autokauf Spaß. Unkompliziert, freundlich, ehrlich, zuverlässig. Herr Kaddoura hat das Fahrzeug ausführlich erklärt. Ein sehr sympathisches Unternehmen. Nettes Gespräch bei der Abholung. Wir sind sehr zufrieden mit dem Kauf und wünschen dem Unternehmen weiterhin viel Erfolg. Für uns ein klares Weiterempfehlen. Danke Herr Kaddoura",
    rating: 5,
    date: "vor 1 Monat"
  },
  {
    name: "Rene Deutsch",
    text: "Von A bis Z alles bestens, vom Erstgespräch bis zur Übergabe eines wunderschönen XC90! Absolut weiterzuempfehlen",
    rating: 5,
    date: "vor 3 Wochen"
  },
  {
    name: "Dieter Schulte",
    text: "Ich habe bei Herrn Kaddoura einen wunderschönen Volvo XC60 B4 Diesel gekauft. Der mit VOLVOs vollgestellte ehemalige Tankstellenbetrieb sieht nicht wie ein Premiummarkenbetrieb aus, Herr Kaddoura bietet günstige junge Volvos von guter Qualität an. Ich bin mit meinem Auto sehr zufrieden und kann Herrn Kaddoura und sein Team sehr empfehlen.",
    rating: 5,
    date: "vor 2 Monaten"
  },
  {
    name: "Mo Ghazaleh",
    text: "Ich habe 5 Sterne gesehen seit 10 Jahren. Volvo 90 R-Design beauftragt einzukaufen. ⭐️ Für schnelle Umsetzung wie immer ⭐️ Ehrliche Beratung von A-Z ⭐️ Vertrauenswürdig durch Transparenz ⭐️ Sehr faire Preise ⭐️ Engagiert",
    rating: 5,
    date: "vor 1 Monat"
  },
  {
    name: "Dr. Hermann Teutemacher",
    text: "Ich bin seit mehr als 13 Jahren bei Herrn Kaddoura, meinen aktuellen Volvo fahre ich seit 3 Jahren und werde auch wohl nie mehr woanders meine Autos kaufen; ich bin in allen mir wichtigen Aspekten sehr zufrieden; Fairness, Zuverlässigkeit, Engagement, wenn ich mal ein Problem habe, Freundlichkeit und Herzlichkeit auch des Personals.",
    rating: 5,
    date: "vor 3 Monaten"
  },
  {
    name: "Sami Alkhatib",
    text: "Ich habe vor Kurzem für mich privat ein Fahrzeug, einen Volvo XC90, beim AutoCenter Kaddoura erworben. Der gesamte Kaufablauf war äußerst professionell und angenehm. Herr Kaddoura war sehr hilfsbereit, und alles lief reibungslos. Ich kann das Autohaus absolut weiterempfehlen und bedanke mich für den hervorragenden Service.",
    rating: 5,
    date: "vor 2 Wochen"
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
    name: "Rami Kaddoura",
    role: "Geschäftsführer",
    image: "/images_rami.jpeg",
    description: "Geschäftsführer und Ihr Hauptansprechpartner für alle Fragen rund um hochwertige Fahrzeuge und unseren Service."
  },
  {
    name: "Ahmad Kaddoura",
    role: "Geschäftsführer",
    image: "/chef.jpg",
    description: "Geschäftsführer mit langjähriger Expertise im Automobilhandel und persönlicher Kundenbetreuung."
  },
  {
    name: "Jennifer Scholl",
    role: "Verwaltung",
    image: "/",
    description: "Verwaltungsfachkraft, zuständig für Büroorganisation und Kundenanfragen."
  }

];
