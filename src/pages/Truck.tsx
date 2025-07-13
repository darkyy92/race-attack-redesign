import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Marquee } from '@/components/ui/marquee';
import { ImageGallery, GalleryImage } from '@/components/ui/image-gallery';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Truck: React.FC = () => {
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

    // Set page title and meta description for SEO
    document.title = "Race Attack Truck | Premium Fahrzeugtransport & Motorsport Logistik";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Unser Race Attack Truck bietet 70m³ Ladevolumen für bis zu drei Fahrzeuge plus Equipment. Ideal für Racingeinsätze, Oldtimer- und Sportwagentransporte in der Schweiz und Europa.');
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Gallery images with captions
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/truck-images/race-attack-truck-nightliner03.jpg",
      alt: "Race Attack Truck - Aussenansicht mit Zugmaschine",
      caption: "Renault Magnum Zugfahrzeug mit Achleitner Auflieger"
    },
    {
      id: 2,
      src: "/truck-images/race-attack-truck-nightliner01.jpg",
      alt: "Race Attack Truck - Innenansicht mit Fahrzeugtransport",
      caption: "Kapazität für bis zu drei Fahrzeuge plus Equipment"
    },
    {
      id: 3,
      src: "/truck-images/race-attack-truck-nightliner02.jpg",
      alt: "Race Attack Truck - Detailansicht der Laderampe",
      caption: "2,5 Tonnen Hebebühne für sicheres Be- und Entladen"
    }
  ];

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
                Race Attack <span className="gold-text">Truck</span>
              </h1>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 animate-on-scroll delay-75">
                Premium Fahrzeugtransport und professionelle Motorsport-Logistik für anspruchsvolle Kunden in der Schweiz und ganz Europa.
              </p>
            </div>
          </div>
          <div className="gold-decoration w-[400px] h-[400px] right-0 top-0 opacity-20"></div>
        </section>

        {/* Main Image Section */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="animate-on-scroll"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
              >
                <OptimizedImage 
                  src="/truck-images/race-attack-truck-nightliner04.jpg" 
                  alt="Race Attack Truck - Premium Fahrzeugtransport und Motorsport Logistik" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
              <div>
                <motion.div 
                  className="animate-on-scroll"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  <h2 className="heading-lg mb-6">
                    Professioneller <span className="text-gold">Fahrzeugtransport</span> für höchste Ansprüche
                  </h2>
                  <div className="gold-line mb-8 w-24"></div>
                  <p className="body-lg mb-6">
                    Unser Race Attack Truck ist die perfekte Lösung für anspruchsvolle Fahrzeugtransporte und Motorsport-Logistik. Mit einem Renault Magnum Zugfahrzeug und einem speziell angefertigten Achleitner Auflieger bieten wir Ihnen maximale Flexibilität und Sicherheit für Ihre wertvollen Fahrzeuge.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Grosszügiges Ladevolumen von ca. 70m³</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Kapazität für bis zu drei Fahrzeuge plus Equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>2,5 Tonnen Hebebühne für sicheres Be- und Entladen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Komfortable Lounge mit Küche und 2 Betten im vorderen Teil</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>Ausgestattet mit Elektrotablet und Druckluftinstallation</span>
                    </li>
                  </ul>
                  <Link to="/kontakt" className="gold-button">
                    Jetzt Anfrage stellen
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6 animate-on-scroll">
                Unser <span className="text-gold">Truck</span> im Einsatz
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="body-lg max-w-3xl mx-auto animate-on-scroll delay-75 mb-8">
                Entdecken Sie unseren vielseitigen Race Attack Truck, der für Racingeinsätze, Oldtimer- und Sportwagentransporte sowie Events mit grösseren Backline-Transporten konzipiert wurde.
              </p>
            </div>
            
            {/* Modern Image Gallery */}
            <ImageGallery 
              images={galleryImages} 
              layout="grid"
              gap="sm"
              padding="none"
              lightbox={true}
              aspectRatio="auto"
              className="animate-on-scroll"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6 animate-on-scroll">
                Vielseitige <span className="text-gold">Einsatzmöglichkeiten</span>
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Motorsport Teams",
                  description: "Ideal für bis zu drei Rennteams mit Fahrzeugen und kompletter Ausrüstung."
                },
                {
                  title: "Oldtimer Transport",
                  description: "Sicherer und schonender Transport Ihrer wertvollen Oldtimer und Klassiker."
                },
                {
                  title: "Sportwagen Logistik",
                  description: "Professioneller Transport exklusiver Sportwagen zu Events und Ausstellungen."
                },
                {
                  title: "Event Equipment",
                  description: "Grosszügiger Platz für Backline-Transporte und Event-Ausrüstung."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-black p-6 rounded-lg shadow-lg border border-gold/20 animate-on-scroll"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gold">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial/Quote Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5"></div>
          <div className="gold-decoration w-[600px] h-[600px] -left-[300px] -bottom-[300px] opacity-10"></div>
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl text-gold mb-6">"</div>
              <p className="text-2xl italic mb-8 text-gray-200">
                Mit unserem Race Attack Truck bieten wir Ihnen eine zuverlässige und flexible Transportlösung für Ihre wertvollen Fahrzeuge und Equipment. Profitieren Sie von unserem Erfahrungsschatz in der Motorsport-Logistik.
              </p>
              <div className="text-gold font-bold">Race Attack Team</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-r from-black to-black-light p-8 md:p-12 rounded-lg shadow-lg border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-lg mb-6">
                    Bereit für Ihren nächsten <span className="text-gold">Transport?</span>
                  </h2>
                  <p className="body-lg mb-8">
                    Kontaktieren Sie uns noch heute für ein individuelles Angebot für Ihren Fahrzeugtransport oder Ihre Motorsport-Logistik. Unser erfahrenes Team steht Ihnen gerne zur Verfügung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/kontakt" className="gold-button">
                      Jetzt anfragen
                    </Link>
                    <Link to="/gallery" className="gold-outline-button">
                      Mehr Bilder ansehen
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <Marquee direction="right" speed={40} className="py-4">
                    {["Motorsport", "Fahrzeugtransport", "Oldtimer", "Sportwagen", "Renneinsätze", "Logistik", "Schweiz", "Europa"].map((item, index) => (
                      <div key={index} className="mx-4 text-2xl font-bold text-gold/80">
                        {item} <span className="text-white">•</span>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cross-promotion Section for Nightliner */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <Card className="glass-card border-gold/20 p-8 md:p-12 shadow-xl">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <OptimizedImage
                      src="/images/nightliner-ps.jpg"
                      alt="VIP Nightliner"
                      className="w-full h-56 object-cover rounded-lg shadow-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Komplettlösung für Ihre Tour
                    </h3>
                    <p className="text-white/80 mb-6">
                      Neben unserem Truck-Service bieten wir auch luxuriöse Nightliner für den Transport von Künstlern und Bands. 
                      Die perfekte Kombination: Equipment-Transport mit dem Truck und komfortabler Personentransport mit dem Nightliner - alles aus einer Hand.
                    </p>
                    <Link to="/nightliner">
                      <Button className="gold-button flex items-center gap-2">
                        <span>Nightliner entdecken</span>
                        <ChevronRight size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Truck;
