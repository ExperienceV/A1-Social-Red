import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login_form";

function App(){ 
  return (
    <BrowserRouter>
    <Routes>
        /*Path es la ruta en la que se pintará la variable 
        element, que vendría a ser la página en si.
        Todas las páginas deben pintarse de la misma forma con una ruta diferente.
        */
        <Route path="/login" element={<LoginPage />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;