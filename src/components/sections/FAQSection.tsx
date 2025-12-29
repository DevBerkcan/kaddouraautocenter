"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Welche Zahlungsmöglichkeiten bieten Sie an?",
    answer: "Wir akzeptieren Barzahlung und Banküberweisung."
  },
  {
    question: "Kann ich vor dem Kauf eine Probefahrt machen?",
    answer: "Selbstverständlich! Wir empfehlen sogar, vor dem Kauf eine Probefahrt zu vereinbaren. Kontaktieren Sie uns telefonisch oder per WhatsApp, um einen Termin zu vereinbaren."
  },
  {
    question: "Sind die Fahrzeuge geprüft?",
    answer: "Ja, alle unsere Fahrzeuge werden gründlich geprüft. Auf Wunsch bieten wir auch einen DEKRA-Gebrauchtwagencheck an, um Ihnen maximale Sicherheit und Transparenz zu bieten."
  },
  {
    question: "Bieten Sie eine Garantie auf Gebrauchtwagen an?",
    answer: "Ja, wir bieten optional eine Gebrauchtwagengarantie an. Die Konditionen besprechen wir gerne persönlich mit Ihnen."
  },
  {
    question: "Nehmen Sie mein altes Fahrzeug in Zahlung?",
    answer: "Ja, wir bewerten Ihr Fahrzeug fair und transparent und nehmen es gerne in Zahlung. Kontaktieren Sie uns für eine kostenlose Bewertung."
  },
  {
    question: "Können Sie die Zulassung für mich übernehmen?",
    answer: "Ja, in Zusammenarbeit mit unserem Zulassungsdienst übernehmen wir die Zulassung in den umliegenden Kreisen. So sparen Sie sich zeitraubende Behördengänge."
  },
  {
    question: "Verkaufen Sie auch Fahrzeuge ins Ausland?",
    answer: "Ja, wir verkaufen Fahrzeuge international. Wir kümmern uns um Netto-Abrechnung, Ausfuhrdokumente und alle Formalitäten für Nicht-EU-Länder."
  },
  {
    question: "Kann ich Fahrzeuge online besichtigen?",
    answer: "Ja, wir bieten Online-Besichtigungen per WhatsApp-Video an. So können Sie Ihr Wunschfahrzeug bequem von zu Hause aus live und in Echtzeit sehen."
  },
  {
    question: "In welchen Sprachen kann ich beraten werden?",
    answer: "Unser Team spricht Deutsch, English und العربية (Arabisch). Wir beraten Sie gerne in der Sprache Ihrer Wahl."
  },
  {
    question: "Wie kann ich Sie am besten erreichen?",
    answer: "Sie können uns telefonisch unter +49 157 37015935 oder +49 (0)202 2443611, per WhatsApp, Instagram oder E-Mail erreichen. Unser Team hilft Ihnen gerne weiter!"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 text-[#1a1a1a] text-sm font-semibold
                         tracking-widest uppercase rounded-full mb-4">
            Häufige Fragen
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            FAQ
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen.
            Sollten Sie weitere Fragen haben, kontaktieren Sie uns gerne!
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#1a1a1a] shadow-lg shadow-black/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index ? "bg-[#1a1a1a]" : "bg-gray-100"
                    }`}>
                      <HelpCircle className={`w-5 h-5 transition-colors ${
                        openIndex === index ? "text-white" : "text-[#1a1a1a]"
                      }`} />
                    </div>
                    <span className={`font-semibold pr-4 transition-colors ${
                      openIndex === index ? "text-[#1a1a1a]" : "text-[#2d2d2d]"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-6 h-6 transition-colors ${
                      openIndex === index ? "text-[#1a1a1a]" : "text-[#6b6b6b]"
                    }`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <p className="text-[#6b6b6b] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Ihre Frage war nicht dabei?
          </h3>
          <p className="text-white/80 mb-6">
            Kein Problem! Kontaktieren Sie uns und wir beantworten gerne alle Ihre Fragen.
          </p>
          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              const kontakt = document.getElementById("kontakt");
              if (kontakt) kontakt.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a1a] font-semibold
                     rounded-xl hover:bg-gray-100 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
