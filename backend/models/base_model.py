#!/usr/bin/python3
"""
BaseModel class for all models with UUID defaults
"""

import uuid
from datetime import datetime
from sqlalchemy import Column, String, DateTime
from api.v1.app import db


def generate_uuid():
    """Generate a UUID string"""
    return str(uuid.uuid4())


class BaseModel(db.Model):
    __abstract__ = True  # SQLAlchemy won’t make a table for this base class

    id = Column(String(60), primary_key=True, default=generate_uuid, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    def __init__(self, *args, **kwargs):
        """Initialize a new model"""
        super().__init__(*args, **kwargs)
        if not getattr(self, "id", None):
            self.id = generate_uuid()
        if not getattr(self, "created_at", None):
            self.created_at = datetime.utcnow()
        if not getattr(self, "updated_at", None):
            self.updated_at = datetime.utcnow()

    def __repr__(self):
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"

    def to_dict(self):
        """Return a dictionary representation of the model"""
        result = {column.name: getattr(self, column.name) for column in self.__table__.columns}
        result["created_at"] = result["created_at"].isoformat() if result.get("created_at") else None
        result["updated_at"] = result["updated_at"].isoformat() if result.get("updated_at") else None
        return result