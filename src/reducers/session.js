export const sessionInitialState = JSON.parse(window.localStorage.getItem('session')) || { active: false };

const testUser = {
  name: 'Test User',
  surname: 'apellido',
  img: 'https://cdn-icons-png.flaticon.com/512/17/17004.png',
  email: 'test@gmail.com',
  password: '1234',
  card: {
    number: '1234567890123456',
    exp: '12/24',
    cvv: '123'
  }
};

export const SESSION_ACTION_TYPES = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  UPDATE_DATA: 'UPDATE_DATA'
};

export const updateLocalStorage = state => {
  window.localStorage.setItem('session', JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [SESSION_ACTION_TYPES.LOG_IN]: (_, action) => {
    const { email, password } = action.payload;

    const newState = {
      active: true,
      user: {
        ...testUser,
        email,
        password
      }
    };

    updateLocalStorage(newState);
    return newState;
  },
  [SESSION_ACTION_TYPES.LOG_OUT]: (_, _2) => {
    const newState = { active: false };
    updateLocalStorage(newState);
    return newState;
  },
  [SESSION_ACTION_TYPES.UPDATE_DATA]: (state, action) => {
    if (!state.active) { return state; }

    const newState = {
      active: true,
      user: action.payload
    };

    updateLocalStorage(newState);
    return newState;
  }
};

export const sessionReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
