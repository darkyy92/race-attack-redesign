
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return <footer className="bg-black text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold text-white">
                Race<span className="text-gold">Attack</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Race Attack bietet Ihnen erstklassige Nightliner und professionelle Tour Crew Services für Künstler und Bands in der Schweiz und ganz Europa.
            </p>
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
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative gold-line">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/nightliner" className="text-gray-400 hover:text-gold transition-colors">
                  Nightliner
                </Link>
              </li>
              <li>
                <Link to="/tour-crew" className="text-gray-400 hover:text-gold transition-colors">
                  Tour Crew
                </Link>
              </li>
              <li>
                <Link to="/truck" className="text-gray-400 hover:text-gold transition-colors">
                  Truck
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-gold transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-400 hover:text-gold transition-colors">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-gold transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative gold-line">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Race Attack GmbH<br />
                  Kappel 1<br />
                  CH-8523 Hagenbuch<br />
                  Schweiz
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="tel:+41786061032" className="text-gray-400 hover:text-gold transition-colors">
                  +41 78 606 10 32
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <a href="mailto:info@race-attack.ch" className="text-gray-400 hover:text-gold transition-colors">
                  info@race-attack.ch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Race Attack GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 text-sm text-gray-500">
            <Link to="/impressum" className="hover:text-gold transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-gold transition-colors">
              Datenschutz
            </Link>
            <Link to="/agb" className="hover:text-gold transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
