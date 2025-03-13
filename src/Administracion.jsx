import Navbar from './Navbar';
import './App.css'; 

function Administracion() {
  return (
    <div>
      <Navbar />
      <h2>Página de Administración</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ejemplo</td>
            <td><button>Editar</button></td>
          </tr>
        </tbody>
      </table>

      <div className="notificaciones">
        🔴 {/* Círculo de notificaciones */}
      </div>
    </div>
  );
}

export default Administracion;
