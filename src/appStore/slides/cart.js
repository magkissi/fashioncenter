import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartItemCount: [],
  cartItemTotal: 0,
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
    deleteProduct: (state, action) => {
      // let prod = state.products[action.payload];
    },
    totalCartItems: (state) => {
      const totalCount = state.products.map((product) => product.quantity);
      state.cartItemCount = totalCount;
    },
  },
});

export const {
  addToCart,
  incProductQty,
  decProductQty,
  deleteProduct,
  totalCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
