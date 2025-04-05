// Recuperar.jsx
import React, { useState } from 'react';

const Recuperar = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/recuperar-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Correo de recuperación enviado!');
      } else {
        setMessage('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor', error);
      setMessage('Hubo un error al procesar tu solicitud');
    }
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar Correo de Recuperación</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Recuperar;
