import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Music, User, ChevronRight, PhoneCall } from 'lucide-react';

interface CrewMemberProps {
  name: string;
  position: string;
  bands?: string;
  image: string;
  reverse?: boolean;
  index: number;
}

const CrewMember: React.FC<CrewMemberProps> = ({ name, position, bands, image, reverse = false, index }) => {
  return (
    <div 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-20 rounded-lg overflow-hidden glass-card border border-gold/10 shadow-xl`}
      data-aos={reverse ? "fade-left" : "fade-right"}
      data-aos-delay={30 * index}
    >
      <div className="w-full md:w-2/5 h-80 md:h-auto relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} - ${position} bei Race Attack`} 
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
          loading={index < 3 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
      </div>
      <div className="w-full md:w-3/5 flex flex-col justify-center p-8">
        <h3 className="text-3xl font-bold text-white mb-3">{name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <Briefcase className="text-gold" size={18} />
          <p className="text-white/90 text-lg font-medium">{position}</p>
        </div>
        {bands && (
          <div className="flex items-start gap-2 mb-5">
            <Music className="text-gold mt-1" size={18} />
            <p className="text-white/80">{bands}</p>
          </div>
        )}
        <div className="h-0.5 w-20 bg-gradient-to-r from-gold to-gold-light mb-5"></div>
      </div>
    </div>
  );
};

const TourCrew: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tour Crew | Professionelle Tourbegleitung | Race-Attack";
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Helmet>
        <title>Tour Crew | Professionelle Tourbegleitung für Bands in Europa | Race-Attack</title>
        <meta name="description" content="Buchen Sie unsere erfahrene Tour Crew für Ihre nächste Tournee mit unserem Nightliner. Gitarrentechniker, Tontechniker und mehr aus einer Hand." />
        <meta name="keywords" content="Tour Crew, Bandtechniker, Gitarrentechniker, Nightliner Crew, Tourmanager, Tontechniker, Backliner" />
        <link rel="canonical" href="https://race-attack.ch/tour-crew" />
        <meta property="og:title" content="Tour Crew | Professionelle Tourbegleitung für Bands in Europa" />
        <meta property="og:description" content="Professionelle Tour Crew für Künstler und Bands in der Schweiz und ganz Europa mit umfassender Erfahrung bei internationalen Acts." />
        <meta property="og:url" content="https://race-attack.ch/tour-crew" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tour Crew | Professionelle Tourbegleitung | Race-Attack" />
        <meta name="twitter:description" content="Buchen Sie unsere erfahrene Tour Crew für Ihre nächste Tournee mit unserem Nightliner. Gitarrentechniker, Tontechniker und mehr aus einer Hand." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Tour Crew Services",
              "provider": {
                "@type": "Organization",
                "name": "Race Attack GmbH",
                "url": "https://race-attack.ch"
              },
              "description": "Professionelle Tour Crew für Künstler und Bands in der Schweiz und ganz Europa.",
              "serviceType": "Tour Support",
              "areaServed": ["Switzerland", "Europe"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tour Crew Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gitarren-Techniker"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tontechniker"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tourmanager"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Backliner"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 md:px-6 bg-gradient-to-b from-black to-black-light">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="gold-decoration w-96 h-96 top-10 left-1/4"></div>
          <div className="gold-decoration w-64 h-64 bottom-10 right-1/4"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6 animate-fade-in">
              <span className="text-gold">Tour</span> Crew
            </h1>
            <div className="flex justify-center mb-10">
              <Separator className="w-32 h-1 bg-gradient-to-r from-gold to-gold-light animate-fade-in" />
            </div>
            
            <div className="glass-card p-8 md:p-12 rounded-lg mb-16 animate-fade-in">
              <h2 className="text-xl md:text-2xl text-white mb-6 font-heading">
                Professionelle Unterstützung für Ihre Tour in ganz Europa
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Wir bieten Ihnen einige der besten Profis für Ihre absolut stressfreie Tournee mit unserem Nightliner. Von erfahrenen Gitarren-Technikern bis zu Tontechnikern - bei uns finden Sie alles unter einem Dach.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Kombinieren Sie unser Angebot mit unserem erstklassigen <Link to="/nightliner" className="text-gold hover:text-gold-light">Nightliner Tourbus</Link> für ein komplettes Tour-Paket!
              </p>
              <div className="flex justify-center">
                <Separator className="w-32 h-0.5 bg-gold/70" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 relative">
            <span className="relative z-10">Unsere professionelle <span className="text-gold">Tour Crew</span></span>
            <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-6xl text-gold/5 font-bold">CREW</span>
          </h2>
          
          <CrewMember 
            name="Rafael Salzmann" 
            position="Tourmanager / Gitarren-Techniker" 
            bands="Eluveitie"
            image="https://race-attack.ch/wp-content/uploads/2018/10/Rafael-Salzmann-768x426.jpg"
            index={1}
          />
          
          <CrewMember 
            name="Cal South" 
            position="Schlagzeug-Techniker / Backliner" 
            bands="Eluveitie, Gregory Porter, Aloe Blacc, Eric Harland, Patricia Kass, Mummy"
            image="https://race-attack.ch/wp-content/uploads/2018/10/Cal-South-768x426.jpg"
            reverse={true}
            index={2}
          />
          
          <CrewMember 
            name="Tom Wenger" 
            position="Gitarren-Techniker / Backliner"
            image="https://race-attack.ch/wp-content/uploads/2018/10/tom1-768x426.jpg"
            index={3}
          />
          
          <CrewMember 
            name="Szymon Mierzejewski" 
            position="Gitarren-Techniker / Backliner" 
            bands="Eluveitie, Exodus, Moonspell, Death Angel, Behemoth, Korpiklaani, Cannibal Corpse, Unleashed, Immortal"
            image="https://race-attack.ch/wp-content/uploads/2018/10/Shymon-768x426.jpg"
            reverse={true}
            index={4}
          />
          
          <CrewMember 
            name="Sven Gerber" 
            position="Tontechniker"
            image="https://race-attack.ch/wp-content/uploads/2018/10/sven-768x426.jpg"
            index={5}
          />
          
          <CrewMember 
            name="Daniel Michel" 
            position="Lichttechniker"
            image="https://race-attack.ch/wp-content/uploads/2018/10/daniel-768x426.jpg"
            reverse={true}
            index={6}
          />
          
          <CrewMember 
            name="Chad Gunter" 
            position="Merchandise-Verantwortlicher"
            image="https://race-attack.ch/wp-content/uploads/2018/10/chad-768x426.jpg"
            index={7}
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-black-light to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="gold-decoration w-64 h-64 bottom-10 right-10 opacity-30"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="glass-card border-gold/20 p-8 md:p-12 shadow-2xl animate-fade-in">
            <CardContent className="p-0 text-center">
              <h2 className="heading-lg text-white mb-6">Bereit, unsere Tour-Crew zu buchen?</h2>
              <p className="text-white/80 mb-10 max-w-3xl mx-auto">
                Kontaktieren Sie uns noch heute, um unsere erfahrene Tour-Crew für Ihre nächste Veranstaltung oder Tournee mit unserem Nightliner zu buchen. Wir bieten massgeschneiderte Komplettlösungen für Ihren individuellen Bedarf.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <Link to="/kontakt">
                  <Button className="gold-button flex items-center gap-2">
                    <span>Angebot anfragen</span>
                    <ChevronRight size={18} />
                  </Button>
                </Link>
                <a href="tel:+41786061032">
                  <Button variant="outline" className="text-gold border-gold hover:bg-gold/10 flex items-center gap-2">
                    <PhoneCall size={18} />
                    <span>+41 78 606 10 32</span>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TourCrew;
