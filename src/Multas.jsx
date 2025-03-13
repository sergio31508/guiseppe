import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Asegúrate de que Navbar esté importado correctamente
import './App.css';

function Multas() {
  const [multas, setMultas] = useState([]);
  const [notificacion, setNotificacion] = useState(false);
  const [notificacionesActivas, setNotificacionesActivas] = useState(false); // Estado de notificación activa
  const navigate = useNavigate();

  const fetchMultas = async () => {
    try {
      const response = await fetch("http://localhost:5000/multas");
      const data = await response.json();
      setMultas(data);
    } catch (error) {
      console.error("Error al obtener multas:", error);
    }
  };

  useEffect(() => {
    fetchMultas();

    // Simula la llegada de nuevas notificaciones cada 5 segundos
    const interval = setInterval(() => {
      // Cambia el estado de la notificación
      setNotificacion(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNotificacionClick = () => {
    setNotificacionesActivas(true); // Cambia el estado a "notificación leída"
    setNotificacion(false); // Resetea la notificación activa
  };

  return (
    <div className="container">
      <Navbar /> {/* Asegúrate de que Navbar esté aquí para que se muestre en la pestaña Multas */}
      <h2>Gestión de Multas</h2>
      <button onClick={() => navigate("/registrar-multa")}>Agregar Multa</button>
      
      {/* Botón de notificación */}
      <button
        className={`notificacion-btn ${notificacion ? "nueva-notificacion" : ""}`}
        onClick={handleNotificacionClick}
      >
        {notificacionesActivas ? "Tienes nuevas Notificaciones" :"Notificación Leída" }
      </button>
      
      <table>
        <thead>
          <tr>
            <th>Costo</th>
            <th>Torre</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {multas.length > 0 ? (
            multas.map((multa) => (
              <tr key={multa._id}>
                <td>${multa.costo}</td>
                <td>{multa.torre}</td>
                <td>{multa.departamento}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay multas registradas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Multas;
