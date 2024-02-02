import {PaymentElement} from '@stripe/react-stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const CheckoutForm = () => { 
const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return ( 
<Elements stripe={stripePromise} options={options}>
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form> 
    </Elements>
  );
};

export default CheckoutForm;