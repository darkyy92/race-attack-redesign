import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const AGB: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AGB | Race Attack";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-black text-white">
          <div className="container max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center uppercase mb-6 px-2">
              <span className="gold-text block">Allgemeine</span>
              <span className="gold-text block">Geschäftsbedingungen</span>
            </h1>
            <h2 className="text-lg md:text-xl text-center mb-12">Race-Attack GmbH</h2>
            
            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              
              <div>
                <h3 className="gold-text">§ 1 Angebot und Vertragsabschluss</h3>
                <p>
                  Die Angebote der Race-Attack GmbH sind freibleibend.<br />
                  Der Besteller kann seinen Auftrag mündlich oder schriftlich erteilen. Der Vertrag kommt mit Eingang der Anzahlung zustande; der Nightliner ist damit reserviert. «First pay, first served»
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 2 Leistungsumfang</h3>
                <p>
                  Für den Umfang der vertraglichen Leistungen sind die Angaben in der schriftlichen Offerte massgebend.<br />
                  Die Leistungen umfassen – im Rahmen der Offerte – die Bereitstellung eines Fahrzeugs der vereinbarten Art mit Fahrer sowie die Durchführung der Beförderung.<br />
                  Nicht umfasst sind die Beaufsichtigung der Fahrgäste, zurückgelassener Gegenstände im Fahrgastraum und des Gepäcks, insbesondere beim Be- und Entladen.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 3 Preis und Zahlung</h3>
                <p>
                  Es gelten der bei Vertragsabschluss vereinbarte Preis sowie der daraus abgeleitete Zahlungsplan und das Zahlungsziel.<br />
                  Auf Wunsch wechseln wir nach einer festgelegten Zeit die Bettwäsche; dafür berechnen wir eine Pauschale von CHF 10.– pro Bett. Dieser Betrag ist bar an den Fahrer zu zahlen.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 4 Kündigung und Rücktritt durch den Besteller</h3>
                <p>
                  Kündigt der Auftraggeber den Vertrag vor Fahrtende oder nimmt er das Fahrzeug nicht in Anspruch, bleibt die Zahlungspflicht bestehen, sofern die Kündigung nicht auf einem von der Race-Attack GmbH zu vertretenden Umstand beruht.<br />
                  Die Race-Attack GmbH rechnet ersparte Aufwendungen sowie Vorteile aus anderweitigem Fahrzeugeinsatz an. Es gelten folgende Pauschalen:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>bis 30 Tage vor Fahrtantritt: 10 %</li>
                  <li>bis 20 Tage vor Fahrtantritt: 40 %</li>
                  <li>ab 10 Tage vor Fahrtantritt: 60 %</li>
                </ul>
                <p className="mt-2">
                  Nach fruchtloser Zahlung behalten wir uns vor, das Fahrzeug nicht bereitzustellen. Die Schadenersatz­pflicht erhöht oder vermindert sich, wenn Race-Attack GmbH einen höheren bzw. der Besteller einen geringeren Schaden nachweist.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 5 Kündigung und Rücktritt durch den Beförderer</h3>
                <p>
                  Die Race-Attack GmbH oder der Auftraggeber können den Vertrag aus wichtigem, nicht von ihnen zu vertretendem Grund kündigen, wenn die Beförderung unzumutbar wird (höhere Gewalt wie Krieg, Unruhen, Epidemien, gefährliche Witterungs-/Strassenverhältnisse, Grenzschliessungen, Strassensperren).<br />
                  Fällt das Fahrzeug unverschuldet aus (Unfall, technischer Defekt trotz Wartung etc.), ist die Race-Attack GmbH nicht verpflichtet, gleichwertigen Ersatz zu stellen. Steht kein Ersatz zur Verfügung, entfallen die Leistungspflichten beider Parteien.<br />
                  Während der Beförderungszeit trifft die Race-Attack GmbH organisatorische Massnahmen im Einvernehmen mit dem Besteller. Für erbrachte Leistungen erhält sie Vergütung nach den üblichen Sätzen; Mehrkosten trägt der Besteller.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 6 Haftung</h3>
                <p>
                  Die Race-Attack GmbH haftet für Sachschäden nach Personenbeförderungsgesetz, soweit der Schaden CHF 1 000 je Person übersteigt und nicht auf Vorsatz oder grober Fahrlässigkeit beruht.<br />
                  Im Übrigen ist die Haftung auf das Dreifache des Beförderungspreises beschränkt, sofern kein Vorsatz oder grobe Fahrlässigkeit vorliegen. Ansprüche aus fahrlässiger Verletzung wesentlicher Vertragspflichten bleiben unberührt.<br />
                  Deliktische Ansprüche ausserhalb des Beförderungsvertrags bleiben von dieser Beschränkung unberührt. Weitergehende Haftung ist ausgeschlossen, soweit gesetzlich zulässig.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 7 Gerichtsstand</h3>
                <p>Gerichtsstand ist Winterthur.</p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 8 Geltendes Recht</h3>
                <p>
                  Es gilt das Recht der Schweizerischen Eidgenossenschaft. Wir achten darauf, dass unsere Fahrer ausgeruht und einsatzfähig sind, um unsere Beförderungsleistung sicher zu erbringen.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 9 Fahrer / Doppelfahrer</h3>
                <p>
                  Hauptfahrer haben eine eigene Schlafkabine im Bus. Doppelfahrer benötigen ein Bett in den verfügbaren Schlafplätzen und gelten als Crew-Mitglieder. Bei der Buchung ist die Gesamtzahl von Band- und Crew-Mitgliedern inklusive Doppelfahrer zu berücksichtigen.<br />
                  Es werden nur so viele Personen befördert, wie Sitz- und Schlafplätze vorhanden und angemeldet sind. Andernfalls kann die Race-Attack GmbH die Beförderung gemäss § 42 PBefG verweigern oder stornieren.<br />
                  Die tägliche Verpflegung für beide Fahrer ist sicherzustellen.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 10 Vollzähligkeit der Personen</h3>
                <p>
                  Vor Abfahrt haben die Mitreisenden oder der Tour-Manager die Vollzähligkeit zu prüfen. Fehlende Personen sind selbst verantwortlich, auf eigene Kosten zum Fahrzeug zurückzukommen.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 11 Beförderungsbedingungen</h3>
                <p className="mb-2">(1) Personen, die eine Gefahr für Sicherheit oder Ordnung darstellen bzw. Gewalt ausüben oder androhen, sind von der Beförderung ausgeschlossen. Das Betriebspersonal übt das Hausrecht aus.</p>
                <p className="mb-2">(2) Auf Aufforderung des Betriebspersonals sind Fahrzeug und Betriebsanlagen zu verlassen; daraus entsteht kein Schadenersatzanspruch.</p>
                <p className="mb-2">(3) Im Fahrzeug gilt Rauchverbot. Bei Verstoss werden Reinigungskosten von mindestens CHF 800.– bis maximal CHF 2 000.– berechnet.</p>
                <p className="mb-2">(4) Das Entwenden von Werkzeug, Geschirr oder anderem Zubehör ist untersagt.</p>
                <p>(5) Für Schäden am Fahrzeug (innen oder aussen) sowie am Anhänger trägt der Besteller die vollständigen Instandsetzungskosten. Beschädigte Bett-Einrichtungen werden ersetzt, nicht gereinigt.</p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 12 Routing / Persönliches</h3>
                <p>
                  Unsere Fahrer planen Route und Zeiten; bitte keine Google-Maps-Vergleiche, da für Grossfahrzeuge andere Parameter gelten (Geschwindigkeit, Maut, Gewicht, Höhe).<br />
                  Zusatzkilometer, die nicht in der Offerte enthalten sind (z. B. Umwege für Drop-off an Bahnhof, Hotel usw.), werden nachberechnet.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 13 Standbetrieb auf Festivals, Clubs, Hallen, Off-Days</h3>
                <p>
                  Die Busse sind voll klimatisiert. Für den Standbetrieb ist eine dreiphasige 32-A-Stromversorgung erforderlich. Ohne diese darf niemand im Bus bleiben; der Besteller stellt in diesem Fall Hotelzimmer für Fahrer und Doppelfahrer.<br />
                  Die Bordspannung beträgt 220 / 240 V und ist während Fahrt und Stand verfügbar. Es gelten die vereinbarten Preise und der Zahlungsplan.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 14 Off-Days und Verpflegung</h3>
                <p>
                  Übernachten Crew oder Band im Hotel, hat das Fahrpersonal Anspruch auf ein Einzelzimmer.<br />
                  An Tagen ohne Catering sind dem Fahrer CHF 50.– pro Tag bar auszuzahlen.
                </p>
              </div>
              
              <div>
                <h3 className="gold-text">§ 15 Versicherungen</h3>
                <p>
                  Während der Fahrt im Bus sind Sie durch unsere Haftpflichtversicherung gedeckt. Für Ereignisse ausserhalb des Busses (Streiks, Verspätungen, höhere Gewalt, Krankheit, Unfälle usw.) haften wir nicht. Wir empfehlen ergänzende Versicherungen (Rückreise-, Diebstahl-, Gepäckversicherung).
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AGB;