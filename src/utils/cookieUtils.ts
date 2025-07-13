import { isCookieCategoryAllowed } from '@/components/cookie-consent';

// Utility functions for cookie management

// Type for Google Analytics gtag function
type GtagFunction = (command: string, ...args: unknown[]) => void;

// Load Google Analytics if analytics cookies are accepted
export const loadGoogleAnalytics = () => {
  if (isCookieCategoryAllowed('analytics')) {
    // Replace GA_MEASUREMENT_ID with your actual Google Analytics ID
    const GA_MEASUREMENT_ID = 'YOUR_GA_ID_HERE';
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      const gtag: GtagFunction = function(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
    };
  }
};

// Type for Facebook Pixel
type FbqFunction = {
  (command: string, ...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: typeof Array.prototype.push;
  loaded?: boolean;
  version?: string;
};

// Load Facebook Pixel if marketing cookies are accepted
export const loadFacebookPixel = () => {
  if (isCookieCategoryAllowed('marketing')) {
    // Replace FB_PIXEL_ID with your actual Facebook Pixel ID
    const FB_PIXEL_ID = 'YOUR_FB_PIXEL_ID_HERE';
    
    // Facebook Pixel code
    const initFbPixel = function(
      f: Window & { fbq?: FbqFunction; _fbq?: FbqFunction }, 
      b: Document, 
      e: string, 
      v: string, 
      n?: FbqFunction, 
      t?: HTMLScriptElement, 
      s?: Element | null
    ) {
      if (f.fbq) return; 
      n = f.fbq = function(...args: unknown[]) {
        if (n?.callMethod) {
          n.callMethod(...args);
        } else {
          n?.queue.push(args);
        }
      } as FbqFunction;
      if (!f._fbq) f._fbq = n; 
      n.push = n.push || Array.prototype.push; 
      n.loaded = true; 
      n.version = '2.0';
      n.queue = []; 
      t = b.createElement(e) as HTMLScriptElement; 
      t.async = true;
      t.src = v; 
      s = b.getElementsByTagName(e)[0];
      s?.parentNode?.insertBefore(t, s);
    };
    
    initFbPixel(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', FB_PIXEL_ID);
    fbq('track', 'PageView');
  }
};

// Initialize all tracking scripts based on cookie consent
export const initializeTracking = () => {
  // Check cookie preferences and load appropriate scripts
  loadGoogleAnalytics();
  loadFacebookPixel();
  
  // Add other tracking scripts here as needed
};

// Call this function when the app initializes
export const checkAndLoadTracking = () => {
  // Listen for consent changes
  window.addEventListener('cookieConsentChanged', () => {
    initializeTracking();
  });
  
  // Check initial consent status
  initializeTracking();
};

// Declare global types
declare global {
  interface Window {
    dataLayer: unknown[];
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

// Helper function for Facebook Pixel
const fbq = (...args: unknown[]) => {
  if (window.fbq) {
    window.fbq(...args);
  }
};