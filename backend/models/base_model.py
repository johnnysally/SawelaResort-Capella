#!/usr/bin/python3
"""
Contains class BaseModel and Base
"""
from datetime import datetime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, DateTime
from uuid import uuid4

Base = declarative_base()

time_format = "%Y-%m-%dT%H:%M:%S.%f"


class BaseModel(Base):
    __abstract__ = True  # Don't create a table for this base class

    id = Column(String(60), primary_key=True, default=lambda: str(uuid4()))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __init__(self, *args, **kwargs):
        """Initialize base model"""
        super().__init__(*args, **kwargs)
        if not hasattr(self, "id") or self.id is None:
            self.id = str(uuid4())
        if not hasattr(self, "created_at"):
            self.created_at = datetime.utcnow()
        if not hasattr(self, "updated_at"):
            self.updated_at = datetime.utcnow()

    def __str__(self):
        """String representation"""
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"

    def to_dict(self):
        """Convert SQLAlchemy object to dictionary"""
        d = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        if d.get("created_at"):
            d["created_at"] = d["created_at"].strftime(time_format)
        if d.get("updated_at"):
            d["updated_at"] = d["updated_at"].strftime(time_format)
        return d