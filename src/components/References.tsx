import React, { useEffect, useRef } from 'react';

const References: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
  
  const artistsAndBands = [
    { name: "Al McKay", url: "https://www.almckay.com" },
    { name: "Bigflo et Oli", url: "http://bigfloetoli.com/" },
    { name: "Bonez MC", url: "#" },
    { name: "Bring me the Horizon", url: "https://www.bmthofficial.com/" },
    { name: "Core Leoni", url: "https://www.coreleoni.com" },
    { name: "Crystal Ball", url: "http://crystal-ball.ch/de/" },
    { name: "David Guetta", url: "https://www.davidguetta.com" },
    { name: "Earth Wind and Fire", url: "https://www.earthwindandfire.com" },
    { name: "Eisbrecher", url: "https://www.eis-brecher.com" },
    { name: "Eluveitie", url: "http://eluveitie.ch/" },
    { name: "Enter Shikari", url: "https://www.entershikari.com" },
    { name: "Faun", url: "https://www.faune.de" },
    { name: "Gotthard", url: "https://www.gotthard.com/news/" },
    { name: "Gotus", url: "https://www.facebook.com/gotusmusic" },
    { name: "Groundation", url: "https://groundation.com/" },
    { name: "Kunz", url: "https://www.kunzmusik.ch/" },
    { name: "Lordi", url: "https://www.lordi.fi/" },
    { name: "Massilia sound system", url: "http://www.massilia-soundsystem.com/" },
    { name: "Mercyful-Fate", url: "https://mercyfulfatecoven.com/" },
    { name: "RAF Camora", url: "https://de-de.facebook.com/RAFCamora.official" },
    { name: "Seraina Telli", url: "https://serainatelli.com" },
    { name: "Sumpfbrass", url: "https://www.sumpfffbrass.ch/" },
    { name: "The Garden", url: "https://www.thegardenvadavada.com/" },
    { name: "Triumph of Death", url: "http://triumphofdeath.com/" }
   ];

   const partners = [
    { name: "Amweg Motorsport", url: "https://www.amweg-motorsport.ch/" },
    { name: "Avernus Entertainment", url: "http://avernusentertainment.com/" },
    { name: "Big Ant Productions", url: "https://bigantproductions.com/" },
    { name: "Bleu Citron", url: "https://www.bleucitron.net/" },
    { name: "Boldt Konzertagentur Berlin", url: "https://www.boldtberlin.de/" },
    { name: "Bottom Row Karlsruhe", url: "https://www.bottomrow.com/" },
    { name: "HAMC OVERLAND", url: "http://hellsangels-overland.ch/" },
    { name: "Hardrock Hotel Davos", url: "https://www.hrhdavos.com" },
    { name: "Hugis Fahrschule", url: "https://hugis-fahrschule.ch/" },
    { name: "IBB Booking Berlin", url: "https://www.ibb-booking.com/" },
    { name: "Infinity Staging Solution GmbH Berlin", url: "#" },
    { name: "ITM Agency Ubstadt Weiher", url: "https://www.itm-agency.com/home.html" },
    { name: "Kingstar GmbH Hamburg", url: "https://www.kingstar-music.com/" },
    { name: "Livesound", url: "http://livesound.ch/" },
    { name: "Meisel Motorsport", url: "http://www.meisel-motorsport.ch/" },
    { name: "Moonstruck Artist Service", url: "https://moonstruckservices.ch/" },
    { name: "Musicaction", url: "http://musicaction.ca/" },
    { name: "Nice-Time Production", url: "https://www.nicetime.ch/" },
    { name: "Nine Lives Entertainment", url: "https://www.nine-lives-entertainment.com/home" },
    { name: "Richnerstutz AG", url: "https://richnerstutz.ch/" },
    { name: "Solver Productions", url: "https://www.solver-productions.com/" },
    { name: "Stargarage", url: "http://stargarage.ch/" },
    { name: "The Valley Event AG", url: "https://thevalley.ch" },
    { name: "VW-Audi Cruisers", url: "https://www.facebook.com/vwaudicruisers" },
    { name: "Zemp-Racing", url: "https://zemp-racing.ch/" }
   ];

  const filteredPartners = partners.filter(partner => 
    !["Eventum GmbH", "Helialpin", "Impeco", "Show Tech", "Live Sound", "MS Backline"]
    .includes(partner.name)
  );

  return (
    <section ref={sectionRef} className="section-padding bg-black relative">
      {/* Gold decorative element */}
      <div className="gold-decoration w-[500px] h-[500px] right-[10%] top-[10%] opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg uppercase mb-4">
            Unsere <span className="gold-text">Referenzen</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto text-gray-300 mb-2">
            Vertrauen Sie auf unsere langjährige Erfahrung und Expertise mit namhaften Künstlern und Veranstaltern.
          </p>
          <div className="gold-line mx-auto"></div>
        </div>
        
        <div className="flex flex-col gap-12">
          {/* Artists */}
          <div className="glass-card rounded-lg p-8 animate-on-scroll">
            <h3 className="heading-sm mb-6 text-center gold-text">Künstler & Bands</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {artistsAndBands.map((reference, index) => (
                <a 
                  key={index} 
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full bg-black-light border border-gold/30 text-white text-sm hover:bg-gold/10 hover:border-gold/50 transition-colors"
                >
                  {reference.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Partners */}
          <div className="glass-card rounded-lg p-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="heading-sm mb-6 text-center gold-text">Partner & Veranstalter</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {filteredPartners.map((partner, index) => (
                <a 
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full bg-black-light border border-gold/30 text-white text-sm hover:bg-gold/10 hover:border-gold/50 transition-colors"
                >
                  {partner.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
