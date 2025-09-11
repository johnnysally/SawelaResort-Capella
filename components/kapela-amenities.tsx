"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Music,
  Gamepad2,
  Utensils,
  Waves,
  Users,
  Palmtree,
  CloudHail as Cocktail,
  Camera,
  Wifi,
  Car,
} from "lucide-react"

interface KapelaAmenitiesProps {
  onBookingClick: () => void
}

export default function KapelaAmenities({ onBookingClick }: KapelaAmenitiesProps) {
  const amenities = [
    {
      icon: Waves,
      title: "Water Sports",
      description: "Jet skiing, parasailing, snorkeling, and sailing adventures with certified instructors",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Nightly shows, live music performances, and cultural experiences in our amphitheater",
    },
    {
      icon: Utensils,
      title: "5 Restaurants",
      description: "International cuisine, beachside dining, and specialty restaurants with all-inclusive options",
    },
    {
      icon: Cocktail,
      title: "Pool Bars",
      description: "4 bars including swim-up service, tropical cocktails, and premium beverage selections",
    },
    {
      icon: Gamepad2,
      title: "Activity Center",
      description: "Tennis courts, beach volleyball, mini-golf, and recreational games for all ages",
    },
    {
      icon: Users,
      title: "Kids Club",
      description: "Supervised activities for children aged 4-12 with playground and educational programs",
    },
    {
      icon: Palmtree,
      title: "Beach Club",
      description: "Exclusive beach access with luxury cabanas, water sports, and beachside service",
    },
    {
      icon: Camera,
      title: "Adventure Tours",
      description: "Island excursions, cultural experiences, and guided tours to local attractions",
    },
    { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary fiber-optic internet throughout the resort" },
    { icon: Car, title: "Valet Parking", description: "24/7 complimentary valet service with luxury vehicle care" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-cream-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-800 mb-6">Exciting Amenities</h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto text-pretty">
            From thrilling water sports to relaxing pool bars, Kapela Resort offers endless possibilities for adventure
            and luxury in a vibrant, family-friendly environment.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className="luxury-shadow hover-lift border-0 group bg-gradient-to-br from-white via-cream-50 to-green-50"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <amenity.icon className="h-8 w-8 text-green-700" />
                </div>
                <h4 className="font-semibold text-green-800 mb-2">{amenity.title}</h4>
                <p className="text-sm text-green-700 leading-relaxed">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="text-center bg-gradient-to-r from-cream-50 to-green-50 rounded-2xl p-12 luxury-shadow">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Ready for Adventure at Capella?
          </h3>
          <p className="text-green-700 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join us at Kapela Resort for an unforgettable vacation filled with excitement, luxury, and endless
            possibilities. Perfect for families, couples, and adventure enthusiasts seeking vibrant experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 hover-lift font-semibold rounded-xl shadow-md"
              onClick={onBookingClick}
            >
              Book Capella Resort
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 hover-lift border-green-700 text-green-700 bg-white hover:bg-green-100 rounded-xl shadow-sm"
            >
              Explore All-Inclusive Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
