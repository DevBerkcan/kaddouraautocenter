"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hallo! Ich interessiere mich für Ihre Fahrzeuge und möchte mehr erfahren."
  )}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl shadow-black/20 p-6 w-80"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">Autocenter Kaddoura</h3>
                  <p className="text-xs text-[#6b6b6b]">Antwortet in der Regel sofort</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#6b6b6b] mb-4">
              Hallo! 👋 Wie können wir Ihnen helfen? Stellen Sie uns Ihre Fragen zu unseren Fahrzeugen!
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white
                       font-semibold rounded-xl hover:bg-[#20BA5C] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat auf WhatsApp starten
            </a>

            <p className="text-xs text-center text-[#6b6b6b] mt-3">
              Wir sprechen: Deutsch, English, العربية
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-2xl shadow-[#25D366]/40
                   flex items-center justify-center hover:bg-[#20BA5C] transition-colors group"
        aria-label="WhatsApp öffnen"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Dot */}
        {!isOpen && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          >
            <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
