"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, CheckCircle, CreditCard } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  resort?: "sawela" | "capella" | ""
}

export default function BookingModal({ isOpen, onClose, resort = "" }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    resort: resort,
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    roomType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate booking submission
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsBooked(true)
    setIsSubmitting(false)

    // Reset after 5 seconds
    setTimeout(() => {
      setIsBooked(false)
      setCurrentStep(1)
      setBookingData({
        resort: resort,
        checkIn: "",
        checkOut: "",
        guests: "2",
        rooms: "1",
        roomType: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialRequests: "",
      })
      onClose()
    }, 5000)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const roomTypes = {
    sawela: [
      { value: "oceanview", label: "Oceanview Suite", price: "$850/night" },
      { value: "presidential", label: "Presidential Suite", price: "$1,500/night" },
      { value: "penthouse", label: "Penthouse Villa", price: "$2,200/night" },
    ],
    kapela: [
      { value: "family", label: "Family Suite", price: "$650/night" },
      { value: "oceanfront", label: "Oceanfront Villa", price: "$950/night" },
      { value: "presidential", label: "Presidential Family Suite", price: "$1,800/night" },
    ],
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto luxury-shadow border-0">
        <CardHeader className="relative">
          <Button variant="ghost" size="sm" className="absolute top-4 right-4 hover:bg-muted" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
          <CardTitle className="text-2xl font-bold text-foreground">
            {isBooked ? "Booking Confirmed!" : "Book Your Stay"}
          </CardTitle>
          {!isBooked && (
            <div className="flex items-center space-x-2 mt-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="p-6">
          {isBooked ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Reservation Confirmed!</h3>
              <p className="text-muted-foreground mb-4">
                Your booking at {bookingData.resort === "sawela" ? "Sawela Resort" : "Kapela Resort"} has been
                confirmed.
              </p>
              <div className="bg-card p-4 rounded-lg text-left max-w-md mx-auto">
                <p className="text-sm text-muted-foreground mb-2">Confirmation Details:</p>
                <p className="font-medium">
                  {bookingData.firstName} {bookingData.lastName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {bookingData.checkIn} to {bookingData.checkOut}
                </p>
                <p className="text-sm text-muted-foreground">
                  {bookingData.guests} guests, {bookingData.rooms} room(s)
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                A confirmation email has been sent to {bookingData.email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Dates & Guests */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Select Dates & Guests</h3>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Resort *</label>
                    <select
                      name="resort"
                      value={bookingData.resort}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a resort</option>
                      <option value="sawela">Sawela Resort - Serene Elegance</option>
                      <option value="kapela">Kapela Resort - Vibrant Luxury</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Check-in Date *</label>
                      <Input
                        type="date"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Check-out Date *</label>
                      <Input
                        type="date"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleInputChange}
                        required
                        min={bookingData.checkIn || new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Guests *</label>
                      <select
                        name="guests"
                        value={bookingData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Rooms *</label>
                      <select
                        name="rooms"
                        value={bookingData.rooms}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {[1, 2, 3, 4].map((num) => (
                          <option key={num} value={num.toString()}>
                            {num} {num === 1 ? "Room" : "Rooms"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {bookingData.resort && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Room Type *</label>
                      <select
                        name="roomType"
                        value={bookingData.roomType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select room type</option>
                        {roomTypes[bookingData.resort as keyof typeof roomTypes]?.map((room) => (
                          <option key={room.value} value={room.value}>
                            {room.label} - {room.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <Button
                    type="button"
                    onClick={nextStep}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-lift"
                    disabled={
                      !bookingData.resort || !bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType
                    }
                  >
                    Continue to Guest Information
                  </Button>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Guest Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                      <Input
                        type="text"
                        name="firstName"
                        value={bookingData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <Input
                        type="text"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Special Requests</label>
                    <Textarea
                      name="specialRequests"
                      value={bookingData.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any special requests or dietary requirements..."
                      className="resize-none"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex-1 hover-lift bg-transparent"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-lift"
                      disabled={
                        !bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.phone
                      }
                    >
                      Review Booking
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Review & Confirm */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Review Your Booking</h3>

                  <div className="bg-card p-6 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Resort:</span>
                      <span className="text-muted-foreground">
                        {bookingData.resort === "sawela" ? "Sawela Resort" : "Kapela Resort"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Dates:</span>
                      <span className="text-muted-foreground">
                        {bookingData.checkIn} to {bookingData.checkOut}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Guests & Rooms:</span>
                      <span className="text-muted-foreground">
                        {bookingData.guests} guests, {bookingData.rooms} room(s)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Room Type:</span>
                      <span className="text-muted-foreground">
                        {
                          roomTypes[bookingData.resort as keyof typeof roomTypes]?.find(
                            (room) => room.value === bookingData.roomType,
                          )?.label
                        }
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Guest:</span>
                      <span className="text-muted-foreground">
                        {bookingData.firstName} {bookingData.lastName}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex-1 hover-lift bg-transparent"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-lift"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-4 w-4 mr-2" />
                          Confirm Booking
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
