import logoFunko from '../../assets/images/funkoIcono.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState, useEffect } from 'react';
import validator from 'validator';
import { useModal } from '../../components/Modal';

export const SignUp = () => {
  const [passwordEye, setValuePasswordEye] = useState(true);
  const [confirmPasswordEye, setValueConfirmPasswordEye] = useState(true);
  const [name, setValueName] = useState('');
  const [surname, setValueSurname] = useState('');
  const [email, setValueEmail] = useState('');
  const [password, setValuePassword] = useState('');
  const [confirmPassword, setValueConfirmPassword] = useState('');
  const [registeredModal, showRegisteredModal] = useModal({ type: 'registro' });

  const validateName = () => {
    return name.length >= 3;
  };
  const validateSurname = () => {
    return surname.length >= 3;
  };
  const validateEmail = () => {
    const posicionDominio = email.lastIndexOf('.');

    if (validator.isEmail(email)) {
      return true;
    } else if (email.substring(posicionDominio).length <= 3) {
      return false;
    }
    return false;
  };

  const validatePassword = () => {
    return password.length && password.length >= 8 && password.length <= 20 && password === confirmPassword;
  };
  const validateConfirmPassword = () => {
    return confirmPassword.length && confirmPassword.length >= 8 && confirmPassword.length <= 20 && password === confirmPassword;
  };

  const validate = () => {
    return validateName() && validateSurname() && validateEmail() && validatePassword() && validateConfirmPassword() && password === confirmPassword;
  };
  const buttonColor = (!validate()) ? '#000000' : '#FFFFFF';

  useEffect(() => {
    document.title = 'Registro - FunkoShop';
  }, []);

  return (
    <>
      {registeredModal}
      {/* <AddedModal alert='Usted se ha registrado correctamente' out='Ir a la para Iniciar Sesión' value='1' /> */}
      <div className='container my-5' title='Registro' aria-label='Registro'>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} alt='icono Funkoshop' /></span>
          </div>
          <div className='col col-lg-7'>
            <form title='Formulario de Registro'>
              <h2>Registrarme</h2>
              {/* NOMBRE */}
              <div className='row g-3 align-items-center'>
                <div className='col-3'>
                  <label htmlFor='txtNombre' className='col-form-label' aria-label='Nombre'>Nombre</label>
                  <div className='input-group d-flex flex-row'>
                    <input id='txtNombre' className='form-control' type='text' onChange={(e) => setValueName(e.target.value)} />
                  </div>
                </div>
                <div className='col-5'>
                  <div className='col-auto d-flex mt-5 mb-1 align-items-center'>
                    <p className='d-flex '><i alt={validateName() ? 'Correcto' : 'Incorrecto'} className={'bi fs-2 bi' + (validateName() ? '-check text-success' : '-x text-danger')} /></p><p className={'mt-2 ' + (validateName() ? 'visually-hidden' : '')}>Mínimo número de carácteres 3</p>
                  </div>
                </div>
              </div>
              {/* APELLIDO */}
              <div className='row g-3 align-items-center'>
                <div className='col-3'>
                  <label htmlFor='txtApellido' className='col-form-label' aria-label='Apellidos'>Apellidos</label>
                  <div className='input-group d-flex flex-row'>
                    <input id='txtApellido' className='form-control' type='text' onChange={(e) => setValueSurname(e.target.value)} />
                  </div>
                </div>
                <div className='col-5'>
                  <div className='col-auto d-flex mt-5 mb-1 align-items-center'>
                    <p className='d-flex '><i alt={validateSurname() ? 'Correcto' : 'Incorrecto'} className={'bi fs-2 bi' + (validateSurname() ? '-check text-success' : '-x text-danger')} /></p><p className={'mt-2 ' + (validateSurname() ? 'visually-hidden' : '')}>Mínimo número de carácteres 3</p>
                  </div>
                </div>
              </div>
              {/* CORREO ELECTRONICO */}
              <div className='row g-3 align-items-center'>
                <div className='col-4'>
                  <label htmlFor='txtEmail' className='col-form-label' aria-label='Correo'>Correo Electrónico <span style={{ color: '#cd2026' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-envelope-at' /></span><input id='txtEmail' className='form-control' type='text' aria-required='true' aria-label='Número mínimo de carácteres para el Nombre son 4' onChange={(e) => setValueEmail(e.target.value)} />
                  </div>
                </div>
                <div className='col-5'>
                  <div className='col-auto d-flex mt-5 mb-1 align-items-center'>
                    <p className='d-flex '><i aria-label={validateEmail() ? 'Correcto' : 'Incorrecto'} className={'bi fs-2 bi' + (validateEmail() ? '-check text-success' : '-x text-danger')} /></p><p className={'mt-2 ' + (validateEmail() ? 'visually-hidden' : '')}>Registrese con un correo válido.</p>
                  </div>
                </div>
              </div>
              {/* CONTRASEÑA */}
              <div className='row g-3 align-items-center'>
                <div className='col-auto'>
                  <label htmlFor='txtPassword' className='col-form-label' aria-label='Contraseña'>Contraseña <span style={{ color: '#cd2026' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-lock' /></span><input id='txtPassword' className='form-control' aria-required='true' type={'password'.replace('password', (!passwordEye ? 'text' : 'password'))} value={password} onChange={(e) => setValuePassword(e.target.value)} />
                    <span className='input-group-text' role='button' tabIndex='0' onKeyDown={(e) => { if (e.key === 'Enter') setValueConfirmPasswordEye(!confirmPasswordEye); }} onClick={() => setValuePasswordEye(!passwordEye)}>
                      <i alt='Mostrar contraseña' className={'bi bi-eye' + (passwordEye ? '-slash' : '')} />
                    </span>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-auto d-flex mt-5 align-items-center'>
                    <p className='d-flex '><i aria-label={validatePassword() ? 'Correcto' : 'Incorrecto'} className={'bi fs-2 bi' + (validatePassword() ? '-check text-success' : '-x text-danger')} /></p><p className='mt-2'>Debe ser una contraseña de 8-20 caracteres.</p>
                  </div>
                </div>
                <div className='col-5'>
                  <PasswordStrengthBar
                    scoreWordClassName='text-dark'
                    minLength={4} password={password} style={{
                      color: 'white'
                    }}
                  />
                </div>
              </div>
              {/* CONFIRMAR CONTRASEÑA */}
              <div className='row g-3 align-items-center'>
                <div className='col-auto'>
                  <label htmlFor='txtConfirmPassword' className='col-form-label' aria-label='Confirmar contraseña'>Confirmar Contraseña <span style={{ color: '#cd2026' }}>*</span></label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-lock-fill' /></span><input id='txtConfirmPassword' className='form-control' aria-required='true' onChange={(e) => setValueConfirmPassword(e.target.value)} type={'password'.replace('password', (!confirmPasswordEye ? 'text' : 'Password'))} value={confirmPassword} />
                    <span className='input-group-text' role='button' tabIndex='0' onKeyDown={(e) => { if (e.key === 'Enter') setValueConfirmPasswordEye(!confirmPasswordEye); }} onClick={() => setValuePasswordEye(!passwordEye)}>
                      <i alt='Mostrar contraseña' className={'bi bi-eye' + (confirmPasswordEye ? '-slash' : '')} />
                    </span>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='col-auto d-inline-flex mt-5 mb-1 align-item-center'>
                    <i className={'bi fs-2 bi' + (validateConfirmPassword() ? '-check text-success' : '-x text-danger')} />
                    <p className='mt-2 '>Debe coincidir con contraseña.</p>
                  </div>
                </div>
              </div>
              {/* DIRECCION */}
              <div className='row g-3 align-items-center'>
                <div className='col-7'>
                  <label htmlFor='txtDireccion' className='col-form-label'>Direccion</label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-house' /></span><input id='txtDireccion' className='form-control' type='text' />
                  </div>
                </div>
                {/* CODIGO POSTAL */}
                <div className='col-3'>
                  <label htmlFor='txtCodigoPostal' className='col-form-label'>Código Postal</label>
                  <div className='input-group d-flex flex-row'>
                    <input id='txtCodigoPostal' className='form-control' type='text' aria-label='Código Postal' />
                  </div>
                </div>
              </div>

              {/* TELEFONO */}
              <div className='row g-3 align-items-center my-1'>
                <div className='col-7'>
                  <label htmlFor='txtTelefono' className='col-form-label'>Telefono</label>
                  <div className='input-group d-flex flex-row'>
                    <span className='input-group-text'><i className='bi bi-telephone' /></span><input id='txtTelefono' className='form-control' type='text' />
                  </div>
                </div>
              </div>

              {/* BOTON ENVIAR */}
              <div className='d-grid gap-2 mt-5'>
                <button
                  id='RegisterButton'
                  disabled={!validate()}
                  className='btn btn-primary'
                  type='submit'
                  style={{ color: buttonColor }}
                  tabIndex={!validate() ? '-1' : 0} role='button' aria-disabled={!validate()}
                  onClick={() => {
                    showRegisteredModal();
                    // new bootstrap.Modal(document.getElementById('exampleModal')).show();
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
