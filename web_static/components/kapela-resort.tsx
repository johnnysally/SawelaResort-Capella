"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Music, Gamepad2, Utensils, Waves, Users, Palmtree, CloudHail as Cocktail, Camera } from "lucide-react"

interface KapelaResortProps {
  onBookingClick: () => void
}

export default function KapelaResort({ onBookingClick }: KapelaResortProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const amenities = [
    { icon: Waves, title: "Water Sports", description: "Jet skiing, parasailing, and diving adventures" },
    { icon: Music, title: "Live Entertainment", description: "Nightly shows and live music performances" },
    { icon: Utensils, title: "5 Restaurants", description: "International cuisine and beachside dining" },
    { icon: Cocktail, title: "Pool Bar", description: "Tropical cocktails and swim-up service" },
    { icon: Gamepad2, title: "Activity Center", description: "Tennis, volleyball, and recreational games" },
    { icon: Users, title: "Kids Club", description: "Supervised activities for children aged 4-12" },
    { icon: Palmtree, title: "Beach Club", description: "Exclusive beach access with cabana service" },
    { icon: Camera, title: "Adventure Tours", description: "Island excursions and cultural experiences" },
  ]

  const galleryImages = [
    {
      src: "/vibrant-pool-area-with-swim-up-bar.jpg",
      alt: "Vibrant Pool Area with Swim-up Bar",
      title: "Pool Paradise",
    },
    {
      src: "/family-suite-with-ocean-balcony.jpg",
      alt: "Family Suite with Ocean Balcony",
      title: "Family Suite",
    },
    {
      src: "/sawela-private-beach-with-cabanas.jpg",
      alt: "Beachside Restaurant at Sunset",
      title: "Sunset Dining",
    },
    {
      src: "/water-sports-center-with-equipment.jpg",
      alt: "Water Sports Center",
      title: "Adventure Hub",
    },
    {
      src: "/sawela-oceanview-suite-with-private-balcony.jpg",
      alt: "Kids Club Playground",
      title: "Kids Paradise",
    },
    {
      src: "/beach-volleyball-court-at-golden-hour.jpg",
      alt: "Beach Volleyball Court",
      title: "Beach Sports",
    },
  ]

  return (
    <section id="kapela" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resort Overview */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Capella Resort</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Vibrant Luxury</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience the energy of paradise at Kapela Resort. This dynamic destination combines luxury accommodations
            with exciting activities, world-class entertainment, and vibrant social spaces perfect for families and
            adventure seekers.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="/kapela-resort-aerial-overview-multiple-pools.jpg"
              alt="Kapela Resort aerial view"
              className="rounded-lg luxury-shadow w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Resort Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Family-Friendly Luxury</h4>
                  <p className="text-muted-foreground">200 spacious suites designed for families and couples alike</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Multiple Pool Complex</h4>
                  <p className="text-muted-foreground">5 themed pools including adults-only and kids' water park</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Adventure Activities</h4>
                  <p className="text-muted-foreground">Water sports, tennis, volleyball, and guided excursions</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Entertainment Program</h4>
                  <p className="text-muted-foreground">Daily activities, live shows, and cultural performances</p>
                </div>
              </li>
            </ul>
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
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">Exciting Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="luxury-shadow hover-lift border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <amenity.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{amenity.title}</h4>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="luxury-shadow hover-lift border-0 bg-primary/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">All-Inclusive Experience</h4>
              <p className="text-muted-foreground">
                Enjoy unlimited dining, premium beverages, and activities with our comprehensive all-inclusive package.
              </p>
            </CardContent>
          </Card>

          <Card className="luxury-shadow hover-lift border-0 bg-secondary/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Water Adventure</h4>
              <p className="text-muted-foreground">
                From snorkeling to jet skiing, explore the crystal-clear waters with our complimentary water sports.
              </p>
            </CardContent>
          </Card>

          <Card className="luxury-shadow hover-lift border-0 bg-primary/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Live Entertainment</h4>
              <p className="text-muted-foreground">
                Experience nightly shows, live music, and cultural performances in our state-of-the-art amphitheater.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Booking Section */}
        <div className="text-center bg-background rounded-2xl p-12 luxury-shadow">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready for Adventure at Kapela?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us at Capella Resort for an unforgettable vacation filled with excitement, luxury, and endless
            possibilities. Perfect for families, couples, and adventure enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 hover-lift"
              onClick={onBookingClick}
            >
              Book Capella Resort
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 hover-lift bg-transparent">
              Explore All-Inclusive Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
