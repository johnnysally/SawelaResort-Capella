import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AccommodationsPage from "./pages/accommodations"; // ✅ new page
import CapellaPage from "./pages/capella"; // new Capella page
// Dining pages
import TeaBreakfastPage from "./pages/dining/tea-breakfast";
import BarPage from "./pages/dining/bar";
import RestaurantPage from "./pages/dining/restaurant";
import OurFoodsPage from "./pages/dining/our-foods";
import DiningAreasPage from "./pages/dining/areas";
import DiningIndex from "./pages/dining";

// ✅ ScrollToHash component to handle #contact, #gallery etc.
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0); // scroll to top on normal route change
    }
  }, [location]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Always active to listen for hash changes */}
        <ScrollToHash />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Index />} />

          {/* Sawela (explicit route) */}
          <Route path="/sawela" element={<Index />} />

          {/* Accommodations page */}
          <Route path="/accommodations" element={<AccommodationsPage />} />

          {/* Capella lodge page */}
          <Route path="/capella" element={<CapellaPage />} />

          {/* Dining pages from navbar dropdown */}
          <Route path="/dining/tea-breakfast" element={<TeaBreakfastPage />} />
          <Route path="/dining/bar" element={<BarPage />} />
          <Route path="/dining/restaurant" element={<RestaurantPage />} />
          <Route path="/dining/our-foods" element={<OurFoodsPage />} />
          <Route path="/dining/areas" element={<DiningAreasPage />} />
          <Route path="/dining" element={<DiningIndex />} />

          {/* Catch-all for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
