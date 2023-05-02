import { useEffect, useState } from 'react';
import './../../assets/styles/stars.css';

export const Stars = ({ oldRating, updateRating }) => {
  const [rating, setRating] = useState(oldRating ?? 0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (updateRating) { updateRating(rating); }

    return () => {
      if (updateRating) { updateRating(0); }
    };
  }, [rating]);

  const updateHover = (index) => {
    if (oldRating === undefined) { setHover(index); }
  };

  const updateRate = (index) => {
    if (oldRating === undefined) {
      if (rating === index) setRating(0);
      else { setRating(index); }
    }
  };

  return (
    <div className='d-flex'>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type='button'
            tabIndex={0}
            aria-labelledby={'Valoración' + { index } + ' de 5'}
            key={index}
            className={(oldRating === undefined) ? 'rating ' : '' + index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => { updateRate(index); }}
            onFocus={() => { updateHover(index); }}
            onKeyDown={(e) => { if (e.key === 'Enter') { updateRate(index); } }}
            onKeyUp={(e) => { if (e.key === 'Enter') { updateRate(rating); } }}
            onMouseEnter={() => { updateHover(index); }}
            onMouseLeave={() => { updateHover(rating); }}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: `${index <= (hover || rating) ? '#000000' : '#000000'}`
            }}
          >
            <i tabIndex={-1} className={(index <= (hover || rating)) ? 'bi bi-star-fill shadow-sm' : 'bi bi-star shadow-sm'} />
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
