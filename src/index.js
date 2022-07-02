import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Women from './components/Women';
import Login from './components/Login';
import Men from './components/Men';
import Denim from './components/Denim';
import TheGiftShop from './components/TheGiftShop';
import About from './components/About';
import Signup from './components/Signup';
import "./App.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/women' element={<Women />} />
      <Route path='/men' element={<Men />} />
      <Route path='/denim' element={<Denim />} />
      <Route path='/theGiftShop' element={<TheGiftShop />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<Signup />} />
    </Routes>
  </Router>
);
