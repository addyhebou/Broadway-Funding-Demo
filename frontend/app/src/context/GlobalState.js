import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  userInputs: { investmentAmount: 0, musicalRevenue: 27620000, points: 0.33 },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addItemToOrder(key, item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: [key, item],
    });
  }
  function removeItemFromOrder(item) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
    });
  }
  function updateGlobalNumbers(key, item) {
    dispatch({
      type: 'UPDATE_NUMBERS',
      payload: [key, item],
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        userInputs: state.userInputs,
        addItemToOrder,
        removeItemFromOrder,
        updateGlobalNumbers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
