"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Trophy, Heart, Target, Sparkles } from "lucide-react";

const stats = [
  { value: "10+", label: "Jahre Erfahrung", icon: Trophy },
  { value: "500+", label: "Zufriedene Kunden", icon: Users },
  { value: "1000+", label: "Verkaufte Fahrzeuge", icon: Target },
  { value: "100%", label: "Leidenschaft", icon: Heart },
];

const values = [
  "Ehrliche und transparente Beratung",
  "Faire und marktgerechte Preise",
  "Geprüfte Qualitätsfahrzeuge",
  "Kundenservice an erster Stelle",
  "Schnelle und unkomplizierte Abwicklung",
  "Langjährige Expertise im Autohandel",
];

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 md:py-32 bg-gradient-to-br from-[#fafafa] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&auto=format&fit=crop')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-[#1a1a1a]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">VOLVO Vertragshändler</p>
                        <p className="text-white/70 text-sm">Mit Herz & Leidenschaft</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <p 
                      className="text-2xl font-bold text-[#1a1a1a]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      10+ Jahre
                    </p>
                    <p className="text-[#6b6b6b] text-sm">Erfahrung</p>
                  </div>
                </div>
                <p className="text-[#6b6b6b] text-sm">
                  Vertrauen Sie auf unsere langjährige Expertise im Automobilhandel.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-200 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gray-100 text-[#1a1a1a] text-sm font-semibold
                           tracking-widest uppercase rounded-full mb-4">
              Über Uns
            </span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              IHR VERTRAUEN IST
              <span className="text-[#4a4a4a]"> UNSER ANTRIEB</span>
            </h2>

            <p className="text-lg text-[#6b6b6b] mb-6 leading-relaxed">
              Das Autocenter Kaddoura steht seit über einem Jahrzehnt für Qualität, 
              Vertrauen und erstklassigen Service im Automobilhandel. Als familiengeführtes 
              Unternehmen in Wuppertal liegt uns die Zufriedenheit unserer Kunden besonders am Herzen.
            </p>

            <p className="text-[#6b6b6b] mb-8 leading-relaxed">
              Bei uns finden Sie sorgfältig ausgewählte Gebrauchtwagen zu fairen Preisen. 
              Jedes Fahrzeug wird vor dem Verkauf gründlich geprüft und aufbereitet. 
              Unser Ziel ist es, dass Sie mit Ihrem neuen Fahrzeug rundum zufrieden sind.
            </p>

            {/* Values List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
                  <span className="text-[#1a1a1a] text-sm font-medium">{value}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 bg-[#1a1a1a] rounded-xl"
                >
                  <stat.icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <p 
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
