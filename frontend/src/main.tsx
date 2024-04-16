import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './expyFnt/login_formwo.tsx';
import FourZeroFourPage from './pages/FZF.tsx';
import RegisterPage from './expyFnt/register_formwo.tsx';
import Home from './pages/home.tsx';
import Test from './expyFnt/test.tsx';

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
