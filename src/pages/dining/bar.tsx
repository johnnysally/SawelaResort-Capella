import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { DiningSection } from '@/components/DiningSection';

export default function BarPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-6 py-20">
        <h1 className="text-4xl font-playfair font-bold mb-6">Bar</h1>
        <p className="text-muted-foreground mb-8">Relax with handcrafted cocktails, a curated wine list, and light bites by the lounge.</p>
        <DiningSection />
      </main>
      <Footer />
    </div>
  );
}
