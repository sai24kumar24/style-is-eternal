import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_na7jdVQunn10AaCEQVEhyqwY00O5ANQrHI';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    };

    return (
        <StripeCheckout 
            label= 'Pay now'
            name= 'Style-is-Eternal Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            //image= 'https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;