import React, { useState, useEffect } from 'react';
import { CookiePreferences, CookieSettingsModalProps } from './types/types';
import { getCookiePreferences } from './utils/cookie-utils';
import { mergeConfig } from './config';
import './styles/styles.css';

export const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave,
  config
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always on (required)
    analytics: true, // Default on (allowed with notice)
    marketing: false, // Default off (explicit opt-in required)
  });

  const mergedConfig = mergeConfig(config);

  useEffect(() => {
    if (isOpen) {
      // Load existing preferences if available
      const savedPrefs = getCookiePreferences(mergedConfig.storagePrefix);
      setPreferences(savedPrefs);
    }
  }, [isOpen, mergedConfig.storagePrefix]);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'essential') return; // Cannot toggle essential
    
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    onSave(preferences);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
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
    <div 
      className="cc-modal-overlay" 
      style={themeVars}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cc-modal-title"
    >
      <div className="cc-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cc-modal-header">
          <h2 id="cc-modal-title" className="cc-modal-title">
            {mergedConfig.texts.settings.title}
          </h2>
          <p className="cc-modal-description">
            {mergedConfig.texts.settings.description}
          </p>
        </div>
        
        <div className="cc-modal-content">
          {/* Essential Cookies */}
          <div className="cc-category">
            <div className="cc-category-header">
              <label className="cc-category-label">
                {mergedConfig.texts.settings.categories.essential.title}
              </label>
              <div className="cc-toggle-group">
                <button 
                  className="cc-toggle-item cc-toggle-active" 
                  aria-label="Essential cookies enabled"
                  disabled
                >
                  On
                </button>
              </div>
            </div>
            <p className="cc-category-description">
              {mergedConfig.texts.settings.categories.essential.description}
            </p>
          </div>
          
          {/* Analytics Cookies */}
          <div className="cc-category">
            <div className="cc-category-header">
              <label className="cc-category-label">
                {mergedConfig.texts.settings.categories.analytics.title}
              </label>
              <div className="cc-toggle-group">
                <button 
                  className={`cc-toggle-item ${preferences.analytics ? 'cc-toggle-active' : ''}`}
                  aria-label="Analytics cookies on" 
                  onClick={() => handleToggle('analytics')}
                >
                  On
                </button>
                <button 
                  className={`cc-toggle-item ${!preferences.analytics ? 'cc-toggle-off' : ''}`}
                  aria-label="Analytics cookies off" 
                  onClick={() => handleToggle('analytics')}
                >
                  Off
                </button>
              </div>
            </div>
            <p className="cc-category-description">
              {mergedConfig.texts.settings.categories.analytics.description}
            </p>
          </div>
          
          {/* Marketing Cookies */}
          <div className="cc-category">
            <div className="cc-category-header">
              <label className="cc-category-label">
                {mergedConfig.texts.settings.categories.marketing.title}
              </label>
              <div className="cc-toggle-group">
                <button 
                  className={`cc-toggle-item ${preferences.marketing ? 'cc-toggle-active' : ''}`}
                  aria-label="Marketing cookies on" 
                  onClick={() => handleToggle('marketing')}
                >
                  On
                </button>
                <button 
                  className={`cc-toggle-item ${!preferences.marketing ? 'cc-toggle-off' : ''}`}
                  aria-label="Marketing cookies off" 
                  onClick={() => handleToggle('marketing')}
                >
                  Off
                </button>
              </div>
            </div>
            <p className="cc-category-description">
              {mergedConfig.texts.settings.categories.marketing.description}
            </p>
          </div>
        </div>

        <div className="cc-modal-footer">
          <button
            className="cc-button cc-button-outline"
            onClick={onClose}
          >
            {mergedConfig.texts.settings.cancelButton}
          </button>
          <button
            className="cc-button cc-button-primary"
            onClick={handleSave}
          >
            {mergedConfig.texts.settings.saveButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;