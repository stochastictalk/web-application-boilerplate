from sqlalchemy import create_engine

from dbmodels.Item import Item 
from dbmodels.Base import Base

engine = None

def retrieve_engine():
    global engine

    if not engine:
        engine = create_engine(
            f"postgresql+psycopg2://postgres:password@database:5432/postgres",
            echo=True,
        ) 
        Base.metadata.create_all(engine) # Generates schema in target database.
        return engine
    else:
        return engine