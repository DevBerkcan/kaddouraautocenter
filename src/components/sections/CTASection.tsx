"use client";

import { motion } from "framer-motion";
import { ExternalLink, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold
                           tracking-widest uppercase rounded-full mb-6">
              Jetzt handeln
            </span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-wide leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              FINDEN SIE IHREN
              <span className="text-gray-300"> VOLVO</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Entdecken Sie unser gesamtes Fahrzeugangebot auf Mobile.de. 
              Qualitätsfahrzeuge zu fairen Preisen warten auf Sie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={siteConfig.mobileDeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a1a1a] font-semibold
                         rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/20"
              >
                Alle Fahrzeuge auf Mobile.de
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href={`tel:${siteConfig.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold 
                         rounded-xl hover:bg-white hover:text-[#1a1a1a] transition-all"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </motion.a>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8"
            >
              {[
                { icon: "✓", text: "Geprüfte Fahrzeuge" },
                { icon: "✓", text: "Faire Preise" },
                { icon: "✓", text: "Garantie inklusive" },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400">
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-sm">
                    {badge.icon}
                  </span>
                  <span className="text-sm">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
