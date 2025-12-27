"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check } from "lucide-react";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Main Banner */}
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#c9a227]/10 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Wir verwenden Cookies
                  </h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                    Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, 
                    die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.{" "}
                    <Link href="/datenschutz" className="text-[#c9a227] hover:underline">
                      Mehr erfahren
                    </Link>
                  </p>

                  {/* Cookie Settings */}
                  <AnimatePresence>
                    {showSettings && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mb-4 space-y-3 overflow-hidden"
                      >
                        {/* Necessary */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-[#1a1a1a] text-sm">Notwendige Cookies</p>
                            <p className="text-xs text-[#6b6b6b]">Erforderlich für grundlegende Funktionen</p>
                          </div>
                          <div className="w-10 h-6 bg-[#c9a227] rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                            <div className="w-4 h-4 bg-white rounded-full shadow" />
                          </div>
                        </div>

                        {/* Analytics */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-[#1a1a1a] text-sm">Analyse Cookies</p>
                            <p className="text-xs text-[#6b6b6b]">Hilft uns, die Website zu verbessern</p>
                          </div>
                          <button
                            onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                            className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                              preferences.analytics ? "bg-[#c9a227] justify-end" : "bg-gray-300 justify-start"
                            }`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full shadow" />
                          </button>
                        </div>

                        {/* Marketing */}
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-[#1a1a1a] text-sm">Marketing Cookies</p>
                            <p className="text-xs text-[#6b6b6b]">Für personalisierte Werbung</p>
                          </div>
                          <button
                            onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                            className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                              preferences.marketing ? "bg-[#c9a227] justify-end" : "bg-gray-300 justify-start"
                            }`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full shadow" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2.5 bg-[#c9a227] text-white font-semibold rounded-lg 
                               hover:bg-[#a68520] transition-colors flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Alle akzeptieren
                    </button>
                    
                    {showSettings ? (
                      <button
                        onClick={handleAcceptSelected}
                        className="px-6 py-2.5 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold 
                                 rounded-lg hover:bg-[#1a1a1a] hover:text-white transition-colors"
                      >
                        Auswahl speichern
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowSettings(true)}
                        className="px-6 py-2.5 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold 
                                 rounded-lg hover:bg-[#1a1a1a] hover:text-white transition-colors 
                                 flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Einstellungen
                      </button>
                    )}
                    
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-2.5 text-[#6b6b6b] font-semibold hover:text-[#1a1a1a] transition-colors"
                    >
                      Nur notwendige
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-[#6b6b6b]" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
