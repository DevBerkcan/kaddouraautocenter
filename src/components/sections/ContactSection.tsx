"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, Instagram, MessageCircle, Send, Languages } from "lucide-react";
import { siteConfig } from "@/data/siteData";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptPrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Nachricht');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "", acceptPrivacy: false });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1a1a1a]/10 text-[#1a1a1a] text-sm font-semibold 
                         tracking-widest uppercase rounded-full mb-4">
            Kontakt & Anfahrt
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BESUCHEN SIE UNS
          </h2>
          <p className="text-lg text-[#6b6b6b]">
            Wir freuen uns auf Ihren Besuch! Kommen Sie vorbei oder kontaktieren Sie uns.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100">
                <div className="w-12 h-12 bg-[#1a1a1a]/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">Adresse</h3>
                <p className="text-[#6b6b6b] text-sm">
                  Friedrich-Ebert Str. 150<br />
                  42117 Wuppertal<br />
                  Deutschland
                </p>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100">
                <div className="w-12 h-12 bg-[#1a1a1a]/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">Telefon</h3>
                <div className="text-sm space-y-1">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-[#1a1a1a] hover:text-[#2d2d2d] transition-colors font-medium block"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone1}`}
                    className="text-[#1a1a1a] hover:text-[#2d2d2d] transition-colors font-medium block"
                  >
                    {siteConfig.phone1}
                  </a>
                  <a
                    href={`tel:${siteConfig.mobile}`}
                    className="text-[#6b6b6b] hover:text-[#2d2d2d] transition-colors block"
                  >
                    {siteConfig.mobile}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100">
                <div className="w-12 h-12 bg-[#1a1a1a]/10 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">E-Mail</h3>
                <div className="text-sm">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#1a1a1a] hover:text-[#2d2d2d] transition-colors font-medium block break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-gray-100">
                <div className="w-12 h-12 bg-[#1a1a1a]/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">Öffnungszeiten</h3>
                <div className="text-[#6b6b6b] text-sm space-y-1">
                  {siteConfig.openingHours.map((item, index) => (
                    <p key={index}>
                      <span className="font-medium">{item.day}:</span><br />
                      {item.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl p-6 shadow-lg shadow-black/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3">Wir sprechen</h3>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.languages.map((language) => (
                      <span
                        key={language}
                        className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-medium
                                 border border-white/20"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm mt-3">
                    Sie können Ihre Fragen an unser Team in allen oben genannten Sprachen stellen.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-xl font-semibold 
                         hover:bg-[#2d2d2d] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Anrufen
              </a>
              <a
                href={siteConfig.socialMedia.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold 
                         hover:bg-[#20BA5C] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={siteConfig.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] 
                         text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5 border border-gray-100">
              <h3 
                className="text-2xl font-bold text-[#1a1a1a] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                NACHRICHT SENDEN
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">Nachricht gesendet!</h4>
                  <p className="text-[#6b6b6b]">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </motion.div>
              ) : (
                <>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                    >
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-red-900 text-sm">Fehler beim Versand</h4>
                        <p className="text-red-700 text-sm mt-1">{error}</p>
                      </div>
                    </motion.div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none 
                                 focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none 
                                 focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none 
                               focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all"
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none 
                               focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all resize-none"
                      placeholder="Ihre Nachricht an uns..."
                    />
                  </div>

                  {/* DSGVO Checkbox */}
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.acceptPrivacy}
                      onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[#1a1a1a] border-gray-300 rounded focus:ring-[#1a1a1a]"
                    />
                    <label htmlFor="privacy" className="text-sm text-[#6b6b6b] leading-relaxed">
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a1a1a] underline hover:text-[#2d2d2d]"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme
                      und für Rückfragen dauerhaft gespeichert werden. *
                    </label>
                  </div>

                  <p className="text-xs text-[#6b6b6b]">
                    * Pflichtfelder. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.acceptPrivacy}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1a1a1a] text-white 
                             font-semibold rounded-xl hover:bg-[#2d2d2d] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Nachricht senden
                      </>
                    )}
                  </button>
                </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-gray-100">
                {/* Map Embed */}
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                  <iframe
                    src="https://maps.google.com/maps?q=Autocenter+Kaddoura,+Friedrich-Ebert-Straße+150,+42117+Wuppertal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort Autocenter Kaddoura"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Map Footer */}
                <div className="p-6 bg-[#1a1a1a]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{siteConfig.address.street}</p>
                        <p className="text-gray-400 text-sm">{siteConfig.address.city}</p>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-lg 
                               font-semibold hover:bg-[#2d2d2d] transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Route
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
