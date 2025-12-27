import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VehiclesSection from "@/components/sections/VehiclesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import CookieConsent from "@/components/ui/CookieConsent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VehiclesSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
