import { Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import diningImage from '@/assets/dining-experience.jpg';

export const DiningSection = () => {
  const restaurants = [
    {
      name: "Acacia Restaurant",
      description: "Fine dining with panoramic lake views featuring contemporary African cuisine with international influences.",
      hours: "6:30 AM - 10:30 PM",
      cuisine: "Contemporary African",
      location: "Main Lodge"
    },
    {
      name: "Baobab Terrace",
      description: "Casual outdoor dining under the stars with traditional grilled specialties and local delicacies.",
      hours: "6:00 PM - 11:00 PM",
      cuisine: "Traditional Grill",
      location: "Garden Terrace"
    },
    {
      name: "Capella Bar & Lounge",
      description: "Sophisticated cocktail lounge with premium spirits and stunning sunset views over Lake Naivasha.",
      hours: "4:00 PM - 2:00 AM",
      cuisine: "Cocktails & Light Bites",
      location: "Capella Wing"
    }
  ];

  return (
    <section id="dining" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-gradient mb-6">
            Culinary Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Savor extraordinary flavors in breathtaking settings. Our world-class chefs create memorable dining experiences 
            that celebrate both local traditions and international cuisine.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <img
              src={diningImage}
              alt="Elegant dining experience at Sawela Lodge with lake views"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-playfair font-bold mb-2">Acacia Restaurant</h3>
              <p className="text-lg text-white/90">Where every meal becomes a memory</p>
            </div>
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant.name}
              className="card-luxury p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                {restaurant.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {restaurant.description}
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{restaurant.hours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{restaurant.location}</span>
                </div>
                <div className="pt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {restaurant.cuisine}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="btn-luxury">
            <Phone className="h-5 w-5 mr-2" />
            Make a Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};