
import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';

const NightlinerPage: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  const sixteenSleeperImages = [
    "https://race-attack.ch/wp-content/uploads/2022/05/race-attack-truck-nightliner06.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/Livio1-1.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/Livio20-1.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/Livio25-1.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/Livio45-1.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/Livio49-2.jpg"
  ];

  const twelveSleeperImages = [
    "https://race-attack.ch/wp-content/uploads/2022/05/race-attack-truck-nightliner05.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/lounge-front_lbb-1.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/dsc07852_lbb-1.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/backloungebreit_lbb-1.jpg",
    "https://race-attack.ch/wp-content/uploads/2018/10/bettbreit_lbb-1.jpg"
  ];

  const toggleGallery = (gallery: string) => {
    if (activeGallery === gallery) {
      setActiveGallery(null);
    } else {
      setActiveGallery(gallery);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-24 bg-black">
        {/* Hero Banner */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://race-attack.ch/wp-content/uploads/2018/10/nightliner-ps.jpg" 
            alt="VIP Nightliner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <h1 className="heading-xl text-white mb-4">VIP Nightliner</h1>
              <div className="gold-line mx-auto mb-6"></div>
              <p className="text-xl text-white max-w-2xl mx-auto">Tourservice auf höchstem Niveau</p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-black-light py-4">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center text-sm text-gray-400">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gold">Nightliner</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* 16 Sleeper */}
              <div className="glass-card p-8 rounded-lg">
                <h2 className="heading-md mb-6 gold-text">16 Sleeper</h2>
                <p className="body-md mb-6 text-gray-300">
                  Einstöckiger Nightliner/Tourbus mit weitläufigem Raumgefühl und großen Fenstern. 
                  Luxuriöse Innenausstattung nach höchstem Standard für Ihre Tour durch Europa.
                </p>
                
                {/* Main Feature Image */}
                <div 
                  className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => toggleGallery('16sleeper')}
                >
                  <img 
                    src={sixteenSleeperImages[0]} 
                    alt="16 Sleeper Nightliner" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white bg-gold px-4 py-2 rounded-md">Galerie öffnen</span>
                  </div>
                </div>

                {/* Features */}
                <h3 className="text-xl font-semibold mb-4 text-white">Ausstattung:</h3>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Voll ausgestattete Küche mit Kühlschrank, Kaffeemaschine, Mikrowelle, Toaster und Wasserkocher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>3 Flachbildfernseher, DVD, PlayStation, Festplatte mit Filmen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>1 Duschraum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>1 Badezimmer mit Dusche und Toilette (kein Chemie-WC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>1 Schlafbereich mit 12 Kojen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>1 Schlafbereich mit 4 Kojen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Alle Kojen mit separatem Licht, Strom, Ventilator, Klimaanlage, Frischluftsystem und nordischer Bettwäsche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Vollständige Klimaanlage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Heizsystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Tische mit Ledersitzen</span>
                  </li>
                </ul>

                <Link to="/kontakt" className="gold-button inline-block">
                  Jetzt anfragen
                </Link>

                {/* Gallery Modal */}
                {activeGallery === '16sleeper' && (
                  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-5xl">
                      <div className="flex justify-end mb-4">
                        <button 
                          onClick={() => setActiveGallery(null)}
                          className="text-white hover:text-gold"
                        >
                          Schließen ×
                        </button>
                      </div>
                      <Carousel>
                        <CarouselContent>
                          {sixteenSleeperImages.map((img, index) => (
                            <CarouselItem key={index}>
                              <div className="flex items-center justify-center h-[60vh]">
                                <img src={img} alt={`16 Sleeper Bild ${index + 1}`} className="max-h-full max-w-full object-contain" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 border-gold text-gold hover:bg-gold/20" />
                        <CarouselNext className="right-2 border-gold text-gold hover:bg-gold/20" />
                      </Carousel>
                    </div>
                  </div>
                )}
              </div>

              {/* 12 Sleeper */}
              <div className="glass-card p-8 rounded-lg">
                <h2 className="heading-md mb-6 gold-text">12 Sleeper</h2>
                <p className="body-md mb-6 text-gray-300">
                  Einstöckiger Nightliner/Tourbus mit weitläufigem Raumgefühl und großen Fenstern. 
                  Luxuriöse Innenausstattung nach höchstem Standard für Ihre Tour durch Europa.
                </p>
                
                {/* Main Feature Image */}
                <div 
                  className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => toggleGallery('12sleeper')}
                >
                  <img 
                    src={twelveSleeperImages[0]} 
                    alt="12 Sleeper Nightliner" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white bg-gold px-4 py-2 rounded-md">Galerie öffnen</span>
                  </div>
                </div>

                {/* Features */}
                <h3 className="text-xl font-semibold mb-4 text-white">Ausstattung:</h3>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Voll ausgestattete Küche mit Kühlschrank, Kaffeemaschine, Mikrowelle, Toaster und Wasserkocher</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>3 Flachbildfernseher, DVD, PlayStation, Festplatte mit Filmen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>1 Duschraum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>1 Badezimmer mit Dusche und Toilette (kein Chemie-WC)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>12 Schlafkojen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Alle Kojen mit separatem Licht, Strom, Ventilator, Klimaanlage, Frischluftsystem und nordischer Bettwäsche</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Vollständige Klimaanlage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Heizsystem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Komfortable Backlounge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Tische mit Ledersitzen</span>
                  </li>
                </ul>

                <Link to="/kontakt" className="gold-button inline-block">
                  Jetzt anfragen
                </Link>

                {/* Gallery Modal */}
                {activeGallery === '12sleeper' && (
                  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-5xl">
                      <div className="flex justify-end mb-4">
                        <button 
                          onClick={() => setActiveGallery(null)}
                          className="text-white hover:text-gold"
                        >
                          Schließen ×
                        </button>
                      </div>
                      <Carousel>
                        <CarouselContent>
                          {twelveSleeperImages.map((img, index) => (
                            <CarouselItem key={index}>
                              <div className="flex items-center justify-center h-[60vh]">
                                <img src={img} alt={`12 Sleeper Bild ${index + 1}`} className="max-h-full max-w-full object-contain" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 border-gold text-gold hover:bg-gold/20" />
                        <CarouselNext className="right-2 border-gold text-gold hover:bg-gold/20" />
                      </Carousel>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <h2 className="heading-md mb-6 text-white">Exklusiver Nightliner-Service für Europa</h2>
              <p className="body-md mb-8 text-gray-300 max-w-3xl mx-auto">
                Reisen Sie komfortabel und stilvoll durch Europa mit unseren hochwertigen Nightlinern. 
                Ideal für Bands, Künstler und anspruchsvolle Reisende, die Wert auf Qualität und Komfort legen.
              </p>
              <Link to="/kontakt" className="gold-button inline-block">
                Jetzt Verfügbarkeit prüfen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NightlinerPage;
