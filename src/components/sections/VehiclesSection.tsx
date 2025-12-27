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
        </motion.div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 
                       hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 
                       hover:-translate-y-2"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 
                           group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-${
                      index === 0 ? '1618843479313-40f8afb4b4d8' :
                      index === 1 ? '1555215695-3004980ad54e' :
                      index === 2 ? '1606664515524-ed2f786a0bd6' :
                      '1609521263047-f8f205293f24'
                    }?q=80&w=800&auto=format&fit=crop')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#1a1a1a] text-white text-sm 
                              font-bold rounded-lg shadow-lg">
                  {formatPrice(vehicle.price)}
                </div>

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
          <a
            href={siteConfig.mobileDeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-semibold 
                     rounded-xl hover:bg-[#2d2d2d] transition-all duration-300 hover:scale-105 
                     shadow-lg shadow-black/20 group"
          >
            Alle Fahrzeuge auf Mobile.de
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
