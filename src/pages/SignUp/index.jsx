import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const SignUp = () => {
    return (
        <div class="container mt-5">
        <div class="row justify-content-md-center">
            <div class="col col-lg-3">
                    <div className="Auth-form-container">
                        <form className="Auth-form">
                        <div className="Auth-form-content">
                            <h2 className="Auth-form-title">Registrarme</h2>
                            <div className="form-group mt-3">
                                <label>Nombre</label>
                                <input type="name" className="form-control mt-1" />
                            </div>
                            <div className="form-group mt-3">
                                <label>Apellido</label>
                                <input type="surname" className="form-control mt-1"/>
                            </div>
                            <div className="form-group mt-3">
                                <label>CorreoElectronico</label>
                                <input type="email" className="form-control mt-1"/>
                            </div>
                            <div className="form-group mt-3">
                                <label>Contraseña</label>
                                <input type="password" className="form-control mt-1"/>
                            </div>
                            <div className="d-grid gap-2 mt-5">
                                <button type="submit" className="btn btn-primary">
                                    Enviar
                                </button>
                            </div>

                        </div>
                        </form>
                    </div>

                    
                </div>
             </div>
        </div>

   
    );
}