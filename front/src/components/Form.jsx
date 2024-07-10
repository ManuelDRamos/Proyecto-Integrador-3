import { useEffect, useState } from "react";
import { validateLogin } from "../helpers/validate";



const Form = () => {
    const [userData, setUserData] = useState({
        username:"",
        password:""
    })

    const [error, setError] = useState({
        username:"",
        password:""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (event) => {
        event.prevenDefault()
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserData({
            ...userData,
            [name]: value
        })
    };

useEffect(() => {
    const error = validateLogin(userData)
    setError(error)
},[userData])


    return (
        <form onSubmit={handleSubmit}>
            <h2>Formulario de Login</h2>

            <div>
                <label>USERNAME:</label>
                <input
                   type="text"
                   value={userData.username}
                   name="username"
                   placeholder="example@mail.com"
                   onChange={handleChange}
                   />
                   {error.username && <span>{error.username}</span>}
            </div>

            <div>
                <label>PASSWORD:</label>
                <input 
                   type={`${showPassword ? "text" : "password"}`}
                   value={userData.password}
                   name="password"
                   placeholder="************"
                   onChange={handleChange}
                   disabled={!userData.username || error.username}
                />
                <button onClick={() => {
                    setShowPassword(!showPassword)
                }}>Show</button>
            </div>

            <button type="submit">LOGIN</button>

        </form>
    )

};


export default Form;