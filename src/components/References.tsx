
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
  
  const references = [
    "Beatsteaks", "Dropkick Murphys", "Jan Delay", "Jupiter Jones", 
    "Kraftklub", "Marteria", "Mia", "Peter Fox", "Seeed", "Shawn Mendes", 
    "The Prodigy", "Xavier Naidoo", "Hollywood Undead", "RAF Camora", 
    "Capital Bra", "Sido", "Bonez MC", "Kollegah"
  ];
  
  const partners = [
    "act entertainment AG", "Gadget abc Entertainment Group AG", "Live Nation", 
    "OpenAir St.Gallen", "Frauenfeld", "Swiss Music Promoters Association", 
    "Yourope", "DeConcert"
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
              {references.map((reference, index) => (
                <span 
                  key={index} 
                  className="inline-block px-4 py-2 rounded-full bg-black-light border border-gold/30 text-white text-sm"
                >
                  {reference}
                </span>
              ))}
            </div>
          </div>
          
          {/* Partners */}
          <div className="glass-card rounded-lg p-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="heading-sm mb-6 text-center gold-text">Partner & Veranstalter</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((partner, index) => (
                <span 
                  key={index} 
                  className="inline-block px-4 py-2 rounded-full bg-black-light border border-gold/30 text-white text-sm"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
