"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import SawelaHero from "@/components/sawela-hero"
import SawelaDetails from "@/components/sawela-details"
import SawelaGallery from "@/components/sawela-gallery"
import SawelaAmenities from "@/components/sawela-amenities"

export default function SawelaPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = () => {
    setIsBookingModalOpen(true)
  }

  const closeBookingModal = () => {
    setIsBookingModalOpen(false)
  }

  return (
    <main className="min-h-screen">
      <Navigation onBookingClick={openBookingModal} />
      <SawelaHero onBookingClick={openBookingModal} />
      <SawelaDetails />
      <SawelaGallery />
      <SawelaAmenities onBookingClick={openBookingModal} />
      <Footer />

      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} resort="sawela" />
    </main>
  )
}
