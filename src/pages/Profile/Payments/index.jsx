import 'bootstrap-icons/font/bootstrap-icons.css';
import card from '../../../assets/images/payment/card.png';
import { PaymentForm } from './form';
import { useState } from 'react';

export const PaymentSection = ({ user }) => {
  const [form, toggleForm] = useState(false);

  return (
    <>
      <h3>Información de pago</h3>
      <div className='container'>
        <div className='row bg-white rounded p-1 align-items-center'>
          <img src={card} className='col-2' />
          <span className='col-4 align-middle '>
            {' '}
            {' '}...{user?.card?.number.substring(12, 16)}
          </span>
        </div>
      </div>

      <button className={'btn btn-primary mt-4 ' + (form ? 'visually-hidden' : 'm-2')} onClick={() => toggleForm(!form)}>
        Cambiar método de pago
      </button>

      {form ? <PaymentForm /> : null}
    </>
  );
};
