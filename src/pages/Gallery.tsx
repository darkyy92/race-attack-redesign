import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ImageGallery, GalleryImage } from '@/components/ui/image-gallery';

// Generate array of image paths from 01 to 27
const galleryImages: GalleryImage[] = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  src: `/gallery-images/image-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Race Attack Galerie - Tourbus, Nightliner und Tour Crew in der Schweiz - Bild ${i + 1}`
}));

const Gallery: React.FC = () => {
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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Galerie | Race Attack - Nightliner & Tour Crew Services in der Schweiz";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Entdecken Sie die Galerie von Race Attack - Ihr professioneller Partner für Nightliner, Tour Crew und Tourbus Services in der Schweiz und Europa. Eindrucksvolle Bilder unserer Fahrzeuge und Events.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
          <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl uppercase mb-6 animate-on-scroll">
                Unsere <span className="gold-text">Galerie</span>
              </h1>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 animate-on-scroll delay-200">
                Entdecken Sie beeindruckende Eindrücke aus unseren Tourneen, Events und dem Alltag der Race Attack Crew in der Schweiz und Europa. 
                Unsere Bilder zeigen die Leidenschaft und Professionalität, die wir als führender Anbieter von Nightliner und Tour Crew Services in jeden Einsatz bringen.
              </p>
            </div>
          </div>
          <div className="gold-decoration w-[400px] h-[400px] right-0 top-0 opacity-20"></div>
        </section>

        {/* Gallery Grid */}
        <section className="bg-black-light">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
            <ImageGallery 
              images={galleryImages} 
              layout="grid" 
              gap="md"
              aspectRatio="square" 
              lightbox={true}
              showCaptions={false}
              className="animate-on-scroll"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
