"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import KapelaHero from "@/components/kapela-hero"
import KapelaDetails from "@/components/kapela-details"
import KapelaGallery from "@/components/kapela-gallery"
import KapelaAmenities from "@/components/kapela-amenities"

export default function KapelaPage() {
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
      <KapelaHero onBookingClick={openBookingModal} />
      <KapelaDetails />
      <KapelaGallery />
      <KapelaAmenities onBookingClick={openBookingModal} />
      <Footer />

      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} resort="kapela" />
    </main>
  )
}
