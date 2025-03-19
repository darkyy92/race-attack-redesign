
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import References from '@/components/References';
import PartnerMarquee from '@/components/PartnerMarquee';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
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
  
  // Setze Titel und Meta-Tags für SEO-Optimierung
  useEffect(() => {
    document.title = "Race-Attack | Premium Nightliner & Tour Crew | Schweiz";
    
    // Meta-Description Tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Premium Nightliner und professionelle Tour Crew für anspruchsvolle Künstler und Bands in der Schweiz und ganz Europa. Höchste Qualität für Ihre Tournee.');
    
    // Weitere Meta-Tags für SEO-Optimierung
    const metaTags = [
      { name: 'keywords', content: 'Nightliner, Tourbus mieten, Nightliner Schweiz, Nightliner Europa, Tour Crew buchen, Schweiz, Europa' },
      { property: 'og:title', content: 'Race-Attack | Premium Nightliner & Tour Crew' },
      { property: 'og:description', content: 'Premium Nightliner und professionelle Tour Crew für anspruchsvolle Künstler und Bands in der Schweiz und ganz Europa.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://race-attack.ch' }
    ];
    
    metaTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(tag.property ? 'property' : 'name', tag.property || tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <Services />
        <References />
        <PartnerMarquee />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
