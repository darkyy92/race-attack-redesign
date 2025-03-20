
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impressum | Race Attack";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-black text-white">
          <div className="container max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <h1 className="heading-xl text-center uppercase mb-10">
              <span className="gold-text">IMPRESSUM</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                Race Attack GmbH<br />
                Kappel 1<br />
                CH-8523 Hagenbuch<br />
                Schweiz
              </p>
              
              <h3>Vertreten durch</h3>
              <p>
                Geschäftsführer: Patrick Meier
              </p>
              
              <h3>Kontakt</h3>
              <p>
                Telefon: +41 78 606 10 32<br />
                E-Mail: info@race-attack.ch
              </p>
              
              <h3>Handelsregistereintrag</h3>
              <p>
                Eingetragen im Handelsregister des Kantons Zürich<br />
                Registernummer: CH-XXX.XXX.XXX
              </p>
              
              <h3>Umsatzsteuer-ID</h3>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                CH XXX XXX XXX
              </p>
              
              <h3>Haftungshinweis</h3>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
