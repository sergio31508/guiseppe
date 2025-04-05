// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Administracion from './Administracion';
import Pagos from './Pagos';
import Multas from './Multas';
import Portones from './Portones';
<<<<<<< HEAD

=======
import Recuperar from './Recuperar'; // Asegúrate de que esto esté importado
>>>>>>> 28b164b (ultimo trabajo)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD

=======
        <Route path="/recuperar" element={<Recuperar />} /> {/* Asegúrate de que esta ruta está definida correctamente */}
>>>>>>> 28b164b (ultimo trabajo)
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/multas" element={<Multas />} />
        <Route path="/portones" element={<Portones />} />
      </Routes>
    </Router>
  );
};

export default App;
