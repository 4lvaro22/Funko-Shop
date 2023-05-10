import { useReducer, createContext } from 'react';
import { SESSION_ACTION_TYPES, sessionInitialState, sessionReducer } from '../reducers/session';

export const SessionContext = createContext();

function useSessionReducer () {
  const [state, dispatch] = useReducer(sessionReducer, sessionInitialState);

  const logIn = (user) => dispatch({ type: SESSION_ACTION_TYPES.LOG_IN, payload: user });

  const logOut = () => dispatch({ type: SESSION_ACTION_TYPES.LOG_OUT });

  const updateUser = (user) => dispatch({ type: SESSION_ACTION_TYPES.UPDATE_DATA, payload: user });

  return { state, logIn, logOut, updateUser };
}

export function SessionProvider ({ children }) {
  const { state, logIn, logOut, updateUser } = useSessionReducer();

  return (
    <SessionContext.Provider value={{
      active: state.active,
      user: state.user || {},
      logIn,
      logOut,
      updateUser
    }}
    >
      {children}
    </SessionContext.Provider>
  );
}
