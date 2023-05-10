import { useContext } from 'react';
import { SessionContext } from '../context/session.jsx';

export const useSession = () => {
  const context = useContext(SessionContext);

  if (context === undefined) {
    throw new Error('SessionProvider no encontrado');
  }

  return context;
};
