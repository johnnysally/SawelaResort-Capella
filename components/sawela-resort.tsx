"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wifi, Car, Utensils, Waves, Dumbbell, Space as Spa, Coffee, Shield } from "lucide-react"

interface SawelaResortProps {
  onBookingClick: () => void
}

export default function SawelaResort({ onBookingClick }: SawelaResortProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const amenities = [
    { icon: Waves, title: "Private Beach", description: "Exclusive 500m stretch of pristine white sand" },
    { icon: Spa, title: "Luxury Spa", description: "Award-winning wellness center with 12 treatment rooms" },
    { icon: Utensils, title: "Fine Dining", description: "3 restaurants featuring world-class cuisine" },
    { icon: Dumbbell, title: "Fitness Center", description: "State-of-the-art equipment with ocean views" },
    { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary internet throughout the resort" },
    { icon: Car, title: "Valet Parking", description: "24/7 complimentary valet service" },
    { icon: Coffee, title: "Room Service", description: "24-hour gourmet room service" },
    { icon: Shield, title: "Concierge", description: "Personal concierge for every guest" },
  ]

  const galleryImages = [
    {
      src: "/sawela-oceanview-suite-with-private-balcony.jpg",
      alt: "Oceanview Suite with Private Balcony",
      title: "Oceanview Suite",
    },
    {
      src: "/sawela-infinity-pool-overlooking-turquoise-ocean.jpg",
      alt: "Infinity Pool Overlooking Ocean",
      title: "Infinity Pool",
    },
    {
      src: "/sawela-elegant-restaurant-with-ocean-views.jpg",
      alt: "Elegant Restaurant with Ocean Views",
      title: "Ocean Restaurant",
    },
    {
      src: "/sawela-luxury-spa-treatment-room.jpg",
      alt: "Luxury Spa Treatment Room",
      title: "Spa Sanctuary",
    },
    {
      src: "/sawela-private-beach-with-cabanas.jpg",
      alt: "Private Beach with Cabanas",
      title: "Private Beach",
    },
    {
      src: "/sawela-presidential-suite-living-area.jpg",
      alt: "Presidential Suite Living Area",
      title: "Presidential Suite",
    },
  ]

  return (
    <section id="sawela" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resort Overview */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Sawela Resort</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Serene Elegance</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Nestled along a pristine coastline, Sawela Resort embodies tranquil luxury. With its minimalist design and
            breathtaking ocean views, this sanctuary offers an intimate escape where serenity meets sophistication.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Resort Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Oceanfront Suites</h4>
                  <p className="text-muted-foreground">
                    All 120 suites feature panoramic ocean views and private balconies
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Adults-Only Sanctuary</h4>
                  <p className="text-muted-foreground">Peaceful environment designed for relaxation and romance</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Michelin-Star Dining</h4>
                  <p className="text-muted-foreground">Culinary excellence with locally-sourced ingredients</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Wellness Retreat</h4>
                  <p className="text-muted-foreground">Holistic spa treatments and meditation pavilions</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="/sawela-resort-exterior-sunset-view.jpg"
              alt="Sawela Resort at sunset"
              className="rounded-lg luxury-shadow w-full h-auto"
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">Resort Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer hover-lift"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg luxury-shadow"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">World-Class Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="luxury-shadow hover-lift border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{amenity.title}</h4>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Section */}
        <div className="text-center bg-card rounded-2xl p-12 luxury-shadow">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Experience Sawela?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your stay at Sawela Resort and discover a world where tranquility meets luxury. Our team is ready to
            create an unforgettable experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 hover-lift"
              onClick={onBookingClick}
            >
              Book Sawela Resort
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 hover-lift bg-transparent">
              View Rates & Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
