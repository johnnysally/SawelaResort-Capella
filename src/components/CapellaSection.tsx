import { Crown, Sparkles, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import roomImage from '@/assets/room-luxury.jpg';

export const CapellaSection = () => {
  const capellaFeatures = [
    {
      icon: Crown,
      title: "Presidential Suite",
      description: "1,200 sq ft of unparalleled luxury with panoramic lake views"
    },
    {
      icon: Users,
      title: "Private Butler",
      description: "Dedicated 24/7 butler service for personalized attention"
    },
    {
      icon: Sparkles,
      title: "Exclusive Amenities",
      description: "Private infinity pool, wine cellar, and personal chef"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Secluded wing with the best views of Lake Naivasha"
    }
  ];

  const capellaAmenities = [
    "Private helicopter landing pad",
    "Exclusive beach access",
    "Personal wildlife guide",
    "Private dining pavilion",
    "24-hour room service",
    "Luxury vehicle transfers",
    "Private spa suite",
    "Champagne & caviar service"
  ];

  return (
    <section id="capella" className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Crown className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Ultra-Luxury Experience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-gradient mb-6">
            Capella Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ascend to the pinnacle of luxury at our exclusive Capella wing. Where extraordinary service 
            meets unmatched elegance in the heart of Kenya's most pristine wilderness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-6">
                The Ultimate Safari Sanctuary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Capella Collection represents the absolute zenith of African luxury hospitality. 
                With only three exclusive suites, this private wing offers an intimate and bespoke 
                experience that redefines safari luxury.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capellaFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="space-y-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={roomImage}
                alt="Luxurious Capella suite interior with premium furnishings and lake views"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating price card */}
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-xl">
              <div className="text-center">
                <div className="text-sm text-white/80 mb-1">Starting from</div>
                <div className="text-2xl font-playfair font-bold text-white mb-1">$2,500</div>
                <div className="text-sm text-white/80">per night</div>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-playfair font-bold text-center text-foreground mb-8">
            Exclusive Capella Amenities
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {capellaAmenities.map((amenity, index) => (
              <div key={amenity} className="text-center p-6 card-luxury group hover:bg-primary/5 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">{amenity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-12">
          <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Reserve Your Capella Experience
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Limited to just three suites, the Capella Collection offers the ultimate in exclusivity. 
            Advanced reservations required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-luxury">
              Reserve Capella Suite
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury">
              Schedule Private Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};