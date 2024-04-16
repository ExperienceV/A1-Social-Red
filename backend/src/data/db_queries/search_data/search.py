import asyncio
import aiomysql
from database import connect_database


# Search a user with the nick name in the db
async def srch_nickN(nick_name) -> tuple | bool:
    # Connecto to database
    conn: aiomysql.connection = await connect_database()

    async with conn.cursor() as cursor:
        query: str = "SELECT * FROM sr_data.users WHERE nick_name = %s"
        await cursor.execute(query, (nick_name,))
        response = await cursor.fetchone()
        if not response:
            return False
        return response


# Search a user with the name in the db
async def srch_name(user_name) -> tuple | bool:
    # Connecto to database
    conn: aiomysql.connection = await connect_database()

    async with conn.cursor() as cursor:
        query: str = "SELECT * FROM sr_data.users WHERE full_name = %s"
        await cursor.execute(query, (user_name,))
        response = await cursor.fetchone()
        if not response:
            return False
        return response

# Search a user with the email in the db
async def srch_email(correo) -> tuple | bool:
    conn: aiomysql.connection = await connect_database()
    async with conn.cursor() as cursor:
        query: str = "SELECT * FROM sr_data.users WHERE email = %s"
        await cursor.execute(query, (correo,))
        response = await cursor.fetchone()
        if not response:
            return False
        return response# Implementar la búsqueda por correo electrónico


# Get password with the email.
async def getPassword_with_Email(email: str) -> str | bool:
    conn: aiomysql.connection = await connect_database() # DB Connect


    async with conn.cursor() as cursor:
        query: str = "SELECT password FROM sr_data.users WHERE email = %s"
        await cursor.execute(query, (email,)) # Ejecutamos la query de MySQL
        response = await cursor.fetchone()
        
        # Si response no está vacio agarramos la contraseña y la enviamos
        if response is not None:
            password = response['password']
            return password
        
        # Si response está vacio mandamos False
        else:
            return False
        

# Get full data with email and password.
async def email_password(email: str, password: str) -> tuple | bool:
    conn: aiomysql.connection = await connect_database()
    async with conn.cursor() as cursor:
        query: str = "SELECT password FROM sr_data.users WHERE email = %s AND password = %s"
        await cursor.execute(query, (email, password,))
        response = await cursor.fetchone()
        if not response:
            return False
        return response