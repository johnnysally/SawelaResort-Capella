import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Wine, Clock, Music, Users, Phone, Star, Grape, GlassWater, MapPin } from 'lucide-react';
import diningImage from '@/assets/services/service.jpg.jpg';
import heroImage from '@/assets/hero-image.jpg';
import spaImage from '@/assets/spa-wellness.jpg';
import roomImage from '@/assets/rooms/deluxe-romms7.jpg.jpg';

export default function BarPage() {
  const cocktailMenu = [
    {
      category: "Signature Cocktails",
      items: [
        { name: "Naivasha Sunset", description: "Premium gin, elderflower, fresh citrus, with a hint of rosemary", price: "KSh 1,200" },
        { name: "Lake Breeze Mojito", description: "Fresh mint from our gardens, white rum, lime, sparkling water", price: "KSh 1,000" },
        { name: "Safari Spice", description: "Whiskey, honey, local spices, fresh orange", price: "KSh 1,300" },
        { name: "Acacia Old Fashioned", description: "Bourbon, local honey syrup, orange bitters", price: "KSh 1,400" }
      ]
    },
    {
      category: "Premium Wines",
      items: [
        { name: "Kenyan Sauvignon Blanc", description: "Crisp and refreshing from Naivasha vineyards", price: "KSh 3,500/bottle" },
        { name: "South African Pinotage", description: "Rich, full-bodied red with berry notes", price: "KSh 4,200/bottle" },
        { name: "French Champagne", description: "Celebration-worthy bubbles", price: "KSh 8,500/bottle" },
        { name: "Italian Prosecco", description: "Light and sparkling aperitif", price: "KSh 3,800/bottle" }
      ]
    },
    {
      category: "Light Bites & Appetizers",
      items: [
        { name: "Artisan Cheese Platter", description: "Selection of local and international cheeses with crackers", price: "KSh 1,800" },
        { name: "Smoked Fish Canapés", description: "Lake Naivasha tilapia, cream cheese, herbs", price: "KSh 1,200" },
        { name: "Olive Tapenade Bruschetta", description: "Homemade tapenade on artisan bread", price: "KSh 900" },
        { name: "Nuts & Dried Fruits", description: "Premium selection of roasted nuts and local dried fruits", price: "KSh 600" }
      ]
    }
  ];

  const barFeatures = [
    {
      icon: GlassWater,
      title: "Expert Mixology",
      description: "Our skilled bartenders craft each drink with precision and creativity"
    },
    {
      icon: Wine,
      title: "Curated Wine List",
      description: "Carefully selected wines from Kenya, South Africa, and international vineyards"
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Enjoy acoustic performances and live music on select evenings"
    },
    {
      icon: Users,
      title: "Perfect Atmosphere",
      description: "Intimate setting ideal for romantic evenings or socializing with friends"
    }
  ];

  const barHours = [
    { time: "4:00 PM - 6:00 PM", service: "Happy Hour", description: "Special prices on selected cocktails and wines" },
    { time: "6:00 PM - 11:00 PM", service: "Evening Service", description: "Full menu available with live music" },
    { time: "11:00 PM - 1:00 AM", service: "Late Night", description: "Cocktails and light bites for night owls" }
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight">
            Capella Bar & Lounge
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Unwind with handcrafted cocktails and premium wines while enjoying 
            stunning sunset views over Lake Naivasha.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="btn-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              <Wine className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Reserve Your Spot
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              View Cocktail Menu
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
                Where Every Evening Becomes Memorable
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12 px-2">
                Step into our sophisticated bar and lounge, where expert mixologists create extraordinary 
                cocktails using premium spirits and fresh local ingredients. Whether you're celebrating 
                a special occasion or simply unwinding after a day of safari adventures, our intimate 
                atmosphere and stunning lake views provide the perfect backdrop for an unforgettable evening.
              </p>
            </div>
          </div>
        </section>

        {/* Bar Experience Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Bar & Lounge Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Expertly crafted cocktails with premium spirits"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Signature Cocktails</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Sunset views from the bar with lake panorama"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Stunning Sunset Views</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={spaImage} 
                  alt="Premium wine cellar with curated selection"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Premium Wine Collection</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl md:col-span-2">
                <img 
                  src={roomImage} 
                  alt="Elegant bar interior with sophisticated ambiance"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Sophisticated Bar Interior</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Live music performances and entertainment"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Live Entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              The Complete Bar Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {barFeatures.map((feature, index) => (
                <div key={index} className="card-luxury p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Menu</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our carefully crafted cocktails, premium wine selection, and delicious light bites 
                designed to complement your evening experience.
              </p>
            </div>

            <div className="space-y-12">
              {cocktailMenu.map((section, sectionIndex) => (
                <div key={sectionIndex} className="card-luxury p-8">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 text-primary text-center">
                    {section.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                          <span className="text-primary font-bold">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Hours */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Bar Hours & Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {barHours.map((timeSlot, index) => (
                <div key={index} className="card-luxury p-8 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-2">{timeSlot.service}</h3>
                  <p className="text-2xl font-semibold text-primary mb-3">{timeSlot.time}</p>
                  <p className="text-muted-foreground">{timeSlot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ambiance & Location */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Sunset Views & Sophisticated Ambiance
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our bar features panoramic windows overlooking Lake Naivasha, making it the perfect 
                  spot to watch magnificent sunsets while sipping expertly crafted cocktails. The 
                  sophisticated interior combines modern comfort with African elegance.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Stunning Lake Naivasha Views</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Music className="h-5 w-5 text-primary" />
                    <span>Live Music on Weekends</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Indoor & Outdoor Seating</span>
                  </div>
                </div>
                <Button size="lg" className="btn-luxury">
                  Make a Reservation
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={diningImage}
                    alt="Elegant bar setting with lake views at Sawela Lodge"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-medium">Open Daily</p>
                    <p className="text-3xl font-playfair font-bold">4:00 PM - 1:00 AM</p>
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
              Join Us for Happy Hour
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience our signature cocktails and premium wines while watching the sun set over Lake Naivasha. 
              Special happy hour prices daily from 4:00 PM to 6:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call +254 712 215 434
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <Wine className="h-5 w-5 mr-2" />
                View Wine List
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
