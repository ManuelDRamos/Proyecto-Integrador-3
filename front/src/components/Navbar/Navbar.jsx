import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <Link to="/">
        <img className={styles.imgTest} src="/Logo.jpg" alt="logo" />
      </Link>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/regiter" className={styles.navbarLink}>Registro</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/login" className={styles.navbarLink}>Login</Link>
        </li>
       
        
      </ul>
    </nav>
  );
}
