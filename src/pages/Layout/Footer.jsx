import spanish from "../../assets/images/Spain.png";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div
          id="footer"
          className="container-fluid bg-dark position-absolute top-100 start-50 translate-middle"
        >
          <div className="row m-2 p-3">
            <div className="col-2" id="redes">
              <div className="row" id="instagram">
                <div>
                  <a
                    className="link-light text-decoration-none"
                    href="https://www.instagram.com/"
                  >
                    <i class="bi bi-instagram"></i>{" "}
                    <strong>FunkoShopInterfaces</strong>
                  </a>
                </div>
              </div>
              <div className="row" id="facebook">
                <div>
                  <a
                    className="link-light text-decoration-none"
                    href="https://es-es.facebook.com/"
                  >
                    <i class="bi bi-facebook"></i>{" "}
                    <strong>FunkoShopInterfaces</strong>
                  </a>
                </div>
              </div>
              <div className="row" id="twitter">
                <div>
                  <a
                    className="link-light text-decoration-none"
                    href="https://twitter.com/"
                  >
                    <i class="bi bi-twitter"></i>{" "}
                    <strong>FunkoShopInterfaces</strong>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-8" id="info">
              <span className="block d-flex justify-content-center m-2">
                <Link
                  to={"/TermsAndConditions"}
                  className="text-white text-decoration-none mx-2"
                >
                  Términos y Condiciones{" "}
                </Link>
                <Link
                  to={"/AboutUs"}
                  className="text-white text-decoration-none mx-2"
                >
                  Sobre nosotros
                </Link>
                <a href="#" className="link-light text-decoration-none mx-2">
                  Contacto
                </a>
                <a href="#" className="link-light text-decoration-none mx-2">
                  Localización
                </a>
              </span>

              <span className="block d-flex justify-content-center m-2">
                <p className="text-white justify-content-center">
                  © 2023 FunkoShopInterfaces
                </p>
              </span>
            </div>

            <div className="col-2 d-flex justify-content-end" id="idioma">
              <p className="text-white m-4">
                <img src={spanish} alt="Idioma Español" /> ES
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
