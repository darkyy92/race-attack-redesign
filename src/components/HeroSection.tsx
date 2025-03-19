
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slightly slower playback for more dramatic effect
      
      // Versuche, das Video zu spielen
      const playVideo = async () => {
        try {
          if (videoRef.current) {
            await videoRef.current.play();
            console.log('Video started playing successfully');
          }
        } catch (error) {
          console.error('Error playing video:', error);
        }
      };
      
      playVideo();
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
      {/* Video Background with darker overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      >
        <source src="/race-attack-video.mp4" type="video/mp4" />
        {/* Fallback für Browser, die das Video nicht unterstützen */}
        <img 
          src="/race-attack-poster.jpg" 
          alt="Race Attack Tourbus" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </video>
      
      {/* Gold decorative elements */}
      <div className="gold-decoration w-[600px] h-[600px] -right-[200px] -bottom-[200px] opacity-30 z-0"></div>
      <div className="gold-decoration w-[400px] h-[400px] -left-[100px] top-[20%] opacity-20 z-0"></div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          {/* Race-Attack Logo large */}
          <h1 className="heading-xl uppercase mb-10 font-bold tracking-wider">
            <span className="block text-white">RACE-</span>
            <span className="block text-white mt-[-20px]">ATTACK</span>
          </h1>
          
          <p className="body-lg max-w-2xl mx-auto mb-10 text-gray-300">
            Premium Nightliner und Tour Crew für anspruchsvolle Künstler und Bands in der Schweiz und ganz Europa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Link to="/nightliner" className="gold-button w-full sm:w-auto">
              Nightliner entdecken
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
