import 'bootstrap-icons/font/bootstrap-icons.css';
import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

const modals = {
  compra: (navigate) => {
    return {
      id: 'botonCompra',
      title: <><i className='bi bi-truck' /> Se ha añadido al carrito correctamente</>,
      footer: (
        <>
          <button type='button' className='btn btn-secondary float-start me-5' data-bs-dismiss='modal'>Seguir comprando</button>
          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#botonCompra').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');

              setTimeout(() => {
                navigate('/Cart');
              }, 500);
            }}
          >Ir al carrito
          </button>
        </>)
    };
  },
  noAccount: (navigate) => {
    return {
      id: 'noAccountModal',
      title: <><i className='bi bi-person-x' /> Para realizar esta acción necesitas tener iniciada sesión.</>,
      footer: (
        <>
          <button
            type='button' className='btn btn-secondary float-start me-5' data-bs-dismiss='modal'
            onClick={() => {
              $('#noAccountModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
              setTimeout(() => {
                navigate('/LogIn');
              }, 500);
            }}
          >Iniciar Sesión
          </button>
          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#noAccountModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
              setTimeout(() => {
                navigate('/SignUp');
              }, 500);
            }}
          >Registrarse
          </button>
        </>)
    };
  },
  registro: (navigate) => {
    return {
      id: 'registroModal',
      title: <><i className='bi bi-check' /> Usted se ha registrado correctamente</>,
      footer: (
        <>
          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#registroModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
              setTimeout(() => {
                navigate('/LogIn');
              }, 500);
            }}
          >Iniciar sesión
          </button>
        </>)
    };
  },
  solicitud: (navigate) => {
    return {
      id: 'solicitudModal',
      title: <><i className='bi bi-check' /> Se ha enviado su solicitud correctamente</>,
      footer: (
        <>

          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#solicitudModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
              setTimeout(() => {
                navigate('/');
              }, 500);
            }}
          >Salir
          </button>
        </>)
    };
  },

  completado: (navigate) => {
    return {
      id: 'completadoModal',
      title: <><i className='bi bi-check' /> Compra completada. Su pedido se esta enviando.</>,
      footer: (
        <>

          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#solicitudModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
              setTimeout(() => {
                navigate('/');
              }, 500);
            }}
          >Salir
          </button>
        </>)
    };
  },

  tarjeta: (navigate) => {
    return {
      id: 'tarjetaModal',
      title: <><i className='bi bi-check' /> Tarjeta actualizada</>,
      footer: (
        <>

          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#tarjetaModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
            }}
          >Cerrar
          </button>
        </>)
    };
  },

  datos: (navigate) => {
    return {
      id: 'datosModal',
      title: <><i className='bi bi-check' /> Datos actualizados</>,
      footer: (
        <>

          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#datosModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
            }}
          >Cerrar
          </button>
        </>)
    };
  },

  contrasena: (navigate) => {
    return {
      id: 'contrasenaModal',
      title: <><i className='bi bi-check' /> Contraseña actualizada</>,
      footer: (
        <>

          <button
            type='button' className='btn btn-success float-end'
            data-dismiss='modal'
            data-backdrop='false'
            onClick={() => {
              $('#contrasenaModal').modal('hide');
              $('.modal-backdrop').remove();
              $(document.body).removeClass('modal-open');
            }}
          >Cerrar
          </button>
        </>)
    };
  }
};

export const SkeletonModal = ({ id, title, footer }) => {
  const modalId = id ?? 'exampleModal';
  const labelId = useId();

  return (
    <div className='modal fade modal-show' id={modalId} role='dialog' tabIndex='-1' aria-labelledby={modalId + 'Label'} aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <p className='modal-title fs-5' id={modalId + 'Label' + labelId}>{title}</p>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-footer mx-auto'>
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export const useModal = ({ type }) => {
  const navigate = useNavigate();
  const { id, title, footer } = modals[type](navigate);
  const customId = useId();

  const openModal = () => {
    $(`#${id}`).modal('show');
  };

  return [<SkeletonModal key={`${id}-${customId}`} id={id} title={title} footer={footer} />, openModal];
};
