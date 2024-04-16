interface CSSProperties {
    [key: string]: string | number;
  }

function ContactsContainer(){

    const contactsContainerStyle: CSSProperties = {
        width: '25%',
        height: "100%",
        padding: '1rem',
        backgroundColor: '#1E1E1E',
        color: '#FFFFFF', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        overflowY: 'auto',
    };

    const contactItemStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        padding: '10px 20px',
        backgroundColor: '#121212',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
    };

    const profilePicStyle: CSSProperties = {
        height: '40px',
        width: '40px',
        borderRadius: '50%',
        backgroundColor: '#555',
        marginRight: '10px',
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