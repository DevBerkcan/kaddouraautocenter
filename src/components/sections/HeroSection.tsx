"use client";

import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Star, Users } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("fahrzeuge");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/herosectionimg.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-white/10 rounded-full blur-[100px]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-[120px]"
        animate={{
          y: [0, 30, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 
                         rounded-full text-white/80 text-sm tracking-widest uppercase">
            Willkommen bei
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wider"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          AUTOCENTER KADDOURA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={siteConfig.mobileDeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1a1a1a] font-semibold
                     rounded-xl hover:bg-gray-200 transition-colors duration-300
                     shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Zu unseren Fahrzeugen auf Mobile.de
            <ExternalLink className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:rotate-12" />
          </motion.a>
        </motion.div>'

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href={siteConfig.mobileDeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                     rounded-full px-6 py-3 hover:bg-white/20 transition-colors group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </motion.div>
            <span className="text-white font-semibold">{siteConfig.mobileDeRating}/5</span>
            <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">auf Mobile.de</span>
          </motion.a>

          <motion.a
            href={siteConfig.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                     rounded-full px-6 py-3 hover:bg-white/20 transition-colors group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 0.5 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </motion.div>
            <span className="text-white font-semibold">{siteConfig.googleRating}/5</span>
            <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Google ({siteConfig.googleReviews})</span>
          </motion.a>

          <motion.div
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                        rounded-full px-6 py-3"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Users className="w-5 h-5 text-white" />
            <span className="text-white/60 text-sm">{siteConfig.mobileDeVisitors}</span>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "25+", label: "Jahre Erfahrung" },
            { value: "379.000+", label: "Besucher" },
            { value: "100%", label: "Familienunternehmen" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white 
                 transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
