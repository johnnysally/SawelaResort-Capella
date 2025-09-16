"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Users, Waves } from "lucide-react"

interface KapelaHeroProps {
  onBookingClick: () => void
}

export default function KapelaHero({ onBookingClick }: KapelaHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/kapela-resort-aerial-overview-multiple-pools.jpg')",
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
          Family-Friendly Luxury Resort
        </Badge>
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance drop-shadow-lg">Capella Resort</h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Where vibrant luxury meets endless adventure. Experience dynamic hospitality in our family-friendly paradise
          with exciting activities and world-class amenities.
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Adventure Haven</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-white" />
            <span>5-Star Luxury</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Family Friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4" />
            <span>Multiple Pools</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg hover-lift drop-shadow-md"
          >
            Book Your Adventure
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg hover-lift bg-black/20 backdrop-blur-sm drop-shadow-md"
          >
            All-Inclusive Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
