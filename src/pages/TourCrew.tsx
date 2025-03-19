
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Music, User } from 'lucide-react';

interface CrewMemberProps {
  name: string;
  position: string;
  bands?: string;
  image: string;
  reverse?: boolean;
}

const CrewMember: React.FC<CrewMemberProps> = ({ name, position, bands, image, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 mb-16 animate-fade-in`}>
      <div className="w-full md:w-1/2">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover rounded-md shadow-xl"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-white mb-3">{name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="text-gold" size={18} />
          <p className="text-white/90 text-lg">{position}</p>
        </div>
        {bands && (
          <div className="flex items-start gap-2 mb-4">
            <Music className="text-gold mt-1" size={18} />
            <p className="text-white/80">{bands}</p>
          </div>
        )}
        <div className="mt-4">
          <div className="h-0.5 w-20 bg-gold mb-6"></div>
        </div>
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
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6 animate-fade-in">Tour Crew</h1>
            <div className="flex justify-center mb-12">
              <Separator className="w-32 h-1 bg-gold animate-fade-in" />
            </div>
            
            <div className="glass-card p-8 md:p-12 rounded-lg mb-16 animate-fade-in">
              <p className="text-xl md:text-2xl text-white mb-6">
                Wir bieten Ihnen einige der besten Profis für Ihre absolut stressfreie Tournee mit unserem Nightliner!
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Sie benötigen einen Gitarren-Techniker oder Tontechniker? Bei uns finden Sie alles unter einem Dach. Wir können Ihnen ein komplettes Tour-Paket zusammen mit unserem erstklassigen Nightliner Tourbus anbieten!
              </p>
              <div className="flex justify-center">
                <Separator className="w-32 h-0.5 bg-gold/70" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <CrewMember 
            name="Rafael Salzmann" 
            position="Tourmanager / Gitarren-Techniker" 
            bands="Eluveitie"
            image="https://race-attack.ch/wp-content/uploads/2018/10/Rafael-Salzmann-768x426.jpg"
          />
          
          <CrewMember 
            name="Cal South" 
            position="Schlagzeug-Techniker / Backliner" 
            bands="Eluveitie, Gregory Porter, Aloe Blacc, Eric Harland, Patricia Kass, Mummy"
            image="https://race-attack.ch/wp-content/uploads/2018/10/Cal-South-768x426.jpg"
            reverse={true}
          />
          
          <CrewMember 
            name="Tom Wenger" 
            position="Gitarren-Techniker / Backliner"
            image="https://race-attack.ch/wp-content/uploads/2018/10/tom1-768x426.jpg"
          />
          
          <CrewMember 
            name="Szymon Mierzejewski" 
            position="Gitarren-Techniker / Backliner" 
            bands="Eluveitie, Exodus, Moonspell, Death Angel, Behemoth, Korpiklaani, Cannibal Corpse, Unleashed, Immortal"
            image="https://race-attack.ch/wp-content/uploads/2018/10/Shymon-768x426.jpg"
            reverse={true}
          />
          
          <CrewMember 
            name="Sven Gerber" 
            position="Tontechniker"
            image="https://race-attack.ch/wp-content/uploads/2018/10/sven-768x426.jpg"
          />
          
          <CrewMember 
            name="Daniel Michel" 
            position="Lichttechniker"
            image="https://race-attack.ch/wp-content/uploads/2018/10/daniel-768x426.jpg"
            reverse={true}
          />
          
          <CrewMember 
            name="Chad Gunter" 
            position="Merchandise-Verantwortlicher"
            image="https://race-attack.ch/wp-content/uploads/2018/10/chad-768x426.jpg"
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card border-gold/20 p-8 md:p-12">
            <CardContent className="p-0 text-center">
              <h2 className="heading-lg text-white mb-6">Bereit, unsere Tour-Crew zu buchen?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Kontaktieren Sie uns noch heute, um unsere erfahrene Tour-Crew für Ihre nächste Veranstaltung oder Tournee mit unserem Nightliner zu buchen. Wir bieten massgeschneiderte Komplettlösungen für Ihren individuellen Bedarf.
              </p>
              <Link to="/kontakt">
                <Button className="gold-button">
                  Angebot anfragen
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TourCrew;
