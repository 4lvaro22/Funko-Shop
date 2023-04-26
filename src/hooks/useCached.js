import { useState } from 'react';

export const useCached = (defValue) => {
  const [cached, setCached] = useState(defValue);
  const [fixedValue, updateFixedValue] = useState(defValue);

  const updateFixed = () => {
    updateFixedValue(cached);
  };

  return [cached, setCached, fixedValue, updateFixed];
};
