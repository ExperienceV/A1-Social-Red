import { useState } from "react";
  
//baja al else, basura
function login() {
  
  // Declaración de los estados y funciones
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  //interface events extends 

  // Función para manejar el envío del formulario que es? que tipo de dato pasa un ejemplo de como sirve tu wea de events pasa docu no se
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { email, password };

    try {
      // Realiza petición POST al server
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Si la respuesta es correcta, cambiar el directorio.
      if (response.ok) {
        // Convertir la respuesta a formato JSON
        const jsonResponse = await response.json();
        setMessage(jsonResponse.mensaje);
        // Redirige a /home
        window.location.href = '/Home';

      } else {
        const errorResponse = await response.json();
        alert(errorResponse.detail);
      } 
    } catch (error) {
      // Manejar errores en la solicitud y mostrar un mensaje de error
      console.error('Error en la solicitud:', error);
      setMessage('Error en la solicitud');
    }
  };


  return (
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto text-center" src="" alt="A1-Project"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>        <div className="mt-2">
          <input id="email" 
          name="email" 
          type="email" 
          autoComplete="email" 
          onChange={(e) => setEmail(e.target.value)}
          required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" 
          name="password" 
          type="password" 
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)} 
          required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not have a account?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">¡Sing up Here!</a>
    </p>
  </div>
</div>

  );
}

export default login;