
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import { toast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

const Kontakt: React.FC = () => {
  const { t } = useTranslation('contact');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Prepare template parameters
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || 'Nicht angegeben',
        service: formData.service,
        message: formData.message
      };
      
      // Send email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );
      
      toast({
        title: t('contactForm.success.title'),
        description: t('contactForm.success.message'),
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        privacy: false
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: t('contactForm.error.title'),
        description: t('contactForm.error.message'),
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Kontakt | Race Attack - Nightliner & Tour Support in der Schweiz";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Kontaktieren Sie Race Attack für professionellen Nightliner-Service und Tour Support in der Schweiz und Europa. Wir sind für Sie da!');
    }

    // Animation handler - make all elements visible immediately
    const handleAnimations = () => {
      const animatedElements = document.querySelectorAll('.reveal');
      animatedElements.forEach(element => {
        element.classList.add('visible');
      });
    };

    // Run immediately and then again after a small delay to ensure all elements are processed
    handleAnimations();
    
    // Run again after a small delay to catch any elements that might not be fully rendered
    setTimeout(handleAnimations, 100);
    
    window.addEventListener('scroll', handleAnimations);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleAnimations);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
          <div className="container max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl uppercase mb-6 reveal">
                <span className="gold-text">KONTAKTIEREN</span> SIE UNS
              </h1>
              <div className="gold-line mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 reveal">
                Haben Sie Fragen oder möchten Sie ein Angebot? Wir freuen uns auf Ihre Nachricht.
              </p>
            </div>
          </div>
          <div className="gold-decoration w-[400px] h-[400px] right-0 top-0 opacity-20"></div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="bg-black-light py-16">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div className="bg-black/50 p-8 rounded-xl border border-gold/10 reveal">
                <h2 className="heading-lg mb-8">
                  Unsere <span className="gold-text">Kontaktdaten</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <MapPin className="text-gold" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                      <p className="text-gray-400">
                        Race-Attack GmbH<br />
                        Kappel 1<br />
                        CH-8523 Hagenbuch<br />
                        Schweiz
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Phone className="text-gold" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                      <a href="tel:+41786061032" className="text-gray-400 hover:text-gold transition-colors">
                        +41 78 606 10 32
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                        <Mail className="text-gold" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
                      <a href="mailto:info@race-attack.ch" className="text-gray-400 hover:text-gold transition-colors">
                        info@race-attack.ch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="reveal">
                <h2 className="heading-lg mb-8">
                  Senden Sie uns eine <span className="gold-text">Nachricht</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contactForm.fields.firstName.label')}
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={t('contactForm.fields.firstName.placeholder')}
                        className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contactForm.fields.lastName.label')}
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t('contactForm.fields.lastName.placeholder')}
                        className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contactForm.fields.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contactForm.fields.email.placeholder')}
                      className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contactForm.fields.phone.label') || 'Telefon'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contactForm.fields.phone.placeholder') || '+41 79 123 45 67'}
                        className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contactForm.fields.service.label') || 'Dienstleistung *'}
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                        required
                      >
                        <option value="" disabled>{t('contactForm.fields.service.placeholder') || 'Bitte wählen'}</option>
                        <option value="nightliner">{t('contactForm.fields.service.options.nightliner') || 'Nightliner'}</option>
                        <option value="tour-crew">{t('contactForm.fields.service.options.tourCrew') || 'Tour Crew'}</option>
                        <option value="truck">{t('contactForm.fields.service.options.truck') || 'Truck'}</option>
                        <option value="other">{t('contactForm.fields.service.options.other') || 'Anderes'}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contactForm.fields.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contactForm.fields.message.placeholder')}
                      className="w-full bg-black border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="h-4 w-4 text-gold border-gray-700 rounded focus:ring-gold"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-400">
                      {t('contactForm.fields.privacy.label')} <a href={t('contactForm.fields.privacy.linkUrl')} className="text-gold hover:underline">{t('contactForm.fields.privacy.link')}</a> {t('contactForm.fields.privacy.labelEnd')}
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gold text-white py-3 px-8 rounded-md hover:bg-gold/90 transition-colors inline-block disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('contactForm.submitting') : t('contactForm.submit')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-black">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="heading-lg text-center mb-12 reveal">
              Unser <span className="gold-text">Standort</span>
            </h2>
            <div className="rounded-xl overflow-hidden shadow-xl reveal h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.4311796318985!2d8.8175!3d47.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a99a5f4011a67%3A0x4bb32f66c46c8104!2sKappel%201%2C%208523%20Hagenbuch!5e0!3m2!1sen!2sch!4v1616000000000!5m2!1sen!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Race Attack Standort"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .reveal.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `
      }} />
    </div>
  );
};

export default Kontakt;
