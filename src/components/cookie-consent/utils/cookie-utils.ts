import { CookiePreferences } from '../types/types';

// Default cookie preferences
export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  essential: true, // Always true (required)
  analytics: true, // Default on (allowed with notice)
  marketing: false, // Default off (explicit opt-in required)
};

// Check if cookie notice has been accepted
export const hasCookieConsent = (storagePrefix: string = 'cookie_consent'): boolean => {
  try {
    return localStorage.getItem(`${storagePrefix}_accepted`) === 'true';
  } catch (error) {
    console.error('Error checking cookie consent', error);
    return false;
  }
};

// Get current cookie preferences
export const getCookiePreferences = (storagePrefix: string = 'cookie_consent'): CookiePreferences => {
  try {
    const preferences = localStorage.getItem(`${storagePrefix}_preferences`);
    if (preferences) {
      const parsed = JSON.parse(preferences) as CookiePreferences;
      return {
        ...parsed,
        essential: true, // Essential cookies are always enabled
      };
    }
  } catch (error) {
    console.error('Error parsing cookie preferences', error);
  }
  
  return DEFAULT_COOKIE_PREFERENCES;
};

// Save cookie preferences
export const saveCookiePreferences = (
  preferences: CookiePreferences, 
  storagePrefix: string = 'cookie_consent'
): void => {
  try {
    localStorage.setItem(`${storagePrefix}_accepted`, 'true');
    localStorage.setItem(`${storagePrefix}_preferences`, JSON.stringify({
      ...preferences,
      essential: true, // Ensure essential is always true
    }));
  } catch (error) {
    console.error('Error saving cookie preferences', error);
  }
};

// Reset cookie preferences (for testing)
export const resetCookiePreferences = (storagePrefix: string = 'cookie_consent'): void => {
  try {
    localStorage.removeItem(`${storagePrefix}_accepted`);
    localStorage.removeItem(`${storagePrefix}_preferences`);
  } catch (error) {
    console.error('Error resetting cookie preferences', error);
  }
};

// Check if a specific cookie category is allowed
export const isCookieCategoryAllowed = (
  category: keyof CookiePreferences,
  storagePrefix: string = 'cookie_consent'
): boolean => {
  if (category === 'essential') return true; // Essential cookies are always allowed
  
  const hasConsent = hasCookieConsent(storagePrefix);
  if (!hasConsent) {
    return false; // If no consent has been given, only essential cookies are allowed
  }
  
  const preferences = getCookiePreferences(storagePrefix);
  return preferences[category] === true;
};