import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Award, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const UeberUns: React.FC = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Über Uns | Race Attack - Ihr Partner für Nightliner & Tour Support in der Schweiz";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Race Attack GmbH - Erfahrenes Team für professionellen Nightliner, Fahrzeugtransport und Tour Support in der Schweiz und Europa. Zuverlässig, flexibel und mit Leidenschaft für Motorsport und Musik.');
    }

    // Animation handler
    const handleAnimations = () => {
      const animatedElements = document.querySelectorAll('.reveal');
      
      animatedElements.forEach(element => {
        element.classList.add('visible');
      });
    };

    // Initial check and add scroll listener
    // Run immediately and then again after a small delay to ensure all elements are processed
    handleAnimations();
    
    // Run again after a small delay to catch any elements that might not be fully rendered
    setTimeout(handleAnimations, 100);
    
    window.addEventListener('scroll', handleAnimations);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleAnimations);
    };
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
              <h1 className="heading-xl uppercase mb-6 reveal">
                Über <span className="gold-text">Uns</span>
              </h1>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 reveal">
                Lernen Sie Race Attack kennen – Ihr verlässlicher Partner für Nightliner, Tour Crew und Fahrzeugtransport in der Schweiz und ganz Europa.
              </p>
            </div>
          </div>
          <div className="gold-decoration w-[400px] h-[400px] right-0 top-0 opacity-20"></div>
        </section>

        {/* About Us Content */}
        <section className="bg-black-light py-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="heading-lg mb-6 reveal">
                  Unsere <span className="gold-text">Geschichte</span>
                </h2>
                <div className="gold-line mb-8"></div>
                <p className="text-gray-300 mb-6 reveal">
                  Race Attack ist ein schweizerisches Unternehmen mit Leidenschaft für professionellen Transport und Tourmanagement. Seit unserer Gründung haben wir uns auf hochwertige Nightliner-Services und zuverlässigen Fahrzeugtransport spezialisiert.
                </p>
                <p className="text-gray-300 mb-6 reveal">
                  Mit unserem erfahrenen Team bieten wir massgeschneiderte Lösungen für Künstler, Bands, Motorsportteams und Veranstaltungen in der Schweiz und ganz Europa an. Unsere Expertise und Zuverlässigkeit haben uns zu einem geschätzten Partner in der Branche gemacht.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start reveal">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Award className="text-gold" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Qualität & Erfahrung</h3>
                      <p className="text-gray-400">Höchste Standards und langjährige Erfahrung in der Tour- und Transportbranche.</p>
                    </div>
                  </div>
                  <div className="flex items-start reveal">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Clock className="text-gold" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Zuverlässigkeit</h3>
                      <p className="text-gray-400">Pünktlichkeit und Verlässlichkeit stehen bei uns an erster Stelle.</p>
                    </div>
                  </div>
                  <div className="flex items-start reveal">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Globe className="text-gold" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Europaweit aktiv</h3>
                      <p className="text-gray-400">Wir sind in der Schweiz und ganz Europa für Sie im Einsatz.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 reveal">
                <img 
                  src="/images/about/race-attack-team.jpg"
                  alt="Race Attack - Über Uns"
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://race-attack.ch/wp-content/uploads/2018/10/Livio1-1.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-black py-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-black-light/50 rounded-xl p-8 md:p-12 shadow-gold/5 shadow-xl border border-gold/10">
              <h2 className="heading-lg text-center mb-12 reveal">
                Kontaktieren Sie <span className="gold-text">Uns</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center reveal">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="text-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Adresse</h3>
                  <p className="text-gray-400">
                    Race-Attack GmbH<br />
                    Kappel 1<br />
                    CH-8523 Hagenbuch
                  </p>
                </div>
                <div className="text-center reveal">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="text-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Telefon</h3>
                  <a href="tel:+41786061032" className="text-gray-400 hover:text-gold transition-colors">
                    +41 78 606 10 32
                  </a>
                </div>
                <div className="text-center reveal">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="text-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">E-Mail</h3>
                  <a href="mailto:info@race-attack.ch" className="text-gray-400 hover:text-gold transition-colors">
                    info@race-attack.ch
                  </a>
                </div>
              </div>
              <div className="mt-12 text-center reveal">
                <Link 
                  to="/kontakt" 
                  className="bg-gold text-white py-3 px-6 rounded-md hover:bg-gold/90 transition-colors inline-block"
                >
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `
      }} />
    </div>
  );
};

export default UeberUns;
