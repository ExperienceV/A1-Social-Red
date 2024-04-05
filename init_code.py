import subprocess

vite_source = "frontend"
uvicorn_source = "backend/src/routers"

uvicorn_cmd = "python main.py"

vite_cmd = "npm run dev"



# Abre un nuevo proceso CMD
cmd1 = subprocess.Popen("cmd", stdin=subprocess.PIPE, 
                        stdout=subprocess.PIPE, stderr=subprocess.PIPE, 
                        shell=True, universal_newlines=True, 
                        encoding='latin-1')

cmd2 = subprocess.Popen("cmd", stdin=subprocess.PIPE, 
                        stdout=subprocess.PIPE, stderr=subprocess.PIPE, 
                        shell=True, universal_newlines=True, 
                        encoding='latin-1')



# Cambia el directorio de trabajo
cmd1.stdin.write(f"cd {uvicorn_source}\n")

# Ejecuta comandos adicionales
cmd1.stdin.write(f"{uvicorn_cmd}\n")

# Cambia el directorio de trabajo
cmd2.stdin.write(f"cd {vite_source}\n")

# Ejecuta comandos adicionales
cmd2.stdin.write(f"{vite_cmd}\n")


# Cierra la entrada estándar para que CMD finalice después de ejecutar los comandos
cmd1.stdin.close()
cmd2.stdin.close()

# Lee y muestra la salida de CMD
for linea in cmd1.stdout:
    print(linea.strip())

# Lee y muestra la salida de CMD
for linea in cmd2.stdout:
    print(linea.strip())


