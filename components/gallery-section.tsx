"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: "sawela" | "capella" | "dining" | "amenities"
  resort?: string
}

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages: GalleryImage[] = [
    // Sawela Resort Images
    {
      src: "/sawela-oceanview-suite-with-private-balcony.jpg",
      alt: "Sawela Oceanview Suite",
      title: "Oceanview Suite - Sawela",
      category: "sawela",
      resort: "Sawela Resort",
    },
    {
      src: "/sawela-infinity-pool-overlooking-turquoise-ocean.jpg",
      alt: "Sawela Infinity Pool",
      title: "Infinity Pool - Sawela",
      category: "sawela",
      resort: "Sawela Resort",
    },
    {
      src: "/sawela-luxury-spa-treatment-room.jpg",
      alt: "Sawela Spa Treatment Room",
      title: "Luxury Spa - Sawela",
      category: "amenities",
      resort: "Sawela Resort",
    },
    {
      src: "/sawela-private-beach-with-cabanas.jpg",
      alt: "Sawela Private Beach",
      title: "Private Beach - Sawela",
      category: "sawela",
      resort: "Sawela Resort",
    },
    {
      src: "/sawela-presidential-suite-living-area.jpg",
      alt: "Sawela Presidential Suite",
      title: "Presidential Suite - Sawela",
      category: "sawela",
      resort: "Sawela Resort",
    },
    {
      src: "/sawela-elegant-restaurant-with-ocean-views.jpg",
      alt: "Sawela Ocean Restaurant",
      title: "Ocean Restaurant - Sawela",
      category: "dining",
      resort: "Sawela Resort",
    },

    // Kapela Resort Images
    {
      src: "/vibrant-pool-area-with-swim-up-bar.jpg",
      alt: "Kapela Pool Area",
      title: "Pool Paradise - Kapela",
      category: "capella",
      resort: "Kapela Resort",
    },
    {
      src: "/family-suite-with-ocean-balcony.jpg",
      alt: "Kapela Family Suite",
      title: "Family Suite - Kapela",
      category: "capella",
      resort: "Kapela Resort",
    },
    {
      src: "/beachside-restaurant-at-sunset.jpg",
      alt: "Kapela Beachside Restaurant",
      title: "Sunset Dining - Kapela",
      category: "dining",
      resort: "Kapela Resort",
    },
    {
      src: "/water-sports-center-with-equipment.jpg",
      alt: "Kapela Water Sports",
      title: "Adventure Hub - Kapela",
      category: "amenities",
      resort: "Kapela Resort",
    },
    {
      src: "/kids-club-playground-area.jpg",
      alt: "Kapela Kids Club",
      title: "Kids Paradise - Kapela",
      category: "amenities",
      resort: "Kapela Resort",
    },
    {
      src: "/beach-volleyball-court-at-golden-hour.jpg",
      alt: "Kapela Beach Volleyball",
      title: "Beach Sports - Kapela",
      category: "capella",
      resort: "Kapela Resort",
    },

    // Additional Gallery Images
    {
      src: "/luxury-tropical-resort-with-infinity-pool-overlook.jpg",
      alt: "Resort Overview",
      title: "Paradise Overview",
      category: "amenities",
    },
    {
      src: "/elegant-hotel-lobby-with-marble-floors-and-crystal.jpg",
      alt: "Elegant Lobby",
      title: "Grand Lobby",
      category: "amenities",
    },
  ]

  const categories = [
    { id: "all", name: "All Photos", count: galleryImages.length },
    { id: "sawela", name: "Sawela Resort", count: galleryImages.filter((img) => img.category === "sawela").length },
    { id: "kapela", name: "Kapela Resort", count: galleryImages.filter((img) => img.category === "capella").length },
    { id: "dining", name: "Dining", count: galleryImages.filter((img) => img.category === "dining").length },
    { id: "amenities", name: "Amenities", count: galleryImages.filter((img) => img.category === "amenities").length },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
  }

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-6">Resort Gallery</h2>
          <p className="text-lg text-green-800 max-w-3xl mx-auto text-pretty">
            Explore the beauty and luxury of both Sawela and Kapela Resorts through our curated collection of stunning
            photography. Each image tells a story of elegance, comfort, and unforgettable experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`hover-lift ${
                selectedCategory === category.id
                  ? "bg-green-200 text-green-900"
                  : "bg-amber-50 hover:bg-green-100 text-green-800"
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={`${image.src}-${index}`}
              className="group cursor-pointer overflow-hidden border border-green-200 bg-amber-50 hover:bg-green-50 hover-lift"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-square">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-green-100/0 group-hover:bg-green-200/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-200/90 to-transparent p-4">
                  <h3 className="text-green-900 font-semibold text-sm">{image.title}</h3>
                  {image.resort && <p className="text-green-800 text-xs">{image.resort}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-green-100/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-green-200 hover:bg-green-300 text-green-900"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-green-200 hover:bg-green-300 text-green-900"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-green-200 hover:bg-green-300 text-green-900"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}

              {/* Image */}
              <img
                src={filteredImages[currentImageIndex]?.src || "/placeholder.svg"}
                alt={filteredImages[currentImageIndex]?.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-green-200/80 rounded-lg p-4 text-green-900">
                <h3 className="text-xl font-semibold mb-1">{filteredImages[currentImageIndex]?.title}</h3>
                {filteredImages[currentImageIndex]?.resort && (
                  <p className="text-green-800">{filteredImages[currentImageIndex]?.resort}</p>
                )}
                <p className="text-sm text-green-700 mt-2">
                  {currentImageIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
