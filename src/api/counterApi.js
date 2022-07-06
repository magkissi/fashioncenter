import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const counterApi = createApi({
  reducerPath: "counterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getCounterByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetCounterByNameQuery } = counterApi;
