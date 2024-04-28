from fastapi import APIRouter, HTTPException
from pydantic import BaseModel



app = APIRouter()

class Datos():
    dato1: str
    dato2: str


# Lista de datos existentes
lista_datos = ["Data1", "Data2"]

@app.post("/Test")
async def enviar_datos(data: Datos):

    if data.dato1 not in lista_datos or data.dato2 not in lista_datos:
        raise HTTPException(status_code=400, detail="Al menos uno de los datos no existe en la lista.")
    else:
        # Aquí puedes procesar los datos si ambos existen en la lista
        print("Dato 1:", data.dato1)
        print("Dato 2:", data.dato2)
        return {"mensaje": "Datos recibidos correctamente",
                "Dato 1" : data.dato1,
                "Dato2" : data.dato2}
