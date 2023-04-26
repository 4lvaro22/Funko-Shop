import { useState, useMemo } from 'react';
import { getFunkos } from '../data';
import { Funko } from '../components/funko';

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
    return funkosData.map(item => <Funko key={item.handle} funko={item} session={session} />);
  }, [funkosData, session]);

  return [funkos, updateFunkos];
};
