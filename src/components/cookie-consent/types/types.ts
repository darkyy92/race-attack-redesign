// Core interfaces for the cookie consent module
export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConfig {
  storagePrefix?: string;
  texts?: CookieTexts;
  theme?: CookieTheme;
  privacyPolicyUrl?: string;
}

export interface CookieTexts {
  banner?: {
    description?: string;
    privacyLinkText?: string;
    settingsButton?: string;
    acceptButton?: string;
  };
  settings?: {
    title?: string;
    description?: string;
    saveButton?: string;
    cancelButton?: string;
    categories?: {
      essential?: {
        title?: string;
        description?: string;
      };
      analytics?: {
        title?: string;
        description?: string;
      };
      marketing?: {
        title?: string;
        description?: string;
      };
    };
  };
}

export interface CookieTheme {
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
    border?: string;
    successBackground?: string;
    successText?: string;
    errorBackground?: string;
    errorText?: string;
  };
  spacing?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  fontSize?: {
    sm?: string;
    base?: string;
    lg?: string;
  };
}

export interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
  config?: CookieConfig;
}

export interface CookieNoticeProps {
  config?: CookieConfig;
}

export interface ToggleButtonProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}