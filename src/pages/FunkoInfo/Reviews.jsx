import Stars from './Stars';
import IndividualReview from './IndividualReview';
import { useState } from 'react';

export const Reviews = ({ funko }) => {
  const [title, setValueTitle] = useState('');
  const [review, setValueReview] = useState('');

  const validate = () => {
    return title.length && review.length;
  };

  return (
    <>
      <div className='text-center mt-5'>
        <h2 className='text-h5 px-4 d-inline white'>
          <hr role='separator' aria-orientation='horizontal' className='my-5 v-divider theme--light' />
          <u>Opiniones sobre Funko {funko.title}</u>
        </h2>
        <div className='my-4'>
          <h4>Puntuación</h4>
          <h1><strong>{funko.rating}/5</strong></h1>
        </div>

      </div>

      <div className='row my-5 border p-3'>
        <div className='row my-3'>
          <span className='text-center col-2'>
            <h4><label htmlFor='titulo'>Título:</label></h4>
          </span>
          <span className='w-75 mx-2'>
            <input type='text' className='form-control w-25 mx-2 col-1' id='titulo' onChange={(e) => setValueTitle(e.target.value)} required />
          </span>
        </div>
        <div className='row my-3'>
          <span className='text-center col-2'>
            <h4><label htmlFor='opinion'>Escribe tu opinión:</label></h4>
          </span>
          <span className='w-75 mx-2'>
            <textarea type='text' className='form-control w-25 col-1' id='opinion' onChange={(e) => setValueReview(e.target.value)} required />
          </span>
        </div>
        <div className='row my-3'>
          <span className='text-center col-2'>
            <h4><label htmlFor='opinion'>Puntuación</label></h4>
          </span>
          <span className='col-lg-2 text-center'>
            <Stars />
          </span>
        </div>
        <div className='row'>
          <span className='col-4 d-flex justify-content-center'>
            <button disabled={!validate()} className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#botonReview'>Publicar</button>

            <div className='modal fade' id='botonReview' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
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

      <div className='row my-5 p-3'>
        <IndividualReview />
      </div>
    </>

  );
};

export default Reviews;
