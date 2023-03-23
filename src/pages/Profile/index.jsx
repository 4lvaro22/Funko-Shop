import { useState } from 'react';
import Data from './Data';
import { PaymentSection } from './Payments';

const getButtonClass = (page, currentPage) => {
  return page === currentPage ? 'btn-primary' : 'btn-secondary';
};

export const Profile = ({
  user
  //     : {
  //     name,
  //     img,
  //     email,
  //     card: {
  //         number,
  //         exp,
  //         cvv
  //     }
  // }
}) => {
  const [page, setPage] = useState('payments');

  return (
    <>
      <div id='profile__header' className='m-4 p-3 bg-light'>
        <div className='row justify-center'>
          <div className='col-2'>
            <img
              src={user.img}
              width='75px'
              height='75px'
              className='rounded-5 float-start'
            />
          </div>
          <div className='col-10 align-self-center'>
            <h2>{user.name}</h2>
          </div>
        </div>
      </div>

      <div className='row justify-center m-2'>
        <div className='d-flex align-items-start'>
          <div
            className='nav flex-column m-2 me-3 bg-light gap-2 p-3 col-sm-4 col-md-3 col-lg-2'
            id='v-pills-tab'
            role='tablist'
            aria-orientation='vertical'
          >
            <button
              className={'btn ' + getButtonClass('personal', page)}
              type='button'
              onClick={() => setPage('personal')}
            >
              Datos Personales
            </button>
            <button
              className={'btn ' + getButtonClass('payments', page)}
              type='button'
              onClick={() => setPage('payments')}
            >
              <i className='bi bi-credit-card' />{' '}
              {' Métodos de pago '}
            </button>
          </div>
          <div className='p-3 bg-light w-50 mx-5 my-2 rounded' id='v-pills-tabContent'>
            {page === 'personal' ? <Data user={user} /> : null}
            {page === 'payments' ? <PaymentSection user={user} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
