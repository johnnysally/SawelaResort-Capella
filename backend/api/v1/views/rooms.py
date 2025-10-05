#!/usr/bin/python3
from flask import Blueprint, request, jsonify
from api.v1.app import db  # ✅ Safe because app.py only imports this after init_app
from models.Room_booking import Booking, RoomBooking

rooms_bp = Blueprint("rooms", __name__, url_prefix="/api/bookings/rooms")

@rooms_bp.route("", methods=["POST"])
def create_room_booking():
    """Create a new room booking"""
    data = request.get_json()

    try:
        required_fields = ["hotel_id", "first_name", "last_name", "email", "phone",
                           "room_type", "check_in_date", "check_out_date", "guests"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"{field} is required"}), 400

        # Create parent booking
        booking = Booking(
            hotel_id=data["hotel_id"],
            service_type="room",
            first_name=data["first_name"],
            last_name=data["last_name"],
            email=data["email"],
            phone=data["phone"]
        )
        db.session.add(booking)
        db.session.commit()

        # Create child room booking
        room_booking = RoomBooking(
            booking_id=booking.id,
            room_type=data["room_type"],
            check_in_date=data["check_in_date"],
            check_out_date=data["check_out_date"],
            guests=data["guests"]
        )
        db.session.add(room_booking)
        db.session.commit()

        return jsonify({
            "message": "Room booking created successfully",
            "booking_id": booking.id
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400