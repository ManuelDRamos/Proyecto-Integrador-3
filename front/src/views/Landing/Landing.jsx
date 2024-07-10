
import style from "./Landing.module.css"
import Faq from "../Home/Faq";
import Footer from "../../components/Footer/Footer";


const Landing = () => {


    return (
        <div className={style.landingContainer}>
            <h1>Home</h1>
            
            <Faq />
            <Footer />
        </div>
    )


};

export default Landing