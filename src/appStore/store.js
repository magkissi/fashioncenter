import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlide";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { shopApi } from "../api/apiSlice/starterApi";
import { counterApi } from "../api/counterApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [counterApi.reducerPath]: counterApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, counterApi.middleware),
});

setupListeners(store.dispatch);
