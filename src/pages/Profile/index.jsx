import { useState, useEffect, useRef } from 'react';
import Data from './Data';
import { PaymentSection } from './Payments';
import { Password } from './Password';
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
  const [page, setPage] = useState('personal');
  const [usuario, setUsuario] = useState(user);
  const navigate = useNavigate();
  const update = useRef();

  useEffect(() => {
    if (update && update.current) { update.current.focus(); }
  }, [page]);

  useEffect(() => {
    document.title = 'Perfil - FunkoShop';
  }, []);

  return (
    <>
      <div id='profile__header' className='m-4 p-3 bg-light shadow-sm'>
        <div className='row justify-center'>
          <div className='col-2'>
            <img
              src={usuario.img}
              width='100px'
              height='100px'
              className='rounded-5 float-start'
              alt='Foto de perfil'
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
            className='nav flex-column m-2 me-3 bg-light shadow-sm gap-2 p-3 col-sm-4 col-md-3 col-lg-2'
            id='v-pills-tab'
            role='tablist'
            aria-orientation='vertical'
            aria-busy='true'
          >
            <button
              className={'btn ' + getButtonClass('personal', page)}
              type='button'
              onClick={() => setPage('personal')}
            >
              Datos Personales
            </button>
            <button
              className={'btn ' + getButtonClass('password', page)}
              type='button'
              onClick={() => setPage('password')}
            >
              Cambiar Contraseña
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
          <div className='p-3 bg-light shadow-sm w-50 mx-5 my-2 rounded' id='v-pills-tabContent'>
            {page === 'personal' ? <Data usuario={usuario} updateUsuario={(newUsuario) => setUsuario(newUsuario)} toFocus={update} /> : null}
            {page === 'payments' ? <PaymentSection user={usuario} toFocus={update} /> : null}
            {page === 'password' ? <Password usuario={usuario} updateUsuario={(newUsuario) => setUsuario(newUsuario)} toFocus={update} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
