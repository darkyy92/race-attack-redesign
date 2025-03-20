
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Datenschutz | Race Attack";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-black text-white">
          <div className="container max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <h1 className="heading-xl text-center uppercase mb-10">
              <span className="gold-text">DATENSCHUTZ</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Wir freuen uns sehr über Ihr Interesse an unserem Schweizer Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der Race-Attack GmbH. Eine Nutzung der Internetseiten der Race-Attack GmbH ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
              </p>
              
              <p>
                Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in Übereinstimmung mit den für die Race-Attack GmbH geltenden landesspezifischen Datenschutzbestimmungen.
              </p>
              
              <p>
                Durch diese Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
              </p>
              
              <p>
                Die Race-Attack GmbH hat als für die Verarbeitung Verantwortlicher zahlreiche technische und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen Schutz der über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
