import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung des Autocenter Kaddoura"
};

export default function DatenschutzPage() {
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
            DATENSCHUTZERKLÄRUNG
          </h1>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg shadow-black/5 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Verantwortliche Stelle</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der
                EU-Datenschutzgrundverordnung (DSGVO), ist:<br /><br />
                Ahmad Kaddoura<br />
                {siteConfig.address.street}<br />
                {siteConfig.address.city}<br /><br />
                Tel.: {siteConfig.phone}<br />
                E-Mail: {siteConfig.email}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Ihre Betroffenenrechte</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:
              </p>
              <ul className="list-disc list-inside text-[#6b6b6b] leading-relaxed space-y-2 ml-4">
                <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
                <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO)</li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed mt-4">
                Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.<br /><br />
                Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige
                Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.<br /><br />
                Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:{" "}
                <a
                  href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a] hover:underline"
                >
                  https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Art und Zweck der Verarbeitung:</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig
                Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen
                (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen
                Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Sie werden insbesondere zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="list-disc list-inside text-[#6b6b6b] leading-relaxed space-y-2 ml-4 mb-4">
                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
                <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                <li>zu weiteren administrativen Zwecken</li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art
                werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende
                Technik zu optimieren.
              </p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Rechtsgrundlage:</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses
                an der Verbesserung der Stabilität und Funktionalität unserer Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Server-Log-Dateien</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-[#6b6b6b] leading-relaxed space-y-2 ml-4 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-[#6b6b6b] leading-relaxed">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.<br /><br />
                Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten
                zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Bestandsdaten</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                (1) Ihre personenbezogenen Daten, soweit diese für die Begründung, inhaltliche Ausgestaltung oder
                Änderung des Vertragsverhältnisses erforderlich sind (Bestandsdaten), werden ausschließlich zur
                Vertragsabwicklung verwendet. So muss z.B. zur Zustellung der Waren Ihr Name und Ihre Anschrift an
                den Warenlieferanten weitergegeben werden.<br /><br />
                (2) Ohne Ihre ausdrückliche Einwilligung oder ohne gesetzliche Grundlage werden Ihre personenbezogenen
                Daten nicht an außerhalb der Vertragsabwicklung stehende Dritte weitergegeben. Nach vollständiger
                Vertragsabwicklung werden Ihre Daten für die weitere Verwendung gesperrt. Nach Ablauf der steuer- und
                handelsrechtlichen Vorschriften werden diese Daten gelöscht, sofern Sie nicht ausdrücklich in die
                weitere Nutzung eingewilligt haben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Kontaktformular</h2>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Art und Zweck der Verarbeitung:</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert.
                Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der
                Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.
              </p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Rechtsgrundlage:</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines
                berechtigten Interesses (Art 6 Abs. 1 lit. f DSGVO).<br /><br />
                Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen.
                Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.<br /><br />
                Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das
                Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art 6 Abs. 1 lit. b DSGVO).
              </p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Speicherdauer:</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.<br /><br />
                Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB
                und löschen Ihre Daten nach Ablauf dieser Fristen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Cookies</h2>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Art und Zweck der Verarbeitung:</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Wie viele andere Webseiten verwenden wir auch so genannte „Cookies". Cookies sind kleine Textdateien,
                die von einem Websiteserver auf Ihre Festplatte übertragen werden. Hierdurch erhalten wir automatisch
                bestimmte Daten wie z. B. IP-Adresse, verwendeter Browser, Betriebssystem und Ihre Verbindung zum Internet.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Cookies können nicht verwendet werden, um Programme zu starten oder Viren auf einen Computer zu übertragen.
                Anhand der in Cookies enthaltenen Informationen können wir Ihnen die Navigation erleichtern und die
                korrekte Anzeige unserer Webseiten ermöglichen.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                In keinem Fall werden die von uns erfassten Daten an Dritte weitergegeben oder ohne Ihre Einwilligung
                eine Verknüpfung mit personenbezogenen Daten hergestellt.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed">
                Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Internet-Browser sind
                regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von
                Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren. Bitte verwenden Sie die Hilfefunktionen
                Ihres Internetbrowsers, um zu erfahren, wie Sie diese Einstellungen ändern können. Bitte beachten Sie, dass
                einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies
                deaktiviert haben.
              </p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Speicherdauer und eingesetzte Cookies:</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben,
                können folgende Cookies auf unseren Webseiten zum Einsatz kommen:
              </p>
              <ul className="list-disc list-inside text-[#6b6b6b] leading-relaxed space-y-2 ml-4">
                <li>PHPSESSID (Ablauf: Session) - behält die Zustände des Benutzers bei allen Seitenanfragen bei</li>
                <li>Cloudflare Cookies (__cfruid, __cf_bm, __cf_clearance) - für Sicherheit und Geschwindigkeit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Verwendung von Google Maps</h2>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Art und Zweck der Verarbeitung:</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC,
                1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google") betrieben.
                Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen
                die komfortable Nutzung der Karten-Funktion.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen
                entnehmen. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.
              </p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Rechtsgrundlage:</h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Rechtsgrundlage für die Einbindung von Google Maps und dem damit verbundenen Datentransfer zu Google
                ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Empfänger:</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Durch den Besuch der Webseite erhält Google Informationen, dass Sie die entsprechende Unterseite unserer
                Webseite aufgerufen haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das
                Sie eingeloggt sind, oder ob keine Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre
                Daten direkt Ihrem Konto zugeordnet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Verwendung von Google Analytics</h2>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Google Analytics
                verwendet sog. „Cookies", Textdateien, die auf dem verwendeten Gerät gespeichert werden und die eine Analyse
                der Benutzung der Website durch den Seitenbesucher ermöglichen.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed mb-4">
                Google Analytics wird ausschließlich mit der Erweiterung "_anonymizeIp()" auf dieser Website verwendet.
                Diese Erweiterung stellt eine Anonymisierung der IP-Adresse durch Kürzung sicher und schließt eine direkte
                Personenbeziehbarkeit aus.
              </p>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden
                nach 50 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist,
                erfolgt automatisch einmal im Monat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Änderung unserer Datenschutzbestimmungen</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
                z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">Fragen zum Datenschutz</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an
                die für den Datenschutz verantwortliche Person in unserer Organisation:<br /><br />
                Ahmad Kaddoura<br />
                {siteConfig.address.street}<br />
                {siteConfig.address.city}<br /><br />
                Tel.: {siteConfig.phone}<br />
                Mobil: {siteConfig.mobile}<br />
                E-Mail: {siteConfig.email}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
