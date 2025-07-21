import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Marquee } from "@/components/ui/marquee";
import { OptimizedImage } from "@/components/ui/optimized-image";

const Yacht: React.FC = () => {
  useEffect(() => {
    // Initialize animation observer for elements with .animate-on-scroll class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Set page title and meta description for SEO
    document.title =
      "Race Attack Yacht | Segelyacht TOAD - Oyster 70 | Luxus Charter Kanaren";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Charter-Törns auf der Segelyacht TOAD – Oyster 70. Luxuriöse 22m Yacht mit 5 Kabinen auf den Kanaren. Ganzjähriges Segeln mit idealem Klima.",
      );
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Gallery images with captions
  const galleryImages = [
    {
      id: 1,
      src: "/images/yacht/race-attack-photo-yacht-1.jpeg",
      alt: "Segelyacht TOAD - Oyster 70 unter Segeln",
      caption: "Die TOAD in voller Fahrt – Segeln in den Sonnenuntergang",
    },
    {
      id: 2,
      src: "/images/yacht/race-attack-photo-yacht-2.jpg",
      alt: "Segelyacht TOAD - Luxuriöses Deck",
      caption: "Komplettes Teakdeck mit geschütztem Cockpit",
    },
    {
      id: 3,
      src: "/images/yacht/race-attack-photo-yacht-4.jpg",
      alt: "Segelyacht TOAD - Oyster 70 im Hafen",
      caption: "Die elegante TOAD – 22 Meter pure Segelkunst",
    },
    {
      id: 4,
      src: "/images/yacht/race-attack-photo-yacht-5.jpeg",
      alt: "Segelyacht TOAD - Kabine",
      caption: "5 Doppelkabinen mit eigenem WC/Dusche",
    },
    {
      id: 5,
      src: "/images/yacht/race-attack-photo-yacht-6.jpeg",
      alt: "Segelyacht TOAD - Ankern in der Bucht",
      caption: "Traumhafte Buchten oft ganz für sich allein",
    },
    {
      id: 6,
      src: "/images/yacht/race-attack-photo-yacht-7.jpeg",
      alt: "Segelyacht TOAD - Komfortabler Salon",
      caption: "Salon mit Panoramafenstern und Klimaanlage",
    },
    {
      id: 7,
      src: "/images/yacht/race-attack-photo-yacht-8.jpeg",
      alt: "Segelyacht TOAD - Segeln bei Sonnenuntergang",
      caption: "Unvergessliche Momente auf dem Atlantik",
    },
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
                Segelyacht <span className="gold-text">TOAD</span> – Oyster 70
              </h1>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 animate-on-scroll delay-75">
                Dein schwimmendes Boutique-Hotel auf den Kanarischen Inseln
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
                  src="/images/yacht/race-attack-photo-yacht-4.jpg"
                  alt="Segelyacht TOAD - Oyster 70 Luxus Charter"
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
                    Luxus & <span className="text-gold">Sicherheit</span> auf
                    höchstem Niveau
                  </h2>
                  <div className="gold-line mb-8 w-24"></div>
                  <p className="body-lg mb-6">
                    Die TOAD liegt ganzjährig im Südwesten von Gran Canaria. Die
                    Kanaren bieten konstanten Passatwind aus Nordost, milde 26
                    °C Luft- und über 20 °C Wassertemperatur – ideal von
                    September bis Mai.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Oyster 70 mit 5 Kabinen, modernster Technik und
                        kompletter Sicherheitsausrüstung
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Wöchentliche Törns, Routen nach Wind, Wetter und deinen
                        Wünschen
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Bestes Klima von Herbst bis Frühling, kaum
                        Charterverkehr
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✓</span>
                      <span>
                        Mehrere Direktflüge täglich, Transferservice inklusive
                      </span>
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

        {/* Technical Specifications Section */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6 animate-on-scroll">
                Technische <span className="text-gold">Eckdaten</span>
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "Abmessungen",
                  specs: [
                    {
                      label: "Länge / Breite",
                      value: "23m Länge / 5.6m Breite",
                    },
                    { label: "Mast", value: "30 m" },
                    {
                      label: "Segelfläche",
                      value: "ca. 260 m² am Wind, über 300 m² vor dem Wind",
                    },
                  ],
                },
                {
                  category: "Unterkunft",
                  specs: [
                    { label: "Kabinen", value: "5 Doppelkabinen" },
                    {
                      label: "Sanitär",
                      value: "Jede Kabine mit eigenem WC / Dusche",
                    },
                    {
                      label: "Komfort",
                      value:
                        "Klimaanlage, grosse Küche, Salon mit Panoramafenstern",
                    },
                  ],
                },
                {
                  category: "Ausstattung",
                  specs: [
                    {
                      label: "Antrieb",
                      value: "Starker Hauptmotor + grosser Generator",
                    },
                    {
                      label: "Deck",
                      value:
                        "Komplettes Teakdeck, geschütztes Cockpit, Sonnenliegen",
                    },
                    { label: "Beiboote", value: "RibEye-Dinghy mit 25 PS" },
                  ],
                },
                {
                  category: "Versorgung",
                  specs: [
                    {
                      label: "Kühlung",
                      value: "Grosse Kühl- / Gefrierschränke",
                    },
                    { label: "Tanks", value: "Grosse Wasser- und Dieseltanks" },
                    { label: "Wasser", value: "Entsalzungsanlage an Bord" },
                  ],
                },
                {
                  category: "Sicherheit",
                  specs: [
                    {
                      label: "Rettungsmittel",
                      value:
                        "AIS-Rettungswesten, Rettungsinsel, EPIRB-Notsender",
                    },
                    { label: "Navigation", value: "Radar, UKW / VHF-Funk" },
                    {
                      label: "Medizinisch",
                      value:
                        "Umfangreiche Bordapotheke (Skipper militärisch medizinisch geschult)",
                    },
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-black-light p-6 rounded-lg shadow-lg border border-gold/20 animate-on-scroll"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gold">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="text-gray-300">
                        <span className="font-semibold text-white">
                          {spec.label}:
                        </span>{" "}
                        {spec.value}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Routes Section */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6 animate-on-scroll">
                Dein Törn auf den <span className="text-gold">Kanaren</span>
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="animate-on-scroll"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-black p-8 rounded-lg shadow-lg border border-gold/20">
                  <h3 className="text-2xl font-bold mb-6 text-gold">
                    Routenvorschläge
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>Inselumrundung Gran Canaria</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>Teneriffa – La Gomera</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>
                        Fuerteventura oder, bei längeren Törns, bis La Palma
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>
                        „Easy Going" von Bucht zu Bucht oder sportlicher
                        Meilentörn – du entscheidest (Anfänger willkommen und
                        auf Wunsch aktiv eingebunden)
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="animate-on-scroll"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                <div className="bg-black p-8 rounded-lg shadow-lg border border-gold/20">
                  <h3 className="text-2xl font-bold mb-6 text-gold">
                    Reiseplanung
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✈</span>
                      <span>
                        Direktflug Zürich → Gran Canaria mit Edelweiss (ca. 4 h,
                        CHF 300–550)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✈</span>
                      <span>
                        Direktflug Basel → Gran Canaria mit EasyJet (ab ca. CHF
                        300)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">✈</span>
                      <span>Viele weitere Städte in Europa ab ~ EUR 100</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-3">🚗</span>
                      <span>
                        Transfer vom Flughafen zur TOAD organisieren wir gern
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6 animate-on-scroll">
                Die <span className="text-gold">TOAD</span> erleben
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="body-lg max-w-3xl mx-auto animate-on-scroll delay-75 mb-8">
                Entdecken Sie unsere luxuriöse Oyster 70 und die traumhaften
                Segelreviere der Kanarischen Inseln.
              </p>
            </div>

            {/* Custom Asymmetric Gallery Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 animate-on-scroll">
              {/* First row - One large image spanning 8 columns */}
              <motion.div
                className="md:col-span-8 h-[300px] md:h-[500px] relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                    {galleryImages[0].caption}
                  </p>
                </div>
              </motion.div>

              {/* First row - Vertical image spanning 4 columns */}
              <motion.div
                className="md:col-span-4 h-[300px] md:h-[500px] relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.02 }}
              >
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                    {galleryImages[1].caption}
                  </p>
                </div>
              </motion.div>

              {/* Second row - Three equal images */}
              {galleryImages.slice(2, 5).map((image, index) => (
                <motion.div
                  key={image.id}
                  className="md:col-span-4 h-[250px] md:h-[300px] relative overflow-hidden rounded-lg group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: (index + 2) * 0.02 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Third row - Two larger images */}
              <motion.div
                className="md:col-span-6 h-[300px] md:h-[400px] relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                    {galleryImages[5].caption}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-6 h-[300px] md:h-[400px] relative overflow-hidden rounded-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <img
                  src={galleryImages[6].src}
                  alt={galleryImages[6].alt}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <p className="absolute bottom-4 left-4 right-4 text-white text-sm">
                    {galleryImages[6].caption}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial/Quote Section */}
        <section className="py-16 bg-black-light relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5"></div>
          <div className="gold-decoration w-[600px] h-[600px] -left-[300px] -bottom-[300px] opacity-10"></div>
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl text-gold mb-6">"</div>
              <p className="text-2xl italic mb-8 text-gray-200">
                Flexibilität trifft auf Luxus: Wöchentliche Törns, Routen nach
                Wind, Wetter und deinen Wünschen. Oft hast du die Buchten für
                dich allein.
              </p>
              <div className="text-gold font-bold">
                Race Attack Yacht Charter
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-r from-black to-black-light p-8 md:p-12 rounded-lg shadow-lg border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-lg mb-6">
                    Bereit, die Leinen{" "}
                    <span className="text-gold">loszuwerfen?</span>
                  </h2>
                  <p className="body-lg mb-8">
                    Melde dich für deinen Wunschtermin – wir freuen uns auf
                    dich! Erlebe unvergessliche Segeltörns auf der TOAD in den
                    Gewässern der Kanarischen Inseln.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/kontakt" className="gold-button">
                      Charter anfragen
                    </Link>
                    <Link to="/gallery" className="gold-outline-button">
                      Mehr Bilder ansehen
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <Marquee direction="right" speed={40} className="py-4">
                    {[
                      "Segelyacht",
                      "Oyster 70",
                      "Gran Canaria",
                      "Kanaren",
                      "Charter",
                      "Segeltörn",
                      "Luxus",
                      "TOAD",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="mx-4 text-2xl font-bold text-gold/80"
                      >
                        {item} <span className="text-white">•</span>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Yacht;
