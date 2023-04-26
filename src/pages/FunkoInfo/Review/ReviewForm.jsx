import { useState } from 'react';
import { Stars } from '../Stars';

export const ReviewForm = ({ sendReview }) => {
  const [title, setValueTitle] = useState('');
  const [review, setValueReview] = useState('');
  const [rating, setRating] = useState(0);

  const validate = () => {
    return title.length && review.length;
  };

  const updateRating = (rating) => {
    setRating(rating);
  };

  return (
    <fieldset className='border rounded py-3'>
      <legend className='w-auto mx-5 px-5'><h2>-Escribe tu opinión-</h2></legend>
      <form className=''>
        <div className='row my-5'>
          <div className='row my-3'>
            <span className='text-end col-2'>
              <h4><label htmlFor='titulo'>Título:</label></h4>
            </span>
            <span className='col-md-9 mx-2'>
              <input type='text' className='form-control w-25 col-1' id='titulo' onChange={(e) => setValueTitle(e.target.value)} required />
            </span>
          </div>
          <div className='row my-3'>
            <span className='text-end col-md-2 col-4'>
              <h4><label htmlFor='opinion'>Escribe tu opinión:</label></h4>
            </span>
            <span className='col-md-9 mx-2'>
              <textarea type='text' className='form-control w-25 col-1' id='opinion' onChange={(e) => setValueReview(e.target.value)} required />
            </span>
          </div>
          <div className='row my-3'>
            <span className='text-end col-md-2'>
              <h4><label htmlFor='opinion'>Puntuación:</label></h4>
            </span>
            <span className='col-md-4 col-lg-2 col-12 d-flex justify-content-center'>
              <Stars updateRating={updateRating} />
            </span>
          </div>
          <div className='row'>
            <span className='col-4 d-flex justify-content-center'>
              <button disabled={!validate()} onClick={() => { sendReview(title, review, rating); }} className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#botonReview'>Publicar</button>

              <div className='modal fade' id='botonReview' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'><i className='bi bi-check' /> Opinión publicada</h5>
                      <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                    </div>
                    <div className='modal-body'>
                      Su opinión ha sido publicada correctamente.
                    </div>
                    <div className='modal-footer'>
                      <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>

            </span>
          </div>
        </div>
      </form>

    </fieldset>
  );
};
