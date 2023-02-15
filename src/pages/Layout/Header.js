import {Link} from "react-router-dom";

const divStyle = {
    color: 'white',
    textDecoration: 'none',
};
export const Header = () => {
    return (
        <>
            <header><h1><Link to="/Proyecto-Interfaces-Grupo-H" style={divStyle}>FunkoShop</Link></h1>
                <button id="login">Log in</button>
                <button id="signup">Sign up</button>
            </header>
        </>
    )
}