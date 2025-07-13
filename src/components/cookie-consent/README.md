# Cookie Consent Implementation

This cookie consent module has been integrated into the Race-Attack website with customized styling and bilingual support.

## Features

- **GDPR Compliant**: Follows European privacy regulations
- **Bilingual Support**: Automatically switches between German and English based on site language
- **Custom Styling**: Adapted to match Race-Attack's dark theme with gold accents
- **Three Cookie Categories**:
  - Essential (always enabled)
  - Analytics (opt-in)
  - Marketing (opt-in)

## Usage

The cookie consent banner will automatically appear for new visitors. Users can:
- Accept all cookies
- Customize their preferences via the settings modal
- Change their preferences at any time

## Integration with Tracking Scripts

To integrate with tracking scripts like Google Analytics or Facebook Pixel:

1. Update the tracking IDs in `/src/utils/cookieUtils.ts`
2. Uncomment the tracking initialization in `/src/main.tsx`

```typescript
// In main.tsx
import { checkAndLoadTracking } from './utils/cookieUtils'
checkAndLoadTracking();
```

## Customization

### Styling
Custom styles are in `/src/components/cookie-consent/race-attack-overrides.css`

### Translations
Translations are handled in `/src/components/CookieConsent.tsx` using the i18n system

### Cookie Categories
To add more cookie categories, update the configuration in the CookieConsent component.