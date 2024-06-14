import React from 'react';

interface CSSProperties {
  [key: string]: string | number;
}

const colors = {
  background: '#20232A', // Un gris oscuro moderno
  text: '#FFFFFF', // Blanco para el texto
  highlight: '#61DAFB', // Un azul claro, vibrante para detalles
  adBackground: '#282C34', // Un gris ligeramente más claro para contrastar con el fondo
  border: '#333840' // Un gris para los bordes
};

const Header: React.FC = () => {
    const headerStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      backgroundColor: colors.background,
      color: colors.text,
      height: '60px',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)' // Sombra más suave
    };
  
    const logoStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      color: colors.highlight, // Color destacado para el logo
      fontSize: '1.2rem', // Aumentar el tamaño del texto del logo
      fontWeight: 'bold' // Hacer el texto del logo en negrita
    };
  
    const adBoxStyle: CSSProperties = {
      width: '60%',
      height: '80%',
      backgroundColor: colors.adBackground,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `1px solid ${colors.border}`,
      borderRadius: '8px', // Bordes redondeados
      overflow: 'hidden' // Ocultar desbordamientos
    };

  return (
    <div style={headerStyle}>
      <div style={logoStyle}>
        <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px' }} />
        <span>A1-REDSOCIAL</span>
      </div>
      <div style={adBoxStyle}>
        Anuncio
      </div>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Contacts</h1>
    </div>
  );
};

export default Header;