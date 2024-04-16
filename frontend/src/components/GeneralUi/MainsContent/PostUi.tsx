import { useState } from 'react';

interface CSSProperties {
    [key: string]: string | number;
}

function PostUi() {
    const [newPostContent, setNewPostContent] = useState('');

    const mainContainerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        padding: '1rem',
        overflowY: 'auto',
        width: '50%',
        backgroundColor: '#121212',
        color: '#FFFFFF',
    };

    const newPostContainerStyle: CSSProperties = {
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px 0',
        width: '80%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    };

    const postStyle: CSSProperties = {
        ...newPostContainerStyle,
        marginBottom: '20px',
    };

    const inputStyle: CSSProperties = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle: CSSProperties = {
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    };

    // Ejemplo de datos de publicaciones
    const posts = [
        {
            id: 1,
            userName: 'Usuario Ejemplo',
            userProfilePic: '',
            date: '2023-04-01',
            time: '12:00',
            content: 'Este es el texto de la publicación.',
            postImage: '',
            comments: [
                { id: 1, userName: 'Comentarista', content: '¡Gran publicación!' },
                // Más comentarios aquí
            ],
            reactions: { likes: 10, loves: 5 }, // Ejemplo de reacciones
        },
        // Agrega más publicaciones aquí
    ];

    const handleNewPost = () => {
        console.log(newPostContent); // Aquí iría la lógica para crear una nueva publicación
        setNewPostContent(''); // Limpiar el área de texto después de publicar
    };

    return (
        <aside style={mainContainerStyle}>
            <div style={newPostContainerStyle}>
                <textarea
                    style={inputStyle}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="¿Qué estás pensando?"
                ></textarea>
                <button style={buttonStyle} onClick={handleNewPost}>Publicar</button>
            </div>
            {posts.map((post) => (
                <div key={post.id} style={postStyle}>
                    <div>{post.userName}</div>
                    <div>{`${post.date} a las ${post.time}`}</div>
                    <div>{post.content}</div>
                    {post.postImage && <img src={post.postImage} alt="Publicación" />}
                    {/* Aquí irían los componentes de comentarios y reacciones */}
                </div>
            ))}
        </aside>
    );
}

export default PostUi;