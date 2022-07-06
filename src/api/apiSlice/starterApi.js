import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006" }),
  endpoints: (builder) => ({
    getShopItems: builder.query({
      query: () => `/catalogue`,
    }),
  }),
});

export const { useGetShopItemsQuery } = shopApi;
