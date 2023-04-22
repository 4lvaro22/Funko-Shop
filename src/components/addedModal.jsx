import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate, Link } from 'react-router-dom';

export const AddedModal = (props) => {
  const modalId = props.id ?? 'exampleModal';
  const navigate = useNavigate();

  return (
    <div className='modal fade modal-show' id={modalId} role='dialog' tabIndex='-1' aria-labelledby={modalId + 'Label'} aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={modalId + 'Label'}> {(props.value !== '1') ? <i className={'bi bi-' + (props.id === 'botonCompra' ? 'truck' : 'check')} /> : ''}  {props.alert}</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-footer mx-auto'>
            {((props.value === '0') ? <button type='button' className='btn btn-secondary float-start me-5' data-bs-dismiss='modal'>Seguir comprando</button> : '')}
            {((props.value === '1') ? <Link to='/SignUp'><button type='button' className='btn btn-secondary float-start me-5' data-bs-dismiss='modal'>Registrarse</button></Link> : '')}

            <button
              type='button' className='btn btn-success float-end'
              data-dismiss='modal'
              data-backdrop='false'
              onClick={() => {
                $('#' + (modalId)).modal('hide');
                $('.modal-backdrop').remove();
                $(document.body).removeClass('modal-open');
                setTimeout(() => {
                  navigate((props.value === '0') ? '/Cart' : (((props.value === '1') ? '/LogIn' : '/')));
                }, 500);
              }}
            >{props.out}

            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedModal;
