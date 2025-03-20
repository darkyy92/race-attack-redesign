import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * Scrolls to the top of the page when the route changes
 * This component doesn't render anything, it just performs the scroll action
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
