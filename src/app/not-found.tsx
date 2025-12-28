"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fafafa] to-white pt-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-9xl md:text-[200px] font-bold text-[#1a1a1a] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              404
            </motion.h1>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                Seite nicht gefunden
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8 max-w-xl mx-auto">
                Die gesuchte Seite existiert leider nicht. Möglicherweise wurde sie verschoben oder der Link ist veraltet.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-white font-semibold
                         rounded-xl hover:bg-[#2d2d2d] transition-colors shadow-lg"
              >
                <Home className="w-5 h-5" />
                Zur Startseite
              </Link>

              <Link
                href="/#fahrzeuge"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a]
                         font-semibold rounded-xl hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                <Search className="w-5 h-5" />
                Fahrzeuge ansehen
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-[#6b6b6b] mb-4">Beliebte Seiten:</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#ueber-uns"
                  className="text-sm text-[#1a1a1a] hover:text-[#2d2d2d] font-medium underline"
                >
                  Über uns
                </Link>
                <Link
                  href="/#services"
                  className="text-sm text-[#1a1a1a] hover:text-[#2d2d2d] font-medium underline"
                >
                  Services
                </Link>
                <Link
                  href="/#team"
                  className="text-sm text-[#1a1a1a] hover:text-[#2d2d2d] font-medium underline"
                >
                  Unser Team
                </Link>
                <Link
                  href="/#kontakt"
                  className="text-sm text-[#1a1a1a] hover:text-[#2d2d2d] font-medium underline"
                >
                  Kontakt
                </Link>
              </div>

              {/* Contact */}
              <div className="mt-8 p-6 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl">
                <p className="text-white mb-4">
                  Brauchen Sie Hilfe? Kontaktieren Sie uns!
                </p>
                <a
                  href="tel:+4915737015935"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a1a] font-semibold
                           rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +49 157 37015935
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
