#!/usr/bin/python3
"""Handles MySQL database connection via SQLAlchemy"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.base_model import db
from models.Room_booking import Booking, RoomBooking


class DBStorage:
    """Simplified DB handler"""

    def __init__(self, user, password, host, database):
        self.engine = create_engine(
            f"mysql+pymysql://{user}:{password}@{host}/{database}",
            pool_pre_ping=True
        )
        self.Session = sessionmaker(bind=self.engine)
        self.session = None

    def connect(self):
        """Create tables and session"""
        db.metadata.create_all(self.engine)
        self.session = self.Session()

    def add(self, obj):
        """Add and commit"""
        self.session.add(obj)
        self.session.commit()

    def all_bookings(self):
        """Fetch all bookings"""
        return self.session.query(Booking).all()

    def close(self):
        """Close session"""
        if self.session:
            self.session.close()