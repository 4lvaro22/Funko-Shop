import {Link} from "react-router-dom";

const divStyle = {
    color: 'white',
    textDecoration: 'none',
};
export const Header = () => {
    return (
        <>
            <header><h1><Link to="/" style={divStyle}>FunkoShop</Link></h1>
                <Link to={"/Login"} style={divStyle}><button id="login">Log in</button></Link>
                <Link to={"/Profile"} style={divStyle}><button id="profile">Profile</button></Link>
                <button id="signup">Sign up</button>
            </header>
        </>
    )
}
export default Header;