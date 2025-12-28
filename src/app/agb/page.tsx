import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "AGB des Autocenter Kaddoura"
};

export default function AGBPage() {
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
            ALLGEMEINE GESCHÄFTSBEDINGUNGEN
          </h1>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-black/5 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 1 Geltungsbereich</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle 
                Verträge, die zwischen {siteConfig.name}, {siteConfig.address.street}, {siteConfig.address.city} 
                (nachfolgend „Verkäufer") und dem Kunden (nachfolgend „Käufer") über den Kauf von 
                Gebrauchtfahrzeugen geschlossen werden.<br /><br />
                (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen 
                des Käufers werden nur dann und insoweit Vertragsbestandteil, als der Verkäufer 
                ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 2 Vertragsschluss</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Die Darstellung der Fahrzeuge auf unserer Website und bei Mobile.de stellt 
                kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar.<br /><br />
                (2) Der Kaufvertrag kommt erst mit Unterzeichnung eines schriftlichen Kaufvertrags 
                durch beide Parteien zustande.<br /><br />
                (3) Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 3 Preise und Zahlung</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Alle angegebenen Preise verstehen sich als Bruttopreise inklusive der 
                gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.<br /><br />
                (2) Der Kaufpreis ist bei Übergabe des Fahrzeugs fällig und in bar oder per 
                bestätigter Banküberweisung zu zahlen.<br /><br />
                (3) Bei Finanzierung gelten die Bedingungen des jeweiligen Finanzierungsvertrags.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 4 Übergabe und Gefahrübergang</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Die Übergabe des Fahrzeugs erfolgt nach vollständiger Kaufpreiszahlung am 
                Standort des Verkäufers, sofern nichts anderes vereinbart wurde.<br /><br />
                (2) Mit der Übergabe geht die Gefahr des zufälligen Untergangs und der zufälligen 
                Verschlechterung auf den Käufer über.<br /><br />
                (3) Der Käufer ist verpflichtet, das Fahrzeug bei Übergabe zu untersuchen und 
                etwaige Mängel unverzüglich zu rügen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 5 Eigentumsvorbehalt</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Das Fahrzeug bleibt bis zur vollständigen Bezahlung des Kaufpreises Eigentum des 
                Verkäufers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 6 Gewährleistung</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Für Gebrauchtfahrzeuge gilt eine Gewährleistungsfrist von 12 Monaten ab 
                Übergabe, sofern der Käufer Verbraucher ist.<br /><br />
                (2) Gegenüber Unternehmern wird die Gewährleistung ausgeschlossen, soweit 
                gesetzlich zulässig.<br /><br />
                (3) Die Gewährleistung bezieht sich nicht auf Verschleißteile und natürliche 
                Abnutzung.<br /><br />
                (4) Der Kilometerstand wurde nach bestem Wissen und Gewissen angegeben. Eine 
                Garantie für die Richtigkeit kann jedoch nicht übernommen werden, es sei denn, 
                dies ist ausdrücklich schriftlich vereinbart.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 7 Haftung</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Der Verkäufer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie 
                für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.<br /><br />
                (2) Bei leichter Fahrlässigkeit haftet der Verkäufer nur bei Verletzung 
                wesentlicher Vertragspflichten (Kardinalpflichten) und begrenzt auf den 
                vorhersehbaren, vertragstypischen Schaden.<br /><br />
                (3) Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 8 Inzahlungnahme</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Bei Inzahlungnahme eines Fahrzeugs wird dessen Wert einvernehmlich festgelegt.<br /><br />
                (2) Der Käufer garantiert, dass er Eigentümer des in Zahlung gegebenen Fahrzeugs 
                ist und dieses frei von Rechten Dritter ist.<br /><br />
                (3) Das in Zahlung gegebene Fahrzeug muss den vereinbarten Zustand haben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 9 Widerrufsrecht</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Bei Verträgen, die außerhalb von Geschäftsräumen oder im Fernabsatz geschlossen 
                werden, steht Verbrauchern ein gesetzliches Widerrufsrecht zu. Hierüber wird 
                gesondert belehrt. Der Kauf von Fahrzeugen vor Ort in unseren Geschäftsräumen 
                unterliegt nicht dem Widerrufsrecht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 10 Datenschutz</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, 
                die unter{" "}
                <Link href="/datenschutz" className="text-[#1a1a1a] hover:underline">
                  {siteConfig.url}/datenschutz
                </Link>{" "}
                abrufbar ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">§ 11 Schlussbestimmungen</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des 
                UN-Kaufrechts.<br /><br />
                (2) Ist der Käufer Kaufmann, juristische Person des öffentlichen Rechts oder 
                öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle Streitigkeiten 
                aus diesem Vertrag der Geschäftssitz des Verkäufers.<br /><br />
                (3) Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein oder werden, 
                so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-[#6b6b6b] text-sm">
                Stand: Januar 2025<br />
                {siteConfig.name}<br />
                {siteConfig.address.street}, {siteConfig.address.city}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
