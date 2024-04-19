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
    confirm_password: str | None = None
    

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
    
#@app.post("/register")
async def register_form(data: Datos):
    # Buscamos el nick_name en la base de datos.
    nick_name: tuple = await srch_nickN(data.nick_name)

    # Buscamos el email en la base de datos.
    email: tuple = await srch_email(data.email)

    # Si el nick_name y el email existen...
    if nick_name and email:
        raise HTTPException(status_code=409, detail="El apodo y correo ya estan en uso.")
    
    # Si el nick_name existe...
    elif nick_name:
        raise HTTPException(status_code=409, detail="El apodo ya esta en uso.")
    
    # Si el email existe...
    elif email:
        raise HTTPException(status_code=409, detail="El correo ya esta en uso.")
    
    # Si ninguno de los datos existe, creamos la cuenta con los datos ingresados.
    await register_query(
        email = data.email, 
        nick_name = data.nick_name, 
        name = data.full_name, 
        password = encrypt_data(data.password))
    raise HTTPException(status_code=200, detail="Registro exitoso.")

@app.post("/Login")
async def register_form(data: Datos):
    # Obtenemos la contraseña del email ingresado.
    get_password: str|bool = await login_query(data.email)

    # Comprobamos la contraseña ingresada, con la existente.
    verify_password: bool = check_data(get_password, data.password)
    
    # Si get_password es Falso...
    if not get_password:
        raise HTTPException(status_code=400, detail="El correo electrónico es incorrecto...")
    
    # Si verify_password es Falso...
    if not verify_password:
       raise HTTPException(status_code=400, detail="La contraseña es incorrecta...")
    
    # Si todo está bien, iniciamos sesión.
    raise HTTPException(status_code=200, detail="Inicio de sesión exitoso.")


@app.post("/Register")
async def test_reg(data: Datos):
    print(data.nick_name, data.full_name, data.email, data.password, data.confirm_password)