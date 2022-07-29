from datetime import datetime
from pydantic import BaseModel
from uuid import UUID

class Item(BaseModel):
    item_id: UUID | str | None
    description: str | None
    timestamp: datetime | None