#!/usr/bin/python3
"""
Contains class BaseModel and Base
"""

from datetime import datetime
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from api.v1.app import db
from uuid import uuid4

time = "%Y-%m-%dT%H:%M:%S.%f"
Base = declarative_base()

class BaseModel:
    __abstract__ = True  # ⚠️ don't create a table for this class

    id = db.Column(db.String(60), primary_key=True, default=lambda: str(uuid4()))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    def __init__(self, *args, **kwargs):
        """Initialize base model"""
        for key, value in kwargs.items():
            setattr(self, key, value)
        if not hasattr(self, "id"):
            self.id = str(uuid.uuid4())
        if not hasattr(self, "created_at"):
            self.created_at = datetime.utcnow()
        if not hasattr(self, "updated_at"):
            self.updated_at = datetime.utcnow()

    def __str__(self):
        """String representation"""
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"

    def to_dict(self):
        """Convert SQLAlchemy object to dict"""
        d = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        d["created_at"] = d["created_at"].strftime(time_format) if d.get("created_at") else None
        d["updated_at"] = d["updated_at"].strftime(time_format) if d.get("updated_at") else None
        return d