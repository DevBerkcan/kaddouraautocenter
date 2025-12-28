import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Informationen über die Verwendung von Cookies auf der Website von Autocenter Kaddoura"
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 bg-[#fafafa] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#2d2d2d] mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>

          <h1
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-8 tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            COOKIE-RICHTLINIE
          </h1>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-black/5 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Was sind Cookies?</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine
                Website besuchen. Sie werden verwendet, um Websites funktionsfähig zu machen oder
                effizienter zu gestalten sowie um Informationen an die Betreiber der Website zu übermitteln.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Welche Arten von Cookies verwenden wir?</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-[#1a1a1a] pl-4">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    1. Unbedingt erforderliche Cookies
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed mb-3">
                    Diese Cookies sind für den Betrieb der Website unerlässlich und können nicht
                    deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen
                    durchgeführte Aktionen gesetzt, die einer Anforderung von Diensten gleichkommen,
                    wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das
                    Ausfüllen von Formularen.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-[#1a1a1a] mb-2">Cloudflare Cookies:</p>
                    <ul className="text-sm text-[#6b6b6b] space-y-1">
                      <li>• <strong>__cf_bm</strong> - Zur Unterscheidung zwischen Menschen und Bots (Gültigkeit: 30 Minuten)</li>
                      <li>• <strong>__cfruid</strong> - Sicherheits-Cookie zur Identifizierung von Clients (Gültigkeit: Session)</li>
                      <li>• <strong>cf_clearance</strong> - Zur Umgehung von Sicherheitsherausforderungen für vertrauenswürdige Clients (Gültigkeit: 1 Jahr)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-[#1a1a1a] pl-4">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    2. Funktionelle Cookies
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed mb-3">
                    Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. Sie können
                    von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren
                    Seiten verwenden. Wenn Sie diese Cookies nicht zulassen, funktionieren einige
                    oder alle dieser Dienste möglicherweise nicht ordnungsgemäß.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-[#1a1a1a] mb-2">Google Maps Cookies:</p>
                    <ul className="text-sm text-[#6b6b6b] space-y-1">
                      <li>• <strong>NID</strong> - Enthält eine eindeutige ID, um Präferenzen und andere Informationen zu speichern (Gültigkeit: 6 Monate)</li>
                      <li>• <strong>CONSENT</strong> - Speichert den Zustimmungsstatus des Benutzers (Gültigkeit: 20 Jahre)</li>
                      <li>• <strong>1P_JAR</strong> - Sammelt Website-Statistiken und misst Conversion-Raten (Gültigkeit: 1 Monat)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-[#1a1a1a] pl-4">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                    3. Performance & Analyse Cookies
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed mb-3">
                    Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit
                    wir die Leistung unserer Website messen und verbessern können. Sie helfen uns
                    herauszufinden, welche Seiten am beliebtesten und welche am wenigsten beliebt
                    sind, und zu sehen, wie sich Besucher auf der Website bewegen. Alle von diesen
                    Cookies gesammelten Informationen werden aggregiert und sind daher anonym.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-[#1a1a1a] mb-2">Google Analytics Cookies:</p>
                    <ul className="text-sm text-[#6b6b6b] space-y-1">
                      <li>• <strong>_ga</strong> - Zur Unterscheidung von Benutzern (Gültigkeit: 2 Jahre)</li>
                      <li>• <strong>_gid</strong> - Zur Unterscheidung von Benutzern (Gültigkeit: 24 Stunden)</li>
                      <li>• <strong>_gat</strong> - Zur Drosselung der Anfragerate (Gültigkeit: 1 Minute)</li>
                      <li>• <strong>_ga_&lt;container-id&gt;</strong> - Speichert den Session-Status (Gültigkeit: 2 Jahre)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Cookie-Einstellungen verwalten</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf das Cookie-Banner
                klicken oder Ihre Browser-Einstellungen anpassen. Bitte beachten Sie, dass das Blockieren
                einiger Arten von Cookies Ihre Erfahrung auf unserer Website und die Dienste, die wir
                anbieten können, beeinträchtigen kann.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                  Browser-Einstellungen
                </h3>
                <p className="text-sm text-[#6b6b6b] mb-3">
                  Die meisten Webbrowser erlauben eine gewisse Kontrolle über Cookies über die
                  Browser-Einstellungen. Weitere Informationen finden Sie unter:
                </p>
                <ul className="text-sm text-[#6b6b6b] space-y-2">
                  <li>
                    • <strong>Google Chrome:</strong>{" "}
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a1a1a] hover:underline"
                    >
                      Cookie-Einstellungen in Chrome
                    </a>
                  </li>
                  <li>
                    • <strong>Mozilla Firefox:</strong>{" "}
                    <a
                      href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a1a1a] hover:underline"
                    >
                      Cookie-Einstellungen in Firefox
                    </a>
                  </li>
                  <li>
                    • <strong>Safari:</strong>{" "}
                    <a
                      href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a1a1a] hover:underline"
                    >
                      Cookie-Einstellungen in Safari
                    </a>
                  </li>
                  <li>
                    • <strong>Microsoft Edge:</strong>{" "}
                    <a
                      href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a1a1a] hover:underline"
                    >
                      Cookie-Einstellungen in Edge
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Drittanbieter-Cookies</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Einige Cookies auf unserer Website werden von Drittanbietern platziert. Wir haben
                keine Kontrolle über diese Cookies. Weitere Informationen zu diesen Cookies finden
                Sie in den Datenschutzrichtlinien der jeweiligen Drittanbieter:
              </p>
              <ul className="text-[#6b6b6b] space-y-2">
                <li>
                  • <strong>Google Analytics:</strong>{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] hover:underline"
                  >
                    Google Datenschutzerklärung
                  </a>
                </li>
                <li>
                  • <strong>Google Maps:</strong>{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] hover:underline"
                  >
                    Google Datenschutzerklärung
                  </a>
                </li>
                <li>
                  • <strong>Cloudflare:</strong>{" "}
                  <a
                    href="https://www.cloudflare.com/de-de/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a1a1a] hover:underline"
                  >
                    Cloudflare Datenschutzerklärung
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Aktualisierungen dieser Cookie-Richtlinie</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen
                in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen
                Gründen widerzuspiegeln. Bitte besuchen Sie diese Seite regelmäßig, um über unsere
                Verwendung von Cookies informiert zu bleiben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Kontakt</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-[#6b6b6b]">
                  <strong className="text-[#1a1a1a]">Autocenter Kaddoura</strong><br />
                  Friedrich-Ebert-Straße 150<br />
                  42117 Wuppertal<br />
                  Deutschland<br /><br />
                  E-Mail: <a href="mailto:info@autocenter-kaddoura.de" className="text-[#1a1a1a] hover:underline">
                    info@autocenter-kaddoura.de
                  </a><br />
                  Telefon: <a href="tel:+492022443611" className="text-[#1a1a1a] hover:underline">
                    +49 202 2443611
                  </a>
                </p>
              </div>
            </section>

            <section className="border-t pt-6">
              <p className="text-sm text-[#6b6b6b]">
                Letzte Aktualisierung: Dezember 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
