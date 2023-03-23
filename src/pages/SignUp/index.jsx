import logoFunko from '../../assets/images/funkoIcono.png';
import '../../assets/js/CheckPassword.js';
import '../../assets/styles/CheckPassword.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddedModal from '../../components/addedModal';
import { useState } from 'react';

export const SignUp = () => {
  const [passwordEye, setValuePasswordEye] = useState(true);
  const [confirmPasswordEye, setValueConfirmPasswordEye] = useState(true);
  const [name, setValueName] = useState('');
  const [surname, setValueSurname] = useState('');
  const [email, setValueEmail] = useState('');
  const [password, setValuePassword] = useState('');
  const [confirmPassword, setValueConfirmPassword] = useState('');

  const validateName = () => {
    return name.length;
  };
  const validateSurname = () => {
    return surname.length;
  };
  const validateEmail = () => {
    return email.includes('@');
  };
  const validatePassword = () => {
    return password.length;
  };
  const validateConfirmPassword = () => {
    return confirmPassword.length;
  };

  const validate = () => {
    return name.length && surname.length && email.length && password.length && confirmPassword.length;
  };

  return (
    <>
      <AddedModal alert='Usted se ha registrado correctamente' out='Ir a la para Iniciar Sesión' value='1' />
      <div className='container my-5'>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} /></span>
          </div>
          <div className='col col-lg-7'>
            <div className='Auth-form-container'>
              <form className='Auth-form'>
                <div className='Auth-form-content'>
                  <h2 className='Auth-form-title'>Registrarme</h2>
                  {/* NOMBRE */}
                  <div className='form-group mt-3'>
                    <label>Nombre <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <input id='txtNombre' type='text' className='form-control' minLength={4} value={name} onChange={(e) => setValueName(e.target.value)} /> <h2><i class={'bi bi' + (validateName() ? '-check text-success' : '-x text-danger')} /></h2><p className={'mt-2 ' + (validateName() ? 'visually-hidden' : '')}>Mínimo numero de carácteres 4</p>
                    </div>
                  </div>
                  {/* APELLIDO */}
                  <div className='form-group mt-3'>
                    <label>Apellido <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <input id='txtApellido' type='text' className='form-control' minLength={4} value={surname} onChange={(e) => setValueSurname(e.target.value)} /> <h2><i class={'bi bi' + (validateSurname() ? '-check text-success' : '-x text-danger')} /></h2><p className={'mt-2 ' + (validateSurname() ? 'visually-hidden' : '')}>Mínimo numero de carácteres 4</p>
                    </div>
                  </div>
                  {/* CORREO ELECTRONICO */}
                  <div className='form-group mt-3'>
                    <label>Correo Electrónico <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <span className='input-group-text'><i className='bi bi-envelope-at' /></span><input id='txtEmail' type='email' className='form-control' value={email} onChange={(e) => setValueEmail(e.target.value)} /> <h2><i class={'bi bi' + (validateEmail() ? '-check text-success' : '-x text-danger')} /></h2><p className={'mt-2 ' + (validateEmail() ? 'visually-hidden' : '')}>Debe contener un carácter @</p>
                    </div>
                  </div>
                  {/* CONTRASEÑA */}
                  <div className='form-group mt-3'>
                    <label>Contraseña <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <span className='input-group-text'><i className='bi bi-lock' /></span><input ID='txtPassword' type={'Password'.replace('Password', (!passwordEye ? 'text' : 'Password'))} value={password} onChange={(e) => setValuePassword(e.target.value)} className='form-control' /><span className='input-group-text'><i class={'bi bi-eye' + (passwordEye ? '-slash' : '')} onClick={() => setValuePasswordEye(!passwordEye)} /></span> <h2><i class={'bi bi' + (validatePassword() ? '-check text-success' : '-x text-danger')} /></h2>
                    </div>
                    {/* SEGURIDAD DE LA CONTRASEÑA */}
                    <div id='strengthMessage' />
                  </div>
                  {/* CONFIRMAR CONTRASEÑA */}
                  <div className='form-group mt-3'>
                    <label>Confirmar contraseña <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <span className='input-group-text'><i className='bi bi-lock-fill' /></span><input ID='txtPassword' type={'Password' + (confirmPasswordEye ? '' : 'text')} value={confirmPassword} onChange={(e) => setValueConfirmPassword(e.target.value)} className='form-control' /><span className='input-group-text'><i class={'bi bi-eye' + (confirmPasswordEye ? '-slash' : '')} onClick={() => setValueConfirmPasswordEye(!confirmPasswordEye)} /></span><h2><i class={'bi bi' + (validateConfirmPassword() ? '-check text-success' : '-x text-danger')} /></h2>
                    </div>
                  </div>
                  {/* DIRECCION */}
                  <div className='form-group mt-3'>
                    <label>Direccion</label>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'><i className='bi bi-house' /></span>
                      </div>
                      <input id='txtDireccion' type='text' className='form-control' />
                    </div>
                  </div>
                  {/* TELEFONO */}
                  <div className='form-group mt-3'>
                    <label>Teléfono</label>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'><i className='bi bi-telephone' /></span>
                      </div>
                      <input id='txtTelefono' type='number' className='form-control' />
                    </div>
                  </div>
                  {/* BOTON ENVIAR */}
                  <div className='d-grid gap-2 mt-5'>
                    <button
                      type='submit' disabled={!validate()} className='btn btn-primary' onClick={() => {
                        new bootstrap.Modal(document.getElementById('exampleModal')).show();
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
