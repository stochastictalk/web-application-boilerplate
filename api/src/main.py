from datetime import datetime
from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from uuid import UUID

import dbmodels as dbmodels
import apimodels as apimodels

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/delete")
def delete_item(item: apimodels.Item):
    engine = dbmodels.retrieve_engine()
    with Session(engine) as session:
        session.query(dbmodels.Item).filter(dbmodels.Item.item_id == item.item_id).delete()
        session.commit()
        

@app.get("/read")
def read_root():
    engine = dbmodels.retrieve_engine()
    with Session(engine) as session:
        with session.begin():
            results = [apimodels.Item(
                item_id = r.item_id,
                description = r.description,
                timestamp = r.timestamp
            ) for r in session.query(dbmodels.Item).order_by(dbmodels.Item.timestamp.desc())]
    return results


@app.get("/read/{item_id}")
def read_item(item_id: str):
    engine = dbmodels.retrieve_engine()
    with Session(engine) as session:
        results = [apimodels.Item(
                item_id = r.item_id,
                description = r.description
            ) for r in session.query(dbmodels.Item).where(dbmodels.Item.item_id == item_id)]
    return results


@app.post("/write")
def write_item(item: apimodels.Item):
    new_item = dbmodels.Item(
        description = item.description,
        timestamp = datetime.now()
    )
    engine = dbmodels.retrieve_engine()
    with Session(engine) as session:
        session.add(new_item)
        session.commit()