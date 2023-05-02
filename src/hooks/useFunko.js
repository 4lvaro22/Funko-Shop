import { useState } from 'react';
import { getFunkos } from '../data';

export const useFunko = ({ filter, session }) => {
  const [funkosData, setFunkosData] = useState(getFunkos());

  const updateFunkos = () => {
    let newFunkos = getFunkos();
    if (filter) {
      newFunkos = newFunkos.filter(item => filter(item));
    }

    setFunkosData(newFunkos);
  };

  return [funkosData, updateFunkos];
};
