import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation('navigation');

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

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { title: t('nightliner'), path: '/nightliner' },
    { title: t('tourCrew'), path: '/tour-crew' },
    { title: t('truck'), path: '/truck' },
    { title: t('yacht'), path: '/yacht' },
    { title: t('gallery'), path: '/gallery' },
    { title: t('aboutUs'), path: i18n.language === 'en' ? '/about-us' : '/ueber-uns' },
    { title: t('contact'), path: i18n.language === 'en' ? '/contact' : '/kontakt' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? 'py-3 shadow-lg' 
          : 'py-6'
      }`}
    >
      {/* Frosted glass background when scrolled */}
      <div 
        className={`absolute inset-0 transition-all duration-200 ${
          scrolled 
            ? 'bg-black/70 backdrop-blur-lg' 
            : 'bg-transparent'
        }`}
      />
      
      <div className="container max-w-7xl mx-auto px-4 xl:px-6 relative z-10">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-white">
                Race<span className="text-gold">Attack</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredLink === link.path;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.path}
                    className={`text-white transition-colors duration-150 text-sm uppercase tracking-wider font-medium relative z-10 py-2 px-3 ${
                      isActive ? 'text-gold' : 'hover:text-gold'
                    }`}
                  >
                    {link.title}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div 
                        className="absolute bottom-0 left-0 h-0.5 bg-gold w-full"
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                  
                  {/* Hover effect */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-gold/10 rounded-md -z-10"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: navLinks.length * 0.02 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/kontakt"
                className="gold-button py-2 px-4 text-sm uppercase tracking-wider font-medium"
              >
                {t('inquiryButton')}
              </Link>
            </motion.div>
            
            {/* Language Switcher - Hidden for now */}
            {/* <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: (navLinks.length + 1) * 0.02 }}
              onClick={toggleLanguage}
              className="ml-4 text-white hover:text-gold transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-medium"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              {i18n.language === 'de' ? 'DE' : 'EN'}
            </motion.button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-white hover:text-gold transition-colors"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full pt-16 sm:pt-20 px-6 relative overflow-y-auto">
              {/* Close button */}
              <button 
                onClick={closeMobileMenu}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white hover:text-gold transition-colors z-50"
                aria-label={t('closeMenu')}
              >
                <X size={28} />
              </button>
              
              {/* Centered content container */}
              <div className="flex flex-col items-center justify-center min-h-full py-8">
                {/* Logo in mobile menu */}
                <Link 
                  to="/" 
                  className="flex items-center justify-center mb-[min(8vh,3rem)]" 
                  onClick={closeMobileMenu}
                >
                  <span 
                    className="font-heading font-bold text-white"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
                  >
                    Race<span className="text-gold">Attack</span>
                  </span>
                </Link>
                
                <nav className="flex flex-col items-center justify-center w-full">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.02 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center py-[min(1.5vh,0.75rem)]"
                      >
                        <Link
                          to={link.path}
                          className={`text-white transition-all duration-150 uppercase tracking-widest font-bold flex items-center justify-center ${
                            isActive ? 'text-gold' : 'hover:text-gold'
                          }`}
                          style={{ fontSize: 'clamp(1.125rem, 3.5vw, 2rem)' }}
                          onClick={closeMobileMenu}
                        >
                          {isActive && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="rounded-full bg-gold mr-3"
                              style={{ width: 'clamp(0.5rem, 1.5vw, 0.75rem)', height: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}
                            />
                          )}
                          {link.title}
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: navLinks.length * 0.02 }}
                    className="mt-[min(8vh,4rem)]"
                  >
                    <Link
                      to="/kontakt"
                      className="gold-button uppercase tracking-widest font-bold inline-block"
                      style={{ 
                        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                        padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)'
                      }}
                      onClick={closeMobileMenu}
                    >
                      {t('inquiryButton')}
                    </Link>
                  </motion.div>
                  
                  {/* Language Switcher in Mobile Menu - Hidden for now */}
                  {/* <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (navLinks.length + 1) * 0.02 }}
                    onClick={() => {
                      toggleLanguage();
                      closeMobileMenu();
                    }}
                    className="mt-[min(4vh,2rem)] text-white hover:text-gold transition-colors flex items-center justify-center gap-3 uppercase tracking-widest font-bold"
                    style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
                  >
                    <Globe size={24} />
                    {i18n.language === 'de' ? 'Deutsch' : 'English'}
                  </motion.button> */}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
