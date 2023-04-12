import Stars from './../Stars';
import Review from './Review';
import { useEffect, useState } from 'react';
import { ReviewForm } from './ReviewForm';
import ReviewList from './ReviewList';

const test = (rate) => {
  return {
    id: 1,
    nombre: 'Fernando Alonso',
    fecha: '33/03/2033',
    title: 'El mejor funko',
    mensaje: 'Es adictivo el 33 funko que me compro.',
    rating: rate
  };
};

export const Reviews = ({ funko }) => {
  const [reviews, setReviews] = useState([test(funko.rating)]);
  const [rating, setRating] = useState('');

  const addReview = (title, review, rate) => {
    const newReview = {
      id: reviews.length + 1,
      nombre: 'Pepe',
      fecha: new Date().toLocaleDateString(),
      title: title,
      mensaje: review,
      rating: rate
    };

    setReviews([...reviews, newReview]);
  };

  const delReview = (id) => {
    const newReviews = reviews.filter((review) => review.id !== id);
    setReviews(newReviews);
  };

  useEffect(() => {
    const result = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    setRating(result.toFixed(2));

    return () => {
      setRating('');
    };
  }, [reviews]);

  return (
    <>
      <div className='text-center mt-5'>
        <h2 className='text-h5 px-4 d-inline white'>
          <hr role='separator' aria-orientation='horizontal' className='my-5 v-divider theme--light' />
          <u>Opiniones sobre Funko {funko.title}</u>
        </h2>
        <div className='my-4'>
          <h4>Puntuación</h4>
          <h1><strong>{rating}/5</strong></h1>
        </div>

      </div>

      <ReviewForm sendReview={addReview} />

      <ReviewList reviews={reviews} delReview={delReview} />
    </>

  );
};

export default Reviews;
