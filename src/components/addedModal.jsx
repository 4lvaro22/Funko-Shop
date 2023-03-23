import 'bootstrap-icons/font/bootstrap-icons.css';

export const AddedModal = () => {
  return (
    <div className='modal fade modal-show' id='exampleModal' role='dialog' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'><i className='bi bi-check' /> Producto añadido al Carrito</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
          </div>
          <div className='modal-footer mx-auto'>
            <button type='button' className='btn btn-secondary float-start me-5' data-bs-dismiss='modal'>Seguir comprando</button>
            <button
              type='button' className='btn btn-success float-end'
              onClick={() => {
                $('#exampleModal').modal('hide');
                setTimeout(() => {
                  window.location.href = '/Proyecto-Interfaces-Grupo-H/#/Cart';
                }, 500);
              }}
            >Ir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedModal;
