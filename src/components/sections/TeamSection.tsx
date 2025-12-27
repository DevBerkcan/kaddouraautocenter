"use client";

import { motion } from "framer-motion";
import { Users, Award, Heart } from "lucide-react";
import { teamMembers } from "@/data/siteData";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
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
            Unser Team
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            DIE MENSCHEN
            <span className="text-[#4a4a4a]"> HINTER VOLVO</span>
          </h2>
          <p className="text-lg text-[#6b6b6b]">
            Lernen Sie das Team kennen, das sich täglich für Ihre Zufriedenheit einsetzt.
            Kompetenz, Erfahrung und Leidenschaft für VOLVO.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6
                           border border-gray-200 hover:border-gray-300 transition-all duration-500
                           hover:shadow-xl">
                {/* Image */}
                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400
                               flex items-center justify-center">
                    <Users className="w-20 h-20 text-white/50" />
                  </div>
                  {/* Uncomment when images are available */}
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3
                    className="text-2xl font-bold text-[#1a1a1a] mb-2 tracking-wide"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#4a4a4a] font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent
                             via-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Award,
                title: "Expertise",
                description: "Langjährige Erfahrung mit VOLVO Fahrzeugen"
              },
              {
                icon: Heart,
                title: "Leidenschaft",
                description: "Mit Herzblut für Ihre Zufriedenheit"
              },
              {
                icon: Users,
                title: "Teamgeist",
                description: "Gemeinsam für den besten Service"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10
                             rounded-xl mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2 tracking-wide"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
