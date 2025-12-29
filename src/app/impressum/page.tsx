import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Informationen des Autocenter Kaddoura"
};

export default function ImpressumPage() {
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
            IMPRESSUM
          </h1>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-black/5 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-[#6b6b6b]">
                {siteConfig.name}<br />
                {siteConfig.address.street}<br />
                {siteConfig.address.city}<br />
                {siteConfig.address.country}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Kontakt</h2>
              <p className="text-[#6b6b6b]">
                Mobil: {siteConfig.phone}<br />
                Tel.: {siteConfig.mobile}<br />
                Mail Sales: {siteConfig.emailSales}<br />
                Mail Verwaltung: {siteConfig.email}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Rechtsform</h2>
              <p className="text-[#6b6b6b]">
                Einzelunternehmen
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Geschäftsführer / Alleininhaber</h2>
              <p className="text-[#6b6b6b]">
                Rami Kaddoura
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Handelsregister</h2>
              <p className="text-[#6b6b6b]">
                Keine Eintragung
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Umsatzsteuer-Identifikationsnummer</h2>
              <p className="text-[#6b6b6b]">
                USt-IdNr. gemäß § 27a Umsatzsteuergesetz:<br />
                {siteConfig.vatId}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Steuernummer</h2>
              <p className="text-[#6b6b6b]">
                {siteConfig.taxNumber}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-[#6b6b6b]">
                Berufsbezeichnung: Kraftfahrzeughändler<br />
                Zuständige Kammer: IHK Wuppertal-Solingen-Remscheid<br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Streitschlichtung</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a] hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br /><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.<br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Haftung für Inhalte</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.<br /><br />
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Haftung für Links</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.<br /><br />
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Urheberrecht</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br /><br />
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
