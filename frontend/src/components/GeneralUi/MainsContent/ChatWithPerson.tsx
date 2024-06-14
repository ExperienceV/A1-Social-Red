import { useState } from 'react';

interface CSSProperties {
    [key: string]: string | number;
}

interface UserStatus {
    logo: string;
    name: string;
    isActive: boolean;
    inactiveSince?: string;
}

function ChatWithPersonUI() {
    const [messages, setMessages] = useState([
        { text: 'Este es un mensaje de ejemplo de la otra persona', sender: 'other' },
        { text: 'Este es tu mensaje de respuesta', sender: 'self' }
    ]);

    const colors = {
        background: '#181A1F', // Un gris muy oscuro para el fondo
        text: '#FFFFFF', // Blanco para el texto
        inputBackground: '#282C34', // Un gris ligeramente más claro para el área de entrada
        buttonBackground: '#61DAFB', // Un azul claro, vibrante para el botón
        buttonHover: '#53B9EA', // Un azul un poco más oscuro para el hover del botón
        otherMessageBackground: '#333333', // Un gris oscuro para los mensajes de otros
        selfMessageBackground: '#007bff', // Azul para los mensajes propios
    };

    const [message, setMessage] = useState('');

    const userStatus: UserStatus = {
        logo: 'url_del_logo_aquí',
        name: 'Nombre del Usuario',
        isActive: false, 
        inactiveSince: '10/10/2023',
    };

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', 
        width: '100%', 
        backgroundColor: colors.background,
        color: colors.text,
    };

    const bannerStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: colors.inputBackground,
        borderBottom: '1px solid #ccc',
    };

    const logoStyle: CSSProperties = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const messageContainerStyle: CSSProperties = {
        flex: 1,
        padding: '10px',
        overflowY: 'auto', 
        scrollbarWidth: 'thin',
        msOverflowStyle: 'none',
        backgroundColor: '#121212',
        color: '#FFFFFF',
    };

    const inputContainerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderTop: '1px solid #333',
        backgroundColor: '#fff',
        minHeight: '50px', 
    };

    const inputStyle: CSSProperties = {
        flex: 1, 
        marginRight: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc', 
        backgroundColor: '#f9f9f9',
        color: '#333',
        minHeight: '40px', 
        width: 'auto',
    };

    const buttonStyle: CSSProperties = {
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: colors.buttonBackground,
        color: 'white',
        cursor: 'pointer',
    };

    const handleMessageSend = () => {
        setMessages([...messages, { text: message, sender: 'self' }]); // Asegúrate de que el nuevo mensaje tenga la estructura correcta
        setMessage(''); // Limpiar el input después de enviar
    };

    const currentUserLogo = "";

    return (
        <div style={containerStyle}>
            <div style={bannerStyle}>
                <img src={userStatus.logo} alt="Logo" style={logoStyle} />
                <div>
                    <div>{userStatus.name}</div>
                    <div>{userStatus.isActive ? 'Activo' : `Inactivo desde ${userStatus.inactiveSince}`}</div>
                </div>
            </div>
            <div style={messageContainerStyle}>
    {messages.map((msg, index) => (
        <div key={index} style={{
            display: 'flex',
            justifyContent: msg.sender === 'self' ? 'flex-end' : 'flex-start',
            marginBottom: '10px',
        }}>
            {msg.sender === 'other' && (
                <img src={userStatus.logo} alt="Logo" style={{...logoStyle, marginRight: '10px'}} />
            )}
            <div style={{
                backgroundColor: msg.sender === 'self' ? colors.selfMessageBackground : colors.otherMessageBackground,
                color: msg.sender === 'self' ? 'white' : 'black',
                padding: '10px',
                borderRadius: '10px',
            }}>
                {msg.text}
            </div>
            {msg.sender === 'self' && (
                <img src={currentUserLogo} alt="Logo" style={{...logoStyle, marginLeft: '10px'}} />
            )}
        </div>
    ))}
</div>
            <div style={inputContainerStyle}>
                <input
                    type="text"
                    style={inputStyle}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <button style={buttonStyle} onClick={handleMessageSend}>Enviar</button>
            </div>
        </div>
    );
}

export default ChatWithPersonUI;