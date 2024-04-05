import asyncio
import aiomysql


# Configuración de la conexión a la base de datos
async def connect_to_mysql():
    connection = await aiomysql.connect(
        host='127.0.0.1',
        user='root',
        password='isuperrubick69',
        db='sr_data',
        charset='utf8mb4',
        port=3306,
        cursorclass=aiomysql.cursors.DictCursor,
        maxsize=100,  # Tamaño máximo del pool de conexiones
        autocommit=True
        )
    return connection