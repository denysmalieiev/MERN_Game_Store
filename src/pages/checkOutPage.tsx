import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvc: string;
}

interface Errors {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvc?: string;
}

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvc: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = (): boolean => {
    let isValid = true;
    const newErrors: Errors = {};

    // Validate card number (for simplicity, just check if it's not empty)
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
      isValid = false;
    }

    // Validate card holder (for simplicity, just check if it's not empty)
    if (!formData.cardHolder.trim()) {
      newErrors.cardHolder = 'Card holder name is required';
      isValid = false;
    }

    // Validate expiry date (for simplicity, just check if it's not empty)
    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
      isValid = false;
    }

    // Validate CVC (for simplicity, just check if it's not empty)
    if (!formData.cvc.trim()) {
      newErrors.cvc = 'CVC is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (handleValidation()) {
      // Implement checkout logic here
      console.log('Form submitted successfully!');
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-purple-700">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-semibold mb-2 text-gray-800">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500 ${
                errors.cardNumber && 'border-red-500'
              }`}
              placeholder="**** **** **** ****"
              onChange={handleInputChange}
            />
            {errors.cardNumber && <p className="text-sm text-red-500 mt-1">{errors.cardNumber}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="cardHolder" className="block text-sm font-semibold mb-2 text-gray-800">
              Card Holder
            </label>
            <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500 ${
                errors.cardHolder && 'border-red-500'
              }`}
              placeholder="John Doe"
              onChange={handleInputChange}
            />
            {errors.cardHolder && <p className="text-sm text-red-500 mt-1">{errors.cardHolder}</p>}
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiryDate" className="block text-sm font-semibold mb-2 text-gray-800">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500 ${
                  errors.expiryDate && 'border-red-500'
                }`}
                placeholder="MM/YY"
                onChange={handleInputChange}
              />
              {errors.expiryDate && <p className="text-sm text-red-500 mt-1">{errors.expiryDate}</p>}
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvc" className="block text-sm font-semibold mb-2 text-gray-800">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                className={`w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500 ${
                  errors.cvc && 'border-red-500'
                }`}
                placeholder="123"
                onChange={handleInputChange}
              />
              {errors.cvc && <p className="text-sm text-red-500 mt-1">{errors.cvc}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-700 text-white w-full py-2 rounded hover:bg-purple-800 focus:outline-none"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
