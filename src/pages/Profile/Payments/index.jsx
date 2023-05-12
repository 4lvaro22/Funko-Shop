import 'bootstrap-icons/font/bootstrap-icons.css';
import card from '../../../assets/images/payment/card.png';
import { PaymentForm } from './form';
import { useState } from 'react';

export const PaymentSection = ({ usuario, updateUsuario, toFocus }) => {
  const [form, toggleForm] = useState(false);

  console.log(usuario);

  return (
    <>
      <h3>Información de pago</h3>
      <div className='container'>
        <div className='row bg-white rounded p-1 align-items-center'>
          <img src={card} className='col-2' alt='Tarjeta de pago' />
          <span className='col-4 align-middle '>
            {' '}
            {' '}XXXX-{usuario?.card?.number.substring(4, 16)}
          </span>
        </div>
      </div>

      <button ref={toFocus} className={'btn btn-primary mt-4 ' + (form ? 'visually-hidden' : 'm-2')} onClick={() => toggleForm(!form)}>
        Editar método de pago
      </button>

      {form ? <PaymentForm usuario={usuario} updateUsuario={updateUsuario} toFocus={toFocus} /> : null}
    </>
  );
};
