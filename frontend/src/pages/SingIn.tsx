import React, { useState } from 'react';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMessage] = useState('');

  const data_form = { email, password, mensaje }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión

    try {
      // Realizar Realiza la solicitud method a response.
      const response = await fetch('http://localhost:8000/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_form),
      });

      // Verificar si la respuesta fue exitosa
      if (response.ok) {
        // Redireccionar a Home con los datos del usuario.
        console.log('ola')

      } else {
        // En caso de error en la respuesta, mostrar un mensaje de error
        const jsonResponse = await response.json();
        alert(jsonResponse.detail)
        
      }
    } catch (error) {
      // Manejar errores en la solicitud y mostrar un mensaje de error
      console.error('Error en la solicitud:', error);
      setMessage('Error en la solicitud');
    }
  };

    console.log(email, password);




  // Estilos 
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    height: '100vh',
    backgroundColor: 'white',
  };

  const leftContainerStyle: React.CSSProperties = {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  const imageContainerStyle: React.CSSProperties = {
    width: '80%',
    height: '60%',
    backgroundColor: '#f0f0f0',
    marginTop: '2rem',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
  };

  const logoAndNameStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  };

  const rightContainerStyle: React.CSSProperties = {
    width: '30%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 4rem',
    boxSizing: 'border-box',
  };

  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '360px',
  };

  const inputStyle: React.CSSProperties = {
    padding: '12px',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#333',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff', 
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <div style={leftContainerStyle}>
        <div style={logoAndNameStyle}>
          <img src="/path/to/logo.png" alt="Logo Empresa" style={{ height: '80px' }} />
          <h2>Nombre de la Empresa</h2>
        </div>
        <div style={imageContainerStyle}>
          {/* Imagen para el div */}
        </div>
      </div>
      <div style={rightContainerStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={inputStyle}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
  }
// Gracias por arreglar el problema mi vida, tkm ❤
  export default SignInPage;