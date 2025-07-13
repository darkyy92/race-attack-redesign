import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'
import './i18n/i18n'

// Cookie consent tracking - uncomment when you have tracking IDs
// import { checkAndLoadTracking } from './utils/cookieUtils'
// checkAndLoadTracking();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </HelmetProvider>
);
