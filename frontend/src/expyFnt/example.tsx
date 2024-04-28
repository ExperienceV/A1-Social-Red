import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

// Obtener el token de sessionStorage
const token = sessionStorage.getItem('token');


// No se que es esto
let Home;

// Verificar si el token existe
if (token) {
    // Decodificar el token
    try {

        const decoded_token = jwtDecode(token);

        if (decoded_token) {

            // Si decoded_token es verdadero, que muestre la página frontend.
            Home = () => {
                // Aquí va el React
            }
            
        } else {
            throw new Error('Token invalido');
        }
    } catch (error) {
        console.error('Error al decodificar el token:', error);
        Home = () => <Navigate to="/404" replace/>;
    }
    
} else {
    // Si no hay token, redirige a la página de error 404
    Home = () => <Navigate to="/404" replace/>;
}

export default Home;