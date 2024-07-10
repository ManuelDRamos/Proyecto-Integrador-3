import { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import styles from "./myAppointments.module.css"; // Importa el archivo de estilos CSS

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/appointments');
                console.log("Response from API:", response.data); // Verifica los datos recibidos
                setAppointments(response.data.appointments); // Asegúrate de extraer los datos de appointments
                setLoading(false); // Marca la carga como completada
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // Marca la carga como completada con error
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al cargar los turnos. Por favor, intente nuevamente.',
                });
            }
        };

        fetchData();
    }, []);

    const cancelAppointment = async (id) => {
        try {
            const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
            if (response.status === 200) {
                setAppointments(prevAppointments => 
                    prevAppointments.filter(appointment => appointment.id !== id)
                );
                Swal.fire({
                    icon: 'success',
                    title: 'Turno cancelado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al cancelar el turno. Por favor, intente nuevamente.',
                });
            }
        } catch (error) {
            console.error("Error cancelando el turno:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al cancelar el turno. Por favor, intente nuevamente.',
            });
        }
    };

    console.log("Appointments state:", appointments); // Verifica el estado de los appointments

    return (
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                <h1>Turnos:</h1>
                {loading ? (
                    <div>Cargando turnos...</div>
                ) : (
                    appointments.length ? (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Descripción</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map(({ id, date, time, description, status }) => (
                                    <tr key={id}>
                                        <td>{date}</td>
                                        <td>{time}</td>
                                        <td>{description}</td>
                                        <td>{status}</td>
                                        <td>
                                            {status !== "cancelled" && (
                                                <button 
                                                    onClick={() => cancelAppointment(id)} 
                                                    className={styles.submitButton}
                                                >
                                                    Cancelar
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div>No tienes ningún turno</div>
                    )
                )}
            </div>
        </div>
    );
};

export default MyAppointments;
