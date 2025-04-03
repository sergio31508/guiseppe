import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Administracion.css';

const Administracion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/'); // Si no hay token, regresa a Login
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    navigate('/'); // Redirige al login tras cerrar sesión
  };

  return (
    <div>
      <nav className="navbar">
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
      </nav>

      <div className="table-container">
        <h1>Administración</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Perfil</th>
              <th>Estatus</th>
              <th>Torre</th>
              <th>Edificio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Juan Pérez</td>
              <td>123456789</td>
              <td>Administrador</td>
              <td>No Pagado</td>
              <td>Torre 1</td>
              <td>Edificio A</td>
            </tr>
            <tr>
              <td>María López</td>
              <td>987654321</td>
              <td>Inquilino</td>
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

export default Administracion;
