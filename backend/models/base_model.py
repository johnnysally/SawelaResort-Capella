#!/usr/bin/python3
"""Base model shared by all database models"""
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()  # will be initialized in app.py
time_format = "%Y-%m-%dT%H:%M:%S.%f"


class BaseModel(db.Model):
    """Base model with shared fields"""
    __abstract__ = True

    id = db.Column(db.String(60), primary_key=True, default=lambda: str(uuid4()))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __init__(self, *args, **kwargs):
        """Initialize with dynamic fields"""
        for key, value in kwargs.items():
            setattr(self, key, value)
        if not hasattr(self, "id"):
            self.id = str(uuid4())
        if not hasattr(self, "created_at"):
            self.created_at = datetime.utcnow()
        if not hasattr(self, "updated_at"):
            self.updated_at = datetime.utcnow()

    def __repr__(self):
        return f"<{self.__class__.__name__} {self.id}>"

    def to_dict(self):
        """Convert object to dictionary"""
        d = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        if d.get("created_at"):
            d["created_at"] = d["created_at"].strftime(time_format)
        if d.get("updated_at"):
            d["updated_at"] = d["updated_at"].strftime(time_format)
        return d