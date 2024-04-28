from fastapi.responses import JSONResponse
from jwt import encode, decode
from jwt import exceptions
from datetime import datetime, timedelta
from os import getenv

def expire_date(days: int):
    date = datetime.now()
    new_date = date + timedelta(days)
    return new_date


def write_token(data: dict):
    secret_key = getenv("SECRET")
    token = encode(payload={**data, "exp": expire_date(2)}, key=secret_key, algorithm="HS256")
    return token


def validate_token(token, output=False):
    try:
        if output:
            x = decode(token, key=getenv("SECRET"), algorithms=["HS256"])
            print(x)
        decode(token, key=getenv("SECRET"), algorithms=["HS256"])
    except exceptions.ExpiredSignatureError:
        return JSONResponse(content={"message": "Token Expired"}, status_code=401)
    except exceptions.DecodeError:
        return JSONResponse(content={"message": "Invalid Token"}, status_code=401)
    



