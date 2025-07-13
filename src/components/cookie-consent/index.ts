// Main export file for the cookie consent module
export { CookieNotice } from './CookieNotice';
export { CookieSettings } from './CookieSettings';
export { CookieSettingsModal } from './CookieSettingsModal';

// Export utilities
export {
  hasCookieConsent,
  getCookiePreferences,
  saveCookiePreferences,
  resetCookiePreferences,
  isCookieCategoryAllowed,
  DEFAULT_COOKIE_PREFERENCES
} from './utils/cookie-utils';

// Export types
export type {
  CookiePreferences,
  CookieConfig,
  CookieTexts,
  CookieTheme,
  CookieSettingsModalProps,
  CookieNoticeProps,
  ToggleButtonProps
} from './types/types';

// Export configuration helpers
export { defaultConfig, mergeConfig } from './config';