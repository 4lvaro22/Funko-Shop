import { useState } from 'react';
import Data from './Data';
import { PaymentSection } from './Payments';
import { useNavigate } from 'react-router-dom';

const getButtonClass = (page, currentPage) => {
  return page === currentPage ? 'btn-primary' : 'btn-secondary';
};

export const Profile = ({
  user,
  //     : {
  //     name,
  //     img,
  //     email,
  //     password,
  //     card: {
  //         number,
  //         exp,
  //         cvv
  //     }
  // },
  session, setSession
}) => {
  const [page, setPage] = useState('payments');
  const [usuario, setUsuario] = useState(user);
  const navigate = useNavigate();

  return (
    <>
      <div id='profile__header' className='m-4 p-3 bg-light shadow'>
        <div className='row justify-center'>
          <div className='col-2'>
            <img
              src={usuario.img}
              width='100px'
              height='100px'
              className='rounded-5 float-start'
            />
          </div>
          <div className='col-10 align-self-center'>
            <h2>{usuario.name} {usuario.surname}</h2>
          </div>
        </div>
      </div>

      <div className='row justify-center m-2 mb-5'>
        <div className='d-flex align-items-start'>
          <div
            className='nav flex-column m-2 me-3 bg-light shadow gap-2 p-3 col-sm-4 col-md-3 col-lg-2'
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
            <button
              className='btn btn-danger mt-3 mx-auto'
              onClick={() => {
                setSession(false);
                navigate('/');
              }}
            >Cerrar sesión
            </button>
          </div>
          <div className='p-3 bg-light shadow w-50 mx-5 my-2 rounded' id='v-pills-tabContent'>
            {page === 'personal' ? <Data usuario={usuario} updateUsuario={(newUsuario) => setUsuario(newUsuario)} /> : null}
            {page === 'payments' ? <PaymentSection user={usuario} /> : null}

          </div>
        </div>
      </div>
    </>
  );
};
