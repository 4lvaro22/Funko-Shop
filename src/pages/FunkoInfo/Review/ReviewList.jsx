import { Review } from './Review';

const ReviewList = ({ reviews, delReview }) => {
  return (
    <div className='row justify-content-center my-5 p-3'>
      <h2 className='text-center'>Opiniones</h2>
      {reviews.map((review) => (
        <Review key={review.id} {...review} delReview={delReview} />
      ))}
    </div>
  );
};

export default ReviewList;
