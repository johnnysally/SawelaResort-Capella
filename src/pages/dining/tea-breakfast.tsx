import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Coffee, Clock, Utensils, MapPin, Phone, Star, Leaf, Sun, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import diningImage from '@/assets/dining-experience.jpg';
import heroImage from '@/assets/hero-image.jpg';
import spaImage from '@/assets/spa-wellness.jpg';
import roomImage from '@/assets/rooms/deluxe-romms6.jpg.jpg';

// Import hero images
import breadcrumb from '@/assets/hero_section/breadcrumb.jpg';
import gallery1 from '@/assets/hero_section/gallery1.jpg.jpg';
import gallery4 from '@/assets/hero_section/gallery4.jpg.jpg';
import gallery6 from '@/assets/hero_section/gallery6.jpg.jpg';
import gallery10 from '@/assets/hero_section/gallery10.jpg.jpg';

// Tea & Breakfast hero slides data
const teaBreakfastHeroSlides = [
  {
    id: 1,
    image: breadcrumb,
    title: "Tea & Breakfast",
    subtitle: "Start your day with exquisite flavors and stunning lake views. Experience morning dining that awakens all your senses.",
    theme: "Morning Bliss"
  },
  {
    id: 2,
    image: gallery1,
    title: "Premium Tea Collection",
    subtitle: "Discover our curated selection of world-class teas and locally sourced coffee blends, served with breathtaking views.",
    theme: "Tea Excellence"
  },
  {
    id: 3,
    image: gallery4,
    title: "Lakeside Breakfast",
    subtitle: "Enjoy continental and local breakfast delicacies while watching the sunrise paint Lake Naivasha in golden hues.",
    theme: "Scenic Dining"
  },
  {
    id: 4,
    image: gallery6,
    title: "Fresh Local Ingredients",
    subtitle: "Farm-to-table freshness with ingredients sourced from local gardens and the finest Kenyan producers.",
    theme: "Local Flavors"
  },
  {
    id: 5,
    image: gallery10,
    title: "Artisan Breakfast Experience",
    subtitle: "Handcrafted breakfast creations that blend international favorites with authentic Kenyan morning traditions.",
    theme: "Culinary Art"
  }
];

