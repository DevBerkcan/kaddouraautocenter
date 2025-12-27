import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-[#fafafa] pt-20">
        <div className="text-center px-4">
          <h1 
            className="text-8xl md:text-9xl font-bold text-[#c9a227] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            404
          </h1>
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SEITE NICHT GEFUNDEN
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8 max-w-md mx-auto">
            Die gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c9a227] text-white font-semibold 
                     rounded-xl hover:bg-[#a68520] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
