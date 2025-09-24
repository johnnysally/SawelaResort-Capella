"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, User, BedDouble, Gift, Coffee, Airplay
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface BookingState {
  hotel: string;
  service: string;
  step: number;
  guestDetails: GuestDetails;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  conferenceHall: string;
  conferenceGuests: number;
  occasionType: string;
  occasionGuests: number;
  extras: string[];
}

const HOTELS = ["Capella Resort", "Sawela Lodge"];

const SERVICES = [
  { id: "room", name: "Room Booking", icon: BedDouble },
  { id: "conference", name: "Conference Booking", icon: Airplay },
  { id: "occasion", name: "Occasion Booking", icon: Gift },
  { id: "extras", name: "Extras", icon: Coffee },
];

const ROOM_TYPES = [
  { id: "Luxury Suite", price: 25000 },
  { id: "Executive Villa", price: 40000 },
  { id: "Honeymoon Haven", price: 30000 },
];

const CONFERENCE_HALLS = [
  { id: "Small", maxGuests: 20 },
  { id: "Medium", maxGuests: 50 },
  { id: "Grand", maxGuests: 100 },
];

const OCCASION_TYPES = ["Wedding", "Birthday", "Anniversary", "Corporate Event", "Other"];
const EXTRAS_OPTIONS = [
  { id: "Spa", price: 5000 },
  { id: "Breakfast", pricePerGuest: 1000 },
  { id: "Airport Pickup", price: 3000 },
];

