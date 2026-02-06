import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProposalSection } from "./components/ProposalSection";
import { InstagramGallery } from "./components/InstagramGallery";
import { ReviewsCarousel } from "./components/ReviewsCarousel";
import { MenuSection } from "./components/MenuSection";
import { AboutSection } from "./components/AboutSection";
import { EventsSection } from "./components/EventsSection";
import { ContactSection } from "./components/ContactSection";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offset = 64; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "carta",
        "sobre",
        "eventos",
        "contacto",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Inicio */}
      <section id="inicio">
        <HeroSection onNavigate={handleNavigate} />
        <ProposalSection />
        <InstagramGallery />
        <ReviewsCarousel />
      </section>

      {/* Nuestra Carta */}
      <section id="carta">
        <MenuSection />
      </section>

      {/* Sobre Keros */}
      <section id="sobre">
        <AboutSection />
      </section>

      {/* Eventos */}
      <section id="eventos">
        <EventsSection />
      </section>

      {/* Contacto */}
      <section id="contacto">
        <ContactSection />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}