import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class WatchStop extends React.Component {
  render() {
    const onSuccess = payment => {
      console.log('The payment was successful', payment);
      this.props.clearCart();
      this.props.history.push('/');
    }

    const onCancel = data => {
      console.log('The payment was cancelled', data);
    }

    const onError = err => {
      console.log('Error', err);
    }

    let env = 'sandbox';
    let currency = 'GBP';
    // let total = 1;

    const client = {
      sandbox: process.env.REACT_APP_APP_ID,
      production: 'PRODUCTION-APP-ID'
    }

    return (
      <PaypalExpressBtn 
        env={env} 
        client={client} 
        currency={currency} 
        total={this.props.total} 
        onError={onError} 
        onSuccess={onSuccess} 
        onCancel={onCancel} 
      />
    );
  }
}