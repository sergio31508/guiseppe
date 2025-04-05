// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Administracion from './Administracion';
import Pagos from './Pagos';
import Multas from './Multas';
import Portones from './Portones';
import Recuperar from './Recuperar'; // Asegúrate de que esto esté importado


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/recuperar" element={<Recuperar />} /> {/* Asegúrate de que esta ruta está definida correctamente */}

        <Route path="/administracion" element={<Administracion />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/multas" element={<Multas />} />
        <Route path="/portones" element={<Portones />} />
      </Routes>
    </Router>
  );
};

export default App;
