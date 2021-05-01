import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import config from '../config';
import Product from '../components/Product';
import CartEmpty from '../components/CartEmpty';
import { PayPalButton } from "react-paypal-button-v2";

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

  const handleRemove = (item, index) => {
    removeItem(item, index);
  };

  const goBack = (route) => {
    console.log(route);
    history.push(route);
  };

  return (
    <>
      <section className="payment">
        <h2 className="Section-title">Order details</h2>
        {cart.length === 0 && <CartEmpty goBack={() => goBack('/')} />}
        {cart.length > 0 && (
          <div className="payment-total">
            <h2>Total</h2>
            <h2>$ {total} USD</h2>
            <PayPalButton
              amount={total}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  'Transaction completed by ' + details.payer.name.given_name
                );

                // OPTIONAL: Call your server to save the transaction
                return fetch('/paypal-transaction-complete', {
                  method: 'post',
                  body: JSON.stringify({
                    orderID: data.orderID,
                  }),
                });
              }}
            />
          </div>
        )}
        <div className="payment-games">
          {cart.map((item, index) => (
            <Product
              key={Math.random()}
              image={item.cover}
              gameName={item.name}
              price={item.price}
              remove={() => handleRemove(item, index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Payment;
