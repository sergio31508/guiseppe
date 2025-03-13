import { useNavigate } from "react-router-dom";
import './App.css'; // Asegúrate de que los estilos estén correctamente importados

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí se redirige a la página de Administración al presionar el botón de login
    navigate("/administracion");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Teléfono"
          disabled
        />
        <input
          type="password"
          placeholder="Contraseña"
          disabled
        />
        <button type="submit" onClick={handleLogin}>Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
