import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import References from '@/components/References';
import { MarqueeDemo } from '@/components/MarqueeDemo';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const { t, i18n } = useTranslation('home');
  
  useEffect(() => {
    // Initialize animation observer for elements with .animate-on-scroll class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // Enhanced keywords for nightliner bookings
  const enhancedKeywords = i18n.language === 'de' 
    ? "Nightliner mieten, Tourbus mieten Schweiz, Nightliner Schweiz, Nightliner Europa, Tour Crew buchen, Künstlerbus, Sleeper Bus mieten, Tour Bus Vermietung, Nightliner Vermietung, Premium Tourbus, Musiker Tourbus, Band Tourbus mieten, Festival Bus, Tournee Transport, Nightliner mit Fahrer"
    : "Nightliner rental, tour bus rental Switzerland, nightliner Switzerland, nightliner Europe, book tour crew, artist bus, sleeper bus rental, tour bus hire, nightliner hire, premium tour bus, musician tour bus, band bus rental, festival bus, tour transport, nightliner with driver";
  
  // Service schema for home page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nightliner Tour Bus Rental",
    "provider": {
      "@type": "Organization",
      "name": "Race Attack"
    },
    "serviceType": "Tour Bus Rental",
    "description": i18n.language === 'de'
      ? "Luxuriöse Nightliner mit 12 oder 16 Schlafplätzen für Künstler und Bands auf Tour in der Schweiz und Europa"
      : "Luxury nightliner buses with 12 or 16 berths for artists and bands on tour in Switzerland and Europe",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Switzerland"
      },
      {
        "@type": "Continent", 
        "name": "Europe"
      }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceRange": "€€€",
      "priceCurrency": "CHF",
      "availability": "https://schema.org/InStock",
      "availableDeliveryMethod": "https://schema.org/OnSiteService"
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title={t('meta.title')}
        description={i18n.language === 'de'
          ? "Premium Nightliner mieten für Tourneen in der Schweiz & Europa. Luxuriöse Tourbusse mit 12-16 Schlafplätzen, professionelle Fahrer & erstklassiger Service für Künstler, Bands & Produktionen. Jetzt Verfügbarkeit prüfen!"
          : "Rent premium nightliner tour buses for tours in Switzerland & Europe. Luxury tour buses with 12-16 berths, professional drivers & first-class service for artists, bands & productions. Check availability now!"}
        keywords={enhancedKeywords}
        image="/hero-nightliner.jpg"
        schemaMarkup={serviceSchema}
      />
      <Header />
      <main>
        <HeroSection />
        <Services />
        <References />
        <MarqueeDemo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
