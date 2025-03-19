
import React from 'react';
import { Marquee } from "@/components/ui/marquee";

// Partner-Daten
const partners = [
  {
    name: "Eventum GmbH",
    logo: "https://race-attack.ch/wp-content/uploads/2018/10/logo-eventum_weiss.png",
    url: "http://www.eventum-gmbh.ch/"
  },
  {
    name: "Helialpin",
    logo: "https://race-attack.ch/wp-content/uploads/2018/10/helialpin.png",
    url: "http://www.helialpin.ch"
  },
  {
    name: "Impeco",
    logo: "https://race-attack.ch/wp-content/uploads/2018/10/impeco.png",
    url: "https://www.impeco.nl/nl"
  },
  {
    name: "Show Tech",
    logo: "https://race-attack.ch/wp-content/uploads/2018/10/show-tech-logo-768x146.png",
    url: "http://showtech.ch/"
  },
  {
    name: "Live Sound",
    logo: "https://race-attack.ch/wp-content/uploads/2018/10/ls-logo.png",
    url: "http://www.livesound.ch/"
  },
  {
    name: "MS Backline",
    logo: "https://race-attack.ch/wp-content/uploads/2018/10/backline-768x223.jpg",
    url: "http://www.msbackline.pl/index_en.html"
  }
];

const PartnerMarquee = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden border-t border-b border-gold/20">
      {/* Gold decorative element */}
      <div className="gold-decoration w-[300px] h-[300px] left-[5%] top-[20%] opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto mb-10">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="heading-lg uppercase mb-4">
            Unsere <span className="gold-text">Partner</span>
          </h2>
          <div className="gold-line mx-auto"></div>
        </div>
      </div>

      <div className="bg-black/80 py-12 backdrop-blur-sm">
        <Marquee pauseOnHover speed={40} className="py-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="relative h-24 w-fit mx-16 flex items-center justify-start"
            >
              <a 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={partner.name}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full max-h-20 w-auto object-contain" 
                />
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PartnerMarquee;
