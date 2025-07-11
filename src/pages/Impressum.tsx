import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impressum | Race Attack";
  }, []);
  return <div className="flex flex-col min-h-screen bg-black">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-black text-white">
          <div className="container max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <h1 className="heading-xl text-center uppercase mb-10">
              <span className="gold-text">IMPRESSUM</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Angaben gemäss Art. 5 TMG / Art. 322 OR</h2>
              
              <div className="bg-zinc-900 p-4 rounded-lg my-4">
                <p className="mb-2"><strong>Race-Attack GmbH</strong></p>
                <p>Gesellschaft mit beschränkter Haftung</p>
                <p>Schulstrasse 6b</p>
                <p>8542 Wiesendangen</p>
                <p>Schweiz</p>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Vertreten durch</h3>
              <p>Geschäftsführer: Livio Kägi</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Kontakt</h3>
              <p>
                Telefon: +41 78 606 10 32<br />
                E-Mail: info@race-attack.ch<br />
                Website: www.race-attack.ch
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Handelsregister</h3>
              <p>
                Eingetragen im Handelsregister des Kantons Zürich<br />
                Sitz: Wiesendangen<br />
                UID: CHE-162.556.838<br />
                Status: aktiv
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Mehrwertsteuer</h3>
              <p>
                UID: CHE-162.556.838 MWST
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
              <p>
                Livio Kägi<br />
                Race-Attack GmbH<br />
                Schulstrasse 6b<br />
                8542 Wiesendangen<br />
                Schweiz
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">Haftungsausschluss</h3>
              
              <h4 className="text-lg font-semibold mt-4 mb-2 text-white">Haftung für Inhalte</h4>
              <p>
                Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäss § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <h4 className="text-lg font-semibold mt-4 mb-2 text-white">Haftung für Links</h4>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              
              <h4 className="text-lg font-semibold mt-4 mb-2 text-white">Urheberrecht</h4>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Impressum;