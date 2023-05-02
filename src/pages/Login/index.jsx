import { Link, useNavigate } from 'react-router-dom';
import logoFunko from '../../assets/images/funkoIcono.png';
import { useState, useEffect } from 'react';
import validator from 'validator';
import './login.css';

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

  const buttonColor = (!validate()) ? '#000000' : '#FFFFFF';

  function enterKeyEvent () {
    if (window.event.keyCode === 13) {
      document.getElementById('eye').click();
    }
  }

  useEffect(() => {
    document.title = 'Login | FunkoShop';
  }, []);

  return (

    <>

      <div className='container my-5' title='Iniciar sesión' aria-label='Iniciar sesión'>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} alt='icono Funkoshop' /></span>
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
                          <div className='row g-3 align-items-center'>
                            <div className='col-12'>
                              <label aria-label='Correo electrónico' htmlFor='txtEmail' className='col-form-label'>Correo Electrónico <span style={{ color: '#D90000' }}>*</span></label>
                              <div className='input-group d-flex flex-row'>
                                <span className='input-group-text'><i className='bi bi-envelope-at' /></span>
                                <input aria-required='true' id='txtEmail' className='form-control' type='text' onChange={(e) => setValueEmail(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          {/* CONTRASEÑA */}
                          <div className='row g-3 align-items-center'>
                            <div className='col-auto'>
                              <label aria-label='Contraseña' htmlFor='txtPassword' className='col-form-label'>Contraseña <span style={{ color: '#D90000' }}>*</span></label>
                              <div className='input-group d-flex flex-row'>
                                <span className='input-group-text'>
                                  <i className='bi bi-lock' />
                                </span>
                                <input aria-required='true' id='txtPassword' className='form-control' type={'password'.replace('password', (!passwordEye ? 'text' : 'password'))} value={password} onChange={(e) => setValuePassword(e.target.value)} />
                                <span role='button' aria-label={passwordEye ? 'Mostrar Contraseña' : 'Ocultar Contraseña'} id='eye' tabIndex='0' onKeyDown={() => enterKeyEvent()} onClick={() => setValuePasswordEye(!passwordEye)} className='input-group-text'>
                                  <i className={'bi bi-eye' + (passwordEye ? '-slash' : '')} />
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* BOTON ENVIAR */}
                          <div className='d-grid gap-2 mt-5'>
                            <button
                              disabled={!validate()}
                              type='submit' className='btn btn-primary' style={{ color: buttonColor }} onClick={() => {
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
              <Link to='/SignUp' className='text-black'><p>¿No te has registrado? Registrarme</p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
