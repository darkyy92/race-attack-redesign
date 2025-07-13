import { CookieConfig } from './types/types';

// Default configuration for the cookie consent module
export const defaultConfig: Required<CookieConfig> = {
  storagePrefix: 'cookie_consent',
  privacyPolicyUrl: '/privacy',
  texts: {
    banner: {
      description: 'This website uses cookies to improve your browsing experience. By using this website, you agree to our privacy policy.',
      privacyLinkText: 'Privacy Policy',
      settingsButton: 'Settings',
      acceptButton: 'Accept',
    },
    settings: {
      title: 'Cookie Settings',
      description: 'Choose which cookies you want to allow.',
      saveButton: 'Save Settings',
      cancelButton: 'Cancel',
      categories: {
        essential: {
          title: 'Essential',
          description: 'Necessary cookies enable core functionality. The website cannot function properly without these cookies and can only be disabled by changing your browser preferences.',
        },
        analytics: {
          title: 'Analytics',
          description: 'Analytics cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.',
        },
        marketing: {
          title: 'Marketing',
          description: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.',
        },
      },
    },
  },
  theme: {
    colors: {
      primary: '#22c55e',
      secondary: '#3b82f6',
      background: '#ffffff',
      text: '#000000',
      border: '#e5e7eb',
      successBackground: '#22c55e',
      successText: '#ffffff',
      errorBackground: '#ef4444',
      errorText: '#ffffff',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
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
};

// Merge configurations
export const mergeConfig = (userConfig?: CookieConfig): Required<CookieConfig> => {
  if (!userConfig) return defaultConfig;

  return {
    storagePrefix: userConfig.storagePrefix || defaultConfig.storagePrefix,
    privacyPolicyUrl: userConfig.privacyPolicyUrl || defaultConfig.privacyPolicyUrl,
    texts: {
      banner: {
        ...defaultConfig.texts.banner,
        ...userConfig.texts?.banner,
      },
      settings: {
        ...defaultConfig.texts.settings,
        ...userConfig.texts?.settings,
        categories: {
          essential: {
            ...defaultConfig.texts.settings.categories.essential,
            ...userConfig.texts?.settings?.categories?.essential,
          },
          analytics: {
            ...defaultConfig.texts.settings.categories.analytics,
            ...userConfig.texts?.settings?.categories?.analytics,
          },
          marketing: {
            ...defaultConfig.texts.settings.categories.marketing,
            ...userConfig.texts?.settings?.categories?.marketing,
          },
        },
      },
    },
    theme: {
      colors: {
        ...defaultConfig.theme.colors,
        ...userConfig.theme?.colors,
      },
      spacing: {
        ...defaultConfig.theme.spacing,
        ...userConfig.theme?.spacing,
      },
      borderRadius: {
        ...defaultConfig.theme.borderRadius,
        ...userConfig.theme?.borderRadius,
      },
      fontSize: {
        ...defaultConfig.theme.fontSize,
        ...userConfig.theme?.fontSize,
      },
    },
  };
};