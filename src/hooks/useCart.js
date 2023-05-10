import { useContext } from 'react';
import { CartContext } from '../context/cart.jsx';

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('CartProvider no encontrado');
  }

  return context;
};
