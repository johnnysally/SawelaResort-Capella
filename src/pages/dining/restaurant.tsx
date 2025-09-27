import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Utensils, Clock, ChefHat, Award, Phone, Star, Leaf, Heart, MapPin, Users } from 'lucide-react';
import diningImage from '@/assets/gallery/gallery2.jpg.jpg';
import heroImage from '@/assets/hero-image.jpg';
import spaImage from '@/assets/spa-wellness.jpg';
import roomImage from '@/assets/rooms/deluxe-romms5.jpg.jpg';

export default function RestaurantPage() {
  const menuSections = [
    {
      title: "Starters & Appetizers",
      items: [
        { name: "Lake Naivasha Tilapia Ceviche", description: "Fresh lake fish with citrus, herbs, and local chilies", price: "KSh 1,800" },
        { name: "Kenyan Beef Carpaccio", description: "Thinly sliced prime beef with rocket and parmesan", price: "KSh 2,200" },
        { name: "Roasted Butternut Soup", description: "Creamy soup with coconut milk and toasted seeds", price: "KSh 1,200" },
        { name: "Artisan Cheese & Charcuterie", description: "Selection of local and international cheeses with cured meats", price: "KSh 2,800" }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Nyama Choma", description: "Traditional Kenyan barbecue with ugali and sukuma wiki", price: "KSh 3,500" },
        { name: "Pan-Seared Lake Fish", description: "Fresh tilapia with herb crust and seasonal vegetables", price: "KSh 2,800" },
        { name: "Braised Lamb Shank", description: "Slow-cooked lamb with rosemary and garlic sauce", price: "KSh 4,200" },
        { name: "Wild Game Medallions", description: "Seasonal game meat with indigenous spices", price: "KSh 4,800" },
        { name: "Vegetarian Tagine", description: "Moroccan-inspired vegetables with couscous", price: "KSh 2,400" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Baobab Fruit Panna Cotta", description: "Creamy dessert with local superfruit", price: "KSh 1,200" },
        { name: "Dark Chocolate Tart", description: "Rich chocolate with passion fruit coulis", price: "KSh 1,400" },
        { name: "Tropical Fruit Platter", description: "Selection of seasonal local fruits", price: "KSh 1,000" },
        { name: "Traditional Mandazi", description: "East African donuts with honey and cinnamon", price: "KSh 800" }
      ]
    }
  ];

  const chefSpecialties = [
    {
      icon: ChefHat,
      title: "Master Chef Cuisine",
      description: "Led by internationally trained chefs specializing in African-fusion cuisine"
    },
    {
      icon: Leaf,
      title: "Farm-to-Table Fresh",
      description: "Ingredients sourced daily from local farms and our own organic gardens"
    },
    {
      icon: Award,
      title: "Award-Winning Menu",
      description: "Recognized for excellence in contemporary African cuisine"
    },
    {
      icon: Heart,
      title: "Dietary Accommodations",
      description: "Extensive options for vegetarian, vegan, and special dietary requirements"
    }
  ];

  const diningExperiences = [
    {
      time: "7:00 AM - 10:30 AM",
      service: "Breakfast Service",
      description: "Continental and à la carte breakfast options",
      highlight: "Lake view dining"
    },
    {
      time: "12:30 PM - 3:00 PM", 
      service: "Lunch Experience",
      description: "Light meals and seasonal specialties",
      highlight: "Perfect for safari breaks"
    },
    {
      time: "7:00 PM - 10:30 PM",
      service: "Fine Dining Dinner",
      description: "Full tasting menu experience available",
      highlight: "Romantic candlelit atmosphere"
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
            Acacia Restaurant
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Contemporary African cuisine meets international flavors in our signature 
            restaurant overlooking the pristine waters of Lake Naivasha.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="btn-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              <Utensils className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Reserve Your Table
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              View Chef's Menu
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Introduction */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8 text-gradient">
                A Culinary Journey Through Kenya
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                At Acacia Restaurant, we celebrate the rich culinary heritage of Kenya while embracing 
                international techniques and flavors. Our master chefs create innovative dishes using 
                the finest local ingredients, from fresh Lake Naivasha fish to organic vegetables grown 
                in our own gardens. Every meal is a celebration of taste, tradition, and the stunning 
                natural beauty that surrounds us.
              </p>
            </div>
          </div>
        </section>

        {/* Culinary Showcase Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Culinary Excellence Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Signature African fusion dishes with artistic presentation"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Signature African Cuisine</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Elegant restaurant dining room with panoramic lake views"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Elegant Dining Room</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={spaImage} 
                  alt="Master chef preparing fresh local ingredients"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Master Chef at Work</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={roomImage} 
                  alt="Artistically plated gourmet dishes"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Gourmet Presentation</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Wine pairing and sommelier selection"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Wine Pairing Selection</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Private dining setup for special occasions"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Private Dining Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chef Specialties */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              What Makes Our Restaurant Special
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {chefSpecialties.map((specialty, index) => (
                <div key={index} className="card-luxury p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <specialty.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-4">{specialty.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{specialty.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Showcase */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Signature Menu</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our carefully crafted dishes that blend traditional Kenyan flavors 
                with contemporary culinary techniques and international influences.
              </p>
            </div>

            <div className="space-y-12">
              {menuSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="card-luxury p-8">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 text-primary text-center">
                    {section.title}
                  </h3>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg flex-1">{item.name}</h4>
                          <span className="text-primary font-bold ml-4">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Chef's Special Note */}
            <div className="mt-12 card-luxury p-8 text-center">
              <ChefHat className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold mb-4">Chef's Tasting Menu</h3>
              <p className="text-muted-foreground mb-6">
                Experience our 7-course tasting menu featuring seasonal specialties and signature dishes. 
                Wine pairing available upon request. Advanced reservation required.
              </p>
              <Button className="btn-luxury">
                <Phone className="h-4 w-4 mr-2" />
                Reserve Tasting Menu
              </Button>
            </div>
          </div>
        </section>

        {/* Dining Experiences */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Dining Times & Experiences
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {diningExperiences.map((experience, index) => (
                <div key={index} className="card-luxury p-8 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-2">{experience.service}</h3>
                  <p className="text-2xl font-semibold text-primary mb-3">{experience.time}</p>
                  <p className="text-muted-foreground mb-3">{experience.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {experience.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Atmosphere */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Fine Dining with Panoramic Views
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our elegant restaurant features floor-to-ceiling windows showcasing breathtaking 
                  views of Lake Naivasha and the surrounding acacia trees. The sophisticated interior 
                  combines modern luxury with authentic African touches, creating the perfect ambiance 
                  for memorable dining experiences.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Prime lakeside location with panoramic views</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Intimate seating for couples and groups</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Award-winning wine cellar</span>
                  </div>
                </div>
                <Button size="lg" className="btn-luxury">
                  Book Your Experience
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={diningImage}
                    alt="Elegant restaurant dining room with lake views"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-medium">Open Daily</p>
                    <p className="text-3xl font-playfair font-bold">7:00 AM - 10:30 PM</p>
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
              Reserve Your Culinary Experience
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join us for an unforgettable dining experience where every dish tells a story. 
              Advanced reservations recommended, especially for our chef's tasting menu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call +254 712 215 434
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <ChefHat className="h-5 w-5 mr-2" />
                Meet Our Chef
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
