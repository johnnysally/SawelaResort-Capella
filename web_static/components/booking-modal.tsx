"use client"

import { useState } from "react"
import { X, Calendar, Users, CreditCard, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    lodge: "sawela",
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

  if (!isOpen) return null

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        alert(`Booking failed: ${errorData.message || response.statusText}`)
        return
      }

      alert("Booking confirmed! Thank you for choosing our lodge.")
      onClose()
      setCurrentStep(1)
      setFormData({
        lodge: "sawela",
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
    } catch (error) {
      alert(`Booking failed: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  const roomTypes = [
    { value: "standard", label: "Standard Room - $150/night" },
    { value: "deluxe", label: "Deluxe Room - $200/night" },
    { value: "suite", label: "Suite - $300/night" },
    { value: "presidential", label: "Presidential Suite - $500/night" },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-amber-200/50">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-amber-100 to-green-100 p-6 border-b border-amber-200/50 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-amber-900">Book Your Stay</h2>
              <p className="text-amber-700">Step {currentStep} of 3</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-amber-700 hover:bg-amber-200/50">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex mt-4 space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex-1 h-2 rounded-full ${
                  step <= currentStep ? "bg-gradient-to-r from-amber-500 to-green-500" : "bg-amber-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Steps Content */}
        <div className="p-6">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Calendar className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-amber-900">Select Lodge, Dates & Guests</h3>
              </div>

              <div>
                <Label htmlFor="lodge" className="text-amber-800 font-medium">
                  Select Lodge
                </Label>
                <Select value={formData.lodge} onValueChange={(value) => handleInputChange("lodge", value)}>
                  <SelectTrigger className="border-amber-300 focus:border-green-500 bg-white/80">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sawela">Sawela Lodge</SelectItem>
                    <SelectItem value="capella">Capella Lodge</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkIn" className="text-amber-800 font-medium">
                    Check-in Date
                  </Label>
                  <Input
                    id="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => handleInputChange("checkIn", e.target.value)}
                    className="border-amber-300 focus:border-green-500 bg-white/80"
                  />
                </div>
                <div>
                  <Label htmlFor="checkOut" className="text-amber-800 font-medium">
                    Check-out Date
                  </Label>
                  <Input
                    id="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => handleInputChange("checkOut", e.target.value)}
                    className="border-amber-300 focus:border-green-500 bg-white/80"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guests" className="text-amber-800 font-medium">
                    Guests
                  </Label>
                  <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                    <SelectTrigger className="border-amber-300 focus:border-green-500 bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="rooms" className="text-amber-800 font-medium">
                    Rooms
                  </Label>
                  <Select value={formData.rooms} onValueChange={(value) => handleInputChange("rooms", value)}>
                    <SelectTrigger className="border-amber-300 focus:border-green-500 bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="roomType" className="text-amber-800 font-medium">
                  Room Type
                </Label>
                <Select value={formData.roomType} onValueChange={(value) => handleInputChange("roomType", value)}>
                  <SelectTrigger className="border-amber-300 focus:border-green-500 bg-white/80">
                    <SelectValue placeholder="Select a room type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map((room) => (
                      <SelectItem key={room.value} value={room.value}>
                        {room.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-amber-900">Guest Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-amber-800 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="border-amber-300 focus:border-green-500 bg-white/80"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-amber-800 font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="border-amber-300 focus:border-green-500 bg-white/80"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-amber-800 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-amber-300 focus:border-green-500 bg-white/80"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-amber-800 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="border-amber-300 focus:border-green-500 bg-white/80"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <Label htmlFor="specialRequests" className="text-amber-800 font-medium">
                  Special Requests (Optional)
                </Label>
                <textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  className="w-full p-3 border border-amber-300 rounded-lg focus:border-green-500 bg-white/80 resize-none"
                  rows={3}
                  placeholder="Any special requests or requirements..."
                />
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <CreditCard className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-amber-900">Review & Confirm</h3>
              </div>

              <Card className="border-amber-200 bg-white/50">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-green-100">
                  <CardTitle className="text-amber-900">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-amber-800">Lodge:</span>
                    <span className="font-medium text-amber-900 capitalize">{formData.lodge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Check-in:</span>
                    <span className="font-medium text-amber-900">{formData.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Check-out:</span>
                    <span className="font-medium text-amber-900">{formData.checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Guests:</span>
                    <span className="font-medium text-amber-900">{formData.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Rooms:</span>
                    <span className="font-medium text-amber-900">{formData.rooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Room Type:</span>
                    <span className="font-medium text-amber-900">
                      {roomTypes.find((r) => r.value === formData.roomType)?.label || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Guest:</span>
                    <span className="font-medium text-amber-900">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Email:</span>
                    <span className="font-medium text-amber-900">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800">Phone:</span>
                    <span className="font-medium text-amber-900">{formData.phone}</span>
                  </div>
                  {formData.specialRequests && (
                    <div className="pt-2 border-t border-amber-200">
                      <span className="text-amber-800">Special Requests:</span>
                      <p className="text-amber-900 mt-1">{formData.specialRequests}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-amber-200">
            {currentStep > 1 && (
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-100 bg-transparent"
              >
                Previous
              </Button>
            )}
            <div className="ml-auto">
              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-amber-600 to-green-600 hover:from-amber-700 hover:to-green-700 text-white"
                  disabled={
                    (currentStep === 1 &&
                      (!formData.checkIn || !formData.checkOut || !formData.roomType)) ||
                    (currentStep === 2 &&
                      (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
                  }
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal

