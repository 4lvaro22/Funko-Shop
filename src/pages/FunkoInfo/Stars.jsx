import { useState } from 'react';

export const Stars = ({ oldRating }) => {
  const [rating, setRating] = useState(oldRating ?? 0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => { if (oldRating === undefined) setRating(index); }}
            onMouseEnter={() => { if (oldRating === undefined) setHover(index); }}
            onMouseLeave={() => { if (oldRating === undefined) setHover(rating); }}
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
