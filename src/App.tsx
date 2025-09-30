import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Pages
import React, { Suspense } from "react";
const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AccommodationsPage = React.lazy(() => import("./pages/accommodations"));
const CapellaPage = React.lazy(() => import("./pages/capella"));
const GalleryPage = React.lazy(() => import("./pages/gallery"));
const TeaBreakfastPage = React.lazy(() => import("./pages/dining/tea-breakfast"));
const BarPage = React.lazy(() => import("./pages/dining/bar"));
const RestaurantPage = React.lazy(() => import("./pages/dining/restaurant"));
const OurFoodsPage = React.lazy(() => import("./pages/dining/our-foods"));
const DiningAreasPage = React.lazy(() => import("./pages/dining/areas"));
const DiningIndex = React.lazy(() => import("./pages/dining"));

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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>}>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Index />} />
            {/* Sawela (explicit route) */}
            <Route path="/sawela" element={<Index />} />
            {/* Accommodations page */}
            <Route path="/accommodations" element={<AccommodationsPage />} />
            {/* Capella lodge page */}
            <Route path="/capella" element={<CapellaPage />} />
            {/* Gallery page */}
            <Route path="/gallery" element={<GalleryPage />} />
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
