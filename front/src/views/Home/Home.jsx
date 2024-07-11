// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./Home.module.css";
import Faq from "./Faq";
import Footer from "../../components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos predeterminados del carrusel



const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <div className={styles.homeTitleContainer}>
          <h1 className={styles.homeTitle}>FOTO MORALES</h1>
        </div>
        <div className={styles.faqContainer}>
          <Faq />
        </div>
      </div>
      <div className={`${styles.photoContainer} ${styles.carouselContainer}`}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={5000} // Cambia cada 3 segundos
          infiniteLoop={true}
          stopOnHover={false}
          showArrows={false} // Opcional: si quieres mostrar flechas de navegación
          showStatus={false} // Opcional: si quieres mostrar el estado del carrusel
        >
          <div>
            <img src="/foto1.jpg" alt="Descripción de la imagen 1" className={styles.carouselImage} />
          </div>
          <div>
            <img src="/foto2.jpg" alt="Descripción de la imagen 2" className={styles.carouselImage} />
          </div>
          <div>
            <img src="/foto3.jpg" alt="Descripción de la imagen 3" className={styles.carouselImage} />
          </div>
          <div>
            <img src="/foto4.jpg" alt="Descripción de la imagen 4" className={styles.carouselImage} />
          </div>
          <div>
            <img src="/foto5.jpg" alt="Descripción de la imagen 5" className={styles.carouselImage} />
          </div>
          <div>
            <img src="/foto6.jpg" alt="Descripción de la imagen 6" className={styles.carouselImage} />
          </div>
          <div>
            <img src="/foto7.jpg" alt="Descripción de la imagen 7" className={styles.carouselImage} />
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
