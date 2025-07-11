import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import References from '@/components/References';
import { MarqueeDemo } from '@/components/MarqueeDemo';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const { t } = useTranslation('home');
  
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
    document.title = t('meta.title');
    
    // Meta-Description Tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t('meta.description'));
    
    // Weitere Meta-Tags für SEO-Optimierung
    const metaTags = [
      { name: 'keywords', content: t('meta.keywords') },
      { property: 'og:title', content: t('meta.title') },
      { property: 'og:description', content: t('meta.description') },
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
  }, [t]);

  return (
    <div className="min-h-screen bg-black text-white">
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
