
import { useState } from 'react';
import Input from './Input';

export const Password = ({ usuario, updateUsuario }) => {
  const [usuarioEditado, setUsuario] = useState(usuario);

  function update (value, key) {
    const newUsuario = { ...usuarioEditado, [key]: value };
    setUsuario(newUsuario);
  }
  return (
    <>
      <div id='d'>
        <h3>
          Datos de {usuario.name}
        </h3>
        <hr className='bg-danger border-2 border-top' />

        <div className='grid gap-3 row-gap-3 '>

          <Input label='Contraseña actual' name='password' type='password' />

          <hr className='bg-danger border-2 border-top' />

          <Input label='Nueva contraseña' name='password' type='password' onChange={(e) => { update(e.target.value, 'password'); }} />
          <Input label='Repetir nueva contraseña' name='password' type='password' onChange={(e) => { update(e.target.value, 'password'); }} />

          <div className='row'>
            <div className='col-lg-9 col-md-6 col-sm-4' />
            <input
              value='Guardar' name='save' type='button'
              className='btn btn-success col-lg-2 col-md-3 col-sm-4 '
              data-bs-toggle='modal' data-bs-target='#exampleModal'
              onClick={() => {
                updateUsuario(usuarioEditado);
              }}
            />

            <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalLabel'>Datos Guardados</h5>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                  </div>
                  <div className='modal-body'>
                    La contraseña ha sido actualizada correctamente.
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Cerrar</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-auto col-md-4 col-sm-4' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
