
export const validateRegister = (formData) => {
    const errors = {}
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!emailRegex.test(formData.email)) {
        errors.email = "Ingresa un mail valido";
    }
    return errors;
}

// export const validateLogin = (formData) => {
//     const errors = {}
//     // eslint-disable-next-line no-useless-escape
//     const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//     if(formData.username && !emailRegex.test(formData.email)) {
//         errors.username = "Ingresa un mail valido";
//     }
//     return errors;
// }

export const validateLogin = (formData) => {
    const errors = {};

    if (!formData.username) {
        errors.username = "El nombre de usuario es requerido";
    }

    if (!formData.password) {
        errors.password = "La contraseña es requerida";
    }

    return errors;
};