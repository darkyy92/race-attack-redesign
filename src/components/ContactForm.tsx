import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const { t, i18n } = useTranslation('home');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - in a real app, this would send data to a server
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contact.form.successTitle'),
        description: t('contact.form.successMessage'),
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="section-padding bg-black-light relative">
      {/* Gold decorative element */}
      <div className="gold-decoration w-[300px] h-[300px] left-[5%] top-[10%] opacity-20"></div>
      
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg uppercase mb-4">
            {t('contact.sectionTitle')} <span className="gold-text">{t('contact.sectionTitleHighlight')}</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto text-gray-300 mb-2">
            {t('contact.sectionSubtitle')}
          </p>
          <div className="gold-line mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.name')}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.email')}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.phone')}</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.service')}</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                  >
                    <option value="" disabled>{t('contact.form.servicePlaceholder')}</option>
                    <option value="nightliner">{t('services.nightliner.title')}</option>
                    <option value="tour-crew">{t('services.tourCrew.title')}</option>
                    <option value="truck">{t('services.truck.title')}</option>
                    <option value="other">{t('contact.form.other')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500 resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-button w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>{t('contact.form.submitting')}</span>
                  ) : (
                    <>
                      <span>{t('contact.form.submitButton')}</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
                
                <p className="text-sm text-gray-400 text-center">
                  {t('contact.form.privacyNotice')}{' '}
                  <Link 
                    to={i18n.language === 'en' ? '/privacy-policy' : '/datenschutz'} 
                    className="text-gold hover:text-gold-light underline"
                  >
                    {t('contact.form.privacyLink')}
                  </Link>
                  {t('contact.form.privacyNoticeSuffix')}
                </p>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card rounded-lg p-8 h-full">
              <h3 className="heading-sm mb-8 gold-text">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.info.phone')}</h4>
                    <p className="text-gray-300">+41 78 606 10 32</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.info.email')}</h4>
                    <p className="text-gray-300">info@race-attack.ch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.info.address')}</h4>
                    <p className="text-gray-300">
                      Race Attack GmbH<br />
                      Kappel 1<br />
                      CH-8523 Hagenbuch<br />
                      {t('contact.info.switzerland')}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold text-white mb-4">{t('contact.info.availability.title')}</h4>
                <p className="text-gray-300 mb-6">
                  {t('contact.info.availability.description')}
                </p>
                <a href="tel:+41786061032" className="gold-outline-button inline-flex items-center justify-center gap-2">
                  <Phone size={18} />
                  <span>{t('contact.info.availability.button')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
