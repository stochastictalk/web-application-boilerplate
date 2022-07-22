from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from uuid import uuid4

from dbmodels.Base import Base

class Item(Base):
    __tablename__ = "items"
    item_id = Column(UUID(as_uuid = True), primary_key = True, default = uuid4)
    description = Column(String) 
    timestamp = Column(DateTime)