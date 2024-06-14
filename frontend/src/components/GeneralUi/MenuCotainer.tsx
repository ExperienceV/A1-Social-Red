interface CSSProperties {
  [key: string]: string | number;
}

function MenuContainer() {
  
  const colors = {
    background: '#20232A', // Un gris oscuro moderno
    text: '#FFFFFF', // Blanco para el texto
    highlight: '#61DAFB', // Un azul claro, vibrante para detalles
    adBackground: '#282C34', // Un gris ligeramente más claro para contrastar con el fondo
    border: '#333840' // Un gris para los bordes
  };

  const menuContainerStyle: CSSProperties = {
    width: '25%', 
    height: "100vh",
    padding: '1rem',
    backgroundColor: colors.background, 
    color: colors.text,
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Sombra para dar profundidad
    borderLeft: `1px solid ${colors.border}`, // Borde izquierdo para definir separación
    overflow: 'hidden' // Evitar desbordamiento de contenido
  };

  const menuItemStyle: CSSProperties = {
    flexGrow: 1,
    margin: '5px 0', // Margen reducido
    padding: '6px 10px', // Padding reducido
    backgroundColor: colors.adBackground,
    color: colors.text,
    borderRadius: '5px', // Bordes redondeados
    cursor: 'pointer',
    textAlign: 'center',
    width: '90%',
    boxSizing: 'border-box', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <aside style={menuContainerStyle}>
      <h1 style={{ fontSize: '1.75rem', margin: '0.5rem 0', textAlign: 'center', width: '100%' }}>Menú</h1>
      <ul style={{ listStyle: 'none', padding: 0, width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
        <li style={menuItemStyle}>Home</li>
        <li style={menuItemStyle}>Notifications</li>
        <li style={menuItemStyle}>Profile</li>
        <li style={menuItemStyle}>Options</li>
        <li style={menuItemStyle}>Archived</li>
        <li style={menuItemStyle}>Chats</li>
      </ul>
    </aside>
  );
}

export default MenuContainer;