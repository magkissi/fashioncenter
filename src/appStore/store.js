import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlide";
import cartReducer from "./slides/cart";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { shopApi } from "../api/apiSlice/starterApi";
import { bestSellingItems } from "../api/apiSlice/bestSelling";
import { stockItems } from "../api/apiSlice/stockItems";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [bestSellingItems.reducerPath]: bestSellingItems.reducer,
    [stockItems.reducerPath]: stockItems.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopApi.middleware,
      bestSellingItems.middleware,
      stockItems.middleware
    ),
});

setupListeners(store.dispatch);