export default function TeaBreakfastPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % teaBreakfastHeroSlides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % teaBreakfastHeroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + teaBreakfastHeroSlides.length) % teaBreakfastHeroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const currentHero = teaBreakfastHeroSlides[currentSlide];

  const menuCategories = [
    {
      title: "Premium Teas & Coffee",
      items: [
        "Kenyan Highland Single Origin Coffee",
        "English Breakfast Tea",
        "Earl Grey with Bergamot",
        "Chamomile & Honey Infusion",
        "Fresh Mint Tea from our Gardens",
        "Rooibos Red Bush Tea"
      ]
    },
    {
      title: "Fresh Breakfast Selection",
      items: [
        "Continental Breakfast Platter",
        "Traditional English Breakfast",
        "Fresh Tropical Fruit Bowl",
        "Homemade Granola with Yogurt",
        "Artisan Breads & Pastries",
        "Farm-Fresh Eggs (any style)"
      ]
    },
    {
      title: "Local Specialties",
      items: [
        "Mandazi (East African Donuts)",
        "Ugali with Traditional Stew",
        "Fresh Lake Fish & Chips",
        "Local Honey & Preserves",
        "Avocado Toast with Local Herbs",
        "Kenyan Sausages & Bacon"
      ]
    }
  ];

  const features = [
    {
      icon: Sun,
      title: "Perfect Morning Start",
      description: "Begin each day with breathtaking sunrise views over Lake Naivasha while enjoying your breakfast"
    },
    {
      icon: Leaf,
      title: "Fresh Local Ingredients",
      description: "Sourced daily from local farms and our own gardens, ensuring peak freshness and flavor"
    },
    {
      icon: Coffee,
      title: "Premium Beverages",
      description: "Carefully curated selection of world-class teas and locally roasted coffee"
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Our dedicated team ensures every breakfast preference is catered to with warm hospitality"
    }
  ];

  const diningTimes = [
    { time: "6:00 AM - 7:30 AM", service: "Early Bird Special", description: "Perfect for safari departures" },
    { time: "7:30 AM - 9:30 AM", service: "Main Breakfast Service", description: "Full menu available" },
    { time: "9:30 AM - 10:30 AM", service: "Late Breakfast", description: "Continental options only" }
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      
      {/* Dynamic Hero Section */}
      <section className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Images with Transition */}
        <div className="absolute inset-0">
          {teaBreakfastHeroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="glass p-2 sm:p-3 rounded-full hover:bg-primary/20 transition-all duration-300 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          </button>
        </div>
        
        <div className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="glass p-2 sm:p-3 rounded-full hover:bg-primary/20 transition-all duration-300 disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className={`mb-2 sm:mb-3 text-xs sm:text-sm text-primary font-medium uppercase tracking-wider transition-all duration-300 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          }`}>
            {currentHero.theme}
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight transition-all duration-300 ${
            isTransitioning ? 'opacity-50 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            {currentHero.title}
          </h1>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 transition-all duration-300 ${
            isTransitioning ? 'opacity-50 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            {currentHero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="btn-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Reserve Your Table
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              View Full Menu
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {teaBreakfastHeroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === currentSlide 
                  ? 'bg-primary shadow-glow scale-125' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <main className="flex-1">
        {/* Introduction Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 sm:mb-8 text-gradient">
                A Morning Experience Like No Other
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12 px-2">
                Wake up to the gentle sounds of Lake Naivasha and treat yourself to a breakfast experience 
                that combines the finest local ingredients with international favorites. Our morning menu 
                celebrates both Kenyan culinary traditions and continental classics, all served in our 
                stunning lakeside setting with panoramic views that make every meal memorable.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Tea & Breakfast Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Elegant breakfast table setting with lake views"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Lakeside Breakfast Setting</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Premium tea service with fresh pastries"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Premium Tea Selection</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={spaImage} 
                  alt="Fresh tropical fruits and healthy breakfast options"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Fresh Healthy Options</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl md:col-span-2">
                <img 
                  src={roomImage} 
                  alt="Continental breakfast spread with local specialties"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Continental Breakfast Spread</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Artisan coffee brewing and tea ceremony"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Artisan Coffee & Tea</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Why Our Breakfast is Special
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Morning Menu</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover a carefully curated selection of breakfast favorites, from traditional Kenyan specialties 
                to international classics, all prepared with the finest local ingredients.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {menuCategories.map((category, index) => (
                <div key={index} className="card-luxury p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-6 text-primary">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Special Dietary Options */}
            <div className="card-luxury p-8 text-center">
              <h3 className="text-2xl font-playfair font-bold mb-4">Special Dietary Requirements</h3>
              <p className="text-muted-foreground mb-6">
                We cater to all dietary preferences including vegetarian, vegan, gluten-free, and other special requirements. 
                Please inform our team when making your reservation.
              </p>
              <Button className="btn-luxury">
                <Phone className="h-4 w-4 mr-2" />
                Discuss Dietary Needs
              </Button>
            </div>
          </div>
        </section>

        {/* Dining Times */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              Breakfast Service Times
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {diningTimes.map((timeSlot, index) => (
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

        {/* Location & Ambiance */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Lakeside Breakfast Experience
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our breakfast is served in our elegant main dining room with floor-to-ceiling windows 
                  offering panoramic views of Lake Naivasha. Watch hippos surface in the morning mist 
                  while enjoying your perfectly prepared meal.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Main Dining Room with Lake Views</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Utensils className="h-5 w-5 text-primary" />
                    <span>Indoor & Outdoor Seating Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sun className="h-5 w-5 text-primary" />
                    <span>Perfect Sunrise & Morning Light</span>
                  </div>
                </div>
                <Button size="lg" className="btn-luxury">
                  Book Your Morning Experience
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={diningImage}
                    alt="Beautiful lakeside breakfast setting at Sawela Lodge"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-medium">Available Daily</p>
                    <p className="text-3xl font-playfair font-bold">6:00 AM - 10:30 AM</p>
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
              Start Your Day Right
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Reserve your table for an unforgettable breakfast experience overlooking Lake Naivasha. 
              Early booking recommended, especially for sunrise seating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Call +254 712 215 434
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <MapPin className="h-5 w-5 mr-2" />
                View Location
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
