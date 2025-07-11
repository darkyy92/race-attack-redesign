import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, Music, User, ChevronRight, PhoneCall } from 'lucide-react';

interface CrewMemberProps {
  name: string;
  position: string;
  bands?: string;
  image: string;
  reverse?: boolean;
  index: number;
}

const CrewMember: React.FC<CrewMemberProps> = ({ name, position, bands, image, reverse = false, index }) => {
  const { t } = useTranslation('tourCrew');
  
  return (
    <div 
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-20 rounded-lg overflow-hidden glass-card border border-gold/10 shadow-xl`}
      data-aos={reverse ? "fade-left" : "fade-right"}
      data-aos-delay={30 * index}
    >
      <div className="w-full md:w-2/5 h-80 md:h-auto relative overflow-hidden">
        <img 
          src={image} 
          alt={t('team.imageAlt', { name, position })} 
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
          loading={index < 3 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
      </div>
      <div className="w-full md:w-3/5 flex flex-col justify-center p-8">
        <h3 className="text-3xl font-bold text-white mb-3">{name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <Briefcase className="text-gold" size={18} />
          <p className="text-white/90 text-lg font-medium">{position}</p>
        </div>
        {bands && (
          <div className="flex items-start gap-2 mb-5">
            <Music className="text-gold mt-1" size={18} />
            <p className="text-white/80">{bands}</p>
          </div>
        )}
        <div className="h-0.5 w-20 bg-gradient-to-r from-gold to-gold-light mb-5"></div>
      </div>
    </div>
  );
};

const TourCrew: React.FC = () => {
  const { t, i18n } = useTranslation('tourCrew');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('meta.title');
  }, [t]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Helmet>
        <title>{t('meta.longTitle')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href={`https://race-attack.ch${i18n.language === 'en' ? '/en' : ''}/tour-crew`} />
        <meta property="og:title" content={t('meta.ogTitle')} />
        <meta property="og:description" content={t('meta.ogDescription')} />
        <meta property="og:url" content={`https://race-attack.ch${i18n.language === 'en' ? '/en' : ''}/tour-crew`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.twitterTitle')} />
        <meta name="twitter:description" content={t('meta.twitterDescription')} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Tour Crew Services",
              "provider": {
                "@type": "Organization",
                "name": "Race Attack GmbH",
                "url": "https://race-attack.ch"
              },
              "description": "${t('meta.ogDescription')}",
              "serviceType": "Tour Support",
              "areaServed": ["Switzerland", "Europe"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tour Crew Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "${t('services.guitarTech')}"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "${t('services.soundEngineer')}"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "${t('services.tourManager')}"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "${t('services.backliner')}"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-4 md:px-6 bg-gradient-to-b from-black to-black-light">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="gold-decoration w-96 h-96 top-10 left-1/4"></div>
          <div className="gold-decoration w-64 h-64 bottom-10 right-1/4"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6 animate-fade-in">
              <span className="text-gold">{t('hero.title')}</span> {t('hero.titleHighlight')}
            </h1>
            <div className="flex justify-center mb-10">
              <Separator className="w-32 h-1 bg-gradient-to-r from-gold to-gold-light animate-fade-in" />
            </div>
            
            <div className="glass-card p-8 md:p-12 rounded-lg mb-16 animate-fade-in">
              <h2 className="text-xl md:text-2xl text-white mb-6 font-heading">
                {t('hero.subtitle')}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {t('hero.description')}
              </p>
              <p className="text-lg text-white/80 mb-8">
                {t('hero.additionalInfo')} <Link to={i18n.language === 'en' ? "/en/nightliner" : "/nightliner"} className="text-gold hover:text-gold-light">{t('hero.nightlinerLink')}</Link> {t('hero.additionalInfoEnd')}
              </p>
              <div className="flex justify-center">
                <Separator className="w-32 h-0.5 bg-gold/70" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 relative">
            <span className="relative z-10">{t('team.sectionTitle')} <span className="text-gold">{t('team.sectionTitleHighlight')}</span></span>
            <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-6xl text-gold/5 font-bold">{t('team.backgroundText')}</span>
          </h2>
          
          <CrewMember 
            name={t('team.members.rafael.name')} 
            position={t('team.members.rafael.position')} 
            bands={t('team.members.rafael.bands')}
            image="https://race-attack.ch/wp-content/uploads/2018/10/Rafael-Salzmann-768x426.jpg"
            index={1}
          />
          
          <CrewMember 
            name={t('team.members.cal.name')} 
            position={t('team.members.cal.position')} 
            bands={t('team.members.cal.bands')}
            image="https://race-attack.ch/wp-content/uploads/2018/10/Cal-South-768x426.jpg"
            reverse={true}
            index={2}
          />
          
          <CrewMember 
            name={t('team.members.tom.name')} 
            position={t('team.members.tom.position')}
            bands={t('team.members.tom.bands', { defaultValue: undefined })}
            image="https://race-attack.ch/wp-content/uploads/2018/10/tom1-768x426.jpg"
            index={3}
          />
          
          <CrewMember 
            name={t('team.members.szymon.name')} 
            position={t('team.members.szymon.position')} 
            bands={t('team.members.szymon.bands')}
            image="https://race-attack.ch/wp-content/uploads/2018/10/Shymon-768x426.jpg"
            reverse={true}
            index={4}
          />
          
          <CrewMember 
            name={t('team.members.sven.name')} 
            position={t('team.members.sven.position')}
            image="https://race-attack.ch/wp-content/uploads/2018/10/sven-768x426.jpg"
            index={5}
          />
          
          <CrewMember 
            name={t('team.members.daniel.name')} 
            position={t('team.members.daniel.position')}
            image="https://race-attack.ch/wp-content/uploads/2018/10/daniel-768x426.jpg"
            reverse={true}
            index={6}
          />
          
          <CrewMember 
            name={t('team.members.chad.name')} 
            position={t('team.members.chad.position')}
            image="https://race-attack.ch/wp-content/uploads/2018/10/chad-768x426.jpg"
            index={7}
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-black-light to-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="gold-decoration w-64 h-64 bottom-10 right-10 opacity-30"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="glass-card border-gold/20 p-8 md:p-12 shadow-2xl animate-fade-in">
            <CardContent className="p-0 text-center">
              <h2 className="heading-lg text-white mb-6">{t('cta.title')}</h2>
              <p className="text-white/80 mb-10 max-w-3xl mx-auto">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                <Link to={i18n.language === 'en' ? "/en/contact" : "/kontakt"}>
                  <Button className="gold-button flex items-center gap-2">
                    <span>{t('cta.requestQuote')}</span>
                    <ChevronRight size={18} />
                  </Button>
                </Link>
                <a href="tel:+41786061032">
                  <Button variant="outline" className="text-gold border-gold hover:bg-gold/10 flex items-center gap-2">
                    <PhoneCall size={18} />
                    <span>{t('cta.phoneNumber')}</span>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TourCrew;
