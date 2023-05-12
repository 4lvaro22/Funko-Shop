import { useReducer, createContext } from 'react';
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from '../reducers/cart.js';

export const CartContext = createContext();

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState());

  const addToCart = (product, quantity) => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: { ...product, quantity, id: product.handle }
  });

  const setToCart = (product, quantity) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_TO_CART,
      payload: { ...product, quantity, id: product.handle }
    });
  };

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: { ...product, id: product.handle }
  });

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  return { state, addToCart, setToCart, removeFromCart, clearCart };
}

export function CartProvider ({ children }) {
  const { state, addToCart, setToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      setToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  );
}
