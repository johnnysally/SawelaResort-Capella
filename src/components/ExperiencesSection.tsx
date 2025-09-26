import { useState, useEffect, useRef } from 'react';
import { Camera, Sunrise, Utensils, Waves, Mountain, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import diningImage from '@/assets/dining-experience.jpg';

const experiences = [
  {
    icon: Sunrise,
    title: 'Dawn Game Drives',
    description: 'Witness the African wilderness awakening with our expert guides',
    duration: '3-4 hours',
    price: '$120',
    image: diningImage,
  },
  {
    icon: Camera,
    title: 'Photography Safari',
    description: 'Capture stunning wildlife moments with professional guidance',
    duration: 'Full day',
    price: '$280',
    image: diningImage,
  },
  {
    icon: Waves,
    title: 'Lake Naivasha Cruise',
    description: 'Serene boat excursions with hippo and bird watching',
    duration: '2 hours',
    price: '$85',
    image: diningImage,
  },
  {
    icon: Mountain,
    title: 'Cultural Village Tour',
    description: 'Immerse yourself in authentic Maasai traditions and culture',
    duration: '4 hours',
    price: '$95',
    image: diningImage,
  },
  {
    icon: Utensils,
    title: 'Bush Dining Experience',
    description: 'Gourmet meals under the stars in the heart of nature',
    duration: '3 hours',
    price: '$160',
    image: diningImage,
  },
  {
    icon: Star,
    title: 'Stargazing Safari',
    description: 'Explore the African night sky with our astronomy experts',
    duration: '2 hours',
    price: '$75',
    image: diningImage,
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
    <section ref={sectionRef} id="experiences" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-foreground">Curated</span>
            <span className="text-gradient"> Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From thrilling wildlife encounters to serene cultural immersions, 
            each experience is thoughtfully crafted to create lasting memories of your African adventure.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-playfair font-bold text-white mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center justify-between text-sm text-white/80 mb-6">
                    <span>{experience.duration}</span>
                    <span className="text-lg font-semibold text-primary">{experience.price}</span>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="sm" 
                    className="btn-luxury opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Create Your Perfect Safari
            </h3>
            <p className="text-muted-foreground mb-6">
              Let our expert team curate a personalized experience tailored to your interests and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury">
                Plan My Adventure
              </Button>
              <Button variant="outline" className="btn-ghost-luxury">
                Speak to Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};