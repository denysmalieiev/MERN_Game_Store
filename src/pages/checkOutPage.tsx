import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  return ( 
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <form className="bg-white p-4">
      <PaymentElement />
      <button>Submit</button>
    </form> 
    </div>
  );
};

export default CheckoutForm;