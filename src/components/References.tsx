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
    { name: "Eluveitie", url: "http://eluveitie.ch/" },
    { name: "Gotthard", url: "https://www.gotthard.com/news/" },
    { name: "Lordi", url: "https://www.lordi.fi/" },
    { name: "Mercyful Fate", url: "https://mercyfulfatecoven.com/" },
    { name: "Crystal Ball", url: "http://crystal-ball.ch/de/" },
    { name: "Triumph of Death", url: "http://triumphofdeath.com/" },
    { name: "RAF Camora", url: "https://de-de.facebook.com/RAFCamora.official" },
    { name: "Bonez MC", url: "#" },
    { name: "Bring Me The Horizon", url: "https://www.bmthofficial.com/" },
    { name: "Bigflo et Oli", url: "http://bigfloetoli.com/" },
    { name: "Massilia Sound System", url: "http://www.massilia-soundsystem.com/" },
    { name: "Groundation", url: "https://groundation.com/" },
    { name: "Capital Bra", url: "#" },
    { name: "Sido", url: "#" },
    { name: "Beatsteaks", url: "#" },
    { name: "Dropkick Murphys", url: "#" },
    { name: "Jan Delay", url: "#" },
    { name: "Jupiter Jones", url: "#" },
    { name: "Kraftklub", url: "#" },
    { name: "Marteria", url: "#" },
    { name: "Mia", url: "#" },
    { name: "Peter Fox", url: "#" },
    { name: "Seeed", url: "#" },
    { name: "Shawn Mendes", url: "#" },
    { name: "The Prodigy", url: "#" },
    { name: "Xavier Naidoo", url: "#" },
    { name: "Hollywood Undead", url: "#" },
    { name: "Kollegah", url: "#" }
  ];
  
  const partners = [
    { name: "act entertainment AG", url: "#" },
    { name: "Gadget abc Entertainment Group AG", url: "#" },
    { name: "Live Nation", url: "#" },
    { name: "OpenAir St.Gallen", url: "#" },
    { name: "Frauenfeld", url: "#" },
    { name: "Swiss Music Promoters Association", url: "#" },
    { name: "Yourope", url: "#" },
    { name: "DeConcert", url: "#" },
    { name: "Eventum GmbH", url: "http://www.eventum-gmbh.ch/" },
    { name: "Helialpin", url: "http://www.helialpin.ch" },
    { name: "Impeco", url: "https://www.impeco.nl/nl" },
    { name: "Show Tech", url: "http://showtech.ch/" },
    { name: "Live Sound", url: "http://livesound.ch/" },
    { name: "MS Backline", url: "http://www.msbackline.pl/index_en.html" },
    { name: "Nice-Time Production", url: "https://www.nicetime.ch/" },
    { name: "Bleu Citron", url: "https://www.bleucitron.net/" },
    { name: "Solver Productions", url: "https://www.solver-productions.com/" },
    { name: "Big Ant Productions", url: "https://bigantproductions.com/" },
    { name: "Bottom Row", url: "https://www.bottomrow.com/" },
    { name: "Moonstruck Artist Service", url: "https://moonstruckservices.ch/" },
    { name: "ITM Agency", url: "https://www.itm-agency.com/home.html" },
    { name: "IBB Booking Berlin", url: "https://www.ibb-booking.com/" },
    { name: "Avernus Entertainment", url: "http://avernusentertainment.com/" },
    { name: "Nine Lives Entertainment", url: "https://www.nine-lives-entertainment.com/home" },
    { name: "Boldt Konzertagentur", url: "https://www.boldtberlin.de/" },
    { name: "Kingstar GmbH", url: "https://www.kingstar-music.com/" },
    { name: "HAMC OVERLAND", url: "http://hellsangels-overland.ch/" },
    { name: "Stargarage", url: "http://stargarage.ch/" },
    { name: "Zemp-Racing", url: "https://zemp-racing.ch/" },
    { name: "Hugis Fahrschule", url: "https://hugis-fahrschule.ch/" },
    { name: "Aldi Suisse", url: "https://www.aldi-suisse.ch/" },
    { name: "Richnerstutz AG", url: "https://richnerstutz.ch/" },
    { name: "Infinity Staging Solution GmbH Berlin", url: "#" },
    { name: "VW-Audi Cruisers", url: "https://www.facebook.com/vwaudicruisers" },
    { name: "Musicaction", url: "http://musicaction.ca/" },
    { name: "Meisel Motorsport", url: "http://www.meisel-motorsport.ch/" },
    { name: "Amweg Motorsport", url: "https://www.amweg-motorsport.ch/" }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
              {partners.map((partner, index) => (
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
