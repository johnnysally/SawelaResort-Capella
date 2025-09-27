import { useState, useEffect, useRef } from 'react';
import { Camera, Sunrise, Utensils, Waves, Mountain, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
// Services images
import service1 from '@/assets/services/service1.jpg.jpg';
import service2 from '@/assets/services/service.jpg.jpg';
import service3 from '@/assets/services/service3.jpg.jpg';
// Gallery images
import gallery1 from '@/assets/gallery/gallery2.jpg.jpg';
import gallery2 from '@/assets/gallery/gallery5.jpg.jpg';
import gallery3 from '@/assets/gallery/gallery7.jpg.jpg';

const experiences = [
  {
    icon: Sunrise,
    title: 'Dawn Game Drives',
    description: 'Witness the African wilderness awakening with our expert guides',
    duration: '3-4 hours',
    price: '$120',
    image: service1,
  },
  {
    icon: Camera,
    title: 'Photography Safari',
    description: 'Capture stunning wildlife moments with professional guidance',
    duration: 'Full day',
    price: '$280',
    image: gallery1,
  },
  {
    icon: Waves,
    title: 'Lake Naivasha Cruise',
    description: 'Serene boat excursions with hippo and bird watching',
    duration: '2 hours',
    price: '$85',
    image: service2,
  },
  {
    icon: Mountain,
    title: 'Cultural Village Tour',
    description: 'Immerse yourself in authentic Maasai traditions and culture',
    duration: '4 hours',
    price: '$95',
    image: gallery2,
  },
  {
    icon: Utensils,
    title: 'Bush Dining Experience',
    description: 'Gourmet meals under the stars in the heart of nature',
    duration: '3 hours',
    price: '$160',
    image: service3,
  },
  {
    icon: Star,
    title: 'Stargazing Safari',
    description: 'Explore the African night sky with our astronomy experts',
    duration: '2 hours',
    price: '$75',
    image: gallery3,
  },
];

export const ExperiencesSection = () => {
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
    <section ref={sectionRef} id="experiences" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-4 sm:mb-6">
            <span className="text-foreground">Curated</span>
            <span className="text-gradient"> Experiences</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed px-2">
            From thrilling wildlife encounters to serene cultural immersions, 
            each experience is thoughtfully crafted to create lasting memories of your African adventure.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <Card 
                key={index}
                className={`group relative overflow-hidden border-0 shadow-warm hover:shadow-luxury transition-all duration-700 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={experience.image}
                    alt={`${experience.title} experience`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-64 sm:h-72 lg:h-80 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/20 backdrop-blur-sm rounded-lg sm:rounded-xl mb-3 sm:mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-playfair font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                    {experience.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                    {experience.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center justify-between text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">
                    <span className="truncate mr-2">{experience.duration}</span>
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-primary whitespace-nowrap">{experience.price}</span>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    className="btn-luxury text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-2 sm:px-4 sm:py-2"
                    onClick={() => window.dispatchEvent(new Event('openBooking'))}
                  >
                    Book Experience
                  </Button>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold mb-3 sm:mb-4">
              Create Your Perfect Safari
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
              Let our expert team curate a personalized experience tailored to your interests and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button className="btn-luxury text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3">
                Plan My Adventure
              </Button>
              <Button variant="outline" className="btn-ghost-luxury text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3">
                Speak to Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};