import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { ChevronRight, Check, Music, Users, Coffee, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';
import { OptimizedImage } from '@/components/ui/optimized-image';
import SEO from '@/components/SEO';

const NightlinerPage: React.FC = () => {
  const { t, i18n } = useTranslation('nightliner');
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  const sixteenSleeperImages = ["/images/race-attack-truck-nightliner06.jpg", "/images/Livio1-1.jpg", "/images/Livio20-1.jpg", "/images/Livio25-1.jpg", "/images/Livio45-1.jpg", "/images/Livio49-2.jpg"];
  const twelveSleeperImages = ["/images/race-attack-truck-nightliner05.jpg", "/images/lounge-front_lbb-1.jpg", "/images/dsc07852_lbb-1.jpg", "/images/backloungebreit_lbb-1.jpg", "/images/bettbreit_lbb-1.jpg"];
  const toggleGallery = (gallery: string) => {
    if (activeGallery === gallery) {
      setActiveGallery(null);
    } else {
      setActiveGallery(gallery);
    }
  };

  // New feature data for the benefits section
  const nightlinerBenefits = [
    { icon: <Users className="w-8 h-8 text-gold" />, key: 'sleep' },
    { icon: <Coffee className="w-8 h-8 text-gold" />, key: 'kitchen' },
    { icon: <Home className="w-8 h-8 text-gold" />, key: 'lounge' },
    { icon: <Music className="w-8 h-8 text-gold" />, key: 'music' }
  ];
  
  // Get translation data safely
  const benefitsRaw = t('benefits.items', { returnObjects: true });
  const benefitsItems = Array.isArray(benefitsRaw) ? benefitsRaw : [];
  
  const featuresRaw = t('introduction.features', { returnObjects: true });
  const introductionFeatures = Array.isArray(featuresRaw) ? featuresRaw : [];
  
  const scenariosRaw = t('usageScenarios.scenarios', { returnObjects: true });
  const usageScenarios = Array.isArray(scenariosRaw) ? scenariosRaw : [];
  
  const faqRaw = t('faq.items', { returnObjects: true });
  const faqItems = Array.isArray(faqRaw) ? faqRaw : [];
  
  const sixteenRaw = t('models.sixteenSleeper.equipment', { returnObjects: true });
  const sixteenSleeperEquipment = Array.isArray(sixteenRaw) ? sixteenRaw : [];
  
  const twelveRaw = t('models.twelveSleeper.equipment', { returnObjects: true });
  const twelveSleeperEquipment = Array.isArray(twelveRaw) ? twelveRaw : [];
  
  // Enhanced keywords for nightliner bookings
  const enhancedKeywords = i18n.language === 'de'
    ? "Nightliner mieten, VIP Nightliner, Tourbus mieten Schweiz, Nightliner Schweiz, Nightliner Europa, Luxus Tourbus, Künstlerbus mieten, Sleeper Bus Schweiz, Tour Bus Vermietung, Nightliner 12 Schlafplätze, Nightliner 16 Schlafplätze, Premium Tourbus mieten, Musiker Tourbus Schweiz, Band Bus mieten Europa, Festival Bus Schweiz, Tournee Transport Europa, Nightliner mit Fahrer, Tour Bus mit Küche, Nightliner mit Bad, Race Attack Nightliner"
    : "Nightliner rental, VIP nightliner, tour bus rental Switzerland, nightliner Switzerland, nightliner Europe, luxury tour bus, artist bus rental, sleeper bus Switzerland, tour bus hire, nightliner 12 berths, nightliner 16 berths, premium tour bus rental, musician tour bus Switzerland, band bus rental Europe, festival bus Switzerland, tour transport Europe, nightliner with driver, tour bus with kitchen, nightliner with bathroom, Race Attack nightliner";
  
  // Comprehensive service schema
  const nightlinerServiceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://race-attack.ch/nightliner#service",
      "name": "VIP Nightliner Tour Bus Rental",
      "provider": {
        "@type": "Organization",
        "name": "Race Attack",
        "@id": "https://race-attack.ch/#organization"
      },
      "serviceType": "Luxury Tour Bus Rental",
      "description": i18n.language === 'de'
        ? "Premium VIP Nightliner mit 12 oder 16 Schlafplätzen für Künstler und Bands auf Tour. Vollausgestattete Luxus-Tourbusse mit Küche, Bad, Lounge und Entertainment-System."
        : "Premium VIP nightliner with 12 or 16 berths for artists and bands on tour. Fully equipped luxury tour buses with kitchen, bathroom, lounge and entertainment system.",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Switzerland"
        },
        {
          "@type": "Country", 
          "name": "Germany"
        },
        {
          "@type": "Country",
          "name": "Austria"
        },
        {
          "@type": "Country",
          "name": "France"
        },
        {
          "@type": "Country",
          "name": "Italy"
        },
        {
          "@type": "Continent",
          "name": "Europe"
        }
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "16-Sleeper VIP Nightliner",
          "description": i18n.language === 'de' 
            ? "Luxus-Nightliner mit 16 Schlafplätzen, vorderer und hinterer Lounge, voll ausgestatteter Küche"
            : "Luxury nightliner with 16 berths, front and rear lounge, fully equipped kitchen",
          "priceRange": "€€€€",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer", 
          "name": "12-Sleeper VIP Nightliner",
          "description": i18n.language === 'de'
            ? "Komfortabler Nightliner mit 12 Schlafplätzen, geräumiger Lounge und moderner Ausstattung"
            : "Comfortable nightliner with 12 berths, spacious lounge and modern equipment",
          "priceRange": "€€€",
          "availability": "https://schema.org/InStock"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Nightliner Fleet",
        "itemListElement": [
          {
            "@type": "Vehicle",
            "name": "16-Sleeper VIP Nightliner",
            "vehicleConfiguration": "Tour Bus",
            "numberOfDoors": 2,
            "seatingCapacity": 16,
            "vehicleSpecialUsage": "Tour Bus"
          },
          {
            "@type": "Vehicle",
            "name": "12-Sleeper VIP Nightliner",
            "vehicleConfiguration": "Tour Bus", 
            "numberOfDoors": 2,
            "seatingCapacity": 12,
            "vehicleSpecialUsage": "Tour Bus"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Race Attack VIP Nightliner Fleet",
      "description": i18n.language === 'de'
        ? "Luxuriöse Tourbusse mit 12 oder 16 Schlafplätzen, Küche, Badezimmer und Entertainment-System für Musiker und Künstler auf Tour."
        : "Luxury tour buses with 12 or 16 sleeping berths, kitchen, bathroom and entertainment system for musicians and artists on tour.",
      "brand": {
        "@type": "Brand",
        "name": "Race Attack"
      },
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "CHF",
        "priceRange": "€€€-€€€€",
        "url": "https://race-attack.ch/nightliner"
      },
      "image": [
        "https://race-attack.ch/images/nightliner-ps.jpg",
        "https://race-attack.ch/images/race-attack-truck-nightliner06.jpg",
        "https://race-attack.ch/images/race-attack-truck-nightliner05.jpg"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1", 
        "ratingCount": "47"
      }
    }
  ];
  
  // FAQ Schema markup
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;
  
  // Combine all schemas
  const allSchemas = faqSchema 
    ? [...nightlinerServiceSchema, faqSchema]
    : nightlinerServiceSchema;

  return (
    <>
      <SEO
        title={t('meta.title')}
        description={i18n.language === 'de'
          ? "VIP Nightliner mieten für Ihre Tour durch Europa. Luxus-Tourbusse mit 12-16 Schlafplätzen, Küche, Bad & Premium-Ausstattung. ✓ Erfahrene Fahrer ✓ 24/7 Support ✓ Jetzt anfragen!"
          : "Rent VIP nightliner for your European tour. Luxury tour buses with 12-16 berths, kitchen, bathroom & premium equipment. ✓ Experienced drivers ✓ 24/7 support ✓ Book now!"}
        keywords={enhancedKeywords}
        image="/images/nightliner-ps.jpg"
        type="service"
        schemaMarkup={allSchemas}
        canonicalUrl="https://race-attack.ch/nightliner"
      />
      <Header />
      <main className="pt-24 bg-black">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <OptimizedImage src="/images/nightliner-ps.jpg" alt="VIP Nightliner - Luxuriöser Tourbus für Musiker und Künstler" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center">
              <h1 className="heading-xl text-white uppercase mb-4 animate-fade-in" data-aos="fade-in">
                {t('hero.title')} <span className="text-gold">{t('hero.titleHighlight')}</span>
              </h1>
              <div className="gold-line mx-auto mb-6 animate-fade-in" data-aos="fade-in" data-aos-delay="50"></div>
              <p className="text-xl text-white max-w-2xl mx-auto animate-fade-in" data-aos="fade-in" data-aos-delay="75">
                {t('hero.subtitle')}
              </p>
              <div className="mt-8 animate-fade-in" data-aos="fade-in" data-aos-delay="100">
                <Link to={i18n.language === 'en' ? '/contact' : '/kontakt'} className="gold-button">
                  {t('hero.cta')}
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
              <Link to="/" className="hover:text-gold transition-colors">{t('breadcrumb.home')}</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gold">{t('breadcrumb.current')}</span>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6" data-aos="fade-right">
                  {t('introduction.title')} <span className="text-gold">{t('introduction.titleHighlight')}</span> {t('introduction.titleSuffix')}
                </h2>
                <div className="gold-line mb-8 w-24"></div>
                <p className="body-lg mb-6 text-gray-300" data-aos="fade-right" data-aos-delay="50">
                  {t('introduction.description1')}
                </p>
                <p className="body-lg mb-8 text-gray-300" data-aos="fade-right" data-aos-delay="75">
                  {t('introduction.description2')}
                </p>
                <div className="flex flex-wrap gap-4 mb-8" data-aos="fade-right" data-aos-delay="100">
                  {introductionFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center bg-black-light px-4 py-2 rounded-full">
                      <Check size={16} className="text-gold mr-2" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                <OptimizedImage src="/images/Livio49-2.jpg" alt="Race Attack Nightliner - Komfortable Innenausstattung" className="rounded-lg shadow-2xl z-10 relative" loading="lazy" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6" data-aos="fade-in">
                {t('benefits.title')} <span className="text-gold">{t('benefits.titleHighlight')}</span>
              </h2>
              <div className="gold-line mx-auto mb-8" data-aos="fade-in" data-aos-delay="50"></div>
              <p className="body-lg max-w-3xl mx-auto text-gray-300 mb-12" data-aos="fade-in" data-aos-delay="75">
                {t('benefits.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefitsItems.map((benefit, index) => (
                <div key={index} className="bg-black p-6 rounded-lg border border-gold/20 shadow-lg" data-aos="fade-up" data-aos-delay={index * 30}>
                  <div className="flex justify-center mb-4">
                    {nightlinerBenefits[index]?.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gold">{benefit.title}</h3>
                  <p className="text-center text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Models Content */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6" data-aos="fade-in">
                {t('models.title')} <span className="text-gold">{t('models.titleHighlight')}</span> {t('models.titleSuffix')}
              </h2>
              <div className="gold-line mx-auto mb-8" data-aos="fade-in" data-aos-delay="50"></div>
              <p className="body-lg mb-8 text-gray-300 max-w-3xl mx-auto" data-aos="fade-in" data-aos-delay="75">
                {t('models.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* 16 Sleeper */}
              <div className="glass-card p-8 rounded-lg" data-aos="fade-right">
                <h2 className="heading-md mb-6 gold-text">16 Sleeper</h2>
                <p className="body-md mb-6 text-gray-300">
                  Einstöckiger Nightliner/Tourbus mit weitläufigem Raumgefühl und großen Fenstern.
                  Luxuriöse Innenausstattung nach höchstem Standard für Ihre Tour durch Europa.
                </p>
                
                {/* Main Feature Image */}
                <div className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg" onClick={() => toggleGallery('16sleeper')}>
                  <OptimizedImage src={sixteenSleeperImages[0]} alt="16 Sleeper Nightliner - Premium Tourbus mit 16 Schlafplätzen" className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white bg-gold px-4 py-2 rounded-md">{t('models.galleryOpen')}</span>
                  </div>
                </div>

                {/* Features */}
                <h3 className="text-xl font-semibold mb-4 text-white">{t('models.sixteenSleeper.equipmentTitle')}</h3>
                <ul className="text-gray-300 space-y-2 mb-6">
                  {sixteenSleeperEquipment.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to={i18n.language === 'en' ? '/contact' : '/kontakt'} className="gold-button inline-block">
                  {t('models.cta')}
                </Link>

                {/* Gallery Modal */}
                {activeGallery === '16sleeper' && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-5xl">
                      <div className="flex justify-end mb-4">
                        <button onClick={() => setActiveGallery(null)} className="text-white hover:text-gold">
                          {t('models.galleryClose')}
                        </button>
                      </div>
                      <Carousel>
                        <CarouselContent>
                          {sixteenSleeperImages.map((img, index) => (
                            <CarouselItem key={index}>
                              <div className="flex items-center justify-center h-[60vh]">
                                <OptimizedImage src={img} alt={`16 Sleeper Nightliner Bild ${index + 1} - Innenraum und Ausstattung`} className="max-h-full max-w-full object-contain" loading="lazy" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2 border-gold text-gold hover:bg-gold/20" />
                        <CarouselNext className="right-2 border-gold text-gold hover:bg-gold/20" />
                      </Carousel>
                    </div>
                  </div>}
              </div>

              {/* 12 Sleeper */}
              <div className="glass-card p-8 rounded-lg" data-aos="fade-left">
                <h2 className="heading-md mb-6 gold-text">12 Sleeper</h2>
                <p className="body-md mb-6 text-gray-300">
                  Einstöckiger Nightliner/Tourbus mit weitläufigem Raumgefühl und großen Fenstern.
                  Luxuriöse Innenausstattung nach höchstem Standard für Ihre Tour durch Europa.
                </p>
                
                {/* Main Feature Image */}
                <div className="relative w-full h-64 mb-6 cursor-pointer overflow-hidden rounded-lg" onClick={() => toggleGallery('12sleeper')}>
                  <OptimizedImage src={twelveSleeperImages[0]} alt="12 Sleeper Nightliner - Premium Tourbus mit 12 Schlafplätzen" className="w-full h-full object-cover transition-transform duration-200 hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white bg-gold px-4 py-2 rounded-md">{t('models.galleryOpen')}</span>
                  </div>
                </div>

                {/* Features */}
                <h3 className="text-xl font-semibold mb-4 text-white">{t('models.twelveSleeper.equipmentTitle')}</h3>
                <ul className="text-gray-300 space-y-2 mb-6">
                  {twelveSleeperEquipment.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to={i18n.language === 'en' ? '/contact' : '/kontakt'} className="gold-button inline-block">
                  {t('models.cta')}
                </Link>

                {/* Gallery Modal */}
                {activeGallery === '12sleeper' && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="w-full max-w-5xl">
                      <div className="flex justify-end mb-4">
                        <button onClick={() => setActiveGallery(null)} className="text-white hover:text-gold">
                          {t('models.galleryClose')}
                        </button>
                      </div>
                      <Carousel>
                        <CarouselContent>
                          {twelveSleeperImages.map((img, index) => (
                            <CarouselItem key={index}>
                              <div className="flex items-center justify-center h-[60vh]">
                                <OptimizedImage src={img} alt={`12 Sleeper Nightliner Bild ${index + 1} - Innenraum und Ausstattung`} className="max-h-full max-w-full object-contain" loading="lazy" />
                              </div>
                            </CarouselItem>
                          ))}
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
              <h2 className="heading-lg mb-6" data-aos="fade-in">
                Einsatzmöglichkeiten unserer <span className="text-gold">Nightliner</span>
              </h2>
              <div className="gold-line mx-auto mb-8" data-aos="fade-in" data-aos-delay="50"></div>
              <p className="body-lg mb-8 text-gray-300 max-w-3xl mx-auto" data-aos="fade-in" data-aos-delay="75">
                Unsere Nightliner bieten vielseitige Einsatzmöglichkeiten für unterschiedliche Bedürfnisse. Erfahren Sie, wie Sie von unserem Premium-Service profitieren können.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {usageScenarios.map((scenario, index) => (
                <Card key={index} className="bg-black border border-gold/20" data-aos="fade-up" data-aos-delay={index * 30}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gold">{scenario.title}</h3>
                    <p className="text-gray-300">{scenario.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/5"></div>
          <div className="gold-decoration w-[600px] h-[600px] -left-[300px] -bottom-[300px] opacity-10"></div>
          <div className="container max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-5xl text-gold mb-6" data-aos="fade-in">"</div>
              <p className="text-2xl italic mb-8 text-gray-200" data-aos="fade-in" data-aos-delay="50">
                Mit unseren Race Attack Nightlinern bieten wir Künstlern und Bands ein rollendes Zuhause, das Komfort und Funktionalität perfekt verbindet. Erholung zwischen den Auftritten garantiert.
              </p>
              <div className="text-gold font-bold" data-aos="fade-in" data-aos-delay="75">Race Attack Team</div>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6" data-aos="fade-in">
                Häufig gestellte <span className="text-gold">Fragen</span>
              </h2>
              <div className="gold-line mx-auto mb-8" data-aos="fade-in" data-aos-delay="100"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-black-light rounded-lg p-6 border border-gold/20" data-aos="fade-up" data-aos-delay={index * 30}>
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                  <Separator className="bg-gold/20 my-3" />
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-black-light">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-black to-black-light p-8 md:p-12 rounded-lg shadow-lg border border-gold/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-lg mb-6" data-aos="fade-right">
                    Bereit für Ihre nächste <span className="text-gold">Tour?</span>
                  </h2>
                  <p className="body-lg mb-8 text-gray-300" data-aos="fade-right" data-aos-delay="50">
                    Kontaktieren Sie uns jetzt für ein individuelles Angebot und sichern Sie sich Ihren premium Nightliner für Ihre Europa-Tour. Unser erfahrenes Team berät Sie gerne.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-right" data-aos-delay="75">
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
    </>
  );
};
export default NightlinerPage;