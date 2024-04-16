import aiomysql
import asyncio
from database import connect_database

async def register( email: str, nick_name:str, name: str, password: str):
    conn: aiomysql.Connection = await connect_database()
    async with conn.cursor() as cursor:
        
        query: str = """INSERT INTO sr_data.users 
                        (email, nick_name, full_name, password) 
                        VALUES (%s, %s, %s, %s)"""
        await cursor.execute(query, (email, nick_name, name, password,))

        