import { useState } from 'react';

const Test = () => {
  // Declaración de los estados y funciones
  const [dato1, setDato1] = useState('');
  const [dato2, setDato2] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario bruh si funciona dejalo asi es solo el interprete de typescript 

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const data = { dato1, dato2 };

    try {
      // Realizar una solicitud POST a la URL especificada
      const response = await fetch('http://localhost:8000/Test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Verificar si la respuesta fue exitosa
      if (response.ok) {
        // Convertir la respuesta a formato JSON
        const jsonResponse = await response.json();
        // Actualizar el estado del mensaje con la respuesta recibida
        setMensaje(jsonResponse.mensaje);
      } else {
        // En caso de error en la respuesta, mostrar un mensaje de error
        setMensaje('Error al enviar datos');
      }
    } catch (error) {
      // Manejar errores en la solicitud y mostrar un mensaje de error
      console.error('Error en la solicitud:', error);
      setMensaje('Error en la solicitud');
    }
  };

  // Renderizado del componente
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={dato1} onChange={(e) => setDato1(e.target.value)} />
        <input type="text" value={dato2} onChange={(e) => setDato2(e.target.value)} />
        <button type="submit">Enviar Datos</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Test;