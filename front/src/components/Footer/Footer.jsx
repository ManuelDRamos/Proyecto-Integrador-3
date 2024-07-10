import styles from "./Footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 FotoMorales. Todos los derechos reservados.</p>
      <div className={styles.socialIcons}>
        <a href="mailto:example@gmail.com">
          <SiGmail className={styles.icon} />
        </a>
        <a 
          href="https://www.instagram.com/fotomorales_/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className={styles.icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
