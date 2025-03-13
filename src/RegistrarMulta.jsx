import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'; // Asegúrate de que los estilos estén correctamente importados

function RegistrarMulta() {
  const [costo, setCosto] = useState("");
  const [torre, setTorre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaMulta = {
      costo,
      torre,
      departamento,
    };

    setIsLoading(true); // Activar "Cargando..." antes de la solicitud

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
        setModalMessage(`Multa registrada correctamente: Costo $${data.costo}, Torre ${data.torre}, Departamento ${data.departamento}`);
        setIsModalVisible(true); // Mostrar el modal
        setCosto(""); // Limpiar los campos
        setTorre("");
        setDepartamento("");
      })
      .catch((error) => {
        console.error("Error al registrar multa:", error);
        setModalMessage(`Error al registrar la multa: ${error.message}`);
        setIsModalVisible(true); // Mostrar el modal en caso de error
      })
      .finally(() => {
        setIsLoading(false); // Desactivar "Cargando..."
      });
  };

  // Función para cerrar el modal y redirigir a "Multas"
  const closeModalAndRedirect = () => {
    setIsModalVisible(false); // Cerrar el modal
    navigate("/multas"); // Redirigir a la página de multas
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
          <button type="submit" disabled={isLoading}>Registrar Multa</button>
        </form>
      </div>

      {/* Modal con el resultado */}
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>{isLoading ? "Cargando..." : modalMessage}</p>
            <button onClick={closeModalAndRedirect}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrarMulta;
