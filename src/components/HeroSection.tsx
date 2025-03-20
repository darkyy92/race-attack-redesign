
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

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
      {/* Video Background with darker overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/race-attack-poster.jpg"
        >
          <source src="/race-attack-video.mp4" type="video/mp4" />
        </video>
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
            <Link 
              to="/nightliner" 
              className="group relative overflow-hidden rounded-md bg-gold px-8 py-3 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(203,154,61,0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center transition-transform duration-500 group-hover:translate-x-2">
                Nightliner entdecken
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Link>
            
            <Link 
              to="/kontakt" 
              className="group relative overflow-hidden rounded-md bg-transparent px-8 py-3 text-gold border-2 border-gold font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(203,154,61,0.3)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center transition-transform duration-500 group-hover:translate-x-2">
                Kontakt
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 bg-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
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
