import React from 'react';

interface CSSProperties {
  [key: string]: string | number;
}

const Header: React.FC = () => {
    const headerStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      backgroundColor: '#1E1E1E',
      color: '#FFFFFF',
      height: '60px',
      width: '100%',
      boxSizing: 'border-box',
      
    };
  
    const logoStyle: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
    };
  
    const adBoxStyle: CSSProperties = {
      width: '60%',
      height: '80%',
      backgroundColor: '#555',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

  return (
    <div style={headerStyle}>
      <div style={logoStyle}>
        <img src="/path/to/logo.png" alt="Logo" style={{ height: '50px' }} /> {/* Ajusta la ruta del logo */}
        <span>A1-REDSOCIAL</span>
      </div>
      <div style={adBoxStyle}>
        {/* Contenido del anuncio */}
        Anuncio
      </div>
      <h1>Contacts</h1>
    </div>
  );
};

export default Header;