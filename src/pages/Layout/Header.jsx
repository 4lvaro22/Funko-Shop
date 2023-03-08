import {Link} from "react-router-dom";
import cart from "../../assets/images/cart.svg";


export const Header = () => {
    return (
        <>
            <header><h1><Link to="/">FunkoShop</Link></h1>
                <Link to={"/Login"}><button id="login">Iniciar sesión</button></Link>
                <Link to={"/SignUp"}><button id="signup">Registrarme</button></Link>
                <Link to={"/Cart"}><button id="cart"><img src={cart}></img>Carrito</button></Link>
            </header>
        </>
    )
}
export default Header;