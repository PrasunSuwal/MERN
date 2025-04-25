import React from "react";
import {
  PayPalButtons,
  PayPalScriptProvider
} from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AXNkk9j4xuqE41Moh4HM0IXx563jVhUNGKGZpwpF_iTPK5TqnLXPH4xnLIGvAGnAE9LJHLc-kfn01nCw",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
