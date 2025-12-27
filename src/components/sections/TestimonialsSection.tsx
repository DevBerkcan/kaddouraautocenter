"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/siteData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-100 to-white">
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
            Kundenstimmen
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            WAS UNSERE KUNDEN SAGEN
          </h2>
          <p className="text-lg text-[#6b6b6b]">
            Überzeugen Sie sich von unserer Qualität – unsere zufriedenen Kunden sprechen für uns.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-gray-100 
                       hover:shadow-xl hover:shadow-black/10 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating 
                        ? "text-[#1a1a1a] fill-[#1a1a1a]" 
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a]">{testimonial.name}</p>
                  <p className="text-sm text-[#6b6b6b]">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[#6b6b6b] mb-4">
            Überzeugen Sie sich selbst von unseren Bewertungen
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a] font-semibold hover:text-[#2d2d2d] transition-colors"
          >
            Alle Google Bewertungen lesen
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
