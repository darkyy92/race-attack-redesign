
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nightliner from "./pages/Nightliner";
import TourCrew from "./pages/TourCrew";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nightliner" element={<Nightliner />} />
          <Route path="/tour-crew" element={<TourCrew />} />
          <Route path="/truck" element={<NotFound />} />
          <Route path="/ueber-uns" element={<NotFound />} />
          <Route path="/kontakt" element={<NotFound />} />
          <Route path="/impressum" element={<NotFound />} />
          <Route path="/datenschutz" element={<NotFound />} />
          <Route path="/agb" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
