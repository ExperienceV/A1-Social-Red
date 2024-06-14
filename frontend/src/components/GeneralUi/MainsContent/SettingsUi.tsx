interface CSSProperties {
    [key: string]: string | number;
}

function SettingsUI() {

    const colors = {
        background: '#181A1F', // Un gris muy oscuro para el fondo
        text: '#FFFFFF', // Blanco para el texto
        sectionBackground: '#282C34', // Un gris ligeramente más claro para el fondo de las secciones
        divider: '#666666', // Un gris para los divisores
    };

    const containerStyle: CSSProperties = {
        padding: '20px',
        backgroundColor: colors.background,
        color: colors.text,
        width: '100%',
        fontFamily: 'Arial, sans-serif',
    };

    const titleStyle: CSSProperties = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const sectionTitleStyle: CSSProperties = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '5px',
    };

    const optionStyle: CSSProperties = {
        marginLeft: '20px',
        marginBottom: '5px',
    };

    const hrStyle: CSSProperties = {
        border: '0',
        height: '1px',
        backgroundColor: colors.divider,
        marginTop: '10px',
        marginBottom: '10px',
    };

    // Ejemplo de datos de configuraciones
    const settings = [
        {
            section: 'Pantalla',
            options: ['Brillo automático', 'Modo nocturno', 'Resolución'],
        },
        {
            section: 'Teclado',
            options: ['Retroiluminación', 'Distribución', 'Idioma'],
        },
        {
            section: 'Mouse',
            options: ['Sensibilidad', 'Botones', 'Rueda de desplazamiento'],
        },
        // Agrega más secciones aquí
    ];

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Configuraciones</div>
            <hr style={hrStyle} />
            {settings.map((setting, index) => (
                <div key={index}>
                    <div style={sectionTitleStyle}>{setting.section}</div>
                    <hr style={hrStyle} />
                    {setting.options.map((option, optionIndex) => (
                        <div key={optionIndex} style={optionStyle}>{option}</div>
                    ))}
                    <hr style={hrStyle} />
                </div>
            ))}
        </div>
    );
}

export default SettingsUI;