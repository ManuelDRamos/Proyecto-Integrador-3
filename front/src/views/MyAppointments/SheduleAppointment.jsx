import { useState } from "react";
import axios from "axios";
import styles from "./ScheduleAppointment.module.css";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ScheduleAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    date: "",
    time: "",
    description: "",
    status: "confirmed", // Valor predeterminado para el estado
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userId, date, time, description, status } = formData;

    if (!userId || !date || !time || !description) {
      setMessage("Todos los campos son obligatorios.");
      setSuccess(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        {
          userId,
          date,
          time,
          description,
          status,
        }
      );

      if (response.status === 200) {
        setSuccess(true);
        setMessage("Turno registrado exitosamente.");

        // Limpiar el formulario
        setFormData({
          userId: "",
          date: "",
          time: "",
          description: "",
          status: "confirmed",
        });

        // Mostrar SweetAlert de éxito
        Swal.fire({
          icon: "success",
          title: "Turno registrado exitosamente",
          showConfirmButton: false,
          timer: 3000,
        });

        // Forzar la actualización del componente
        e.target.reset();
      } else {
        setSuccess(false);
        setMessage("Error al registrar el turno. Por favor, intente nuevamente.");
      }
    } catch (error) {
      setSuccess(false);
      setMessage(
        `Error al registrar el turno: ${error.response?.data || error.message}`
      );

      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al registrar el turno. Por favor, intente nuevamente.",
      });
    }
  };

  const handleMyAppointments = () => {
    navigate("/mis-turnos");
  };

  const handleReturnClick = () => {
    navigate("/mis-turnos");
  };

  return (
    <div className={styles.background}>
      <div className={styles.form}>
        <MdOutlineKeyboardReturn
          className={styles.returnIcon}
          onClick={handleReturnClick}
        />
        <h1>Agendar Turno!</h1>
        {message && (
          <p className={success ? styles.successMessage : styles.errorMessage}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="userId" className={styles.label}>
            ID de Usuario:
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="ID de Usuario"
          />

          <label htmlFor="date" className={styles.label}>
            Fecha:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Fecha"
          />

          <label htmlFor="time" className={styles.label}>
            Hora:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Hora"
          />

          <label htmlFor="description" className={styles.label}>
            Descripción:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.inputLarge}
            placeholder="Descripción"
          />

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Crear Cita!
            </button>
            <span className={styles.buttonSpace}></span>
            <button
              type="button"
              className={styles.button}
              onClick={handleMyAppointments}
            >
              Mis Citas!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
