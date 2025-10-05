#!/usr/bin/python3
"""Room and Booking models"""
from api.v1.extensions import db
from datetime import datetime
import enum

class BookingStatus(enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    cancelled = "cancelled"


class Booking(db.Model):
    __tablename__ = "bookings"

    id = db.Column(db.String(60), primary_key=True)
    hotel_id = db.Column(db.Integer, nullable=False)
    service_type = db.Column(db.Enum("room", "conference", "occasion", "table", name="service_type"), nullable=False)
    status = db.Column(db.Enum(BookingStatus), default=BookingStatus.pending)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    room_booking = db.relationship("RoomBooking", back_populates="booking", uselist=False)


class RoomBooking(db.Model):
    __tablename__ = "room_bookings"

    booking_id = db.Column(db.String(60), db.ForeignKey("bookings.id"), primary_key=True)
    room_type = db.Column(db.String(50), nullable=False)
    check_in_date = db.Column(db.Date, nullable=False)
    check_out_date = db.Column(db.Date, nullable=False)
    guests = db.Column(db.Integer, nullable=False)

    booking = db.relationship("Booking", back_populates="room_booking")