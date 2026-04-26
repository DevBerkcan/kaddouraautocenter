"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function VehiclesSection() {
  return (
    <section id="fahrzeuge" className="py-20 md:py-32 bg-[#fafafa]">
      <link
        rel="stylesheet"
        id="srfx-csr-style-css"
        href="https://showroom.carcuro.com/style.css?v=1.1.8"
        type="text/css"
        media="all"
      />
      <Script
        type="text/javascript"
        id="srfx-csr-js-js"
        src="https://showroom.carcuro.com/showroom.es.js?v=1.1.8"
        strategy="afterInteractive"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 text-[#1a1a1a] text-sm font-semibold tracking-widest uppercase rounded-full mb-4">
            Unser Angebot
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            AUSGEWÄHLTE FAHRZEUGE
          </h2>
          <p className="text-lg text-[#6b6b6b]">
            Entdecken Sie eine Auswahl unserer hochwertigen Gebrauchtwagen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-2xl overflow-hidden shadow-lg shadow-black/10 bg-white p-2 sm:p-4"
        >
          <car-showroom companytoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoxMTgxNSwiaWF0IjoxNzc2ODQ0ODU1LCJleHAiOjQ5MDEwNDcyNTV9.iaeWbHQSVBHeon5jYQPz4SN4u9ygqFOH__xbe6jha9w"></car-showroom>
        </motion.div>
      </div>
    </section>
  );
}
