import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || !password) {
      setErrorMessage("Por favor, ingrese tanto el teléfono como la contraseña.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (remember) {
          localStorage.setItem("token", data.token); // Guarda token permanente si recuerda sesión
        } else {
          sessionStorage.setItem("token", data.token); // Guarda token solo para la sesión
        }

        console.log("Login exitoso, token:", data.token);
        navigate('/administracion'); // Redirige a administración tras el login
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Error en el login:", error);
      setErrorMessage("Error en la conexión");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
        <label htmlFor="remember">Recordar sesión</label>
      </div>
      <div>

        <a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>

      <a href="/recuperar">¿Olvidaste tu contraseña?</a>

      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
