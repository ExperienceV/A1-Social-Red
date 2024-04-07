import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login_form.tsx';
import FourZeroFourPage from './pages/FZF.tsx';
import RegisterPage from './pages/register_form.tsx';
import Home from './pages/home.tsx';
import Test from './pages/test.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
      <Route path='/Test' element={<Test/>}/>
      <Route path='#' element={<FourZeroFourPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
