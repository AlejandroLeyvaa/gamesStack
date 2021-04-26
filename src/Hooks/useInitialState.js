import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  function addUser(payload) {
    setState({
      ...state,
      user: Object.assign(state.user, payload),
    });
  };

  function addTocart (payload) {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });

  };

  return{
    state,
    addUser,
    addTocart,
  }

};

export default useInitialState;
