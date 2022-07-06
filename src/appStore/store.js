import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlide";

import { setupListeners } from "@reduxjs/toolkit/query/react";
import { pokemonApi } from "../api/apiSlice/starterApi";
import { counterApi } from "../api/counterApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, counterApi.middleware),
});

setupListeners(store.dispatch);
