interface CSSProperties {
    [key: string]: string | number;
}

function ArchivedPostsUI() {
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

    const postStyle: CSSProperties = {
        backgroundColor: '#333333',
        color: '#FFFFFF',
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