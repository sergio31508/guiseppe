import { useNavigate } from "react-router-dom";
import './App.css'; // Asegúrate de que los estilos estén correctamente importados

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Redirige a la página de Login
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="/portones">Portones</a></li>
        <li><a href="/administracion">Administración</a></li>
        <li><a href="/multas">Multas</a></li>
        <li><a href="/permisos">Permisos</a></li>
        <li><button onClick={handleLogout}>Cerrar sesión</button></li> {/* Botón de cerrar sesión */}
      </ul>
    </nav>
  );
}

export default Navbar;
