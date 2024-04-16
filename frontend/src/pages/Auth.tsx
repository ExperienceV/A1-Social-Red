import React from 'react';
import { Link } from 'react-router-dom';

function AuthPage() {
 
  // Estilos
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#121212',
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

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    margin: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
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
        <h1>Bienvenido a Nuestra Aplicación</h1>
        <Link to="/signin" style={buttonStyle}>Iniciar Sesión</Link>
        <Link to="/signup" style={buttonStyle}>Registrarse</Link>
      </div>
    </div>
  );
}

export default AuthPage;