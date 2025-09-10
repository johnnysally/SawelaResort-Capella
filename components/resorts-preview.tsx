"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Star, Users, Waves } from "lucide-react"

export default function ResortsPreview() {
  return (
    <section id="resorts" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Our Luxury Resorts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose between two distinct experiences, each offering unparalleled luxury and unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Sawela Resort Preview */}
          <Card className="overflow-hidden luxury-shadow hover-lift group">
            <div className="relative h-80">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/sawela-private-beach-with-cabanas.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Tropical Paradise</span>
                </div>
                <h3 className="font-serif text-2xl font-bold">Sawela Resort</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Experience serene elegance with oceanfront suites, world-class spa treatments, and pristine private
                beaches.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span>5-Star Luxury</span>
                </div>
                <div className="flex items-center gap-1">
                  <Waves className="w-4 h-4" />
                  <span>Oceanfront</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Adults Only</span>
                </div>
              </div>
              <Link href="/sawela">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Sawela Resort
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Kapela Resort Preview */}
          <Card className="overflow-hidden luxury-shadow hover-lift group">
            <div className="relative h-80">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: "url('/luxury-tropical-resort-with-infinity-pool-overlook.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Adventure Haven</span>
                </div>
                <h3 className="font-serif text-2xl font-bold">Kapela Resort</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Vibrant luxury with family-friendly amenities, adventure activities, and multiple pool complexes.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span>5-Star Luxury</span>
                </div>
                <div className="flex items-center gap-1">
                  <Waves className="w-4 h-4" />
                  <span>Multiple Pools</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Family Friendly</span>
                </div>
              </div>
              <Link href="/kapela">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Kapela Resort
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
