#!/usr/bin/python3
"""Booking and RoomBooking models"""
import uuid
from datetime import datetime
from api.v1.extensions import db  # ✅ use shared db instance (not app.db)


class Booking(db.Model):
    __tablename__ = "bookings"

    # ✅ UUID auto-generated on creation
    id = db.Column(db.String(60), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    hotel_id = db.Column(db.Integer, nullable=False)
    service_type = db.Column(
        db.Enum("room", "conference", "occasion", "table", name="service_type_enum"),
        nullable=False
    )
    status = db.Column(
        db.Enum("pending", "confirmed", "cancelled", name="booking_status_enum"),
        default="pending",
        nullable=False
    )
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # ✅ Relationship to room booking
    room_booking = db.relationship(
        "RoomBooking",
        backref="booking",
        uselist=False,
        cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "hotel_id": self.hotel_id,
            "service_type": self.service_type,
            "status": self.status,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "phone": self.phone,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
        }


class RoomBooking(db.Model):
    __tablename__ = "room_bookings"

    id = db.Column(db.String(60), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    booking_id = db.Column(db.String(60), db.ForeignKey("bookings.id"), nullable=False)
    room_type = db.Column(db.String(100), nullable=False)
    check_in_date = db.Column(db.Date, nullable=False)
    check_out_date = db.Column(db.Date, nullable=False)
    guests = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "booking_id": self.booking_id,
            "room_type": self.room_type,
            "check_in_date": str(self.check_in_date),
            "check_out_date": str(self.check_out_date),
            "guests": self.guests,
        }