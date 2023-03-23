import Stars from './Stars';

export const IndividualReview = () => {
  return (

    <>
      <div className='row border p-4'>
        <div className='col-3'>
          <p><strong>Fernando Alonso</strong></p>
          <p className='text-secondary'>33/03/2033</p>
        </div>

        <div className='col-7 d-flex flex-row justify-content-center row'>
          <Stars oldRating={2} />
          <div className='d-block'><p className='text-center'>Es adictivo el 33 funko que me compro.</p></div>
        </div>
      </div>

    </>

  );
};

export default IndividualReview;
