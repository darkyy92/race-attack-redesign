
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slightly slower playback for more dramatic effect
    }
  }, []);

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
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="video-background"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://race-attack.ch/wp-content/uploads/2022/05/Race-Attack-Video-Compressed.mp4" type="video/mp4" />
      </video>
      
      {/* Gold decorative element */}
      <div className="gold-decoration w-[600px] h-[600px] -right-[200px] -bottom-[200px] opacity-30"></div>
      <div className="gold-decoration w-[400px] h-[400px] -left-[100px] top-[20%] opacity-20"></div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="heading-xl uppercase mb-6">
            <span className="block">Nightliner</span>
            <span className="gold-gradient-text">Luxury Transport</span>
          </h1>
          
          <p className="body-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Premium Nightliner und Tour Crew für anspruchsvolle Künstler und Bands in der Schweiz und ganz Europa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/nightliner" className="gold-button w-full sm:w-auto">
              Nightliner entdecken
            </Link>
            <Link to="/kontakt" className="gold-outline-button w-full sm:w-auto">
              Anfrage stellen
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