export default function BookingCard({ onClose }: { onClose?: () => void }) {
  const [booking, setBooking] = useState<BookingState>({
    hotel: "",
    service: "",
    step: 0,
    guestDetails: { firstName: "", lastName: "", email: "", phone: "" },
    roomType: "Luxury Suite",
    checkIn: "",
    checkOut: "",
    guests: 1,
    conferenceHall: "Small",
    conferenceGuests: 0,
    occasionType: "Wedding",
    occasionGuests: 0,
    extras: [],
  });

  const updateGuest = (field: keyof GuestDetails, value: string) => {
    setBooking((prev) => ({
      ...prev,
      guestDetails: { ...prev.guestDetails, [field]: value },
    }));
  };

  const toggleExtra = (extraId: string) => {
    setBooking((prev) => {
      if (prev.extras.includes(extraId)) {
        return { ...prev, extras: prev.extras.filter((e) => e !== extraId) };
      } else {
        return { ...prev, extras: [...prev.extras, extraId] };
      }
    });
  };

  const handleNumberInput = (value: string, setter: (n: number) => void) => {
    if (value === "") {
      setter(0);
    } else {
      const num = parseInt(value);
      if (!isNaN(num)) setter(num);
    }
  };

  const calculateTotal = () => {
    let total = 0;

    if (booking.service === "room") {
      const room = ROOM_TYPES.find((r) => r.id === booking.roomType);
      if (room) total += room.price;
    }
    if (booking.service === "conference") total += booking.conferenceGuests * 1000;
    if (booking.service === "occasion") total += booking.occasionGuests * 1000;

    booking.extras.forEach((extra) => {
      const option = EXTRAS_OPTIONS.find((o) => o.id === extra);
      if (option) {
        total += option.pricePerGuest ? option.pricePerGuest * booking.guests : option.price || 0;
      }
    });

    return total;
  };

  const handleBookNow = () => {
    alert(
      `Booking Summary:
Hotel: ${booking.hotel}
Service: ${booking.service}
Name: ${booking.guestDetails.firstName} ${booking.guestDetails.lastName}
Email: ${booking.guestDetails.email}
Phone: ${booking.guestDetails.phone}
Room: ${booking.roomType}
Check-in: ${booking.checkIn}
Check-out: ${booking.checkOut}
Guests: ${booking.guests}
Conference: ${booking.conferenceGuests ? `${booking.conferenceHall} (${booking.conferenceGuests})` : "None"}
Occasion: ${booking.occasionGuests ? `${booking.occasionType} (${booking.occasionGuests})` : "None"}
Extras: ${booking.extras.length ? booking.extras.join(", ") : "None"}
Total: KSh ${calculateTotal().toLocaleString()}`
    );
    if (onClose) onClose();
  };

  const nextStep = () => setBooking((prev) => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setBooking((prev) => ({ ...prev, step: prev.step - 1 }));

  const renderStep = () => {
    switch (booking.step) {
      case 0: // Hotel selection
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {HOTELS.map((hotel) => (
              <button
                key={hotel}
                onClick={() => setBooking({ ...booking, hotel, step: 1 })}
                className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 transition-transform"
              >
                <BedDouble className="w-8 h-8 text-white mb-2" />
                <span className="font-semibold text-white">{hotel}</span>
              </button>
            ))}
          </motion.div>
        );

      case 1: // Service selection
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setBooking({ ...booking, service: s.id, step: 2 })}
                  className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 transition-transform"
                >
                  <Icon className="w-8 h-8 text-white mb-2" />
                  <span className="font-semibold text-white">{s.name}</span>
                </button>
              );
            })}
          </motion.div>
        );

      case 2: // Guest Details
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <h3 className="text-xl font-bold text-center">Guest Details</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {(["firstName", "lastName", "email", "phone"] as (keyof GuestDetails)[]).map((field) => (
                <label key={field} className="flex flex-col">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={booking.guestDetails[field]}
                    onChange={(e) => updateGuest(field, e.target.value)}
                    className="mt-1 p-3 border rounded-xl outline-none"
                  />
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button onClick={prevStep} className="btn-ghost-luxury">Back</Button>
              <Button onClick={nextStep} className="btn-luxury">Next</Button>
            </div>
          </motion.div>
        );

      case 3: // Service-specific options
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            {booking.service === "room" && (
              <>
                <label className="flex flex-col">
                  Room Type
                  <select
                    value={booking.roomType}
                    onChange={(e) => setBooking({ ...booking, roomType: e.target.value })}
                    className="mt-1 p-3 border rounded-xl outline-none"
                  >
                    {ROOM_TYPES.map((r) => (
                      <option key={r.id}>{r.id}</option>
                    ))}
                  </select>
                </label>
                <div className="flex space-x-4">
                  <label className="flex-1 flex flex-col">
                    Check-in
                    <input
                      type="date"
                      value={booking.checkIn}
                      onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })}
                      className="mt-1 p-3 border rounded-xl outline-none"
                    />
                  </label>
                  <label className="flex-1 flex flex-col">
                    Check-out
                    <input
                      type="date"
                      value={booking.checkOut}
                      onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })}
                      className="mt-1 p-3 border rounded-xl outline-none"
                    />
                  </label>
                </div>
                <label className="flex flex-col">
                  Number of Guests
                  <input
                    type="number"
                    min={1}
                    value={booking.guests || ""}
                    onChange={(e) => handleNumberInput(e.target.value, (n) => setBooking({ ...booking, guests: n }))}
                    className="mt-1 p-3 border rounded-xl outline-none"
                  />
                </label>
              </>
            )}

            {booking.service === "conference" && (
              <>
                <label className="flex flex-col">
                  Conference Hall
                  <select
                    value={booking.conferenceHall}
                    onChange={(e) => setBooking({ ...booking, conferenceHall: e.target.value })}
                    className="mt-1 p-3 border rounded-xl outline-none"
                  >
                    {CONFERENCE_HALLS.map((c) => (
                      <option key={c.id}>{c.id} (max {c.maxGuests} guests)</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col">
                  Number of Guests
                  <input
                    type="number"
                    min={0}
                    max={CONFERENCE_HALLS.find((c) => c.id === booking.conferenceHall)?.maxGuests || 0}
                    value={booking.conferenceGuests || ""}
                    onChange={(e) => handleNumberInput(e.target.value, (n) => setBooking({ ...booking, conferenceGuests: n }))}
                    className="mt-1 p-3 border rounded-xl outline-none"
                  />
                </label>
              </>
            )}

            {booking.service === "occasion" && (
              <>
                <label className="flex flex-col">
                  Occasion Type
                  <select
                    value={booking.occasionType}
                    onChange={(e) => setBooking({ ...booking, occasionType: e.target.value })}
                    className="mt-1 p-3 border rounded-xl outline-none"
                  >
                    {OCCASION_TYPES.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col">
                  Number of Guests
                  <input
                    type="number"
                    min={0}
                    value={booking.occasionGuests || ""}
                    onChange={(e) => handleNumberInput(e.target.value, (n) => setBooking({ ...booking, occasionGuests: n }))}
                    className="mt-1 p-3 border rounded-xl outline-none"
                  />
                </label>
              </>
            )}

            {booking.service === "extras" && (
              <div className="flex flex-col space-y-2">
                {EXTRAS_OPTIONS.map((e) => (
                  <label key={e.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={booking.extras.includes(e.id)}
                      onChange={() => toggleExtra(e.id)}
                      className="accent-primary"
                    />
                    {e.id === "Spa" && <Gift />}
                    {e.id === "Breakfast" && <Coffee />}
                    {e.id === "Airport Pickup" && <Airplay />}
                    <span>
                      {e.id}{" "}
                      {e.price ? `(KSh ${e.price.toLocaleString()})` : e.pricePerGuest ? `(KSh ${e.pricePerGuest.toLocaleString()} per guest)` : ""}
                    </span>
                  </label>
                ))}
              </div>
            )}

            <div className="text-center font-bold text-xl mt-2">
              Total: KSh {calculateTotal().toLocaleString()}
            </div>

            <div className="flex justify-between mt-4">
              <Button onClick={prevStep} className="btn-ghost-luxury">Back</Button>
              <Button onClick={nextStep} className="btn-luxury">Next</Button>
            </div>
          </motion.div>
        );

      case 4: // Summary
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-center">
            <h3 className="text-xl font-bold">Booking Summary</h3>
            <p>
              <strong>Hotel:</strong> {booking.hotel}<br />
              <strong>Name:</strong> {booking.guestDetails.firstName} {booking.guestDetails.lastName}<br />
              <strong>Email:</strong> {booking.guestDetails.email}<br />
              <strong>Phone:</strong> {booking.guestDetails.phone}<br />
              {booking.service === "room" && (
                <>
                  <strong>Room:</strong> {booking.roomType}<br />
                  <strong>Check-in:</strong> {booking.checkIn}<br />
                  <strong>Check-out:</strong> {booking.checkOut}<br />
                  <strong>Guests:</strong> {booking.guests}<br />
                </>
              )}
              {booking.service === "conference" && (
                <>
                  <strong>Conference Hall:</strong> {booking.conferenceHall}<br />
                  <strong>Guests:</strong> {booking.conferenceGuests}<br />
                </>
              )}
              {booking.service === "occasion" && (
                <>
                  <strong>Occasion:</strong> {booking.occasionType}<br />
                  <strong>Guests:</strong> {booking.occasionGuests}<br />
                </>
              )}
              {booking.extras.length > 0 && <><strong>Extras:</strong> {booking.extras.join(", ")}<br /></>}
              <strong>Total:</strong> KSh {calculateTotal().toLocaleString()}
            </p>

            <div className="flex justify-between mt-4">
              <Button onClick={prevStep} className="btn-ghost-luxury">Back</Button>
              <Button onClick={handleBookNow} className="btn-luxury">Book Now</Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl p-8"
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 font-bold text-2xl">&times;</button>
        </div>
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
