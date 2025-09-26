import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { DiningSection } from '@/components/DiningSection';

export default function RestaurantPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-20">
        <h1 className="text-4xl font-playfair font-bold mb-6">Restaurant</h1>
        <p className="text-muted-foreground mb-8">Our signature restaurant serves contemporary African cuisine with international influences.</p>
        <DiningSection />
      </main>
      <Footer />
    </div>
  );
}
