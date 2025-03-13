import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Administracion from './Administracion';
import Portones from './Portones';
import Multas from './Multas';
import Permisos from './Permisos';
import './index.css';
import RegistrarMulta from "./RegistrarMulta";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/portones" element={<Portones />} />
        <Route path="/multas" element={<Multas />} />
        <Route path="/permisos" element={<Permisos />} />
<Route path="/registrar-multa" element={<RegistrarMulta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
