"use client";

import Link from "next/link";
import { Instagram, Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M5 17a2 2 0 104 0M15 17a2 2 0 104 0M5 17H3v-4l2-6h10l4 6v4h-2M5 17h10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11V7M15 11V7" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="text-xs tracking-widest text-gray-400">AUTOCENTER</span>
                <h2 
                  className="text-xl font-bold tracking-wider"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  KADDOURA
                </h2>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Partner für Qualitätsfahrzeuge in Wuppertal. 
              Kompetente Beratung und erstklassiger Service.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center
                         hover:bg-white/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href={siteConfig.socialMedia.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center
                         hover:bg-white/20 transition-colors group"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-lg font-bold mb-6 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              SCHNELLZUGRIFF
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.mobileDeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Alle Fahrzeuge auf Mobile.de
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-lg font-bold mb-6 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              KONTAKT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}
                </div>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 
              className="text-lg font-bold mb-6 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ÖFFNUNGSZEITEN
            </h3>
            <ul className="space-y-3">
              {siteConfig.openingHours.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <span className="text-white font-medium">{item.day}</span>
                    <br />
                    <span className="text-gray-400">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Autocenter Kaddoura. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {siteConfig.footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
