import { Coffee, Clock, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import diningImage from '@/assets/dining-experience.jpg';

export const TeaBreakfastSection = () => {
  const teaBreakfastFeatures = [
    {
      icon: Coffee,
      title: "Hand-Crafted Teas",
      description: "Premium selection of local and international teas, carefully brewed to perfection"
    },
    {
      icon: Utensils,
      title: "Fresh Local Ingredients",
      description: "Continental and à la carte options prepared fresh each day with local produce"
    },
    {
      icon: Clock,
      title: "Perfect Morning Start",
      description: "Available from 6:00 AM - 10:30 AM, setting the tone for your day"
    }
  ];

  const menuHighlights = [
    "Kenyan Highland Coffee & Premium Teas",
    "Fresh Tropical Fruit Selections",
    "Traditional English Breakfast",
    "Local Honey & Homemade Preserves",
    "Artisan Breads & Pastries",
    "Farm-Fresh Eggs & Local Dairy"
  ];

  return (
    <section id="tea-breakfast" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-playfair font-bold text-gradient mb-6 leading-normal pb-2">
            Tea & Breakfast
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your morning with hand-crafted teas and a breakfast menu that highlights local ingredients. 
            Enjoy continental and à la carte options prepared fresh each day in our serene lakeside setting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teaBreakfastFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="card-luxury p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Menu Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-6">Morning Menu Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              {menuHighlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Button className="btn-luxury" onClick={() => window.dispatchEvent(new Event('openBooking'))}>
                Reserve Your Table
              </Button>
              <Button variant="outline" className="btn-ghost-luxury">
                View Full Menu
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={diningImage} 
                alt="Elegant breakfast setup with lake views"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">Available Daily</p>
                <p className="text-3xl font-playfair font-bold">6:00 AM - 10:30 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Description */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-6">The Perfect Morning Experience</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Wake up to the gentle sounds of Lake Naivasha and treat yourself to a breakfast experience that combines 
              the finest local ingredients with international favorites. Our tea selection features premium Kenyan highlands 
              teas alongside carefully sourced international varieties, while our breakfast menu offers both hearty 
              continental options and à la carte specialties prepared by our skilled chefs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};