import React from "react";
import Navbar from "../components/home/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../app/api/cartSlice";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const remove = (id) => dispatch(removeFromCart(id));

  console.log(cartItem);
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-screen bg-[#0C1844] p-10">
        <div className="bg-[#3b446b] w-full md:w-[60%]  mt-16 p-6 text-gray-200 text-sm">
          {cartItem?.map((product) => (
            <div className="md:flex" key={product._id}>
              <img className=" sm:w-30 sm:h-30" src={product.image} alt="img" />
              <div>
                <h1>{product.name}</h1>
                <h1>name</h1>
                <h1>name</h1>
                <h1>name</h1>
              </div>
              <button onClick={() => remove(product._id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
