interface CSSProperties {
    [key: string]: string | number;
}

function ChatsUI() {
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        padding: '1rem',
        overflowY: 'auto',
        width: '100%',
        backgroundColor: '#121212',
        color: '#FFFFFF',
    };

    const headerStyle: CSSProperties = {
        width: '100%',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const chatStyle: CSSProperties = {
        backgroundColor: '#242424',
        color: '#FFFFFF',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px 0',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    };

    const profilePicStyle: CSSProperties = {
        height: '40px',
        width: '40px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        marginRight: '10px',
    };

    const statusIndicatorStyle: (status: string) => CSSProperties = (status) => ({
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        backgroundColor: status === 'online' ? 'green' : 'red',
        marginLeft: '5px',
    });

    // Ejemplo de datos de chats
    const chats = [
        {
            id: 1,
            friendName: 'Amigo Ejemplo',
            friendStatus: 'online',
            lastMessage: '¡Hola! ¿Cómo estás?',
        },
        // Agrega más chats aquí
    ];

    return (
        <aside style={containerStyle}>
            <div style={headerStyle}>
                <h2>Chats</h2>
                <p>Amigos 123/456 - Conectados 120   Desconectados 336</p>
                <p>¡Descubre quién está en línea y comienza a chatear!</p>
            </div>
            {chats.map((chat) => (
                <div key={chat.id} style={chatStyle}>
                    <div style={profilePicStyle}></div>
                    <div>
                        {chat.friendName}
                        <span style={statusIndicatorStyle(chat.friendStatus)}></span>
                    </div>
                    <div style={{marginLeft: 'auto', textAlign: 'right'}}>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}
        </aside>
    );
}

export default ChatsUI;