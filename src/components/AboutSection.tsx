import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Users, Activity, TreePine, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Import images for activities
import gallery8 from '@/assets/gallery/gallery8.jpg.jpg';
import gallery9 from '@/assets/gallery/gallery9.jpg.jpg';
import gallery11 from '@/assets/gallery/gallery11.jpg.jpg';
import service1 from '@/assets/services/service1.jpg.jpg';

const activities = [
  {
    icon: Waves,
    title: 'Swimming & Water Activities',
    description: 'Organic swimming pool for adults and boating adventures',
    image: gallery8,
  },
  {
    icon: Activity,
    title: 'Sports & Recreation',
    description: 'Football lawns, volleyball, netball pitches, and lawn racket ball',
    image: service1,
  },
  {
    icon: TreePine,
    title: 'Nature Experiences',
    description: 'Guided nature walks, The Sawela Trail, and bicycle leisure rides',
    image: gallery9,
  },
  {
    icon: Users,
    title: 'Family Fun',
    description: 'Dedicated kids play area and family-friendly activities',
    image: gallery11,
  },
];

const highlights = [
  {
    icon: MapPin,
    title: '90 Minutes from Nairobi',
    description: 'Just 85km away, easily accessible',
  },
  {
    icon: Clock,
    title: 'Comfort & Tranquility',
    description: 'True to our name meaning "comfort in a bird\'s nest"',
  },
  {
    icon: TreePine,
    title: 'Natural Luxury',
    description: 'Beautiful surroundings with engaging activities',
  },
];

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-4 sm:mb-6">
            <span className="text-foreground">About Us –</span>
            <span className="text-gradient"> Sawela Lodges</span>
          </h2>
          <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed space-y-4 sm:space-y-6">
            <p>
              At Sawela Lodges, we invite you to relax in beautiful, natural luxury. True to our name—meaning 
              <span className="text-primary font-medium"> "comfort in a bird's nest"</span>—we deliver comfort and tranquility every single day.
            </p>
            <p>
              Located just 90 minutes' drive from Nairobi (about 85 km), Sawela Lodge is one of Naivasha's finest 
              choices for safari lodges and hotels. We combine serene surroundings with engaging activities, ensuring 
              every guest finds their own perfect experience.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="p-4 sm:p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        {/* What We Offer Section */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-4 sm:mb-6">
              <span className="text-foreground">What We</span>
              <span className="text-gradient"> Offer</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              Guests can enjoy a wide range of recreational activities designed to create unforgettable experiences 
              in our beautiful natural setting.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                      <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white">{activity.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Activities List */}
          <Card className="p-4 sm:p-6 lg:p-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 text-center">
              Complete Activity List
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>An organic swimming pool (for adults)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Expansive lawns for football and contact sports</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Volleyball and netball pitches</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>A kids' play area</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Bicycles for leisure rides</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Boating adventures</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Lawn racket ball</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Guided nature walks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>The Sawela Trail — reconnect with nature</span>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <Button 
              size="lg" 
              className="btn-luxury text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Plan Your Stay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};