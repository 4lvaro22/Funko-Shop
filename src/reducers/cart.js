export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  SET_TO_CART: 'SET_TO_CART',
  CLEAR_CART: 'CLEAR_CART'
};

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id, quantity } = action.payload;
    const productInCartIndex = state.findIndex(item => item.id === id);

    if (productInCartIndex >= 0) {
      let newAmount = state[productInCartIndex].quantity + quantity;
      if (newAmount > 10) newAmount = 10;

      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: newAmount },
        ...state.slice(productInCartIndex + 1)
      ];

      updateLocalStorage(newState);
      return newState;
    }

    let newAmount = quantity;
    if (newAmount > 10) newAmount = 10;

    const newState = [
      ...state,
      {
        id,
        quantity: newAmount
      }
    ];

    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;

    const newState = state.filter(item => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.SET_TO_CART]: (state, action) => {
    const { id, quantity } = action.payload;
    const productInCartIndex = state.findIndex(item => item.id === id);

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity },
        ...state.slice(productInCartIndex + 1)
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        id,
        quantity: quantity
      }
    ];

    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  }
};

export const cartReducer = (_, action) => {
  const { type: actionType } = action;
  const copyState = cartInitialState;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(copyState, action) : copyState;
};
