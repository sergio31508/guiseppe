import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'; // Asegúrate de que los estilos estén correctamente importados

function RegistrarMulta() {
  const [costo, setCosto] = useState("");
  const [torre, setTorre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaMulta = {
      costo,
      torre,
      departamento,
    };

    // Enviar los datos al servidor
    fetch("http://localhost:5000/multas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaMulta),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Multa registrada:", data);
        navigate("/multas"); // Redirigir a la página de multas
      })
      .catch((error) => {
        console.error("Error al registrar multa:", error);
      });
  };

  return (
    <div className="container">
      <h2>Registrar Nueva Multa</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Costo"
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Torre"
            value={torre}
            onChange={(e) => setTorre(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Departamento"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            required
          />
          <button type="submit">Registrar Multa</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrarMulta;
