#!/usr/bin/python3
"""
BaseModel class for all models
"""

import uuid
from datetime import datetime
from sqlalchemy import Column, String, DateTime
from api.v1.app import db

class BaseModel(db.Model):
    __abstract__ = True  # This ensures no table is created for BaseModel

    id = Column(String(60), primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    def __init__(self, *args, **kwargs):
        """Initialize model attributes"""
        super().__init__(*args, **kwargs)
        if not getattr(self, "id", None):
            self.id = str(uuid.uuid4())
        if not getattr(self, "created_at", None):
            self.created_at = datetime.utcnow()
        if not getattr(self, "updated_at", None):
            self.updated_at = datetime.utcnow()

    def __repr__(self):
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"

    def to_dict(self):
        """Convert SQLAlchemy model to dictionary"""
        result = {column.name: getattr(self, column.name) for column in self.__table__.columns}
        result["created_at"] = result["created_at"].isoformat() if result.get("created_at") else None
        result["updated_at"] = result["updated_at"].isoformat() if result.get("updated_at") else None
        return result