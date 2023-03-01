import instagram from "../../assets/images/Instagram-Icon.png";
import facebook from "../../assets/images/Facebook.png";
import twitter from "../../assets/images/twitter.png";
import spanish from "../../assets/images/Spain.png";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <ul id="redes">
                    <li id="instagram"> <img src={instagram} alt="Instagram"/><a href="https://www.instagram.com/">FunkoShopInterfaces</a></li>
                    <li id="facebook"><img src={facebook} alt="Facebook"/><a href="https://es-es.facebook.com/">FunkoShopInterfaces</a></li>
                    <li id="twitter"><img src={twitter} alt='Twitter'/><a href="https://twitter.com/">FunkoShopInterfaces</a></li>
                </ul>
                <div id="info">
                    <div>
                        <Link to={"/TermsAndConditions"}>Términos y Condiciones</Link>
                        <Link to={"/AboutUs"}>Sobre nosotros</Link>
                        <a href="#">Contacto</a>
                        <a href="#">Localización</a>
                    </div>

                    <div>
                        <p>© 2023 FunkoShopInterfaces</p>
                    </div>
                </div>

                <div id="idioma">
                    <p><img src={spanish} alt="Idioma Español"/>ES</p>
                </div>

            </footer>
        </>
    )
}
export default Footer;