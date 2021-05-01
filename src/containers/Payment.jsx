import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import config from '../config';

const Payment = () => {
  const { state, removeItem, addNewOrder } = useContext(AppContext);
  const { cart, total, user } = state;
  const history = useHistory();

  // const handlePaymentSuccess = (data) => {
  //   if (data.status === 'COMPLETED') {
  //     const newOrder = {
  //       user,
  //       product: cart,
  //       payment: data,
  //     };
  //     addNewOrder(newOrder);
  //     history.push('/checkout/success');
  //   }
  // };

  const handleRemove = (item, index) => () => {
    removeItem(item, index);
  };

  const goTo = (route) => () => {
    history.push(route);
  };

  return (
    <>
      <section className="payment">
        <h2 className="Section-title">Payment</h2>
        {cart.length === 0 && (
          <button
            className='add-cart'
            onClick={goTo('/')}
            className="empty"
          >
            <h2 className="">
              Cart is empty... <br /> Go to add products!!!
            </h2>
          </button>
        )}
        {cart.length > 0 && (
          <div className="payment-total">
            <h2>Total: $ {total} USD</h2>
            {/* <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={state.total}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          /> */}
          </div>
        )}
        <div className="payment-games">
          {cart.map((item, index) => (
            <div className="payment-item" key={Math.random()}>
              <figure>
                <img src={item.cover} alt={item.name} />
              </figure>
              <div>
                <h2>{item.name}</h2>
              </div>
              <div>
                <button className='delete' onClick={handleRemove(item, index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Payment;