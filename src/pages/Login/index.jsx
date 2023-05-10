import { Link, useNavigate } from 'react-router-dom';
import logoFunko from '../../assets/images/funkoIcono.png';
import { useState, useEffect, useRef } from 'react';
import validator from 'validator';
import './login.css';

export const Login = ({ setSession, session }) => {
  const [passwordEye, setValuePasswordEye] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const validatePassword = () => {
    return passwordRef.current?.value?.length;
  };

  const validate = () => {
    return validateEmail() && validatePassword();
  };

  const validateEmail = () => {
    const value = emailRef?.current?.value;

    if (value && validator.isEmail(value)) {
      return true;
    } else {
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
          <div className='col d-none d-sm-block col-sm-4 col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} alt='icono Funkoshop' /></span>
          </div>
          <div className='ms-5 ms-sm-0 col col-12 col-sm-8 col-lg-6 align-self-center'>
            <div className='container my-5'>
              <div className='row justify-content-center'>
                <form
                  className='col col-lg-7 justify-content-center' onSubmit={(event) => {
                    if (passwordRef.current.checkValidity() && emailRef.current.checkValidity()) {
                      event.preventDefault();
                      // new bootstrap.Modal(document.getElementById('exampleModal')).show();
                      setSession(true);
                      setTimeout(() => {
                        navigate('/');
                      }, 500);
                    }
                  }}
                >
                  <h2 className=''>Iniciar Sesión</h2>
                  {/* CORREO ELECTRONICO */}
                  <div className='row g-3 align-items-center '>
                    <div className='col-auto'>
                      <label aria-label='Correo electrónico' htmlFor='txtEmail' className='col-form-label'>Correo Electrónico <span style={{ color: '#D90000' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-envelope-at' /></span>
                        <input
                          ref={emailRef}
                          aria-required='true' id='txtEmail' className='form-control' type='email'
                          autofocus='' autocapitalize='none' autocomplete='username'
                          required
                        />
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
                        <input
                          ref={passwordRef}
                          aria-required='true' id='txtPassword' className='form-control'
                          type={(!passwordEye ? 'text' : 'password')}
                          autocomplete='current-password'
                          required
                        />
                        <span role='button' aria-label={passwordEye ? 'Mostrar Contraseña' : 'Ocultar Contraseña'} id='eye' tabIndex='0' onKeyDown={() => enterKeyEvent()} onClick={() => setValuePasswordEye(!passwordEye)} className='input-group-text'>
                          <i className={'bi bi-eye' + (passwordEye ? '-slash' : '')} />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* BOTON ENVIAR */}
                  <div className='d-flex flex-row mt-5 justify-content-center'>
                    <button
                        // tabIndex={!validate() ? '-1' : 0} role='button' aria-disabled={!validate()}
                        // disabled={!validate()}
                      type='submit' className='btn col-auto btn-primary' style={{ color: buttonColor }}
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <Link to='/SignUp' className='text-black'><p>¿No te has registrado? Registrarme</p></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
