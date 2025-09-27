import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AccommodationsSection } from '@/components/AccommodationsSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { DiningSection } from '@/components/DiningSection';
import { WellnessSection } from '@/components/WellnessSection';
import { CapellaSection } from '@/components/CapellaSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AccommodationsSection />
      <ExperiencesSection />
      <DiningSection />
      <WellnessSection />
      <CapellaSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
