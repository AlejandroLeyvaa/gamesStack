import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import config from '../config';
import Product from '../components/Product';
import CartEmpty from '../components/CartEmpty';
import { PayPalButton } from 'react-paypal-button-v2';
import Modal from '../components/Modal';

const Payment = () => {
  const [modal, setModal] = useState(false);
  const [detailsData, setDetailsData] = useState({});
  const { state, removeItem, addNewOrder } = useContext(AppContext);
  const { cart, total, user } = state;
  const history = useHistory();

  const clientId = config.clientIdPaypal;

  const paypalOptions = {
    clientId,
    intent: 'capture',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        user,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/');
    }
  };

  const hideModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

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
        {cart.length === 0 && <CartEmpty goBack={() => goBack('/')} />}
        {cart.length > 0 && (
          <div className="payment-total">
            <div className="payment-total-desc">
              <h1 className="Section-title">Order details</h1>
              <h2 className='total-title'>Total</h2>
              <h2 className='price'>$ {total} USD</h2>
            </div>
            <PayPalButton
              amount={total}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                setDetailsData(details);
                hideModal();
                // OPTIONAL: Call your server to save the transaction
                return setModal(true);
              }}
              options={{
                clientId,
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
        {modal && (
          <Modal
            message={`Transaction completed by ${detailsData.payer.name.given_name}`}
          />
        )}
      </section>
    </>
  );
};

export default Payment;
