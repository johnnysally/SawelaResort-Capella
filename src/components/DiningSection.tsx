import { Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import diningImage from '@/assets/conferences/conference8.jpg.jpg';

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
    <section id="dining" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-gradient mb-4 sm:mb-6 leading-normal pb-2">
            Culinary Excellence
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Savor extraordinary flavors in breathtaking settings. Our world-class chefs create memorable dining experiences 
            that celebrate both local traditions and international cuisine.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden">
            <img
              src={diningImage}
              alt="Elegant dining experience at Sawela Lodge with lake views"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 text-white">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-playfair font-bold mb-1 sm:mb-2">Acacia Restaurant</h3>
              <p className="text-sm sm:text-base lg:text-lg text-white/90">Where every meal becomes a memory</p>
            </div>
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant.name}
              className="card-luxury p-4 sm:p-6 lg:p-8 hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold text-foreground mb-3 sm:mb-4">
                {restaurant.name}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {restaurant.description}
              </p>
              
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{restaurant.hours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
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
          <Button size="lg" className="btn-luxury text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
            <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Make a Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};