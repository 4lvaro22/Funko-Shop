import 'bootstrap-icons/font/bootstrap-icons.css';

export const AddedModal = ({ id, title, footer }) => {
  const modalId = id ?? 'exampleModal';

  return (
    <div className='modal fade modal-show' id={modalId} role='dialog' tabIndex='-1' aria-labelledby={modalId + 'Label'} aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id={modalId + 'Label'}>{title}</h5>
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

// export const CompraModal()

export default AddedModal;
