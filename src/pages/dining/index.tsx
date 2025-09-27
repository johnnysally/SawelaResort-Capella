import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import diningImage from '@/assets/gallery/gallery12.jpg.jpg';
import { Button } from '@/components/ui/button';

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-16">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-4">{title}</h2>
          <div className="text-muted-foreground mb-6">{children}</div>
          <div className="flex gap-4">
            <Button className="btn-luxury" onClick={() => window.dispatchEvent(new Event('openBooking'))}>Book Now</Button>
            <Button variant="outline" className="btn-ghost-luxury">Learn More</Button>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden h-80">
          <img src={diningImage} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default function DiningIndex() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[90vh] flex items-center">
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${diningImage})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">Dining at Sawela & Capella</h1>
                <p className="text-white/90 max-w-3xl mx-auto">Savor extraordinary flavors in breathtaking settings — from intimate private pavilions to our signature restaurant and bar.</p>
                <div className="mt-8 flex justify-center gap-4">
                <Button className="btn-luxury" onClick={() => window.dispatchEvent(new Event('openBooking'))}>Book Your Table</Button>
                <Button variant="outline" className="btn-ghost-luxury">View Menus</Button>
                </div>
            </div>
            </div>


        {/* Sections */}
        <Section id="tea-breakfast" title="Tea & Breakfast">
          Start your morning with hand-crafted teas and a breakfast menu that highlights local ingredients. Enjoy continental and à la carte options prepared fresh each day.
        </Section>

        <Section id="bar" title="Bar">
          Relax with handcrafted cocktails, a curated wine list, and light bites served in a relaxed lounge setting — perfect for sundowners.
        </Section>

        <Section id="restaurant" title="Restaurant">
          Our signature restaurant presents contemporary African cuisine with international influences, using seasonal ingredients and local producers.
        </Section>

        <Section id="our-foods" title="Our Foods">
          Learn about the ingredients, culinary techniques and the farm-to-table approach that underpin our menus.
        </Section>

        <Section id="areas" title="Dining Areas">
          From private dining pavilions and lakeside terraces to intimate in-room dining, explore the many spaces where you can enjoy a memorable meal.
        </Section>
      </main>

      <Footer />
    </div>
  );
}
