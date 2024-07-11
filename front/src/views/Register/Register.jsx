import { useEffect, useState } from "react";
import { validateRegister } from "../../helpers/validate";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css"; 

const Register = () => {
    const navigate = useNavigate();
    const initialState = {
        name: "",
        username: "",
        password: "",
        email: "",
        birthdate: "",
        nDni: ""
    };

    const [form, setForm] = useState(initialState);
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState(initialState);

    useEffect(() => {
        const errors = validateRegister(form);
        setErrors(errors);
    }, [form]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const postData = async (form) => {
        try {
            const response = await axios.post("http://localhost:3000/users/register", form);
            console.log("Respuesta del servidor:", response);
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario registrado correctamente',
                    showConfirmButton: false,
                    timer: 3000
                });
                navigate("/login");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El usuario no se ha podido registrar',
                });
            }
            setForm(initialState);
        } catch (error) {
            console.log("Error del servidor", error.response ? error.response.data : error.message);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al intentar registrar el usuario. Por favor, inténtalo de nuevo más tarde.',
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postData(form);
    };

    return (
        <div className={styles.registerContainer}>
            <h2>Registro de Usuarios</h2>
            <form onSubmit={handleSubmit}>
                {[
                    {
                        label: "Nombre:",
                        name: "name",
                        type: "text",
                    },
                    {
                        label: "Nombre de usuario:",
                        name: "username",
                        type: "text",
                    },
                    {
                        label: "Contraseña:",
                        name: "password",
                        type: "password",
                    },
                    {
                        label: "Correo electrónico:",
                        name: "email",
                        type: "text",
                    },
                    {
                        label: "Fecha de nacimiento:",
                        name: "birthdate",
                        type: "date",
                    },
                    {
                        label: "N° DNI:",
                        name: "nDni",
                        type: "text",
                    },
                ].map(({ label, name, type }) => (
                    <div className={styles.inputGroup} key={name}>
                        <label className={styles.label}>{label}</label>
                        <input
                            className={styles.input}
                            value={form[name]}
                            name={name}
                            type={type}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button className={styles.submitButton} type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
