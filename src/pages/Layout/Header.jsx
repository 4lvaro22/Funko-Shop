import {Link} from "react-router-dom";
import cart from "../../assets/images/cart.svg";


export const Header = () => {
    return (
        <>
            <header>
                <div className="container mw-100 center-block">
                    <span className="col-4">
                        
                    </span>
                    <span className="col-4 text-center">
                        <h1>FunkoShop</h1>
                    </span>
                    <span className="col-4">
                        <Link to={"/Login"} ><button id="login">Log in</button></Link>
                        <Link to={"/SignUp"} ><button id="signup">Sign up</button></Link>
                        <Link to={"/Cart"} ><button id="cart"><img src={cart}></img>Cart</button></Link>
                    </span>
                </div>
            </header>
        </>
    )
}
export default Header;