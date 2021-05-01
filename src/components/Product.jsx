import React from 'react';

const Product = ({image, gameName, price, remove }) => {
  return (
    <div className="payment-item">
      <figure>
        <img src={image} alt={gameName} />
      </figure>
      <div>
        <h2>{gameName}</h2>
      </div>
      <div>
        <h2>$ {price} USD</h2>
      </div>
      <div>
        <button className="delete" onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product;
