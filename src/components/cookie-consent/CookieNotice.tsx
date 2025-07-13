import React, { useState, useEffect } from 'react';
import { CookieSettingsModal } from './CookieSettingsModal';
import { CookiePreferences, CookieNoticeProps } from './types/types';
import { saveCookiePreferences, hasCookieConsent } from './utils/cookie-utils';
import { mergeConfig } from './config';
import './styles/styles.css';

export const CookieNotice: React.FC<CookieNoticeProps> = ({ config }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const mergedConfig = mergeConfig(config);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = hasCookieConsent(mergedConfig.storagePrefix);
    if (!hasAccepted) {
      setShowBanner(true);
    }
  }, [mergedConfig.storagePrefix]);

  const handleAcceptAll = () => {
    const preferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: false, // Marketing cookies must be opt-in by default
    };
    
    saveCookiePreferences(preferences, mergedConfig.storagePrefix);
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    setShowModal(true);
  };

  const handleCloseSettings = () => {
    setShowModal(false);
  };

  const handleSaveSettings = (preferences: CookiePreferences) => {
    saveCookiePreferences(preferences, mergedConfig.storagePrefix);
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner) {
    return null;
  }

  const themeVars = {
    '--cookie-consent-primary': mergedConfig.theme.colors.primary,
    '--cookie-consent-secondary': mergedConfig.theme.colors.secondary,
    '--cookie-consent-background': mergedConfig.theme.colors.background,
    '--cookie-consent-text': mergedConfig.theme.colors.text,
    '--cookie-consent-border': mergedConfig.theme.colors.border,
    '--cookie-consent-success-bg': mergedConfig.theme.colors.successBackground,
    '--cookie-consent-success-text': mergedConfig.theme.colors.successText,
    '--cookie-consent-error-bg': mergedConfig.theme.colors.errorBackground,
    '--cookie-consent-error-text': mergedConfig.theme.colors.errorText,
    '--cookie-consent-spacing-xs': mergedConfig.theme.spacing.xs,
    '--cookie-consent-spacing-sm': mergedConfig.theme.spacing.sm,
    '--cookie-consent-spacing-md': mergedConfig.theme.spacing.md,
    '--cookie-consent-spacing-lg': mergedConfig.theme.spacing.lg,
    '--cookie-consent-spacing-xl': mergedConfig.theme.spacing.xl,
    '--cookie-consent-radius-sm': mergedConfig.theme.borderRadius.sm,
    '--cookie-consent-radius-md': mergedConfig.theme.borderRadius.md,
    '--cookie-consent-radius-lg': mergedConfig.theme.borderRadius.lg,
    '--cookie-consent-radius-xl': mergedConfig.theme.borderRadius.xl,
    '--cookie-consent-font-sm': mergedConfig.theme.fontSize.sm,
    '--cookie-consent-font-base': mergedConfig.theme.fontSize.base,
    '--cookie-consent-font-lg': mergedConfig.theme.fontSize.lg,
  } as React.CSSProperties;

  return (
    <>
      <div 
        className="cc-container cc-banner"
        style={themeVars}
        role="alert"
        aria-live="polite"
      >
        <div className="cc-banner-content">
          {mergedConfig.texts.banner.description}{' '}
          <a 
            href={mergedConfig.privacyPolicyUrl}
            className="cc-banner-link"
            onClick={(e) => e.stopPropagation()}
          >
            {mergedConfig.texts.banner.privacyLinkText}
          </a>
          .
        </div>
        
        <div className="cc-banner-actions">
          <button 
            className="cc-button cc-button-secondary"
            onClick={handleOpenSettings}
          >
            {mergedConfig.texts.banner.settingsButton}
          </button>
          <button 
            className="cc-button cc-button-primary"
            onClick={handleAcceptAll}
          >
            {mergedConfig.texts.banner.acceptButton}
          </button>
        </div>
      </div>

      <CookieSettingsModal 
        isOpen={showModal} 
        onClose={handleCloseSettings}
        onSave={handleSaveSettings}
        config={config}
      />
    </>
  );
};

export default CookieNotice;