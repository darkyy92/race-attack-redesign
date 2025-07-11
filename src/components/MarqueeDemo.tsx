import { Marquee } from "@/components/ui/marquee";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

// Partners with logos from the /public/logos/ folder
const partners = [
  {
    name: "Show Tech",
    logo: "/logos/show-tech-logo.png",
    url: "http://showtech.ch/"
  },
  {
    name: "Helialpin",
    logo: "/logos/helialpin-logo.png",
    url: "http://www.helialpin.ch"
  },
  {
    name: "MS Backline",
    logo: "/logos/ms-backline-logo.jpg",
    url: "http://www.msbackline.pl/index_en.html"
  },
  {
    name: "Impeco",
    logo: "/logos/impeco-logo.png",
    url: "https://www.impeco.nl/nl"
  },
  {
    name: "Eventum GmbH",
    logo: "/logos/eventum-logo.png",
    url: "http://www.eventum-gmbh.ch/"
  },
  {
    name: "Live Sound",
    logo: "/logos/livesound-logo.png",
    url: "http://www.livesound.ch/"
  }
];

export function MarqueeDemo() {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation('home');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="section-padding bg-black relative overflow-hidden border-t border-b border-gold/20">
      {/* Gold decorative element */}
      <div className="gold-decoration w-[300px] h-[300px] left-[5%] top-[20%] opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto mb-10">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="heading-lg uppercase mb-4">
            {t('marquee.title')} <span className="gold-text">{t('marquee.titleHighlight')}</span>
          </h2>
          <div className="gold-line mx-auto"></div>
        </div>
      </div>

      <div className="bg-black/80 py-12 backdrop-blur-sm">
        {isClient && (
          <Marquee pauseOnHover speed={20} className="py-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative h-24 w-fit mx-12 flex items-center justify-start"
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
        )}
      </div>
    </section>
  );
}
