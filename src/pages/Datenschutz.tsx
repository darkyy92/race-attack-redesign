
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
              <p className="text-sm text-gray-400 mb-8">
                Stand: {new Date().toLocaleDateString('de-CH', { year: 'numeric', month: 'long', day: 'numeric' })} | Gültig gemäss dem neuen Schweizer Datenschutzgesetz (nDSG/revDSG) seit 1. September 2023
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Verantwortliche Stelle und Kontakt</h2>
              <p>
                Verantwortlich für die Datenbearbeitung auf dieser Website:
              </p>
              <div className="bg-zinc-900 p-4 rounded-lg my-4">
                <p className="mb-2"><strong>Race-Attack GmbH</strong></p>
                <p>Inhaber: Livio Kägi</p>
                <p>Schulstrasse 6b</p>
                <p>8542 Wiesendangen</p>
                <p>Schweiz</p>
                <p className="mt-2">UID: CHE-162.556.838</p>
                <p>E-Mail: info@race-attack.ch</p>
                <p>Telefon: +41 78 606 10 32</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Erhebung und Bearbeitung personenbezogener Daten</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">2.1 Kategorien bearbeiteter Personendaten</h3>
              <p>
                Wir bearbeiten folgende Kategorien von Personendaten:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Kontaktdaten (Name, Vorname, E-Mail-Adresse, Telefonnummer, Postadresse)</li>
                <li>Technische Daten (IP-Adresse, Browser-Typ, Betriebssystem, Zugriffsdatum und -zeit)</li>
                <li>Nutzungsdaten (besuchte Seiten, Verweildauer, Klickpfade)</li>
                <li>Kommunikationsdaten (Inhalt von Anfragen, Korrespondenz)</li>
                <li>Geschäftsdaten (Auftragsdaten, Vertragsdaten bei Buchungen)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">2.2 Zweck der Datenbearbeitung</h3>
              <p>
                Wir bearbeiten Ihre Personendaten zu folgenden Zwecken:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Bereitstellung und Verbesserung unserer Website und Dienstleistungen</li>
                <li>Bearbeitung von Anfragen und Kommunikation mit Kunden</li>
                <li>Abwicklung von Buchungen und Verträgen</li>
                <li>Marketing und Werbung (nur mit Ihrer Einwilligung)</li>
                <li>Erfüllung gesetzlicher Pflichten</li>
                <li>Wahrung berechtigter Interessen</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">2.3 Rechtsgrundlagen</h3>
              <p>
                Die Bearbeitung Ihrer Personendaten erfolgt auf folgenden Rechtsgrundlagen:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Ihre Einwilligung (Art. 6 Abs. 1 lit. a und Art. 31 Abs. 1 nDSG)</li>
                <li>Vertragserfüllung oder vorvertragliche Massnahmen (Art. 31 Abs. 2 lit. a nDSG)</li>
                <li>Gesetzliche Verpflichtungen (Art. 31 Abs. 2 lit. b nDSG)</li>
                <li>Überwiegende berechtigte Interessen (Art. 31 Abs. 2 lit. a nDSG)</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Datenweitergabe und Empfänger</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">3.1 Empfängerkategorien</h3>
              <p>
                Wir geben Ihre Personendaten nur an folgende Empfänger weiter:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>IT-Dienstleister (Hosting, Wartung, Support)</li>
                <li>Zahlungsdienstleister (bei Buchungen)</li>
                <li>Partner und Subunternehmer (zur Leistungserbringung)</li>
                <li>Behörden (bei gesetzlichen Verpflichtungen)</li>
                <li>Berater (Rechtsanwälte, Steuerberater - unter Berufsgeheimnis)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">3.2 Datenübermittlung ins Ausland</h3>
              <p>
                Ihre Daten können in folgende Länder übermittelt werden:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li><strong>EU/EWR-Staaten:</strong> Angemessenes Datenschutzniveau gemäss Angemessenheitsbeschluss</li>
                <li><strong>USA:</strong> Nur an Empfänger mit EU-Standardvertragsklauseln oder anderen geeigneten Garantien</li>
                <li><strong>Weitere Länder:</strong> Nur mit Ihrer ausdrücklichen Einwilligung oder geeigneten Garantien</li>
              </ul>
              <p className="mt-2">
                Bei Übermittlungen in Länder ohne angemessenes Datenschutzniveau stellen wir den Schutz Ihrer Daten durch geeignete Garantien sicher (z.B. EU-Standardvertragsklauseln, Binding Corporate Rules).
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Cookies und Tracking-Technologien</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">4.1 Verwendete Cookies</h3>
              <p>
                Unsere Website verwendet folgende Arten von Cookies:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li><strong>Technisch notwendige Cookies:</strong> Für den Betrieb der Website unerlässlich</li>
                <li><strong>Funktionale Cookies:</strong> Speichern Ihre Präferenzen (z.B. Spracheinstellungen)</li>
                <li><strong>Analyse-Cookies:</strong> Helfen uns, die Nutzung unserer Website zu verstehen (nur mit Ihrer Einwilligung)</li>
                <li><strong>Marketing-Cookies:</strong> Für personalisierte Werbung (nur mit Ihrer Einwilligung)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-white">4.2 Cookie-Verwaltung</h3>
              <p>
                Sie können Cookies in Ihren Browsereinstellungen verwalten. Beachten Sie, dass die Deaktivierung bestimmter Cookies die Funktionalität unserer Website einschränken kann.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Ihre Rechte</h2>
              <p>
                Nach dem neuen Schweizer Datenschutzgesetz haben Sie folgende Rechte:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li><strong>Auskunftsrecht:</strong> Sie können jederzeit Auskunft über Ihre bei uns gespeicherten Daten verlangen</li>
                <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
                <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                <li><strong>Datenübertragbarkeit:</strong> Sie können die Herausgabe Ihrer Daten in einem gängigen Format verlangen</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Bearbeitung Ihrer Daten widersprechen</li>
                <li><strong>Widerrufsrecht:</strong> Sie können erteilte Einwilligungen jederzeit widerrufen</li>
              </ul>
              <p className="mt-4">
                Auskunftsbegehren sind in der Regel innerhalb von 30 Tagen und kostenlos zu beantworten. Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter info@race-attack.ch.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Massnahmen (TOM) zum Schutz Ihrer Personendaten:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>SSL/TLS-Verschlüsselung für die Datenübertragung</li>
                <li>Regelmässige Sicherheitsupdates und Patches</li>
                <li>Zugriffskontrolle und Berechtigungskonzepte</li>
                <li>Regelmässige Datensicherungen</li>
                <li>Schulung unserer Mitarbeitenden im Datenschutz</li>
                <li>Vertraulichkeitsvereinbarungen mit Dienstleistern</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Aufbewahrung und Löschung</h2>
              <p>
                Wir speichern Ihre Personendaten nur so lange, wie es für die Erfüllung der Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Vertragsdaten: 10 Jahre nach Vertragsende (Verjährungsfrist)</li>
                <li>Buchungsdaten: 10 Jahre (handelsrechtliche Aufbewahrungspflicht)</li>
                <li>Kommunikationsdaten: 2 Jahre nach letztem Kontakt</li>
                <li>Technische Daten: 6 Monate</li>
                <li>Marketing-Daten: Bis zum Widerruf der Einwilligung</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">8. Datenschutz-Folgenabschätzung</h2>
              <p>
                Bei Datenbearbeitungen mit hohem Risiko für Ihre Persönlichkeit oder Grundrechte führen wir eine Datenschutz-Folgenabschätzung durch und treffen geeignete Schutzmassnahmen.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">9. Meldung von Datenschutzverletzungen</h2>
              <p>
                Im Falle einer Datenschutzverletzung mit hohem Risiko für Ihre Persönlichkeit oder Grundrechte werden wir Sie und den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) so rasch wie möglich informieren.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">10. Minderjährige</h2>
              <p>
                Unsere Dienstleistungen richten sich nicht an Minderjährige unter 16 Jahren. Wir erheben wissentlich keine Daten von Personen unter 16 Jahren ohne Zustimmung der Erziehungsberechtigten.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">11. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die aktuelle Version ist auf unserer Website publiziert. Bei wesentlichen Änderungen informieren wir Sie in geeigneter Weise.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">12. Aufsichtsbehörde</h2>
              <p>
                Sie haben das Recht, bei der zuständigen Aufsichtsbehörde Beschwerde einzureichen:
              </p>
              <div className="bg-zinc-900 p-4 rounded-lg my-4">
                <p className="mb-2"><strong>Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)</strong></p>
                <p>Feldeggweg 1</p>
                <p>3003 Bern</p>
                <p>Schweiz</p>
                <p className="mt-2">Website: www.edoeb.admin.ch</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">13. Datenschutzberatung</h2>
              <p>
                Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte:
              </p>
              <p className="mt-2">
                <strong>E-Mail:</strong> info@race-attack.ch<br />
                <strong>Telefon:</strong> +41 78 606 10 32<br />
                <strong>Post:</strong> Race-Attack GmbH, Schulstrasse 6b, 8542 Wiesendangen
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
