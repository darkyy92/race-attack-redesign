import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold text-white">
                Race<span className="text-gold">Attack</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">{t('footer.description')}</p>
{/* Social Icons - Hidden
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative gold-line">{t('navigation.title')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/nightliner" className="text-gray-400 hover:text-gold transition-colors">
                  {t('navigation.nightliner')}
                </Link>
              </li>
              <li>
                <Link to="/tour-crew" className="text-gray-400 hover:text-gold transition-colors">
                  {t('navigation.tourCrew')}
                </Link>
              </li>
              <li>
                <Link to="/truck" className="text-gray-400 hover:text-gold transition-colors">
                  {t('navigation.truck')}
                </Link>
              </li>
              <li>
                <Link to="/yacht" className="text-gray-400 hover:text-gold transition-colors">
                  {t('navigation.yacht')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-gold transition-colors">
                  {t('navigation.gallery')}
                </Link>
              </li>
              <li>
                <Link to={i18n.language === 'en' ? '/about-us' : '/ueber-uns'} className="text-gray-400 hover:text-gold transition-colors">
                  {t('navigation.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to={i18n.language === 'en' ? '/contact' : '/kontakt'} className="text-gray-400 hover:text-gold transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative gold-line">{t('contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  {t('contact.company')}<br />
                  {t('contact.address.street')}<br />
                  {t('contact.address.city')}<br />
                  {t('contact.address.country')}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="tel:+41786061032" className="text-gray-400 hover:text-gold transition-colors">
                  {t('contact.phone')}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@race-attack.ch" className="text-gray-400 hover:text-gold transition-colors">
                  {t('contact.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm text-gray-500">
            <Link to={i18n.language === 'en' ? '/imprint' : '/impressum'} className="hover:text-gold transition-colors">
              {t('legal.imprint')}
            </Link>
            <Link to="/agb" className="hover:text-gold transition-colors">
              {t('legal.termsAndConditions')}
            </Link>
            <Link to={i18n.language === 'en' ? '/privacy-policy' : '/datenschutz'} className="hover:text-gold transition-colors">
              {t('legal.privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;