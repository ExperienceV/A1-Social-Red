interface CSSProperties {
    [key: string]: string | number;
}

function ArchivedPostsUI() {

    const colors = {
        background: '#181A1F', // Un gris muy oscuro para el fondo, similar al de PostUi
        text: '#FFFFFF', // Blanco para el texto
        postBackground: '#282C34', // Un gris ligeramente más claro para el fondo de los posts, similar al inputBackground de PostUi
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

    const postStyle: CSSProperties = {
        backgroundColor: colors.postBackground,
        color: colors.text,
        borderRadius: '8px',
        padding: '15px',
        margin: '10px 0',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
    };

    // Ejemplo de datos de publicaciones archivadas
    const archivedPosts = [
        {
            id: 1,
            userName: 'Usuario Archivado',
            date: '2023-01-01',
            time: '10:00',
            content: 'Este es el texto de una publicación archivada.',
            // Puedes agregar más propiedades según sea necesario
        },
        // Agrega más publicaciones archivadas aquí
    ];

    return (
        <aside style={containerStyle}>
            {archivedPosts.map((post) => (
                <div key={post.id} style={postStyle}>
                    <div>
                        <strong>{post.userName}</strong>
                        <div>{`${post.date} a las ${post.time}`}</div>
                    </div>
                    <div>{post.content}</div>
                    {/* Agrega más elementos al post si es necesario */}
                </div>
            ))}
        </aside>
    );
}

export default ArchivedPostsUI;