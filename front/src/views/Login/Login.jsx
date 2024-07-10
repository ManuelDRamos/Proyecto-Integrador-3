import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateLogin } from "../../helpers/validate";
import axios from "axios";
import Swal from 'sweetalert2';
import styles from "./Login.module.css"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const postData = async (form) => {
        try {
            console.log("Formulario enviado:", form); 
            const response = await axios.post("http://localhost:3000/users/login", form);
            console.log("Respuesta del servidor:", response.data); 
    
            if (response.status === 200) {
                // Verifica la estructura de la respuesta del servidor
                console.log("Datos recibidos:", response.data);
                const username = response.data.username; // Asegúrate de ajustar esto según la estructura real de tu respuesta

                // Mostrar SweetAlert de éxito con mensaje de bienvenida
                Swal.fire({
                    icon: 'success',
                    title: `¡Bienvenido, ${username}!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                
                // Redirigir al usuario a la página principal
                navigate("/");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al autenticar el usuario',
                });
            }
        } catch (error) {
            console.log("Error del servidor", error.response ? error.response.data : error.message);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.',
            });
        }
    };

    return (
        <Formik
            initialValues={{
                username: "",
                password: ""
            }}
            validate={validateLogin}
            onSubmit={(values, { resetForm }) => {
                postData(values);
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form className={styles.loginForm}>
                    <h2>Login de usuario</h2>
                    <div className={styles.inputGroup}>
                        <label>Nombre de usuario:</label>
                        <Field type="text" name="username" placeholder="username" />
                        <ErrorMessage className={styles.error} name="username" component="div" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Contraseña:</label>
                        <Field type="password" name="password" placeholder="" />
                        <ErrorMessage className={styles.error} name="password" component="div" />
                    </div>

                    <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Cargando...' : 'Login'}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Login;
