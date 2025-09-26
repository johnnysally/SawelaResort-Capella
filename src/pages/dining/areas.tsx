import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { DiningSection } from '@/components/DiningSection';

export default function DiningAreasPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-20">
        <h1 className="text-4xl font-playfair font-bold mb-6">Dining Areas</h1>
        <p className="text-muted-foreground mb-8">From private pavilions to lakeside terraces — discover the different dining locations available.</p>
        <DiningSection />
      </main>
      <Footer />
    </div>
  );
}
