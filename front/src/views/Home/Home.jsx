
import style from "./Home.module.css"
import Faq from "./Faq";
import Footer from "../../components/Footer/Footer";

const Home = () => {


    return (
        <div className={style.homeContainer}>

            <h1 className={style.h1}>Home</h1>
            <Faq />
            <Footer />
        </div>
    )


};

export default Home