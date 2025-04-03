import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Agregado useNavigate para la redirección
import './Administracion.css';

const Pagos = () => {
  const navigate = useNavigate();

  // Verificar el token al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/'); // Si no hay token, redirige a Login
    }
  }, [navigate]);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/'); // Redirige al login tras cerrar sesión
  };

  return (
    <div>
      {/* Navbar dentro de la pestaña Pagos */}
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

      <div className="table-container">
        <h1>Pagos</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Estatus</th>
              <th>Torre</th>
              <th>Edificio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>123456789</td>
              <td>No Pagado</td>
              <td>Torre 1</td>
              <td>Edificio A</td>
            </tr>
            <tr>
              <td>María López</td>
              <td>987654321</td>
              <td>Pagado</td>
              <td>Torre 2</td>
              <td>Edificio B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pagos;
