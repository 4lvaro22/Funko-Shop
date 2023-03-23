import logoFunko from '../../assets/images/funkoIcono.png';
import '../../assets/js/CheckPassword.js';
import '../../assets/styles/CheckPassword.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const SignUp = () => {
  return (
    <>
      <div className='container my-5'>
        <div className='row justify-content-md-center'>
          <div className='col col-lg-5'>
            <span className='align-middle'><img className='w-100' src={logoFunko} /></span>
          </div>
          <div className='col col-lg-5'>
            <div className='Auth-form-container'>
              <form className='Auth-form'>
                <div className='Auth-form-content'>
                  <h2 className='Auth-form-title'>Registrarme</h2>
                  {/* NOMBRE */}
                  <div className='form-group mt-3'>
                    <label>Nombre <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <input id='txtNombre' type='text' className='form-control' required />
                    </div>
                  </div>
                  {/* APELLIDO */}
                  <div className='form-group mt-3'>
                    <label>Apellido <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <input id='txtApellido' type='text' className='form-control' required />
                    </div>
                  </div>
                  {/* CORREO ELECTRONICO */}
                  <div className='form-group mt-3'>
                    <label>Correo Electrónico <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'><i className='bi bi-envelope-at' /></span>
                      </div>
                      <input id='txtEmail' type='email' className='form-control' required />
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
                      <input id='txtTelefono' type='tel' className='form-control' />
                    </div>
                  </div>
                  {/* CONTRASEÑA */}
                  <div className='form-group mt-3'>
                    <label>Password <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'><i className='bi bi-lock' /></span>
                      </div>
                      <input ID='txtPassword' type='Password' className='form-control' />
                    </div>
                    {/* SEGURIDAD DE LA CONTRASEÑA */}
                    <div id='strengthMessage' />
                  </div>
                  {/* CONFIRMAR CONTRASEÑA */}
                  <div className='form-group mt-3'>
                    <label>Password <span style={{ color: 'red' }}>*</span></label>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <span className='input-group-text'><i className='bi bi-lock-fill' /></span>
                      </div>
                      <input ID='txtPassword' type='Password' className='form-control' />
                    </div>
                  </div>
                  {/* BOTON ENVIAR */}
                  <div className='d-grid gap-2 mt-5'>
                    <button type='submit' className='btn btn-primary'>
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
