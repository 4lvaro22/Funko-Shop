
import { useState } from 'react';
import Input from './Input';

const Data = ({ usuario, updateUsuario }) => {
  function update (value, key) {
    const newUsuario = { ...usuario, [key]: value };
    updateUsuario(newUsuario);
  }

  console.log(usuario);

  return (
    <>
      <div id='d'>
        <h3>
          Datos de {usuario.name}
        </h3>
        <hr className='bg-danger border-2 border-top' />

        <div className='grid gap-3 row-gap-3 '>

          <Input label='Nombre' name='name' type='text' value={usuario.name} onChange={(e) => { update(e.target.value, 'name'); }} />
          <Input label='Apellido' name='surname' type='text' value={usuario.surname} onChange={(e) => { update(e.target.value, 'surname'); }} />

          <hr className='bg-danger border-2 border-top' />

          <Input label='Correo' name='email' type='password' value={usuario.email} onChange={(e) => { update(e.target.value, 'email'); }} />
          <Input label='Contraseña' name='password' type='password' value={usuario.password} onChange={(e) => { update(e.target.value, 'password'); }} />

          <div className='row'>
            <div className='col-lg-9 col-md-6 col-sm-4' />
            <input
              value='Guardar' name='save' type='button'
              className='btn btn-success col-lg-2 col-md-3 col-sm-4 '
            />
            <div className='col-lg-auto col-md-4 col-sm-4' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
