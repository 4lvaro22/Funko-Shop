import { Link } from 'react-router-dom';
import logoFunko from '../../assets/images/funkoIcono.png';

export const Login = () => {
  return (
    <>

      <div class='container my-5'>
        <div class='row justify-content-md-center'>
          <div className='col col-lg-5'>
            <span class='align-middle'><img className='w-100' src={logoFunko} /></span>
          </div>
          <div className='col col-lg-5'>
            <div className='Auth-form-container'>
              <form className='Auth-form'>
                <div className='Auth-form-content'>
                  <h2 className='Auth-form-title'>Iniciar Sesión</h2>
                  <div className='form-group mt-3'>
                    <label>Correo Electrónico <span style={{ color: 'red' }}>*</span></label>
                    <input type='email' className='form-control mt-1' required />
                  </div>
                  <div className='form-group mt-3'>
                    <label>Contraseña <span style={{ color: 'red' }}>*</span></label>
                    <input type='password' className='form-control mt-1' required />
                  </div>
                  <div className='d-grid gap-2 mt-5'>
                    <button type='submit' className='btn btn-primary'>
                      Enviar
                    </button>
                  </div>

                  <p className='forgot-password text-center mt-3'><a href='#' className='text-black'> Olvidaste tu contraseña?</a></p>

                </div>
              </form>
            </div>

            <div class='text-center'>
              <Link to='/SignUp' className='text-decoration-none text-black'><p>No te has registrado? <u>Registrarme</u></p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
