import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Women from './components/Women';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </Router>
);
