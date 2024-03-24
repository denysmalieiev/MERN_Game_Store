import { Header } from "../components/header";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Count } from "../components/reusable/gameCard";
import { Cart_card } from "../components/cart/cartCard";

const CartPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Count[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const { setpay } = useAuth();
  const storedCart = localStorage.getItem("cart");
  useEffect(() => {
    let total = 0;
    if (storedCart) {
      JSON.parse(storedCart).forEach((item: Count) => {
        const itemCost = parseFloat(item.cost.replace("$", "")) * item.count;
        total += itemCost;
      });
      setSubtotal(total);
      setData(JSON.parse(storedCart));
    }
  }, [storedCart]);

  const handleCheckout = () => {
    if (data.length < 1) {
      return;
    }
    setpay(subtotal);
    navigate("/payments/checkout");
  };

  return (
    <>
      <Header />
      {data.length > 0 ? (
        <section className='w-screen bg-gray-100 pb-32 md:flex md:flex-row-reverse '>
          <div className='md:w-2/5 md:bg-white md:rounded md:p-2 md:h-fit md:my-4 md:mx-2 md:items-center'>
            <div className='font-bold text-sm text-gray-400 p-2'>
              CART SUMMARY
            </div>
            <div className='flex flex-row justify-between p-2 bg-gray-100 shadowEl shadow-[rgba(0, 0, 0, .2)] '>
              <div className='font-bold text-sm text-[rgba(0, 0, 0, .2)]'>
                subtotal
              </div>
              <div className='font-bold ml-2'>${subtotal}</div>
            </div>
            <div className='font-bold text-sm text-gray-400 p-2'>
              CART({data.length})
            </div>
            <button
              className=' md:bg-purple-500 md:w-[100%] md:p-3 md:m-2 md:rounded md:text-white md:font-bold hidden  md:block '
              onClick={handleCheckout}
            >
              check out (USD {subtotal})
            </button>
          </div>

          <section className='md:w-3/5'>
            <Cart_card data={data} setData={setData} />
          </section>

          <div className='w-screen flex items-center justify-center md:hidden'>
            <div className='w-screen flex items-center justify-center md:hidden'>
              <button
                className=' bg-purple-500 w-64 p-3 mt-3 rounded text-white font-bold md:hidden '
                onClick={handleCheckout}
              >
                check out
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div className='font-extralight text-red-500 text-4xl h-screen mt-10 ml-8 '>
          Cart is Empty!!!{" "}
        </div>
      )}
    </>
  );
};

export default CartPage;
