import asyncio
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from data.db_queries.search_data.search import *
from data.db_queries.auth_queries.auth_db import *
from data.data_encrypt.encryption import *


app = FastAPI()

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
    

# Lista de datos existentes
lista_datos = ["Data1", "Data2"]

@app.post("/Test")
async def enviar_datos(data: Datos):

    if data.dato1 not in lista_datos or data.dato2 not in lista_datos:
        raise HTTPException(status_code=400, detail="Al menos uno de los datos no existe en la lista.")
    else:
        # Aquí puedes procesar los datos si ambos existen en la lista
        user = await srch_name("Isaías")
        print(user)


        print("Dato 1:", data.dato1)
        print("Dato 2:", data.dato2)
        return {"mensaje": "Datos recibidos correctamente",
                "Dato 1" : data.dato1,
                "Dato2" : data.dato2}
    
@app.post("/login")
async def login_form(data: Datos):

    # Obtiene la contraseña del correo ingresado.
    get_password: str = await getPassword_with_Email(data.email)

    # Verifica si la contraseña ingresada y la existente son iguales.
    verify_password = check_data(get_password, data.password)

    # Si el correo o la contraseña es incorrecto, levantamos un error 400.
    # Si existe la cuenta, levantamos 200 OK.
    if not verify_password:
        raise HTTPException(status_code=400, detail="Al menos uno de los datos no existe en la lista.")
    raise HTTPException(status_code=200, detail="Inicio de sesión exitoso.")

@app.post("/register")
async def register_form(data: Datos):
    
    # Verificamos si el apodo y email ya existe, si es así levantamos el error
    # 409, si no existe, entonces creamos la cuenta y levantamos 200 OK.    

    nick_name: tuple = await srch_nickN(data.nick_name)
    email: tuple = await srch_email(data.email)
    if nick_name and email:
        raise HTTPException(status_code=409, detail="El apodo y correo ya estan en uso.")
    elif nick_name:
        raise HTTPException(status_code=409, detail="El apodo ya esta en uso.")
    elif email:
        raise HTTPException(status_code=409, detail="El correo ya esta en uso.")
    await register(
        email = data.email, 
        nick_name = data.nick_name, 
        name = data.full_name, 
        password = encrypt_data(data.password))
    raise HTTPException(status_code=200, detail="Registro exitoso.")

