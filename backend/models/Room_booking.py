import uuid
from datetime import datetime
from api.v1.app import db


class Booking(db.Model):
    __tablename__ = "bookings"

    id = db.Column(db.String(60), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    hotel_id = db.Column(db.Integer, nullable=False)
    service_type = db.Column(
        db.Enum("room", "conference", "occasion", "table", name="service_type_enum"),
        nullable=False
    )
    status = db.Column(
        db.Enum("pending", "confirmed", "cancelled", name="booking_status_enum"),
        default="pending"
    )
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    room_booking = db.relationship("RoomBooking", backref="booking", uselist=False, cascade="all, delete-orphan")


class RoomBooking(db.Model):
    __tablename__ = "room_bookings"

    id = db.Column(db.String(60), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    booking_id = db.Column(db.String(60), db.ForeignKey("bookings.id"), nullable=False)
    room_type = db.Column(db.String(100), nullable=False)
    check_in_date = db.Column(db.Date, nullable=False)
    check_out_date = db.Column(db.Date, nullable=False)
    guests = db.Column(db.Integer, nullable=False)