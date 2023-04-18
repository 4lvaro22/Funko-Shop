import { useState } from 'react';

export const useStorage = ({ key, def }) => {
  const storedValue = localStorage.getItem(key);
  const value = storedValue === null || storedValue === undefined ? def : JSON.parse(storedValue);

  const [data, setData] = useState(value);

  const set = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };

  return [data, set];
};
