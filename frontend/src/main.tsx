import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FourZeroFourPage from './pages/Fzf.tsx';
import Home from './pages/Home.tsx';
import SingInPage from './pages/SingIn.tsx';
import SignUpPage from './pages/SingUp.tsx';
import AuthPage from './pages/Auth.tsx';
import Notif from './pages/Notif.tsx';
import ArchivedPosts from './pages/ArchivedPosts.tsx';
import Chats from './pages/Chats.tsx';
import ChatWithPerson from './pages/ChatWithPerson.tsx';
import Settings from './pages/Settings.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Notifications' element={<Notif/>}/>
      <Route path='/ArchivedPosts' element={<ArchivedPosts/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/Chats' element={<Chats/>}/>
      <Route path='/ChatWithPerson' element={<ChatWithPerson/>}/>
      <Route path='/Login' element={<SingInPage/>}/>
      <Route path='/Register' element={<SignUpPage/>}/>
      <Route path='/Auth' element={<AuthPage/>}/>
      <Route path='#' element={<FourZeroFourPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
