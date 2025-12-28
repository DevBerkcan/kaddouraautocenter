"use client";

import { motion } from "framer-motion";
import { ExternalLink, Fuel, Gauge, Calendar, Zap } from "lucide-react";
import { vehicles, siteConfig } from "@/data/siteData";
import { formatPrice, formatMileage } from "@/lib/utils";

export default function VehiclesSection() {
  const featuredVehicles = vehicles.filter(v => v.featured);

  return (
    <section id="fahrzeuge" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 text-[#1a1a1a] text-sm font-semibold
                         tracking-widest uppercase rounded-full mb-4">
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
            Alle Fahrzeuge sind geprüft und mit Garantie.
          </p>
          <p className="text-lg text-[#6b6b6b]">
  Die dargestellten Fahrzeuge sind eine Auswahl unseres Angebots und können zwischenzeitlich bereits verkauft worden sein.
</p>

        </motion.div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5
                       hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 cursor-pointer"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${vehicle.image}')`,
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  role="img"
                  aria-label={vehicle.alt || `${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                             group-hover:from-black/40 transition-colors duration-300" />
                
                {/* Price Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1.5 bg-[#1a1a1a] text-white text-sm
                              font-bold rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {formatPrice(vehicle.price)}
                </motion.div>

                {/* Brand Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium opacity-80">{vehicle.brand}</span>
                  <h3 className="text-white text-lg font-bold">{vehicle.model}</h3>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-[#6b6b6b] text-sm">
                    <Calendar className="w-4 h-4 text-[#1a1a1a]" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6b6b6b] text-sm">
                    <Gauge className="w-4 h-4 text-[#1a1a1a]" />
                    <span>{formatMileage(vehicle.mileage)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6b6b6b] text-sm">
                    <Fuel className="w-4 h-4 text-[#1a1a1a]" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6b6b6b] text-sm">
                    <Zap className="w-4 h-4 text-[#1a1a1a]" />
                    <span>{vehicle.power}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-[#6b6b6b] bg-gray-100 px-2 py-1 rounded">
                    {vehicle.transmission}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-[#6b6b6b] mb-6">
            Mehr Fahrzeuge finden Sie auf unserem Mobile.de Account
          </p>
          <motion.a
            href={siteConfig.mobileDeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-semibold
                     rounded-xl hover:bg-[#2d2d2d] transition-colors duration-300
                     shadow-lg shadow-black/20 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Alle Fahrzeuge auf Mobile.de
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
