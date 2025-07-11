
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Nightliner from "./pages/Nightliner";
import TourCrew from "./pages/TourCrew";
import Gallery from "./pages/Gallery";
import Truck from "./pages/Truck";
import Yacht from "./pages/Yacht";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 300, // Reduced from default 400ms to 300ms
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nightliner" element={<Nightliner />} />
              <Route path="/tour-crew" element={<TourCrew />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/truck" element={<Truck />} />
              <Route path="/yacht" element={<Yacht />} />
              <Route path="/ueber-uns" element={<UeberUns />} />
              <Route path="/about-us" element={<UeberUns />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/contact" element={<Kontakt />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/privacy-policy" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/imprint" element={<Impressum />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default App;
