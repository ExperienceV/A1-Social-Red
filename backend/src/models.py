from pydantic import BaseModel

class register(BaseModel):
    name: str
    lastname: str
    email: str
    password: str

class Datos(BaseModel):
    nick_name: str | None = None
    full_name: str | None = None
    email: str
    password: str
