import { Link, useNavigate } from 'react-router-dom';
import logoFunko from '../../assets/images/funkoIcono.png';
import { useState } from 'react';
import validator from 'validator';

export const Login = ({ setSession, session }) => {
  const [passwordEye, setValuePasswordEye] = useState(true);
  const [email, setValueEmail] = useState('');
  const [password, setValuePassword] = useState('');
  const navigate = useNavigate();

  const validatePassword = () => {
    return password.length;
  };

  const validate = () => {
    return validateEmail() && validatePassword();
  };

  const validateEmail = () => {
    const posicionDominio = email.lastIndexOf('.');

    if (validator.isEmail(email)) {
      return true;
    } else if (email.substring(posicionDominio).length <= 3) {
      return false;
    }
  };

  return (
    <>

      <div className='container my-5'>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} /></span>
          </div>
          <div className='col col-lg-5'>
            <div className='Auth-form-container'>
              <div className='container my-5'>
                <div className='row justify-content-md-center'>
                  <div className='col col-lg-7'>
                    <div className='Auth-form-container'>
                      <form className='Auth-form'>
                        <div className='Auth-form-content'>
                          <h2 className='Auth-form-title'>Iniciar Sesión</h2>
                          {/* CORREO ELECTRONICO */}
                          <div class='row g-3 align-items-center'>
                            <div class='col-12'>
                              <label for='txtEmail' class='col-form-label'>Correo Electrónico <span style={{ color: 'red' }}>*</span></label>
                              <div className='input-group d-flex flex-row'>
                                <span className='input-group-text'><i className='bi bi-envelope-at' /></span><input id='txtEmail' class='form-control' type='text' className='form-control' onChange={(e) => setValueEmail(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          {/* CONTRASEÑA */}
                          <div class='row g-3 align-items-center'>
                            <div class='col-auto'>
                              <label for='txtPassword' class='col-form-label'>Contraseña <span style={{ color: 'red' }}>*</span></label>
                              <div className='input-group d-flex flex-row'>
                                <span className='input-group-text'><i className='bi bi-lock' /></span><input id='txtPassword' class='form-control' aria-describedby='passwordHelpInline' type={'password'.replace('password', (!passwordEye ? 'text' : 'password'))} value={password} onChange={(e) => setValuePassword(e.target.value)} className='form-control' /><span className='input-group-text'><i className={'bi bi-eye' + (passwordEye ? '-slash' : '')} onClick={() => setValuePasswordEye(!passwordEye)} /></span>
                              </div>
                            </div>
                          </div>
                          {/* BOTON ENVIAR */}
                          <div className='d-grid gap-2 mt-5'>
                            <button
                              disabled={!validate()}
                              type='submit' className='btn btn-primary' onClick={() => {
                                // new bootstrap.Modal(document.getElementById('exampleModal')).show();
                                setSession(true);
                                setTimeout(() => {
                                  navigate('/');
                                }, 500);
                              }}
                            >
                              Iniciar Sesión
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-center'>
              <Link to='/SignUp' className='text-decoration-none text-black'><p>¿No te has registrado...? <u>Registrarme</u></p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
