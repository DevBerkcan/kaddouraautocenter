# Autocenter Kaddoura - Website

Eine moderne, responsive Website für das Autocenter Kaddoura in Wuppertal, entwickelt mit Next.js 15, TypeScript und Tailwind CSS.

## 🚗 Features

- **Responsive Design** - Optimiert für alle Gerätetypen (Desktop, Tablet, Mobile)
- **Moderne UI** - Elegantes Design mit sanften Animationen (Framer Motion)
- **SEO optimiert** - Strukturierte Daten, Meta-Tags, Sitemap
- **Cookie-Consent** - DSGVO-konforme Cookie-Verwaltung
- **Rechtliche Seiten** - Impressum, Datenschutz, AGB
- **Kontaktformular** - Direkte Anfragemöglichkeit
- **Google Maps Integration** - Standortanzeige mit Navigation
- **Mobile.de Integration** - Verlinkung zu allen Fahrzeuginserate
- **PWA-ready** - Manifest für Progressive Web App

## 📁 Projektstruktur

```
src/
├── app/
│   ├── page.tsx              # Hauptseite
│   ├── layout.tsx            # Root Layout mit Fonts/Meta
│   ├── globals.css           # Globale Styles
│   ├── not-found.tsx         # 404 Seite
│   ├── impressum/            # Impressum
│   ├── datenschutz/          # Datenschutzerklärung
│   └── agb/                  # AGB
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navigation Header
│   │   └── Footer.tsx        # Footer mit Links
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero Banner
│   │   ├── VehiclesSection.tsx # Fahrzeug-Showcase
│   │   ├── ServicesSection.tsx # Leistungen
│   │   ├── AboutSection.tsx  # Über uns
│   │   ├── GallerySection.tsx # Bildergalerie
│   │   ├── TestimonialsSection.tsx # Kundenstimmen
│   │   ├── CTASection.tsx    # Call-to-Action
│   │   └── ContactSection.tsx # Kontakt mit Map
│   └── ui/
│       ├── Button.tsx        # Wiederverwendbarer Button
│       ├── Card.tsx          # Card Komponente
│       ├── Section.tsx       # Section Container
│       └── CookieConsent.tsx # Cookie Banner
├── data/
│   └── siteData.ts           # Zentrale Konfiguration
└── lib/
    └── utils.ts              # Hilfsfunktionen
```

## 🛠 Installation

1. **Repository klonen oder entpacken**
   ```bash
   unzip autocenter-kaddoura.zip
   cd autocenter-kaddoura
   ```

2. **Dependencies installieren**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```

4. **Produktions-Build erstellen**
   ```bash
   npm run build
   npm start
   ```

## ⚙️ Konfiguration

### Wichtige Anpassungen in `src/data/siteData.ts`:

- Echte Telefonnummer eintragen
- Mobile.de Händler-URL anpassen
- Koordinaten für Google Maps prüfen
- Social Media Links aktualisieren

### Impressum & Rechtliches:

Unbedingt folgende Platzhalter ersetzen:
- [Name des Geschäftsführers]
- [HRB XXXXX] - Handelsregisternummer
- DE [XXXXXXXXX] - Umsatzsteuer-ID

## 🚀 Deployment

### Vercel (empfohlen)
```bash
npm install -g vercel
vercel
```

## 📄 Lizenz

© 2026 Autocenter Kaddoura. Alle Rechte vorbehalten.
