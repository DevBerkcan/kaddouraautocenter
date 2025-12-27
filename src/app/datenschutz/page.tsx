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
            className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#a68520] mb-8 transition-colors"
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
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Allgemeine Hinweise</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Datenerfassung auf dieser Website</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" 
                in dieser Datenschutzerklärung entnehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">2. Hosting</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br /><br />
                <strong>Externes Hosting</strong><br />
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
                Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei 
                kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über 
                eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Datenschutz</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den 
                gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                {siteConfig.name}<br />
                {siteConfig.address.street}<br />
                {siteConfig.address.city}<br /><br />
                Telefon: {siteConfig.phone}<br />
                E-Mail: {siteConfig.email}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Cookies</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine 
                Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder 
                vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft 
                (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach 
                Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem 
                Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung 
                durch Ihren Webbrowser erfolgt.<br /><br />
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
                informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies 
                für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der 
                Cookies beim Schließen des Browsers aktivieren.
              </p>

              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Kontaktformular</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage 
                inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum 
                Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">5. Analyse-Tools und Werbung</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Wir nutzen auf dieser Website möglicherweise Analyse-Tools zur statistischen 
                Auswertung der Besucherzugriffe. Nähere Informationen zu den eingesetzten Tools 
                finden Sie in unserer Cookie-Richtlinie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">6. Plugins und Tools</h2>
              
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Google Maps</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland 
                Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung 
                der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. 
                Diese Informationen werden in der Regel an einen Server von Google in den USA 
                übertragen und dort gespeichert.
              </p>

              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 mt-4">Google Fonts</h3>
              <p className="text-[#6b6b6b] leading-relaxed">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte 
                Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt 
                Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten 
                korrekt anzuzeigen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">7. Ihre Rechte</h2>
              <p className="text-[#6b6b6b] leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
                und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
                außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese 
                Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, 
                unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer 
                personenbezogenen Daten zu verlangen.<br /><br />
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.<br /><br />
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit 
                an uns wenden.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
