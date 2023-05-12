import { useRef, useState } from 'react';
import { Stars } from '../Stars';
import { useModal } from '../../../components/Modal';

export const ReviewForm = ({ sendReview }) => {
  const titleRef = useRef();
  const reviewRef = useRef();
  const [rating, setRating] = useState(0);
  const [reviewModal, openReviewModal] = useModal({ type: 'review' });

  const updateRating = (rating) => {
    setRating(rating);
  };

  return (
    <fieldset className='border rounded py-3'>
      {reviewModal}
      <legend className='w-auto mx-5 px-5'><h2>-Escribe tu opinión-</h2></legend>
      <form onSubmit={(event) => {
        if (titleRef.current.checkValidity() && reviewRef.current.checkValidity()) {
          event.preventDefault();
          sendReview(titleRef.current.value, reviewRef.current.value, rating);
          openReviewModal();
        }
      }}
      >
        <div className='row my-5'>
          <div className='row my-3'>
            <span className='text-end col-2'>
              <h3><label htmlFor='titulo'>Título:</label></h3>
            </span>
            <span className='col-md-9 mx-2'>
              <input ref={titleRef} type='text' className='form-control w-25 col-1' id='titulo' required />
            </span>
          </div>
          <div className='row my-3'>
            <span className='text-end col-md-2 col-4'>
              <h4><label htmlFor='opinion'>Escribe tu opinión:</label></h4>
            </span>
            <span className='col-md-9 mx-2'>
              <textarea ref={reviewRef} type='text' className='form-control w-25 col-1' id='opinion' required />
            </span>
          </div>
          <div className='row my-3'>
            <span className='text-end col-md-2'>
              <h4><label>Puntuación:</label></h4>
            </span>
            <span className='col-md-4 col-lg-2 col-12 d-flex justify-content-center'>
              <Stars updateRating={updateRating} />
            </span>
          </div>
          <div className='row'>
            <span className='col-4 d-flex justify-content-center'>
              <button type='submit' className='btn btn-primary'>Publicar</button>
            </span>
          </div>
        </div>
      </form>

    </fieldset>
  );
};
