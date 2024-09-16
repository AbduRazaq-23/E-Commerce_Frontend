import React from "react";
import Navbar from "../components/home/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../app/api/cartSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const remove = (id) => dispatch(removeFromCart(id));

  const totalPrice = cartItem.reduce((acc, cItem) => {
    return acc + cItem.price;
  }, 0);

  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-[#0C1844] p-10 md:flex">
        <div className="bg-[#3b446b] w-full md:w-[80%] rounded-md   mt-16 p-6 text-gray-200 text-sm space-y-4">
          {cartItem?.map((product) => (
            <div
              className="md:flex  p-2 justify-between rounded-md overflow-hidden border"
              key={product._id}
            >
              <div className="md:flex  items-center ">
                <img
                  className="w-full md:w-44 h-44 rounded-md"
                  src={product.image}
                  alt="img"
                />
                <ul className="space-y-3 ml-5">
                  <li className="font-bold text-2xl">{product.name}</li>
                  <li>{product.rating.toFixed(1)}</li>
                  <li>{product.brand}</li>
                  <li>qty:{product.quantity}</li>
                  <button
                    className="border border-gray-400 rounded-md px-1 hover:scale-105"
                    onClick={() => remove(product._id)}
                  >
                    delete from cart
                  </button>
                </ul>
              </div>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
        {/* checkout  */}
        <div className="bg-[#3b446b] mt-16  m-auto rounded-md p-6 text-gray-200 space-y-6">
          <p>subTotal: ${totalPrice}</p>
          <button className="w-full bg-[#0C1844] hover:scale-105 rounded-md px-2">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
