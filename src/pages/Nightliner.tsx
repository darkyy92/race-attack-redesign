import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { ChevronRight, Check, Music, Users, Coffee, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
const NightlinerPage: React.FC = () => {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  // SEO optimization - set title and meta tags
  useEffect(() => {
    document.title = "VIP Nightliner Mieten | Luxus Tourbusse für Bands & Künstler | Schweiz & Europa";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mieten Sie hochwertige VIP Nightliner für Ihre Tour durch Europa. 12 oder 16 Schlafplätze, luxuriöse Ausstattung, Küche und Badezimmer. Ihr Premium Tourbus-Partner in der Schweiz.');
    }
  }, []);
  const sixteenSleeperImages = ["https://race-attack.ch/wp-content/uploads/2022/05/race-attack-truck-nightliner06.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/Livio1-1.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/Livio20-1.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/Livio25-1.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/Livio45-1.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/Livio49-2.jpg"];
  const twelveSleeperImages = ["https://race-attack.ch/wp-content/uploads/2022/05/race-attack-truck-nightliner05.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/lounge-front_lbb-1.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/dsc07852_lbb-1.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/backloungebreit_lbb-1.jpg", "https://race-attack.ch/wp-content/uploads/2018/10/bettbreit_lbb-1.jpg"];
  const toggleGallery = (gallery: string) => {
    if (activeGallery === gallery) {
      setActiveGallery(null);
    } else {
      setActiveGallery(gallery);
    }
  };

  // New feature data for the benefits section
  const nightlinerBenefits = [{
    icon: <Users className="w-8 h-8 text-gold" />,
    title: "Schlafkomfort",
    description: "Bequeme Schlafkojen mit individueller Klimatisierung für jedes Mitglied Ihrer Tour-Crew."
  }, {
    icon: <Coffee className="w-8 h-8 text-gold" />,
    title: "Vollausgestattete Küche",
    description: "Selbstversorgung leicht gemacht mit Kühlschrank, Mikrowelle, Kaffeemaschine und mehr."
  }, {
    icon: <Home className="w-8 h-8 text-gold" />,
    title: "Luxuriöse Lounges",
    description: "Großzügige Aufenthaltsbereiche mit komfortablen Ledersitzen und Entertainment-Systemen."
  }, {
    icon: <Music className="w-8 h-8 text-gold" />,
    title: "Für Musiker optimiert",
    description: "Speziell für die Bedürfnisse von Bands und Künstlern auf Tour konzipiert."
  }];

  // Additional usage scenarios for the Nightliner
  const usageScenarios = [{
    title: "Musik-Tourneen",
    description: "Ideal für Bands und Künstler auf Europa-Tournee mit kurzen oder langen Strecken zwischen Auftritten."
  }, {
    title: "Festival-Saison",
    description: "Perfekt für die Festival-Saison mit bequemer Übernachtungsmöglichkeit direkt am Veranstaltungsort."
  }, {
    title: "Produktionsteams",
    description: "Geeignet für Film- und TV-Produktionsteams, die flexibel und komfortabel reisen möchten."
  }, {
    title: "VIP-Transport",
    description: "Luxuriöser Transport für VIPs, Geschäftsreisen oder besondere Anlässe mit höchstem Komfort."
  }];
  return <>
      <Helmet>
        <title>VIP Nightliner Mieten | Luxus Tourbusse für Bands & Künstler | Schweiz & Europa</title>
        <meta name="description" content="Mieten Sie hochwertige VIP Nightliner für Ihre Tour durch Europa. 12 oder 16 Schlafplätze, luxuriöse Ausstattung, Küche und Badezimmer. Ihr Premium Tourbus-Partner in der Schweiz." />
        <meta name="keywords" content="Nightliner, Tourbus mieten, Nightliner Schweiz, Nightliner Europa, Tour Crew, VIP Bus, Bandbus" />
        <link rel="canonical" href="https://race-attack.ch/nightliner" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://race-attack.ch/nightliner" />
        <meta property="og:title" content="VIP Nightliner Mieten | Luxus Tourbusse für Bands & Künstler" />
        <meta property="og:description" content="Premium Nightliner/Tourbusse mit 12 oder 16 Schlafplätzen für Ihre Tour durch Europa. Höchster Komfort für Bands und Künstler." />
        <meta property="og:image" content="https://race-attack.ch/wp-content/uploads/2018/10/nightliner-ps.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://race-attack.ch/nightliner" />
        <meta property="twitter:title" content="VIP Nightliner Mieten | Luxus Tourbusse für Bands & Künstler" />
        <meta property="twitter:description" content="Premium Nightliner/Tourbusse mit 12 oder 16 Schlafplätzen für Ihre Tour durch Europa. Höchster Komfort für Bands und Künstler." />
        <meta property="twitter:image" content="https://race-attack.ch/wp-content/uploads/2018/10/nightliner-ps.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Race Attack VIP Nightliner",
          "description": "Luxuriöse Tourbusse mit 12 oder 16 Schlafplätzen, Küche, Badezimmer und Entertainment-System für Musiker und Künstler auf Tour.",
          "brand": {
            "@type": "Brand",
            "name": "Race Attack"
          },
          "offers": {
            "@type": "AggregateOffer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "CHF",
            "url": "https://race-attack.ch/nightliner"
          },
          "image": "https://race-attack.ch/wp-content/uploads/2018/10/nightliner-ps.jpg"
        })}
        </script>
      </Helmet>
      <Header />
      <main className="pt-24 bg-black">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img src="https://race-attack.ch/wp-content/uploads/2018/10/nightliner-ps.jpg" alt="VIP Nightliner - Luxuriöser Tourbus für Musiker und Künstler" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <h1 className="heading-xl text-white uppercase mb-4">
                VIP <span className="text-gold">Nightliner</span>
              </h1>
              <div className="gold-line mx-auto mb-6"></div>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Premium Tourbusse für anspruchsvolle Künstler und Bands auf Europa-Tournee
              </p>
              <div className="mt-8">
                <Link to="/kontakt" className="gold-button">
                  Jetzt Verfügbarkeit prüfen
                </Link>
              </div>
            </div>
          </div>
          <div className="gold-decoration w-[400px] h-[400px] -right-32 -bottom-32 opacity-20"></div>
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

        {/* Introduction Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">
                  Luxuriöse <span className="text-gold">Tourbusse</span> für Ihre Europa-Tour
                </h2>
                <div className="gold-line mb-8 w-24"></div>
                <p className="body-lg mb-6 text-gray-300">
                  Unsere VIP Nightliner sind speziell für die anspruchsvollen Bedürfnisse von Künstlern, Bands und deren Crews konzipiert. Mit 12 oder 16 komfortablen Schlafplätzen, vollausgestatteter Küche und modernem Badezimmer bieten wir Ihnen ein echtes Zuhause auf Rädern.
                </p>
                <p className="body-lg mb-8 text-gray-300">
                  Beide Nightliner verfügen über ein weitläufiges Raumgefühl, große Fenster und eine luxuriöse Innenausstattung nach höchstem Standard. Reisen Sie komfortabel und ausgeruht von Auftritt zu Auftritt durch ganz Europa.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Komfortable Schlafkojen", "Voll ausgestattete Küche", "Moderne Badezimmer", "Entertainment-System", "Klimaanlage"].map((feature, index) => <div key={index} className="flex items-center bg-black-light px-4 py-2 rounded-full">
                      <Check size={16} className="text-gold mr-2" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>)}
                </div>
              </div>
              <div className="relative">
                <img src="https://race-attack.ch/wp-content/uploads/2018/10/Livio49-2.jpg" alt="Race Attack Nightliner - Komfortable Innenausstattung" className="rounded-lg shadow-2xl z-10 relative" loading="lazy" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">
                Vorteile unserer <span className="text-gold">Nightliner</span>
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="body-lg max-w-3xl mx-auto text-gray-300 mb-12">
                Erleben Sie die zahlreichen Vorteile unserer premium Nightliner, die speziell für die Bedürfnisse von Musikern und Künstlern auf Tour entwickelt wurden.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nightlinerBenefits.map((benefit, index) => <div key={index} className="bg-black p-6 rounded-lg border border-gold/20 shadow-lg">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gold">{benefit.title}</h3>
                  <p className="text-center text-gray-300">{benefit.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Models Content */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">
                Unsere <span className="text-gold">Nightliner</span> Modelle
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="body-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                Wählen Sie zwischen zwei erstklassigen Nightliner-Modellen, je nach Größe Ihrer Tour-Crew und Ihren spezifischen Anforderungen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* 16 Sleeper */}
              <div className="glass-card p-8 rounded-lg">
                <h2 className="heading-md mb-6 gold-text">16 Sleeper</h2>
                <p className="body-md mb-6 text-gray-300">
                  Einstöckiger Nightliner/Tourbus mit weitläufigem Raumgefühl und großen Fenstern. 
                  Luxuriöse Innenausstattung nach höchstem Standard für Ihre Tour durch Europa.
                </p>
                
                {/* Main Feature Image */}
                <div className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg" onClick={() => toggleGallery('16sleeper')}>
                  <img src={sixteenSleeperImages[0]} alt="16 Sleeper Nightliner - Premium Tourbus mit 16 Schlafplätzen" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
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
                {activeGallery === '16sleeper' && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-5xl">
                      <div className="flex justify-end mb-4">
                        <button onClick={() => setActiveGallery(null)} className="text-white hover:text-gold">
                          Schließen ×
                        </button>
                      </div>
                      <Carousel>
                        <CarouselContent>
                          {sixteenSleeperImages.map((img, index) => <CarouselItem key={index}>
                              <div className="flex items-center justify-center h-[60vh]">
                                <img src={img} alt={`16 Sleeper Nightliner Bild ${index + 1} - Innenraum und Ausstattung`} className="max-h-full max-w-full object-contain" loading="lazy" />
                              </div>
                            </CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 border-gold text-gold hover:bg-gold/20" />
                        <CarouselNext className="right-2 border-gold text-gold hover:bg-gold/20" />
                      </Carousel>
                    </div>
                  </div>}
              </div>

              {/* 12 Sleeper */}
              <div className="glass-card p-8 rounded-lg">
                <h2 className="heading-md mb-6 gold-text">12 Sleeper</h2>
                <p className="body-md mb-6 text-gray-300">
                  Einstöckiger Nightliner/Tourbus mit weitläufigem Raumgefühl und großen Fenstern. 
                  Luxuriöse Innenausstattung nach höchstem Standard für Ihre Tour durch Europa.
                </p>
                
                {/* Main Feature Image */}
                <div className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg" onClick={() => toggleGallery('12sleeper')}>
                  <img src={twelveSleeperImages[0]} alt="12 Sleeper Nightliner - Premium Tourbus mit 12 Schlafplätzen" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
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
                {activeGallery === '12sleeper' && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-5xl">
                      <div className="flex justify-end mb-4">
                        <button onClick={() => setActiveGallery(null)} className="text-white hover:text-gold">
                          Schließen ×
                        </button>
                      </div>
                      <Carousel>
                        <CarouselContent>
                          {twelveSleeperImages.map((img, index) => <CarouselItem key={index}>
                              <div className="flex items-center justify-center h-[60vh]">
                                <img src={img} alt={`12 Sleeper Nightliner Bild ${index + 1} - Innenraum und Ausstattung`} className="max-h-full max-w-full object-contain" loading="lazy" />
                              </div>
                            </CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 border-gold text-gold hover:bg-gold/20" />
                        <CarouselNext className="right-2 border-gold text-gold hover:bg-gold/20" />
                      </Carousel>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </section>

        {/* Usage Scenarios Section */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">
                Einsatzmöglichkeiten unserer <span className="text-gold">Nightliner</span>
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="body-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                Unsere Nightliner bieten vielseitige Einsatzmöglichkeiten für unterschiedliche Bedürfnisse. Erfahren Sie, wie Sie von unserem Premium-Service profitieren können.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {usageScenarios.map((scenario, index) => <Card key={index} className="bg-black border border-gold/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gold">{scenario.title}</h3>
                    <p className="text-gray-300">{scenario.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5"></div>
          <div className="gold-decoration w-[600px] h-[600px] -left-[300px] -bottom-[300px] opacity-10"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl text-gold mb-6">"</div>
              <p className="text-2xl italic mb-8 text-gray-200">
                Mit unseren Race Attack Nightlinern bieten wir Künstlern und Bands ein rollendes Zuhause, das Komfort und Funktionalität perfekt verbindet. Erholung zwischen den Auftritten garantiert.
              </p>
              <div className="text-gold font-bold">Race Attack Team</div>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">
                Häufig gestellte <span className="text-gold">Fragen</span>
              </h2>
              <div className="gold-line mx-auto mb-8"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {[{
              question: "Was ist ein Nightliner?",
              answer: "Ein Nightliner ist ein speziell ausgestatteter Tourbus mit Schlafplätzen, der hauptsächlich von Bands, Künstlern und deren Crews auf Tourneen genutzt wird. Unsere Nightliner bieten 12 oder 16 komfortable Schlafkojen, voll ausgestattete Küche, Badezimmer und Entertainment-Systeme."
            }, {
              question: "Wie viele Personen können in einem Nightliner übernachten?",
              answer: "Unser 12 Sleeper Nightliner bietet Platz für 12 Personen, während unser 16 Sleeper Nightliner über 16 Schlafplätze verfügt (12 in einem Hauptbereich und 4 in einem separaten Bereich)."
            }, {
              question: "Kann man im Nightliner kochen?",
              answer: "Ja, beide Nightliner verfügen über eine voll ausgestattete Küche mit Kühlschrank, Kaffeemaschine, Mikrowelle, Toaster und Wasserkocher, sodass Sie unterwegs Mahlzeiten zubereiten können."
            }, {
              question: "Gibt es eine Toilette und Dusche im Nightliner?",
              answer: "Ja, unsere Nightliner bieten ein vollwertiges Badezimmer mit Dusche und Toilette (kein Chemie-WC) sowie einen separaten Duschraum für maximalen Komfort."
            }].map((faq, index) => <div key={index} className="bg-black-light rounded-lg p-6 border border-gold/20">
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                  <Separator className="bg-gold/20 my-3" />
                  <p className="text-gray-300">{faq.answer}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-black to-black-light p-8 md:p-12 rounded-lg shadow-lg border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-lg mb-6">
                    Bereit für Ihre nächste <span className="text-gold">Tour?</span>
                  </h2>
                  <p className="body-lg mb-8 text-gray-300">
                    Kontaktieren Sie uns jetzt für ein individuelles Angebot und sichern Sie sich Ihren premium Nightliner für Ihre Europa-Tour. Unser erfahrenes Team berät Sie gerne.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/kontakt" className="gold-button">
                      Jetzt anfragen
                    </Link>
                    <Link to="/gallery" className="gold-outline-button">
                      Mehr Bilder ansehen
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-black/50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-gold">Kontaktieren Sie uns</h3>
                    <div className="space-y-3 text-gray-300">
                      <p>Telefon: +41 78 606 10 32</p>
                      <p>Email: info@race-attack.ch</p>
                      <p>Verfügbar für Touren in der Schweiz und ganz Europa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default NightlinerPage;