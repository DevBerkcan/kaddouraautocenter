import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteData";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Qualitätsfahrzeuge in Wuppertal`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Autocenter Kaddoura",
    "Gebrauchtwagen Wuppertal",
    "Autohändler Wuppertal",
    "Fahrzeugankauf",
    "Gebrauchtwagenhandel",
    "Auto kaufen Wuppertal",
    "Qualitätsfahrzeuge",
    "Finanzierung",
    "Inzahlungnahme"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: '/Logo_neu.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/Logo_neu.jpg', sizes: '16x16', type: 'image/jpeg' }
    ],
    apple: [
      { url: '/Logo_neu.jpg', sizes: '180x180', type: 'image/jpeg' }
    ]
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/Logo_neu.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
