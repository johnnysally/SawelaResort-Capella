import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Heart, Star, Phone, Sunset, TreePine, Waves, Home, Crown, Coffee } from 'lucide-react';
import diningImage from '@/assets/gallery/gallery7.jpg.jpg';
import heroImage from '@/assets/hero-image.jpg';
import spaImage from '@/assets/spa-wellness.jpg';
import roomImage from '@/assets/rooms/deluxe-romms9.jpg.jpg';

export default function DiningAreasPage() {
  const diningVenues = [
    {
      name: "Acacia Restaurant",
      icon: Home,
      capacity: "80 guests",
      ambiance: "Elegant & Sophisticated",
      features: ["Panoramic lake views", "Climate-controlled", "Full bar service", "Private dining sections"],
      bestFor: "Fine dining, celebrations, romantic dinners",
      description: "Our flagship restaurant offers an intimate yet spacious environment with floor-to-ceiling windows showcasing breathtaking lake views."
    },
    {
      name: "Lakeside Terrace",
      icon: Waves,
      capacity: "60 guests",
      ambiance: "Open-air & Breezy",
      features: ["Outdoor dining", "Lake breeze", "Sunset views", "Canopy coverage"],
      bestFor: "Breakfast, lunch, casual dining",
      description: "Dine al fresco on our beautiful terrace, where the gentle lake breeze and stunning views create the perfect outdoor dining experience."
    },
    {
      name: "Private Garden Pavilions", 
      icon: TreePine,
      capacity: "4-12 guests each",
      ambiance: "Intimate & Secluded",
      features: ["Complete privacy", "Dedicated service", "Garden setting", "Customizable setup"],
      bestFor: "Romantic dinners, family gatherings, business meetings",
      description: "Nestled among our lush gardens, these exclusive pavilions offer complete privacy for special occasions and intimate dining."
    },
    {
      name: "Sunset Deck",
      icon: Sunset,
      capacity: "40 guests",
      ambiance: "Romantic & Scenic",
      features: ["Prime sunset views", "Cocktail service", "Live music", "Elevated platform"],
      bestFor: "Cocktails, light meals, special events",
      description: "Perched over the lake, this elevated deck provides unmatched sunset views and is perfect for evening cocktails and light dining."
    },
    {
      name: "Presidential Suite Dining",
      icon: Crown,
      capacity: "8 guests", 
      ambiance: "Ultra-Luxurious & Private",
      features: ["In-suite service", "Personal chef", "Butler service", "Custom menus"],
      bestFor: "VIP experiences, special celebrations",
      description: "Experience the ultimate in luxury dining with private chef service in the comfort of our most exclusive accommodation."
    },
    {
      name: "Coffee Corner",
      icon: Coffee,
      capacity: "20 guests",
      ambiance: "Casual & Cozy",
      features: ["Specialty coffee", "Light snacks", "Garden views", "Quick service"],
      bestFor: "Morning coffee, afternoon tea, casual meetings",
      description: "A charming spot for coffee lovers, offering premium brews and light refreshments in a relaxed garden setting."
    }
  ];

  const experienceTypes = [
    {
      icon: Heart,
      title: "Romantic Dining",
      venues: ["Private Garden Pavilions", "Sunset Deck", "Presidential Suite"],
      description: "Intimate settings designed for couples seeking romance and privacy"
    },
    {
      icon: Users,
      title: "Group Celebrations",
      venues: ["Acacia Restaurant", "Lakeside Terrace", "Sunset Deck"], 
      description: "Spacious areas perfect for family gatherings and special events"
    },
    {
      icon: Star,
      title: "VIP Experiences", 
      venues: ["Presidential Suite Dining", "Private Garden Pavilions"],
      description: "Exclusive dining with personalized service and luxury amenities"
    },
    {
      icon: Coffee,
      title: "Casual Dining",
      venues: ["Coffee Corner", "Lakeside Terrace"],
      description: "Relaxed atmospheres for everyday meals and casual meetings"
    }
  ];

  const specialArrangements = [
    {
      title: "Bush Breakfast",
      description: "Enjoy breakfast in a secluded spot along the lake shore, complete with wildlife viewing opportunities",
      duration: "2 hours",
      includes: "Transportation, full breakfast, wildlife guide"
    },
    {
      title: "Floating Dinner",
      description: "Dine on our specially designed floating platform for an unforgettable evening on the water",
      duration: "3 hours", 
      includes: "Boat transfer, 4-course dinner, beverages"
    },
    {
      title: "Picnic by the Acacia",
      description: "Traditional picnic setup under our century-old acacia trees with gourmet basket meals",
      duration: "As desired",
      includes: "Picnic setup, gourmet basket, service staff"
    }
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${diningImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight">
            Dining Venues & Areas
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            From intimate pavilions to grand terraces - discover the perfect 
            setting for every dining occasion at Sawela Lodge.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="btn-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Explore Our Venues
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              Plan Your Event
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Introduction */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 sm:mb-8 text-gradient">
                Every Occasion Deserves the Perfect Setting
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12 px-2">
                At Sawela Lodge, we understand that the right ambiance can transform a meal into a 
                memory. Our diverse collection of dining venues offers something special for every 
                occasion - from intimate romantic dinners to grand celebrations, casual family meals 
                to exclusive VIP experiences. Each location has been thoughtfully designed to showcase 
                the natural beauty of Lake Naivasha while providing the perfect backdrop for your 
                dining experience.
              </p>
            </div>
          </div>
        </section>

        {/* Dining Venues Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Dining Venues Showcase
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Acacia Restaurant elegant dining room with lake views"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Acacia Restaurant</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Lakeside terrace outdoor dining with sunset views"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Lakeside Terrace</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={spaImage} 
                  alt="Private garden pavilions for intimate dining"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Private Garden Pavilions</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={roomImage} 
                  alt="Sunset deck with panoramic lake and mountain views"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Sunset Deck</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Presidential suite dining with luxury amenities"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Presidential Suite Dining</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Cozy coffee corner with garden views"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Coffee Corner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dining Venues Grid */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Our Dining Venues
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {diningVenues.map((venue, index) => (
                <div key={index} className="card-luxury p-8 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mr-4">
                      <venue.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold">{venue.name}</h3>
                      <p className="text-muted-foreground">{venue.ambiance}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{venue.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="font-semibold text-primary mb-2">Capacity</p>
                      <p className="text-muted-foreground">{venue.capacity}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Best For</p>
                      <p className="text-muted-foreground">{venue.bestFor}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-primary mb-3">Features</p>
                    <div className="grid grid-cols-2 gap-2">
                      {venue.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Types */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Choose Your Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're planning a romantic evening, family celebration, or business gathering, 
                we have the perfect venue to match your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experienceTypes.map((experience, index) => (
                <div key={index} className="card-luxury p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <experience.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-4">{experience.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                  <div className="text-sm">
                    <p className="font-semibold text-primary mb-2">Recommended Venues:</p>
                    {experience.venues.map((venue, venueIndex) => (
                      <p key={venueIndex} className="text-muted-foreground">{venue}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Arrangements */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Unique Dining Experiences</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                For those seeking something truly extraordinary, we offer these special dining 
                arrangements that showcase the natural beauty of Lake Naivasha.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {specialArrangements.map((arrangement, index) => (
                <div key={index} className="card-luxury p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">{arrangement.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{arrangement.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Duration:</span>
                      <span className="text-muted-foreground">{arrangement.duration}</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Includes:</p>
                      <p className="text-muted-foreground text-sm">{arrangement.includes}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 btn-luxury">
                    Reserve Experience
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Selection Guide */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Need Help Choosing?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our experienced event coordinators are here to help you select the perfect venue 
                  for your occasion. Whether it's an intimate proposal dinner, a family reunion, 
                  or a corporate event, we'll ensure every detail is perfectly arranged.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Expert event planning consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Personalized venue recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-primary" />
                    <span>Custom menu and service options</span>
                  </div>
                </div>
                <Button size="lg" className="btn-luxury">
                  Speak to Our Event Team
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={diningImage}
                    alt="Beautiful dining setup at one of our venues"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-medium">Event Planning</p>
                    <p className="text-3xl font-playfair font-bold">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Reserve Your Perfect Dining Experience
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              From intimate meals for two to grand celebrations, let us create the perfect 
              setting for your special dining experience at Lake Naivasha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call +254 712 215 434
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <MapPin className="h-5 w-5 mr-2" />
                Plan Your Event
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
