interface CSSProperties {
    [key: string]: string | number;
}

function NotificationsUI() {

    const colors = {
        background: '#181A1F', // Un gris muy oscuro para el fondo
        text: '#FFFFFF', // Blanco para el texto
        notificationBackground: '#282C34', // Un gris ligeramente más claro para el fondo de las notificaciones
        highlight: '#61DAFB', // Un azul claro, vibrante para detalles
    };

    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        padding: '1rem',
        overflowY: 'auto',
        width: '100%',
        backgroundColor: colors.background,
        color: colors.text,
    };

    const notificationStyle: CSSProperties = {
        backgroundColor: colors.notificationBackground,
        color: colors.text,
        borderRadius: '8px',
        padding: '15px',
        margin: '10px 0',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    };

    // Ejemplo de datos de notificaciones
    const notifications = [
        {
            id: 1,
            title: 'Nueva notificación',
            content: 'Este es el contenido de la notificación.',
            date: '2023-04-01',
            time: '12:00',
        },
        // Agrega más notificaciones aquí
    ];

    return (
        <aside style={containerStyle}>
            {notifications.map((notification) => (
                <div key={notification.id} style={notificationStyle}>
                    <div><strong>{notification.title}</strong></div>
                    <div>{notification.content}</div>
                    <div>{`${notification.date} a las ${notification.time}`}</div>
                </div>
            ))}
        </aside>
    );
}

export default NotificationsUI;