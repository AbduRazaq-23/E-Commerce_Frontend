import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let productItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(productItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // removeFromCart
    removeFromCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      if (existingIndex >= 0) {
        state.cartItems.splice(existingIndex, 1);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    // clearCart
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // another one
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
