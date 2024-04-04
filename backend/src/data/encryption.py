from werkzeug.security import generate_password_hash, check_password_hash

def encrypt_data(data: str) -> str: 
    data_encrypted: str = generate_password_hash(data, 'pbkdf2:sha256', 30)
    return data_encrypted


def check_password(hashed: str, password: str) -> bool:
    return check_password_hash(hashed, password)