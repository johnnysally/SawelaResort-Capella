"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Star, Users, Waves } from "lucide-react"

export default function ResortsPreview() {
  return (
    <section id="resorts" className="py-20 px-4 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">Our Luxury Resorts</h2>
          <p className="text-xl text-[#555555] max-w-3xl mx-auto text-pretty">
            Choose between two distinct experiences, each offering unparalleled luxury and unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Sawela Resort Preview */}
          <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group bg-white border border-[#E5E5E5] rounded-2xl">
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
              <p className="text-[#666666] mb-4 leading-relaxed">
                Experience serene elegance with oceanfront suites, world-class spa treatments, and pristine private
                beaches.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-[#777777]">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                  <span>5-Star Luxury</span>
                </div>
                <div className="flex items-center gap-1">
                  <Waves className="w-4 h-4 text-[#1A73E8]" />
                  <span>Oceanfront</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#34A853]" />
                  <span>Adults Only</span>
                </div>
              </div>
              <Link href="/sawela">
                <Button
                  className="w-full bg-gradient-to-r from-[#8B4513] to-[#D2B48C] hover:from-[#6F3A10] hover:to-[#C2A678] text-white font-semibold rounded-lg transition-colors"
                >
                  Explore Sawela Resort
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Kapela Resort Preview */}
          <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group bg-white border border-[#E5E5E5] rounded-2xl">
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
              <p className="text-[#666666] mb-4 leading-relaxed">
                Vibrant luxury with family-friendly amenities, adventure activities, and multiple pool complexes.
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-[#777777]">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                  <span>5-Star Luxury</span>
                </div>
                <div className="flex items-center gap-1">
                  <Waves className="w-4 h-4 text-[#1A73E8]" />
                  <span>Multiple Pools</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-[#34A853]" />
                  <span>Family Friendly</span>
                </div>
              </div>
              <Link href="/capella">
                <Button
                  className="w-full bg-gradient-to-r from-[#8B4513] to-[#D2B48C] hover:from-[#6F3A10] hover:to-[#C2A678] text-white font-semibold rounded-lg transition-colors"
                >
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
