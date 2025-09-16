"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wifi, Car, Utensils, Waves, Dumbbell, Space as Spa, Coffee, Shield, Wine, Sunset } from "lucide-react"

interface SawelaAmenitiesProps {
  onBookingClick: () => void
}

export default function SawelaAmenities({ onBookingClick }: SawelaAmenitiesProps) {
  const amenities = [
    {
      icon: Waves,
      title: "Private Beach",
      description: "Exclusive 500m stretch of pristine white sand with luxury cabanas",
    },
    {
      icon: Spa,
      title: "Luxury Spa",
      description: "Award-winning wellness center with 12 treatment rooms and holistic therapies",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "3 Michelin-starred restaurants featuring world-class cuisine",
    },
    { icon: Wine, title: "Wine Cellar", description: "Curated collection of premium wines with sommelier tastings" },
    { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art equipment with panoramic ocean views" },
    {
      icon: Sunset,
      title: "Sunset Lounge",
      description: "Exclusive rooftop bar with craft cocktails and ocean vistas",
    },
    { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary fiber-optic internet throughout the resort" },
    { icon: Car, title: "Valet Parking", description: "24/7 complimentary valet service with luxury vehicle care" },
    { icon: Coffee, title: "Room Service", description: "24-hour gourmet room service with personalized menus" },
    { icon: Shield, title: "Concierge", description: "Dedicated personal concierge for every guest experience" },
  ]

  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-900 mb-6">World-Class Amenities</h2>
          <p className="text-xl text-green-800 max-w-3xl mx-auto text-pretty">
            Every detail at Sawela Resort is designed to exceed expectations, offering unparalleled luxury and
            personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <Card key={index} className="luxury-shadow hover-lift border-0 group bg-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <amenity.icon className="h-8 w-8 text-green-900" />
                </div>
                <h4 className="font-semibold text-green-900 mb-2">{amenity.title}</h4>
                <p className="text-sm text-green-700 leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="text-center bg-amber-100 rounded-2xl p-12 luxury-shadow">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Ready to Experience Sawela?
          </h3>
          <p className="text-green-800 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Book your stay at Sawela Resort and discover a world where tranquility meets luxury. Our team is ready to
            create an unforgettable experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-200 hover:bg-green-300 text-green-900 px-8 py-4 hover-lift font-semibold"
              onClick={onBookingClick}
            >
              Book Sawela Resort
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 hover-lift bg-transparent border-green-400 text-green-900 hover:bg-green-200 hover:text-green-900"
            >
              View Rates & Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
