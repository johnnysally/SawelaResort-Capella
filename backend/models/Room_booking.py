#!/usr/bin/python3
"""Room and Booking models"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, Integer, String, Date, ForeignKey, Enum, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
import enum


class BookingStatus(enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    cancelled = "cancelled"


class Booking(BaseModel, Base):
    __tablename__ = "bookings"

    hotel_id = Column(Integer, nullable=False)
    service_type = Column(
        Enum("room", "conference", "occasion", "table", name="service_type"),
        nullable=False
    )
    status = Column(Enum(BookingStatus), default=BookingStatus.pending)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # relationships
    room_booking = relationship("RoomBooking", back_populates="booking", uselist=False)


class RoomBooking(BaseModel, Base):
    __tablename__ = "room_bookings"

    booking_id = Column(String(60), ForeignKey("bookings.id"), primary_key=True)
    room_type = Column(String(50), nullable=False)
    check_in_date = Column(Date, nullable=False)
    check_out_date = Column(Date, nullable=False)
    guests = Column(Integer, nullable=False)

    booking = relationship("Booking", back_populates="room_booking")