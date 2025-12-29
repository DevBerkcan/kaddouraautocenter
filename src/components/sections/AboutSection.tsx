"use client";

import { motion } from "framer-motion";
import { CheckCircle, Heart, Shield, Users, Clock } from "lucide-react";

const services = [
  "Faire Inzahlungnahme Ihres Fahrzeugs",
  "Online-Besichtigungen per WhatsApp-Video",
  "Internationaler Fahrzeugverkauf",
  "Rundum-Service (TÜV, Inspektion, DEKRA, Zulassung)"
];

const qualities = [
  { icon: Heart, label: "Familienunternehmen seit über 25 Jahren" },
  { icon: Shield, label: "Professionalität & Zuverlässigkeit" },
  { icon: Users, label: "Persönlicher Service & ehrliche Beratung" },
  { icon: Clock, label: "Transparente Abläufe" }
];

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gray-100 text-[#1a1a1a] text-sm font-semibold
                       tracking-widest uppercase rounded-full mb-4"
          >
            Über Uns
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            HERZLICH WILLKOMMEN!
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-[#6b6b6b] mb-6 leading-relaxed">
              Wir sind seit mehr als <strong className="text-[#1a1a1a]">25 Jahren</strong> Ihr vertrauensvoller
              Partner, wenn es um hochwertige Jahres- und Gebrauchtwagen geht. Unser Familienunternehmen steht für
              <strong className="text-[#1a1a1a]"> Professionalität, Kompetenz und Zuverlässigkeit</strong>.
              Diese Werte leben wir täglich und geben unseren Kunden damit echte Sicherheit.
            </p>

            <p className="text-lg text-[#6b6b6b] mb-6 leading-relaxed">
              Bei uns finden Sie eine sorgfältig ausgewählte Fahrzeugpalette, persönlichen Service, ehrliche
              Beratung und transparente Abläufe. <strong className="text-[#1a1a1a]">Ihre Zufriedenheit steht
              für uns an erster Stelle.</strong> Ob Kauf, Verkauf oder Beratung – wir begleiten Sie von
              Anfang an und sorgen dafür, dass Sie das Fahrzeug finden, das perfekt zu Ihnen passt.
            </p>

            <p className="text-lg text-[#1a1a1a] font-semibold mb-8">
              Wir freuen uns darauf, Sie persönlich bei uns begrüßen zu dürfen.
            </p>

            {/* Qualities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                    <quality.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[#1a1a1a] text-sm font-medium">{quality.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('/newimg.jpeg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">25+ Jahre Erfahrung</p>
                      <p className="text-white/70 text-sm">Familienunternehmen seit 2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-200 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
