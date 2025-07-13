import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  schemaMarkup?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
  canonicalUrl?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image = '/hero-nightliner.jpg',
  type = 'website',
  schemaMarkup,
  noindex = false,
  canonicalUrl
}: SEOProps) {
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const baseUrl = 'https://race-attack.ch';
  const currentUrl = `${baseUrl}${location.pathname}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  const canonical = canonicalUrl || currentUrl;
  
  // Language alternates mapping
  const languageAlternates: Record<string, string> = {
    '/': '/',
    '/nightliner': '/nightliner',
    '/tour-crew': '/tour-crew',
    '/truck': '/truck',
    '/gallery': '/gallery',
    '/about-us': '/ueber-uns',
    '/ueber-uns': '/about-us',
    '/contact': '/kontakt',
    '/kontakt': '/contact',
    '/privacy-policy': '/datenschutz',
    '/datenschutz': '/privacy-policy',
    '/imprint': '/impressum',
    '/impressum': '/imprint'
  };
  
  const alternateUrl = languageAlternates[location.pathname];
  const alternateLang = currentLang === 'en' ? 'de' : 'en';
  
  // Organization schema (always included)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Race Attack GmbH",
    "legalName": "Race-Attack GmbH",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/race-attack-logo.svg`
    },
    "image": [
      `${baseUrl}/hero-nightliner.jpg`,
      `${baseUrl}/nightliner-main.jpg`,
      `${baseUrl}/gallery-1.jpg`
    ],
    "description": "Premium nightliner tour bus and tour crew services for musicians and production companies in Switzerland and Europe since 1991",
    "foundingDate": "1991",
    "areaServed": {
      "@type": "Place",
      "name": "Europe"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41-78-606-10-32",
      "contactType": "customer service",
      "email": "info@race-attack.ch",
      "availableLanguage": ["German", "English"],
      "areaServed": "Europe"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kappel 1",
      "addressLocality": "Hagenbuch",
      "postalCode": "8523",
      "addressCountry": "CH"
    },
    "vatID": "CHE-162.556.838",
    "taxID": "CHE-162.556.838 MWST"
  };
  
  // LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    "name": "Race Attack GmbH",
    "description": "Tour bus rental and crew services for music tours",
    "url": baseUrl,
    "telephone": "+41-78-606-10-32",
    "email": "info@race-attack.ch",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kappel 1",
      "addressLocality": "Hagenbuch",
      "postalCode": "8523",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.463,
      "longitude": 8.8667
    },
    "vatID": "CHE-162.556.838",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tour Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nightliner Tour Bus Rental",
            "description": "Luxury tour bus with sleeping bunks for musicians"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tour Crew Services",
            "description": "Professional crew for stage and production"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Equipment Transport",
            "description": "Truck services for tour equipment logistics"
          }
        }
      ]
    }
  };
  
  // Combine schemas
  const finalSchemaMarkup = schemaMarkup 
    ? [organizationSchema, localBusinessSchema, ...(Array.isArray(schemaMarkup) ? schemaMarkup : [schemaMarkup])]
    : [organizationSchema, localBusinessSchema];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | Race Attack - Premium Tour Services</title>
      <meta name="title" content={`${title} | Race Attack - Premium Tour Services`} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Race Attack GmbH" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Language Alternates */}
      <link rel="alternate" hreflang={currentLang} href={currentUrl} />
      {alternateUrl && (
        <link rel="alternate" hreflang={alternateLang} href={`${baseUrl}${alternateUrl}`} />
      )}
      <link rel="alternate" hreflang="x-default" href={baseUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={`${title} | Race Attack`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={currentLang === 'de' ? 'de_CH' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLang === 'de' ? 'en_US' : 'de_CH'} />
      <meta property="og:site_name" content="Race Attack" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={`${title} | Race Attack`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="CH-ZH" />
      <meta name="geo.placename" content="Hagenbuch" />
      <meta name="geo.position" content="47.463;8.8667" />
      <meta name="ICBM" content="47.463, 8.8667" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemaMarkup)}
      </script>
    </Helmet>
  );
}