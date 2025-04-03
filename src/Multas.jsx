import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Agregado useNavigate para la redirección
import './Administracion.css';

const Multas = () => {
  const [multas, setMultas] = useState([]);
  const navigate = useNavigate();

  // Verificar el token al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/'); // Si no hay token, redirige a Login
    }
  }, [navigate]);

  // Simulando la carga de datos de una API o base de datos
  useEffect(() => {
    const simulatedData = [
      { costo: 100, torre: 'A', departamento: '101' },
      { costo: 200, torre: 'B', departamento: '202' },
      { costo: 150, torre: 'C', departamento: '303' },
    ];
    
    setMultas(simulatedData);  // Establecemos los datos simulados
  }, []);  // El array vacío asegura que solo se ejecute al montar el componente

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/'); // Redirige al login tras cerrar sesión
  };

  return (
    <div>
      <div className="table-container">
        <h1>Multas</h1>

        {/* Navbar dentro de la pestaña Administración */}
        <div className="navbar">
          <ul>
            <li><Link to="/administracion">Administración</Link></li>
            <li><Link to="/pagos">Pagos</Link></li>
            <li><Link to="/multas">Multas</Link></li>
            <li><Link to="/portones">Portones</Link></li>
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>

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
              multas.map((multa, index) => (
                <tr key={index}>
                  <td>{multa.costo}</td>
                  <td>{multa.torre}</td>
                  <td>{multa.departamento}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No se encontraron multas</td>
              </tr>
            )}
          </tbody>
        </table>

        <button type="button">
          Agregar Multa
        </button>
      </div>
    </div>
  );
};

export default Multas;
