
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
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
        title: "Anfrage erhalten",
        description: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
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
            Kontaktieren <span className="gold-text">Sie uns</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto text-gray-300 mb-2">
            Nehmen Sie Kontakt auf für eine unverbindliche Beratung oder ein Angebot für Ihr Projekt.
          </p>
          <div className="gold-line mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-Mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                      placeholder="Ihre E-Mail"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Telefon</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Dienstleistung</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500"
                  >
                    <option value="" disabled>Bitte wählen</option>
                    <option value="nightliner">Nightliner</option>
                    <option value="tour-crew">Tour Crew</option>
                    <option value="truck">Truck</option>
                    <option value="other">Anderes</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white placeholder-gray-500 resize-none"
                    placeholder="Ihre Anfrage"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-button w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Wird gesendet...</span>
                  ) : (
                    <>
                      <span>Anfrage senden</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card rounded-lg p-8 h-full">
              <h3 className="heading-sm mb-8 gold-text">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefon</h4>
                    <p className="text-gray-300">+41 78 606 10 32</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-Mail</h4>
                    <p className="text-gray-300">info@race-attack.ch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Adresse</h4>
                    <p className="text-gray-300">
                      Race Attack GmbH<br />
                      Kappel 1<br />
                      CH-8523 Hagenbuch<br />
                      Schweiz
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold text-white mb-4">Verfügbarkeit prüfen</h4>
                <p className="text-gray-300 mb-6">
                  Kontaktieren Sie uns direkt per Telefon oder E-Mail für eine schnelle Verfügbarkeitsprüfung.
                </p>
                <a href="tel:+41786061032" className="gold-outline-button inline-flex items-center justify-center gap-2">
                  <Phone size={18} />
                  <span>Jetzt anrufen</span>
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
