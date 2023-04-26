import { useState, useMemo } from 'react';
import { getFunkos } from '../data';
import { FunkoItem } from '../pages/Home/FunkoItem';

export const useFunko = ({ filter, session }) => {
  const [funkosData, setFunkosData] = useState(getFunkos());

  const updateFunkos = () => {
    let newFunkos = getFunkos();
    if (filter) {
      newFunkos = newFunkos.filter(item => filter(item));
    }

    setFunkosData(newFunkos);
  };

  const funkos = useMemo(() => {
    return funkosData.map(item => <FunkoItem key={item.handle} funko={item} session={session} />);
  }, [funkosData, session]);

  return [funkos, updateFunkos];
};
