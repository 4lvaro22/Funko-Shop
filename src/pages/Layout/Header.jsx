import {Link} from "react-router-dom";
import cart from "../../assets/images/cart.svg";


export const Header = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="center-block row bg-dark">
                        <span className="col-4">
                            <Link to={"/"}><button class="btn btn-light m-2"><i class="bi bi-house-door-fill"></i></button></Link>
                        </span>

                        <span className="col-4 text-center text-white">
                            <h1>FunkoShop</h1>
                        </span>

                        <span className="col-4 text-end">
                            <Link to={"/Login"} ><button id="login" class=" btn btn-light m-1">Log in</button></Link>
                            <Link to={"/SignUp"} ><button id="signup" class="btn btn-light m-1">Sign up</button></Link>
                            <Link to={"/Cart"} ><button id="cart" class="btn btn-light m-2"><i class="bi bi-cart"></i>Cart</button></Link>
                        </span>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;