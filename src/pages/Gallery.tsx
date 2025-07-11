import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ImageGallery, GalleryImage } from '@/components/ui/image-gallery';

const Gallery: React.FC = () => {
  const { t } = useTranslation('gallery');

  // Generate array of image paths from 01 to 27
  const galleryImages: GalleryImage[] = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    src: `/gallery-images/image-${String(i + 1).padStart(2, '0')}.jpg`,
    alt: `${t('images.altText')} ${i + 1}`
  }));

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
    document.title = t('pageTitle');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('metaDescription'));
    }
  }, [t]);

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
                {t('hero.title')} <span className="gold-text">{t('hero.titleHighlight')}</span>
              </h1>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 animate-on-scroll delay-200">
                {t('hero.description')}
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
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
