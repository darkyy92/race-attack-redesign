import React from 'react';
import { useTranslation } from 'react-i18next';
import { CookieNotice } from './cookie-consent';
import type { CookieConfig } from './cookie-consent';
import './cookie-consent/race-attack-overrides.css';

export const CookieConsent: React.FC = () => {
  const { i18n } = useTranslation();
  const isGerman = i18n.language === 'de';

  const config: CookieConfig = {
    privacyPolicyUrl: isGerman ? '/datenschutz' : '/privacy-policy',
    theme: {
      colors: {
        primary: '#cb9a3d', // Gold
        secondary: '#a17929', // Dark gold
        background: '#000000', // Black
        text: '#ffffff', // White text
        border: 'rgba(203, 154, 61, 0.2)', // Gold with opacity
        successBackground: 'rgba(203, 154, 61, 0.1)',
        successText: '#cb9a3d',
        errorBackground: 'rgba(239, 68, 68, 0.1)',
        errorText: '#ef4444',
      },
      spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
      },
    },
    texts: {
      banner: {
        description: isGerman 
          ? 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und den Website-Traffic zu analysieren'
          : 'We use cookies to enhance your experience on our website and analyze site traffic',
        privacyLinkText: isGerman ? 'Datenschutzerklärung' : 'Privacy Policy',
        settingsButton: isGerman ? 'Einstellungen' : 'Settings',
        acceptButton: isGerman ? 'Alle akzeptieren' : 'Accept All',
      },
      settings: {
        title: isGerman ? 'Cookie-Einstellungen' : 'Cookie Settings',
        description: isGerman 
          ? 'Verwalten Sie Ihre Cookie-Präferenzen. Sie können jederzeit Ihre Einstellungen ändern.'
          : 'Manage your cookie preferences. You can change your settings at any time.',
        saveButton: isGerman ? 'Einstellungen speichern' : 'Save Settings',
        cancelButton: isGerman ? 'Abbrechen' : 'Cancel',
        categories: {
          essential: {
            title: isGerman ? 'Notwendige Cookies' : 'Essential Cookies',
            description: isGerman 
              ? 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich.'
              : 'These cookies are essential for the proper functioning of the website.',
          },
          analytics: {
            title: isGerman ? 'Analyse-Cookies' : 'Analytics Cookies',
            description: isGerman 
              ? 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.'
              : 'These cookies help us understand how visitors interact with our website.',
          },
          marketing: {
            title: isGerman ? 'Marketing-Cookies' : 'Marketing Cookies',
            description: isGerman 
              ? 'Diese Cookies werden verwendet, um Werbung relevanter für Sie und Ihre Interessen zu gestalten.'
              : 'These cookies are used to make advertising more relevant to you and your interests.',
          },
        },
      },
    },
  };

  return <CookieNotice config={config} />;
};

export default CookieConsent;