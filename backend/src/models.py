from pydantic import BaseModel

class register(BaseModel):
    name: str
    lastname: str
    email: str
    password: str
