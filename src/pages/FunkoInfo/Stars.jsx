import { useEffect, useState } from 'react';

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
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => { updateRate(index); }}
            onMouseEnter={() => { updateHover(index); }}
            onMouseLeave={() => { updateHover(rating); }}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: `${index <= (hover || rating) ? '#FFE400' : '#ccc'}`
            }}
          >
            <span className='star'><i className={index <= (hover || rating) ? 'bi bi-star-fill shadow-sm' : 'bi bi-star shadow-sm'} /></span>
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
