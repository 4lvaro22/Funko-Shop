
import { useState } from 'react';
import Input from './Input';
import { useModal } from '../../../components/Modal';

export const Password = ({ usuario, updateUsuario, toFocus }) => {
  const [usuarioEditado, setUsuario] = useState(usuario);
  const [contrasenaModal, showTarjetaActualizada] = useModal({ type: 'contrasena' });

  function update (value, key) {
    const newUsuario = { ...usuarioEditado, [key]: value };
    setUsuario(newUsuario);
  }
  return (
    <>
      <div id='d'>
        {contrasenaModal}
        <h3>
          Datos de {usuario.name}
        </h3>
        <hr className='bg-danger border-2 border-top' />

        <div className='grid gap-3 row-gap-3 '>

          <Input toFocus={toFocus} label='Contraseña actual' name='password' type='password' />

          <hr className='bg-danger border-2 border-top' />

          <Input label='Nueva contraseña' name='password' type='password' onChange={(e) => { update(e.target.value, 'password'); }} />
          <Input label='Repetir nueva contraseña' name='password' type='password' onChange={(e) => { update(e.target.value, 'password'); }} />

          <div className='row'>
            <div className='col-lg-9 col-md-6 col-sm-4' />
            <input
              value='Guardar' name='save' type='button'
              className='btn btn-success col-lg-2 col-md-3 col-sm-4 '
              onClick={() => {
                updateUsuario(usuarioEditado);
                showTarjetaActualizada();
              }}
            />

            <div className='col-lg-auto col-md-4 col-sm-4' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
