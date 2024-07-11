import  { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.${styles.navbarContainer}`);
      if (window.scrollY > 50) {
        navbar.classList.add(styles.shrink);
      } else {
        navbar.classList.remove(styles.shrink);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbarContainer}>
      <Link to="/">
        <img className={styles.imgTest} src="/Logo.jpg" alt="logo" />
      </Link>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/register" className={styles.navbarLink}>Registrarse</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/mis-turnos" className={styles.navbarLink}>Turnos</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/crear-turnos" className={styles.navbarLink}>Crear Turnos</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/login" className={styles.navbarLink}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
