import asyncio
from JWT.functions_jwt import *
from fastapi import APIRouter, Header
from models.models import *
from fastapi import HTTPException
from data.db_queries.search_data.search import *
from data.db_queries.auth_queries.auth_db import *
from data.data_encrypt.encryption import *

auth_routes = APIRouter()


@auth_routes.post("/Login")
async def login_form(data: login):
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
    
    token_create = write_token(data.model_dump())
    print(token_create)
    raise HTTPException(status_code=200, detail=token_create)



@auth_routes.post("/Register")
async def register_form(data: register):

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


@auth_routes.post("/verify/token")
async def token_verify(Authorization: str = Header(None)):
    token = Authorization.split(" ")[1]
    return validate_token(token=token, output=True)


@auth_routes.get("/Hello")
async def hello_world(token: str = Header(...)):
    """
    Esta ruta devuelve un simple mensaje de 'Hello World' solo si el token JWT es válido.
    """
    try:
        # Validar el token JWT
        validate_token(token=token)
        return {"message": "Hello World"}
    except Exception as e:
        # Manejar cualquier error de validación de token
        raise HTTPException(status_code=401, detail="Unauthorized")
