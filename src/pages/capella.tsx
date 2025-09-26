import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AccommodationsSection } from "@/components/AccommodationsSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { DiningSection } from "@/components/DiningSection";
import { WellnessSection } from "@/components/WellnessSection";
import { CapellaSection } from "@/components/CapellaSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function CapellaPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Reuse the same homepage sections as Sawela so Capella shows the full content */}
      <HeroSection />
      <AccommodationsSection />
      <ExperiencesSection />
      <DiningSection />
      <WellnessSection />
      <CapellaSection />
      <GallerySection />
      <ContactSection />

      <Footer />
    </main>
  );
}
