import {Link} from "react-router-dom";
import icono from "../../assets/images/funkoIcono.png"


export const Header = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="center-block row bg-dark">
                        <span className="col-4 d-flex align-self-center">
                            <Link to={"/"}><button class="btn btn-light my-2"><i class="bi bi-house-door-fill"></i></button></Link>
                        </span>

                        <span className="col-4">
                            <span className="text-white row d-flex justify-content-center">
                                <span className="col-sm-2 my-2 d-flex justify-content-center">
                                    <img src={icono} className="w-75 h-75 mx-2 mt-1"></img>
                                    <h1 className="mt-1">FunkoShop</h1>
                                </span>
                            </span>
                        </span>

                        <span className="col-4 d-flex align-self-center justify-content-end">
                            <Link to={"/Login"} ><button id="login" class="btn btn-light mx-1">Iniciar sesión</button></Link>
                            <Link to={"/SignUp"} ><button id="signup" class="btn btn-light mx-1">Registrarse</button></Link>
                            <Link to={"/Cart"} ><button id="cart" class="btn btn-light mx-3"><i class="bi bi-cart"></i>Carrito</button></Link>
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;