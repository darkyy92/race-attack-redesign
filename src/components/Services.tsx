
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation('home');
  
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

  const services: Service[] = [
    {
      title: t('services.nightliner.title'),
      description: t('services.nightliner.description'),
      features: [
        t('services.nightliner.features.0'),
        t('services.nightliner.features.1'),
        t('services.nightliner.features.2'),
        t('services.nightliner.features.3')
      ],
      image: "/images/nightliner-ps.jpg",
      link: "/nightliner"
    },
    {
      title: t('services.tourCrew.title'),
      description: t('services.tourCrew.description'),
      features: [
        t('services.tourCrew.features.0'),
        t('services.tourCrew.features.1'),
        t('services.tourCrew.features.2'),
        t('services.tourCrew.features.3')
      ],
      image: "/images/Rafael-Salzmann-768x426.jpg",
      link: "/tour-crew"
    },
    {
      title: t('services.truck.title'),
      description: t('services.truck.description'),
      features: [
        t('services.truck.features.0'),
        t('services.truck.features.1'),
        t('services.truck.features.2'),
        t('services.truck.features.3')
      ],
      image: "/images/race-attack-truck-nightliner04.jpg",
      link: "/truck"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-gradient-to-b from-black to-black-light">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg uppercase mb-4">
            {t('services.sectionTitle')} <span className="gold-text">{t('services.sectionTitleHighlight')}</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto text-gray-300">
            {t('services.sectionSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="heading-sm mb-3 gold-text">{service.title}</h3>
                <p className="body-md mb-4 text-gray-300">{service.description}</p>
                
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={18} className="text-gold mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors"
                >
                  {t('services.learnMore')} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
