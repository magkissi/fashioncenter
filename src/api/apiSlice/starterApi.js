import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/catalogue`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
