interface CSSProperties {
    [key: string]: string | number | undefined;
}

function ContactsContainer(){

    const colors = {
        background: '#20232A', // Un gris oscuro moderno
        text: '#FFFFFF', // Blanco para el texto
        highlight: '#61DAFB', // Un azul claro, vibrante para detalles
        adBackground: '#282C34', // Un gris ligeramente más claro para contrastar con el fondo
        border: '#333840' // Un gris para los bordes
      };

    const contactsContainerStyle: CSSProperties = {
        width: '25%',
        height: "100%",
        padding: '1rem',
        backgroundColor: colors.background, // Usando variable de color
        color: colors.text, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        overflowY: 'auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Sombra para dar profundidad
        borderRight: `1px solid ${colors.border}` // Usando variable de color
    };

    const contactItemStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        padding: '10px 20px',
        backgroundColor: colors.adBackground, // Usando variable de color
        color: colors.text,
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s', // Transición suave al cambiar de color

    };
    const profilePicStyle: CSSProperties = {
        height: '40px',
        width: '40px',
        borderRadius: '50%',
        backgroundColor: colors.highlight,
        marginRight: '10px',
        border: `2px solid ${colors.border}` // Borde para destacar la imagen
    };

    return(
        <aside style={contactsContainerStyle}>
            <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
                <li style={contactItemStyle}>
                    <div style={profilePicStyle}></div> Contacto Ejemplo
                </li>
                <li style={contactItemStyle}>
                    <div style={profilePicStyle}></div> Contacto Ejemplo
                </li>
            </ul>
            <div style={{marginTop: 'auto', textAlign: 'center'}}>
                Tus contactos aparecerán aquí.
            </div>
        </aside>
    )
}

export default ContactsContainer;