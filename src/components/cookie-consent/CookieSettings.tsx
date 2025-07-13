import React, { useState } from 'react';
import { CookieSettingsModal } from './CookieSettingsModal';
import { saveCookiePreferences } from './utils/cookie-utils';
import { CookiePreferences, CookieConfig } from './types/types';
import { mergeConfig } from './config';
import './styles/styles.css';

interface CookieSettingsProps {
  config?: CookieConfig;
  buttonClassName?: string;
  buttonText?: string;
}

export const CookieSettings: React.FC<CookieSettingsProps> = ({ 
  config,
  buttonClassName = 'cc-button-link',
  buttonText
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mergedConfig = mergeConfig(config);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSave = (preferences: CookiePreferences) => {
    saveCookiePreferences(preferences, mergedConfig.storagePrefix);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className={`cc-button ${buttonClassName}`}
        onClick={handleOpen}
      >
        {buttonText || mergedConfig.texts.banner.settingsButton}
      </button>
      
      <CookieSettingsModal 
        isOpen={isOpen} 
        onClose={handleClose}
        onSave={handleSave}
        config={config}
      />
    </>
  );
};

export default CookieSettings;