import logo from "../../assets/images/logo.svg";

export const Login = () => {
    return (
        <div className="w-75 bg-light mx-auto">
            <h3 className="m-2">Login:</h3>

            <div>
                <label className="d-block" htmlFor={"email"}>Correo electrónico:</label>
                <input className="d-block" id={"email"} type={"email"}></input>
                <label className="d-block" htmlFor={"password"}>Contraseña:</label>
                <input className="d-block" id={"password"} type={"password"}></input>
                <label className="d-block" htmlFor={"passwordRepeat"}>Repite la contraseña:</label>
                <input className="d-block" id={"passwordRepeat"} type={"password"}></input>
            </div>


        </div>
    );
}