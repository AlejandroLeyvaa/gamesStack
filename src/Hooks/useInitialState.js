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

  const handleSum = () => {
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  const addToFavs = (payload) => {
    setState({
      ...state,
      favs: [...state.favs, payload],
    });
  };

  const addTotal = () => {
    const total = handleSum();
    setState({
      ...state,
      total: total
    })
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    });
  };

  const removeItem = (payload, indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((items, currentIndex) => currentIndex !== indexToRemove),
      total: state.total - payload.price,
    });
  };

  return{
    state,
    addUser,
    addTocart,
    addNewOrder,
    addToFavs,
    addTotal,
    removeItem,
  }

};

export default useInitialState;
