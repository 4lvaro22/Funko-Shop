import {Link} from "react-router-dom";
import cart from "../../assets/images/cart.svg";
import icono from "../../assets/images/funkopop.png";


export const Header = () => {
    return (
        <>
            <header>
                <div className="container mw-100 center-block">
                    <span className="col-4">
                        <Link to={"/"}><img className="w-50" src={icono}></img></Link>
                    </span>
                    <span className="col-4 text-center">
                        <h1>FunkoShop</h1>
                    </span>
                    <span className="col-4">
                        <Link to={"/Login"} style={divStyle}><button id="login">Log in</button></Link>
                        <Link to={"/SignUp"} style={divStyle}><button id="signup">Sign up</button></Link>
                        <Link to={"/Cart"} style={divStyle}><button id="cart"><img src={cart}></img>Cart</button></Link>
                    </span>
                </div>
            </header>
        </>
    )
}
export default Header;