"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HomeHero from "@/components/home-hero"
import ResortsPreview from "@/components/resorts-preview"
import HomeTestimonials from "@/components/home-testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"
import HomeBookingForm from "@/components/home-booking-form"

export default function HomePage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedResort, setSelectedResort] = useState<"sawela" | "capella" | "">("")

  const openBookingModal = (resort: "sawela" | "capella" | "" = "") => {
    setSelectedResort(resort)
    setIsBookingModalOpen(true)
  }

  const closeBookingModal = () => {
    setIsBookingModalOpen(false)
    setSelectedResort("")
  }

  return (
    <main className="min-h-screen">
      <Navigation onBookingClick={() => openBookingModal()} />
      <HomeHero onBookingClick={() => openBookingModal()} />
      <ResortsPreview />
      <HomeBookingForm onBookingSubmit={(data) => console.log("Booking submitted:", data)} />
      <HomeTestimonials />
      <ContactSection />
      <Footer />

      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} resort={selectedResort} />
    </main>
  )
}
