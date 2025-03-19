
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Nightliner', path: '/nightliner' },
    { title: 'Tour Crew', path: '/tour-crew' },
    { title: 'Truck', path: '/truck' },
    { title: 'Über Uns', path: '/ueber-uns' },
    { title: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-white">
              Race<span className="text-gold">Attack</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-white hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="gold-button py-2 px-4 text-sm uppercase tracking-wider font-medium"
            >
              Anfrage
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-gold transition-colors"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-black-light/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-white hover:text-gold transition-colors duration-300 text-lg uppercase tracking-wider font-medium"
                onClick={closeMobileMenu}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="gold-button mt-4 text-center text-lg uppercase tracking-wider font-medium"
              onClick={closeMobileMenu}
            >
              Anfrage
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
