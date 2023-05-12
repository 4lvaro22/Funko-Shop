import Stars from '../Stars';

export const Review = ({ id, nombre, fecha, title, mensaje, rating, delReview }) => {
  return (
    <>
      <div className='shadow-sm row rounded border p-2 gy-1'>
        <div className='col-md-2 col-12'>
          <p className='mb-0'><strong>{nombre}</strong></p>
          <p className='text-secondary'>{fecha}</p>
        </div>

        <div className='col-md-8 col-12 row'>
          <Stars oldRating={rating} />
          <div className='mt-1'>
            <p className='text-left mb-0 fs-4'><strong>{title}</strong></p>
            <p className='text-left'>{mensaje}</p>
          </div>
        </div>

        <div className='col-md-2 d-flex justify-content-center'>
          {id !== 1 && <button onClick={() => { delReview(id); }} className='btn btn-danger btn-sm float-end mt-auto'>Eliminar</button>}
        </div>

      </div>

    </>

  );
};

export default Review;
