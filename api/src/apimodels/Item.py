from datetime import datetime
from pydantic import BaseModel
from uuid import UUID

class Item(BaseModel):
    item_id: UUID | None
    description: str | None
    timestamp: datetime | None