"use client";

import { motion } from "framer-motion";
import { Car, Banknote, Shield, RefreshCw, Plane, ClipboardCheck, Headphones, Video } from "lucide-react";
import { services as servicesData } from "@/data/siteData";

// Icon mapping
const iconMap: Record<string, any> = {
  car: Car,
  banknote: Banknote,
  shield: Shield,
  refresh: RefreshCw,
  plane: Plane,
  clipboard: ClipboardCheck,
  video: Video,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[180px]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold
                         tracking-widest uppercase rounded-full mb-4">
            Unsere Leistungen
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            MEHR ALS NUR AUTOHANDEL
          </h2>
          <p className="text-lg text-gray-400">
            Umfassender Service rund um Ihr Fahrzeug.Wir sind für Sie da – vor, während und nach dem Kauf.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Car;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6
                         hover:bg-white/10 hover:border-white/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5
                             group-hover:bg-white/30 transition-colors">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-white mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent
                             via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Haben Sie Fragen zu unseren Leistungen?
          </p>
          <button
            onClick={() => {
              const kontakt = document.getElementById("kontakt");
              if (kontakt) kontakt.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] font-semibold
                     rounded-xl hover:bg-gray-200 transition-all duration-300 hover:scale-105
                     shadow-lg shadow-white/20"
          >
            <Headphones className="w-5 h-5" />
            Jetzt beraten lassen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
