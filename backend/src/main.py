import asyncio
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from data.db_queries.search_data.search import *
from data.db_queries.auth_queries.auth_db import *
from data.data_encrypt.encryption import *
from dotenv import load_dotenv
from routes.auth import auth_routes

load_dotenv('JWT/.env')
app = FastAPI()
app.include_router(auth_routes)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Datos(BaseModel):
    nick_name: str | None = None
    full_name: str | None = None
    email: str
    password: str
    confirm_password: str | None = None
    
