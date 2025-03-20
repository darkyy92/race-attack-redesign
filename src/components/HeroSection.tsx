
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background with darker overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <iframe 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[100vw] min-h-[56.25vw]"
          src="https://www.youtube.com/embed/8B6nH6BS5dw?autoplay=1&controls=0&loop=1&mute=1&playlist=8B6nH6BS5dw&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
          title="Race Attack Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Gold decorative elements */}
      <div className="gold-decoration w-[600px] h-[600px] -right-[200px] -bottom-[200px] opacity-30 z-0"></div>
      <div className="gold-decoration w-[400px] h-[400px] -left-[100px] top-[20%] opacity-20 z-0"></div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 z-20 text-center">
        <div className="animate-fade-in">
          {/* Race-Attack Logo large */}
          <h1 className="heading-xl uppercase mb-10 font-bold tracking-wider">
            <span className="block text-white">RACE-</span>
            <span className="block text-white mt-[10px]">ATTACK</span>
          </h1>
          
          <p className="body-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Premium Nightliner und Tour Crew für anspruchsvolle Künstler und Bands in der Schweiz und ganz Europa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
            <Link to="/nightliner" className="w-full sm:w-auto">
              <InteractiveHoverButton text="Nightliner entdecken" />
            </Link>
            <Link to="/kontakt" className="gold-outline-button w-full sm:w-auto">
              Kontakt
            </Link>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <button 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-gold animate-bounce transition-colors"
          onClick={scrollToNextSection}
          aria-label="Nach unten scrollen"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
