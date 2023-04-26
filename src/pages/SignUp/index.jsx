import logoFunko from '../../assets/images/funkoIcono.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddedModal from '../../components/addedModal';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useState } from 'react';
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
    return name.length >= 4;
  };
  const validateSurname = () => {
    return surname.length >= 4;
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

  return (
    <>
      {registeredModal}
      {/* <AddedModal alert='Usted se ha registrado correctamente' out='Ir a la para Iniciar Sesión' value='1' /> */}
      <div className='container my-5'>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} alt='icono Funkoshop' /></span>
          </div>
          <div className='col col-lg-7'>
            <div className='Auth-form-container'>
              <form className='Auth-form'>
                <div className='Auth-form-content'>
                  <h2 className='Auth-form-title'>Registrarme</h2>
                  {/* NOMBRE */}
                  <div class='row g-3 align-items-center'>
                    <div class='col-3'>
                      <label for='txtNombre' class='col-form-label'>Nombre</label>
                      <div className='input-group d-flex flex-row'>
                        <input id='txtNombre' class='form-control' type='text' className='form-control' onChange={(e) => setValueName(e.target.value)} />
                      </div>
                    </div>
                    <div className='col-5'>
                      <div class='col-auto d-flex mt-5 mb-1 align-items-center'>
                        <h2 className='d-flex '><i className={'bi bi' + (validateName() ? '-check text-success' : '-x text-danger')} /></h2><p className={'mt-2 ' + (validateName() ? 'visually-hidden' : '')}>Mínimo número de carácteres 4</p>
                      </div>
                    </div>
                  </div>
                  {/* APELLIDO */}
                  <div class='row g-3 align-items-center'>
                    <div class='col-3'>
                      <label for='txtApellido' class='col-form-label'>Apellidos</label>
                      <div className='input-group d-flex flex-row'>
                        <input id='txtApellido' class='form-control' type='text' className='form-control' onChange={(e) => setValueSurname(e.target.value)} />
                      </div>
                    </div>
                    <div className='col-5'>
                      <div class='col-auto d-flex mt-5 mb-1 align-items-center'>
                        <h2 className='d-flex '><i className={'bi bi' + (validateSurname() ? '-check text-success' : '-x text-danger')} /></h2><p className={'mt-2 ' + (validateSurname() ? 'visually-hidden' : '')}>Mínimo número de carácteres 4</p>
                      </div>
                    </div>
                  </div>
                  {/* CORREO ELECTRONICO */}
                  <div class='row g-3 align-items-center'>
                    <div class='col-4'>
                      <label for='txtEmail' class='col-form-label'>Correo Electrónico <span style={{ color: 'red' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-envelope-at' /></span><input id='txtEmail' class='form-control' type='text' className='form-control' onChange={(e) => setValueEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className='col-5'>
                      <div class='col-auto d-flex mt-5 mb-1 align-items-center'>
                        <h2 className='d-flex '><i className={'bi bi' + (validateEmail() ? '-check text-success' : '-x text-danger')} /></h2><p className={'mt-2 ' + (validateEmail() ? 'visually-hidden' : '')}>Registrese con un correo válido.</p>
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
                    <div className='col-6'>
                      <div class='col-auto d-flex mt-5 align-items-center'>
                        <h2 className='d-flex '><i className={'bi bi' + (validatePassword() ? '-check text-success' : '-x text-danger')} /></h2><p className='mt-2'>Debe ser una contraseña de 8-20 caracteres.</p>
                      </div>
                    </div>
                    <div className='col-5'>
                      <PasswordStrengthBar minLength={4} password={password} />
                    </div>
                  </div>
                  {/* CONFIRMAR CONTRASEÑA */}
                  <div class='row g-3 align-items-center'>
                    <div class='col-auto'>
                      <label for='txtConfirmPassword' class='col-form-label'>Confirmar Contraseña <span style={{ color: 'red' }}>*</span></label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i class='bi bi-lock-fill' /></span><input id='txtConfirmPassword' class='form-control' aria-describedby='passwordHelpInline' onChange={(e) => setValueConfirmPassword(e.target.value)} type={'password'.replace('password', (!confirmPasswordEye ? 'text' : 'Password'))} value={confirmPassword} className='form-control' /><span className='input-group-text'><i className={'bi bi-eye' + (confirmPasswordEye ? '-slash' : '')} onClick={() => setValueConfirmPasswordEye(!confirmPasswordEye)} /></span>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div class='col-auto d-flex mt-5 mb-1 align-items-center'>
                        <h2 className='d-flex '><i className={'bi bi' + (validateConfirmPassword() ? '-check text-success' : '-x text-danger')} /></h2><p className='mt-2'>Debe coincidir con contraseña.</p>
                      </div>
                    </div>
                  </div>
                  {/* DIRECCION */}
                  <div class='row g-3 align-items-center'>
                    <div class='col-7'>
                      <label for='txtConfirmPassword' class='col-form-label'>Direccion</label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-house' /></span><input id='txtDireccion' class='form-control' type='text' className='form-control' />
                      </div>
                    </div>
                    {/* CODIGO POSTAL */}
                    <div class='col-3'>
                      <label for='txtDireccion' class='col-form-label'>Código Postal</label>
                      <div className='input-group d-flex flex-row'>
                        <input id='txtDireccion' class='form-control' type='text' className='form-control' />
                      </div>
                    </div>
                  </div>

                  {/* TELEFONO */}
                  <div class='row g-3 align-items-center my-1'>
                    <div class='col-7'>
                      <label for='txtTelefono' class='col-form-label'>Telefono</label>
                      <div className='input-group d-flex flex-row'>
                        <span className='input-group-text'><i className='bi bi-telephone' /></span><input id='txtTelefono' class='form-control' type='text' className='form-control' />
                      </div>
                    </div>
                  </div>

                  {/* BOTON ENVIAR */}
                  <div className='d-grid gap-2 mt-5'>
                    <button
                      type='submit' disabled={!validate()} className='btn btn-primary' onClick={() => {
                        showRegisteredModal();
                        // new bootstrap.Modal(document.getElementById('exampleModal')).show();
                      }}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
