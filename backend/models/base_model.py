#!/usr/bin/python3
"""
Base model for all tables
"""
from datetime import datetime
from uuid import uuid4
from api.v1.extensions import db  # use shared db instance

time_format = "%Y-%m-%dT%H:%M:%S.%f"

class BaseModel(db.Model):
    __abstract__ = True  # ensures SQLAlchemy doesn’t create a table for this

    id = db.Column(db.String(60), primary_key=True, default=lambda: str(uuid4()))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        if not hasattr(self, "id"):
            self.id = str(uuid4())

    def to_dict(self):
        """Convert object to dictionary"""
        data = {c.name: getattr(self, c.name) for c in self.__table__.columns}
        data["created_at"] = self.created_at.strftime(time_format) if self.created_at else None
        data["updated_at"] = self.updated_at.strftime(time_format) if self.updated_at else None
        return data