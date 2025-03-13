import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Multas from "./Multas";
import RegistrarMulta from "./RegistrarMulta";
import Navbar from "./Navbar";  // Asumí que tienes este componente de Navbar

function App() {
  const [notificacion, setNotificacion] = useState(false);  // El estado de la notificación

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/multas" 
          element={<Multas notificacion={notificacion} setNotificacion={setNotificacion} />} 
        />
        <Route 
          path="/registrar-multa" 
          element={<RegistrarMulta setNotificacion={setNotificacion} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
