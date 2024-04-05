import asyncio 
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from data.database import connect_to_mysql

app = FastAPI()

# Pydantic model to async define the schema of the data
class Item(BaseModel):
    name: str
    description: str = None

# Route to create an item
@app.get("/")
async def home():
    return "Hola mundo"

