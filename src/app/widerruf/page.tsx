import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Widerrufsbelehrung",
  description: "Widerrufsbelehrung des Autocenter Kaddoura"
};

export default function WiderrufPage() {
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
            WIDERRUFSBELEHRUNG
          </h1>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-black/5 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Widerrufsrecht</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
                Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag,
                an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist,
                die Ware in Besitz genommen haben bzw. hat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Ausübung des Widerrufsrechts</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:<br /><br />
                {siteConfig.name}<br />
                {siteConfig.address.street}<br />
                {siteConfig.address.city}<br />
                E-Mail: {siteConfig.email}<br />
                Telefon: {siteConfig.phone}<br /><br />
                mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief
                oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed">
                Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über
                die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Folgen des Widerrufs</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir
                von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der
                zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der
                Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt
                haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
                zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags
                bei uns eingegangen ist.<br /><br />
                Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
                ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde
                ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen
                dieser Rückzahlung Entgelte berechnet.<br /><br />
                Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten
                haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt
                haben, je nachdem, welches der frühere Zeitpunkt ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Rücksendung der Ware</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn
                Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten,
                an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die
                Waren vor Ablauf der Frist von vierzehn Tagen absenden.<br /><br />
                Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.<br /><br />
                Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser
                Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und
                Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Ausschluss des Widerrufsrechts</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Das Widerrufsrecht besteht nicht bei Verträgen:<br /><br />
                - die in Geschäftsräumen geschlossen werden (Kauf vor Ort)<br />
                - zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung
                eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist
                oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind<br />
                - zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder
                der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der
                Lieferung entfernt wurde
              </p>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Muster-Widerrufsformular</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                  Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular
                  aus und senden Sie es zurück:
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3 text-sm">
                  <p className="text-[#6b6b6b]">An {siteConfig.name}</p>
                  <p className="text-[#6b6b6b]">{siteConfig.address.street}</p>
                  <p className="text-[#6b6b6b]">{siteConfig.address.city}</p>
                  <p className="text-[#6b6b6b]">E-Mail: {siteConfig.email}</p>
                  <p className="text-[#6b6b6b] pt-4">
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag
                    über den Kauf der folgenden Waren (*):
                  </p>
                  <p className="text-[#6b6b6b]">_________________________________</p>
                  <p className="text-[#6b6b6b] pt-2">Bestellt am (*): _____________</p>
                  <p className="text-[#6b6b6b]">Erhalten am (*): _____________</p>
                  <p className="text-[#6b6b6b] pt-2">Name des/der Verbraucher(s): _____________</p>
                  <p className="text-[#6b6b6b]">Anschrift des/der Verbraucher(s): _____________</p>
                  <p className="text-[#6b6b6b] pt-2">Unterschrift des/der Verbraucher(s): _____________</p>
                  <p className="text-[#6b6b6b]">Datum: _____________</p>
                  <p className="text-[#6b6b6b] text-xs pt-4">(*) Unzutreffendes streichen</p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-gray-200">
              <p className="text-[#6b6b6b] text-sm">
                Stand: Januar 2026<br />
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
