import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    getCart: (state, action) => {
      return JSON.parse(localStorage.getItem("cart"))
    },
    addToCart: (state, action) => {
      if (!!state) localStorage.setItem("cart", [])
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
        localStorage.setItem("cart", JSON.stringify(state))
      }
      console.log(state)
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    incrementQuantity: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state))
      }
    },
    decrementQuantity: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state[index].quantity -= 1;
        if (state[index].quantity === 0) {
          state.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(state))
        }
      }
    },
    checkoutProduct: (state, action) => {
      return localStorage.removeItem("cart")
    },
  },
});

export const { getCart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, checkoutProduct } = cartSlice.actions;

export default cartSlice.reducer;