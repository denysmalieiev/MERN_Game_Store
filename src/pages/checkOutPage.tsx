import {PaymentElement} from '@stripe/react-stripe-js';
import {useAuth} from "../context/authContext" 
const CheckoutForm = () => { 
  const {totalPay} = useAuth()
  return ( 
    <div className="md:bg-gray-100 min-h-screen bg-white flex items-center justify-center">
    <form className="bg-white p-4">
      <PaymentElement />
      <button className="bg-black bg-opacity-75 text-white w-[100%] text-center rounded p-2 mt-6">Pay ${totalPay} </button>
    </form> 
    </div>
  );
};

export default CheckoutForm;