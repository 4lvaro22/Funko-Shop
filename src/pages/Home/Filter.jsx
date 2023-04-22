import { useState } from 'react';

export const Filter = ({ id, title, updateFilter }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    updateFilter(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-outline-secondary btn-sm ${active ? 'active' : ''}`}
    >
      {title}
    </button>
  );
};
