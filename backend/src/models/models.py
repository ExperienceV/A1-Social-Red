from pydantic import BaseModel, EmailStr

class register(BaseModel):
    nick_name:str
    full_name:str
    email:EmailStr
    password:str 
    confirm_password:str


class login(BaseModel):
    email: EmailStr
    password: str

class Datos(BaseModel):
    nick_name: str | None = None
    full_name: str | None = None
    email: str
    password: str
