"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, MapPin, Users, Phone, Mail, User } from "lucide-react"

interface HomeBookingFormProps {
  onBookingSubmit?: (data: any) => void
}

export default function HomeBookingForm({ onBookingSubmit }: HomeBookingFormProps) {
  const [formData, setFormData] = useState({
    resort: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    onBookingSubmit?.(formData)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        resort: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        name: "",
        email: "",
        phone: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-cream to-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-luxury p-12">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Booking Request Submitted!</h3>
              <p className="text-warm-gray-600 mb-6">
                Thank you for your interest in {formData.resort === "sawela" ? "Sawela Resort" : "Kapela Resort"}. Our
                team will contact you within 24 hours to confirm your reservation.
              </p>
              <div className="text-sm text-warm-gray-500">Redirecting to booking confirmation...</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#8B5E3C] via-[#F5F5DC] to-[#3A7D44]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Book Your Perfect Getaway</h2>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Choose between our two luxury resorts and let us create an unforgettable experience for you
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-luxury p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Resort Selection */}
              <div>
                <label className="block text-lg font-semibold text-primary mb-4">
                  <MapPin className="inline w-5 h-5 mr-2" />
                  Choose Your Resort
                </label>
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.resort === "sawela"
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-warm-gray-200 hover:border-primary/50"
                    }`}
                    onClick={() => setFormData((prev) => ({ ...prev, resort: "sawela" }))}
                  >
                    <input
                      type="radio"
                      name="resort"
                      value="sawela"
                      checked={formData.resort === "sawela"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-serif font-bold text-primary mb-2">Sawela Resort</h3>
                      <p className="text-warm-gray-600 text-sm mb-3">Adults-Only Luxury</p>
                      <div className="text-xs text-warm-gray-500">
                        Serene elegance • Premium suites • World-class spa
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.resort === "kapela"
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-warm-gray-200 hover:border-primary/50"
                    }`}
                    onClick={() => setFormData((prev) => ({ ...prev, resort: "kapela" }))}
                  >
                    <input
                      type="radio"
                      name="resort"
                      value="kapela"
                      checked={formData.resort === "kapela"}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-serif font-bold text-primary mb-2">Kapela Resort</h3>
                      <p className="text-warm-gray-600 text-sm mb-3">Family Adventure</p>
                      <div className="text-xs text-warm-gray-500">Vibrant luxury • Multiple pools • Kids club</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dates and Guests */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-warm-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    min={formData.checkIn || new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-warm-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-warm-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-warm-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3 border border-warm-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.resort}
                  className="inline-flex items-center px-12 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-3" />
                      Book Your Stay
                    </>
                  )}
                </button>

                {!formData.resort && (
                  <p className="text-sm text-warm-gray-500 mt-3">Please select a resort to continue</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
