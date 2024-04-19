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

    # Verificamos si existe el nickname ingresado.
    get_nickn: tuple|bool = await srch_nickN(data.nick_name)

    # Verificamos si existe el email ingresado.
    get_email: tuple|bool = await srch_email(data.email)

    # Si el email y nickname existe...
    if get_email and get_nickn:
        raise HTTPException(status_code=409, detail="El nickname y email ya están en uso.")
    
    # Si el nickname existe...
    if get_nickn:
        raise HTTPException(status_code=409, detail="El nickname ya está en uso.")

    # Si el email existe...
    if get_email:
        raise HTTPException(status_code=409, detail="El email ya está en uso.")
    
    if data.password != data.confirm_password:
        raise HTTPException(status_code=409, detail="Las contraseñas ingresadas no son iguales.")
    
    # Si los valores anteriores no existe, creámos la cuenta con los datos ingresados.
    await register_query(email=data.email, 
                         nick_name=data.nick_name, 
                         name=data.full_name, 
                         password=encrypt_data(data.password))
    raise HTTPException(status_code=200, detail="Registro exitoso.")