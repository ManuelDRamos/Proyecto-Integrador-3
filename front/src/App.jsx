// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login.jsx";
import Home from "./views/Home/Home.jsx";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import Register from "./views/Register/Register.jsx";
import ScheduleAppointment from "./views/MyAppointments/SheduleAppointment.jsx"
import "./App.css";
import NavbarHome from "./components/Navbar/NavbarHome.jsx";


function App() {
  return (
    <div>
      {/* <Router> */}
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mis-turnos" element={<MyAppointments />} />
        <Route path="/crear-turnos" element={<ScheduleAppointment />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;

