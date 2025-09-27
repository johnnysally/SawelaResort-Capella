import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Leaf, Sprout, Fish, Beef, Phone, Heart, Globe, Tractor, Sun, Award } from 'lucide-react';
import diningImage from '@/assets/dining-experience.jpg';
import heroImage from '@/assets/hero-image.jpg';
import spaImage from '@/assets/spa-wellness.jpg';
import roomImage from '@/assets/room-luxury.jpg';

export default function OurFoodsPage() {
  const philosophyPillars = [
    {
      icon: Leaf,
      title: "Farm-to-Table Excellence",
      description: "We source directly from local farmers and our own organic gardens, ensuring the freshest ingredients make it to your plate within hours of harvest."
    },
    {
      icon: Globe,
      title: "Cultural Heritage",
      description: "Our menus celebrate Kenya's rich culinary traditions while incorporating techniques and flavors from across Africa and beyond."
    },
    {
      icon: Heart,
      title: "Sustainable Practices",
      description: "Environmental responsibility guides every decision, from ingredient sourcing to waste reduction, supporting both our community and ecosystem."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Every ingredient is carefully selected for quality, flavor, and nutritional value, meeting the highest international culinary standards."
    }
  ];

  const localIngredients = [
    {
      category: "Lake Naivasha Specialties",
      items: [
        { name: "Fresh Tilapia", source: "Lake Naivasha", benefit: "High in omega-3 fatty acids and locally caught daily" },
        { name: "Water Chestnuts", source: "Lake shores", benefit: "Crispy texture and natural sweetness" },
        { name: "Lake Salt", source: "Natural deposits", benefit: "Mineral-rich seasoning with unique flavor profile" }
      ]
    },
    {
      category: "Garden Fresh Produce", 
      items: [
        { name: "Organic Vegetables", source: "Our gardens", benefit: "Pesticide-free and harvested at peak ripeness" },
        { name: "Fresh Herbs", source: "Kitchen garden", benefit: "Aromatic and packed with essential oils" },
        { name: "Tropical Fruits", source: "Local orchards", benefit: "Vitamin-rich and naturally sweet" }
      ]
    },
    {
      category: "Highland Specialties",
      items: [
        { name: "Kenyan Coffee", source: "Highland farms", benefit: "Rich, complex flavors with natural caffeine boost" },
        { name: "Indigenous Grains", source: "Local farmers", benefit: "Ancient varieties with superior nutrition" },
        { name: "Wild Honey", source: "Acacia forests", benefit: "Raw, unprocessed sweetness with antibacterial properties" }
      ]
    }
  ];

  const cookingTechniques = [
    {
      technique: "Traditional Smoking",
      description: "Using acacia wood to impart subtle, earthy flavors to meats and fish",
      benefit: "Preserves natural juices while adding complex smoky notes"
    },
    {
      technique: "Clay Pot Cooking",
      description: "Slow-cooking stews and vegetables in traditional Kenyan clay pots",
      benefit: "Enhances flavors and retains nutrients through gentle, even heating"
    },
    {
      technique: "Wild Foraging",
      description: "Incorporating sustainably harvested indigenous plants and herbs",
      benefit: "Adds unique local flavors while supporting biodiversity"
    },
    {
      technique: "Solar Dehydration",
      description: "Naturally preserving fruits and vegetables using Kenya's abundant sunshine",
      benefit: "Concentrates flavors while maintaining nutritional value"
    }
  ];

  const sustainabilityPractices = [
    {
      icon: Tractor,
      practice: "Local Farmer Partnerships",
      description: "Direct relationships with over 50 local farmers ensure fair prices and sustainable agriculture practices"
    },
    {
      icon: Sprout,
      practice: "Organic Certification",
      description: "Our gardens are certified organic, using composting, natural pest control, and crop rotation"
    },
    {
      icon: Sun,
      practice: "Zero Waste Initiative",
      description: "Food scraps become compost, packaging is minimized, and everything possible is recycled or reused"
    },
    {
      icon: Fish,
      practice: "Responsible Fishing",
      description: "Working with local fishermen to ensure sustainable lake fishing practices protect fish populations"
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
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight">
            Our Culinary Philosophy
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            From farm to table, from lake to plate - discover the story behind 
            every ingredient and the passion that drives our culinary excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" className="btn-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Visit Our Gardens
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost-luxury text-sm sm:text-base lg:text-lg px-6 py-3 sm:px-8 sm:py-4">
              Meet Our Farmers
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Philosophy Introduction */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-8 text-gradient">
                Where Tradition Meets Innovation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                At Sawela Lodge, we believe that exceptional dining begins with exceptional ingredients. 
                Our culinary journey starts in the fertile soils around Lake Naivasha, extends through 
                the pristine waters of the lake itself, and reaches into the highlands where farmers 
                have cultivated the land for generations. Every dish tells a story of tradition, 
                sustainability, and respect for the natural abundance of Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Farm to Table Journey Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              From Farm to Table Journey
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={spaImage} 
                  alt="Organic gardens with fresh vegetables and herbs"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Our Organic Gardens</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Fresh Lake Naivasha fish and local ingredients"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Fresh Lake Ingredients</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="Local farmers and sustainable agriculture practices"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Local Farmer Partnerships</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={roomImage} 
                  alt="Traditional cooking methods and techniques"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Traditional Cooking Methods</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={diningImage} 
                  alt="Seasonal harvest and ingredient selection"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Seasonal Harvest</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src={spaImage} 
                  alt="Sustainable practices and zero waste initiatives"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">Sustainable Practices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
              The Four Pillars of Our Kitchen
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophyPillars.map((pillar, index) => (
                <div key={index} className="card-luxury p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <pillar.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Ingredients */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Our Local Ingredients</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the extraordinary ingredients that make our cuisine unique, sourced from the 
                rich ecosystem around Lake Naivasha and the fertile highlands of Central Kenya.
              </p>
            </div>

            <div className="space-y-12">
              {localIngredients.map((category, categoryIndex) => (
                <div key={categoryIndex} className="card-luxury p-8">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-8 text-primary text-center">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-200 pb-4 md:border-b-0 md:border-r md:border-gray-200 md:pr-6 last:border-r-0">
                        <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                        <p className="text-primary text-sm font-medium mb-2">Source: {item.source}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cooking Techniques */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Traditional Cooking Methods</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our chefs master both ancient techniques passed down through generations and modern 
                culinary innovations to create unforgettable flavors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cookingTechniques.map((technique, index) => (
                <div key={index} className="card-luxury p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-primary">{technique.technique}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{technique.description}</p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-primary font-semibold text-sm">Culinary Benefit:</p>
                    <p className="text-muted-foreground text-sm">{technique.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Practices */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Sustainability in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every meal served supports our commitment to environmental stewardship and 
                community development through responsible sourcing and innovative practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sustainabilityPractices.map((practice, index) => (
                <div key={index} className="card-luxury p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                    <practice.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-4">{practice.practice}</h3>
                  <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gardens & Farm Tour */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                  Visit Our Organic Gardens
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Take a guided tour through our organic gardens and see where many of your meal's 
                  ingredients begin their journey. Learn about permaculture techniques, meet our 
                  gardeners, and even participate in seasonal harvesting activities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Sprout className="h-5 w-5 text-primary" />
                    <span>Daily garden tours at 8:00 AM and 4:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sun className="h-5 w-5 text-primary" />
                    <span>Hands-on harvesting experiences available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-5 w-5 text-primary" />
                    <span>Learn about organic farming techniques</span>
                  </div>
                </div>
                <Button size="lg" className="btn-luxury">
                  Book Garden Tour
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={diningImage}
                    alt="Organic gardens at Sawela Lodge with fresh vegetables"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-medium">Garden Tours</p>
                    <p className="text-3xl font-playfair font-bold">8:00 AM & 4:00 PM</p>
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
              Taste the Difference
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience how our commitment to quality ingredients and sustainable practices 
              creates unforgettable flavors in every dish we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Phone className="h-5 w-5 mr-2" />
                Book Dining Experience
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <Leaf className="h-5 w-5 mr-2" />
                Schedule Farm Visit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
