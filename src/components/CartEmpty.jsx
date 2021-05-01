import React from 'react';

const CartEmpty = ({ goBack }) => {
  return (
    <button className="add-cart" onClick={goBack} className="empty">
      <h2 className="">
        Cart is empty... <br /> Go to add products!!!
      </h2>
    </button>
  );
};

export default CartEmpty;
