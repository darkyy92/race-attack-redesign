
import { Marquee } from "@/components/ui/marquee";

// Partner-Daten mit lokalen Bildern
const partners = [
  {
    name: "Eventum GmbH",
    logo: "/lovable-uploads/85b2c2b5-cfdc-4df3-bf3e-cc46b5da8918.png", // Placeholder für Eventum, ersetzen wenn verfügbar
    url: "http://www.eventum-gmbh.ch/"
  },
  {
    name: "Helialpin",
    logo: "/lovable-uploads/85b2c2b5-cfdc-4df3-bf3e-cc46b5da8918.png", // Placeholder für Helialpin, ersetzen wenn verfügbar
    url: "http://www.helialpin.ch"
  },
  {
    name: "Impeco",
    logo: "/lovable-uploads/372245a7-f20a-4b75-9963-8521d4aa5a2e.png",
    url: "https://www.impeco.nl/nl"
  },
  {
    name: "Show Tech",
    logo: "/lovable-uploads/b1f68fc3-c394-46c0-aca6-e08f5608011f.png",
    url: "http://showtech.ch/"
  },
  {
    name: "Live Sound",
    logo: "/lovable-uploads/3f1365e5-51ea-4125-a480-060b02718232.png",
    url: "http://www.livesound.ch/"
  },
  {
    name: "MS Backline",
    logo: "/lovable-uploads/c50be87a-8b72-4b42-89f1-bcc913771d15.png",
    url: "http://www.msbackline.pl/index_en.html"
  }
];

export function MarqueeDemo() {
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
}
