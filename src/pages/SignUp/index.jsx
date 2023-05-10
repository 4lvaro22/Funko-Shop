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
      <div className='d-flex flex-row'>
        <div className='col-lg-5 d-none'>
          <span className='align-middle m-5'><img className='w-75' src={logoFunko} alt='icono Funkoshop' /></span>
        </div>
        <fieldset className='col-lg-5 col-7'>
          <legend>Registrarme</legend>
          <div className='my-2'>
            <label htmlFor='nombre' className='d-md-inline-flex col-12 col-md-3 d-md-inline-flex'>Nombre</label>
            <input autoFocus='' id='nombre' type='text' className='d-md-inline-flex form-control' style={{ width: '40%' }} />
          </div>
          <div className='my-2'>
            <label htmlFor='apellidos' className='d-md-inline-flex col-12 col-md-3 col-form-label'>Apellidos</label>
            <input id='apellidos' type='text' className='d-md-inline-flex form-control' style={{ width: '40%' }} />
          </div>
          <div className='my-2'>
            <label htmlFor='direccion' className='d-md-inline-flex col-12 col-md-3 col-form-label'>Dirección</label>
            <input id='direccion' type='text' className='d-md-inline-flex form-control' style={{ width: '50%' }} />
          </div>
          <div className='my-2'>
            <label htmlFor='email' className='d-md-inline-flex col-12 col-md-3 col-form-label'>Correo Electrónico</label>
            <input id='email' type='text' className='d-md-inline-flex form-control' style={{ width: '40%' }} />
          </div>
          <div className='my-2'>
            <label htmlFor='contrasena' className='d-md-inline-flex col-12 col-md-3 col-form-label'>Contraseña</label>
            <input id='contrasena' type='text' className='d-md-inline-flex form-control' style={{ width: '40%' }} />
          </div>
          <div className='my-2'>
            <label htmlFor='confirmarContrasena' className='d-md-inline-flex col-12 col-md-3 col-form-label'>Confirmar Contraseña</label>
            <input id='confirmarContrasena' type='text' className='d-md-inline-flex form-control' style={{ width: '40%' }} />
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default SignUp;
