import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login.tsx';
import FourZeroFourPage from './pages/FZF.tsx';
import RegisterPage from './pages/Register.tsx';
import Home from './pages/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
      <Route path='#' element={<FourZeroFourPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
