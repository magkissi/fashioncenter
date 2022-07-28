import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  // cartItemCount: 0,
  // cartItemTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    incProductQty: (state, action) => {
      let prodQty = state.products[action.payload].quantity;

      state.products[action.payload].quantity = prodQty + 1;
    },
    decProductQty: (state, action) => {
      let prodQty = state.products[action.payload].quantity;

      state.products[action.payload].quantity = prodQty - 1;
    },
  },
});

export const totalCartItems = createSelector(
  (state) => state.cart.products,
  (items) => items.reduce((total, item) => total + item.quantity, 0)
);
export const deleteCartItem = createSelector(
  (state) => state.cart.products,
  (items, id) => items.filter((item) => item.id != id)
);

export const { addToCart, incProductQty, decProductQty } = cartSlice.actions;

export default cartSlice.reducer;
